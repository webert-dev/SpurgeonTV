import os
import glob

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if 'spurgeontv.vercel.app' in content:
            new_content = content.replace('spurgeontv.vercel.app', 'spurgeon-tv.vercel.app')
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.js') or file.endswith('.jsx'):
            replace_in_file(os.path.join(root, file))

if os.path.exists('app/sitemap.js'):
    replace_in_file('app/sitemap.js')
