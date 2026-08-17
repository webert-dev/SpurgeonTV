import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
const langs = ['en', 'pt', 'es'];

const staticRoutes = [
  '',
  '/about',
  '/about/biography',
  '/about/controversies',
  '/about/preacher',
  '/about/theology',
  '/bible',
  '/contact',
  '/cookie-policy',
  '/devotional',
  '/dictionary',
  '/privacy-policy',
  '/sermons',
  '/support',
  '/terms-of-service',
  '/transparency',
  '/volumes',
];

const sitemapUrls = [];
const now = new Date().toISOString();

// Helper to ensure trailing slash
const withTrailingSlash = (url) => url.endsWith('/') ? url : `${url}/`;

// 1. Static Routes
for (const lang of langs) {
  for (const route of staticRoutes) {
    sitemapUrls.push({
      url: withTrailingSlash(`${baseUrl}/${lang}${route}`),
      lastModified: now,
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : 0.8,
    });
  }
}

// 2. Dynamic Routes (Volumes and Sermons)
const sermonDir = path.join(ROOT, 'content', 'sermons', 'en');
if (fs.existsSync(sermonDir)) {
  const volumes = fs.readdirSync(sermonDir).filter(f => f.startsWith('volume-'));
  
  for (const vol of volumes) {
    const volId = vol.replace('volume-', '');
    
    // Add Volume route
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
console.log('✅ Sitemap generated at public/sitemap.xml');
