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

def fix_header(lines, filename):
    true_title = correct_titles.get(filename, "Título Desconocido")
    
    # Check if header is already in good format
    if len(lines) > 2 and lines[0].startswith('#') and lines[2].startswith('>'):
        # It's likely already fixed, but let's re-fix just in case we are running on raw files
        pass

    sermon_num = ""
    m1 = re.match(r'^#\s*Sermón\s+([\d-]+)\s*\|', lines[0], re.IGNORECASE)
    if m1:
        sermon_num = m1.group(1)
    else:
        m1 = re.match(r'^#.*?([\d-]+)', lines[0])
        if m1: sermon_num = m1.group(1)

    clean_lines = [line.lstrip('> ') for line in lines[:40]]
    header_block = " ".join(clean_lines)
    
    verse = ""
    ref = ""
    rest_idx = 1
    
    verse_match = re.search(r'([“"”].*?[“"”])\s*(?:---+|--|-)?\s*([1-9]?[a-zA-ZáéíóúñÁÉÍÓÚÑ]+\s+\d+\s*[:\d,\s-]+)', header_block)
    
    if verse_match:
        verse = verse_match.group(1).strip()
        if verse.startswith('"') and verse.endswith('"'): verse = verse[1:-1]
        elif verse.startswith('“') and verse.endswith('”'): verse = verse[1:-1]
        ref = verse_match.group(2).strip()
        
        for i in range(1, 40):
            if 'Sermones' in lines[i]:
                rest_idx = i
                lines[i] = lines[i].replace('Sermones', '', 1).strip()
                break
    else:
        alt_match = re.search(r'(¡.*?!) ([1-9]?[a-zA-ZáéíóúñÁÉÍÓÚÑ]+\s+\d+\s*[:\d,\s-]+)', header_block)
        if alt_match:
            verse = alt_match.group(1).strip()
            ref = alt_match.group(2).strip()
            for i in range(1, 40):
                if 'Sermones' in lines[i]:
                    rest_idx = i
                    lines[i] = lines[i].replace('Sermones', '', 1).strip()
                    break
                    
    if not verse:
        return lines # Return original if we failed

    lines[0] = f"# Sermón {sermon_num} | {true_title}"
    new_header = f"> {verse}\n> {ref}\n\n"
    
    while rest_idx < len(lines) and not lines[rest_idx].strip():
        rest_idx += 1
        
    final_lines = [lines[0], ""] + new_header.split('\n') + lines[rest_idx:]
    return final_lines

def reformat_markdown(text):
    lines = text.split('\n')
    out_blocks = []
    current_para = []
    
    term_regex = re.compile(r'[.?!:;”"»]\s*$')
    start_regex = re.compile(r'^[\s¿¡"«“]*[A-ZÁÉÍÓÚÑ0-9]')
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
            
        if stripped.startswith('#') or stripped.startswith('>'):
            if current_para:
                out_blocks.append(' '.join(current_para))
                current_para = []
            
            # If the last block is also a blockquote, let's just append to it instead of making a new block
            if stripped.startswith('>') and out_blocks and out_blocks[-1].startswith('>'):
                out_blocks[-1] = out_blocks[-1] + '\n' + stripped
            else:
                out_blocks.append(stripped)
            continue
            
        if not current_para:
            current_para.append(stripped)
            continue
            
        last_str = current_para[-1]
        ends_with_term = bool(term_regex.search(last_str))
        starts_with_cap = bool(start_regex.search(stripped))
        
        if ends_with_term and starts_with_cap:
            out_blocks.append(' '.join(current_para))
            current_para = [stripped]
        else:
            current_para.append(stripped)
            
    if current_para:
        out_blocks.append(' '.join(current_para))
        
    joined = '\n\n'.join(out_blocks)
    joined = re.sub(r'\s+([.,;:?!])', r'\1', joined)
    return joined

for filename in os.listdir(vol_path):
    if not filename.endswith('.md'): continue
    filepath = os.path.join(vol_path, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # For sermon-44.md which has all lines prefixed with '>', we need to clean it up before doing anything else!
    if filename == 'sermon-44.md':
        lines = content.split('\n')
        # Remove > from everywhere except the verse
        cleaned_lines = []
        in_verse = False
        for line in lines:
            if line.startswith('>') and 'Sermones' not in line and not in_verse:
                # Keep first > for the verse? Let's just strip > entirely, since fix_header will recreate it
                cleaned_lines.append(line.lstrip('> '))
            else:
                cleaned_lines.append(line.lstrip('> '))
        content = '\n'.join(cleaned_lines)
    
    # 1. Fix header
    lines = content.split('\n')
    fixed_lines = fix_header(lines, filename)
    content_after_header = '\n'.join(fixed_lines)
    
    # 2. Format paragraphs correctly
    final_content = reformat_markdown(content_after_header)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("Successfully processed " + filename)
