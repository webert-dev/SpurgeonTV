import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request, { params }) {
  const { letter } = await params;
  const { searchParams, origin } = new URL(request.url);
  const lang = searchParams.get('lang') || 'en';

  if (!letter || letter.length !== 1) {
    return NextResponse.json({ error: 'Invalid letter parameter' }, { status: 400 });
  }

  try {
    const safeLetter = letter.toLowerCase();
    const res = await fetch(`${origin}/data/dictionary/${lang}/${safeLetter}.json`);
    
    if (!res.ok) {
      if (res.status === 404) {
        return NextResponse.json({ error: 'Letter not found' }, { status: 404 });
      }
      throw new Error(`Fetch failed with status ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching dictionary letter ${letter}:`, error);
    return NextResponse.json({ error: 'Failed to read dictionary data' }, { status: 500 });
  }
}
