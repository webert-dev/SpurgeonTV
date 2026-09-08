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
      
      // Build path dynamically so bundler ignores it
      const baseDir = process.cwd();
      const parts = [baseDir, 'public', folder, filename];
      const filepath = path.join(...parts);
      
      const fileContents = await fs.readFile(filepath, 'utf8');
      cache[cacheKey] = fileContents;
      return fileContents;
    } 
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
