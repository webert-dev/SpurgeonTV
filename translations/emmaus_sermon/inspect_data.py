# -*- coding: utf-8 -*-
import json

with open('translations/emmaus_sermon/source_pt_endnotes.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

print(f"Total notes: {len(notes)}")
for n in notes:
    t = n['text'].replace('\n', ' ')
    print(f"[{n['id']}] {t[:90]}...")
