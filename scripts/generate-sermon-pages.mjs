import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'public', 'data');
const OUT_DIR = path.join(DATA_DIR, 'sermons-pages');
const INDEX_FILE = path.join(ROOT, 'public', 'search-index.json');
const LIMIT = 9;

async function processLanguage(lang, searchIndexData) {
  const baseIndex = searchIndexData?.en || [];
  const localIndex = searchIndexData?.[lang] || [];
  
  const localMap = new Map();
  for (const s of localIndex) {
    localMap.set(s.slug, s);
  }
  
  const combined = baseIndex.map(enItem => {
    const locItem = localMap.get(enItem.slug);
    
    let target = enItem;
    let isTranslated = false;
    
    if (lang !== 'en' && locItem) { 
      target = locItem; 
      isTranslated = true; 
    } else if (lang === 'en') { 
      isTranslated = true; 
    }
    
    return {
      ...target,
      isTranslated
    };
  });

  combined.sort((a, b) => {
    const numA = parseInt(a.slug.match(/\d+/)?.[0] || '0', 10);
    const numB = parseInt(b.slug.match(/\d+/)?.[0] || '0', 10);
    return numA - numB;
  });

  const total = combined.length;
  const totalPages = Math.ceil(total / LIMIT);

  const langDir = path.join(OUT_DIR, lang);
  await fs.mkdir(langDir, { recursive: true });

  for (let page = 1; page <= totalPages; page++) {
    const offset = (page - 1) * LIMIT;
    const paginatedSlugs = combined.slice(offset, offset + LIMIT);
    
    const pageData = {
      sermons: paginatedSlugs,
      total,
      totalPages,
      currentPage: page
    };

    await fs.writeFile(
      path.join(langDir, `page-${page}.json`),
      JSON.stringify(pageData),
      'utf-8'
    );
  }

  console.log(`[Sermon Pages] Generated ${totalPages} pages for ${lang}`);
}

async function main() {
  console.log('--- Generating Sermon Pages ---');
  let content = '{}';
  try {
    content = await fs.readFile(INDEX_FILE, 'utf-8');
  } catch (e) {
    console.log('[Sermon Pages] search-index.json not found. Run generate-search-index.mjs first.');
    return;
  }
  const searchIndexData = JSON.parse(content);
  
  await processLanguage('en', searchIndexData);
  await processLanguage('pt', searchIndexData);
  await processLanguage('es', searchIndexData);
  
  console.log('--- Done Generating Sermon Pages ---');
}

main().catch(console.error);
