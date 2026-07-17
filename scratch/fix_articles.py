import json
import os
import glob
import unicodedata

def remove_accents(input_str):
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])

def get_letter_from_name(name):
    clean = remove_accents(name).strip().lower()
    if clean and clean[0].isalpha():
        return clean[0]
    return 'a'

pt_dir = 'public/data/dictionary/pt'
index_path = os.path.join(pt_dir, 'search_index.json')

articles = ["o ", "a ", "os ", "as ", "um ", "uma ", "uns ", "umas "]

current_files = glob.glob(os.path.join(pt_dir, "*.json"))

all_data = {}
# Load all data
for fpath in current_files:
    basename = os.path.basename(fpath)
    if basename in ['_index.json', 'search_index.json']:
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        all_data[basename] = data

changes_made = False

# Process all entries
for basename, file_data in list(all_data.items()):
    slugs_to_move = []
    
    for slug, entry in list(file_data.items()):
        name = entry.get('name', '')
        
        # Check for articles
        lower_name = name.lower()
        matched_article = None
        for article in articles:
            if lower_name.startswith(article):
                matched_article = article
                break
                
        if matched_article:
            # Remove article
            new_name = name[len(matched_article):].strip()
            # Capitalize first letter
            if new_name:
                new_name = new_name[0].upper() + new_name[1:]
                
                print(f"Renaming: '{name}' -> '{new_name}'")
                entry['name'] = new_name
                
                new_letter = get_letter_from_name(new_name)
                
                if new_letter != entry.get('letter'):
                    print(f"  Moving {slug} from {entry.get('letter')} to {new_letter}")
                    entry['letter'] = new_letter
                    slugs_to_move.append((slug, new_letter))
                    changes_made = True
                else:
                    changes_made = True # Name changed but letter didn't

    # Move entries
    for slug, new_letter in slugs_to_move:
        entry = file_data[slug]
        del file_data[slug]
        
        target_file = f"{new_letter}.json"
        if target_file not in all_data:
            all_data[target_file] = {}
        all_data[target_file][slug] = entry

if changes_made:
    print("Saving changes...")
    index_data = []
    
    for basename, file_data in all_data.items():
        if not file_data:
            fpath = os.path.join(pt_dir, basename)
            if os.path.exists(fpath):
                os.remove(fpath)
                print(f"Removed empty file: {basename}")
            continue
            
        fpath = os.path.join(pt_dir, basename)
        with open(fpath, 'w', encoding='utf-8') as f:
            json.dump(file_data, f, indent=2, ensure_ascii=False)
            
        for slug, entry in file_data.items():
            index_data.append({
                "name": entry["name"],
                "slug": entry["slug"],
                "letter": entry.get("letter", get_letter_from_name(entry["name"]))
            })
            
    # Sort index by name to keep it clean
    index_data = sorted(index_data, key=lambda x: remove_accents(x['name']).lower())
            
    with open(index_path, 'w', encoding='utf-8') as f:
        json.dump(index_data, f, indent=2, ensure_ascii=False)
        
    print("Done! Fixed articles.")
else:
    print("No articles to fix.")
