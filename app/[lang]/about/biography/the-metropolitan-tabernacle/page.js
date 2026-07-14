import Link from 'next/link';

export const metadata = {
  title: "The Metropolitan Tabernacle | Charles Spurgeon",
  description: "Learn about the construction and impact of the Metropolitan Tabernacle, the era's largest Nonconformist temple and the headquarters of Spurgeon's global ministry.",
  keywords: ["Charles Spurgeon", "Metropolitan Tabernacle", "Elephant and Castle", "Architecture", "Evangelism", "Prince of Preachers", "biography"],
};

export default function TheMetropolitanTabernaclePage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            August 24, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Metropolitan Tabernacle: The Construction of the Era's Largest Nonconformist Temple
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Pressing Need for a Permanent Home</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            In the years immediately following the catastrophic false fire alarm at the Surrey Gardens Music Hall in 1856, the pressing need for a safe, permanent, and exceedingly large place of worship became undeniable. The historic New Park Street Chapel had been enlarged, yet it remained woefully inadequate for the vast multitudes that Charles Haddon Spurgeon drew every week. The sheer volume of people flocking to hear the young pastor made the streets surrounding the church virtually impassable. Driven by the necessity to accommodate these massive crowds without relying on secular, worldly venues, the congregation embarked on the monumental task of constructing a new, custom-built edifice in the Elephant and Castle district of Newington, South London.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Triumph of Faith and Architecture</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The result of their relentless efforts and sacrificial giving was the Metropolitan Tabernacle, which was officially opened on March 25, 1861. The construction of this colossal building was a triumph of Victorian nonconformity, completed at a cost of just over £31,000. Miraculously, due to Spurgeon's strict financial principles and the congregation's generosity, the massive structure was inaugurated entirely free of debt.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The Tabernacle was an architectural marvel of its time, designed to seat approximately 5,600 people, though it regularly packed in thousands more in its aisles and standing areas, with some historical accounts noting the attendance of up to 12,000 listeners during combined weekly services. The design and nomenclature of the building were deeply steeped in theological symbolism. Spurgeon deliberately chose the name "Tabernacle" rather than "Temple" or "Church" to remind his flock that this magnificent structure was merely a temporary, earthly tent, standing in stark contrast to their eternal and final celestial habitation. Furthermore, the imposing Greek columns that adorned the facade of the building were not merely decorative; they were specifically chosen to visually evoke the classical language and cultural setting in which the New Testament was originally written.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Hub of Aggressive Evangelism</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            With the opening of the Metropolitan Tabernacle, Spurgeon possessed the largest nonconformist acoustic platform in the world. He governed the church with a firm pastoral hand, personally interviewing prospective members to ensure the genuineness of their conversion before admitting them to the fellowship. The majority of the congregants belonged to the lower-middle and working classes, and his deacons harbored an immense admiration for his leadership.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The building was constantly overflowing. The spiritual hunger of London's population was so intense that Spurgeon had to institute an extraordinary and unprecedented pastoral policy: every three months, he earnestly requested that his regular church members absent themselves from the Sunday services. This selfless practice ensured that the pews would be freed up, allowing unconverted visitors and newcomers the opportunity to enter the building, take a seat, and hear the proclamation of the Gospel.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            For the next three decades, the Metropolitan Tabernacle stood not only as a preaching center but as the vibrant heart of a vast spiritual empire. From this headquarters, Spurgeon operated dozens of benevolent ministries, trained hundreds of pastors, and launched a literary output that would reach the ends of the earth. The Tabernacle era solidified Spurgeon's title as the "Prince of Preachers," proving that faithful and Christ-centered preaching could successfully command the attention of a modern industrial metropolis.
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed August 23, 2025. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Biblioteca Charles Spurgeon. "Quem foi Charles Spurgeon?" <em>SpurgeonLine</em>. Accessed August 23, 2025. <a href="https://spurgeonline.com.br/artigos/quem-foi-charles-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed August 23, 2025. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipedia, The Free Encyclopedia. "Charles Spurgeon." <em>Wikipédia, a enciclopédia livre</em>. Accessed August 23, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed August 23, 2025. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Redação Mundo Cristão. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>, August 5, 2020. Accessed August 23, 2025. <a href="https://www.mundocristao.com.br/blog/quem-foi-charles-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Metropolitan Tabernacle", "Elephant and Castle", "Architecture", "Evangelism", "Prince of Preachers"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/biography/the-surrey-gardens-tragedy" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Surrey Gardens Tragedy</span>
            </Link>
            <Link href="/en/about/biography/the-mentone-retreats" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Mentone Retreats</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
