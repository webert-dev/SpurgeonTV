/**
 * data-loader.js
 * Utility to load large JSON files without fetching them at runtime.
 */
import { getCloudflareContext } from '@opennextjs/cloudflare';

let cache = {};

export async function loadStaticText(filename, folder = 'data') {
  const cacheKey = `${folder}/${filename}`;
  if (cache[cacheKey]) return cache[cacheKey];

  const filePathString = `/${folder}/${filename}`;

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
          const req = new Request(new URL(filePathString, 'http://localhost').toString());
          const res = await cfCtx.env.ASSETS.fetch(req);
          if (res.ok) {
            const text = await res.text();
            cache[cacheKey] = text;
            return text;
          } else {
            console.warn(`[data-loader] ASSETS.fetch returned ${res.status} for ${filePathString}`);
          }
        }
      } catch (e) {
        console.warn(`[data-loader] ASSETS.fetch threw an error:`, e.message);
      }
    }
  } catch (e) {
    console.warn(`[data-loader] Failed to load ${filename} via primary method:`, e.message);
  }

  // 3. Fallback (Fetch)
  const env = typeof process !== 'undefined' ? process.env || {} : {};
  const isDev = env.NODE_ENV === 'development';
  const siteUrl = isDev ? 'http://localhost:3000' : (env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv');

  // CRITICAL: Prevent infinite loop on Cloudflare when trying to fetch own domain
  if (!isDev && (siteUrl.includes('spurgeon.tv') || siteUrl.includes('pages.dev'))) {
    console.error(`[data-loader] ABORT: Fetching ${siteUrl} from within Cloudflare Worker causes 522 loop!`);
    return null;
  }

  try {
    const res = await fetch(`${siteUrl}${filePathString}`, { cache: 'no-store' });
    if (res.ok) {
      const text = await res.text();
      cache[cacheKey] = text;
      return text;
    }
  } catch (e) { 
    console.warn(`[data-loader] Fallback fetch failed:`, e.message);
  }

  return null;
}

let jsonCache = {};

export async function loadStaticJson(filename, folder = 'data') {
  const cacheKey = `${folder}/${filename}`;
  if (jsonCache[cacheKey]) return jsonCache[cacheKey];

  const text = await loadStaticText(filename, folder);
  if (text) {
    try {
      const parsed = JSON.parse(text);
      jsonCache[cacheKey] = parsed;
      return parsed;
    } catch (e) {
      console.error(`[data-loader] Failed to parse JSON for ${cacheKey}:`, e.message);
      return null;
    }
  }
  return null;
}
