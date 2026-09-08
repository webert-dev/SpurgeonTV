import Link from 'next/link';
import { getVolumes } from '../../../lib/sermons';
import SearchClient from '../search-client';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }, { lang: 'es' }];
}

export const metadata = {
  title: 'Volumes | SPURGEON TV',
  description: 'Explore over 3,500 sermons from Charles Spurgeon organized in 63 volumes.',
  robots: { index: false, follow: false },
  alternates: {
    languages: {
      'en': '/en/volumes',
      'pt': '/pt/volumes',
      'es': '/es/volumes',
    }
  }
};

export default async function Home({ params }) {
  const { lang } = await params;
  const volumes = await getVolumes(lang);

  const stats = [
    { number: '3,563', label: 'Published Sermons' },
    { number: '63', label: 'Volumes' },
    { number: '40', label: 'Years of Ministry' },
    { number: '14,000', label: 'Church Members' },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "63 Volumes of Sermons | SPURGEON TV",
            "description": "Explore over 3,500 sermons from Charles Spurgeon organized in 63 volumes."
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
                "name": "Volumes",
                "item": `https://spurgeon-tv.vercel.app/${lang}/volumes`
              }
            ]
          })
        }}
      />
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

      {/* ── VOLUMES GRID ── */}
      <section className="container volumes-section">
        <div className="section-header">
          <h2 className="section-title">The 63 Volumes</h2>
          <p className="section-subtitle">Select a volume to explore the sermons</p>
        </div>
        <div className="sermons-flex-grid">
          {volumes.map((volume) => {
            const volNum = parseInt(volume.replace('volume-', ''), 10);
            return (
              <Link href={`/${lang}/volume/${volume}`} prefetch={false} key={volume}>
                <div className="card">
                  <div className="card-vol-number">{volNum}</div>
                  <h2>Volume {volNum}</h2>
                  <p>Explore Sermons</p>
                </div>
              </Link>
            );
          })}
        </div>
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
