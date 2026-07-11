import re
from bs4 import BeautifulSoup

with open('sermons_links.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
links = soup.find_all('a')

sermons = []
for link in links:
    href = link.get('href', '')
    text = link.get_text(strip=True)
    
    # We are looking for links that contain spurgeon.com.mx
    if 'spurgeon.com.mx/sermon' in href:
        # Google docs wraps URLs in a redirect like https://www.google.com/url?q=...
        match = re.search(r'q=(https?://[^&]+)', href)
        if match:
            actual_url = match.group(1)
        else:
            actual_url = href
            
        print(f"{text} -> {actual_url}")
