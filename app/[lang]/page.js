import Link from 'next/link';
import { getPaginatedSermons } from '../../lib/sermons';
import SearchClient from './search-client';

export const metadata = {
  title: 'SPURGEON TV | Charles Haddon Spurgeon — The Complete Sermon Collection',
  description: 'Explore over 3,500 sermons by Charles Haddon Spurgeon — the most prolific preacher in Church history. Read, search, and study the complete collection across 63 volumes.',
};

// The 4 most recently published About articles (hand-curated)
const recentArticles = [
  {
    category: 'Theology',
    categoryHref: '/about/theology',
    title: 'The Puritan Influence',
    subtitle: 'How Spurgeon Became "The Last of the Puritans"',
    href: '/about/theology/the-puritan-influence',
    date: 'Oct 5, 2025',
    readTime: '3 min',
    icon: '📖',
  },
  {
    category: 'Theology',
    categoryHref: '/about/theology',
    title: 'The Tender Compassion of Christ',
    subtitle: 'Spurgeon on the heart of Jesus for the suffering',
    href: '/about/theology/the-tender-compassion-of-christ',
    date: 'Oct 3, 2025',
    readTime: '4 min',
    icon: '✝️',
  },
  {
    category: 'Biography',
    categoryHref: '/about/biography',
    title: 'The Mentone Retreats',
    subtitle: 'Rest, recovery, and reflection in southern France',
    href: '/about/biography/the-mentone-retreats',
    date: 'Sep 28, 2025',
    readTime: '3 min',
    icon: '🌿',
  },
  {
    category: 'Controversies',
    categoryHref: '/about/controversies',
    title: 'The Downgrade Controversy',
    subtitle: 'Spurgeon\'s lonely stand against theological drift',
    href: '/about/controversies',
    date: 'Sep 20, 2025',
    readTime: '5 min',
    icon: '⚔️',
  },
];

export default async function HomePage({ params }) {
  const { lang } = await params;

  // Fetch first 4 sermons for the featured section
  const { sermons: featuredSermons } = await getPaginatedSermons(lang, 1, 4);

  return (
    <div className="home-page">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="home-hero">
        <div className="home-hero-glow" />
        <div className="home-hero-ornament" aria-hidden="true">✦</div>

        <div className="container home-hero-content">
          <p className="home-hero-eyebrow">The Prince of Preachers</p>

          <h1 className="home-hero-title">
            Charles Haddon
            <span className="home-hero-name">Spurgeon</span>
          </h1>

          <p className="home-hero-subtitle">
            Over 3,500 sermons. 63 volumes. One timeless voice.
          </p>

          <div className="home-hero-search">
            <SearchClient lang={lang} />
          </div>

          <div className="home-hero-ctas">
            <Link href={`/${lang}/sermons`} className="home-cta-primary">
              Browse Sermons
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href={`/${lang}/about`} className="home-cta-secondary">
              Read About Spurgeon
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <section className="home-stats">
        <div className="container home-stats-inner">
          {[
            { number: '3,563', label: 'Published Sermons' },
            { number: '63', label: 'Volumes' },
            { number: '40', label: 'Years of Ministry' },
            { number: '14,000', label: 'Church Members' },
          ].map((s, i) => (
            <div key={s.label} className="home-stat-item">
              {i > 0 && <div className="home-stat-divider" />}
              <span className="home-stat-number">{s.number}</span>
              <span className="home-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED SERMONS
      ══════════════════════════════════════════ */}
      <section className="home-section container">
        <div className="home-section-header">
          <div>
            <p className="home-section-eyebrow">The Collection</p>
            <h2 className="home-section-title">Featured Sermons</h2>
            <p className="home-section-subtitle">Start at the beginning — Spurgeon's earliest masterworks</p>
          </div>
          <Link href={`/${lang}/sermons`} className="home-see-all">
            Browse all sermons <span>→</span>
          </Link>
        </div>

        <div className="home-sermons-grid">
          {featuredSermons.map((sermon) => {
            const titleParts = sermon.title.split(' | ');
            const label = titleParts[0];
            const title = titleParts.length > 1 ? titleParts.slice(1).join(' | ') : sermon.title;
            return (
              <Link href={`/${lang}/volume/${sermon.volume}/${sermon.slug}`} key={sermon.slug} className="home-sermon-card">
                <div className="home-sermon-label">{label}</div>
                <h3 className="home-sermon-title">{title}</h3>
                {sermon.scripture?.verse && (
                  <p className="home-sermon-verse">&ldquo;{sermon.scripture.verse}&rdquo;</p>
                )}
                <div className="home-sermon-footer">
                  <span className="home-sermon-vol">Vol. {sermon.volumeNum}</span>
                  <span className="home-sermon-ref">{sermon.scripture?.reference || 'Topical'}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RECENT ARTICLES
      ══════════════════════════════════════════ */}
      <section className="home-section home-articles-section">
        <div className="container">
          <div className="home-section-header">
            <div>
              <p className="home-section-eyebrow">The Man Behind the Sermons</p>
              <h2 className="home-section-title">Latest Articles</h2>
              <p className="home-section-subtitle">Explore Spurgeon's life, theology, and controversies</p>
            </div>
            <Link href={`/${lang}/about`} className="home-see-all">
              All articles <span>→</span>
            </Link>
          </div>

          <div className="home-articles-grid">
            {recentArticles.map((article) => (
              <Link href={`/${lang}${article.href}`} key={article.href} className="home-article-card">
                <div className="home-article-icon">{article.icon}</div>
                <div className="home-article-body">
                  <span className="home-article-category">
                    {article.category}
                  </span>
                  <h3 className="home-article-title">{article.title}</h3>
                  <p className="home-article-subtitle">{article.subtitle}</p>
                  <div className="home-article-meta">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime} read</span>
                  </div>
                </div>
                <div className="home-article-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BIBLE & DICTIONARY FEATURES
      ══════════════════════════════════════════ */}
      <section className="home-section container">
        <div className="home-section-header" style={{ marginBottom: '2.5rem' }}>
          <div>
            <p className="home-section-eyebrow">Study Tools</p>
            <h2 className="home-section-title">More to Explore</h2>
            <p className="home-section-subtitle">Tools to deepen your study of Spurgeon and Scripture</p>
          </div>
        </div>

        <div className="home-tools-grid">
          <Link href={`/${lang}/bible`} className="home-tool-card home-tool-bible">
            <div className="home-tool-icon">📖</div>
            <div className="home-tool-body">
              <h3 className="home-tool-title">Bible Reader</h3>
              <p className="home-tool-desc">Read the Scriptures in multiple versions — KJV, NIV, ESV, and more — the same texts Spurgeon preached from.</p>
              <span className="home-tool-cta">Open Bible →</span>
            </div>
          </Link>

          <Link href={`/${lang}/dictionary`} className="home-tool-card home-tool-dict">
            <div className="home-tool-icon">📜</div>
            <div className="home-tool-body">
              <h3 className="home-tool-title">Theological Dictionary</h3>
              <p className="home-tool-desc">A curated glossary of theological and historical terms essential for understanding Spurgeon's 19th-century world.</p>
              <span className="home-tool-cta">Open Dictionary →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUOTE BANNER
      ══════════════════════════════════════════ */}
      <section className="home-quote">
        <div className="container home-quote-inner">
          <div className="home-quote-mark">&ldquo;</div>
          <blockquote className="home-quote-text">
            A Bible that is falling apart usually belongs to someone who isn&apos;t.
          </blockquote>
          <cite className="home-quote-author">— Charles Haddon Spurgeon</cite>
        </div>
      </section>

    </div>
  );
}
