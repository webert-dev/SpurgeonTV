import Link from 'next/link';
import path from 'path';
import { getDictionary } from '../../../lib/dictionaries';
import SpanishVideosTabs from '../../components/SpanishVideosTabs';
import { loadStaticJson } from '../../../lib/data-loader';

export const revalidate = false;
export const dynamicParams = false;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.videosHub?.pageTitle + " | Charles Spurgeon" || "Charles Spurgeon Videos | Sermons & Documentaries",
    description: dict.videosHub?.pageSubtitle || "Watch the largest collection of Charles Spurgeon sermons, documentaries, and teachings in English, Portuguese, and Spanish.",
  };
}

export default async function VideosHubPage({ params }) {
  const { lang = 'en' } = await params;
  const data = await loadStaticJson('videosData.json') || { pt: [], en: [], es: [] };
  const dict = await getDictionary(lang);

  const ptChannel = {
    id: 'pt',
    title: dict.videosHub.channels.pt.title,
    desc: dict.videosHub.channels.pt.desc,
    videos: data.pt.slice(0, 3)
  };
  const enChannel = {
    id: 'en',
    title: dict.videosHub.channels.en.title,
    desc: dict.videosHub.channels.en.desc,
    videos: data.en.slice(0, 3)
  };
  const esChannel = {
    id: 'es',
    title: dict.videosHub.channels.es.title,
    desc: dict.videosHub.channels.es.desc,
    videos: data.es.slice(0, 3)
  };
  const esDevocionalChannel = {
    id: 'es-devocional',
    title: 'Devocional que Ben Dice',
    desc: 'Devocionales diarios de Charles Spurgeon',
    videos: [
      { id: "UmCGiI7NYKw", title: "Devocional de Charles Spurgeon", thumbnail: "https://i.ytimg.com/vi/UmCGiI7NYKw/maxresdefault.jpg" },
      { id: "y04s2fagflQ", title: "Devocional de Charles Spurgeon", thumbnail: "https://i.ytimg.com/vi/y04s2fagflQ/maxresdefault.jpg" },
      { id: "JFfwDZb49b4", title: "Devocional de Charles Spurgeon", thumbnail: "https://i.ytimg.com/vi/JFfwDZb49b4/maxresdefault.jpg" }
    ]
  };

  let channels = [];
  if (lang === 'pt') {
    channels = [ptChannel, enChannel];
  } else if (lang === 'es') {
    channels = [enChannel, ptChannel];
  } else {
    channels = [enChannel, ptChannel];
  }

  return (
    <div className="container" style={{ padding: '1rem 2rem', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
          {dict.videosHub.pageTitle}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          {dict.videosHub.pageSubtitle}
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {lang === 'es' && (
          <SpanishVideosTabs esChannel={esChannel} esDevocionalChannel={esDevocionalChannel} dict={dict} lang={lang} />
        )}

        {channels.map(channel => (
          <section key={channel.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {channel.title}
                </h2>
              </div>
              <Link href={`/${lang}/videos/${channel.id}`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                {dict.videosHub.viewAll}
              </Link>
            </div>

            {channel.videos.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {channel.videos.map(video => (
                  <a key={video.id} href={`/${lang}/videos/watch/${video.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', background: 'var(--surface)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }} className="video-card">
                    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                      <img src={video.thumbnail} alt={video.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                      <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                        ▶ {dict.videosHub.play}
                      </div>
                    </div>
                    <div style={{ padding: '1.2rem' }}>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.4' }}>
                        {video.title}
                      </h3>
                      {video.id === 'cKYQW5KB40U' && dict.watchVideo?.cardAlert && (
                        <div style={{ marginTop: '0.8rem', padding: '0.6rem', background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.3)', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                          {dict.watchVideo.cardAlert}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)' }}>{dict.videosHub.noVideos}</p>
            )}
          </section>
        ))}

        {lang !== 'es' && (
          <SpanishVideosTabs esChannel={esChannel} esDevocionalChannel={esDevocionalChannel} dict={dict} lang={lang} />
        )}
      </div>
      
      {/* Add a tiny CSS for hover effect in line */}
      <style dangerouslySetInnerHTML={{__html: `
        .video-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent) !important;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
      `}} />
    </div>
  );
}
