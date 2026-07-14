import Link from 'next/link';

export default function SobrePage() {
  const timeline = [
    {
      year: '1834',
      title: 'Birth in Kelvedon',
      desc: 'Charles Haddon Spurgeon was born on June 19, 1834, in Kelvedon, Essex, England, to a Nonconformist minister.',
    },
    {
      year: '1835',
      title: 'With his Grandparents',
      desc: 'Spurgeon spent formative years with his grandfather, a Congregational pastor, which deeply shaped his early faith.',
    },
    {
      year: '1850',
      title: 'Conversion at 15',
      desc: 'On a snowy morning, a severe storm forced him into a small Primitive Methodist chapel on Artillery Street. A substitute lay-preacher preached from Isaiah 45:22.',
      quote: '"Just fixing his eyes on me, as if he knew all my heart, he said, \'Young man, you look very miserable. ... Young man, look to Jesus Christ. Look! Look! Look! You have nothin’ to do but to look and live.\' ... I looked until I could almost have looked my eyes away. There and then the cloud was gone, the darkness had rolled away, and that moment I saw the sun."',
      quoteSource: 'C. H. Spurgeon’s Autobiography, Vol. 1'
    },
    {
      year: '1851',
      title: 'First Sermon Preached',
      desc: 'At 16, Spurgeon preached his first sermon in a cottage in Teversham, quickly becoming recognized for his extraordinary gifts.',
    },
    {
      year: '1852',
      title: 'Pastor in Waterbeach',
      desc: 'At just 17 years old, he became pastor of the Waterbeach Baptist Chapel, transforming a small village congregation.',
    },
    {
      year: '1854',
      title: 'Called to New Park Street',
      desc: 'At 19, he was called to the historic New Park Street Chapel in London. Crowds quickly overflowed the building.',
    },
    {
      year: '1856',
      title: 'Surrey Gardens Music Hall',
      desc: 'Services were moved to the Surrey Gardens Music Hall, attracting over 10,000 people — a historical record for preaching.',
    },
    {
      year: '1857',
      title: 'Preaches to 23,000',
      desc: 'Spurgeon preached to 23,654 people at the Crystal Palace. Days before, he tested the acoustics, inadvertently leading to the conversion of a worker.',
      quote: '"In order to test the acoustic properties of the building, I cried in a loud voice, \'Behold the Lamb of God, which taketh away the sin of the world.\' In one of the galleries, a workman, who knew nothing of what was being done, heard the words, and they came like a message from heaven to his soul."',
      quoteSource: 'C. H. Spurgeon’s Autobiography, Vol. 2'
    },
    {
      year: '1861',
      title: 'Opening of the Metropolitan Tabernacle',
      desc: 'The Metropolitan Tabernacle, with a seating capacity of 6,000, opened its doors and became the epicenter of his ministry for three decades.',
    },
    {
      year: '1865',
      title: 'The Sword and the Trowel Magazine',
      desc: 'Launched the monthly magazine "The Sword and the Trowel", sharing sermons, reviews, and ministry news.',
    },
    {
      year: '1867',
      title: 'Stockwell Orphanage',
      desc: 'Spurgeon opened the Stockwell Orphanage, which eventually housed and educated over 500 children at a time.',
    },
    {
      year: '1887',
      title: 'Downgrade Controversy',
      desc: 'Withdrew from the Baptist Union over doctrinal compromises — a courageous stand that cost him many friendships.',
    },
    {
      year: '1892',
      title: 'Eternal Legacy',
      desc: 'Spurgeon went to glory on January 31, 1892. He left behind 63 volumes of sermons, over 135 books, and a legacy that shaped the global Church.',
    },
  ];

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero" style={{ paddingBottom: '3rem' }}>
        <div className="about-hero-glow" />
        <div className="container about-hero-content">
          <p className="hero-eyebrow">1834 – 1892</p>
          <h1 className="hero-title">
            Charles Haddon<br /><em>Spurgeon</em>
          </h1>
        </div>
      </section>

      {/* BIO */}
      <section className="container about-bio-section" style={{ marginTop: '-2rem' }}>
        <div className="about-bio-grid">
          <div className="about-bio-text" style={{ textAlign: 'justify' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Who was Spurgeon?</h2>
            <p>
              Charles Haddon Spurgeon (1834–1892) was a British Particular Baptist preacher, widely
              considered the most influential preacher of the 19th century. His ministerial career was
              marked by an unwavering devotion to Scripture and a singular ability to
              communicate profound truths in an accessible and vivid way.
            </p>
            <p>
              Converted at age 15, Spurgeon preached his first sermon at 16, became a pastor
              at 17, and was already attracting crowds in the thousands before age 20. At his peak, he preached to
              over 10,000 people weekly at the Metropolitan Tabernacle in London.
            </p>
            <p>
              During his nearly forty years of active ministry, Spurgeon preached over 3,500
              sermons, published weekly and distributed throughout the English-speaking world — and
              translated into dozens of languages. He also founded an orphanage, a pastors' college
              and a publishing house.
            </p>
            <p>
              His literary legacy — 63 volumes of sermons and over 135 books — remains as
              one of the greatest individual outputs in the history of Christian literature. His works are
              read, preached, and studied to this day by pastors, theologians, and laymen worldwide.
            </p>
          </div>
          <div className="about-bio-stats">
            <div className="bio-stat"><span className="bio-stat-num">3,563</span><span className="bio-stat-label">Sermons Preached</span></div>
            <div className="bio-stat"><span className="bio-stat-num">135+</span><span className="bio-stat-label">Books Published</span></div>
            <div className="bio-stat"><span className="bio-stat-num">63</span><span className="bio-stat-label">Volumes of Sermons</span></div>
            <div className="bio-stat"><span className="bio-stat-num">14,000</span><span className="bio-stat-label">Church Members</span></div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">Timeline</h2>
            <p className="section-subtitle">A life dedicated to preaching Christ</p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={item.year} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.quote && (
                    <div className="timeline-quote-box" style={{ marginTop: '1rem', padding: '1rem', borderLeft: '3px solid var(--accent)', background: 'var(--surface-hover)', borderRadius: '4px' }}>
                      <p style={{ fontStyle: 'italic', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.quote}</p>
                      <cite style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', textAlign: 'right' }}>— {item.quoteSource}</cite>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="quote-banner" style={{ marginTop: '4rem' }}>
        <div className="container quote-inner">
          <span className="quote-mark">&ldquo;</span>
          <blockquote className="quote-text">
            Visit many good books, but live in the Bible.
          </blockquote>
          <cite className="quote-author">— Charles H. Spurgeon</cite>
        </div>
      </section>
      {/* EXPLORE MORE (HUB) */}
      <section className="container hub-section" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Explore More</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          
          <Link href={`/en/about/biography`} style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'block', textDecoration: 'none', transition: 'all 0.2s', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--surface-hover)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>13 Articles</span>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem' }}>Full Biography</h3>
            <p style={{ color: 'var(--text-secondary)' }}>The complete narrative of his life, filled with firsthand accounts and letters.</p>
          </Link>

          <Link href={`/en/about/theology`} style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'block', textDecoration: 'none', transition: 'all 0.2s', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--surface-hover)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>12 Articles</span>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem' }}>His Theology</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Soon, we will explore his convictions, his incisive evangelism, and his unwavering devotion to the doctrines of grace.</p>
          </Link>

          <Link href={`/en/about/controversies`} style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'block', textDecoration: 'none', transition: 'all 0.2s', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--surface-hover)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>7 Articles</span>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem' }}>Controversies</h3>
            <p style={{ color: 'var(--text-secondary)' }}>The battles for truth: Baptismal Regeneration and the Downgrade Controversy.</p>
          </Link>

          <Link href={`/en/about/preacher`} style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'block', textDecoration: 'none', transition: 'all 0.2s', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--surface-hover)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>0 Articles</span>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem' }}>The Preacher</h3>
            <p style={{ color: 'var(--text-secondary)' }}>His homiletics, the Pastors' College, and his profound influence on ministers.</p>
          </Link>

        </div>
      </section>

    </div>
  );
}
