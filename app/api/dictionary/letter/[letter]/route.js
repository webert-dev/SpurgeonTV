import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request, { params }) {
  const { letter } = await params;

  if (!letter || letter.length !== 1) {
    return NextResponse.json({ error: 'Invalid letter parameter' }, { status: 400 });
  }

  try {
    const safeLetter = letter.toLowerCase();
    const filePath = path.join(process.cwd(), 'public', 'data', 'dictionary', 'en', `${safeLetter}.json`);
    
    // Check if file exists
    try {
      await fs.promises.access(filePath);
    } catch {
      return NextResponse.json({ error: 'Letter not found' }, { status: 404 });
    }

    const fileData = await fs.promises.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileData);

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error reading dictionary letter ${letter}:`, error);
    return NextResponse.json({ error: 'Failed to read dictionary data' }, { status: 500 });
  }
}
