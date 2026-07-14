import Link from 'next/link';

export const metadata = {
  title: "His Theology | Charles Spurgeon",
  description: "Explore Charles Spurgeon's theological convictions, his defense of Calvinism, and his unwavering devotion to the doctrines of grace.",
};

export default function TheologyPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <Link href="/en/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to About Spurgeon
      </Link>
      
      <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '1rem' }}>His Theology</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '800px', lineHeight: '1.6' }}>
        Soon, we will explore his convictions, his incisive evangelism, and his unwavering devotion to the doctrines of grace.
      </p>

      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
        
        {/* Article Card 12 */}
        <Link href="/en/about/theology/the-tender-compassion-of-christ" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              December 14, 2025 • 4 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Tender Compassion of Christ: The Love of God for Lost Souls in His Rhetoric
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover how Charles Spurgeon balanced solemn warnings with tearful, urgent compassion for lost souls in his preaching.
            </p>
          </article>
        </Link>

        {/* Article Card 11 */}
        <Link href="/en/about/theology/eschatology" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              December 07, 2025 • 4 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Eschatology: Spurgeon's View on the Last Days and the Return of Christ
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore Charles Spurgeon's view on the last days, his premillennialism, and his strict warnings against prophetic speculation.
            </p>
          </article>
        </Link>

        {/* Article Card 10 */}
        <Link href="/en/about/theology/separation-from-the-world" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              November 30, 2025 • 4 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Separation from the World: The Call to Practical Holiness Amidst the Victorian Era
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Learn about Charles Spurgeon's urgent call to practical holiness and separation from worldly amusements amidst the Victorian era.
            </p>
          </article>
        </Link>

        {/* Article Card 9 */}
        <Link href="/en/about/theology/covenant-theology" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              November 23, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Covenant Theology: The Covenantal Structure in His Biblical Expositions
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore Charles Spurgeon's Federal Theology and how the Covenant of Grace shaped his biblical expositions and pastoral comfort.
            </p>
          </article>
        </Link>

        {/* Article Card 8 */}
        <Link href="/en/about/theology/the-boiler-room" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              November 16, 2025 • 4 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Boiler Room: The Theology and Practice of Prayer at the Tabernacle
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore the theology and practice of prayer at the Metropolitan Tabernacle, the spiritual engine of Charles Spurgeon's legendary ministry.
            </p>
          </article>
        </Link>

        {/* Article Card 7 */}
        <Link href="/en/about/theology/spurgeons-ecclesiology" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              November 09, 2025 • 4 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Spurgeon's Ecclesiology: His View on the Local Church and Public Worship
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover Charles Spurgeon's robust, biblical view of the local church, public worship, governance, and the ordinances.
            </p>
          </article>
        </Link>

        {/* Article Card 6 */}
        <Link href="/en/about/theology/the-holy-spirit-in-preaching" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              November 02, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Holy Spirit in Preaching: Absolute Dependence on the Celestial Wind
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Understand Charles Spurgeon's absolute dependence on the Holy Spirit in preaching, recognizing the necessity of the 'Celestial Wind' for true regeneration.
            </p>
          </article>
        </Link>

        {/* Article Card 5 */}
        <Link href="/en/about/theology/aggressive-evangelism" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              October 26, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Aggressive Evangelism: Harmonizing Divine Sovereignty and the Fervent Appeal
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Learn how Charles Spurgeon harmonized his belief in absolute divine sovereignty with an aggressive, passionate, and indiscriminate offer of the Gospel.
            </p>
          </article>
        </Link>

        {/* Article Card 4 */}
        <Link href="/en/about/theology/inerrancy-of-scripture" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              October 19, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Inerrancy of Scripture: His View on the Infallibility and Sufficiency of the Bible
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore Charles Spurgeon's unwavering defense of the infallibility and absolute sufficiency of the Bible amidst the rise of nineteenth-century rationalism.
            </p>
          </article>
        </Link>

        {/* Article Card 3 */}
        <Link href="/en/about/theology/the-centrality-of-the-cross" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              October 12, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Centrality of the Cross: Substitutionary Atonement as the Heart of the Message
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover how substitutionary atonement was the absolute center of gravity and the heart of the message for Charles Spurgeon's ministry.
            </p>
          </article>
        </Link>

        {/* Article Card 2 */}
        <Link href="/en/about/theology/the-puritan-influence" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              October 05, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Puritan Influence: How Spurgeon Became "The Last of the Puritans"
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover how the seventeenth-century Puritans shaped the Victorian mind of Charles Spurgeon, rightfully earning him the title of "The Last of the Puritans".
            </p>
          </article>
        </Link>

        {/* Article Card 1 */}
        <Link href="/en/about/theology/the-doctrines-of-grace" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              September 28, 2025 • 3 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Doctrines of Grace: How is it possible to defend Calvinism without losing the zeal to preach the Gospel to everyone?
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              How Charles Spurgeon defended historic Calvinism and the doctrines of grace without losing his passionate zeal to preach the Gospel to everyone.
            </p>
          </article>
        </Link>

      </div>
    </div>
  );
}
