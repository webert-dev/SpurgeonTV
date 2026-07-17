import os
import glob
import json
import time
import unicodedata
import string
import requests
import copy

DEEPSEEK_API_KEY = "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"

sys_inst_pt = "Você é um tradutor teológico profissional. Seu trabalho é receber uma lista de verbetes de dicionário em JSON e retornar a MESMA lista em JSON, traduzindo apenas os campos 'name' e o campo 'text' (dentro de 'definitions') para o português do Brasil. Deixe o campo 'slug', 'scripture_refs', 'source' e 'sources' perfeitamente intactos. Retorne APENAS um array JSON válido."
sys_inst_es = "Eres un traductor teológico profesional. Tu trabajo es recibir una lista de entradas de diccionario en JSON y devolver la MISMA lista en JSON, traduciendo solo los campos 'name' y el campo 'text' (dentro de 'definitions') al español. Deja los campos 'slug', 'scripture_refs', 'source' y 'sources' perfectamente intactos. Devuelve SOLO un array JSON válido sin bloques markdown."

BATCH_SIZE = 15
PROGRESS_FILE = "dictionary_progress.json"

def remove_accents(input_str):
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])

def get_letter_from_name(name):
    clean = remove_accents(name).strip().lower()
    if clean and clean[0] in string.ascii_lowercase:
        return clean[0]
    return 'a' # Fallback

def translate_batch(batch, lang="pt"):
    instruction = sys_inst_pt if lang == "pt" else sys_inst_es
    
    text = json.dumps(batch, ensure_ascii=False)
    
    models = ["openai/gpt-4o-mini", "openai/gpt-4o"]
    
    headers = {
        "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
        "Content-Type": "application/json"
    }
    
    for model in models:
        data = {
            "model": model,
            "messages": [
                {"role": "system", "content": instruction},
                {"role": "user", "content": text}
            ],
            "temperature": 0.0,
            "response_format": {"type": "json_object"}
        }
        
        retries = 3
        for attempt in range(retries):
            try:
                time.sleep(0.5) # Slight rate limit protection
                response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=data, timeout=60)
                
                if response.status_code != 200:
                    if response.status_code == 429:
                        print(f"429 Rate limit on {model}. Waiting 20s...")
                        time.sleep(20)
                        continue
                    # If json format is not supported, it might fail. Let's try without it
                    if "json_object" in response.text:
                        data.pop("response_format", None)
                        raise ValueError(f"Retry without json_object. Code: {response.status_code}")
                    raise ValueError(f"HTTP Error {response.status_code}: {response.text}")
                    
                resp_json = response.json()
                resp_text = resp_json['choices'][0]['message']['content']
                
                if not resp_text:
                    raise ValueError("Empty response from DeepSeek")
                    
                resp_text = resp_text.strip()
                if resp_text.startswith("```json"):
                    resp_text = resp_text[7:]
                if resp_text.startswith("```"):
                    resp_text = resp_text[3:]
                if resp_text.endswith("```"):
                    resp_text = resp_text[:-3]
                    
                # Find the first [ and last ]
                start_idx = resp_text.find('[')
                end_idx = resp_text.rfind(']')
                if start_idx != -1 and end_idx != -1:
                    resp_text = resp_text[start_idx:end_idx+1]
                    
                translated = json.loads(resp_text.strip())
                
                if len(translated) != len(batch):
                    print(f"Warning: Batch length mismatch! Expected {len(batch)}, got {len(translated)}")
                    raise ValueError("Length mismatch")
                    
                return translated
            except Exception as e:
                err_msg = str(e).lower()
                print(f"Exception during translation ({lang}) on model {model}: {e}")
                if "retry without" not in err_msg:
                    time.sleep(5)
    return None

def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {"pt": {}, "es": {}}

def save_progress(progress):
    with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
        json.dump(progress, f, indent=2, ensure_ascii=False)

def build_search_index(out_dir):
    files = glob.glob(os.path.join(out_dir, "*.json"))
    index = []
    for fpath in files:
        if os.path.basename(fpath) in ["_index.json", "search_index.json"]:
            continue
            
        with open(fpath, "r", encoding="utf-8") as f:
            data = json.load(f)
            for slug, entry in data.items():
                index.append({
                    "name": entry["name"],
                    "slug": entry["slug"],
                    "letter": entry.get("letter", get_letter_from_name(entry["name"]))
                })
                
    index_path = os.path.join(out_dir, "search_index.json")
    with open(index_path, "w", encoding="utf-8") as f:
        json.dump(index, f, indent=2, ensure_ascii=False)
    print(f"Generated {index_path} with {len(index)} items.")

def process_dictionary():
    en_dir = os.path.join("public", "data", "dictionary", "en")
    pt_dir = os.path.join("public", "data", "dictionary", "pt")
    es_dir = os.path.join("public", "data", "dictionary", "es")
    
    os.makedirs(pt_dir, exist_ok=True)
    os.makedirs(es_dir, exist_ok=True)
    
    progress = load_progress()
    en_files = glob.glob(os.path.join(en_dir, "*.json"))
    
    all_entries = []
    
    print("Loading English dictionary...")
    for fpath in en_files:
        basename = os.path.basename(fpath)
        if basename in ["_index.json", "search_index.json"]:
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            data = json.load(f)
            for slug, item in data.items():
                all_entries.append(item)
                
    print(f"Loaded {len(all_entries)} total entries.")
    
    for lang in ["pt", "es"]:
        out_dir = pt_dir if lang == "pt" else es_dir
        
        translated_map = {}
        
        out_files = glob.glob(os.path.join(out_dir, "*.json"))
        for out_f in out_files:
            if os.path.basename(out_f) in ["_index.json", "search_index.json"]:
                continue
            with open(out_f, "r", encoding="utf-8") as f:
                data = json.load(f)
                for slug, item in data.items():
                    translated_map[slug] = item
                    
        to_translate = []
        for entry in all_entries:
            if entry["slug"] not in translated_map:
                to_translate.append(entry)
                
        print(f"[{lang.upper()}] Found {len(translated_map)} existing translations. {len(to_translate)} remaining.")
        
        for i in range(0, len(to_translate), BATCH_SIZE):
            batch = to_translate[i:i+BATCH_SIZE]
            print(f"[{lang.upper()}] Translating batch {i // BATCH_SIZE + 1} of {len(to_translate) // BATCH_SIZE + 1}...")
            
            result = translate_batch(batch, lang=lang)
            if not result:
                print(f"Fatal error translating batch at index {i}. Skipping this batch.")
                continue
                
            for item in result:
                slug = item.get("slug")
                if not slug: continue
                
                name = item.get("name", "Unknown")
                letter = get_letter_from_name(name)
                item["letter"] = letter
                translated_map[slug] = item
                
                letter_file = os.path.join(out_dir, f"{letter}.json")
                if os.path.exists(letter_file):
                    with open(letter_file, "r", encoding="utf-8") as f:
                        file_data = json.load(f)
                else:
                    file_data = {}
                    
                file_data[slug] = item
                
                with open(letter_file, "w", encoding="utf-8") as f:
                    json.dump(file_data, f, indent=2, ensure_ascii=False)
            
            progress[lang]["last_translated_idx"] = i + len(batch)
            save_progress(progress)
            
        print(f"[{lang.upper()}] All entries translated! Building search index...")
        build_search_index(out_dir)

if __name__ == "__main__":
    process_dictionary()
