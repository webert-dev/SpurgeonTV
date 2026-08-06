/**
 * data-loader.js
 * Utility to load large JSON files without fetching them at runtime.
 * We use dynamic imports so Webpack bundles them efficiently for Cloudflare Workers.
 */

let cache = {};

// Explicit imports so Webpack knows exactly what to bundle (bypasses loopback/fs issues)
const staticFiles = {
  'articles-index.json': () => import('../public/data/articles-index.json').then(m => m.default),
  'search-index.json': () => import('../public/data/search-index.json').then(m => m.default),
  'videosData.json': () => import('../public/data/videosData.json').then(m => m.default),
  'morning-and-evening.json': () => import('../public/data/morning-and-evening.json').then(m => m.default),
  'morning-and-evening-pt.json': () => import('../public/data/morning-and-evening-pt.json').then(m => m.default),
  'morning-and-evening-es.json': () => import('../public/data/morning-and-evening-es.json').then(m => m.default),
  'sermon-dates.json': () => import('../public/data/sermon-dates.json').then(m => m.default),
  'sermon_downloads.json': () => import('../public/data/sermon_downloads.json').then(m => m.default),
  'sermon_tags_en_full.json': () => import('../public/data/sermon_tags_en_full.json').then(m => m.default),
};

export async function loadStaticJson(filename, folder = 'data') {
  const cacheKey = `${folder}/${filename}`;
  if (cache[cacheKey]) return cache[cacheKey];

  try {
    // 1. Check if we have a bundled static import for this file
    if (folder === 'data' && staticFiles[filename]) {
      const data = await staticFiles[filename]();
      cache[cacheKey] = data;
      return data;
    }

    // 2. Fallback to local fs (Only in Node.js during build)
    const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';
    if (isNode) {
      const req = typeof module !== 'undefined' && module.require ? module.require : require;
      const fs = req('fs/promises');
      const path = req('path');
      const filepath = path.join(process.cwd(), 'public', folder, filename);
      const fileContents = await fs.readFile(filepath, 'utf8');
      const json = JSON.parse(fileContents);
      cache[cacheKey] = json;
      return json;
    }
  } catch (e) {
    console.warn(`[data-loader] Failed to load ${filename}:`, e.message);
  }

  // 3. Last resort fallback (Fetch from external host)
  const env = typeof process !== 'undefined' ? process.env || {} : {};
  const baseUrls = ['https://spurgeon-tv.vercel.app', env.NEXT_PUBLIC_SITE_URL].filter(Boolean);

  let lastError;
  for (const baseUrl of baseUrls) {
    if (baseUrl === 'https://spurgeon.tv' || baseUrl === 'https://www.spurgeon.tv') continue;
    
    const url = `${baseUrl}/${folder}/${filename}`;
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        cache[cacheKey] = json;
        return json;
      }
    } catch (e) { lastError = e; }
  }

  console.error(`[data-loader] All methods failed for ${filename}`);
  return null;
}
