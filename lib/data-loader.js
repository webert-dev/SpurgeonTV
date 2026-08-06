/**
 * data-loader.js
 * Utility to load large JSON files without fetching them at runtime.
 */
import { getCloudflareContext } from '@opennextjs/cloudflare';

let cache = {};

export async function loadStaticText(filename, folder = 'data') {
  const cacheKey = `${folder}/${filename}`;
  if (cache[cacheKey]) return cache[cacheKey];

  try {
    const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';
    
    // 1. Build Time (Node.js)
    if (isNode) {
      const req = typeof module !== 'undefined' && module.require ? module.require : require;
      const fs = req('fs/promises');
      const path = req('path');
      const filepath = path.join(process.cwd(), 'public', folder, filename);
      const fileContents = await fs.readFile(filepath, 'utf8');
      cache[cacheKey] = fileContents;
      return fileContents;
    } 
    // 2. Runtime (Cloudflare Workers)
    else {
      try {
        const cfCtx = getCloudflareContext();
        if (cfCtx && cfCtx.env && cfCtx.env.ASSETS) {
          const assetUrl = new URL(`/${folder}/${filename}`, 'https://assets.local');
          const res = await cfCtx.env.ASSETS.fetch(assetUrl);
          if (res.ok) {
            const text = await res.text();
            cache[cacheKey] = text;
            return text;
          }
        }
      } catch (e) {
        // Fallthrough
      }
    }
  } catch (e) {
    console.warn(`[data-loader] Failed to load ${filename} via primary method:`, e.message);
  }

  // 3. Fallback (Fetch)
  const env = typeof process !== 'undefined' ? process.env || {} : {};
  const baseUrls = ['https://spurgeon-tv.vercel.app', env.NEXT_PUBLIC_SITE_URL].filter(Boolean);

  for (const baseUrl of baseUrls) {
    if (baseUrl === 'https://spurgeon.tv' || baseUrl === 'https://www.spurgeon.tv') continue;
    try {
      const res = await fetch(`${baseUrl}/${folder}/${filename}`, { cache: 'no-store' });
      if (res.ok) {
        const text = await res.text();
        cache[cacheKey] = text;
        return text;
      }
    } catch (e) { /* ignore */ }
  }

  return null;
}

export async function loadStaticJson(filename, folder = 'data') {
  const text = await loadStaticText(filename, folder);
  return text ? JSON.parse(text) : null;
}
