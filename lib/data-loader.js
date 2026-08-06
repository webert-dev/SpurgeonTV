/**
 * data-loader.js
 * Utility to load large JSON files without fetching them at runtime.
 */
import { getCloudflareContext } from '@opennextjs/cloudflare';

let cache = {};

export async function loadStaticJson(filename, folder = 'data') {
  const cacheKey = `${folder}/${filename}`;
  if (cache[cacheKey]) return cache[cacheKey];

  try {
    const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';
    
    // 1. Build Time (Node.js) - Read directly from file system
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
    
    // 2. Runtime (Cloudflare Workers) - Read from ASSETS binding directly
    else {
      try {
        const cfCtx = getCloudflareContext();
        if (cfCtx && cfCtx.env && cfCtx.env.ASSETS) {
          const assetUrl = new URL(`/${folder}/${filename}`, 'https://assets.local');
          const res = await cfCtx.env.ASSETS.fetch(assetUrl);
          if (res.ok) {
            const json = await res.json();
            cache[cacheKey] = json;
            return json;
          }
        }
      } catch (e) {
        // Fallthrough if not on Cloudflare
      }
    }
  } catch (e) {
    console.warn(`[data-loader] Failed to load ${filename} via primary method:`, e.message);
  }

  // 3. Last resort fallback (Standard HTTP fetch for Vercel/LocalEdge)
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
