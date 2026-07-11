import urllib.request
import json
from bs4 import BeautifulSoup
import re
import os

indices = [
    'http://web.archive.org/web/20260210125552/http://www.spurgeon.com.mx/indiceCNPS.html',
    'http://web.archive.org/web/20260210113819/http://www.spurgeon.com.mx/indiceTM1.html',
    'http://web.archive.org/web/20260210123421/http://www.spurgeon.com.mx/indiceTM2.html'
]

# indice.html is just a root index that links to these 3 above plus others like biographies. 
# We only want the 3 main sermon indices based on his structure.

sermon_links = set()
sermon_metadata = []

def fetch_html(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

for idx_url in indices:
    html = fetch_html(idx_url)
    soup = BeautifulSoup(html, 'html.parser')
    for a in soup.find_all('a'):
        href = a.get('href')
        if not href:
            continue
        # Extract the original url from the wayback machine url
        # Ex: /web/20250426084834/http://www.spurgeon.com.mx/sermon1.html
        match = re.search(r'http://www\.spurgeon\.com\.mx/sermon(\d+.*)\.html', href)
        if match:
            sermon_id_str = match.group(1)
            original_url = f"http://www.spurgeon.com.mx/sermon{sermon_id_str}.html"
            wayback_link = f"http://web.archive.org{href}" if href.startswith('/web') else href
            
            title = a.get_text(strip=True)
            if not title and original_url not in sermon_links:
                continue
            
            if original_url not in sermon_links:
                sermon_links.add(original_url)
                sermon_metadata.append({
                    'id': sermon_id_str,
                    'title': title,
                    'original': original_url,
                    'wayback': wayback_link
                })

# Sort by id
def sort_key(s):
    # Try to parse the first number in the ID string
    m = re.search(r'\d+', s['id'])
    return int(m.group(0)) if m else 9999

sermon_metadata.sort(key=sort_key)

with open('all_spanish_sermons.json', 'w', encoding='utf-8') as f:
    json.dump(sermon_metadata, f, ensure_ascii=False, indent=2)

print(f"Successfully extracted {len(sermon_metadata)} sermon links.")
