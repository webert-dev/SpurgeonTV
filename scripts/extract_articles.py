import os
import re
import json
import time
from glob import glob
from googletrans import Translator

# Inicializar tradutor
translator = Translator()

def translate_text(text, target='pt'):
    if not text or not text.strip():
        return text
    try:
        # Atraso para evitar rate limits
        time.sleep(0.5)
        res = translator.translate(text, dest=target)
        return res.text
    except Exception as e:
        print(f"Erro na tradução: {e}")
        return text

def extract_content(content):
    data = {
        "title": "",
        "seoTitle": "",
        "description": "",
        "keywords": [],
        "date": "",
        "readTime": "",
        "content": [],
        "bibliography": [],
        "tags": [],
        "prev": {"title": "", "slug": ""},
        "next": {"title": "", "slug": ""}
    }
    
    # Metadata
    metadata_match = re.search(r'export const metadata = \{(.*?)\};', content, re.DOTALL)
    if metadata_match:
        meta_content = metadata_match.group(1)
        
        title_match = re.search(r'title:\s*["\'](.*?)["\']', meta_content)
        if title_match: data["seoTitle"] = title_match.group(1)
            
        desc_match = re.search(r'description:\s*["\'](.*?)["\']', meta_content)
        if desc_match: data["description"] = desc_match.group(1)
            
        keywords_match = re.search(r'keywords:\s*\[(.*?)\]', meta_content)
        if keywords_match:
            kw_str = keywords_match.group(1).replace('"', '').replace("'", "")
            data["keywords"] = [k.strip() for k in kw_str.split(',')]
            
    # Page Info (Date, Time, Title)
    header_match = re.search(r'<header.*?>(.*?)</header>', content, re.DOTALL)
    if header_match:
        h = header_match.group(1)
        info_match = re.search(r'<div[^>]*>(.*?)</div>', h, re.DOTALL)
        if info_match:
            info = info_match.group(1).strip()
            parts = info.split('•')
            if len(parts) >= 2:
                data["date"] = parts[0].strip()
                data["readTime"] = parts[1].strip()
                
        title_match = re.search(r'<h1[^>]*>(.*?)</h1>', h, re.DOTALL)
        if title_match:
            data["title"] = title_match.group(1).strip()
            
    # Main Content - we will look for all <h3> and <p> that are not in <details> or <nav>
    # Simplest way: split content after </header> and before <hr> or Bibliography
    main_section = ""
    start_idx = content.find('</header>')
    end_idx = content.find('<hr')
    if end_idx == -1: end_idx = content.find('{/* BIBLIOGRAPHY */}')
    if end_idx == -1: end_idx = content.find('{/* TAGS */}')
    
    if start_idx != -1 and end_idx != -1:
        main_section = content[start_idx:end_idx]
        
    # Extract blocks
    blocks = re.findall(r'<(h3|p)[^>]*>(.*?)</\1>', main_section, re.DOTALL)
    for tag, text in blocks:
        # limpa tags HTML internas do texto, exceto <em>, <strong>, <a>
        text = text.strip()
        data["content"].append({"type": tag, "text": text})
        
    # Bibliography
    bib_match = re.search(r'{/\* BIBLIOGRAPHY \*/}.*?<ol[^>]*>(.*?)</ol>', content, re.DOTALL)
    if bib_match:
        items = re.findall(r'<li[^>]*>(.*?)</li>', bib_match.group(1), re.DOTALL)
        data["bibliography"] = [i.strip() for i in items]
        
    # Tags
    tags_match = re.search(r'{\[\s*(.*?)\s*\].map', content, re.DOTALL)
    if tags_match:
        t_str = tags_match.group(1).replace('"', '').replace("'", "")
        data["tags"] = [t.strip() for t in t_str.split(',') if t.strip()]
        
    # Pagination
    pag_match = re.search(r'{/\* PAGINATION \*/}.*?<div[^>]*>(.*?)</div>\s*</article>', content, re.DOTALL)
    if pag_match:
        links = re.findall(r'<Link\s+href=["\']/en/about/([^"\']+)["\'][^>]*>(.*?)</Link>', pag_match.group(1), re.DOTALL)
        for link_url, link_content in links:
            slug = link_url.split('/')[-1]
            t_match = re.search(r'<span[^>]*font-serif[^>]*>(.*?)</span>', link_content, re.DOTALL)
            t = t_match.group(1).strip() if t_match else slug
            
            if "Previous Article" in link_content or "Anterior" in link_content:
                data["prev"] = {"title": t, "slug": slug, "category": link_url.split('/')[0]}
            elif "Next Article" in link_content or "Próximo" in link_content:
                data["next"] = {"title": t, "slug": slug, "category": link_url.split('/')[0]}

    return data

def translate_data(data):
    pt_data = json.loads(json.dumps(data))
    
    print(f"Translating: {data['title']}")
    pt_data['title'] = translate_text(data['title'])
    pt_data['seoTitle'] = translate_text(data['seoTitle'])
    pt_data['description'] = translate_text(data['description'])
    pt_data['date'] = translate_text(data['date'])
    pt_data['readTime'] = translate_text(data['readTime'])
    
    for i, item in enumerate(data['content']):
        pt_data['content'][i]['text'] = translate_text(item['text'])
        
    for i, bib in enumerate(data['bibliography']):
        pt_data['bibliography'][i] = translate_text(bib)
        
    for i, t in enumerate(data['tags']):
        pt_data['tags'][i] = translate_text(t)
        
    if data['prev']['title']:
        pt_data['prev']['title'] = translate_text(data['prev']['title'])
    if data['next']['title']:
        pt_data['next']['title'] = translate_text(data['next']['title'])
        
    return pt_data

def main():
    base_dir = r"c:\Users\fcout\SISTEMA_FAMILIA\04_NEGOCIOS_E_CARREIRAS\04.4_Tecnologia_e_Programacao\SPURGEONTV"
    articles_dir = os.path.join(base_dir, "app", "[lang]", "about")
    output_base = os.path.join(base_dir, "content", "articles")
    
    os.makedirs(output_base, exist_ok=True)
    
    # Ignorar page.js que são os índices da categoria (ex: biography/page.js)
    # Procurar por biography/*/page.js
    pattern = os.path.join(articles_dir, "*", "*", "page.js")
    files = glob(pattern)
    
    print(f"Found {len(files)} articles to process.")
    
    for file_path in files:
        parts = file_path.split(os.sep)
        slug = parts[-2]
        category = parts[-3]
        
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        data_en = extract_content(content)
        
        # Save EN
        out_dir = os.path.join(output_base, category, slug)
        os.makedirs(out_dir, exist_ok=True)
        
        en_out = os.path.join(out_dir, "en.json")
        with open(en_out, "w", encoding="utf-8") as f:
            json.dump(data_en, f, indent=2, ensure_ascii=False)
            
        # Translate and Save PT
        pt_out = os.path.join(out_dir, "pt.json")
        if not os.path.exists(pt_out):
            data_pt = translate_data(data_en)
            with open(pt_out, "w", encoding="utf-8") as f:
                json.dump(data_pt, f, indent=2, ensure_ascii=False)
            print(f"Saved PT version for {slug}")
        else:
            print(f"PT version for {slug} already exists.")

if __name__ == "__main__":
    main()
