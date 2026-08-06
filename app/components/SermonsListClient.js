'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function SermonsListClient({ initialData, lang, dict }) {
  const searchParams = useSearchParams();
  
  const pageParam = searchParams.get('page');
  const initialPage = pageParam ? parseInt(pageParam, 10) : 1;

  const [data, setData] = useState(initialPage === 1 ? initialData : null);
  const [loading, setLoading] = useState(initialPage !== 1);
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(page);
    
    if (page === 1 && initialData) {
      setData(initialData);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    let isMounted = true;
    setLoading(true);
    
    fetch(`/data/sermons-pages/${lang}/page-${page}.json`)
      .then(res => res.json())
      .then(fetchedData => {
        if (isMounted) {
          setData(fetchedData);
          setLoading(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      })
      .catch(err => {
        console.error("Failed to load sermons page:", err);
        if (isMounted) {
          setData({ sermons: [], totalPages: 0 });
          setLoading(false);
        }
      });
      
    return () => { isMounted = false; };
  }, [searchParams, lang, initialData]);

  if (loading || !data) {
    return (
      <div style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
        {dict.sermons.loading || 'Loading sermons...'}
      </div>
    );
  }

  const { sermons, totalPages } = data;

  return (
    <>
      <div className="sermons-flex-grid">
        {sermons.map((sermon) => {
          const sermonNum = parseInt(sermon.slug.match(/\d+/)?.[0] || '0', 10);
          const titleParts = sermon.title.split(' | ');
          const sermonLabel = titleParts.length > 1 ? titleParts[0] : `Sermon ${sermonNum}`;
          const sermonTitleText = titleParts.length > 1 ? titleParts.slice(1).join(' | ') : sermon.title;

          return (
            <Link href={`/${lang}/volume/${sermon.volume}/${sermon.slug}`} key={sermon.slug}>
              <div className="card" style={{ height: '100%', padding: '1.5rem', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {sermonLabel}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
                    {sermonTitleText}
                  </h2>
                  {sermon.scripture?.verse && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.4 }}>
                      &ldquo;{sermon.scripture.verse}&rdquo;
                    </p>
                  )}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)', width: '100%' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    {dict.volume.title.replace('{num}', sermon.volumeNum)}
                  </p>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)' }}>
                    {sermon.scripture?.reference || dict.home.featured.topical}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <Link
            href={`/${lang}/sermons?page=${currentPage - 1}`}
            className={`pagination-btn ${currentPage <= 1 ? 'disabled' : ''}`}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : 0}
            rel="prev"
            scroll={false}
          >
            &larr; {dict.sermons.pagination.previous}
          </Link>

          <span className="pagination-info">
            {dict.sermons.pagination.page.replace('{current}', currentPage).replace('{total}', totalPages)}
          </span>

          <Link
            href={`/${lang}/sermons?page=${currentPage + 1}`}
            className={`pagination-btn ${currentPage >= totalPages ? 'disabled' : ''}`}
            aria-disabled={currentPage >= totalPages}
            tabIndex={currentPage >= totalPages ? -1 : 0}
            rel="next"
            scroll={false}
          >
            {dict.sermons.pagination.next} &rarr;
          </Link>
        </div>
      )}
    </>
  );
}
