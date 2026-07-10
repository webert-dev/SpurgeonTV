import urllib.request
import re
import os
import html

url = "http://web.archive.org/web/2/http://www.spurgeon.com.mx/sermon1.html"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    response = urllib.request.urlopen(req)
    html_content = response.read().decode('windows-1252', errors='ignore')
except Exception as e:
    print(f"Error fetching: {e}")
    exit(1)

# Basic HTML to Markdown conversion
# The sermons on this site usually have <title> as title, and text in paragraphs.
title_match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE | re.DOTALL)
title = html.unescape(title_match.group(1).strip()) if title_match else "Sermón 1"

# The text usually starts after some header images or <hr>. We can try to extract text from <p> and <font> tags,
# or use a simple HTML parser. Let's use a regex to strip script/style and then strip tags.
content = re.sub(r'<script.*?>.*?</script>', '', html_content, flags=re.IGNORECASE | re.DOTALL)
content = re.sub(r'<style.*?>.*?</style>', '', content, flags=re.IGNORECASE | re.DOTALL)

# Find the body
body_match = re.search(r'<body.*?>(.*?)</body>', content, re.IGNORECASE | re.DOTALL)
if body_match:
    content = body_match.group(1)

# Convert <p>, <br> to newlines
content = re.sub(r'<p.*?>', '\n\n', content, flags=re.IGNORECASE)
content = re.sub(r'</p>', '', content, flags=re.IGNORECASE)
content = re.sub(r'<br\s*/?>', '\n', content, flags=re.IGNORECASE)

# Strip remaining tags
content = re.sub(r'<[^>]+>', '', content)
content = html.unescape(content)

# Clean up multiple newlines and spaces
lines = [line.strip() for line in content.split('\n')]
clean_lines = []
for line in lines:
    if line or (clean_lines and clean_lines[-1] != ''):
        clean_lines.append(line)

content_md = "\n".join(clean_lines).strip()

# Format final markdown
markdown = f"# {title}\n\n{content_md}"

# Remove the archive.org banner text
banner_end = markdown.find("La Inmutabilidad de Dios")
if banner_end != -1:
    markdown = f"# La Inmutabilidad de Dios\n\n{markdown[banner_end+len('La Inmutabilidad de Dios'):].strip()}"

# Ensure directory exists
os.makedirs("chspurgeon-sermons-es/volume-1", exist_ok=True)

with open("chspurgeon-sermons-es/volume-1/sermon_1.md", "w", encoding="utf-8") as f:
    f.write(markdown)

print("Saved sermon_1.md successfully.")
