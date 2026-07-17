import os
import glob
import json
import time
import unicodedata
import string
from deep_translator import GoogleTranslator
import copy

PROGRESS_FILE = "dictionary_progress.json"

def remove_accents(input_str):
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])

def get_letter_from_name(name):
    clean = remove_accents(name).strip().lower()
    if clean and clean[0] in string.ascii_lowercase:
        return clean[0]
    return 'a' # Fallback

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
    
    for lang in ["es"]: # Process only Spanish as Portuguese is done
        out_dir = es_dir
        translator = GoogleTranslator(source='en', target='es')
        
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
        
        count = 0
        for entry in to_translate:
            count += 1
            print(f"[{lang.upper()}] Translating {count}/{len(to_translate)}: {entry['slug']}")
            
            new_item = copy.deepcopy(entry)
            
            try:
                # Translate name
                translated_name = translator.translate(entry["name"])
                new_item["name"] = translated_name
                
                # Translate definition texts
                if "definitions" in new_item and isinstance(new_item["definitions"], list):
                    for idx, dfn in enumerate(new_item["definitions"]):
                        if "text" in dfn and dfn["text"]:
                            # If text is too long for Google Translate (5000 chars), we might need to split it
                            # But usually dictionary definitions are small enough.
                            translated_text = translator.translate(dfn["text"])
                            new_item["definitions"][idx]["text"] = translated_text
                
                letter = get_letter_from_name(new_item["name"])
                new_item["letter"] = letter
                
                slug = new_item["slug"]
                translated_map[slug] = new_item
                
                letter_file = os.path.join(out_dir, f"{letter}.json")
                
                # We need to load existing data for this letter to not overwrite
                if os.path.exists(letter_file):
                    with open(letter_file, "r", encoding="utf-8") as f:
                        file_data = json.load(f)
                else:
                    file_data = {}
                    
                file_data[slug] = new_item
                
                with open(letter_file, "w", encoding="utf-8") as f:
                    json.dump(file_data, f, indent=2, ensure_ascii=False)
                    
            except Exception as e:
                print(f"Error translating {entry['slug']}: {e}")
                time.sleep(2)
                
            # Optional: sleep slightly to be nice to Google
            # time.sleep(0.1)
            
        print(f"[{lang.upper()}] All entries translated! Building search index...")
        build_search_index(out_dir)

if __name__ == "__main__":
    process_dictionary()
