import Link from 'next/link';

export const metadata = {
  title: "Covenant Theology | Charles Spurgeon",
  description: "Explore Charles Spurgeon's Federal Theology and how the Covenant of Grace shaped his biblical expositions and pastoral comfort.",
  keywords: ["Charles Spurgeon", "Covenant Theology", "Covenant of Grace", "Puritans", "1689 London Baptist Confession", "Catechism", "theology"],
};

export default function CovenantTheologyPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/theology" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Theology
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            November 23, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Covenant Theology: The Covenantal Structure in His Biblical Expositions
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Reformed Baptist Heritage</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Charles Haddon Spurgeon was a staunch defender of the Reformed Baptist tradition, firmly anchoring his ecclesiology and soteriology in the historic 1689 London Baptist Confession of Faith. Unlike the pragmatic and liberal theological trends that began to sweep through Victorian England, Spurgeon’s doctrinal foundation was inherently covenantal. He did not view the Bible as a disjointed collection of moral stories, but rather as the grand unfolding of God's eternal purposes through divine covenants. His deep theological alignment with the seventeenth-century Puritans—such as John Owen, Richard Baxter, and John Bunyan, whose works he fervently devoured from his early childhood—provided the rich historical and theological soil from which his federal (covenantal) theology grew.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Puritan Catechism of 1855</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            To ensure that his congregation at the New Park Street Chapel was thoroughly grounded in this robust covenantal framework, a twenty-one-year-old Spurgeon compiled and published <em>A Puritan Catechism</em> in October 1855. He drew this instructional tool directly from the 1689 London Baptist Confession and the Westminster Shorter Catechism. By utilizing these deeply covenantal documents, Spurgeon embedded the structural concepts of God's federal dealings with humanity into the minds of his flock, ensuring they understood that the Almighty executes His eternal decrees through the works of creation and providence, and ultimately through the redemptive work of Jesus Christ.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Salvation and the Covenant of Grace</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            For the "Prince of Preachers," the entire mechanism of human salvation rested securely upon the solid bedrock of the Covenant of Grace. He did not view salvation as a mere transaction of human free will, but as a sovereign, unbreakable outworking of God's eternal pact. When describing the nature of true conversion, Spurgeon explicitly used covenantal language, declaring that saving faith is an immediate relationship with Christ, <em style={{ fontStyle: 'italic' }}>"accepting, receiving, and resting upon Him alone for justification, sanctification, and eternal life by virtue of the covenant of grace"</em>. This covenantal certainty was the theological anchor that allowed him to passionately preach the substitutionary atonement; he knew that Christ's blood had permanently secured the terms of the covenant for the elect, satisfying divine justice and guaranteeing their eternal life.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Pastoral Comfort in Covenant Mercies</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon’s covenant theology was never a dry, academic system; it was a warm, practical, and deeply pastoral doctrine that offered immense comfort in times of severe affliction. Because God is bound by His own covenant promises, believers can have absolute assurance in His unwavering faithfulness, regardless of their earthly circumstances. This is beautifully illustrated in the life of the Tabernacle when a letter of sympathy was sent to a sick and vulnerable former minister, Pastor James Smith. The church, reflecting Spurgeon's own theological heart, devoutly prayed that <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"every covenant mercy may rest upon you and your family in this hour of affliction and sorrow"</em>. For Spurgeon and his congregation, the covenant was the ultimate guarantee that the Lord who graciously drew them would sustain them to the very end.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0' }} />

          {/* BIBLIOGRAPHY */}
          <details className="sermon-tags-details" style={{ marginBottom: '1.5rem' }}>
            <summary className="sermon-tags-summary" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
              <span>Bibliography & Sources</span>
              <span className="sermon-tags-icon">▼</span>
            </summary>
            <div className="sermon-tags-content" style={{ marginTop: '1rem' }}>
              <ol style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed November 22, 2025. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed November 22, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>C. H. Spurgeon's Autobiography</em>, Vol. 2. London: Passmore and Alabaster, 1899. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Krapf Project. "Spurgeon's Catechism." Accessed November 22, 2025. <a href="https://krapfproject.org/resources/spurgeons-catechism/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>CHSpurgeon.com. "Spurgeon's Catechism." Accessed November 22, 2025. <a href="https://chspurgeon.com/spurgeons-catechism" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Spurgeon's Catechism</em>. Pensacola, FL: Chapel Library. [PDF Document].</li>
              </ol>
            </div>
          </details>

          {/* TAGS */}
          <details className="sermon-tags-details" style={{ marginBottom: '2rem' }}>
            <summary className="sermon-tags-summary" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
              <span>Article Tags</span>
              <span className="sermon-tags-icon">▼</span>
            </summary>
            <div className="sermon-tags-content" style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {["Covenant Theology", "Covenant of Grace", "Puritans", "1689 London Baptist Confession", "Catechism"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/theology/the-boiler-room" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Boiler Room</span>
            </Link>
            <Link href="/en/about/theology/separation-from-the-world" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Separation from the World</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
