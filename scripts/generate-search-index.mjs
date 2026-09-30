// scripts/generate-search-index.mjs
// Run with: node scripts/generate-search-index.mjs
// Generates public/search-index.json for the client-side search feature.

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SERMONS_DIR = path.join(ROOT, 'chspurgeon-sermons-main');
const OUTPUT_LIB = path.join(ROOT, 'public', 'data', 'search-index.json');
const OUTPUT_PUBLIC = path.join(ROOT, 'public', 'search-index.json');

function extractScripture(content) {
  const lines = content.split('\n');
  const scriptureLines = [];
  let inBlockquote = false;

  for (let i = 0; i < Math.min(lines.length, 12); i++) {
    const line = lines[i].trim();
    if (line.startsWith('>')) {
      inBlockquote = true;
      scriptureLines.push(line.replace(/^>\s*/, '').trim());
    } else if (inBlockquote && line === '') {
      continue;
    } else if (inBlockquote) {
      break;
    }
  }

  const nonEmpty = scriptureLines.filter((l) => l.length > 0);
  if (nonEmpty.length === 0) return null;

  if (nonEmpty.length >= 2) {
    return {
      verse: nonEmpty.slice(0, -1).join(' '),
      reference: nonEmpty[nonEmpty.length - 1],
    };
  }
  return { verse: nonEmpty[0], reference: null };
}

async function main() {
  console.log('📖 Reading sermon volumes for all languages...');

  const index = {
    en: [],
    pt: [],
    es: []
  };

  const dirs = [
    { lang: 'en', dir: path.join(ROOT, 'chspurgeon-sermons-main') },
    { lang: 'pt', dir: path.join(ROOT, 'chspurgeon-sermons-pt') },
    { lang: 'es', dir: path.join(ROOT, 'chspurgeon-sermons-es') }
  ];

  for (const { lang, dir } of dirs) {
    if (await fs.stat(dir).catch(() => null)) {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      const volumes = entries
        .filter((d) => d.isDirectory() && d.name.startsWith('volume-'))
        .map((d) => d.name)
        .sort();

      for (const volume of volumes) {
        const volumeNum = parseInt(volume.replace('volume-', ''), 10);
        const volumePath = path.join(dir, volume);
        const files = (await fs.readdir(volumePath)).filter((f) => f.endsWith('.md'));

        for (const filename of files) {
          const filePath = path.join(volumePath, filename);
          const content = await fs.readFile(filePath, 'utf-8');
          const firstLine = content.split('\n')[0];
          const title = firstLine.replace(/^#\s*/, '').trim();
          const slug = filename.replace('.md', '');
          const scripture = extractScripture(content);

          index[lang].push({ title, slug, volume, volumeNum, scripture });
        }
      }
      console.log(`  ✓ Indexed ${lang.toUpperCase()} sermons`);
    }
  }

  // Ensure output directories exist
  await fs.mkdir(path.dirname(OUTPUT_LIB), { recursive: true });
  await fs.mkdir(path.dirname(OUTPUT_PUBLIC), { recursive: true });
  const json = JSON.stringify(index);
  await fs.writeFile(OUTPUT_LIB, json, 'utf-8');
  await fs.writeFile(OUTPUT_PUBLIC, json, 'utf-8');

  console.log(`\n✅ Done! ${index.length} sermons indexed`);
  console.log(`   → lib/search-index.json (for Next.js static import)`);
  console.log(`   → public/search-index.json (for client-side fetch)`);
}

main().catch((err) => {
  console.error('Error generating index:', err);
  process.exit(1);
});
