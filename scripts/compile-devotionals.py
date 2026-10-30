import json
import csv
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(ROOT, 'public', 'data', 'morning-and-evening.json')
OUT_DIR = os.path.join(ROOT, 'public', 'downloads')
os.makedirs(OUT_DIR, exist_ok=True)

with open(JSON_PATH, 'r', encoding='utf-8') as f:
    devotionals = json.load(f)

month_names = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

def clean_body(body_text, verse_ref):
    if not body_text:
        return ''
    lines = body_text.split('\n')
    idx = 0
    while idx < len(lines):
        line = lines[idx].strip()
        if not line:
            idx += 1
            continue
        if re.search(r'(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d+.*[—–-]\s*(Morning|Evening)\s+Reading', line, re.I):
            idx += 1
            continue
        if line.startswith('"') and ('—' in line or '-' in line or '–' in line):
            idx += 1
            continue
        if verse_ref and verse_ref in line:
            idx += 1
            continue
        break
    paragraphs = [p.strip() for p in '\n'.join(lines[idx:]).split('\n\n') if p.strip()]
    return '\n\n'.join(paragraphs)

md_lines = [
    '# Charles Haddon Spurgeon — Morning and Evening',
    '*Complete English Devotional Collection (366 Days — Morning and Evening Readings)*',
    '*Spurgeon.tv Canonical Edition*\n',
    '---\n'
]

current_month = None
csv_rows = []

for item in devotionals:
    if not item:
        continue
    month = item.get('month')
    day = item.get('day')
    time = item.get('time', 'am').lower()
    period = 'Morning Reading' if time == 'am' else 'Evening Reading'
    month_name = month_names[month] if month and month < len(month_names) else f'Month {month}'
    
    keyverse = item.get('keyverse', '').strip()
    verse_text = keyverse
    verse_ref = ''
    if '—' in keyverse:
        parts = keyverse.split('—', 1)
        verse_text = parts[0].strip().strip('""\'\'')
        verse_ref = parts[1].strip()
    elif '-' in keyverse:
        parts = keyverse.rsplit('-', 1)
        verse_text = parts[0].strip().strip('""\'\'')
        verse_ref = parts[1].strip()
        
    body = clean_body(item.get('body', ''), verse_ref)
    
    # Markdown
    if month != current_month:
        current_month = month
        md_lines.append(f'# {month_name}\n')
        
    md_lines.append(f'## {month_name} {day} — {period}\n')
    if verse_text:
        md_lines.append(f'> "{verse_text}"')
        if verse_ref:
            md_lines.append(f'> — *{verse_ref}*')
        md_lines.append('')
    md_lines.append(f'{body}\n')
    md_lines.append('---\n')
    
    # CSV
    csv_rows.append({
        'Date_ID': item.get('date'),
        'Month': month,
        'Month_Name': month_name,
        'Day': day,
        'Period': 'Morning' if time == 'am' else 'Evening',
        'Keyverse_Text': verse_text,
        'Keyverse_Reference': verse_ref,
        'Devotional_Text': body
    })

# Save Markdown
md_path = os.path.join(OUT_DIR, 'spurgeon_morning_and_evening_complete.md')
with open(md_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(md_lines))

# Save CSV
csv_path = os.path.join(OUT_DIR, 'spurgeon_morning_and_evening_complete.csv')
with open(csv_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=['Date_ID', 'Month', 'Month_Name', 'Day', 'Period', 'Keyverse_Text', 'Keyverse_Reference', 'Devotional_Text'])
    writer.writeheader()
    writer.writerows(csv_rows)

# Save Plain Text (.txt)
txt_path = os.path.join(OUT_DIR, 'spurgeon_morning_and_evening_complete.txt')
with open(txt_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(md_lines).replace('# ', '=== ').replace('## ', '--- ').replace('> ', ''))

print(f'MD File: {md_path} ({os.path.getsize(md_path) / 1024:.1f} KB)')
print(f'CSV File: {csv_path} ({os.path.getsize(csv_path) / 1024:.1f} KB)')
print(f'TXT File: {txt_path} ({os.path.getsize(txt_path) / 1024:.1f} KB)')
print(f'Total compiled entries: {len(csv_rows)}')
