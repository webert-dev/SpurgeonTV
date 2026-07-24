import Link from 'next/link';
import { getPaginatedSermons } from '../../../lib/sermons';
import SearchClient from '../search-client';
import { getDictionary } from '../../../lib/dictionaries';

export const metadata = {
  title: 'All Sermons | SPURGEON TV',
  description: 'Browse the complete collection of Charles Spurgeon\'s sermons across all 63 volumes, over 3,500 sermons of faithful biblical exposition.',
  alternates: {
    languages: {
      'en': '/en/sermons',
      'pt': '/pt/sermons',
      'es': '/es/sermons',
    }
  }
};

export default async function SermonsPage({ params, searchParams }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams?.page || '1', 10);

  const { sermons, total, totalPages, currentPage } = await getPaginatedSermons(lang, page, 9);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "All Sermons | SPURGEON TV",
            "description": "Browse the complete collection of Charles Spurgeon's sermons across all 63 volumes."
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `https://spurgeon-tv.vercel.app/${lang}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Sermons",
                "item": `https://spurgeon-tv.vercel.app/${lang}/sermons`
              }
            ]
          })
        }}
      />
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-bg-glow" />
        <div className="container hero-content">
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
          <h2 className="section-title">{dict.sermons.title}</h2>
          <p className="section-subtitle">{dict.home.featured.subtitle}</p>
        </div>

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

        {/* ── PAGINATION ── */}
        {totalPages > 1 && (
          <div className="pagination">
            <Link
              href={`/${lang}/sermons?page=${currentPage - 1}`}
              className={`pagination-btn ${currentPage <= 1 ? 'disabled' : ''}`}
              aria-disabled={currentPage <= 1}
              tabIndex={currentPage <= 1 ? -1 : 0}
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
            >
              {dict.sermons.pagination.next} &rarr;
            </Link>
          </div>
        )}
      </section>

      {/* ── STATS ── */}
      <section className="stats-section stats-section--small">
        <div className="container stats-grid">
          {[
            { number: '3,563', label: dict.home.stats.sermons },
            { number: '63', label: dict.home.stats.volumes },
            { number: '40', label: dict.home.stats.years },
            { number: '14,000', label: dict.home.stats.members },
          ].map((s) => (
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
            {dict.home.quote.text}
          </blockquote>
          <cite className="quote-author">— {dict.home.quote.author}</cite>
        </div>
      </section>
    </div>
  );
}
