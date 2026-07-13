import Link from 'next/link';

export default function BiographyPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <Link href="/en/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to About Spurgeon
      </Link>
      <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Full Biography</h1>
      
      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
        
        {/* Article Card 3 */}
        <Link href="/en/about/biography/the-snowstorm-conversion" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              July 13, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Snowstorm Conversion: The Miracle of Isaiah 45:22
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Read the profound story of Charles Spurgeon's conversion in a small Methodist chapel during a snowstorm, ignited by a lay preacher and Isaiah 45:22.
            </p>
          </article>
        </Link>

        {/* Article Card 2 */}
        <Link href="/en/about/biography/the-stambourne-influence" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              July 06, 2025 • 2 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Stambourne Influence: Formative Years with Grandfather James Spurgeon
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore Charles Spurgeon's formative years in Stambourne under the care of his grandfather James Spurgeon, where he built a solid theological and Puritan foundation.
            </p>
          </article>
        </Link>

        {/* Article Card */}
        <Link href="/en/about/biography/the-kelvedon-years" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              June 29, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Kelvedon Years: Childhood in a Pastoral Home
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover Charles Spurgeon's early years in Kelvedon and Stambourne, his rich Puritan heritage, and his early exposure to classical reformed theology that shaped his colossal ministry.
            </p>
          </article>
        </Link>

      </div>
    </div>
  );
}
