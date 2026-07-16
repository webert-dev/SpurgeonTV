import Link from 'next/link';
import { getPaginatedSermons } from '../../lib/sermons';
import SearchClient from './search-client';
import { getDictionary } from '../../lib/dictionaries';
import { getAllArticles } from '../../lib/articles';

export const metadata = {
  title: 'SPURGEON TV | Charles Haddon Spurgeon — The Complete Sermon Collection',
  description: 'Explore over 3,500 sermons by Charles Haddon Spurgeon — the most prolific preacher in Church history. Read, search, and study the complete collection across 63 volumes.',
};

export default async function HomePage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Fetch first 4 sermons for the featured section
  const { sermons: featuredSermons } = await getPaginatedSermons(lang, 1, 4);

  // Fetch all localized articles and pick the 4 featured ones
  const allArticles = getAllArticles(lang);
  
  // The slugs of the hand-curated featured articles
  const featuredArticleSlugs = [
    'the-puritan-influence',
    'the-tender-compassion-of-christ',
    'the-mentone-retreats',
    'the-downgrade-controversy-part-1'
  ];

  const recentArticles = featuredArticleSlugs.map(slug => {
    const article = allArticles.find(a => a.href.endsWith(slug));
    if (!article) return null;
    
    // Assign icons based on category/slug
    let icon = '📖';
    if (article.category === 'theology') icon = '✝️';
    if (article.category === 'biography') icon = '🌿';
    if (article.category === 'controversies') icon = '⚔️';

    return {
      category: article.category.charAt(0).toUpperCase() + article.category.slice(1),
      categoryHref: `/about/${article.category}`,
      title: article.title,
      subtitle: article.desc.substring(0, 70) + '...', // Shortened desc as subtitle
      href: article.href,
      date: article.date,
      readTime: article.readTime,
      icon: icon,
    };
  }).filter(Boolean);


  return (
    <div className="home-page">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="home-hero">
        <div className="home-hero-glow" />
        <div className="home-hero-ornament" aria-hidden="true">✦</div>

        <div className="container home-hero-content">
          <div className="home-hero-search" style={{ marginBottom: '2rem', width: '100%', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            <SearchClient lang={lang} dict={dict} isGlobal={true} />
          </div>

          <p className="home-hero-eyebrow">{dict.home.heroEyebrow}</p>

          <h1 className="home-hero-title">
            Charles Haddon
            <span className="home-hero-name">Spurgeon</span>
          </h1>

          <p className="home-hero-subtitle">
            {dict.home.heroSubtitle}
          </p>

          <div className="home-hero-ctas">
            <Link href={`/${lang}/sermons`} className="home-cta-primary">
              {dict.home.browseSermons}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href={`/${lang}/about`} className="home-cta-secondary">
              {dict.home.readAbout}
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
            { number: '3,563', label: dict.home.stats.sermons },
            { number: '63', label: dict.home.stats.volumes },
            { number: '40', label: dict.home.stats.years },
            { number: '14,000', label: dict.home.stats.members },
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
            <p className="home-section-eyebrow">{dict.home.featured.eyebrow}</p>
            <h2 className="home-section-title">{dict.home.featured.title}</h2>
            <p className="home-section-subtitle">{dict.home.featured.subtitle}</p>
          </div>
          <Link href={`/${lang}/sermons`} className="home-see-all">
            {dict.home.featured.browseAll} <span>→</span>
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
                  <span className="home-sermon-vol">{dict.home.featured.vol} {sermon.volumeNum}</span>
                  <span className="home-sermon-ref">{sermon.scripture?.reference || dict.home.featured.topical}</span>
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
              <p className="home-section-eyebrow">{dict.home.articles.eyebrow}</p>
              <h2 className="home-section-title">{dict.home.articles.title}</h2>
              <p className="home-section-subtitle">{dict.home.articles.subtitle}</p>
            </div>
            <Link href={`/${lang}/about`} className="home-see-all">
              {dict.home.articles.allArticles} <span>→</span>
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
                    <span>{article.readTime} {dict.home.articles.read}</span>
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
            <p className="home-section-eyebrow">{dict.home.tools.eyebrow}</p>
            <h2 className="home-section-title">{dict.home.tools.title}</h2>
            <p className="home-section-subtitle">{dict.home.tools.subtitle}</p>
          </div>
        </div>

        <div className="home-tools-grid">
          <Link href={`/${lang}/bible`} className="home-tool-card home-tool-bible">
            <div className="home-tool-icon">📖</div>
            <div className="home-tool-body">
              <h3 className="home-tool-title">{dict.home.tools.bibleTitle}</h3>
              <p className="home-tool-desc">{dict.home.tools.bibleDesc}</p>
              <span className="home-tool-cta">{dict.home.tools.bibleCta} →</span>
            </div>
          </Link>

          <Link href={`/${lang}/dictionary`} className="home-tool-card home-tool-dict">
            <div className="home-tool-icon">📜</div>
            <div className="home-tool-body">
              <h3 className="home-tool-title">{dict.home.tools.dictTitle}</h3>
              <p className="home-tool-desc">{dict.home.tools.dictDesc}</p>
              <span className="home-tool-cta">{dict.home.tools.dictCta} →</span>
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
            {dict.home.quote.text}
          </blockquote>
          <cite className="home-quote-author">— {dict.home.quote.author}</cite>
        </div>
      </section>

    </div>
  );
}
