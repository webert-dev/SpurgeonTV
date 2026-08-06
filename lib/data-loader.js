/**
 * data-loader.js
 * Utility to load large JSON files without bundling them into the Cloudflare Worker.
 * 
 * At build time (Node.js), this uses `fs` to read from the local file system.
 * At runtime (Cloudflare Workers), this uses `fetch` to read the static Asset.
 */

let cache = {};

/**
 * Loads a JSON file from the public/data directory or via fetch if on Edge
 * @param {string} filename - The name of the file to load (e.g. 'search-index.json')
 * @param {string} folder - The subfolder in public/data (default: '')
 */
export async function loadStaticJson(filename, folder = 'data') {
  const cacheKey = `${folder}/${filename}`;
  if (cache[cacheKey]) return cache[cacheKey];

  const env = typeof process !== 'undefined' ? process.env || {} : {};

  // 1. Check if we are running in a Node.js environment (e.g., during next build or local dev)
  const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';
  
  // 2. Local Node.js file system read (Build Time / Dev)
  if (isNode) {
    try {
      // Use module.require to hide the require from Webpack/Turbopack bundlers
      // This prevents the bundler from polyfilling fs or throwing errors in Edge,
      // and critically, avoids using eval() which crashes Cloudflare Workers completely.
      const req = typeof module !== 'undefined' && module.require ? module.require : require;
      const fs = req('fs/promises');
      const path = req('path');
      const filepath = path.join(process.cwd(), 'public', 'data', folder, filename);
      
      const fileContents = await fs.readFile(filepath, 'utf8');
      return JSON.parse(fileContents);
    } catch (e) {
      console.warn(`[data-loader] Failed to read ${filename} via local fs (Node.js):`, e.message);
    }
  }

  // 2. Fallback to fetch (Runtime on Cloudflare)
  const baseUrls = [
    'https://spurgeon-tv.vercel.app',
    env.NEXT_PUBLIC_SITE_URL
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
