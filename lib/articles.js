import { loadStaticJson } from './data-loader';

const ptMonths = { 'janeiro': 0, 'fevereiro': 1, 'março': 2, 'abril': 3, 'maio': 4, 'junho': 5, 'julho': 6, 'agosto': 7, 'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11 };
const esMonths = { 'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3, 'mayo': 4, 'junio': 5, 'julio': 6, 'agosto': 7, 'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11 };

function parseCustomDate(dateStr) {
  if (!dateStr) return 0;
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) return d.getTime();

  // Try to parse "31 de maio de 2026" or "31 de mayo de 2026"
  const parts = dateStr.toLowerCase().split(' ');
  if (parts.length >= 5 && parts[1] === 'de' && parts[3] === 'de') {
    const day = parseInt(parts[0], 10);
    const monthStr = parts[2];
    const year = parseInt(parts[4], 10);
    
    let month = ptMonths[monthStr];
    if (month === undefined) month = esMonths[monthStr];
    
    if (month !== undefined && !isNaN(day) && !isNaN(year)) {
      return new Date(year, month, day).getTime();
    }
  }
  return 0; // Fallback
}

// Live reader directly from content/articles for instant automatic discovery in Node.js
function getLiveArticles(lang = 'en') {
  try {
    const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';
    if (!isNode) return null;
    const req = eval('require');
    const fs = req('fs');
    const path = req('path');

    const baseDir = path.join(process.cwd(), 'content', 'articles');
    if (!fs.existsSync(baseDir)) return null;

    const articles = [];
    const categories = fs.readdirSync(baseDir);

    for (const category of categories) {
      if (category === '[category]') continue;
      const catPath = path.join(baseDir, category);
      if (!fs.statSync(catPath).isDirectory()) continue;

      const slugs = fs.readdirSync(catPath);
      for (const slug of slugs) {
        if (slug === '[slug]') continue;
        const slugPath = path.join(catPath, slug);
        if (!fs.statSync(slugPath).isDirectory()) continue;

        let langFile = path.join(slugPath, `${lang}.json`);
        const enFile = path.join(slugPath, 'en.json');
        if (!fs.existsSync(langFile)) langFile = enFile;

        if (fs.existsSync(langFile)) {
          try {
            const data = JSON.parse(fs.readFileSync(langFile, 'utf8'));
            articles.push({
              href: `/about/${category}/${slug}`,
              category,
              date: data.date,
              sortDate: parseCustomDate(data.date),
              readTime: data.readTime,
              title: data.title,
              desc: data.description,
            });
          } catch (e) {}
        }
      }
    }
    return articles;
  } catch (err) {
    return null;
  }
}

export async function getAllArticles(lang = 'en') {
  // 1. Try reading live from disk for instant automatic detection of new/edited articles
  const live = getLiveArticles(lang);
  let articles = live && live.length > 0 ? live : null;

  // 2. Fallback to pre-generated index if live scanning is not available (e.g. edge or bundled env)
  if (!articles) {
    const articlesIndex = await loadStaticJson('articles-index.json', '') || {};
    articles = articlesIndex[lang] || articlesIndex['en'] || [];
  }
  
  // Create a copy to avoid mutating the imported object, and parse the date correctly
  const sortedArticles = articles.map(a => ({
    ...a,
    sortDate: typeof a.sortDate === 'number' && a.sortDate > 0 ? a.sortDate : parseCustomDate(a.date)
  }));

  // Sort by date descending (newest first)
  sortedArticles.sort((a, b) => {
    return b.sortDate - a.sortDate;
  });
  
  return sortedArticles;
}
