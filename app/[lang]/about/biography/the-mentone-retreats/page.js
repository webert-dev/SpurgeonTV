import Link from 'next/link';

export const metadata = {
  title: "The Mentone Retreats & The Final Days | Charles Spurgeon",
  description: "Discover how Charles Spurgeon sought refuge in the French Riviera to battle severe illness, and read the moving account of his final days in Menton.",
  keywords: ["Charles Spurgeon", "Menton", "French Riviera", "Gout", "Bright's Disease", "The Clue of the Maze", "Death", "Legacy", "biography"],
};

export default function TheMentoneRetreatsPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            August 31, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Mentone Retreats: Escape to the French Riviera for Rest and Physical Relief
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Heavy Toll of Ministry and the London Winters</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            As the years progressed, the relentless demands of pastoring the Metropolitan Tabernacle, overseeing dozens of charitable institutions, and battling fierce theological controversies took a severe toll on Charles Haddon Spurgeon's physical and mental health. By his mid-twenties, he was already suffering from excruciating attacks of gout and rheumatism. These painful conditions were severely aggravated by the damp, cold, and smog-filled winters of Victorian London, which continuously threatened his fragile constitution. Coupled with chronic bouts of deep depression—often triggered by physical exhaustion and past traumas like the Surrey Gardens tragedy—and the later onset of Bright's disease (a chronic and degenerative kidney inflammation), his physicians strongly recommended extended periods of absolute rest in a warmer, more forgiving climate.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Finding Sanctuary on the Mediterranean Coast</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Beginning around the year 1876, Spurgeon found his much-needed sanctuary in Menton (frequently referred to in his day by its Italian name, Mentone), a picturesque coastal town located on the French Riviera, near the border of Italy. The mild, sun-drenched Mediterranean climate provided immense physical relief for his agonizing joints and failing kidneys. What initially began as occasional late-year holidays soon became an absolute medical necessity.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            By 1887, as the immense stress of the "Downgrade Controversy" weighed heavily upon his pastoral heart and rapidly accelerated the deterioration of his health, these trips to the South of France became increasingly frequent. Spurgeon would sometimes spend months at a time in retreat, seeking solace away from the bitter theological battles and the freezing fogs of the English capital. The sunny skies and olive groves of the Riviera offered a stark, healing contrast to the heavy burdens he carried in London.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Working Exile and the Final Days</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Despite being physically removed from his beloved congregation, Spurgeon's pastoral heart and literary output never truly ceased. Menton was not merely a place of passive recovery, but a quiet sanctuary for writing, reflection, and continuous ministry. It was during his time in this coastal refuge that he authored several works, including <em>The Clue of the Maze</em> (published in Portuguese as <em>A Dica do Labirinto</em>), a thoughtful book specifically addressing the intersection of faith and the doubts of the modern age. From his rooms in Menton, he also maintained a voluminous correspondence, directing the affairs of his church, the Pastors' College, and the Stockwell Orphanage from afar.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Menton ultimately became the setting for the final chapter of his earthly pilgrimage. In 1891, his physical condition worsened drastically, forcing him to step away from his pulpit entirely. Inviting the American Presbyterian minister Arthur T. Pierson to temporarily assume the preaching duties at the Tabernacle, Spurgeon retired once more to Menton, hoping the restorative Mediterranean air would grant him a recovery. He remained there through the winter. After a brief period of apparent improvement that gave false hope to his friends and family, his health rapidly and irreversibly declined.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            On January 31, 1892, at the age of fifty-seven, the "Prince of Preachers" drew his last breath and passed away in his Menton retreat. His death marked the end of a monumental era in evangelical history. His body was subsequently transported from the quiet shores of France back to England, where a massive funeral procession of 100,000 mourners paralyzed the streets of London before he was laid to rest at the West Norwood Cemetery.
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
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed August 30, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Biblioteca Charles Spurgeon. "Quem foi Charles Spurgeon?" <em>SpurgeonLine</em>. Accessed August 30, 2025. <a href="https://spurgeonline.com.br/artigos/quem-foi-charles-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed August 30, 2025. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed August 30, 2025. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed August 30, 2025. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Spurgeon Library. "From Mentone to Norwood: The Final Journey of C. H. Spurgeon." <em>Midwestern Baptist Theological Seminary</em>. Accessed August 30, 2025. <a href="https://www.spurgeon.org/resource-library/blog-entries/from-mentone-to-norwood-the-final-journey-of-c-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Menton", "French Riviera", "Gout", "Bright's Disease", "The Clue of the Maze", "Arthur T. Pierson", "Death", "Legacy"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/biography/the-metropolitan-tabernacle" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Metropolitan Tabernacle</span>
            </Link>
            <Link href="/en/about/biography/physical-afflictions" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Physical Afflictions</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
