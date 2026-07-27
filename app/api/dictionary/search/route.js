import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const q = searchParams.get('q');
  const lang = searchParams.get('lang') || 'en';

  if (!q) {
    return NextResponse.json({ error: 'Missing query parameter "q"' }, { status: 400 });
  }

  try {
    let res = await fetch(`${origin}/data/dictionary/${lang}/search_index.json`);
    
    if (!res.ok) {
      // Fallback to English if translation is missing/incomplete
      res = await fetch(`${origin}/data/dictionary/en/search_index.json`);
      if (!res.ok) throw new Error(`Search index not found (status ${res.status})`);
    }
    
    const index = await res.json();
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
    console.error('Error fetching dictionary search:', error);
    return NextResponse.json({ error: 'Failed to search dictionary' }, { status: 500 });
  }
}
