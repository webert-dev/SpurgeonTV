import Link from 'next/link';

export const metadata = {
  title: "The Kelvedon Years: Childhood in a Pastoral Home | Charles Spurgeon",
  description: "Learn about Charles Spurgeon's early years in Kelvedon and Stambourne, his rich Puritan heritage, and his early exposure to classical reformed theology.",
  keywords: ["Charles Spurgeon", "Kelvedon", "Stambourne", "Puritan influence", "John Bunyan", "early ministry", "biography"],
};

export default function TheKelvedonYearsPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            June 29, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Kelvedon Years: Childhood in a Pastoral Home and Early Puritan Influence
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Roots of a Heritage of Faith</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Charles Haddon Spurgeon was born on June 19, 1834, in the small village of Kelvedon, located in the county of Essex, England. He was the firstborn of a large family of sixteen or seventeen children born to John Spurgeon and Eliza Jarvis, though tragically, nine of his siblings died during infancy. The Spurgeon household was deeply defined by a robust Protestant and Nonconformist heritage. The family lineage carried in its blood the heavy cost of religious resistance: their ancestors had fled the Netherlands to England around 1570 to escape the severe persecutions perpetrated by King Philip II against Protestants, eventually finding refuge in the region of East Anglia. Later, during the seventeenth century, the family endured harsh persecution incited by King Charles II against the "Dissenters" of the Anglican Church, who chose the cost of exile and marginalization over accepting the Act of Uniformity of 1662.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Move to Stambourne</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            A profound vocational calling to the preaching ministry was an integral part of the family's identity. Both Charles's father, John, and his paternal grandfather, James Spurgeon, served actively as independent or congregational ministers, pastoring local flocks that remained on the margins of the state's official confession. Charles was baptized on August 3, 1834, by his grandfather James, receiving the name "Charles" from his mother's uncle and "Haddon" from an old family friend who had assisted them in times of need. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            In August 1835, when the Spurgeon family relocated to the town of Colchester, young Charles—then just fourteen months old—was entrusted to the affectionate care of his grandfather. He lived with his grandfather in the quiet rural village of Stambourne until he was five or six years old. There, under the wings of a pastor, the boy was raised in an ecclesiastical environment perfectly suited for the development of deep Christian devotion. During this time, he also received significant spiritual influence from his aunt Ann, a woman of fervently evangelical faith who became a second mother to him.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Puritan Library and Early Readings</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            It was among the shelves of his grandfather James's parsonage that the brilliant mind of the young boy began to acquire the theological mold that would structure his colossal ministry. During these formative years under his grandparents' care, Spurgeon devoted himself precociously to reading, silently poring over the great classics of the Christian faith. Among the books that made the most profound formative impact on his early childhood was <em>The Pilgrim's Progress</em> by John Bunyan, a notable pastor who was imprisoned for his love of the Gospel. The impact of this majestic work on young Charles was so profound that he would read it more than a hundred times throughout his life.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The boy was also viscerally impacted by John Foxe's <em>Book of Martyrs</em>, a monumental chronicle detailing the terrible persecutions and agonizing sufferings of faithful Protestants condemned to the stake during the short reign of Mary Tudor (1553–1558). The courageous Puritans and those fearless martyrs of the faith instantly became his greatest heroes, and he rapidly internalized their values, defending them at all costs in his later years. In addition to these works that ignited his childhood imagination, the youth devoured the challenging volumes of his grandfather's abundant library, absorbing the dense teachings of undisputed giants of Puritan theology such as Richard Baxter and John Owen.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Early Zeal of a Future Preacher</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            This family environment, intensely focused on eternity and the Gospel, combined with his interactions with devout Puritans, shaped young Spurgeon’s character to such an extent that he frequently displayed perceptions and attitudes of unusual maturity and zeal for his age. An incident that beautifully illustrates the early passion of this boy-pastor occurred when young Charles courageously and unusually walked into a local tavern to personally reprimand a man whose worldly conduct was, in the boy's own words, "breaking the heart" of his beloved grandfather.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            At age six, Charles returned permanently to his parents' home, who were by then settled in Colchester. However, the solid foundation forged providentially during his time in Stambourne, firmly grounded in rich Puritan literature and classical Reformed theology, had already paved the glorious path of his life. When he was ten years old, a visiting missionary named Richard Knill was so struck by the boy that he declared before the family his conviction that Charles would one day preach the Gospel to great multitudes. This inexhaustible and robust spiritual heritage properly prepared the rich soil from which the "Prince of Preachers" would flourish, incomparably equipping him to eventually fight for the ancient truths of grace without ever yielding an inch to the spirit of his age.
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed June 28, 2025. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipedia, The Free Encyclopedia. "Charles Spurgeon." Accessed June 28, 2025. <a href="https://en.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed June 28, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed June 28, 2025. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Biblioteca Charles Spurgeon. "Quem foi Charles Spurgeon?" <em>SpurgeonLine</em>. Accessed June 28, 2025. <a href="https://spurgeonline.com.br/artigos/quem-foi-charles-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed June 28, 2025. <a href="https://christianhistoryinstitute.org/magazine/article/charles-spurgeon-englands-prince-of-preachers" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Childhood", "Puritanism", "Family Heritage", "John Bunyan", "Early Devotion", "Stambourne", "Kelvedon", "Richard Knill"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <div></div> {/* Empty div for flex spacing since there is no previous */}
            <Link href="/en/about/biography/the-stambourne-influence" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Stambourne Influence</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
