import json
import os
import string

def load_json(p):
    try:
        with open(p, 'r', encoding='utf-8') as f: return json.load(f)
    except: return {}

def save_json(p, d):
    with open(p, 'w', encoding='utf-8') as f:
        json.dump(d, f, ensure_ascii=False, indent=2)

# Fix Spanish 'on'
es_e_path = 'public/data/dictionary/es/e.json'
es_o_path = 'public/data/dictionary/es/o.json'
es_e = load_json(es_e_path)
es_o = load_json(es_o_path)

if 'on' in es_e:
    on_data = es_e.pop('on')
    on_data['name'] = 'On'
    on_data['letter'] = 'o'
    es_o['on'] = on_data
    save_json(es_e_path, es_e)
    # sort o.json
    save_json(es_o_path, dict(sorted(es_o.items(), key=lambda i: i[1].get('name', ''))))

# Rebuild search_index.json
for lang in ['pt', 'es']:
    idx = []
    base_dir = f'public/data/dictionary/{lang}'
    for letter in string.ascii_lowercase:
        file_path = os.path.join(base_dir, f'{letter}.json')
        if not os.path.exists(file_path):
            continue
        data = load_json(file_path)
        for slug, item in data.items():
            # some missing letter field?
            if 'letter' not in item:
                item['letter'] = letter
            idx.append({
                'name': item.get('name', slug),
                'slug': slug,
                'letter': item.get('letter', letter)
            })
    
    # Sort index by name
    idx.sort(key=lambda x: x['name'].lower())
    save_json(os.path.join(base_dir, 'search_index.json'), idx)

print("Indexes rebuilt.")
