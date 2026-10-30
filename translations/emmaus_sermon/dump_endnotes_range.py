# -*- coding: utf-8 -*-
import sys
import json
sys.stdout.reconfigure(encoding='utf-8')

with open('translations/emmaus_sermon/source_pt_formatted_endnotes.json', 'r', encoding='utf-8') as f:
    endnotes = json.load(f)

start_id = int(sys.argv[1]) if len(sys.argv) > 1 else 1
end_id = int(sys.argv[2]) if len(sys.argv) > 2 else 5

for en in endnotes:
    en_id = int(en['id'])
    if start_id <= en_id <= end_id:
        print(f"=== ENDNOTE {en_id} ({len(en['paragraphs'])} paragraphs) ===")
        for p_idx, p in enumerate(en['paragraphs']):
            print(f"  [{p_idx}] {p}")
