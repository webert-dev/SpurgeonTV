/**
 * data-loader.js
 * Utility to load large JSON files without fetching them at runtime.
 */

let cache = {};

export async function loadStaticText(filename, folder = 'data') {
  const cacheKey = `${folder}/${filename}`;
  if (cache[cacheKey]) return cache[cacheKey];

  try {
    const isNode = typeof process !== 'undefined' && process.release && process.release.name === 'node';
    
    // 1. Build Time & SSR (Node.js/Vercel)
    if (isNode) {
      // Use eval to prevent Turbopack/Webpack from trying to bundle 27,000 files in public folder
      const req = eval('require');
      const fs = req('fs/promises');
      const path = req('path');
      
      // Build path dynamically so bundler ignores the public trace
      const baseDir = process.cwd();
      const publicPath = path.join(baseDir, 'public', folder, filename);
      const contentPath = path.join(baseDir, 'content', folder, filename);
      
      try {
        const fileContents = await fs.readFile(publicPath, 'utf8');
        cache[cacheKey] = fileContents;
        return fileContents;
      } catch (err) {
        try {
          const fileContents = await fs.readFile(contentPath, 'utf8');
          cache[cacheKey] = fileContents;
          return fileContents;
        } catch(err2) {
        // On Vercel Serverless Functions, untraced public files aren't bundled.
        // Fallback to fetching via HTTP from the CDN.
        if (process.env.VERCEL || process.env.NEXT_PUBLIC_SITE_URL) {
          const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
          const prodUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
          
          const tryFetch = async (baseUrl) => {
            try {
              const res = await fetch(`${baseUrl}/${folder}/${filename}`, { cache: 'no-store' });
              if (res.ok) return await res.text();
            } catch (e) {}
            return null;
          };

          let text = null;
          if (vercelUrl) text = await tryFetch(vercelUrl);
          if (!text) text = await tryFetch(prodUrl);
          
          if (text) {
            cache[cacheKey] = text;
            return text;
          }
        }
        console.error(`[data-loader] Error reading ${filename} locally or via fetch`);
        return null;
        } // close catch(err2)
      } // close catch(err)
    } // close if(isNode)
    // 2. Client Side
    else {
      const filePathString = `/${folder}/${filename}`;
      const res = await fetch(filePathString);
      if (res.ok) {
        const text = await res.text();
        cache[cacheKey] = text;
        return text;
      }
    }
  } catch (error) {
    console.error(`[data-loader] Error reading ${filename}:`, error);
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
