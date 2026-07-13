import Link from 'next/link';
import { getPaginatedSermons } from '../../lib/sermons';
import SearchClient from './search-client';

export default async function Home({ params, searchParams }) {
  const { lang } = await params;
  
  // Next.js 15+ searchParams must be awaited if accessed dynamically, but in 14 it's sync.
  // To be safe in Next 15 (Turbopack), we await it:
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams?.page || '1', 10);
  
  const { sermons, total, totalPages, currentPage } = await getPaginatedSermons(lang, page, 20);

  const stats = [
    { number: '3,563', label: 'Published Sermons' },
    { number: '63', label: 'Volumes' },
    { number: '40', label: 'Years of Ministry' },
    { number: '14,000', label: 'Church Members' },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-bg-glow" />
        <div className="container hero-content">
          {/* Search bar — lazy-loads index on first focus */}
          <div style={{ marginBottom: '4rem' }}>
            <SearchClient lang={lang} />
          </div>

          <p className="hero-eyebrow">The Prince of Preachers</p>
          <h1 className="hero-title">
            Charles Haddon<br />
            <em>Spurgeon</em>
          </h1>
          <p className="hero-subtitle">
            Explore over 3,500 sermons from the most prolific preacher in Church history,
            organized in 63 volumes of faithful and passionate biblical exposition.
          </p>

        </div>
      </section>

      {/* ── SERMONS GRID ── */}
      <section className="container volumes-section">
        <div className="section-header">
          <h2 className="section-title">All Sermons</h2>
          <p className="section-subtitle">Read sequentially through the complete collection</p>
        </div>
        
        <div className="grid grid-cols-4">
          {sermons.map((sermon) => {
            const sermonNum = parseInt(sermon.slug.match(/\d+/)?.[0] || '0', 10);
            return (
              <Link href={`/${lang}/volume/${sermon.volume}/${sermon.slug}`} key={sermon.slug}>
                <div className="card">
                  <div className="card-vol-number">{sermonNum}</div>
                  <h2 className="sermon-nav-title" style={{ marginTop: '0.5rem', minHeight: '2.6em' }}>
                    {sermon.title}
                  </h2>
                  <p style={{ fontSize: '0.75rem', marginTop: '1rem', color: 'var(--text-muted)' }}>
                    Volume {sermon.volumeNum}
                  </p>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)' }}>
                    {sermon.scripture?.reference || 'Topical'}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── PAGINATION ── */}
        {totalPages > 1 && (
          <div className="pagination">
            <Link 
              href={`/${lang}?page=${currentPage - 1}`}
              className={`pagination-btn ${currentPage <= 1 ? 'disabled' : ''}`}
              aria-disabled={currentPage <= 1}
              tabIndex={currentPage <= 1 ? -1 : 0}
            >
              &larr; Previous
            </Link>
            
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            
            <Link 
              href={`/${lang}?page=${currentPage + 1}`}
              className={`pagination-btn ${currentPage >= totalPages ? 'disabled' : ''}`}
              aria-disabled={currentPage >= totalPages}
              tabIndex={currentPage >= totalPages ? -1 : 0}
            >
              Next &rarr;
            </Link>
          </div>
        )}
      </section>

      {/* ── STATS ── */}
      <section className="stats-section stats-section--small">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="quote-banner quote-banner--small">
        <div className="container quote-inner">
          <span className="quote-mark">&ldquo;</span>
          <blockquote className="quote-text">
            A Bible that is falling apart usually belongs to someone who isn't.
          </blockquote>
          <cite className="quote-author">— Charles H. Spurgeon</cite>
        </div>
      </section>
    </div>
  );
}
