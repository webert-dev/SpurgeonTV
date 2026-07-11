import urllib.request
import json
import re
import os
import sys
import time
from bs4 import BeautifulSoup
from bs4 import UnicodeDammit
from bs4 import element

sys.stdout.reconfigure(encoding='utf-8')

# Approximate Spurgeon volume mapping (Sermon Number -> Volume Number)
def get_volume(sermon_id):
    if sermon_id <= 53: return 1
    if sermon_id <= 110: return 2
    if sermon_id <= 168: return 3
    if sermon_id <= 228: return 4
    if sermon_id <= 286: return 5
    if sermon_id <= 347: return 6
    if sermon_id <= 426: return 7
    if sermon_id <= 486: return 8
    if sermon_id <= 547: return 9
    if sermon_id <= 606: return 10
    if sermon_id <= 667: return 11
    if sermon_id <= 727: return 12
    if sermon_id <= 787: return 13
    if sermon_id <= 847: return 14
    if sermon_id <= 907: return 15
    if sermon_id <= 967: return 16
    if sermon_id <= 1027: return 17
    if sermon_id <= 1087: return 18
    if sermon_id <= 1147: return 19
    if sermon_id <= 1209: return 20
    # Fallback linear approximation for the rest (approx 60 per volume after vol 20)
    return 20 + ((sermon_id - 1209) // 60) + 1

def fetch_cdx():
    url = 'http://web.archive.org/cdx/search/cdx?url=http://www.spurgeon.com.mx/sermon*&output=json&fl=original,timestamp,mimetype&filter=statuscode:200&collapse=urlkey'
    print(f"Fetching CDX API: {url}")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            return data[1:] # Skip header row
    except Exception as e:
        print(f"Error fetching CDX: {e}")
        return []

def get_latest_snapshots(cdx_data):
    snapshots = {}
    for row in cdx_data:
        original, timestamp, mimetype = row
        if mimetype != 'text/html': continue
        
        match = re.search(r'sermon(\d+[a-zA-Z0-9-]*)\.html', original)
        if not match: continue
        
        sermon_id = match.group(1)
        # Keep the latest timestamp for each sermon
        if sermon_id not in snapshots or timestamp > snapshots[sermon_id]['timestamp']:
            snapshots[sermon_id] = {
                'original': original,
                'timestamp': timestamp,
                'wayback_url': f"http://web.archive.org/web/{timestamp}/{original}"
            }
    return snapshots

def html_to_markdown(html, sermon_id):
    soup = BeautifulSoup(html, 'html.parser')
    
    # Remove wayback machine headers
    for div in soup.find_all('div', id='wm-ipp-base'):
        div.decompose()
    for script in soup.find_all('script'):
        script.decompose()

    # Find the title (usually in a bold tag or a font tag with size)
    title_text = f"Sermón {sermon_id}"
    
    # Often the title is the first center tag or a large font tag
    h1 = soup.find('h1')
    if h1:
        title_text = h1.get_text(strip=True)
    else:
        # Heuristic: looking for the sermon title which is usually large font
        fonts = soup.find_all('font')
        for f in fonts:
            size = f.get('size', '')
            if size in ['5', '6', '7', '+2', '+3']:
                text = f.get_text(strip=True)
                if len(text) > 5 and 'Púlpito' not in text:
                    title_text = text
                    break
    
    # Extract paragraphs and format them
    md_lines = []
    md_lines.append(f"# Sermón {sermon_id} | {title_text.title()}\n")
    
    content_lines = []
    # Most content is inside paragraphs or just text separated by br
    # We will just walk the body and extract text, checking for blockquotes.
    body = soup.find('body')
    if not body: return None
    
    # Some older sites just use br tags. We get all text strings, handling <br> as newlines.
    raw_text = body.get_text(separator='\n', strip=True)
    
    # Remove the wayback machine junk that gets extracted from text
    lines = raw_text.split('\n')
    cleaned_lines = []
    
    in_poetry = False
    
    for i, orig_line in enumerate(lines):
        line = orig_line.strip()
        if not line: continue
        if "About this capture" in line or "COLLECTED BY" in line or "TIMESTAMPS" in line:
            continue
        if "Wayback Machine" in line or "http://" in line:
            continue
        if line.startswith("-->"):
            continue
        if "El Púlpito de la Capilla" in line or "NO." == line or line == str(sermon_id):
            continue
        if "Sermón predicado en la" in line or "En la capilla de" in line:
            continue
        if "Charles Haddon Spurgeon" in line.title():
            continue
            
        # Format scripture blockquotes (usually appear at the top)
        if (line.startswith('"') and len(line) > 10 and not in_poetry and 
            (';' in line or ',' in line) and 
            (':' in lines[i:min(len(lines), i+5)][-1])):
            # It's likely the scripture quote
            pass # We will handle poetry/scripture globally later
            
        # Fix poetry quotes (lines starting with ")
        if line.startswith('"') and line.count('"') == 1:
            in_poetry = True
            line = "> " + line.replace('"', '').strip()
        elif in_poetry and line.endswith('"') and line.count('"') == 1:
            in_poetry = False
            line = "> " + line.replace('"', '').strip()
        elif in_poetry:
            line = "> " + line.strip()
        elif line.startswith('"') and line.endswith('"') and len(line) < 100:
            # Single line poetry
            line = "> " + line.replace('"', '').strip()

        # Just to ensure the scripture reference gets picked up as a blockquote
        if len(cleaned_lines) == 0 and not line.startswith('>'):
            if line.startswith('"'):
                line = "> " + line[1:]
        elif len(cleaned_lines) == 1 and cleaned_lines[0].startswith('>') and not line.startswith('>'):
            if ":" in line and len(line) < 40:
                line = "> " + line
                
        cleaned_lines.append(line)
        
    return "\n".join(md_lines) + "\n" + "\n\n".join(cleaned_lines) + "\n"


def main():
    base_dir = os.path.abspath('chspurgeon-sermons-es')
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)
        
    print("Fetching index from CDX...")
    cdx_data = fetch_cdx()
    snapshots = get_latest_snapshots(cdx_data)
    
    print(f"Found {len(snapshots)} unique sermons to download.")
    
    count = 0
    for s_id, info in snapshots.items():
        try:
            num = int(re.search(r'\d+', s_id).group(0))
        except:
            num = 9999
            
        vol_num = get_volume(num)
        
        vol_dir = os.path.join(base_dir, f'volume-{vol_num:02d}')
        if not os.path.exists(vol_dir):
            os.makedirs(vol_dir)
            
        file_path = os.path.join(vol_dir, f'sermon-{s_id}.md')
        
        if os.path.exists(file_path):
            print(f"[{count+1}/{len(snapshots)}] Skipping sermon {s_id}, already exists.")
            count += 1
            continue
            
        print(f"[{count+1}/{len(snapshots)}] Downloading sermon {s_id} (Vol {vol_num}) from {info['wayback_url']}...")
        
        try:
            req = urllib.request.Request(info['wayback_url'], headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                raw_bytes = response.read()
                
            dammit = UnicodeDammit(raw_bytes)
            html = dammit.unicode_markup
                
            md_content = html_to_markdown(html, s_id)
            if md_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(md_content)
            else:
                print(f"  -> Failed to parse content for {s_id}")
                
            time.sleep(1) # Be nice to the API
        except Exception as e:
            print(f"  -> Error downloading/parsing {s_id}: {e}")
            
        count += 1
        
    print("Download and formatting complete!")

if __name__ == '__main__':
    main()
