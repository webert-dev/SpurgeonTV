import Link from 'next/link';

export const metadata = {
  title: "The Final Years & Ministry Close | Charles Spurgeon",
  description: "Explore Charles Spurgeon's final years, from the Downgrade Controversy to his last sermon, his final retreat to Mentone, and the close of his historic ministry.",
  keywords: ["Charles Spurgeon", "The Final Years", "Downgrade Controversy", "Menton", "Arthur T. Pierson", "Death", "Legacy", "biography"],
};

export default function TheFinalYearsPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            September 14, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Final Years: Suffering, Perseverance, and the Close of a Historic Ministry
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Crucible of Controversy and Disease</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            By the late 1880s, the immense and relentless burdens of pastoring a flock of thousands, overseeing dozens of charitable institutions, and writing voluminously began to definitively break Charles Haddon Spurgeon's fragile constitution. Accompanying his lifelong battles with severe gout and debilitating depression was the heavy emotional and physical toll of the "Downgrade Controversy" (1887–1888). Standing against the rising tide of theological liberalism—which denied the inerrancy of Scripture and the substitutionary atonement of Christ—Spurgeon sounded the alarm that the church was going "downhill at breakneck speed". This fierce theological battle led to his painful withdrawal from the Baptist Union, an agonizing separation that cost him dear friends, isolated him from his peers, and profoundly accelerated his physical decline.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Last Sermon at the Tabernacle</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Despite his rapidly failing health, now complicated by the severe onset of Bright's disease (a chronic and fatal degenerative kidney condition), Spurgeon persevered in the pulpit as long as his mortal frame allowed. On June 7, 1891, a visibly weakened Spurgeon delivered his final sermon at the Metropolitan Tabernacle. Unbeknownst to the thousands in attendance, it would be the last time the "Prince of Preachers" would ever address his beloved London congregation. Concluding his final message, he pointed his hearers to the unparalleled love of Christ, declaring that in his forty years of service, he had received nothing but love from his Master, and urged his audience to enlist under the banner of Jesus. To supply the vacant pulpit during his absence, Spurgeon invited the American Presbyterian minister Arthur T. Pierson to temporarily assume preaching duties while he sought medical exile.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Final Retreat to Mentone</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Seeking relief from the harsh, damp English winter and his agonizing ailments, Spurgeon traveled to his favorite sanctuary in Menton (Mentone), on the French Riviera, in late 1891. For a brief period, the mild Mediterranean air seemed to revive him, offering a glimmer of false hope to his anxious congregation and his devoted wife, Susannah, who herself had lived for years as a virtual invalid. Even in his weakness, his pastoral heart never ceased to beat for his flock; he continued to write, correct his printed sermons, and direct the affairs of his various ministries from his sickbed, resting entirely on the sovereign grace he had preached his entire life.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Master's Call</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The restorative effects of the coastal climate were unfortunately short-lived. His kidney disease progressed aggressively, and his physical suffering intensified in his final days. Remaining steadfast in his faith, Charles Spurgeon passed from this life to eternal glory on January 31, 1892, at the age of fifty-seven. His death marked the close of the Victorian era's most monumental evangelical ministry. His body was transported from France back to England, where a massive funeral procession paralyzed London, leading to his burial at the West Norwood Cemetery. He left behind a staggering legacy of over 3,500 published sermons, numerous literary masterpieces, and an indelible mark on global church history that continues to resound to this day.
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
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed September 13, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipedia, The Free Encyclopedia. "Charles Spurgeon." Accessed September 13, 2025. <a href="https://en.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Hopkins, Mark. "The Down-Grade Controversy." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed September 13, 2025. <a href="https://christianhistoryinstitute.org/magazine/article/down-grade-controversy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Reformed Reader. "The Down Grade Controversy." Accessed September 13, 2025. <a href="https://www.reformedreader.org/spurgeon/dgcindex.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed September 13, 2025. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Grokipedia. "Charles Spurgeon." Accessed September 13, 2025. <a href="https://grokipedia.com/page/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["The Final Years", "Downgrade Controversy", "Menton", "Arthur T. Pierson", "Death", "Legacy"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/biography/physical-afflictions" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Physical Afflictions</span>
            </Link>
            <Link href="/en/about/biography/the-prince-goes-to-glory" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Prince Goes to Glory</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
