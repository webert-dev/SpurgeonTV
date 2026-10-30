import json
import re

with open('app/[lang]/bible/BibleReader.js', 'r', encoding='utf-8') as f:
    code = f.read()

options = re.findall(r'<option\s+value="([^"]+)">([^<]+)</option>', code)
print(f"Total translation options in BibleReader.js: {len(options)}")

with open('lib/bible-translations-info.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

json_match = re.search(r'export const BIBLE_TRANSLATIONS_DATA = (\{[\s\S]*?\});\n\n/\*\*', js_content)
assert json_match, "Could not find BIBLE_TRANSLATIONS_DATA in JS file"
data = json.loads(json_match.group(1))

print(f"Total translation entries in database: {len(data)}")

missing = []
for val, label in options:
    if val not in data:
        missing.append((val, label))
    else:
        for lang in ['pt', 'en', 'es']:
            entry = data[val].get(lang)
            assert entry, f"Missing lang {lang} for {val}"
            assert entry['name'], f"Missing name in {val}.{lang}"
            assert entry['history'], f"Missing history in {val}.{lang}"
            assert len(entry['features']) > 0, f"No features in {val}.{lang}"
            assert entry['theologyAndLegacy'], f"Missing theologyAndLegacy in {val}.{lang}"
            assert entry['scopeAndUsage'], f"Missing scopeAndUsage in {val}.{lang}"
            assert entry['copyright'], f"Missing copyright in {val}.{lang}"

if missing:
    print("MISSING OPTIONS:", missing)
else:
    print("SUCCESS: ALL 26 DROPDOWN OPTIONS ARE 100% COVERED IN PT, EN, AND ES!")
