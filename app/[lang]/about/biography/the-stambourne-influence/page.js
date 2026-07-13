import Link from 'next/link';

export const metadata = {
  title: "The Stambourne Influence: Formative Years with Grandfather James Spurgeon",
  description: "Explore Charles Spurgeon's formative years in Stambourne under the care of his grandfather James Spurgeon, where he built a solid theological and Puritan foundation.",
  keywords: ["Charles Spurgeon", "Stambourne", "James Spurgeon", "Puritan influence", "John Foxe", "John Bunyan", "early life", "biography"],
};

export default function TheStambourneInfluencePage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            July 06, 2025 • 2 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Stambourne Influence: Formative Years with Grandfather James Spurgeon
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <p style={{ marginBottom: '1.5rem' }}>
            In August 1835, when Charles Haddon Spurgeon was fourteen months old, his parents relocated to the town of Colchester, entrusting the young boy to the care of his paternal grandfather, James Spurgeon. James had assumed the pastorate of the Independent Congregationalist Church of Stambourne in 1804, leading a flock that remained dedicated to the non-conformist tradition. Charles lived in this quiet rural village with his grandparents and his aunt Ann until he was about five or six years old. His aunt Ann, who was seventeen at the time and possessed a fervently evangelical faith, became like a second mother to him during these highly formative years.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The environment in Stambourne was profoundly shaped by a strong Puritan heritage, creating an ideal ecclesiastical and familial atmosphere for early spiritual development. It was within the walls of his grandfather's manse, and particularly in his expansive library, that the young boy’s intellectual and theological foundations were firmly laid. Charles voraciously explored the great Puritan classics, absorbing the dense theological works of undisputed giants such as Richard Baxter and John Owen.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            He was particularly captivated by John Bunyan's <em>The Pilgrim's Progress</em>, a majestic allegorical masterpiece that he would read more than a hundred times over the course of his lifetime. Furthermore, the young boy was deeply impacted by the historical accounts in John Foxe's <em>Book of Martyrs</em>. The vivid chronicles of Protestant suffering and martyrdom ignited his imagination, and those fearless Puritans and martyrs instantly became his lifelong heroes whose doctrinal values he internalized.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The pious atmosphere of the manse, combined with this rich literary diet, fostered an unusual maturity and spiritual zeal in the young boy. This precocious dedication to the Gospel was remarkably demonstrated when the young Charles courageously entered a local tavern to personally reprimand a man whose worldly behavior, according to the boy, was "breaking the heart" of his beloved pastor grandfather.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Although Charles returned to his parents' home in Colchester when he was six years old, the years spent in Stambourne left an indelible mark on his character. This early, uninterrupted immersion in Puritan literature and rigorous pastoral life provided the theological and historical bedrock for the man who would eventually be known to millions as the "Prince of Preachers".
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed July 13, 2026. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed July 13, 2026. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipedia, The Free Encyclopedia. "Charles Spurgeon." <em>Wikipédia, a enciclopédia livre</em>. Accessed July 13, 2026. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed July 13, 2026. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Biblioteca Charles Spurgeon. "Quem foi Charles Spurgeon?" <em>SpurgeonLine</em>. Accessed July 13, 2026. <a href="https://spurgeonline.com.br/artigos/quem-foi-charles-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Redação Mundo Cristão. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>. Accessed July 13, 2026. <a href="https://www.mundocristao.com.br/blog/quem-foi-charles-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Stambourne", "James Spurgeon", "Aunt Ann", "Puritan Heritage", "John Bunyan", "John Foxe", "Early Maturity"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/biography/the-kelvedon-years" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Kelvedon Years</span>
            </Link>
            <Link href="/en/about/biography/the-snowstorm-conversion" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Snowstorm Conversion</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
