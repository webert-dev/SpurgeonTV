import Link from 'next/link';

export const metadata = {
  title: "Spurgeon's Ecclesiology | Charles Spurgeon",
  description: "Discover Charles Spurgeon's robust, biblical view of the local church, public worship, governance, and the ordinances.",
  keywords: ["Charles Spurgeon", "Ecclesiology", "Local Church", "Lord's Supper", "Elders", "Deacons", "Baptism", "Worship", "theology"],
};

export default function SpurgeonsEcclesiologyPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/theology" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Theology
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            November 09, 2025 • 4 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Spurgeon's Ecclesiology: His View on the Local Church and Public Worship
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Purity of the Local Church and the Communion Table</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While Charles Haddon Spurgeon is primarily remembered as a towering evangelist and theologian, he was fundamentally a devoted pastor who maintained a robust, biblical view of the local church. He firmly believed that the visible church should be a gathered community of genuinely regenerate believers. To maintain the purity of his flock, Spurgeon governed the congregation with a firm pastoral hand, making it a practice to personally interview prospective members to ensure the authenticity of their conversion before officially admitting them into the fellowship.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            This commitment to regenerate church membership naturally extended to the administration of the ordinances. Spurgeon meticulously "fenced the table" to protect the sanctity of the Lord's Supper from being partaken by the unredeemed. To manage the massive crowds at the Metropolitan Tabernacle and maintain spiritual order, the church utilized a strict "ticket" system; only church members and carefully examined visitors who professed genuine faith were issued tickets allowing them to participate in communion. Despite this strict discipline regarding local church membership, his theology of the Lord's Supper was characterized by a warm "open communion," extending a free and earnest invitation to every true lover of Jesus to come to the table, regardless of their specific denominational affiliation.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Biblical Governance: Elders and Deacons</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            When the young Spurgeon first arrived at the historic New Park Street Chapel, he found that the church was governed solely by a board of deacons, with no recognized elders. However, as he immersed himself in the study of the New Testament, he became convinced that the apostolic blueprint for church governance required both orders of officers. He concluded that it was a grave error for a church to expect the preaching pastor to perform all the duties of the eldership alone.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Displaying remarkable pastoral wisdom, he did not force this transition but gently taught his congregation the scriptural warrant for the eldership. By 1859, the church officially appointed lay elders to watch over the spiritual affairs of the congregation, conduct Bible classes, and seek out souls under the preaching of the Word, while the deacons were freed to focus entirely on the secular matters and the financial administration of the church. This biblical division of labor proved invaluable to Spurgeon, supplying an outlet for two different sorts of administrative talent and providing an indispensable support system for his massive metropolitan ministry.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Theology of Believer's Baptism</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            In his ecclesiology, Spurgeon was an unyielding Baptist who fiercely defended believer's baptism by immersion. He taught that baptism was strictly a secondary, outward act of obedience—a public testimony to a spiritual work of grace that had already been completed inwardly through faith. Because he viewed the church as an assembly of the saved, he utterly abhorred the Anglican doctrine of baptismal regeneration, which taught that infants were regenerated by the mere ceremony of water sprinkling. For Spurgeon, believing faith was the primary and absolute requisite for salvation, and linking regeneration to a physical church ritual was a dangerous subversion of the gospel of grace.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>United Adoration: Simplicity in Public Worship</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon’s views on public worship were deeply anchored in his Puritan heritage, characterized by profound reverence, doctrinal depth, and a strict rejection of superficial entertainment. He firmly believed that the church did not need worldly theatricality to draw crowds or transform hearts; the unadorned proclamation of the biblical text, empowered by the Holy Spirit, was entirely sufficient.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Consequently, the worship services at the Metropolitan Tabernacle were incredibly simple, centered almost exclusively on the reading of Scripture, fervent pastoral prayer, and robust congregational singing. Notably, this singing was conducted strictly <em>a cappella</em>. Spurgeon adamantly refused to permit the installation of a mechanical organ or the use of any musical instruments in the church. He believed that the pure, united adoration of human voices, singing theology directly from the heart, was the most scripturally mandated and spiritually edifying form of praising God.
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
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>C. H. Spurgeon's Autobiography</em>, Vol. 2. London: Passmore and Alabaster, 1899. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Chang, Geoff. "Tickets and Teaching: How Spurgeon Fenced the Table." <em>9Marks</em>, October 21, 2025. Accessed November 08, 2025. <a href="https://www.9marks.org/article/tickets-and-teaching-how-spurgeon-fenced-the-table/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. [PDF Document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Armitage, Thomas. "Spurgeon's Church and Strict Communion." <em>Baptist History Homepage</em>. Accessed November 08, 2025. <a href="https://baptisthistoryhomepage.com/spurgeon.index.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Baptismal Regeneration</em>. Pensacola, FL: Chapel Library, 1998.</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed November 08, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Ecclesiology", "Local Church", "Lord's Supper", "Elders", "Deacons", "Baptism", "Worship"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/theology/the-holy-spirit-in-preaching" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Holy Spirit in Preaching</span>
            </Link>
            <Link href="/en/about/theology/the-boiler-room" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Boiler Room</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
