import Link from 'next/link';

export const metadata = {
  title: "Fighting Hyper-Calvinism | Charles Spurgeon",
  description: "Learn about Charles Spurgeon's fierce battle against hyper-Calvinism and his defense of the free offer of the gospel.",
  keywords: ["Charles Spurgeon", "Hyper-Calvinism", "John Gill", "Strict Baptists", "Evangelism", "Sovereignty", "theology", "controversies"],
};

export default function FightingHyperCalvinismPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/controversies" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Controversies
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            February 8, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Fighting Hyper-Calvinism: The Battle Against the Extreme Right
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Shadow of John Gill and the Strict Baptists</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            When the young Charles Haddon Spurgeon assumed the pastorate of the New Park Street Chapel in 1854, he stepped into a pulpit with a formidable, yet weighty, theological legacy. One of his most famous predecessors was the eminent eighteenth-century theologian Dr. John Gill, whose profound scholarship was widely respected, but who frequently championed rigid, hyper-Calvinistic views. Hyper-Calvinism, as a theological extreme, essentially denied the indiscriminate offer of the gospel, arguing that it was unscriptural to invite the unregenerate or spiritually dead to repent and believe. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            In this theological atmosphere, many Strict Baptists viewed any fervent evangelistic appeal with deep suspicion, believing that commanding non-elect sinners to believe in Christ was an affront to the absolute sovereignty of God. Consequently, Spurgeon's explosive, urgent preaching was immediately met with severe criticism from the "extreme right" of the Reformed spectrum, who accused the young prodigy of secretly harboring Arminian tendencies.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Indiscriminate Offer of the Gospel</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon vehemently rejected the hyper-Calvinist restriction on evangelism, seeing it as a deadly distortion of biblical truth. He recognized that hyper-Calvinism failed to properly differentiate between God's redemptive love for the elect and His indiscriminate love of compassion and mercy toward all His creatures. Operating under the conviction that the secret decrees of predestination belong to God alone, Spurgeon maintained that the revealed command of Scripture requires the church to preach the gospel to every creature. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            He famously dismantled the hyper-Calvinist hesitation with a touch of his characteristic wit, declaring: <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"If God would have painted a yellow stripe on the backs of the elect I would go around lifting shirts. But since He didn't I must preach 'whosoever will' and when 'whatsoever' believes I know that he is one of the elect"</em>.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Duty Faith and the Urgency of Persuasion</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            At the core of this controversy was the doctrine of "duty faith"—the biblical mandate that it is the solemn responsibility of all people, everywhere, to repent and believe the gospel. While hyper-Calvinists argued that a person cannot be commanded to do what they are spiritually incapable of doing, Spurgeon embraced the biblical paradox of divine sovereignty and human responsibility without attempting to artificially reconcile them through cold, rationalistic logic. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            He instructed his pastoral students that simply presenting the gospel as a dry set of theological facts was a dereliction of their duty. "It is not enough merely to present the gospel; it's not enough merely to tell people about the gospel," Spurgeon urged. "We must plead with them, we must persuade them, reason with them, urge them, compel them to come in".
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Enduring the Theological Crossfire</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The battle against hyper-Calvinism required immense pastoral courage, as Spurgeon had to withstand bitter denunciations from fellow Calvinists who felt he was betraying their theological heritage. He was forced to preach numerous sermons explicitly defending his orthodox Calvinism to prove his accusers wrong, demonstrating that a firm belief in the doctrines of grace is the greatest fuel for, not a hindrance to, zealous soul-winning. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Through his unwavering commitment to the free offer of the gospel, Spurgeon successfully shattered the lethargy of nineteenth-century hyper-Calvinism, leaving a historical legacy that forever proved that the highest views of God's sovereignty can—and must—coexist with the most aggressive, affectionate, and indiscriminate evangelism.
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
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Johnson, Phillip R. "A Primer on Hyper-Calvinism." <em>The Spurgeon Archive</em>, 1998. Accessed July 14, 2026. <a href="http://www.romans45.org/spurgeon/misc/hypercal.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Grace Quotes. "If God would have painted a yellow stripe on the backs of the elect..." Accessed July 14, 2026. <a href="https://gracequotes.org/quote/if-god-would-have-painted-a-yellow-stripe-on-the-backs-of-the-elect-i-would-go-around-lifting-shirts-but-since-he-didnt-i-must-preach-whosoever-will-and-when-whats/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kirkland, Geoffrey. "Charles Spurgeon — The Nineteenth Century Calvinistic Evangelist!" <em>vassal of the King</em>, March 9, 2012. Accessed July 14, 2026. <a href="https://vassaloftheking.blogspot.com/2012/03/charles-spurgeon-nineteenth-century.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Murray, Iain H. <em>Spurgeon v. Hyper-Calvinism: The Battle for Gospel Preaching</em>. Carlisle, PA: Banner of Truth, 1995. Cited in Banner of Truth, "C. H. Spurgeon Author Biography." Accessed July 14, 2026. <a href="https://banneroftruth.org/us/about/banner-authors/iain-h-murray/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. [PDF document from CPAJ].</li>
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
              {["Hyper-Calvinism", "John Gill", "Strict Baptists", "Evangelism", "Sovereignty", "Duty Faith"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/controversies/the-anti-slavery-backlash" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Anti-Slavery Backlash</span>
            </Link>
            <Link href="/en/about/controversies/fighting-arminianism" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Fighting Arminianism</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
