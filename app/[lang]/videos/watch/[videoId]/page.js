import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { getDictionary } from '../../../../../lib/dictionaries';

import ShareButton from '../../../../components/ShareButton';

export async function generateMetadata({ params }) {
  const { lang, videoId } = await params;
  const video = getVideoData(videoId);
  
  if (!video) {
    return { title: "Video Not Found | Charles Spurgeon" };
  }

  return {
    title: video.title + " | Charles Spurgeon",
    description: "Watch this video on SPURGEONTV.",
    openGraph: {
      images: [video.thumbnail],
    },
  };
}

function getVideoData(videoId) {
  const filePath = path.join(process.cwd(), 'lib', 'videosData.json');
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  
  for (const channel of ['pt', 'en', 'es']) {
    const found = data[channel].find(v => v.id === videoId);
    if (found) {
      return { ...found, channelId: channel };
    }
  }
  return null;
}

export default async function WatchVideoPage({ params }) {
  const { lang = 'en', videoId } = await params;
  const dict = await getDictionary(lang);
  
  const video = getVideoData(videoId);

  if (!video) {
    notFound();
  }

  return (
    <div className="container" style={{ padding: '2rem 1rem 6rem', minHeight: '90vh', maxWidth: '1000px', margin: '0 auto' }}>
      <Link href={`/${lang}/videos/${video.channelId}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        {dict.watchVideo.back}
      </Link>
      
      <div style={{ background: '#000', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=${lang}&hl=${lang}`}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          ></iframe>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', lineHeight: '1.4' }}>
          {video.title}
        </h1>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface)', border: '1px solid var(--border)', padding: '0.8rem 1.5rem', borderRadius: '8px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500', transition: 'background 0.2s' }} className="btn-secondary">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M9.667,15.333V8.667L15.333,12L9.667,15.333z"/>
            </svg>
            {dict.watchVideo.watchOnYoutube}
          </a>
          
          <ShareButton title={video.title} text={dict.watchVideo.share} />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .btn-secondary:hover {
          background: rgba(255,255,255,0.05) !important;
          border-color: var(--text-primary) !important;
        }
      `}} />
    </div>
  );
}
