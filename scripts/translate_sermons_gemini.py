import os
import glob
import time
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("GEMINI_API_KEY not found in .env")
    exit(1)

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel(
    model_name="gemini-2.5-flash",
    system_instruction=(
        "Você é um tradutor teológico profissional. Seu trabalho é traduzir "
        "sermões de Charles Spurgeon do inglês para o português do Brasil. "
        "Preserve absolutamente toda a formatação original do Markdown (títulos, listas, negritos, blockquotes). "
        "O tom deve ser solene, poético, e fiel à teologia e ao estilo vitoriano de Spurgeon. "
        "Devolva EXATAMENTE o texto em Markdown traduzido, sem adicionar blocos de código (```markdown) ao redor."
    )
)

def translate_text(text):
    if not text.strip():
        return text
        
    retries = 4
    for attempt in range(retries):
        try:
            # Sleep to respect 15 RPM free tier limit
            time.sleep(4) 
            response = model.generate_content(text)
            return response.text
        except Exception as e:
            err_msg = str(e).lower()
            if "quota" in err_msg or "429" in err_msg or "too many requests" in err_msg:
                print(f"Rate limit hit. Waiting 60s... (Attempt {attempt+1}/{retries})")
                time.sleep(60)
            else:
                print(f"Exception: {e}")
                time.sleep(10)
    return None

def process_sermons():
    base_en_dir = "chspurgeon-sermons-main"
    base_pt_dir = "chspurgeon-sermons-pt"
    
    en_files = glob.glob(os.path.join(base_en_dir, "volume-*", "sermon-*.md"))
    en_files.sort()
    
    translated_count = 0
    skipped_count = 0
    
    print(f"Found {len(en_files)} English sermons.")
    
    for en_file in en_files:
        rel_path = os.path.relpath(en_file, base_en_dir)
        pt_file = os.path.join(base_pt_dir, rel_path)
        
        if os.path.exists(pt_file):
            skipped_count += 1
            continue
            
        print(f"Translating: {rel_path}...")
        
        try:
            with open(en_file, "r", encoding="utf-8") as f:
                content = f.read()
                
            translated_body = translate_text(content)
            
            if not translated_body:
                print(f"Failed to translate {en_file}. Skipping.")
                continue
                
            if translated_body.startswith("```markdown"):
                translated_body = translated_body[11:]
            if translated_body.startswith("```"):
                translated_body = translated_body[3:]
            if translated_body.endswith("```"):
                translated_body = translated_body[:-3]
                
            translated_body = translated_body.strip() + "\n"
                
            os.makedirs(os.path.dirname(pt_file), exist_ok=True)
            
            with open(pt_file, "w", encoding="utf-8") as f:
                f.write(translated_body)
                
            translated_count += 1
            print(f"Successfully translated {rel_path}. Total this session: {translated_count}")
            
        except Exception as e:
            print(f"Error processing {en_file}: {e}")

    print(f"\nDone! Translated {translated_count} new sermons. (Skipped {skipped_count} existing)")

if __name__ == "__main__":
    process_sermons()
