import fs from 'fs';
import path from 'path';

export function getAllArticles(lang = 'en') {
  const baseDir = path.join(process.cwd(), 'content', 'articles');
  if (!fs.existsSync(baseDir)) return [];

  const articles = [];
  const categories = fs.readdirSync(baseDir);

  for (const category of categories) {
    const catPath = path.join(baseDir, category);
    if (!fs.statSync(catPath).isDirectory()) continue;

    const slugs = fs.readdirSync(catPath);
    for (const slug of slugs) {
      const slugPath = path.join(catPath, slug);
      if (!fs.statSync(slugPath).isDirectory()) continue;

      let langFile = path.join(slugPath, `${lang}.json`);
      if (!fs.existsSync(langFile)) {
        langFile = path.join(slugPath, 'en.json');
      }

      if (fs.existsSync(langFile)) {
        try {
          const data = JSON.parse(fs.readFileSync(langFile, 'utf8'));
          articles.push({
            href: `/about/${category}/${slug}`, // AboutArticleList will prefix this with lang
            category: category,
            date: data.date,
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

  // Sort by date descending
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return articles;
}
