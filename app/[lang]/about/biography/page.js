import Link from 'next/link';

export default function BiographyPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <Link href="/en/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to About Spurgeon
      </Link>
      <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Full Biography</h1>
      
      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
        
        {/* Article Card 13 */}
        <Link href="/en/about/biography/the-prince-goes-to-glory" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              September 21, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Prince Goes to Glory: The Funeral Procession That Paralyzed London in 1892
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Read about the unprecedented 1892 funeral procession of Charles Spurgeon, a massive civic event that paralyzed London and marked the end of an era.
            </p>
          </article>
        </Link>

        {/* Article Card 12 */}
        <Link href="/en/about/biography/the-final-years" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              September 14, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Final Years: Suffering, Perseverance, and the Close of a Historic Ministry
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore Charles Spurgeon's final years, from the Downgrade Controversy to his last sermon, his final retreat to Mentone, and the close of his historic ministry.
            </p>
          </article>
        </Link>

        {/* Article Card 11 */}
        <Link href="/en/about/biography/physical-afflictions" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              September 07, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Physical Afflictions: The Agonizing and Lifelong Battle Against Gout and Deep Depression
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              The agonizing and lifelong battle of Charles Spurgeon against gout, Bright's disease, and deep depression, and how divine providence forged his pastoral compassion.
            </p>
          </article>
        </Link>

        {/* Article Card 10 */}
        <Link href="/en/about/biography/the-mentone-retreats" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              August 31, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Mentone Retreats: Escape to the French Riviera for Rest and Physical Relief
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover how Charles Spurgeon sought refuge in the French Riviera to battle severe illness, and read the moving account of his final days in Menton.
            </p>
          </article>
        </Link>

        {/* Article Card 9 */}
        <Link href="/en/about/biography/the-metropolitan-tabernacle" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              August 24, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Metropolitan Tabernacle: The Construction of the Era's Largest Nonconformist Temple
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Learn about the construction and impact of the Metropolitan Tabernacle, the era's largest Nonconformist temple and the headquarters of Spurgeon's global ministry.
            </p>
          </article>
        </Link>

        {/* Article Card 8 */}
        <Link href="/en/about/biography/the-surrey-gardens-tragedy" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              August 17, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Surrey Gardens Tragedy: The False Fire Alarm, Panic, and the Preacher's Profound Depression
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Read about the horrific Surrey Gardens Tragedy of 1856, where a false fire alarm caused a deadly stampede and plunged Charles Spurgeon into profound depression.
            </p>
          </article>
        </Link>

        {/* Article Card 7 */}
        <Link href="/en/about/biography/susannah-thompson" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              August 10, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Susannah Thompson: Courtship, Marriage, and Family Life with Susannah Spurgeon
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover the profound love story, mutual suffering, and enduring partnership of Charles and Susannah Spurgeon, including the founding of her monumental Book Fund.
            </p>
          </article>
        </Link>

        {/* Article Card 6 */}
        <Link href="/en/about/biography/the-call-to-london" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              August 03, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Call to London: The Bold Transition to the Historic New Park Street Chapel
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore Charles Spurgeon's bold transition to the historic New Park Street Chapel in London, sparking a massive revival and overcoming fierce media backlash.
            </p>
          </article>
        </Link>

        {/* Article Card 5 */}
        <Link href="/en/about/biography/the-waterbeach-ministry" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              July 27, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Waterbeach Ministry: How a Teenager Revived an Entire Village
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Read about Charles Spurgeon's time as a teenage pastor in Waterbeach, where his fiery, doctrinally rich preaching brought a spiritual awakening to an entire village.
            </p>
          </article>
        </Link>

        {/* Article Card 4 */}
        <Link href="/en/about/biography/the-boy-preacher-of-the-fens" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              July 20, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Boy Preacher of the Fens: Early Sermons in the Cottages of Teversham
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover how a sixteen-year-old Charles Spurgeon began his preaching ministry in the humble cottages of Teversham, earning the title of 'Boy Preacher'.
            </p>
          </article>
        </Link>

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
