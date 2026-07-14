import Link from 'next/link';

export const metadata = {
  title: "Eschatology | Charles Spurgeon",
  description: "Explore Charles Spurgeon's view on the last days, his premillennialism, and his strict warnings against prophetic speculation.",
  keywords: ["Charles Spurgeon", "Eschatology", "Second Coming", "Premillennialism", "Restoration of the Jews", "Last Days", "Prophecy", "theology"],
};

export default function EschatologyPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/theology" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Theology
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            December 07, 2025 • 4 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Eschatology: Spurgeon's View on the Last Days and the Return of Christ
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Blessed Hope and the Consummation of History</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While Charles Haddon Spurgeon is predominantly celebrated for his robust soteriology and passionate evangelistic zeal, his entire theological framework was profoundly eschatological. The culmination of human history and the glorious, bodily return of Jesus Christ served as the ultimate horizon for his ministry and personal faith. For Spurgeon, the Second Coming was never an obscure, secondary doctrine; it was the living, breathing hope of the Church. In his 1855 <em>Puritan Catechism</em>, he explicitly instructed his congregation that "our Lord Jesus Christ will come a second time; which is the joy and hope of all believers". This anticipation permeated his earthly pilgrimage to such an extent that his very tombstone at the West Norwood Cemetery bears a distinctly eschatological inscription: "Here lies the body of CHARLES HADDON SPURGEON, waiting for the appearing of his Lord and Savior JESUS CHRIST".
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Premillennialism and the Restoration of the Jews</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Theologically, Spurgeon aligned himself with historic premillennialism, believing that Christ would physically return to earth to establish a literal millennial kingdom before the final judgment. This conviction was openly articulated in the public confession of faith released by the Fraternal Union—a network of orthodox ministers he associated with following his withdrawal from the Baptist Union—which boldly declared: "Our hope is the Personal Pre-millennial Return of the Lord Jesus in glory".
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Furthermore, Spurgeon held distinct views regarding the eschatological future of the Jewish people. Rejecting the widespread theological tendency to completely spiritualize Old Testament prophecies and apply them exclusively to the Christian Church, Spurgeon was a proponent of what is historically known as Christian Restorationism. Based on a literal exegesis of texts like Ezekiel 37, he anticipated a future, geographical restoration of Israel. In his 1864 sermon <em>The Restoration And Conversion of the Jews</em>, he confidently proclaimed regarding the Jewish people: "We look forward, then, for these two things... They are to be restored and they are to be converted, too".
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Stern Warning Against Prophetic Speculation</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Despite his unwavering belief in the imminent return of Christ and the millennial kingdom, Spurgeon harbored a profound distaste for the sensationalist, highly speculative eschatology that was rapidly gaining popularity during the Victorian era. He strictly warned his pastoral candidates against the obsession with calculating prophetic timelines, date-setting, or attempting to identify contemporary political figures as apocalyptic villains.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            In his <em>Lectures to My Students</em>, the "Prince of Preachers" delivered a scathing rebuke to ministers who wasted their pulpits on such conjectures: <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"Your guess at the number of the beast, your Napoleonic speculations, your conjectures concerning a personal Antichrist — forgive me, I count them but mere bones for dogs, while men are dying, and hell is filling"</em>. He noted with historical realism that generation after generation of prophetic speculators had been proven unequivocally wrong by the mere lapse of time, leading their ministries to an "inglorious sepulcher".
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            For Spurgeon, an obsession with the mechanics of the last days was a dangerous distraction from the primary task of the Church: the urgent proclamation of the Gospel. He insisted that the true mark of a faithful minister was not the ability to decode the mysteries of the Book of Revelation, but the earnest pursuit of the lost. He masterfully summarized his pastoral and eschatological priority by declaring: <em style={{ fontStyle: 'italic' }}>"I would sooner pluck one single brand from the burning than explain all mysteries"</em>. Thus, Spurgeon's eschatology remained perfectly balanced—anchored in the joyful expectation of the coming King, yet fiercely focused on the practical, immediate necessity of saving souls.
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
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Lectures To My Students Vol. 1</em>. London: Passmore and Alabaster, 1875. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Spurgeon's Catechism</em>. Pensacola, FL: Chapel Library. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipedia, The Free Encyclopedia. "Charles Spurgeon." <em>Wikipédia, a enciclopédia livre</em>. Accessed December 06, 2025. <a href="https://en.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Sheehan, Robert. "Spurgeon's Associationalism after the Downgrade Controversy." <em>The Spurgeon Archive</em>. Accessed December 06, 2025.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed December 06, 2025. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Eschatology", "Second Coming", "Premillennialism", "Restoration of the Jews", "Last Days", "Prophecy"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/theology/separation-from-the-world" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Separation from the World</span>
            </Link>
            <Link href="/en/about/theology/the-tender-compassion-of-christ" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Tender Compassion of Christ</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
