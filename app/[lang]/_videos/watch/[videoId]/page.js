import Link from 'next/link';
import path from 'path';
import { notFound } from 'next/navigation';
import { getDictionary } from '../../../../../lib/dictionaries';
import ShareButton from '../../../../components/ShareButton';
import CitationBox from '../../../../components/CitationBox';
import { loadStaticJson } from '../../../../../lib/data-loader';

export const revalidate = false;

export const dynamicParams = false;

export function generateStaticParams() {
  // Retorna array vazio para não pré-renderizar nenhum vídeo e evitar estourar o limite de 20k arquivos da Cloudflare.
  // Os vídeos serão gerados sob demanda (SSR) porque dynamicParams = true.
  return [];
}

async function getVideoData(videoId) {
  const data = await loadStaticJson('videosData.json') || { pt: [], en: [], es: [], 'es-devocional': [] };
  for (const channel of ['pt', 'en', 'es', 'es-devocional']) {
    const found = data[channel]?.find(v => v.id === videoId);
    if (found) {
      return { ...found, channelId: channel };
    }
  }
  return null;
}

export async function generateMetadata({ params }) {
  const { lang, videoId } = await params;
  const video = await getVideoData(videoId);
  
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

export default async function WatchVideoPage({ params }) {
  const { lang = 'en', videoId } = await params;
  const dict = await getDictionary(lang);
  
  const video = await getVideoData(videoId);

  if (!video) {
    notFound();
  }

  return (
    <div className="container" style={{ padding: '2rem 1rem 6rem', minHeight: '90vh', maxWidth: '1000px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": video.title,
            "description": video.description || `Sermon or documentary about Charles Spurgeon on SPURGEON TV.`,
            "thumbnailUrl": [video.thumbnail],
            "uploadDate": "2026-02-15T08:00:00+08:00",
            "contentUrl": `https://spurgeon-tv.vercel.app/videos/watch/${videoId}`,
            "embedUrl": `https://www.youtube.com/embed/${videoId}`
          })
        }}
      />
      <Link href={`/${lang}/videos/${video.channelId}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        {dict.watchVideo.back}
      </Link>
      
      {videoId === 'cKYQW5KB40U' && dict.watchVideo?.alertTitle && (
        <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.4)', borderRadius: '12px' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {dict.watchVideo.alertTitle}
          </h3>
          <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.5', fontSize: '1rem' }}>
            {dict.watchVideo.alertBody}
          </p>
        </div>
      )}

      <div style={{ background: '#000', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=${lang === 'pt' ? 'pt-BR' : lang}&hl=${lang === 'pt' ? 'pt-BR' : lang}`}
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
          <ShareButton title={video.title} text={dict.watchVideo.share} />
        </div>
        
        {video.description && (
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              {dict.watchVideo?.descriptionTitle || "Description"}
            </h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>
              {video.description}
            </div>
            <CitationBox
              type="video"
              lang={lang}
              url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spurgeon.tv'}/${lang}/videos/watch/${videoId}`}
              title={video.title}
              videoUrl={`https://www.youtube.com/watch?v=${videoId}`}
              compact
            />
          </div>
        )}
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
