# -*- coding: utf-8 -*-
import sys
import json
import zipfile
import re
import xml.etree.ElementTree as ET
sys.stdout.reconfigure(encoding='utf-8')

docx_path = r'public/downloads/O_Sermao_de_Emaus_Versao_NVI_Atualizado.docx'
with zipfile.ZipFile(docx_path) as z:
    doc_xml = z.read('word/document.xml')
    tree = ET.fromstring(doc_xml)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

    def extract_formatted_paragraph(p):
        parts = []
        for child in p:
            tag = child.tag.split('}')[-1]
            if tag == 'r':
                en_ref = child.find('w:endnoteReference', ns)
                if en_ref is not None:
                    en_id = en_ref.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}id')
                    parts.append(f"[EN_REF:{en_id}]")
                    continue
                r_texts = [t.text for t in child.iterfind('.//w:t', ns) if t.text]
                t = ''.join(r_texts)
                if not t:
                    continue
                rPr = child.find('w:rPr', ns)
                is_b = False
                is_i = False
                if rPr is not None:
                    b_node = rPr.find('w:b', ns)
                    if b_node is not None and b_node.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val') != '0':
                        is_b = True
                    i_node = rPr.find('w:i', ns)
                    if i_node is not None and i_node.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val') != '0':
                        is_i = True
                
                if is_b and is_i:
                    parts.append(f"***{t}***")
                elif is_b:
                    parts.append(f"**{t}**")
                elif is_i:
                    parts.append(f"*{t}*")
                else:
                    parts.append(t)
                    
        merged = "".join(parts)
        return merged

    all_p = list(tree.iterfind('.//w:p', ns))
    formatted_paragraphs = []
    for idx, p in enumerate(all_p):
        text = extract_formatted_paragraph(p)
        p_style = None
        pPr = p.find('w:pPr', ns)
        if pPr is not None:
            pStyle = pPr.find('w:pStyle', ns)
            if pStyle is not None:
                p_style = pStyle.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val')
        
        formatted_paragraphs.append({
            'index': idx,
            'text': text,
            'style': p_style
        })

    # Endnotes extraction with formatting
    endnotes_xml = z.read('word/endnotes.xml')
    tree_en = ET.fromstring(endnotes_xml)
    formatted_endnotes = []
    for en in tree_en.findall('.//w:endnote', ns):
        en_id = en.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}id')
        en_type = en.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}type')
        if en_type in ['separator', 'continuationSeparator']:
            continue
        p_texts = []
        for p in en.findall('.//w:p', ns):
            t = extract_formatted_paragraph(p)
            if t.strip():
                p_texts.append(t.strip())
        if p_texts:
            formatted_endnotes.append({
                'id': en_id,
                'paragraphs': p_texts
            })

with open('translations/emmaus_sermon/source_pt_formatted_paragraphs.json', 'w', encoding='utf-8') as f:
    json.dump(formatted_paragraphs, f, ensure_ascii=False, indent=2)

with open('translations/emmaus_sermon/source_pt_formatted_endnotes.json', 'w', encoding='utf-8') as f:
    json.dump(formatted_endnotes, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(formatted_paragraphs)} formatted paragraphs and {len(formatted_endnotes)} formatted endnotes.")
