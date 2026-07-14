import Link from 'next/link';

export const metadata = {
  title: "The Waterbeach Ministry: Reviving a Village | Charles Spurgeon",
  description: "Read about Charles Spurgeon's time as a teenage pastor in Waterbeach, where his fiery, doctrinally rich preaching brought a spiritual awakening to an entire village.",
  keywords: ["Charles Spurgeon", "Waterbeach", "Pastoral Ministry", "Spiritual Awakening", "Evangelism", "New Park Street Chapel", "Revival", "biography"],
};

export default function TheWaterbeachMinistryPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            July 27, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Waterbeach Ministry: How a Teenager Revived an Entire Village
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Teenage Pastor in Cambridgeshire</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Following his initial lay preaching experiences in the rural cottages around Cambridge, Charles Haddon Spurgeon's reputation as a gifted and uniquely anointed orator began to spread rapidly across the eastern English countryside. In October 1851, the seventeen-year-old "Boy Preacher" received a formal invitation to minister at the Baptist Church in the agricultural village of Waterbeach, located just north of Cambridge. After several months of supplying the pulpit and demonstrating an unusual spiritual maturity that belied his youth, the young man officially accepted the call to become the permanent pastor of the Waterbeach chapel in January 1852.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Spiritual Awakening of a Rural Village</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            When Spurgeon arrived at Waterbeach, the small congregation was struggling, and the village itself was typical of nineteenth-century rural England—often plagued by spiritual apathy, drunkenness, and moral laxity. However, the young pastor brought with him a profound theological depth rooted in his Puritan upbringing, combined with a fiery, evangelistic zeal. For two years, Spurgeon labored intensely in this small congregation, stepping into the full weight of pastoral responsibility. Interestingly, he did not rely on formal seminary training, which he had briefly considered pursuing in 1852, but ultimately declined, believing instead that divine providence was guiding his path directly into practical pastoral labor.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            His preaching was not characterized by dry, academic lectures, but by passionate, doctrinally rich sermons that heavily emphasized the necessity of the new birth and the substitutionary atonement of Christ. Under his fervent ministry, the congregation grew rapidly, overflowing the small chapel walls. The spiritual atmosphere of the entire village was transformed as nominal attendees and hardened sinners were converted by the dozen. Spurgeon’s vivid communication style, which utilized ordinary, everyday language and metaphors familiar to agricultural laborers—much like the style he would later immortalize in his widely successful book <em>John Ploughman's Talk</em>—resonated deeply with the working-class villagers. He spoke their language, yet elevated their minds to eternal theological truths.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Bridge to the Metropolis</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The remarkable revival at Waterbeach served as the crucial proving ground for Spurgeon's lifelong ministry. It was here that he honed his homiletical skills and solidified his conviction that the doctrines of grace (Calvinism) were compatible with aggressive, urgent evangelism. His fame as a potent and transformative preacher simply could not be contained within the marshy boundaries of the Fens.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            In November 1853, Spurgeon delivered an address at the Cambridge Sunday School Union. Among the listeners in the audience was George Gould, a deacon from Essex, who was profoundly struck by the young man's eloquence, biblical command, and spiritual unction. Recognizing a rare and monumental gift, Gould immediately informed his friend Thomas Olney, the chief deacon of the historic—but then declining—New Park Street Chapel in London, about the extraordinary teenage pastor from Waterbeach. This providential recommendation led to an invitation for Spurgeon to preach in London in December 1853, setting the stage for his dramatic and historic move to the metropolis in 1854 at the age of twenty. The Waterbeach years, though brief, were the indispensable crucible that forged the "Prince of Preachers."
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
                <li style={{ marginBottom: '0.5rem' }}>Wikipedia, The Free Encyclopedia. "Charles Spurgeon." <em>Wikipédia, a enciclopédia livre</em>. Accessed July 26, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Redação Mundo Cristão. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>, August 5, 2020. Accessed July 26, 2025. <a href="https://www.mundocristao.com.br/blog/quem-foi-charles-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Hendry, Micah. "Christians You Should Know: Susannah Spurgeon." <em>Enjoying the Journey</em>, July 10, 2026. Accessed July 26, 2025. <a href="https://enjoyingthejourney.org/christians-you-should-know-susannah-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Biblioteca Charles Spurgeon. "Quem foi Charles Spurgeon?" <em>SpurgeonLine</em>. Accessed July 26, 2025. <a href="https://spurgeonline.com.br/artigos/quem-foi-charles-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed July 26, 2025. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>John Ploughman's Talk (Selected chapters)</em>. Pensacola, FL: Chapel Library, 1998. Accessed July 26, 2025. <a href="https://www.chapellibrary.org/book/jpta/john-ploughmans-talk-selected-chapters-spurgeoncharlesh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Waterbeach", "Pastoral Ministry", "Spiritual Awakening", "Evangelism", "New Park Street Chapel", "Revival", "George Gould"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/biography/the-boy-preacher-of-the-fens" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Boy Preacher of the Fens</span>
            </Link>
            <Link href="/en/about/biography/the-call-to-london" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Call to London</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
