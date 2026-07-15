import Link from 'next/link';

export const metadata = {
  title: "The Printed Page | Charles Spurgeon",
  description: "Learn how the strategic use of stenographers and telegraphs allowed Charles Spurgeon's sermons to reach millions worldwide.",
  keywords: ["Charles Spurgeon", "The Printed Page", "Stenography", "Telegraph", "Sermons", "Publications", "Global Reach", "preacher"],
};

export default function ThePrintedPagePage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/preacher" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to The Preacher & His Work
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            April 19, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Printed Page: How Telegraphs and Stenographers Sent His Weekly Sermons Around the World
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Mechanics of the Weekly Publication</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While Charles Haddon Spurgeon’s booming voice could captivate a live audience of over ten thousand people at the Metropolitan Tabernacle, it was the power of the printed page that transformed him into a global phenomenon. In 1855, recognizing the immense hunger for solid, biblical teaching, Spurgeon partnered with his friend John Passmore, a publisher, and James Alabaster to begin printing his sermons on a weekly basis. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The logistics of this operation were a marvel of nineteenth-century efficiency. Because Spurgeon preached extemporaneously from a brief outline, a stenographer (taquígrafo) was employed to meticulously record his spoken words during the Sunday morning service. On Monday, Spurgeon would rigorously review and edit the transcript, and by Thursday, the sermon was printed, published, and sold to the masses for a mere penny.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Monumental Literary Output</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            This weekly publishing enterprise continued uninterrupted throughout his life and well beyond it. The massive collection of discourses, published initially as <em>The New Park Street Pulpit</em> and later as <em>The Metropolitan Tabernacle Pulpit</em>, eventually comprised 3,653 sermons spanning 63 massive volumes. To put this staggering output into historical perspective, this collection is physically larger than the <em>Encyclopedia Britannica</em>. Consequently, Spurgeon holds the historical distinction of being the author with the largest volume of published works in the entire history of Christianity.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            His printed sermons were in such high demand that some individual messages achieved astronomical circulation; his highly controversial 1864 discourse on <em>Baptismal Regeneration</em>, for instance, saw an incredible 300,000 copies printed and distributed in a single week. The eminent German theologian Helmut Thielicke appropriately captured the enduring theological value of this immense literary corpus when he famously advised ministers: <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"Sell all the books you have... and buy Spurgeon"</em>.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Transatlantic Telegraph and Global Reach</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon’s homiletical reach was not confined to the British Isles. The technological advancements of the Victorian era, particularly the transatlantic telegraph, were brilliantly utilized to broadcast his messages worldwide. His sermons were transmitted via telegraph across the ocean to the United States, where they were eagerly republished in major American newspapers. By 1892, the year of his death, his works were already being actively translated into at least nine different languages, allowing his Reformed, evangelical theology to penetrate diverse cultures across the globe.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            However, this global exposure occasionally led to fierce ideological clashes. During the American Civil War era, his sermons sent to the United States were often heavily censored by Southern publishers because of Spurgeon's adamant, uncompromising stance against the enslavement of African Americans.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Preacher to the World</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Through the strategic and innovative use of stenography, the printing press, and the telegraph, Spurgeon transcended the physical and acoustic limitations of his London pulpit. He proved to his generation that technological progress could be powerfully harnessed for the rapid advancement of the Gospel. Long after his physical voice was silenced, the printed page ensured that the "Prince of Preachers" would continue to speak to millions, leaving an inexhaustible theological and devotional legacy for the global Church.
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
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed July 14, 2026. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Biblioteca Charles Spurgeon. "Quem foi Charles Spurgeon?" <em>SpurgeonLine</em>. Accessed July 14, 2026. <a href="https://spurgeonline.com.br/artigos/quem-foi-charles-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Editora Mundo Cristão. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>, August 5, 2020. Accessed July 14, 2026. <a href="https://www.mundocristao.com.br/blog/quem-foi-charles-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["The Printed Page", "Stenography", "Telegraph", "Sermons", "Publications", "Global Reach"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/preacher/homiletics" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Homiletics</span>
            </Link>
            <Link href="/en/about/preacher/the-institutional-machinery" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Institutional Machinery</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
