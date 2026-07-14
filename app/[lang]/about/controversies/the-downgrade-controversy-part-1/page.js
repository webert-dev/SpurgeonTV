import Link from 'next/link';

export const metadata = {
  title: "The Downgrade Controversy (Part 1) | Charles Spurgeon",
  description: "Learn how the Downgrade Controversy began with warnings in The Sword and the Trowel against modernism and theological liberalism.",
  keywords: ["Charles Spurgeon", "Downgrade Controversy", "Sword and the Trowel", "Robert Shindler", "Baptist Union", "liberalism", "modernism", "controversies"],
};

export default function TheDowngradeControversyPart1Page() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/controversies" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Controversies
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            January 4, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Downgrade Controversy (Part 1): Sounding the Alarm in "The Sword and the Trowel"
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Gathering Storm of Modernism</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            In the late 1880s, Charles Haddon Spurgeon became increasingly alarmed by a theological crisis that was silently but swiftly infiltrating the churches of the Baptist Union. The rapid spread of modernism, Darwinian evolutionary theory, and German higher biblical criticism had begun to erode the foundational beliefs of many Nonconformist congregations. This profound ideological shift, which would soon become historically known as the "Down-Grade Controversy," was ignited in March 1887. The spark was an anonymous article published in Spurgeon's widely read monthly magazine, <em>The Sword and the Trowel</em>. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The article, titled "The Down Grade," was penned by Robert Shindler, a Baptist pastor and a close, trusted friend of Spurgeon. Shindler issued a stark warning that some ministers were abandoning historic Calvinistic doctrines and Puritan godliness. He employed the powerful metaphor of a "slippery slope" (the down grade) to illustrate how moving away from essential evangelical truths inevitably leads to a complete loss of Christian orthodoxy.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Spurgeon Enters the Fray</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon did not merely publish Shindler's words; he gave them his unqualified endorsement. In a footnote to the first piece, Spurgeon wrote: <em style={{ fontStyle: 'italic' }}>"Earnest attention is requested for this paper. There is need of such a warning as this history affords. We are going down hill at breakneck speed."</em> Following Shindler's initial articles in March and April, Spurgeon threw his own immense authority into the conflict. In August 1887, he published a fiery editorial titled "Another Word on the Downgrade," explicitly outlining the dire nature of the crisis.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            He meticulously argued that many within the denomination were compromising on four primary, non-negotiable doctrines. First, the absolute infallibility and verbal inspiration of Scripture were being questioned. Second, the necessity and substitutionary nature of Christ's atoning sacrifice were being replaced by moral influence theories. Third, the existence and eternality of hell were being denied. Fourth, there was a growing and dangerous acceptance of universalism.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Difference of Religion, Not Merely Opinion</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            To Spurgeon, these were not secondary matters of church polity or minor theological squabbles; they were first-order doctrines that directly affected the integrity of the gospel itself. He keenly observed that this doctrinal decline mirrored previous historical drifts in Congregationalist and Presbyterian circles, where vague denominational associations and a lack of confessional clarity had enabled heresy to spread unchecked. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Believing that the "new theology" was essentially a completely different religion from biblical Christianity, Spurgeon drew a hard line in the sand. He boldly declared that maintaining ecclesiastical fellowship with those who denied the atonement and the inspiration of Scripture was nothing short of an act of treason to the Lord Jesus Christ. This uncompromising stance set the stage for a devastating clash with the leadership of the Baptist Union.
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
                <li style={{ marginBottom: '0.5rem' }}>Hopkins, Mark. "The Down-Grade Controversy." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed July 14, 2026. <a href="https://christianhistoryinstitute.org/magazine/article/down-grade-controversy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>DiPrima, Alex. "What Was the Downgrade Controversy Actually All About?" <em>The Spurgeon Library</em>, January 17, 2022. Accessed July 14, 2026. <a href="https://www.spurgeon.org/resource-library/blog-entries/what-was-the-downgrade-controversy-actually-all-about/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Reformed Reader. "The Down Grade Controversy." Accessed July 14, 2026. <a href="https://www.reformedreader.org/spurgeon/dgcindex.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Grokipedia. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://grokipedia.com/page/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Chang, Geoff. "Spurgeon's Associationalism after the Downgrade Controversy." <em>The Spurgeon Library</em>, October 25, 2022. Accessed July 14, 2026. <a href="https://www.spurgeon.org/articles/spurgeons-associationalism-after-the-downgrade-controversy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>GotQuestions.org. "What was the Downgrade Controversy?" Accessed July 14, 2026. <a href="https://www.gotquestions.org/Downgrade-Controversy.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Downgrade Controversy", "Sword and the Trowel", "Robert Shindler", "Baptist Union", "Liberalism", "Modernism", "Inerrancy"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/controversies/the-rivulet-controversy" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Rivulet Controversy</span>
            </Link>
            <Link href="/en/about/controversies/the-downgrade-controversy-part-2" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Downgrade Controversy (Part 2)</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
