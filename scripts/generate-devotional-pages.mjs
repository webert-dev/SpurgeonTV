import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'public', 'data');
const OUT_DIR = path.join(DATA_DIR, 'devotional');

async function processLanguage(lang, inputFile) {
  const filePath = path.join(DATA_DIR, inputFile);
  
  let content = '[]';
  try {
    content = await fs.readFile(filePath, 'utf-8');
  } catch (e) {
    console.log(`[Devotional Shard] Could not read ${inputFile}, skipping.`);
    return;
  }
  
  const entries = JSON.parse(content);
  
  // Group by month
  const months = {};
  for (let i = 1; i <= 12; i++) {
    months[i] = [];
  }
  
  for (const entry of entries) {
    if (entry && entry.date) {
      const [mStr] = entry.date.split('-');
      const month = parseInt(mStr, 10);
      if (months[month]) {
        months[month].push(entry);
      }
    }
  }
  
  const langDir = path.join(OUT_DIR, lang);
  await fs.mkdir(langDir, { recursive: true });
  
  for (let month = 1; month <= 12; month++) {
    const monthFilePath = path.join(langDir, `${month.toString().padStart(2, '0')}.json`);
    await fs.writeFile(monthFilePath, JSON.stringify(months[month]), 'utf-8');
  }
  
  console.log(`[Devotional Shard] Generated 12 month files for ${lang}`);
}

async function main() {
  console.log('--- Sharding Devotional Data ---');
  await fs.mkdir(OUT_DIR, { recursive: true });
  
  await processLanguage('en', 'morning-and-evening.json');
  await processLanguage('pt', 'morning-and-evening-pt.json');
  await processLanguage('es', 'morning-and-evening-es.json');
  
  console.log('--- Done Sharding Devotional ---');
}

main().catch(console.error);
