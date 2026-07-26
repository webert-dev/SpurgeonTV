import Link from 'next/link';

export const revalidate = false;

export default function ControversiesPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <Link href="/en/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to About Spurgeon
      </Link>
      <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Controversies</h1>
      
      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
        
        {/* Article Card 13 */}
        <Link href="/en/about/controversies/humor-in-the-pulpit" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              March 15, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Humor in the Pulpit: The Controversy Over Spurgeon's Sagacity
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover why Charles Spurgeon's use of humor in preaching shocked the Victorian religious establishment and how he defended it.
            </p>
          </article>
        </Link>

        {/* Article Card 12 */}
        <Link href="/en/about/controversies/theater-preaching" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              March 8, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Theater Preaching: Confronting the Religious Establishment in Secular Halls
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Learn about Charles Spurgeon's controversial decision to preach in secular halls and the tragic Surrey Gardens incident.
            </p>
          </article>
        </Link>

        {/* Article Card 11 */}
        <Link href="/en/about/controversies/higher-criticism" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              March 1, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Higher Criticism: Confronting German Rationalism and the Defense of Biblical Authority
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore Charles Spurgeon's fierce defense of biblical authority against the rising tide of German Rationalism and higher criticism.
            </p>
          </article>
        </Link>

        {/* Article Card 10 */}
        <Link href="/en/about/controversies/the-revivalism-debate" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              February 22, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Revivalism Debate: Critiques of Pragmatic Methods and Emotional Appeals
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Examine Charles Spurgeon's strong critiques against pragmatic revivalism, emotional manipulation, and Charles Finney's methodologies.
            </p>
          </article>
        </Link>

        {/* Article Card 9 */}
        <Link href="/en/about/controversies/fighting-arminianism" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              February 15, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Fighting Arminianism: The Fierce Critique of Free-Will Theology
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore Charles Spurgeon's fierce critique of free-will theology and his unapologetic defense of sovereign grace.
            </p>
          </article>
        </Link>

        {/* Article Card 8 */}
        <Link href="/en/about/controversies/fighting-hyper-calvinism" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              February 8, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Fighting Hyper-Calvinism: The Battle Against the Extreme Right
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Learn about Charles Spurgeon's fierce battle against hyper-Calvinism and his defense of the free offer of the gospel.
            </p>
          </article>
        </Link>

        {/* Article Card 7 */}
        <Link href="/en/about/controversies/the-anti-slavery-backlash" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              February 1, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Anti-Slavery Backlash: The Uncompromising Stand That Ignited a Transatlantic Firestorm
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover Charles Spurgeon's uncompromising stand against slavery that ignited a transatlantic firestorm and censorship in America.
            </p>
          </article>
        </Link>

        {/* Article Card 6 */}
        <Link href="/en/about/controversies/the-cigar-habit" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              January 25, 2026 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Cigar Habit: Charles Spurgeon's "Vice" and the Theology of Moderation
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore Charles Spurgeon's views on Christian liberty and his controversial habit of smoking cigars.
            </p>
          </article>
        </Link>

        {/* Article Card 5 */}
        <Link href="/en/about/controversies/the-downgrade-controversy-part-3" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              January 18, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Downgrade Controversy (Part 3): The Heavy Price of Truth and Isolation
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Understand the heavy physical and emotional toll the Downgrade Controversy took on Charles Spurgeon in his final years.
            </p>
          </article>
        </Link>

        {/* Article Card 4 */}
        <Link href="/en/about/controversies/the-downgrade-controversy-part-2" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              January 11, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Downgrade Controversy (Part 2): The Agonizing Withdrawal from the Baptist Union
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover the painful aftermath of the Downgrade Controversy, leading to Charles Spurgeon's resignation and censure from the Baptist Union.
            </p>
          </article>
        </Link>

        {/* Article Card 3 */}
        <Link href="/en/about/controversies/the-downgrade-controversy-part-1" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              January 4, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Downgrade Controversy (Part 1): Sounding the Alarm in "The Sword and the Trowel"
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Learn how the Downgrade Controversy began with warnings in The Sword and the Trowel against modernism and theological liberalism.
            </p>
          </article>
        </Link>

        {/* Article Card 2 */}
        <Link href="/en/about/controversies/the-rivulet-controversy" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              December 28, 2025 • 4 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Rivulet Controversy: Early Skirmishes Over Doctrine and Inspiration
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore the Rivulet Controversy of 1856, an early skirmish over doctrine and inspiration in hymnody that foreshadowed the Downgrade Controversy.
            </p>
          </article>
        </Link>

        {/* Article Card 1 */}
        <Link href="/en/about/controversies/the-baptismal-regeneration-controversy" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              December 21, 2025 • 4 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Baptismal Regeneration Controversy: Confronting the Church of England
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore Charles Spurgeon's fierce confrontation with the Church of England regarding the doctrine of baptismal regeneration.
            </p>
          </article>
        </Link>

      </div>
    </div>
  );
}
