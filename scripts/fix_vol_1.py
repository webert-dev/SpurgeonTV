import os
import re

vol_path = r'c:\Users\fcout\SISTEMA_FAMILIA\04_NEGOCIOS_E_CARREIRAS\04.4_Tecnologia_e_Programacao\SPURGEONTV\chspurgeon-sermons-es\volume-01'

correct_titles = {
    'sermon-1.md': 'La Inmutabilidad de Dios',
    'sermon-5.md': 'El Consolador',
    'sermon-7-8.md': 'Cristo Crucificado',
    'sermon-11.md': 'El Cristo del Pueblo',
    'sermon-15.md': 'La Biblia',
    'sermon-20.md': 'La Mente Puesta en la Carne Es Enemiga de Dios',
    'sermon-26.md': 'Los Dos Efectos del Evangelio',
    'sermon-27.md': 'El Nombre Eterno',
    'sermon-30.md': 'El Poder del Espíritu Santo',
    'sermon-34.md': 'Predicar el Evangelio',
    'sermon-39-40.md': 'El Cielo y el Infierno',
    'sermon-41-42.md': 'La Elección',
    'sermon-44.md': 'Arrepentimiento Para Vida',
    'sermon-52.md': 'El Libre Albedrío: Un Esclavo'
}

for filename in os.listdir(vol_path):
    if not filename.endswith('.md'): continue
    filepath = os.path.join(vol_path, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    
    sermon_num = ""
    m1 = re.match(r'^#\s*Sermón\s+([\d-]+)\s*\|', lines[0], re.IGNORECASE)
    if m1:
        sermon_num = m1.group(1)
    else:
        m1 = re.match(r'^#.*?([\d-]+)', lines[0])
        if m1: sermon_num = m1.group(1)
    
    true_title = correct_titles.get(filename, "Título Desconocido")
    
    # We want to extract the verse and the reference from the top lines.
    # Because they are a mess, we'll join the first 25 lines and search with regex.
    # Let's remove blockquote markers if they exist
    clean_lines = [line.lstrip('> ') for line in lines[:30]]
    header_block = " ".join(clean_lines)
    
    verse = ""
    ref = ""
    rest_idx = 1
    
    # Let's find the verse which is usually in quotes, followed by reference
    verse_match = re.search(r'([“"”].*?[“"”])\s*(?:---+|--|-)?\s*([1-9]?[a-zA-ZáéíóúñÁÉÍÓÚÑ]+\s+\d+\s*[:\d,\s-]+)', header_block)
    
    if verse_match:
        verse = verse_match.group(1).strip()
        if verse.startswith('"') and verse.endswith('"'): verse = verse[1:-1]
        elif verse.startswith('“') and verse.endswith('”'): verse = verse[1:-1]
        
        ref = verse_match.group(2).strip()
        
        # Where does the content start? Usually after the word "Sermones"
        # Let's find the line index that contains "Sermones " or where the content starts.
        for i in range(1, 30):
            if 'Sermones' in lines[i]:
                # The text usually starts on this line or the next
                rest_idx = i
                # Strip 'Sermones' from the line
                lines[i] = lines[i].replace('Sermones', '', 1).strip()
                break
    else:
        # Some don't have quotes? Like sermon-44.md
        # > ¡De manera que también a los gentiles ha dado Dios arrepentimiento para vida! Hechos 11: 18.
        alt_match = re.search(r'(¡.*?!) ([1-9]?[a-zA-ZáéíóúñÁÉÍÓÚÑ]+\s+\d+\s*[:\d,\s-]+)', header_block)
        if alt_match:
            verse = alt_match.group(1).strip()
            ref = alt_match.group(2).strip()
            for i in range(1, 30):
                if 'Sermones' in lines[i]:
                    rest_idx = i
                    lines[i] = lines[i].replace('Sermones', '', 1).strip()
                    break
        
    # Replace the top lines
    if verse and ref:
        lines[0] = f"# Sermón {sermon_num} | {true_title}"
        new_header = f"> {verse}\n> {ref}\n\n"
        
        # Remove empty lines at start of content
        while rest_idx < len(lines) and not lines[rest_idx].strip():
            rest_idx += 1
            
        # Also clean up the rest of the lines (remove > from the beginning of all lines if it's there)
        # sermon-44 has > on every line!
        for i in range(rest_idx, len(lines)):
            if lines[i].startswith('>'):
                lines[i] = lines[i][1:].strip()
                
        final_lines = [lines[0], ""] + new_header.split('\n') + lines[rest_idx:]
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(final_lines))
        print(f"Fixed {filename}")
    else:
        print(f"FAILED to find verse in {filename}")
