# -*- coding: utf-8 -*-
"""
Compiler for lib/bible-translations-info.js
Combines PART1, PART2, and PART3 into a unified ES module.
"""

import json
import os
import sys

# Import the 3 parts
from bible_info_part1 import PART1
from bible_info_part2 import PART2
from bible_info_part3 import PART3

ALL = {}
ALL.update(PART1)
ALL.update(PART2)
ALL.update(PART3)

# Add aliases
if 'niv' in ALL and 'niv1984' not in ALL:
    ALL['niv1984'] = ALL['niv']

print(f"Total Bible translations compiled: {len(ALL)}")

# Verify all translations have en, pt, es
for key, item in ALL.items():
    for l in ['en', 'pt', 'es']:
        assert l in item, f"Missing {l} in translation {key}"
        assert 'name' in item[l], f"Missing name in {key}.{l}"
        assert 'history' in item[l], f"Missing history in {key}.{l}"
        assert 'features' in item[l], f"Missing features in {key}.{l}"

print("All entries validated successfully!")

# Generate lib/bible-translations-info.js
js_code = """// lib/bible-translations-info.js
// Comprehensive scholarly database of all Bible translations available on SpurgeonTV.
// Localized in English (en), Portuguese (pt), and Spanish (es).

export const BIBLE_TRANSLATIONS_DATA = """ + json.dumps(ALL, ensure_ascii=False, indent=2) + """;

/**
 * Returns detailed historical, manuscript, and theological information for a given Bible translation.
 * @param {string} key - e.g. 'kjv', 'niv', 'nvi', 'nvies', 'rvr1960', 'lbla', etc.
 * @param {string} lang - 'pt' | 'en' | 'es'
 * @returns {object|null}
 */
export function getBibleTranslationInfo(key, lang = 'pt') {
  if (!key) return null;
  const normalizedKey = String(key).toLowerCase().trim();
  const entry = BIBLE_TRANSLATIONS_DATA[normalizedKey] || BIBLE_TRANSLATIONS_DATA['kjv'];
  if (!entry) return null;
  
  const targetLang = ['pt', 'en', 'es'].includes(lang) ? lang : 'en';
  return entry[targetLang] || entry['en'] || entry['pt'];
}

export default BIBLE_TRANSLATIONS_DATA;
"""

target_path = os.path.join('lib', 'bible-translations-info.js')
with open(target_path, 'w', encoding='utf-8') as f:
    f.write(js_code)

size_kb = os.path.getsize(target_path) / 1024
print(f"Generated {target_path} successfully ({size_kb:.1f} KB)!")
