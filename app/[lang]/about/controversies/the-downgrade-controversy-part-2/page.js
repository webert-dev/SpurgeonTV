import Link from 'next/link';

export const metadata = {
  title: "The Downgrade Controversy (Part 2) | Charles Spurgeon",
  description: "Discover the painful aftermath of the Downgrade Controversy, leading to Charles Spurgeon's resignation and censure from the Baptist Union.",
  keywords: ["Charles Spurgeon", "Downgrade Controversy", "Baptist Union", "Censure", "Resignation", "James A. Spurgeon", "theology", "controversies"],
};

export default function TheDowngradeControversyPart2Page() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/controversies" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Controversies
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            January 11, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Downgrade Controversy (Part 2): The Agonizing Withdrawal from the Baptist Union
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Call for Confessional Clarity</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon's primary goal in publishing the Down-Grade articles was to sound an alarm and awake a slumbering denomination. He urgently pressed the Baptist Union to adopt a clear, evangelical confessional basis to halt the spread of liberalism. Because the Union lacked a formal, binding statement of faith, it had become a broad tent, accommodating both orthodox believers and those who actively questioned fundamental Christian truths. Spurgeon argued that without a doctrinal standard, the Union was failing to discipline ministers who were preaching heresy.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            However, the Union's leadership, deeply embedded in the cultural mood of Victorian tolerance and eager to preserve denominational unity at all costs, largely dismissed his warnings. They viewed Spurgeon's concerns as divisive and unnecessary. In an attempt to force his hand, opponents demanded that Spurgeon provide names and specific evidence of the men teaching heresy. He steadfastly refused to do so. Much of the information he had received came through private correspondence and confidential conversations. Spurgeon felt it was ungentlemanly to break the seal of confidentiality, choosing instead to focus the debate on the systemic erosion of doctrinal standards rather than launching personal attacks.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Resignation and Censure</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Realizing that the Union would not enforce theological orthodoxy and that he could no longer remain in a fellowship that tolerated the compromise of core doctrines, Spurgeon took a drastic step. He formally resigned his membership on October 28, 1887. Rather than prompting self-reflection within the denomination, his resignation dealt a severe blow to the reputation of the Union and deeply incensed its leadership. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            In response to his departure, the Council of the Baptist Union convened in January 1888. In a stunning rebuke to their most famous and influential member, the Council passed a "vote of censure" against Spurgeon. They officially declared that because he declined to give names, his charges ought not to have been made. This formal condemnation marked a tragic and hostile turning point in the conflict.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Betrayal of a Brother</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Following the censure, the Union adopted a weak, compromised "Declaratory Statement." It was deliberately drafted to be broad enough to satisfy the orthodox while remaining vague enough to tolerate the theological revisionists. Spurgeon saw right through the document, recognizing it as entirely insufficient to protect the gospel. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Tragically for Charles, this diluted resolution was supported and seconded on the floor by his own brother and co-pastor, James A. Spurgeon. James, like many others, believed he was achieving a victory for peace and unity. But for Charles, his brother's public capitulation to a compromised standard was a crushing personal betrayal. It proved that the desire for denominational cohesion had triumphed over the strict, uncompromising defense of biblical truth.
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
                <li style={{ marginBottom: '0.5rem' }}>Grokipedia. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://grokipedia.com/page/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Victorian Web. "Charles Haddon Spurgeon: A Brief Biography." Accessed July 14, 2026. <a href="https://victorianweb.org/religion/sermons/chsbio.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Hopkins, Mark. "The Down-Grade Controversy." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed July 14, 2026. <a href="https://christianhistoryinstitute.org/magazine/article/down-grade-controversy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Fullerton, W. Y. "Two Great Controversies." <em>The Spurgeon Archive</em>. Accessed July 14, 2026. <a href="http://www.romans45.org/spurgeon/misc/bio17.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Jessen, Jeremy. "What would Spurgeon tweet? 4 tips from the famous preacher on handling controversy." <em>Southern Equip</em>, September 13, 2019. Accessed July 14, 2026. <a href="https://equip.sbts.edu/article/spurgeon-tweet-4-tips-famous-preacher-handling-controversy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Reformed Reader. "The Down Grade Controversy." Accessed July 14, 2026. <a href="https://www.reformedreader.org/spurgeon/dgcindex.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Downgrade Controversy", "Baptist Union", "Censure", "Resignation", "James A. Spurgeon", "Confessionalism"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/controversies/the-downgrade-controversy-part-1" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Downgrade Controversy (Part 1)</span>
            </Link>
            <Link href="/en/about/controversies/the-downgrade-controversy-part-3" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Downgrade Controversy (Part 3)</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
