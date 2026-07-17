import json
import os

e_path = 'public/data/dictionary/pt/e.json'
s_path = 'public/data/dictionary/pt/s.json'
index_path = 'public/data/dictionary/pt/search_index.json'

with open(e_path, 'r', encoding='utf-8') as f:
    e_data = json.load(f)

if 'suph' in e_data:
    entry = e_data['suph']
    entry['name'] = 'Sufe'
    entry['letter'] = 's'
    del e_data['suph']
    
    with open(e_path, 'w', encoding='utf-8') as f:
        json.dump(e_data, f, indent=2, ensure_ascii=False)
        
    with open(s_path, 'r', encoding='utf-8') as f:
        s_data = json.load(f)
        
    s_data['suph'] = entry
    with open(s_path, 'w', encoding='utf-8') as f:
        json.dump(s_data, f, indent=2, ensure_ascii=False)
        
    print("Moved 'suph' from e.json to s.json and renamed to 'Sufe'")

with open(index_path, 'r', encoding='utf-8') as f:
    index_data = json.load(f)

for item in index_data:
    if item['slug'] == 'suph':
        item['name'] = 'Sufe'
        item['letter'] = 's'
        break

with open(index_path, 'w', encoding='utf-8') as f:
    json.dump(index_data, f, indent=2, ensure_ascii=False)
print("Updated search_index.json")
