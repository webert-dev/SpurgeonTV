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

    sample_indices = [0, 1, 4, 10, 44, 60, 69, 70, 71]
    all_p = list(tree.iterfind('.//w:p', ns))
    
    for idx in sample_indices:
        p = all_p[idx]
        print(f"--- PARAGRAPH {idx} ---")
        for child in p:
            tag = child.tag.split('}')[-1]
            if tag == 'pPr':
                continue
            elif tag == 'r':
                r_texts = [t.text for t in child.iterfind('.//w:t', ns) if t.text]
                en_refs = [ref.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}id') 
                           for ref in child.iterfind('.//w:endnoteReference', ns)]
                rPr = child.find('w:rPr', ns)
                rPr_tags = [sub.tag.split('}')[-1] for sub in rPr] if rPr is not None else []
                print(f"   [RUN] tags={rPr_tags} text={''.join(r_texts)!r} endnotes={en_refs}")
            else:
                print(f"   [{tag}]")
