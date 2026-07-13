import fs from 'fs/promises';
import path from 'path';

// The base URL of the site. Can be updated via env var in production.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
const LANGUAGES = ['en', 'pt', 'es'];

export default async function sitemap() {
  const urls = [];

  // 1. Add Home Pages
  LANGUAGES.forEach((lang) => {
    urls.push({
      url: `${BASE_URL}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    });
  });

  // 2. Fetch the pre-built search index to get all volumes and sermons
  // This is lightning fast as it avoids reading thousands of files dynamically.
  let indexData = [];
  try {
    const indexPath = path.join(process.cwd(), 'lib', 'search-index.json');
    const data = await fs.readFile(indexPath, 'utf-8');
    indexData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading search-index.json for sitemap:', error);
    return urls; // return just home pages if index is missing
  }

  // Get unique volumes
  const volumes = [...new Set(indexData.map(item => item.volume))];

  // 3. Add Volume Pages
  volumes.forEach((vol) => {
    LANGUAGES.forEach((lang) => {
      urls.push({
        url: `${BASE_URL}/${lang}/volume/${vol}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // 4. Add Sermon Pages
  indexData.forEach((sermon) => {
    LANGUAGES.forEach((lang) => {
      urls.push({
        url: `${BASE_URL}/${lang}/volume/${sermon.volume}/${sermon.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return urls;
}
