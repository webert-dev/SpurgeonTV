'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function VideosListClient({ initialVideos, lang, dict, channelId, totalVideos, totalPages }) {
  const searchParams = useSearchParams();
  const VIDEOS_PER_PAGE = 24;
  
  const pageParam = searchParams.get('page');
  const initialPage = pageParam ? parseInt(pageParam, 10) : 1;

  const [currentVideos, setCurrentVideos] = useState(initialPage === 1 ? initialVideos : []);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(initialPage !== 1);
  const [allVideosCache, setAllVideosCache] = useState(null);

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(page);
    
    if (page === 1) {
      setCurrentVideos(initialVideos);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    let isMounted = true;
    setLoading(true);
    
    if (allVideosCache && allVideosCache.length > 0) {
      const startIndex = (page - 1) * VIDEOS_PER_PAGE;
      setCurrentVideos(allVideosCache.slice(startIndex, startIndex + VIDEOS_PER_PAGE));
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    fetch('/data/videosData.json')
      .then(res => res.json())
      .then(fetchedData => {
        if (isMounted) {
          const allVids = fetchedData[channelId] || [];
          setAllVideosCache(allVids);
          const startIndex = (page - 1) * VIDEOS_PER_PAGE;
          setCurrentVideos(allVids.slice(startIndex, startIndex + VIDEOS_PER_PAGE));
          setLoading(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      })
      .catch(err => {
        console.error("Failed to load videos:", err);
        if (isMounted) {
          setCurrentVideos([]);
          setLoading(false);
        }
      });
      
    return () => { isMounted = false; };
  }, [searchParams, initialVideos, channelId, allVideosCache]);

  return (
    <>
      <header style={{ marginBottom: '4rem' }}>
        <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          {dict.channelVideos.channels[channelId]}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          {dict.channelVideos.page.replace('{current}', currentPage).replace('{total}', totalPages)} {dict.channelVideos.totalVideos.replace('{total}', totalVideos)}
        </p>
      </header>

      {loading ? (
        <div style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
          Loading videos...
        </div>
      ) : currentVideos.length > 0 ? (
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
            <Link rel="prev" href={`/${lang}/videos/${channelId}?page=${currentPage - 1}`} scroll={false} style={{ padding: '0.8rem 1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', textDecoration: 'none', transition: 'background 0.2s' }}>
              {dict.channelVideos.previous}
            </Link>
          ) : (
            <div style={{ width: '120px' }}></div>
          )}

          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            {currentPage} / {totalPages}
          </div>

          {currentPage < totalPages ? (
            <Link rel="next" href={`/${lang}/videos/${channelId}?page=${currentPage + 1}`} scroll={false} style={{ padding: '0.8rem 1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', textDecoration: 'none', transition: 'background 0.2s' }}>
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
    </>
  );
}
