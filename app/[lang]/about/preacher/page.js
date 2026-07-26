import Link from 'next/link';

export const revalidate = false;

export const metadata = {
  title: "The Preacher & His Work | Charles Spurgeon",
  description: "Explore Charles Spurgeon's homiletics, the establishment of the Pastors' College, and his profound influence on generations of ministers.",
};

export default function PreacherPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <Link href="/en/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to About Spurgeon
      </Link>
      
      <header style={{ marginBottom: '4rem' }}>
        <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Preacher & His Work</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
          Explore Charles Spurgeon's homiletics, the establishment of the Pastors' College, and his profound influence on generations of ministers.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
        
        {/* Article Card 11 */}
        <Link href="/en/about/preacher/the-preachers-library" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              May 31, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Preacher's Library: The Puritan Arsenal That Fueled His Mind
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore the massive personal library of Charles Spurgeon, featuring over 12,000 volumes and a rare Puritan arsenal.
            </p>
          </article>
        </Link>

        {/* Article Card 10 */}
        <Link href="/en/about/preacher/the-voice-of-spurgeon" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              May 24, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Voice of Spurgeon: Oratorical Mastery and Acoustic Marvels in the Victorian Era
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover the acoustic marvels and oratorical mastery of Charles Spurgeon's voice in the Victorian era.
            </p>
          </article>
        </Link>

        {/* Article Card 9 */}
        <Link href="/en/about/preacher/john-ploughmans-talk" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              May 17, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              John Ploughman's Talk: Wisdom and Language for the Working Class
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore how Charles Spurgeon used the persona of John Ploughman to deliver practical wisdom, humor, and plain advice to the working class.
            </p>
          </article>
        </Link>

        {/* Article Card 8 */}
        <Link href="/en/about/preacher/the-treasury-of-david" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              May 10, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Treasury of David: The Twenty-Year Labor on His "Magnum Opus"
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover the story behind Charles Spurgeon's twenty-year labor on his magnum opus, The Treasury of David, a monumental commentary on the Psalms.
            </p>
          </article>
        </Link>

        {/* Article Card 7 */}
        <Link href="/en/about/preacher/lectures-to-my-students" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              May 3, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Lectures to My Students: Conselhos Incisivos e Hilários Sobre a Vida Pastoral e Pregação
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Explore os conselhos incisivos e hilários de Charles Spurgeon sobre a vida pastoral e pregação no Pastors' College.
            </p>
          </article>
        </Link>

        {/* Article Card 6 */}
        <Link href="/en/about/preacher/the-institutional-machinery" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              April 26, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Institutional Machinery: The Metropolitan Tabernacle's Network of Charity
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover the massive network of charity and social action operated by Charles Spurgeon's Metropolitan Tabernacle.
            </p>
          </article>
        </Link>

        {/* Article Card 5 */}
        <Link href="/en/about/preacher/the-printed-page" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              April 19, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Printed Page: How Telegraphs and Stenographers Sent His Weekly Sermons Around the World
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Learn how the strategic use of stenographers and telegraphs allowed Charles Spurgeon's sermons to reach millions worldwide.
            </p>
          </article>
        </Link>

        {/* Article Card 4 */}
        <Link href="/en/about/preacher/homiletics" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              April 12, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              Homiletics: The Surprising Method of Sermon Preparation
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover Charles Spurgeon's surprising and intense method of sermon preparation and his views on extemporaneous preaching.
            </p>
          </article>
        </Link>

        {/* Article Card 3 */}
        <Link href="/en/about/preacher/the-colportage-association" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              April 5, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Colportage Association: The Network of Christian Book Distributors on the Streets
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover how the Metropolitan Tabernacle Colportage Association and Susannah Spurgeon's Book Fund spread Christian literature across England.
            </p>
          </article>
        </Link>

        {/* Article Card 2 */}
        <Link href="/en/about/preacher/the-stockwell-orphanage" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              March 29, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Stockwell Orphanage: Practical Christianity and the Care of London's Fatherless
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Learn how Charles Spurgeon founded the Stockwell Orphanage, demonstrating his deep commitment to practical Christianity and social action.
            </p>
          </article>
        </Link>

        {/* Article Card 1 */}
        <Link href="/en/about/preacher/the-pastors-college" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              March 22, 2026 • 5 min read
            </div>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
              The Pastors' College: The Foundation of a College to Train Hundreds of Preachers
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Discover how Spurgeon founded the Pastors' College to equip earnest working-class men for the ministry.
            </p>
          </article>
        </Link>

      </div>
    </div>
  );
}
