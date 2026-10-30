# -*- coding: utf-8 -*-
import os
import sys
import zipfile
import xml.etree.ElementTree as ET

sys.stdout.reconfigure(encoding='utf-8')

print("=" * 70)
print("PHASE 4: CROSS-AUDITING AND INTEGRITY VALIDATION")
print("=" * 70)

files_to_audit = [
    {
        'lang': 'ES',
        'title': 'El Sermón de Emaús',
        'path': 'translations/emmaus_sermon/El_Sermon_de_Emaus_Version_NVI.docx',
        'expected_title': 'El Sermón de Emaús',
        'expected_subtitle': '¿Conoces las Promesas Mesiánicas del Antiguo Testamento?',
        'expected_verses': [
            'su simiente te aplastará la cabeza', # Gn 3:15
            'Él fue traspasado por nuestras rebeliones', # Is 53:5
            '¿Acaso no tenía que sufrir el Cristo' # Lc 24:26
        ]
    },
    {
        'lang': 'EN',
        'title': 'The Emmaus Sermon',
        'path': 'translations/emmaus_sermon/The_Emmaus_Sermon_NIV_Version.docx',
        'expected_title': 'The Emmaus Sermon',
        'expected_subtitle': 'Do You Know the Messianic Promises of the Old Testament?',
        'expected_verses': [
            'he will crush your head', # Gn 3:15
            'he was pierced for our transgressions', # Is 53:5
            'Did not the Messiah have to suffer' # Lc 24:26
        ]
    }
]

ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

all_passed = True

for item in files_to_audit:
    path = item['path']
    lang = item['lang']
    print(f"\n--- AUDITING {lang} EDITION: {os.path.basename(path)} ---")
    
    # 1. Check file exists and size
    if not os.path.exists(path):
        print(f"❌ ERROR: File does not exist: {path}")
        all_passed = False
        continue
        
    size_kb = os.path.getsize(path) / 1024
    print(f"  ✓ File size: {size_kb:.2f} KB")
    
    with zipfile.ZipFile(path, 'r') as z:
        # 2. Check document.xml
        doc_xml = z.read('word/document.xml')
        tree_doc = ET.fromstring(doc_xml)
        paras = tree_doc.findall('.//w:p', ns)
        en_refs = tree_doc.findall('.//w:endnoteReference', ns)
        print(f"  ✓ Paragraph count in document.xml: {len(paras)} (Expected: 543)")
        print(f"  ✓ Endnote references in body: {len(en_refs)} (Expected: 50)")
        
        if len(paras) != 543:
            print(f"  ❌ ERROR: Paragraph count mismatch: {len(paras)}")
            all_passed = False
        if len(en_refs) != 50:
            print(f"  ❌ ERROR: Endnote reference count mismatch: {len(en_refs)}")
            all_passed = False
            
        # 3. Check endnotes.xml
        en_xml = z.read('word/endnotes.xml')
        tree_en = ET.fromstring(en_xml)
        notes = [en for en in tree_en.findall('.//w:endnote', ns)
                 if en.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}type') not in ['separator', 'continuationSeparator']]
        print(f"  ✓ Endnotes count in endnotes.xml: {len(notes)} (Expected: 50)")
        if len(notes) != 50:
            print(f"  ❌ ERROR: Endnotes count mismatch: {len(notes)}")
            all_passed = False
            
        # 4. Extract full text of document.xml for text search
        doc_texts = []
        for p in paras:
            p_text = ''.join([t.text for t in p.iterfind('.//w:t', ns) if t.text])
            if p_text:
                doc_texts.append(p_text)
        full_doc_text = '\n'.join(doc_texts)
        
        # Check Title & Subtitle
        p0_text = ''.join([t.text for t in paras[0].iterfind('.//w:t', ns) if t.text])
        p1_text = ''.join([t.text for t in paras[1].iterfind('.//w:t', ns) if t.text])
        print(f"  ✓ Paragraph 0 (Title): {p0_text}")
        print(f"  ✓ Paragraph 1 (Subtitle): {p1_text}")
        
        if item['expected_title'] not in p0_text:
            print(f"  ❌ ERROR: Title '{item['expected_title']}' not found in Paragraph 0")
            all_passed = False
        if item['expected_subtitle'] not in p1_text:
            print(f"  ❌ ERROR: Subtitle '{item['expected_subtitle']}' not found in Paragraph 1")
            all_passed = False
            
        # Check biblical verse samples
        for verse_sample in item['expected_verses']:
            if verse_sample in full_doc_text:
                print(f"  ✓ Verse sample verified: \"{verse_sample}\"")
            else:
                print(f"  ❌ ERROR: Verse sample missing: \"{verse_sample}\"")
                all_passed = False
                
        # Check scholarly endnote 2 (Van Groningen)
        en2_texts = []
        for en in notes:
            if en.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}id') == '2':
                for t in en.iterfind('.//w:t', ns):
                    if t.text: en2_texts.append(t.text)
        en2_full = ''.join(en2_texts)
        if 'groningen' in en2_full.lower():
            print(f"  ✓ Endnote 2 (Van Groningen reference): Verified! ({en2_full[:80]}...)")
        else:
            print(f"  ❌ ERROR: Endnote 2 missing Van Groningen reference")
            all_passed = False

print("\n" + "=" * 70)
if all_passed:
    print("🎉 ALL AUDIT CHECKS PASSED WITH 100% INTEGRITY!")
else:
    print("⚠️ SOME CHECKS FAILED! REVIEW ERRORS ABOVE.")
print("=" * 70)
