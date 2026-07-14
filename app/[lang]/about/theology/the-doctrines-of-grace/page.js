import Link from 'next/link';

export const metadata = {
  title: "The Doctrines of Grace | Charles Spurgeon",
  description: "How Charles Spurgeon defended historic Calvinism and the doctrines of grace without losing his passionate zeal to preach the Gospel to everyone.",
  keywords: ["Charles Spurgeon", "Doctrines of Grace", "Calvinism", "Sovereign Grace", "Five Points", "Orthodoxy", "biography", "theology"],
};

export default function TheDoctrinesOfGracePage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/theology" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Theology
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            September 28, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Doctrines of Grace: How is it possible to defend Calvinism without losing the zeal to preach the Gospel to everyone?
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Discovery of Sovereign Grace</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While Charles Haddon Spurgeon is celebrated globally for his unparalleled evangelistic zeal, the absolute bedrock of his entire ministry was his uncompromising commitment to Reformed theology. Spurgeon candidly confessed that, like all humanity, he was "born an Arminian by nature" and initially believed in the primacy of human free will. However, his theological awakening occurred when he deeply reflected on the mechanics of his own conversion. He asked himself how he came to pray and read the Scriptures, realizing that he only did so because God had first drawn him. In a sudden flash of spiritual insight, he perceived that the eternal God was at the very foundation of it all, acting as the true author of his faith. From that pivotal moment, the entire structure of the doctrines of grace opened up to his mind, and he never departed from them for the rest of his life.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Calvinism as the Gospel</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            For the "Prince of Preachers," Calvinism was never merely a sectarian label or a dry academic system; it was simply a nickname for the biblical gospel itself. He articulated his theological framework by stating that Calvinism means placing the eternal God at the foundation of all things, and looking at every aspect of reality through its relation to the glory of God. Spurgeon firmly emphasized that these profound truths did not originate with the French reformer John Calvin. Instead, he believed they flowed directly from the great Founder of all truth, were historically articulated by Augustine, and were originally received by the apostle Paul through the inspiration of the Holy Spirit. To Spurgeon, terms like Puritanism, Protestantism, and Calvinism were just poor, inadequate names that the world had assigned to the glorious and ancient faith of Jesus Christ.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Five Points at the Tabernacle</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon's ministry was characterized by a staunch defense of the historic Five Points of Calvinism: Total Depravity, Unconditional Election, Limited Atonement, Irresistible Grace, and the Perseverance of the Saints. He was so deeply committed to these specific doctrines that he utilized the most important moments of his career to champion them. When his monumental new church building, the Metropolitan Tabernacle, was officially inaugurated in 1861, Spurgeon chose to preach a dedicated series of sermons specifically on the "five points of Calvinism". By doing so, he ensured that the theological foundation of his massive congregation was absolutely clear, rooted in the sovereignty of God, and aligned with the historic Reformed faith.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Navigating Between Extremes</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Throughout his pastoral career, Spurgeon had to expertly navigate theological battles on multiple fronts, proving his mettle as a defender of orthodoxy. Early in his ministry, he faced severe criticism from hyper-Calvinists, who accused him of leaning too far toward Arminianism. This suspicion arose because Spurgeon succeeded pastoral giants like the eminent theologian John Gill, who frequently held rigid, hyper-Calvinistic views that restricted the free offer of the gospel. Spurgeon shattered this lethargy by proving that the doctrines of grace are perfectly compatible with aggressive, passionate evangelism.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            On the other hand, he vehemently rejected the theological left and the Arminian systems of his day, refusing to compromise the absolute sovereignty of God in salvation. When critics argued that such strong Calvinistic teachings would lead to moral laxity, Spurgeon delivered sermons demonstrating that the doctrines of grace absolutely do not lead to sin, but rather produce profound gratitude and holiness. He firmly warned his students and congregants that those who despise solid Christian doctrine are the worst enemies of the Christian life, famously declaring that the "coals of orthodoxy are necessary for the fire of piety".
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed September 27, 2025. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipedia, The Free Encyclopedia. "Charles Spurgeon." <em>Wikipédia, a enciclopédia livre</em>. Accessed September 27, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. "A Defense of Calvinism." <em>Modern Reformation</em>, Vol. 1, No. 3 (1992). Accessed September 27, 2025. <a href="https://www.modernreformation.org/resources/articles/are-you-sure-you-like-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed September 27, 2025. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed September 27, 2025. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>GotQuestions.org. "What is a Calvinist?" Accessed September 27, 2025. <a href="https://www.gotquestions.org/Calvinist.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Doctrines of Grace", "Calvinism", "Sovereign Grace", "Five Points", "Metropolitan Tabernacle", "Orthodoxy"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <div></div> {/* Empty div for flex spacing if there is no previous */}
            <Link href="/en/about/theology/the-puritan-influence" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Puritan Influence</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
