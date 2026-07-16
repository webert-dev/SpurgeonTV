import os
import glob
import re
import time
import requests
from dotenv import load_dotenv

load_dotenv()

DEEPL_API_KEY = os.getenv("DEEPL_API_KEY")
if not DEEPL_API_KEY:
    print("DEEPL_API_KEY not found in .env")
    exit(1)

if DEEPL_API_KEY.endswith(":fx"):
    API_URL = "https://api-free.deepl.com/v2/translate"
else:
    API_URL = "https://api.deepl.com/v2/translate"

def translate_text(text, target_lang="PT-BR"):
    if not text.strip():
        return text
        
    headers = {
        "Authorization": f"DeepL-Auth-Key {DEEPL_API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "text": [text],
        "target_lang": target_lang
    }
    
    retries = 3
    for attempt in range(retries):
        try:
            response = requests.post(API_URL, headers=headers, json=payload)
            if response.status_code == 200:
                return response.json()["translations"][0]["text"]
            elif response.status_code == 429:
                print("Rate limit reached. Waiting 10s...")
                time.sleep(10)
            elif response.status_code == 456:
                print("Quota exceeded! DeepL API limit reached.")
                exit(0)
            else:
                print(f"Error {response.status_code}: {response.text}")
                return None
        except Exception as e:
            print(f"Exception: {e}")
            time.sleep(5)
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
