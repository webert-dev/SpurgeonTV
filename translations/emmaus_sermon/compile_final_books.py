# -*- coding: utf-8 -*-
import json
import os
from docx_builder import build_docx_from_data

print("Compiling Spanish and English editions...")

# 1. Load source paragraphs template
with open('translations/emmaus_sermon/source_pt_formatted_paragraphs.json', 'r', encoding='utf-8') as f:
    source_p = json.load(f)

# 2. Assemble Spanish paragraphs
es_p_dict = {}
for b in range(8):
    with open(f'translations/emmaus_sermon/batch_{b}_es.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        for k, v in data.items():
            es_p_dict[int(k)] = v

es_final_paragraphs = []
for p in source_p:
    idx = p['index']
    style = p['style']
    translated_text = es_p_dict.get(idx, "")
    es_final_paragraphs.append({
        'index': idx,
        'text': translated_text,
        'style': style
    })

# 3. Assemble Spanish endnotes
es_en_dict = {}
for b in [1, 2, 3]:
    with open(f'translations/emmaus_sermon/endnotes_batch_{b}_es.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        for k, v in data.items():
            es_en_dict[str(k)] = v

es_final_endnotes = []
for i in range(1, 51):
    es_final_endnotes.append({
        'id': str(i),
        'paragraphs': es_en_dict[str(i)]
    })

# 4. Assemble English paragraphs
en_p_dict = {}
for b in range(8):
    with open(f'translations/emmaus_sermon/batch_{b}_en.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        for k, v in data.items():
            en_p_dict[int(k)] = v

en_final_paragraphs = []
for p in source_p:
    idx = p['index']
    style = p['style']
    translated_text = en_p_dict.get(idx, "")
    en_final_paragraphs.append({
        'index': idx,
        'text': translated_text,
        'style': style
    })

# 5. Assemble English endnotes
en_en_dict = {}
for b in [1, 2, 3]:
    with open(f'translations/emmaus_sermon/endnotes_batch_{b}_en.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        for k, v in data.items():
            en_en_dict[str(k)] = v

en_final_endnotes = []
for i in range(1, 51):
    en_final_endnotes.append({
        'id': str(i),
        'paragraphs': en_en_dict[str(i)]
    })

# Save JSON datasets
with open('translations/emmaus_sermon/es_final_paragraphs.json', 'w', encoding='utf-8') as f:
    json.dump(es_final_paragraphs, f, ensure_ascii=False, indent=2)
with open('translations/emmaus_sermon/es_final_endnotes.json', 'w', encoding='utf-8') as f:
    json.dump(es_final_endnotes, f, ensure_ascii=False, indent=2)

with open('translations/emmaus_sermon/en_final_paragraphs.json', 'w', encoding='utf-8') as f:
    json.dump(en_final_paragraphs, f, ensure_ascii=False, indent=2)
with open('translations/emmaus_sermon/en_final_endnotes.json', 'w', encoding='utf-8') as f:
    json.dump(en_final_endnotes, f, ensure_ascii=False, indent=2)

print("Saved final JSON datasets. Now compiling DOCX files...")

# Build Spanish DOCX
es_docx_path = 'translations/emmaus_sermon/El_Sermon_de_Emaus_Version_NVI.docx'
build_docx_from_data(es_final_paragraphs, es_final_endnotes, es_docx_path)

# Build English DOCX
en_docx_path = 'translations/emmaus_sermon/The_Emmaus_Sermon_NIV_Version.docx'
build_docx_from_data(en_final_paragraphs, en_final_endnotes, en_docx_path)

print("Both DOCX files successfully compiled!")
