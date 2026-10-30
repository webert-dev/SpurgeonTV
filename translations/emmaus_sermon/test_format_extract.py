# -*- coding: utf-8 -*-
import sys
import zipfile
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
                
    # Merge consecutive identical formatting tokens
    merged = "".join(parts)
    # clean up consecutive formatting markers like **foo****bar** -> **foobar**
    merged = merged.replace('******', '')
    merged = merged.replace('****', '')
    merged = merged.replace('** **', ' ')
    merged = merged.replace('* *', ' ')
    return merged

all_p = list(tree.iterfind('.//w:p', ns))
for idx in [0, 1, 4, 10, 44, 60, 69, 70, 71]:
    res = extract_formatted_paragraph(all_p[idx])
    print(f"[{idx:3d}] {res}")
