import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const baseDir = path.join(ROOT, 'content', 'articles');
const publicArticlesDir = path.join(ROOT, 'public', 'data', 'articles');

function getAllArticles(lang = 'en') {
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
          
          let sortDateStr = data.date;
          if (lang !== 'en' && fs.existsSync(enFile)) {
            const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));
            if (enData.date) sortDateStr = enData.date;
          }
          
          articles.push({
            href: `/about/${category}/${slug}`,
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

  articles.sort((a, b) => {
    if (isNaN(a.sortDate) || isNaN(b.sortDate)) return 0;
    return b.sortDate - a.sortDate; // Newest first
  });

  return articles;
}

const langs = ['en', 'pt', 'es'];
const articlesIndex = {};

for (const lang of langs) {
  articlesIndex[lang] = getAllArticles(lang);
}

// Ensure directories exist
fs.mkdirSync(path.join(ROOT, 'lib'), { recursive: true });
fs.mkdirSync(path.join(ROOT, 'public', 'data'), { recursive: true });

// Copy articles to public/data/articles
if (fs.existsSync(publicArticlesDir)) {
  fs.rmSync(publicArticlesDir, { recursive: true, force: true });
}
if (fs.existsSync(baseDir)) {
  fs.cpSync(baseDir, publicArticlesDir, { recursive: true });
}

// Write index files
const outPathData = path.join(ROOT, 'public', 'data', 'articles-index.json');
const outPathPublic = path.join(ROOT, 'public', 'articles-index.json');
fs.writeFileSync(path.join(ROOT, 'lib', 'articles-index.json'), JSON.stringify(articlesIndex, null, 2));
fs.writeFileSync(outPathData, JSON.stringify(articlesIndex));
fs.writeFileSync(outPathPublic, JSON.stringify(articlesIndex));

console.log('✅ Generated lib/articles-index.json and copied articles to public/data/articles');
