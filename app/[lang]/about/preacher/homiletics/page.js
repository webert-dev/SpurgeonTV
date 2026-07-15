import Link from 'next/link';

export const metadata = {
  title: "Homiletics | Charles Spurgeon",
  description: "Discover Charles Spurgeon's surprising and intense method of sermon preparation and his views on extemporaneous preaching.",
  keywords: ["Charles Spurgeon", "Homiletics", "Sermon Preparation", "Extemporaneous Preaching", "Lectures to My Students", "Holy Spirit", "preacher"],
};

export default function HomileticsPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/preacher" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to The Preacher & His Work
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            April 12, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Homiletics: The Surprising Method of Sermon Preparation
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Agony of Selecting a Text</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While many preachers of the Victorian era carefully mapped out their sermon series months in advance, Charles Haddon Spurgeon's method of homiletical preparation was startlingly reliant on the immediate, spontaneous guidance of the Holy Spirit. He frequently agonized over the selection of a text, often waiting until late Saturday evening for a specific passage of Scripture to grip his soul. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Far from being a sign of unreadiness, Spurgeon taught his pastoral students that this delay was a necessary spiritual exercise. "The difficulty of settling upon a topic, if it makes you pray more than usual, will be a very great blessing to you," he explained. He insisted that a minister must "Wait upon the Lord, hear what he would speak, receive the word direct from God’s mouth, and then go forth as an ambassador fresh from the court of heaven". For the "Prince of Preachers," praying deeply over the Scripture was the absolute best form of studying, acting as the "treading of grapes in the wine-vat" and the "melting of gold from the ore".
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Extemporaneous Delivery vs. Extemporaneous Thought</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon was famous for stepping into the expansive pulpit of the Metropolitan Tabernacle with nothing more than a brief outline jotted on a small piece of paper. He strongly warned his students against the practice of reading full manuscripts to a congregation, arguing that the words should be "extemporal," suggesting themselves naturally at the exact moment of delivery. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            However, he made a fierce and fundamental distinction between extemporaneous delivery and extemporaneous <em>thought</em>. To rely on spontaneous words without having first rigorously studied the subject was, in his view, an act of intellectual and spiritual laziness. "Extemporary speech without study is a cloud without rain, a well without water, a fatal gift, injurious equally to its possessor and his flock," he declared, scathingly describing unprepared preaching as mere "elongated nonsense" and "wire-drawn commonplace". The true homiletical secret was to intensively "store your mind with matter upon the subject of discourse" through deep research, mentally digesting the theological truths before ever ascending the pulpit stairs.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Prescribing Medicine for the Flock</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            In his sermon preparation, Spurgeon deliberately avoided abstract philosophical topics or "metaphysical subtleties," focusing instead on the immediate, practical necessities of his congregation. He instructed future ministers to affectionately consider the spiritual condition of their hearers and to "prescribe the medicine adapted to the current disease, or prepare the food suitable for the prevailing necessity". 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Furthermore, he stringently warned against tailoring the sermon to flatter the wealthy and influential members of the church. "Do not give too much weight to the gentleman and lady who sit in the green pew," he cautioned, reminding his students that a large financial contributor is not "everybody" and that a faithful preacher must look to the poor in the aisles with equal interest, selecting topics that will cheer them in their sorrows.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Furnace of Preparation</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon's Saturday night preparations were a furnace of intellectual and spiritual exertion. Though his final pulpit notes were brief, they were the culmination of a week of voracious reading and keen pastoral observation. He believed that sermons should be the preacher's "mental life-blood—the out-flow of our intellectual and spiritual vigor". They were to be crafted like "diamonds well cut and well set—precious, intrinsically, and bearing the marks of labor," warning his students, "God forbid that we should offer to the Lord that which costs us nothing". 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            By combining intense, concentrated theological study with an absolute, childlike reliance on the Holy Spirit for the exact words of delivery, Spurgeon's homiletical method produced thousands of discourses that possessed both profound theological depth and an electrifying, spontaneous urgency.
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed July 14, 2026. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>The Spurgeon Library. "Principles from Spurgeon's Sermon Preparation Process." <em>Midwestern Baptist Theological Seminary</em>. Accessed July 14, 2026. <a href="https://www.spurgeon.org/resource-library/articles/principles-from-spurgeons-sermon-preparation-process/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Drummond, Lewis A. "The secrets of Spurgeon's preaching." <em>Christian History Magazine</em>, Issue 29 (1991): 14-16.</li>
                <li style={{ marginBottom: '0.5rem' }}>Grokipedia. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://grokipedia.com/page/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Homiletics", "Sermon Preparation", "Extemporaneous Preaching", "Lectures to My Students", "Holy Spirit"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/preacher/the-colportage-association" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Colportage Association</span>
            </Link>
            <Link href="/en/about/preacher/the-printed-page" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Printed Page</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
