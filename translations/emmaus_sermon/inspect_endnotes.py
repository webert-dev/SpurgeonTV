# -*- coding: utf-8 -*-
import sys
import json
sys.stdout.reconfigure(encoding='utf-8')

with open('translations/emmaus_sermon/source_pt_formatted_endnotes.json', 'r', encoding='utf-8') as f:
    endnotes = json.load(f)

print(f"Total formatted endnotes: {len(endnotes)}")
for en in endnotes:
    en_id = en['id']
    paras = en['paragraphs']
    first_p = paras[0] if paras else ""
    print(f"[{en_id:2s}] ({len(paras)} paras) {first_p[:110]}...")
