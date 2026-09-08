import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
const langs = ['en', 'pt', 'es'];

// Helper to ensure trailing slash
const withTrailingSlash = (url) => url.endsWith('/') ? url : `${url}/`;

const sitemapUrls = [];
const now = new Date().toISOString();

// ── 1. Static Routes ──────────────────────────────────────────────────────────
const staticRoutes = [
  { path: '',              changeFreq: 'daily',   priority: 1.0 },
  { path: '/about',        changeFreq: 'weekly',  priority: 0.8 },
  { path: '/about-us',     changeFreq: 'monthly', priority: 0.7 },
  { path: '/about/biography',    changeFreq: 'weekly', priority: 0.8 },
  { path: '/about/controversies',changeFreq: 'weekly', priority: 0.8 },
  { path: '/about/preacher',     changeFreq: 'weekly', priority: 0.8 },
  { path: '/about/theology',     changeFreq: 'weekly', priority: 0.8 },
  { path: '/bible',        changeFreq: 'weekly',  priority: 0.8 },
  { path: '/contact',      changeFreq: 'monthly', priority: 0.5 },
  { path: '/cookie-policy',changeFreq: 'monthly', priority: 0.3 },
  { path: '/devotional',   changeFreq: 'daily',   priority: 0.9 },
  { path: '/dictionary',   changeFreq: 'weekly',  priority: 0.8 },
  { path: '/download',     changeFreq: 'monthly', priority: 0.7 },
  { path: '/privacy-policy',changeFreq: 'monthly',priority: 0.3 },
  { path: '/sermons',      changeFreq: 'weekly',  priority: 0.9 },
  { path: '/support',      changeFreq: 'monthly', priority: 0.5 },
  { path: '/terms-of-service', changeFreq: 'monthly', priority: 0.3 },
  { path: '/transparency', changeFreq: 'monthly', priority: 0.5 },
  { path: '/volumes',      changeFreq: 'weekly',  priority: 0.9 },
];

for (const lang of langs) {
  for (const route of staticRoutes) {
    sitemapUrls.push({
      url: withTrailingSlash(`${baseUrl}/${lang}${route.path}`),
      lastModified: now,
      changeFrequency: route.changeFreq,
      priority: route.priority,
    });
  }
}

// ── 2. Sermons (Volumes and individual) ──────────────────────────────────────
const sermonDir = path.join(ROOT, 'content', 'sermons', 'en');
if (fs.existsSync(sermonDir)) {
  const volumes = fs.readdirSync(sermonDir).filter(f => f.startsWith('volume-'));

  for (const vol of volumes) {
    const volId = vol.replace('volume-', '');

    for (const lang of langs) {
      sitemapUrls.push({
        url: withTrailingSlash(`${baseUrl}/${lang}/volume/${volId}`),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }

    const volPath = path.join(sermonDir, vol);
    if (fs.statSync(volPath).isDirectory()) {
      const sermons = fs.readdirSync(volPath).filter(f => f.endsWith('.json'));
      for (const sermon of sermons) {
        const sermonSlug = sermon.replace('.json', '');
        for (const lang of langs) {
          sitemapUrls.push({
            url: withTrailingSlash(`${baseUrl}/${lang}/volume/${volId}/${sermonSlug}`),
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
          });
        }
      }
    }
  }
}

// ── 3. Devotional (all 366 days × 3 langs) ───────────────────────────────────
const d30 = [4, 6, 9, 11];
const daysInMonth = (m) => (m === 2 ? 29 : d30.includes(m) ? 30 : 31);

for (const lang of langs) {
  for (let month = 1; month <= 12; month++) {
    const days = daysInMonth(month);
    for (let day = 1; day <= days; day++) {
      const dateStr = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      sitemapUrls.push({
        url: withTrailingSlash(`${baseUrl}/${lang}/devotional/${dateStr}`),
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.5,
      });
    }
  }
}

// ── 4. Articles (individual) ──────────────────────────────────────────────────
const articlesIndexPath = path.join(ROOT, 'public', 'articles-index.json');
if (fs.existsSync(articlesIndexPath)) {
  const articlesIndex = JSON.parse(fs.readFileSync(articlesIndexPath, 'utf8'));
  for (const lang of langs) {
    const articles = articlesIndex[lang] || articlesIndex['en'] || [];
    for (const article of articles) {
      // article.href is like "/about/preacher/the-preachers-library"
      if (article.href) {
        sitemapUrls.push({
          url: withTrailingSlash(`${baseUrl}/${lang}${article.href}`),
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      }
    }
  }
}

// ── Build XML ────────────────────────────────────────────────────────────────
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const item of sitemapUrls) {
  xml += `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>\n`;
}

xml += `</urlset>`;

fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), xml);
console.log(`✅ Sitemap generated at public/sitemap.xml (${sitemapUrls.length} URLs)`);
