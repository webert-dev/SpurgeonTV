import glob
import re
import os
import json

# Mappings
months = {
    'enero': ('January', 'janeiro'),
    'febrero': ('February', 'fevereiro'),
    'marzo': ('March', 'março'),
    'abril': ('April', 'abril'),
    'mayo': ('May', 'maio'),
    'junio': ('June', 'junho'),
    'julio': ('July', 'julho'),
    'agosto': ('August', 'agosto'),
    'septiembre': ('September', 'setembro'),
    'setiembre': ('September', 'setembro'),
    'octubre': ('October', 'outubro'),
    'noviembre': ('November', 'novembro'),
    'diciembre': ('December', 'dezembro'),
}

days = {
    'domingo': ('Sunday', 'domingo'),
    'lunes': ('Monday', 'segunda-feira'),
    'martes': ('Tuesday', 'terça-feira'),
    'miercoles': ('Wednesday', 'quarta-feira'),
    'miércoles': ('Wednesday', 'quarta-feira'),
    'jueves': ('Thursday', 'quinta-feira'),
    'viernes': ('Friday', 'sexta-feira'),
    'sabado': ('Saturday', 'sábado'),
    'sábado': ('Saturday', 'sábado'),
}

times = {
    'mañana': ('the morning', 'manhã'),
    'maana': ('the morning', 'manhã'),
    'tarde': ('the afternoon', 'tarde'),
    'noche': ('the evening', 'noite'),
}

files = glob.glob('chspurgeon-sermons-es/**/*.md', recursive=True)
detailed_dates = {}

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
        # Look for typical date patterns
        match = re.search(r'((Un\s+)?Serm.*?\s+predicado.*?)\s+de\s+(\d{4})', content, re.IGNORECASE)
        if not match:
            match = re.search(r'((Un\s+)?Serm.*?\s+predicado.*?),\s+(\d{4})', content, re.IGNORECASE)
            
        if match:
            basename = os.path.basename(file)
            sermon_id_match = re.search(r'sermon-(\d+.*?)\.md', basename)
            if not sermon_id_match:
                continue
            
            sermon_id = sermon_id_match.group(1)
            raw_text = match.group(0).strip()
            
            # Now let's parse the parts to build clean EN/ES/PT strings
            
            # Is it "Un sermón"?
            has_un = bool(re.search(r'^Un\s+', raw_text, re.IGNORECASE))
            es_prefix = "Un sermón predicado" if has_un else "Sermón predicado"
            en_prefix = "A sermon preached" if has_un else "Sermon preached"
            pt_prefix = "Um sermão pregado" if has_un else "Sermão pregado"
            
            # Find time of day
            es_time = ""
            en_time = ""
            pt_time = ""
            for k, (en_t, pt_t) in times.items():
                if re.search(r'\b' + k + r'\b', raw_text, re.IGNORECASE):
                    es_time = "la " + ("mañana" if k == "maana" else k)
                    en_time = en_t
                    pt_time = pt_t
                    break
            
            # Find day of week
            es_dow = ""
            en_dow = ""
            pt_dow = ""
            for k, (en_d, pt_d) in days.items():
                if re.search(r'\b' + k + r'\b', raw_text, re.IGNORECASE):
                    es_dow = k.capitalize()
                    if es_dow == 'Miercoles': es_dow = 'Miércoles'
                    if es_dow == 'Sabado': es_dow = 'Sábado'
                    en_dow = en_d
                    pt_dow = pt_d
                    break
                    
            # Find month
            es_month = ""
            en_month = ""
            pt_month = ""
            for k, (en_m, pt_m) in months.items():
                if re.search(r'\b' + k + r'\b', raw_text, re.IGNORECASE):
                    es_month = "Septiembre" if k == "setiembre" else k.capitalize()
                    en_month = en_m
                    pt_month = pt_m
                    break
                    
            # Find day number
            day_num_match = re.search(r'\b(\d{1,2})\b(?=\s+de\s+[a-zA-Z]+)', raw_text, re.IGNORECASE)
            day_num = day_num_match.group(1) if day_num_match else ""
            if not day_num:
                # sometimes "el Domingo, 25 de Febrero"
                day_num_match = re.search(r',?\s+(\d{1,2})\s+de\s+', raw_text, re.IGNORECASE)
                if day_num_match:
                    day_num = day_num_match.group(1)
            
            # Year
            year_match = re.search(r'\b(\d{4})\b', raw_text)
            year = year_match.group(1) if year_match else ""
            
            if not (es_month and year and day_num):
                # If we couldn't parse it well, just skip or store the original
                continue
                
            # Construct ES
            es_str = es_prefix
            if es_time: es_str += f" {es_time} del"
            else: es_str += " el"
            if es_dow: es_str += f" {es_dow}"
            es_str += f" {day_num} de {es_month} de {year}"
            
            # Construct EN
            en_str = en_prefix
            if en_time: en_str += f" on {en_time} of"
            else: en_str += " on"
            if en_dow: en_str += f" {en_dow},"
            en_str += f" {en_month} {day_num}, {year}"
            
            # Construct PT
            pt_str = pt_prefix
            if pt_time: pt_str += f" na {pt_time} de"
            else: pt_str += " em"
            if pt_dow: pt_str += f" {pt_dow},"
            pt_str += f" {day_num} de {pt_month} de {year}"
            
            detailed_dates[sermon_id] = {
                'es': es_str,
                'en': en_str,
                'pt': pt_str
            }

with open('lib/sermon-dates.json', 'w', encoding='utf-8') as f:
    json.dump(detailed_dates, f, ensure_ascii=False, indent=2)

print(f"Generated lib/sermon-dates.json with {len(detailed_dates)} entries.")
