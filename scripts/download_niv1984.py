import urllib.request
import re
import json
import os
import xml.etree.ElementTree as ET

# Load KJV canonical book structure to ensure exact names, abbreviations and chapter counts
with open('public/bibles/kjv.json', 'r', encoding='utf-8') as f:
    kjv_canon = json.load(f)

BASE_URL = 'https://raw.githubusercontent.com/michaelwills/niv1984-android/master/scriptures/niv1984-xml'

def extract_verse_pure_text(elem):
    parts = []
    for child in elem:
        if child.tag in ('note_ref', 'note'):
            continue
        if child.tag == 'wj':
            parts.append(extract_verse_pure_text(child))
        elif child.tag == 'content':
            if child.attrib.get('kind') == 'PICTOGRAM':
                continue
            if child.text:
                parts.append(child.text)
    return ''.join(parts)

converted_bible = []

print("Starting download and conversion of NIV 1984 (66 books)...")

for b_idx in range(66):
    file_num = f"{b_idx + 1:02d}.xml"
    url = f"{BASE_URL}/{file_num}"
    canon_book = kjv_canon[b_idx]
    book_name = canon_book['name']
    abbrev = canon_book['abbrev']
    expected_chapters = len(canon_book['chapters'])
    
    print(f"[{b_idx+1:02d}/66] Fetching {book_name} ({file_num})...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        xml_data = resp.read().decode('utf-8')
    
    tree = ET.fromstring(xml_data)
    chapters_xml = tree.findall('chapter')
    assert len(chapters_xml) == expected_chapters, (
        f"Chapter count mismatch in {book_name}: got {len(chapters_xml)}, expected {expected_chapters}"
    )
    
    book_chapters = []
    for ch in chapters_xml:
        cnum = int(ch.attrib['num'])
        verse_dict = {}
        max_v = 0
        
        for v in ch.findall('verse'):
            vnum_str = v.attrib.get('num', '0')
            try:
                vnum = int(vnum_str)
            except ValueError:
                m = re.match(r'\d+', vnum_str)
                vnum = int(m.group(0)) if m else 0
            
            if vnum > max_v:
                max_v = vnum
            
            raw_text = extract_verse_pure_text(v)
            clean_text = re.sub(r'\s+', ' ', raw_text).strip()
            
            if vnum not in verse_dict:
                verse_dict[vnum] = []
            verse_dict[vnum].append(clean_text)
        
        chapter_verses = []
        for v_i in range(1, max_v + 1):
            if v_i in verse_dict:
                chapter_verses.append(' '.join(verse_dict[v_i]).strip())
            else:
                chapter_verses.append('')
        
        book_chapters.append(chapter_verses)
    
    converted_bible.append({
        'abbrev': abbrev,
        'name': book_name,
        'chapters': book_chapters
    })

print(f"\nAll 66 books converted successfully!")

# Save to public/bibles/niv.json and public/bibles/niv1984.json
for filename in ['public/bibles/niv.json', 'public/bibles/niv1984.json']:
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(converted_bible, f, ensure_ascii=False)
    size_mb = os.path.getsize(filename) / (1024 * 1024)
    print(f"Saved {filename} ({size_mb:.2f} MB)")

print("\n--- Spot-Check Samples ---")
print("Genesis 1:1-3:")
for i, v in enumerate(converted_bible[0]['chapters'][0][:3], 1):
    print(f"  v{i}: {v}")

print("\nPsalm 1:1:")
print(f"  {converted_bible[18]['chapters'][0][0]}")

print("\nPsalm 23:1:")
print(f"  {converted_bible[18]['chapters'][22][0]}")

print("\nJohn 3:16:")
print(f"  {converted_bible[42]['chapters'][2][15]}")

print("\nRomans 8:28:")
print(f"  {converted_bible[44]['chapters'][7][27]}")

print("\nRevelation 22:21:")
print(f"  {converted_bible[65]['chapters'][21][20]}")
