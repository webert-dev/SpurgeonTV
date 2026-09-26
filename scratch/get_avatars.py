import urllib.request
import re

urls = [
    'https://www.youtube.com/@Spurgeontv',
    'https://www.youtube.com/@CHSpurgeon_com',
    'https://www.youtube.com/@CHSpurgeonEspanol',
    'https://www.youtube.com/@DevocionalSpurgeon'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
        if match:
            print(f'{url}: {match.group(1)}')
        else:
            print(f'{url}: Not found')
    except Exception as e:
        print(f'{url}: {e}')
