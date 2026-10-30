# -*- coding: utf-8 -*-
import json

es_endnotes = {}
en_endnotes = {}

for b in [1, 2, 3]:
    with open(f'translations/emmaus_sermon/endnotes_batch_{b}_es.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        for k, v in data.items():
            es_endnotes[int(k)] = v
    with open(f'translations/emmaus_sermon/endnotes_batch_{b}_en.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        for k, v in data.items():
            en_endnotes[int(k)] = v

print(f"Total ES endnotes translated: {len(es_endnotes)}")
print(f"Total EN endnotes translated: {len(en_endnotes)}")

missing_es = [i for i in range(1, 51) if i not in es_endnotes]
missing_en = [i for i in range(1, 51) if i not in en_endnotes]

print(f"Missing ES endnotes: {missing_es}")
print(f"Missing EN endnotes: {missing_en}")
