import Link from 'next/link';

export const metadata = {
  title: "Fighting Arminianism | Charles Spurgeon",
  description: "Explore Charles Spurgeon's fierce critique of free-will theology and his unapologetic defense of sovereign grace.",
  keywords: ["Charles Spurgeon", "Arminianism", "Calvinism", "Free-Will", "Sovereign Grace", "Total Depravity", "theology", "controversies"],
};

export default function FightingArminianismPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/controversies" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Controversies
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            February 15, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Fighting Arminianism: The Fierce Critique of Free-Will Theology
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>An "Arminian" by Nature</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Charles Haddon Spurgeon was unflinchingly transparent about his own early theological misconceptions. He openly confessed to his congregation that, like all fallen humanity, he was "born an Arminian by nature". In his early years, he operated under the assumption that his salvation ultimately depended on the exercise of his own free will and human effort. However, a profound experiential awakening occurred when he began to reflect deeply on the mechanics of his own conversion.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            He asked himself how he came to pray and seek the Scriptures, realizing that he only did so because he was first drawn by God. In a sudden flash of spiritual insight, he perceived that the eternal God was at the very foundation of it all, acting as the true author of his faith. This realization led him to entirely abandon free-will theology and embrace the doctrines of sovereign grace, a theological framework from which he never departed for the rest of his life.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Core of the Theological Conflict</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Throughout his ministry at the Metropolitan Tabernacle, Spurgeon viewed Arminianism not merely as a slightly differing denominational perspective, but as a serious theological error that robbed God of His rightful glory. He argued that systems centered on human free will inherently diminish the absolute sovereignty of God in salvation. For Spurgeon, Calvinism simply meant "placing the eternal God at the foundation of all things," while Arminianism wrongly elevated human ability.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            He firmly maintained that the natural man is spiritually dead and completely unable to come to Christ without the supernatural, effectual drawing of the Holy Spirit. To command a spiritually dead sinner to rise up and walk without an absolute reliance on the regenerating power of the Holy Ghost was, in Spurgeon's view, as foolish as expecting a corpse to resurrect itself by its own free will.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Calvinism as the True Gospel</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            To the "Prince of Preachers," the doctrines of grace were not an abstract systematic theology invented by the French reformer John Calvin. Instead, he believed they flowed directly from the great Founder of all truth, having been preached by Augustine and originally received by the apostle Paul through the inspiration of the Holy Spirit. Spurgeon essentially equated the historic Reformed faith with the gospel itself, boldly declaring to his generation, <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"The gospel of John Knox is my gospel"</em>. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            He insisted that preaching the true gospel required proclaiming that man is entirely ruined by the fall and that salvation is completely the result of God's unconditional grace. Any theological system that compromised these truths by elevating human free will was, in his view, preaching a diluted and man-centered message.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Navigating the Middle Path</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon found himself in a unique and challenging pastoral position, having to fight a theological war on two distinct fronts. On his right, he battled the hyper-Calvinists, who frequently accused him of harboring Arminian tendencies simply because he indiscriminately offered the gospel to all sinners and passionately pleaded with them to repent. Because he succeeded pastoral giants like Dr. John Gill, who held rigid hyper-Calvinistic views, Spurgeon had to constantly defend his fervent evangelism against those who believed calling the non-elect to faith was unscriptural. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            On his left, however, he fiercely opposed actual Arminianism, warning his pastoral students that it was a deeply dangerous theological extreme. When instructing the future ministers at the Pastors' College, he emphasized the need to preach the connection between faith and practice, warning them against the dual threats of the age: "I was afraid the people might veer towards Antinomianism, an extreme as dangerous as Arminianism, if not more so". By holding tightly to both divine sovereignty and the urgent necessity of the new birth, Spurgeon successfully modeled a robust, biblical orthodoxy that refused to compromise the glory of God's grace to satisfy the pride of human free will.
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed July 14, 2026. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Lectures To My Students Vol. 1</em>. London: Passmore and Alabaster, 1875. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Maben, Alan. "Are You Sure You Like Spurgeon?" <em>Modern Reformation</em>, Vol. 1, No. 3 (1992). Accessed July 14, 2026. <a href="https://www.modernreformation.org/resources/articles/are-you-sure-you-like-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed July 14, 2026. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Chapel Library. "A Defense of Calvinism." <em>Mount Zion Bible Church</em>. Accessed July 14, 2026. <a href="https://www.chapellibrary.org/book/doc2/defense-of-calvinism-a-spurgeoncharlesh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Arminianism", "Calvinism", "Free-Will", "Sovereign Grace", "Total Depravity", "John Knox"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/controversies/fighting-hyper-calvinism" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Fighting Hyper-Calvinism</span>
            </Link>
            <Link href="/en/about/controversies/the-revivalism-debate" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Revivalism Debate</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
