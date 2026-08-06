import Link from 'next/link';

export const revalidate = 86400;
import { getPaginatedSermons } from '../../../lib/sermons';
import SearchClient from '../search-client';
import { getDictionary } from '../../../lib/dictionaries';
import { Suspense } from 'react';
import SermonsListClient from '../../components/SermonsListClient';

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

export default async function SermonsPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const initialData = await getPaginatedSermons(lang, 1, 9);

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

        <Suspense fallback={<div style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>{dict.sermons.loading || 'Loading sermons...'}</div>}>
          <SermonsListClient initialData={initialData} lang={lang} dict={dict} />
        </Suspense>
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
