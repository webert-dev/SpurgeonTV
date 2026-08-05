import { loadStaticJson } from './data-loader';

export async function getAllArticles(lang = 'en') {
  const articlesIndex = await loadStaticJson('articles-index.json') || {};
  const articles = articlesIndex[lang] || articlesIndex['en'] || [];
  
  // Create a copy to avoid mutating the imported object, and parse the date correctly
  const sortedArticles = articles.map(a => ({
    ...a,
    sortDate: new Date(a.date).getTime()
  }));

  // Sort by date descending
  sortedArticles.sort((a, b) => {
    if (isNaN(a.sortDate) || isNaN(b.sortDate)) return 0;
    return b.sortDate - a.sortDate;
  });
  
  return sortedArticles;
}
