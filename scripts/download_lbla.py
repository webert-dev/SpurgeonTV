import urllib.request
import json
import os
import re

# Load canonical book definitions from rvr1960 to ensure identical naming and abbreviations
with open('public/bibles/rvr1960.json', 'r', encoding='utf-8') as f:
    rvr_books = json.load(f)

# Standard USFM mapping to Protestant canon order (0..65)
USFM_ORDER = [
    'GEN', 'EXO', 'LEV', 'NUM', 'DEU', 'JOS', 'JDG', 'RUT',
    '1SA', '2SA', '1KI', '2KI', '1CH', '2CH', 'EZR', 'NEH', 'EST', 'JOB',
    'PSA', 'PRO', 'ECC', 'SNG', 'ISA', 'JER', 'LAM', 'EZK', 'DAN',
    'HOS', 'JOL', 'AMO', 'OBA', 'JON', 'MIC', 'NAM', 'HAB', 'ZEP',
    'HAG', 'ZEC', 'MAL',
    'MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL',
    'EPH', 'PHP', 'COL', '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM',
    'HEB', 'JAS', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'
]

url = 'https://raw.githubusercontent.com/mrk214/snapshots/main/es___spa___spa/LBLA_vid_89.json'
print("Downloading LBLA dataset from:", url)
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    raw_data = json.loads(resp.read().decode('utf-8'))

print(f"Total books in source LBLA: {len(raw_data['books'])}")

# Build lookup by USFM code
lbla_by_usfm = {b['usfm']: b for b in raw_data['books']}

converted_bible = []

for idx, usfm in enumerate(USFM_ORDER):
    assert usfm in lbla_by_usfm, f"Missing USFM book {usfm}"
    source_book = lbla_by_usfm[usfm]
    target_meta = rvr_books[idx]
    
    book_name = source_book.get('human') or target_meta['name']
    abbrev = target_meta['abbrev']
    expected_chapters = len(target_meta['chapters'])
    
    source_chapters = source_book.get('chapters', [])
    assert len(source_chapters) == expected_chapters, (
        f"Chapter count mismatch in {book_name} ({usfm}): "
        f"got {len(source_chapters)}, expected {expected_chapters}"
    )
    
    converted_chapters = []
    for c_idx, chap_obj in enumerate(source_chapters):
        verse_dict = {}
        max_verse = 0
        
        items = chap_obj.get('items', [])
        for item in items:
            itype = item.get('type')
            v_nums = item.get('verse_numbers', [])
            lines = item.get('lines', [])
            
            if itype == 'verse' and v_nums and lines:
                text = ' '.join(lines).strip()
                text = re.sub(r'\s+', ' ', text)
                
                v_start = v_nums[0]
                if v_start not in verse_dict:
                    verse_dict[v_start] = []
                verse_dict[v_start].append(text)
                if v_start > max_verse:
                    max_verse = v_start
        
        chapter_verses = []
        for v in range(1, max_verse + 1):
            if v in verse_dict:
                chapter_verses.append(' '.join(verse_dict[v]).strip())
            else:
                chapter_verses.append('')
        
        converted_chapters.append(chapter_verses)
    
    converted_bible.append({
        'abbrev': abbrev,
        'name': book_name,
        'chapters': converted_chapters
    })

dest_file = 'public/bibles/lbla.json'
with open(dest_file, 'w', encoding='utf-8') as f:
    json.dump(converted_bible, f, ensure_ascii=False)

size_mb = os.path.getsize(dest_file) / (1024 * 1024)
print(f"Successfully converted and saved {dest_file} ({size_mb:.2f} MB)")
print("Total books converted:", len(converted_bible))
print("Sample Genesis 1:1-3:")
for v in converted_bible[0]['chapters'][0][:3]:
    print("  -", v)
print("Sample John 3:16:")
print("  -", converted_bible[42]['chapters'][2][15])
print("Sample Romans 8:28:")
print("  -", converted_bible[44]['chapters'][7][27])
