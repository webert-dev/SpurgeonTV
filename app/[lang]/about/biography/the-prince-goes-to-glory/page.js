import Link from 'next/link';

export const metadata = {
  title: "The Prince Goes to Glory | Charles Spurgeon",
  description: "Read about the unprecedented 1892 funeral procession of Charles Spurgeon, a massive civic event that paralyzed London and marked the end of an era.",
  keywords: ["Charles Spurgeon", "Funeral", "Memorial Service", "West Norwood Cemetery", "Archibald G. Brown", "Epitaph", "Isaiah 45:22", "biography"],
};

export default function ThePrinceGoesToGloryPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            September 21, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Prince Goes to Glory: The Funeral Procession That Paralyzed London in 1892
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Final Journey from Menton</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Charles Haddon Spurgeon drew his last breath on January 31, 1892, in the coastal retreat of Menton, France, at the age of fifty-seven. The news of his passing sent immediate shockwaves not only throughout evangelical circles but across the entire Victorian world. His body was reverently transported from the sunny Mediterranean shores back to the damp, gray winter of England. The return of his remains marked the beginning of a mourning period that London had rarely witnessed for a private citizen, let alone a nonconformist minister.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Memorial Services and the Open Bible</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Upon arriving in London, the casket was placed at the Metropolitan Tabernacle, the epicenter of his monumental ministry. Recognizing that the building, despite its massive 5,600-seat capacity, could not possibly hold the multitudes wishing to pay their final respects, a series of memorial services and viewings were meticulously organized. During the public visitation, mourners filed past his olive-wood casket, which bore a profound theological statement without a single spoken word: his beloved Bible rested upon it, opened precisely to Isaiah 45:22, the very text ("Look unto me, and be ye saved, all the ends of the earth") that God had used to miraculously convert him forty-two years prior in a small Methodist chapel. It is recorded that during one of these solemn viewings, six thousand people passed by the casket to read that verse and honor the man who had tirelessly pointed them to Christ.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Metropolis Paralyzed by Grief</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The official funeral and burial took place in February 1892. The sheer scale of the event was staggering. An estimated 100,000 mourners lined the streets of South London to witness the funeral cortege. The procession route, stretching for nearly three kilometers, was a sea of sorrowing humanity. As the carriage made its way toward the cemetery, the bustling, industrial metropolis of London was practically paralyzed. Shops and businesses closed their doors, flags were flown at half-mast, and public houses shuttered in a display of unprecedented civic respect. The working-class citizens, the orphans, the wealthy, and the destitute all stood shoulder-to-shoulder to bid farewell to their "Prince of Preachers."
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Committal at West Norwood Cemetery</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The procession finally concluded at the West Norwood Cemetery, located in South London, where a solemn crowd gathered for the final committal. His close friend and fellow pastor, Archibald G. Brown—who had himself withdrawn from the Baptist Union in solidarity with Spurgeon during the Downgrade Controversy—delivered a deeply moving eulogy at the graveside. Looking down at the casket, Brown declared with pastoral eloquence: <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"Champion of God! Thy long battle and noble fight are over. The sword which was in thy hand has fallen at last; a palm branch has taken its place. No more shall the helmet press thy brow, through the constant anxiety of thy vibrant thoughts about the combat; the crown of victory, delivered by the very hand of the great commander, is the evident proof of thy noble reward."</em>
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>An Eschatological Epitaph</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon was laid to rest beneath a tomb that perfectly encapsulated his lifelong theological convictions and his unwavering hope in the bodily resurrection. The plaque placed over his remains bears a simple, yet profoundly eschatological inscription: "Here lies the body of CHARLES HADDON SPURGEON, waiting for the appearing of his Lord and Savior JESUS CHRIST". Thus, the earthly pilgrimage of the greatest preacher of the nineteenth century concluded, bringing the biographical chapter of his life to a close, even as his vast literary and theological legacy was just beginning to cement its immortality in church history.
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed September 20, 2025. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed September 20, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Biblioteca Charles Spurgeon. "Quem foi Charles Spurgeon?" <em>SpurgeonLine</em>. Accessed September 20, 2025. <a href="https://spurgeonline.com.br/artigos/quem-foi-charles-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Spurgeon Library. "From Mentone to Norwood: The Final Journey of C. H. Spurgeon." <em>Midwestern Baptist Theological Seminary</em>. Accessed September 20, 2025. <a href="https://www.spurgeon.org/resource-library/blog-entries/from-mentone-to-norwood-the-final-journey-of-c-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed September 20, 2025. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed September 20, 2025. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Funeral", "Memorial Service", "West Norwood Cemetery", "Archibald G. Brown", "Epitaph", "Isaiah 45:22"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/biography/the-final-years" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Final Years</span>
            </Link>
            <div></div> {/* Empty div for flex spacing if there is no next */}
          </div>

        </div>
      </article>
    </div>
  );
}
