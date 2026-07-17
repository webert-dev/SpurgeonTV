import fs from 'fs';
import path from 'path';

export function getAllArticles(lang = 'en') {
  const baseDir = path.join(process.cwd(), 'content', 'articles');
  if (!fs.existsSync(baseDir)) return [];

  const articles = [];
  const categories = fs.readdirSync(baseDir);

  for (const category of categories) {
    if (category === '[category]') continue; // Skip placeholder
    
    const catPath = path.join(baseDir, category);
    if (!fs.statSync(catPath).isDirectory()) continue;

    const slugs = fs.readdirSync(catPath);
    for (const slug of slugs) {
      if (slug === '[slug]') continue; // Skip placeholder
      
      const slugPath = path.join(catPath, slug);
      if (!fs.statSync(slugPath).isDirectory()) continue;

      let langFile = path.join(slugPath, `${lang}.json`);
      const enFile = path.join(slugPath, 'en.json');
      
      if (!fs.existsSync(langFile)) {
        langFile = enFile;
      }

      if (fs.existsSync(langFile)) {
        try {
          const data = JSON.parse(fs.readFileSync(langFile, 'utf8'));
          
          // Always get English date for reliable sorting since JS can't parse localized dates like "10 de Agosto"
          let sortDateStr = data.date;
          if (lang !== 'en' && fs.existsSync(enFile)) {
            const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));
            if (enData.date) sortDateStr = enData.date;
          }
          
          articles.push({
            href: `/about/${category}/${slug}`, // AboutArticleList will prefix this with lang
            category: category,
            date: data.date,
            sortDate: new Date(sortDateStr).getTime(),
            readTime: data.readTime,
            title: data.title,
            desc: data.description,
          });
        } catch (error) {
          console.error(`Error reading ${langFile}:`, error);
        }
      }
    }
  }

  // Sort by date descending using the reliable sortDate
  articles.sort((a, b) => {
    if (isNaN(a.sortDate) || isNaN(b.sortDate)) return 0;
    return b.sortDate - a.sortDate;
  });
  return articles;
}
