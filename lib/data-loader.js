/**
 * data-loader.js
 * Utility to load large JSON files without bundling them into the Cloudflare Worker.
 * 
 * At build time (Node.js), this uses `fs` to read from the local file system.
 * At runtime (Cloudflare Workers), this uses `fetch` to read the static Asset.
 */

let cache = {};

export async function loadStaticJson(filename, folder = 'data') {
  const cacheKey = `${folder}/${filename}`;
  if (cache[cacheKey]) return cache[cacheKey];

  const isCloudflare = !!process.env.CF_PAGES;

  // 1. Try local filesystem (Build time / Local Dev)
  if (typeof process !== 'undefined' && !isCloudflare) {
    try {
      // Use eval to prevent Webpack/Turbopack from analyzing these requires and bundling 'fs'
      const fs = eval('require("fs/promises")');
      const path = eval('require("path")');
      const filepath = path.join(process.cwd(), 'public', folder, filename);
      const data = await fs.readFile(filepath, 'utf8');
      const json = JSON.parse(data);
      cache[cacheKey] = json;
      return json;
    } catch (e) {
      console.warn(`[data-loader] Failed to read ${filename} via fs:`, e.message);
    }
  }

  // 2. Fallback to fetch (Runtime on Cloudflare)
  const baseUrls = [
    'https://spurgeon-tv.vercel.app',
    process.env.NEXT_PUBLIC_SITE_URL
  ].filter(Boolean);

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
      } else {
        lastError = new Error(`HTTP ${res.status} from ${url}`);
      }
    } catch (e) {
      lastError = e;
    }
  }

  console.error(`[data-loader] Failed to fetch ${filename} from all URLs:`, lastError?.message);
  return null;
}
