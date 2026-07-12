import re
import os
import glob

def reformat_markdown(text):
    lines = text.split('\n')
    out_lines = []
    current_para = []
    
    term_regex = re.compile(r'[.?!:;”"»]\s*$')
    start_regex = re.compile(r'^[\s¿¡"«“]*[A-ZÁÉÍÓÚÑ0-9]')
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
            
        if stripped.startswith('#') or stripped.startswith('>'):
            if current_para:
                out_lines.append(' '.join(current_para))
                current_para = []
            out_lines.append(stripped)
            continue
            
        if not current_para:
            current_para.append(stripped)
            continue
            
        last_str = current_para[-1]
        
        ends_with_term = bool(term_regex.search(last_str))
        starts_with_cap = bool(start_regex.search(stripped))
        
        if ends_with_term and starts_with_cap:
            out_lines.append(' '.join(current_para))
            current_para = [stripped]
        else:
            current_para.append(stripped)
            
    if current_para:
        out_lines.append(' '.join(current_para))
        
    joined = '\n\n'.join(out_lines)
    joined = re.sub(r'\s+([.,;:?!])', r'\1', joined)
    return joined

def format_all():
    files = glob.glob('chspurgeon-sermons-es/**/*.md', recursive=True)
    for fpath in files:
        if os.path.getsize(fpath) == 0:
            continue
        with open(fpath, 'r', encoding='utf-8') as f:
            text = f.read()
            
        res = reformat_markdown(text)
        
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(res)
            
    print(f"Formatted {len(files)} files.")

format_all()
