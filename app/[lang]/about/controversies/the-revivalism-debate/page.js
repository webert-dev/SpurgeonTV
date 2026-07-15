import Link from 'next/link';

export const metadata = {
  title: "The Revivalism Debate | Charles Spurgeon",
  description: "Examine Charles Spurgeon's strong critiques against pragmatic revivalism, emotional manipulation, and Charles Finney's methodologies.",
  keywords: ["Charles Spurgeon", "Revivalism", "Charles Finney", "Pragmatism", "Regeneration", "Holy Spirit", "Altar Calls", "controversies"],
};

export default function TheRevivalismDebatePage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/controversies" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Controversies
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            February 22, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Revivalism Debate: Critiques of Pragmatic Methods and Emotional Appeals
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Tension Between Revival and Revivalism</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            During the nineteenth century, the evangelical world was profoundly shaped by the tension between historic revival and modern revivalism. While true revival was understood by Reformed theologians as a sovereign and spontaneous outpouring of the Holy Spirit, the new "revivalism"—popularized largely by American evangelists like Charles Finney—relied heavily on pragmatic methodologies, psychological pressure, and emotional appeals to secure immediate, measurable results. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Charles Haddon Spurgeon, though universally recognized as one of the greatest soul-winners in church history, fiercely opposed this pragmatic shift. His unwavering commitment to Calvinistic soteriology convinced him that the new birth was exclusively a supernatural act of God, not a human decision that could be manufactured by homiletical techniques or emotional manipulation. He firmly believed that without the direct intervention of the Holy Spirit operating upon the will and conscience, regeneration was an absolute impossibility.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Rejection of Spurious Fervor</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Because he believed that salvation belonged entirely to the Lord, Spurgeon detested any attempt to artificially stimulate a congregation's emotions. He viewed the pulpit as a sacred desk of truth, not a theatrical stage for human performance. Addressing the future ministers at his Pastors' College, he issued a stern warning against the temptation to fake spiritual intensity: "As you would avoid a viper, keep from all attempts to work up spurious fervor in public devotion". 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            He instructed his students that while they must preach with genuine earnestness and utter dependence on the Holy Spirit, they should never imitate the dramatic groans, pauses, or shrieks of other preachers just to appear zealous. He famously declared to his pastoral candidates that <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"simulated ardor is a shameful form of lying"</em>.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Call to Faith vs. Pressured Professions</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            One of the hallmarks of Finneyite revivalism was the pressing of individuals to make an immediate, public "decision for Christ" through emotional altar calls. Spurgeon, conversely, approached the awakened sinner with profound theological care and patience. He strictly warned his pastoral candidates against pushing people into superficial declarations of faith, insisting that "there must be no persuading to make a profession". 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            He believed that while the gospel must be offered freely and urgently, pressuring an unregenerate person into a hasty religious profession would only place a stumbling block in the way of hopeful minds. Instead of relying on manipulative mass appeals, Spurgeon advocated for intense personal interaction and private counsel with seekers. He taught that "doubts may be cleared away, errors rectified, and terrors dispelled by a few moments’ conversation," emphasizing that true pastoral work happens when a minister personally and carefully guides an awakened soul to the cross.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Tragic Postscript at the Tabernacle</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon's staunch resistance to pragmatic revivalism was a defining boundary of his orthodox ministry. The theological fortitude he maintained did not long survive him at the Metropolitan Tabernacle. In 1911, nearly two decades after Spurgeon's death, the American pastor Anzi Clarence Dixon assumed the pastorate and initiated a stark doctrinal departure from his predecessors. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Dixon introduced American-style evangelistic crusades and the practice of securing "Decisions for Christ"—the very pragmatic methods initially developed by Charles Finney that Spurgeon had spent his life resisting. This historical shift perfectly illustrated what Spurgeon had always feared, demonstrating how quickly a church could transition from resting on the sovereign work of the Holy Spirit to depending on the pragmatic methodologies of modern revivalism.
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
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Dever, Mark, Jonathan Leeman, et al. "What's Wrong with Us? Revival vs. Revivalism." <em>9Marks</em>, June 7, 2023. Accessed July 14, 2026. <a href="https://www.9marks.org/video/whats-wrong-with-us-revival-vs-revivalism/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. "Regeneration." <em>The New Park Street Pulpit</em>, Sermon No. 130, May 3, 1857. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25.</li>
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
              {["Revivalism", "Charles Finney", "Pragmatism", "Regeneration", "Holy Spirit", "Altar Calls"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/controversies/fighting-arminianism" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Fighting Arminianism</span>
            </Link>
            <Link href="/en/about/controversies/higher-criticism" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Higher Criticism</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
