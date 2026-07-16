import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

let cache = {
  sermons: null,
  videos: null,
  articles: null,
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase();
  const type = searchParams.get('type') || 'sermons';
  const lang = searchParams.get('lang') || 'en';

  if (!q || q.length < 2) return NextResponse.json([]);

  const results = [];
  
  try {
    if (type === 'sermons') {
      if (!cache.sermons) {
        const filePath = path.join(process.cwd(), 'public', 'search-index.json');
        if (fs.existsSync(filePath)) {
          cache.sermons = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
      }
      
      if (cache.sermons) {
        const filtered = cache.sermons.filter(s => {
          const titleMatch = s.title.toLowerCase().includes(q);
          const refMatch = s.scripture?.reference?.toLowerCase().includes(q);
          const verseMatch = s.scripture?.verse?.toLowerCase().includes(q);
          return titleMatch || refMatch || verseMatch;
        }).slice(0, 15);
        
        filtered.forEach(s => {
          results.push({
            title: s.title,
            subtitle: `${s.scripture?.reference || 'Sermon'} • Vol ${s.volumeNum} (${s.year})`,
            href: `/${lang}/volume/${s.volume}/${s.slug}`
          });
        });
      }
      
    } else if (type === 'videos') {
      if (!cache.videos) {
        const filePath = path.join(process.cwd(), 'lib', 'videosData.json');
        if (fs.existsSync(filePath)) {
          cache.videos = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
      }
      
      if (cache.videos) {
        const videosLang = cache.videos[lang] || [];
        const filtered = videosLang.filter(v => v.title.toLowerCase().includes(q)).slice(0, 15);
        
        filtered.forEach(v => {
          results.push({
            title: v.title,
            subtitle: `Video`,
            href: `/${lang}/videos/watch/${v.id}`
          });
        });
      }
      
    } else if (type === 'articles') {
      if (!cache.articles) {
        const filePath = path.join(process.cwd(), 'lib', 'aboutArticles.json');
        if (fs.existsSync(filePath)) {
          cache.articles = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
      }
      
      if (cache.articles) {
        const articles = cache.articles[lang] || [];
        const filtered = articles.filter(a => a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q)).slice(0, 15);
        
        filtered.forEach(a => {
          results.push({
            title: a.title,
            subtitle: `Article • ${a.category}`,
            href: `/${lang}${a.href}`
          });
        });
      }
    }

  } catch (error) {
    console.error('Global search error:', error);
  }

  return NextResponse.json(results);
}
