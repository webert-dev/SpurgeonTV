"""
translate_dates.py
Scans all Spanish sermon .md files, extracts detailed preaching dates
(handling both inline single-line format and multi-line ALL-CAPS format),
then writes a lib/sermon-dates.json with EN/ES/PT translations.
"""

import glob
import re
import os
import json
import unicodedata

# Normalize accented n variants: ń → ñ
def normalize_n(s):
    # Replace ń (U+0144) and Ń (U+0143) with ñ/Ñ
    return s.replace('\u0144', 'ñ').replace('\u0143', 'Ñ')

# --- Translation tables ---
months_es = {
    'enero':       ('January',   'janeiro'),
    'febrero':     ('February',  'fevereiro'),
    'marzo':       ('March',     'março'),
    'abril':       ('April',     'abril'),
    'mayo':        ('May',       'maio'),
    'junio':       ('June',      'junho'),
    'julio':       ('July',      'julho'),
    'agosto':      ('August',    'agosto'),
    'septiembre':  ('September', 'setembro'),
    'setiembre':   ('September', 'setembro'),
    'octubre':     ('October',   'outubro'),
    'noviembre':   ('November',  'novembro'),
    'diciembre':   ('December',  'dezembro'),
}

days_es = {
    'domingo':    ('Sunday',    'domingo'),
    'lunes':      ('Monday',    'segunda-feira'),
    'martes':     ('Tuesday',   'terça-feira'),
    'miércoles':  ('Wednesday', 'quarta-feira'),
    'miercoles':  ('Wednesday', 'quarta-feira'),
    'jueves':     ('Thursday',  'quinta-feira'),
    'viernes':    ('Friday',    'sexta-feira'),
    'sábado':     ('Saturday',  'sábado'),
    'sabado':     ('Saturday',  'sábado'),
}

times_es = {
    'mañana': ('the morning',   'manhã',   'la mañana'),
    'tarde':  ('the afternoon', 'tarde',   'la tarde'),
    'noche':  ('the evening',   'noite',   'la noche'),
}

def try_parse_date(raw_text):
    """
    Given a raw Spanish date string, return dict {es, en, pt} or None.
    """
    t = normalize_n(raw_text).lower().strip()
    # remove commas that separate day from date number  e.g. "Domingo, 25"
    t = t.replace(',', ' ')
    # collapse multiple spaces
    t = re.sub(r'\s+', ' ', t)

    has_un = bool(re.match(r'^un\s', t))
    es_prefix = 'Un sermón predicado' if has_un else 'Sermón predicado'
    en_prefix = 'A sermon preached'   if has_un else 'Sermon preached'
    pt_prefix = 'Um sermão pregado'   if has_un else 'Sermão pregado'

    # time of day
    es_time_label = ''; en_time = ''; pt_time = ''
    for k, (en_t, pt_t, es_label) in times_es.items():
        if re.search(r'\b' + re.escape(k) + r'\b', t):
            en_time = en_t; pt_time = pt_t; es_time_label = es_label
            break

    # day of week
    es_dow = ''; en_dow = ''; pt_dow = ''
    for k, (en_d, pt_d) in days_es.items():
        if re.search(r'\b' + re.escape(k) + r'\b', t):
            en_dow = en_d; pt_dow = pt_d
            es_dow = k.capitalize()
            if es_dow == 'Sabado':    es_dow = 'Sábado'
            if es_dow == 'Miercoles': es_dow = 'Miércoles'
            break

    # month
    es_month = ''; en_month = ''; pt_month = ''
    for k, (en_m, pt_m) in months_es.items():
        if re.search(r'\b' + re.escape(k) + r'\b', t):
            en_month = en_m; pt_month = pt_m
            es_month = 'Septiembre' if k == 'setiembre' else k.capitalize()
            break

    # day number: digit(s) immediately before "de <month>"
    day_num = ''
    m = re.search(r'\b(\d{1,2})\s+de\s+(?:' + '|'.join(months_es.keys()) + r')\b', t)
    if m:
        day_num = m.group(1)

    # year
    year = ''
    m = re.search(r'\b(1[78]\d{2}|1[89]\d{2}|20\d{2})\b', t)
    if m:
        year = m.group(1)

    if not (es_month and year):
        return None

    # ── Build ES ─────────────────────────────────────────────────────────────
    es = es_prefix
    if es_time_label:
        es += f' {es_time_label} del'
    else:
        es += ' el'
    if es_dow:
        es += f' {es_dow}'
    if day_num:
        es += f' {day_num}'
    es += f' de {es_month} de {year}'

    # ── Build EN ─────────────────────────────────────────────────────────────
    en = en_prefix
    if en_time:
        en += f' on {en_time} of'
    else:
        en += ' on'
    if en_dow:
        en += f' {en_dow},'
    if day_num:
        en += f' {en_month} {day_num}, {year}'
    else:
        en += f' {en_month} {year}'

    # ── Build PT ─────────────────────────────────────────────────────────────
    pt = pt_prefix
    if pt_time:
        art = 'no' if pt_time == 'tarde' else 'na'
        pt += f' {art} {pt_time} de'
    else:
        pt += ' em'
    if pt_dow:
        dow_art = 'no' if pt_dow in ('domingo', 'sábado') else 'na'
        pt += f' {dow_art} {pt_dow},'
    if day_num:
        pt += f' {day_num} de {pt_month} de {year}'
    else:
        pt += f' {pt_month} de {year}'

    return {'es': es, 'en': en, 'pt': pt}


def extract_date_from_file(content):
    """
    Tries two strategies:
    1. Single-line:  "Un sermón predicado la noche del Domingo 21 de Enero de 1855"
    2. Multi-line ALL-CAPS block spanning consecutive lines.
    Returns raw date string or None.
    """
    content = normalize_n(content)

    # ── Strategy 1: single line ───────────────────────────────────────────────
    m = re.search(
        r'((?:Un\s+)?[Ss]erm[oó]n\s+predicado\b.{5,150}?\b1[78]\d{2}\b)',
        content, re.IGNORECASE
    )
    if m:
        return m.group(1).strip()

    # ── Strategy 2: multi-line ALL-CAPS block ─────────────────────────────────
    # Take first 50 lines, uppercase them, join into one string for easier matching
    head = ' '.join(content.split('\n')[:60]).upper()
    head = normalize_n(head)

    m = re.search(
        r'SERM[OÓ]N\s+PREDICADO\s*'
        r'(?:LA\s+)?'
        r'(MAÑANA|TARDE|NOCHE)?\s*'
        r'(?:DEL?)?\s*'
        r'(DOMINGO|LUNES|MARTES|MI[EÉ]RCOLES|JUEVES|VIERNES|S[AÁ]BADO)?\s*'
        r'(\d{1,2})?\s*'
        r'DE\s+'
        r'(ENERO|FEBRERO|MARZO|ABRIL|MAYO|JUNIO|JULIO|AGOSTO|SEPTIEMBRE|SETIEMBRE|OCTUBRE|NOVIEMBRE|DICIEMBRE)'
        r'(?:\s+DE)?\s+'
        r'(1[78]\d{2}|1[89]\d{2})',
        head
    )
    if m:
        time_part  = (m.group(1) or '').strip().lower()
        dow_part   = (m.group(2) or '').strip().lower()
        day_part   = (m.group(3) or '').strip()
        month_part = m.group(4).strip().lower()
        year_part  = m.group(5).strip()

        sentence = 'Sermón predicado'
        if time_part:
            sentence += f' la {time_part} del'
        else:
            sentence += ' el'
        if dow_part:
            sentence += f' {dow_part}'
        if day_part:
            sentence += f' {day_part}'
        sentence += f' de {month_part} de {year_part}'
        return sentence

    return None


# ─── Main ────────────────────────────────────────────────────────────────────

files = glob.glob('chspurgeon-sermons-es/**/*.md', recursive=True)
detailed_dates = {}

# LOAD EXISTING
if os.path.exists('lib/sermon-dates.json'):
    with open('lib/sermon-dates.json', 'r', encoding='utf-8') as f:
        detailed_dates = json.load(f)

skipped = 0
no_date = []

for file_path in sorted(files):
    if os.path.getsize(file_path) == 0:
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    raw = extract_date_from_file(content)
    if not raw:
        skipped += 1
        no_date.append(os.path.basename(file_path))
        continue

    parsed = try_parse_date(raw)
    if not parsed:
        skipped += 1
        no_date.append(os.path.basename(file_path))
        continue

    basename = os.path.basename(file_path)
    m = re.search(r'sermon-(.+?)\.md', basename)
    if not m:
        continue
    sermon_id = m.group(1)
    detailed_dates[sermon_id] = parsed

with open('lib/sermon-dates.json', 'w', encoding='utf-8') as f:
    json.dump(detailed_dates, f, ensure_ascii=False, indent=2)

import sys
sys.stdout.reconfigure(encoding='utf-8')
print(f"Done. Sermons with detailed dates: {len(detailed_dates)}")
print(f"Sermons without detailed dates:  {skipped}")

print("\nSample entries:")
for k in ['5', '11', '15', '427', '20']:
    if k in detailed_dates:
        v = detailed_dates[k]
        print(f"  [{k}]")
        print(f"    ES: {v['es']}")
        print(f"    EN: {v['en']}")
        print(f"    PT: {v['pt']}")
