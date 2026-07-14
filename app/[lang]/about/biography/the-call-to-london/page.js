import Link from 'next/link';

export const metadata = {
  title: "The Call to London: New Park Street Chapel | Charles Spurgeon",
  description: "Explore Charles Spurgeon's bold transition to the historic New Park Street Chapel in London, sparking a massive revival and overcoming fierce media backlash.",
  keywords: ["Charles Spurgeon", "London", "New Park Street Chapel", "Revival", "Media Backlash", "Exeter Hall", "Southwark", "John Gill", "biography"],
};

export default function TheCallToLondonPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            August 03, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Call to London: The Bold Transition to the Historic New Park Street Chapel
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Shadows of a Glorious Past</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            When Charles Haddon Spurgeon received the invitation to preach in London in late 1853, the prospect of navigating the bustling, noisy metropolis was deeply intimidating for a young man raised in the quiet English countryside. The destination was the New Park Street Chapel, located in the Southwark district south of the River Thames. By the mid-nineteenth century, this area had become a dim, dirty, and destitute industrial zone, frequently flooded by the river and surrounded by the fumes of enormous breweries, vinegar factories, and boiler works.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Despite its dismal physical surroundings, the church possessed a towering theological heritage. Throughout its history, it had been a bastion of the Particular Baptist tradition, pastored by undisputed giants of the faith such as Benjamin Keach and the eminent theologian John Gill. Yet, this glorious past seemed to be entirely behind them. Without an effective pastor since 1853, the congregation had suffered a severe decline; the vast chapel, which was built to comfortably seat 1,200 people, now hosted a disheartened and sparse audience of merely 232 attendees.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Arrival of the Country Preacher</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon was only nineteen years old and lacked formal theological education when he stepped into the towering pulpit of his venerable predecessors in December 1853. Despite his youth and rustic manners, his plain-spoken, earnest, and deeply biblical preaching immediately electrified the small flock. Recognizing the undeniable unction of the Holy Spirit upon him, the church members soon asked him to serve a probationary period.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The young preacher's impact was so profound that the trial period was cut short. In April 1854, just a few months after his initial arrival, Spurgeon was officially elected and confirmed as the permanent pastor of the historic church. Reflecting on those early days, Spurgeon later recalled: <blockquote style={{ borderLeft: '4px solid var(--accent)', margin: '1.5rem 0', padding: '1rem 1.5rem', background: 'var(--surface)', fontStyle: 'italic', color: 'var(--text-secondary)' }}>"At first, I preached only to a handful of hearers. However, I do not forget the insistence of their prayers. Sometimes, it seemed that they pleaded until they saw the presence of Jesus there to bless them. Thus the blessing descended, the house began to fill with hearers, and dozens of souls were saved".</blockquote>
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Media Backlash and Explosive Growth</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The revitalization of the church was unprecedented. Spurgeon’s direct appeals, which shattered the dry, hyper-Calvinistic lethargy of the era while maintaining robust Reformed theology, caused an immediate sensation in London. However, this rapid rise to fame brought ferocious opposition. The secular media and jealous clerics launched severe attacks against him, mocking his lack of refinement and dramatic delivery. Critics labeled him a "clerical poltroon," the "Exeter Hall demagogue," and a "pulpit buffoon," maliciously comparing him to cheap circus entertainers, tightrope walkers, and clowns.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Unfazed by the hostile caricatures and the fierce criticism, Spurgeon remained singularly focused on proclaiming the substitutionary atonement and the necessity of the new birth. Within a year, the 1,200-seat New Park Street Chapel was bursting at the seams, with crowds spilling into the streets and blocking traffic. By 1855, the physical limitations of the building forced the congregation to seek secular venues, leading them to temporarily relocate to the 5,000-seat Exeter Hall while their chapel was being enlarged. This bold transition to London not only saved a dying historic church but also established Spurgeon as the spiritual voice of Victorian England, proving that the unvarnished Gospel could conquer the heart of the modern industrial metropolis.
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
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed August 02, 2025. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipedia, The Free Encyclopedia. "Charles Spurgeon." Accessed August 02, 2025. <a href="https://en.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Smith, Jared. "Introduction - The Baptist Particular." <em>The Association of Historic Baptists</em>, September 10, 2013. Accessed August 02, 2025. <a href="https://www.baptists.net/history/2013/09/introduction-3/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed August 02, 2025. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Theopedia. "Charles Haddon Spurgeon." Accessed August 02, 2025. <a href="https://theopedia.com/charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Grokipedia. "Charles Spurgeon." Accessed August 02, 2025. <a href="https://grokipedia.com/page/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["London", "New Park Street Chapel", "Revival", "Media Backlash", "Exeter Hall", "Southwark", "John Gill"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/biography/the-waterbeach-ministry" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Waterbeach Ministry</span>
            </Link>
            <Link href="/en/about/biography/susannah-thompson" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Susannah Thompson</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
