import json
import os
import glob
import unicodedata

def remove_accents(input_str):
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])

fixes = {
    'telah': {'name': 'Telah'},
    'seal': {'name': 'Selo'},
    'shaalabbin': {'name': 'Saalabim'},
    'wafers': {'name': 'Pães Ázimos'},
    'wimple': {'name': 'Véu'},
    'winefat': {'name': 'Lagar'},
    'winnow': {'name': 'Joeirar'},
    'word-the': {'name': 'O Verbo'},
    'worm': {'name': 'Verme'}
}

pt_dir = 'public/data/dictionary/pt'
index_path = os.path.join(pt_dir, 'search_index.json')

current_files = glob.glob(os.path.join(pt_dir, "*.json"))

for slug, new_data in fixes.items():
    entry = None
    for fpath in current_files:
        if os.path.basename(fpath) in ['_index.json', 'search_index.json']:
            continue
        with open(fpath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        if slug in data:
            entry = data[slug]
            del data[slug]
            with open(fpath, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            break
            
    if entry:
        entry['name'] = new_data['name']
        letter = remove_accents(entry['name']).lower()[0]
        entry['letter'] = letter
        
        new_fpath = os.path.join(pt_dir, f"{letter}.json")
        if os.path.exists(new_fpath):
            with open(new_fpath, 'r', encoding='utf-8') as f:
                new_data_json = json.load(f)
        else:
            new_data_json = {}
            
        new_data_json[slug] = entry
        with open(new_fpath, 'w', encoding='utf-8') as f:
            json.dump(new_data_json, f, indent=2, ensure_ascii=False)
            
        print(f"Moved {slug} to {letter}.json with name {entry['name']}")

with open(index_path, 'r', encoding='utf-8') as f:
    index_data = json.load(f)

for item in index_data:
    if item['slug'] in fixes:
        item['name'] = fixes[item['slug']]['name']
        item['letter'] = remove_accents(item['name']).lower()[0]

with open(index_path, 'w', encoding='utf-8') as f:
    json.dump(index_data, f, indent=2, ensure_ascii=False)
    
print("Fixed search_index.json")

if os.path.exists(os.path.join(pt_dir, 'w.json')):
    with open(os.path.join(pt_dir, 'w.json'), 'r', encoding='utf-8') as f:
        w_data = json.load(f)
    if len(w_data) == 0:
        os.remove(os.path.join(pt_dir, 'w.json'))
        print("Removed empty w.json")
