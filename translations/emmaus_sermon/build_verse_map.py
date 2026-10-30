# -*- coding: utf-8 -*-
import json
import re

# Load comparative table
with open('public/downloads/O_Sermao_de_Emaus_Tabela_de_Versiculos_Comparativa.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

table_data = []
for line in lines[2:]:
    parts = [p.strip() for p in line.split('|')]
    if len(parts) >= 6:
        ref = parts[1].replace('**', '').strip()
        author_written = parts[2].strip()
        nvi_pt = parts[3].strip()
        nvi_es = parts[4].strip()
        niv_en = parts[5].strip()
        table_data.append({
            'ref': ref,
            'author_written': author_written,
            'nvi_pt': nvi_pt,
            'nvi_es': nvi_es,
            'niv_en': niv_en
        })

print(f"Loaded {len(table_data)} verses from comparative table.")

with open('translations/emmaus_sermon/bible_verses_map.json', 'w', encoding='utf-8') as f:
    json.dump(table_data, f, ensure_ascii=False, indent=2)
