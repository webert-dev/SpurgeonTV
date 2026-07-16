import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  const lang = searchParams.get('lang') || 'en';

  if (!q) {
    return NextResponse.json({ error: 'Missing query parameter "q"' }, { status: 400 });
  }

  try {
    const indexPath = path.join(process.cwd(), 'public', 'data', 'dictionary', lang, 'search_index.json');
    
    let indexData;
    try {
      indexData = await fs.promises.readFile(indexPath, 'utf-8');
    } catch {
      // Fallback to English if translation is missing/incomplete
      const fallbackPath = path.join(process.cwd(), 'public', 'data', 'dictionary', 'en', 'search_index.json');
      indexData = await fs.promises.readFile(fallbackPath, 'utf-8');
    }
    
    const index = JSON.parse(indexData);

    const query = q.toLowerCase();
    
    // Simple filter: starts with or includes
    let results = index.filter(item => item.name.toLowerCase().includes(query));
    
    // Sort to prioritize exact starts-with matches
    results.sort((a, b) => {
      const aStarts = a.name.toLowerCase().startsWith(query) ? -1 : 1;
      const bStarts = b.name.toLowerCase().startsWith(query) ? -1 : 1;
      if (aStarts !== bStarts) return aStarts - bStarts;
      return a.name.length - b.name.length;
    });

    // Limit to 50 results
    results = results.slice(0, 50);

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error searching dictionary:', error);
    return NextResponse.json({ error: 'Failed to search dictionary' }, { status: 500 });
  }
}
