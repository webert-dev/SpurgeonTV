import re
import os
import glob

def reformat_markdown(text):
    lines = text.split('\n')
    out_lines = []
    current_para = []
    
    # regex to detect sentence terminators
    # includes standard punctuation and closing quotes
    term_regex = re.compile(r'[.?!:;”"»]\s*$')
    # regex to detect starting a new sentence (Capital letter, numbers, or opening quotes)
    start_regex = re.compile(r'^[\s¿¡"«“]*[A-ZÁÉÍÓÚÑ0-9]')
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
            
        # Keep Markdown headers and blockquotes on their own lines
        if stripped.startswith('#') or stripped.startswith('>'):
            if current_para:
                out_lines.append(' '.join(current_para))
                current_para = []
            out_lines.append(stripped)
            continue
            
        # Edge case: If the line is entirely uppercase (like SERMÓN PREDICADO),
        # keep it isolated if it's in the metadata block at the top.
        # We can just handle everything normally for now.
        
        if not current_para:
            current_para.append(stripped)
            continue
            
        last_str = current_para[-1]
        
        ends_with_term = bool(term_regex.search(last_str))
        starts_with_cap = bool(start_regex.search(stripped))
        
        # We only break the paragraph if the previous line looks like the end of a sentence
        # AND the current line looks like the start of a new one.
        # BUT even then, in Spurgeon's sermons, sentences follow each other in the same paragraph.
        # How do we detect a TRUE paragraph break?
        # In the garbled text, true paragraph breaks are indistinguishable from sentence breaks
        # that happened to fall at the end of a line.
        # Let's assume a paragraph break ONLY occurs if it ends with a terminator AND starts with a cap.
        # Actually, if we do that, we get 1 paragraph per sentence, which is wrong.
        # No, wait. If we just join everything, we get ONE massive paragraph.
        # If we break on (ends_with_term AND starts_with_cap), we get one paragraph per sentence!
        # That's also wrong (too many short paragraphs).
        # We want to group sentences into paragraphs.
        
        if ends_with_term and starts_with_cap:
            # For now, let's just make it a new paragraph. It's better than 1-line fragments.
            # But wait, English text has multiple sentences per paragraph.
            # If the original Spanish text had ANY true paragraph indicators, what were they?
            pass
            
        # Actually, let's look at the source files. Did they have tab indentations?
        # Did they have multiple blank lines for a real paragraph?
        # In sermon-427.md, EVERY line is separated by 1 blank line.
        
        # Let's just join them if they DON'T look like a paragraph break.
        # A true paragraph break in the source might just be unrecoverable without looking at the HTML.
        # Wait, if we join sentences that don't end in a period, we fix the broken lines.
        # If a line DOES end in a period, and the next starts with a Capital, we can break the paragraph.
        # Let's try this and see how it looks.
        
        if ends_with_term and starts_with_cap:
            out_lines.append(' '.join(current_para))
            current_para = [stripped]
        else:
            current_para.append(stripped)
            
    if current_para:
        out_lines.append(' '.join(current_para))
        
    # Re-join paragraphs with double newlines
    # Post-process: fix spaces before punctuation (e.g., "mente . Es un tema")
    joined = '\n\n'.join(out_lines)
    joined = re.sub(r'\s+([.,;:?!])', r'\1', joined)
    
    return joined

with open('chspurgeon-sermons-es/volume-08/sermon-427.md', 'r', encoding='utf-8') as f:
    text = f.read()

res = reformat_markdown(text)
with open('test_format.md', 'w', encoding='utf-8') as f:
    f.write(res)
