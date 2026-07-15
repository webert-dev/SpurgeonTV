import Link from 'next/link';

export const metadata = {
  title: "The Preacher's Library | Charles Spurgeon",
  description: "Explore the massive personal library of Charles Spurgeon, featuring over 12,000 volumes and a rare Puritan arsenal.",
  keywords: ["Charles Spurgeon", "The Preacher's Library", "Puritans", "Theology", "Midwestern Baptist Theological Seminary", "Reading", "Books", "preacher"],
};

export default function ThePreachersLibraryPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/preacher" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to The Preacher & His Work
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            May 31, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Preacher's Library: The Puritan Arsenal That Fueled His Mind
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Voracious Autodidact</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Charles Haddon Spurgeon never obtained a formal theological degree from prestigious universities like Oxford or Cambridge, choosing instead to educate himself through relentless, disciplined reading. He possessed an extraordinarily keen intellect and consumed an average of six books a week, aided by an exceptional memory that allowed him to perfectly recall what he had read and exactly where to find it, even years later. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            To fuel his immense homiletical and literary output, Spurgeon amassed a breathtaking personal collection that grew to approximately 12,000 volumes by the time of his death. He was so intimately acquainted with his own collection that it was said he could easily locate and select any specific book from the shelves even in the dark.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Fortress of Puritan Theology</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            At the very heart of Spurgeon's library was his profound devotion to the English Puritans. From his childhood days in Stambourne, where he spent hours in his grandfather's study reading John Bunyan, Richard Baxter, and John Owen, his theological convictions were permanently shaped by 16th and 17th-century Reformed literature. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Consequently, he intentionally collected editions of Puritan works, and his personal library housed around 1,000 rare volumes published before the year 1700. Spurgeon considered the Puritans his greatest theological mentors, frequently extracting their "dust of gold" to enrich his own sermons and writings.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Intellectual Engine for Ministry</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            This massive library served as the intellectual engine for his pastoral work and global influence. When compiling his magnum opus, <em>The Treasury of David</em>, Spurgeon painstakingly mined these ancient texts to provide his congregation and readers with the most robust and devotionally rich interpretations of the Psalms. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Yet, despite his deep appreciation for human scholarship and historical theology, Spurgeon always maintained the absolute supremacy of the Word of God. He warned his pastoral students not to rely solely on human books, declaring: <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"In the Bible we have a perfect library, and he who studies it thoroughly will be a better scholar than if he had devoured the Alexandrian Library entire"</em>.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Transatlantic Journey to America</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The legacy of Spurgeon's library survived his passing, though it embarked on a rather unexpected transatlantic journey. In 1906, what remained of his magnificent collection—amounting to 5,103 volumes—was purchased by William Jewell College in Liberty, Missouri, for $2,500. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Exactly one century later, in 2006, the Midwestern Baptist Theological Seminary in Kansas City acquired the collection for $400,000. Today, these precious volumes are preserved and displayed in the dedicated "Spurgeon Library," ensuring that the historical roots of his ministry continue to inspire, educate, and equip new generations of preachers around the world.
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25.</li>
                <li style={{ marginBottom: '0.5rem' }}>Croy, Lance. "Charles Spurgeon and Followership." <em>Regent Research Roundtables Proceedings</em> (2022): 32-55.</li>
                <li style={{ marginBottom: '0.5rem' }}>Editora Mundo Cristão. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>, August 5, 2020. Accessed July 14, 2026. <a href="https://www.mundocristao.com.br/blog/quem-foi-charles-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Lectures To My Students Vol. 1</em>. London: Passmore and Alabaster, 1875. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Grokipedia. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://grokipedia.com/page/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["The Preacher's Library", "Puritans", "Theology", "Midwestern Baptist Theological Seminary", "Reading", "Books"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/preacher/the-voice-of-spurgeon" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Voice of Spurgeon</span>
            </Link>
            <div></div> {/* Empty div for flex spacing if there is no next */}
          </div>

        </div>
      </article>
    </div>
  );
}
