import { loadStaticJson } from './data-loader';

const ptMonths = { 'janeiro': 0, 'fevereiro': 1, 'março': 2, 'abril': 3, 'maio': 4, 'junho': 5, 'julho': 6, 'agosto': 7, 'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11 };
const esMonths = { 'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3, 'mayo': 4, 'junio': 5, 'julio': 6, 'agosto': 7, 'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11 };

function parseCustomDate(dateStr) {
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

export async function getAllArticles(lang = 'en') {
  const articlesIndex = await loadStaticJson('articles-index.json', '') || {};
  const articles = articlesIndex[lang] || articlesIndex['en'] || [];
  
  // Create a copy to avoid mutating the imported object, and parse the date correctly
  const sortedArticles = articles.map(a => ({
    ...a,
    sortDate: parseCustomDate(a.date)
  }));

  // Sort by date descending
  sortedArticles.sort((a, b) => {
    return b.sortDate - a.sortDate;
  });
  
  return sortedArticles;
}
