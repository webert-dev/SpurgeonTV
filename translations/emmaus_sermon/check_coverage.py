# -*- coding: utf-8 -*-
import json

with open('translations/emmaus_sermon/source_pt_formatted_paragraphs.json', 'r', encoding='utf-8') as f:
    source_p = json.load(f)

es_paragraphs = {}
en_paragraphs = {}

for b in range(8):
    with open(f'translations/emmaus_sermon/batch_{b}_es.json', 'r', encoding='utf-8') as f:
        es_data = json.load(f)
        for k, v in es_data.items():
            es_paragraphs[int(k)] = v
    with open(f'translations/emmaus_sermon/batch_{b}_en.json', 'r', encoding='utf-8') as f:
        en_data = json.load(f)
        for k, v in en_data.items():
            en_paragraphs[int(k)] = v

print(f"Total source paragraphs: {len(source_p)}")
print(f"Total ES paragraphs translated: {len(es_paragraphs)}")
print(f"Total EN paragraphs translated: {len(en_paragraphs)}")

missing_es = []
missing_en = []
for p in source_p:
    idx = p['index']
    t = p['text'].strip()
    if t:
        if idx not in es_paragraphs:
            missing_es.append(idx)
        if idx not in en_paragraphs:
            missing_en.append(idx)

print(f"Missing non-empty ES paragraphs: {missing_es}")
print(f"Missing non-empty EN paragraphs: {missing_en}")
