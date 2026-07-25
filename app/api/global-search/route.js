import { NextResponse } from 'next/server';
import videosData from '../../../lib/videosData.json';
import sermonsData from '../../../public/search-index.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase();
  const type = searchParams.get('type') || 'sermons';
  const lang = searchParams.get('lang') || 'en';

  if (!q || q.length < 2) return NextResponse.json([]);

  const results = [];
  
  try {
    if (type === 'sermons') {
      const sermonsLang = sermonsData[lang] || sermonsData.en || [];
      const filtered = sermonsLang.filter(s => {
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
      
    } else if (type === 'videos') {
      const videosLang = videosData[lang] || [];
      const filtered = videosLang.filter(v => v.title.toLowerCase().includes(q)).slice(0, 15);
      
      filtered.forEach(v => {
        results.push({
          title: v.title,
          subtitle: `Video`,
          href: `/${lang}/videos/watch/${v.id}`
        });
      });
      
    } else if (type === 'articles') {
      const { getAllArticles } = require('../../../lib/articles');
      const articles = getAllArticles(lang);
      
      const filtered = articles.filter(a => a.title.toLowerCase().includes(q) || (a.desc && a.desc.toLowerCase().includes(q))).slice(0, 15);
      
      filtered.forEach(a => {
        results.push({
          title: a.title,
          subtitle: `Article • ${a.category.charAt(0).toUpperCase() + a.category.slice(1)}`,
          href: `/${lang}${a.href}`
        });
      });
      
    } else if (type === 'dictionary') {
      const dictionaryIndex = require('../../../public/data/dictionary/en/search_index.json');
      const filtered = dictionaryIndex.filter(d => d.name.toLowerCase().includes(q)).slice(0, 15);
      
      filtered.forEach(d => {
        results.push({
          title: d.name,
          subtitle: `Dictionary`,
          href: `/${lang}/dictionary?q=${encodeURIComponent(d.name)}`
        });
      });
      
    } else if (type === 'bible') {
      const biblesMap = {
        en: 'kjv.json',
        pt: 'acf.json',
        es: 'rvr.json'
      };
      const bibleFile = biblesMap[lang] || 'kjv.json';
      
      const origin = request.headers.get('host') ? `http://${request.headers.get('host')}` : request.nextUrl.origin;
      const res = await fetch(`${origin}/bibles/${bibleFile}`);
      if (res.ok) {
        const bible = await res.json();
        let count = 0;
        
        for (const book of bible) {
          for (let c = 0; c < book.chapters.length; c++) {
            const chapter = book.chapters[c];
            for (let v = 0; v < chapter.length; v++) {
              const verse = chapter[v];
              if (verse.toLowerCase().includes(q)) {
                results.push({
                  title: `${book.name} ${c + 1}:${v + 1}`,
                  subtitle: verse.length > 80 ? verse.substring(0, 80) + '...' : verse,
                  href: `/${lang}/bible?book=${encodeURIComponent(book.name)}&chapter=${c + 1}`
                });
                count++;
                if (count >= 15) break;
              }
            }
            if (count >= 15) break;
          }
          if (count >= 15) break;
        }
      }
    }

  } catch (error) {
    console.error('Global search error:', error);
  }

  return NextResponse.json(results);
}
