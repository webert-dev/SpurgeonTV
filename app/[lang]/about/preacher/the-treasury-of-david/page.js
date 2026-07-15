import Link from 'next/link';

export const metadata = {
  title: "The Treasury of David | Charles Spurgeon",
  description: "Discover the story behind Charles Spurgeon's twenty-year labor on his magnum opus, The Treasury of David, a monumental commentary on the Psalms.",
  keywords: ["Charles Spurgeon", "The Treasury of David", "Psalms", "Magnum Opus", "Puritans", "Suffering", "Commentary", "preacher"],
};

export default function TheTreasuryOfDavidPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/preacher" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to The Preacher & His Work
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            May 10, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Treasury of David: The Twenty-Year Labor on His "Magnum Opus"
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Monumental Literary Ambition</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While Charles Haddon Spurgeon is historically celebrated as the "Prince of Preachers," his literary output was equally staggering. He holds the historical distinction of being the author with the largest volume of published works in the history of Christianity, producing 63 massive volumes of sermons alone. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Yet, amidst the 135 books he wrote and edited during his lifetime, one specific work is universally recognized as his magnum opus and most important written achievement: <em>The Treasury of David</em>. This monumental project was a comprehensive commentary on all 150 Psalms of the Old Testament, representing a grueling intellectual and spiritual pilgrimage that demanded more than twenty years of continuous labor to complete.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Puritan Arsenal and the Art of Compilation</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            <em>The Treasury of David</em> was not merely a record of Spurgeon's own original thoughts; rather, it was a masterful compilation of commentaries and exegetical insights drawn from the greatest minds in church history. To accomplish this, Spurgeon relied on his massive personal library, which served as the intellectual engine for the project. As a voracious reader who consumed an average of six books a week and possessed an exceptional memory, he amassed a private collection of over 12,000 volumes. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Crucially, this library included around 1,000 rare works published before the year 1700, reflecting his profound theological alignment with the English Puritans. Spurgeon painstakingly mined these ancient, often forgotten Puritan texts—extracting their "dust of gold"—to provide his readers with the most robust, orthodox, and devotionally rich interpretations of the Psalter available in the English language.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Intersection of the Psalms and Personal Suffering</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The two decades required to produce <em>The Treasury of David</em> coincided with some of the most intense periods of pastoral labor and personal agony in Spurgeon's life. While he was exegeting the cries and triumphs of King David, Spurgeon himself was managing a mega-church with thousands of members, overseeing more than sixty charitable institutions (such as the Stockwell Orphanage and the Pastors' College), and fighting fierce theological battles. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Furthermore, his exposition of the Psalms of lament was deeply informed by his own chronic suffering. Throughout the project, Spurgeon endured agonizing bouts of gout, rheumatism, and Bright's disease—a degenerative kidney condition—alongside severe, incapacitating episodes of dark depression. The Psalms provided a divine vocabulary for his own pain, allowing him to comment on David's afflictions with profound pastoral empathy and experiential authenticity.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Completion and Enduring Legacy</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon's relentless perseverance eventually brought the massive undertaking to a close. In 1885, he published the seventh and final volume of <em>The Treasury of David</em>, concluding a work that had occupied him for a large portion of his adult life. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The finished commentary was immediately praised for its perfect balance of rigorous theology and warm, practical spirituality. Today, more than a century after its completion, <em>The Treasury of David</em> remains in print in several editions and continues to serve as an indispensable, standard reference work for preachers, scholars, and believers worldwide, cementing Spurgeon's legacy not only as a master orator but as a premier pastoral scholar.
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed July 14, 2026. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed July 14, 2026. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Spurgeon Archive. "The Treasury of David." Accessed July 14, 2026. <a href="http://www.romans45.org/spurgeon/treasury/treasury.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Croy, Lance. "Charles Spurgeon and Followership." <em>Regent Research Roundtables Proceedings</em> (2022): 32-55.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed July 14, 2026.</li>
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
              {["The Treasury of David", "Psalms", "Magnum Opus", "Puritans", "Suffering", "Commentary"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/preacher/lectures-to-my-students" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Lectures to My Students</span>
            </Link>
            <Link href="/en/about/preacher/john-ploughmans-talk" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>John Ploughman's Talk</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
