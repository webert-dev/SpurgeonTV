# -*- coding: utf-8 -*-
import sys
import json
sys.stdout.reconfigure(encoding='utf-8')

with open('translations/emmaus_sermon/source_pt_paragraphs.json', 'r', encoding='utf-8') as f:
    paras = json.load(f)

start = int(sys.argv[1]) if len(sys.argv) > 1 else 0
end = int(sys.argv[2]) if len(sys.argv) > 2 else 45

for p in paras[start:end]:
    t = p['text'].strip()
    if t:
        refs = f" [EN_REFS: {','.join(p['endnote_refs'])}]" if p['endnote_refs'] else ""
        print(f"[{p['index']:3d}] {t}{refs}")
