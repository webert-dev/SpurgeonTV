# -*- coding: utf-8 -*-
import sys
import json
sys.stdout.reconfigure(encoding='utf-8')

with open('translations/emmaus_sermon/source_pt_paragraphs.json', 'r', encoding='utf-8') as f:
    paras = json.load(f)

for p in paras:
    text = p['text'].strip()
    style = p['style'] or ''
    if not text:
        continue
    # Check if heading or short title
    if 'Heading' in style or 'Title' in style or text.startswith('PARTE') or text.startswith('Capítulo') or text.startswith('CAPÍTULO'):
        print(f"[{p['index']:3d}] ({style}) {text}")
    elif len(text) < 60 and ('—' in text or 'SUMÁRIO' in text or 'ÍNDICE' in text or 'NOTAS' in text or text.isupper()):
        print(f"[{p['index']:3d}] ({style}) {text}")
