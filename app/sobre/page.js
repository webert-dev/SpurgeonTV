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
      desc: 'On a snowy morning, a lay preacher quoted Isaiah 45:22 — "Look unto me, and be ye saved" — changing Spurgeon\'s life forever.',
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
      desc: 'Spurgeon preached to approximately 23,654 people at the Crystal Palace — one of the largest crowds ever gathered by a single voice.',
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
      <section className="about-hero">
        <div className="about-hero-glow" />
        <div className="container about-hero-content">
          <p className="hero-eyebrow">1834 – 1892</p>
          <h1 className="hero-title">
            Charles Haddon<br /><em>Spurgeon</em>
          </h1>
          <p className="about-hero-subtitle">
            The Prince of Preachers — the man who proclaimed the Gospel to millions,
            left 63 volumes of sermons and remains to this day one of the greatest voices of Protestantism.
          </p>
        </div>
      </section>

      {/* BIO */}
      <section className="container about-bio-section">
        <div className="about-bio-grid">
          <div className="about-bio-text">
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
    </div>
  );
}
