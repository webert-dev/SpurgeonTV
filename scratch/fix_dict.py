import json
import os

def load_json(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(filename, data):
    # Sort keys for consistency if desired, or just dump
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

base_dir = "public/data/dictionary/pt"

o_path = os.path.join(base_dir, "o.json")
p_path = os.path.join(base_dir, "p.json")
s_path = os.path.join(base_dir, "s.json")
u_path = os.path.join(base_dir, "u.json")

o_data = load_json(o_path)

# Extract and fix the items to be moved
toll_item = o_data.pop("toll", None)
if toll_item:
    toll_item["name"] = "Pedágio"
    toll_item["letter"] = "p"
    
    p_data = load_json(p_path)
    p_data["toll"] = toll_item
    # Sort the dictionary by name
    sorted_p = dict(sorted(p_data.items(), key=lambda item: item[1].get('name', '')))
    save_json(p_path, sorted_p)

shiphi_item = o_data.pop("shiphi", None)
if shiphi_item:
    shiphi_item["name"] = "Sifi"
    shiphi_item["letter"] = "s"
    
    s_data = load_json(s_path)
    s_data["shiphi"] = shiphi_item
    sorted_s = dict(sorted(s_data.items(), key=lambda item: item[1].get('name', '')))
    save_json(s_path, sorted_s)

unni_item = o_data.pop("unni", None)
if unni_item:
    unni_item["name"] = "Uni"
    unni_item["letter"] = "u"
    
    u_data = load_json(u_path)
    u_data["unni"] = unni_item
    sorted_u = dict(sorted(u_data.items(), key=lambda item: item[1].get('name', '')))
    save_json(u_path, sorted_u)

# Fix items staying in o.json
if "orator" in o_data:
    o_data["orator"]["definitions"] = [
        {
            "source": "SMI",
            "text": "(1) A tradução da palavra hebraica lachash, que denota sussurro ou encantamento (Isaías 3:3). (2) O título aplicado a Tértulo, que compareceu como advogado de acusação contra Paulo diante de Félix (Atos 24:1)."
        }
    ]

if "on" in o_data:
    o_data["on"]["name"] = "Om"

# Save o.json
sorted_o = dict(sorted(o_data.items(), key=lambda item: item[1].get('name', '')))
save_json(o_path, sorted_o)

print("Dictionary entries fixed successfully.")
