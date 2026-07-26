import Link from 'next/link';

export const revalidate = false;
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { getDictionary } from '../../../../lib/dictionaries';

export async function generateMetadata({ params }) {
  const { lang, channelId } = await params;
  const dict = await getDictionary(lang);
  const channelName = dict.channelVideos?.channels[channelId] || "Channel Videos";
  return {
    title: channelName + " | Charles Spurgeon",
    description: "Browse our entire historical collection of Charles Spurgeon videos.",
  };
}

const VIDEOS_PER_PAGE = 24;

function getVideosData(channelId) {
  const filePath = path.join(process.cwd(), 'lib', 'videosData.json');
  if (!fs.existsSync(filePath)) return [];
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data[channelId] || [];
}

export default async function ChannelVideosPage({ params, searchParams }) {
  const { lang = 'en', channelId } = await params;
  const dict = await getDictionary(lang);
  
  if (!['pt', 'en', 'es', 'es-devocional'].includes(channelId)) {
    notFound();
  }

  const allVideos = getVideosData(channelId);
  const totalVideos = allVideos.length;
  const totalPages = Math.ceil(totalVideos / VIDEOS_PER_PAGE);
  
  // Parse page from query string, default to 1
  let currentPage = parseInt((await searchParams).page, 10);
  if (isNaN(currentPage) || currentPage < 1) currentPage = 1;
  if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;

  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
  const currentVideos = allVideos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto' }}>
      <Link href={`/${lang}/videos`} style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        {dict.channelVideos.backToHub}
      </Link>
      
      <header style={{ marginBottom: '4rem' }}>
        <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          {dict.channelVideos.channels[channelId]}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          {dict.channelVideos.page.replace('{current}', currentPage).replace('{total}', totalPages)} {dict.channelVideos.totalVideos.replace('{total}', totalVideos)}
        </p>
      </header>

      {currentVideos.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {currentVideos.map(video => (
            <a key={video.id} href={`/${lang}/videos/watch/${video.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', background: 'var(--surface)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }} className="video-card">
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <img src={video.thumbnail} alt={video.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  ▶ {dict.channelVideos.play}
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
        <p style={{ color: 'var(--text-muted)' }}>{dict.channelVideos.noVideos}</p>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '4rem' }}>
          {currentPage > 1 ? (
            <Link rel="prev" href={`/${lang}/videos/${channelId}?page=${currentPage - 1}`} style={{ padding: '0.8rem 1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', textDecoration: 'none', transition: 'background 0.2s' }}>
              {dict.channelVideos.previous}
            </Link>
          ) : (
            <div style={{ width: '120px' }}></div>
          )}

          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            {currentPage} / {totalPages}
          </div>

          {currentPage < totalPages ? (
            <Link rel="next" href={`/${lang}/videos/${channelId}?page=${currentPage + 1}`} style={{ padding: '0.8rem 1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', textDecoration: 'none', transition: 'background 0.2s' }}>
              {dict.channelVideos.next}
            </Link>
          ) : (
            <div style={{ width: '120px' }}></div>
          )}
        </div>
      )}

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
