import json
import os
import glob

def generate_index():
    base_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "data", "dictionary", "en")
    index = []
    
    for letter_file in glob.glob(os.path.join(base_dir, "[a-z].json")):
        with open(letter_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            for key, value in data.items():
                index.append({
                    "name": value.get("name"),
                    "slug": value.get("slug"),
                    "letter": os.path.basename(letter_file).replace('.json', '')
                })
                
    output_path = os.path.join(base_dir, "search_index.json")
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(index, f, separators=(',', ':'))
        
    print(f"Generated search_index.json with {len(index)} entries.")

if __name__ == "__main__":
    generate_index()
