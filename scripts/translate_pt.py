import os
import json
import time
from deep_translator import GoogleTranslator, MyMemoryTranslator

# Initialize translators
google_pt = GoogleTranslator(source='en', target='pt') # Actually google uses 'pt' or 'portuguese', let's just use 'pt' for Google, but wait, it failed on google_pt.
mymemory_pt = MyMemoryTranslator(source='en-GB', target='pt-PT')

def translate_text(text):
    if not text or not str(text).strip():
        return text
        
    try:
        # 1. Try Google
        res = google_pt.translate(text)
        time.sleep(0.5)
        return res
    except Exception as e:
        print(f"Google failed ({e}), trying MyMemory...")
        try:
            # 2. Fallback to MyMemory
            res = mymemory_pt.translate(text)
            time.sleep(1)
            return res
        except Exception as e2:
            print(f"MyMemory also failed ({e2}). Returning original.")
            return text

def translate_data(data):
    translated = {}
    for key, value in data.items():
        if key in ['title', 'description', 'date', 'readTime']:
            translated[key] = translate_text(value)
        elif key == 'content':
            t_content = []
            for item in value:
                if isinstance(item, dict) and 'text' in item:
                    t_item = item.copy()
                    t_item['text'] = translate_text(item['text'])
                    t_content.append(t_item)
                else:
                    t_content.append(item)
            translated[key] = t_content
        elif key == 'bibliography':
            t_bib = []
            for item in value:
                t_bib.append(translate_text(item))
            translated[key] = t_bib
        elif key in ['prev', 'next']:
            if value:
                t_val = value.copy()
                t_val['title'] = translate_text(value['title'])
                translated[key] = t_val
            else:
                translated[key] = value
        else:
            translated[key] = value
    return translated

def main():
    base_dir = os.path.join(os.getcwd(), 'content', 'articles')
    
    if not os.path.exists(base_dir):
        print("No articles found.")
        return

    count = 0
    for category in os.listdir(base_dir):
        cat_path = os.path.join(base_dir, category)
        if not os.path.isdir(cat_path):
            continue
            
        for slug in os.listdir(cat_path):
            slug_path = os.path.join(cat_path, slug)
            if not os.path.isdir(slug_path):
                continue
                
            en_json_path = os.path.join(slug_path, 'en.json')
            pt_json_path = os.path.join(slug_path, 'pt.json')
            
            if os.path.exists(pt_json_path):
                print(f"PT version for {slug} already exists.")
                continue
                
            if os.path.exists(en_json_path):
                print(f"Processing {category}/{slug}...")
                with open(en_json_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                
                translated_data = translate_data(data)
                
                with open(pt_json_path, 'w', encoding='utf-8') as f:
                    json.dump(translated_data, f, ensure_ascii=False, indent=2)
                
                print(f"Saved PT version for {slug}")
                count += 1
                
                # Sleep between files to avoid rate limits
                time.sleep(2)
                
    print(f"Finished processing {count} articles.")

if __name__ == "__main__":
    main()
