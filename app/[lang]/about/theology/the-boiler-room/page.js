import Link from 'next/link';

export const metadata = {
  title: "The Boiler Room | Charles Spurgeon",
  description: "Explore the theology and practice of prayer at the Metropolitan Tabernacle, the spiritual engine of Charles Spurgeon's legendary ministry.",
  keywords: ["Charles Spurgeon", "Prayer", "Boiler Room", "Intercession", "Public Devotion", "Revival", "Metropolitan Tabernacle", "theology"],
};

export default function TheBoilerRoomPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/theology" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Theology
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            November 16, 2025 • 4 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Boiler Room: The Theology and Practice of Prayer at the Tabernacle
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Engine of the Metropolitan Awakening</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While Charles Haddon Spurgeon's legendary success is often attributed to his unparalleled oratory skills and robust Calvinistic theology, Spurgeon himself located the true engine of his ministry elsewhere: in the collective, fervent prayers of his congregation. Often affectionately referred to as the "boiler room" of the church, the prayer meetings were the spiritual powerhouse that fueled the unprecedented awakening in Victorian London.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            When Spurgeon first arrived at the historic New Park Street Chapel in 1854, the massive building was largely empty and the congregation disheartened. The young pastor recognized that the catalyst for the subsequent explosion in church growth was not merely his preaching, but the people's pleading. Reflecting on those early days of his ministry, Spurgeon recalled: <em style={{ fontStyle: 'italic' }}>"At first, I preached only to a handful of hearers. However, I do not forget the insistence of their prayers. Sometimes, it seemed that they pleaded until they saw the presence of Jesus there to bless them. Thus the blessing descended, the house began to fill with hearers, and dozens of souls were saved"</em>.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Dignity and Weight of Public Devotion</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Theologically, Spurgeon held a remarkably high view of congregational prayer, vehemently rejecting the idea that public devotion was merely a warm-up for the preaching of the Word. In his <em>Lectures to My Students</em>, he expressed his frustration with churches that treated prayer and singing as "preliminary services," as if they were but a preface to the sermon.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            He instructed his pastoral students to elevate the practice of prayer, declaring: <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"It is my solemn conviction that the prayer is one of the most weighty, useful, and honorable parts of the service, and that it ought to be even more considered than the sermon"</em>. Because he viewed public prayer as a direct approach to the Divine Majesty, he despised the practice of choosing unprepared men to lead the congregation in supplication simply to flatter them or give them something to do. He insisted that the Infinite Jehovah must be served with the church's best, requiring the ablest and most spiritually prepared men to lead the congregation to the throne of grace.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Monday Night Gatherings and Pastoral Vigilance</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The weekly prayer meetings at the Tabernacle, particularly those held on Monday nights, became legendary events that were marked by intense spiritual life and vitality. Thousands of believers gathered in the lower levels of the church to intercede for the ministry, the salvation of souls, and the city of London.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            These gatherings were not only times of intercession but also of practical pastoral vigilance. The elders of the church utilized the Monday night prayer meetings to actively "watch for souls". Spurgeon recounted instances where his elders would scan the room during the prayer meeting, identify individuals who appeared deeply moved or sorrowful under the conviction of the Word, and deliberately position themselves to speak with those seeking souls about the Savior immediately after the service. The "boiler room" was thus both a place of petition and a functional net for evangelism.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Sincerity, Preparation, and the Celestial Power</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon’s theology of prayer demanded utter authenticity. He sternly warned his students against using "cant phrases," meaningless repetitions, or resorting to the scholastic habit of simply rehearsing their sermon outline within their public prayers. Furthermore, he abhorred any attempt to manufacture spurious emotional fervor, insisting that "simulated ardor is a shameful form of lying".
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            While he strictly opposed writing out prayers to be read verbatim—believing it stifled the spontaneous leading of the Holy Spirit—he strongly advocated for the "preparation of the heart." This consisted of solemn meditation beforehand upon the needs of the congregation and a deliberate remembrance of the biblical promises that were to be pleaded before God. To Spurgeon, a church fully alive for Jesus and energetic for the salvation of men could only be sustained by one mechanism: "continual prayer to bring down the power from on high". This unwavering reliance on divine intervention made the "boiler room" the most indispensable and glorious component of the Metropolitan Tabernacle's vast institutional machinery.
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
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>C. H. Spurgeon's Autobiography</em>, Vol. 2. London: Passmore and Alabaster, 1899. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Chang, Geoff. "Tickets and Teaching: How Spurgeon Fenced the Table." <em>9Marks</em>, October 21, 2025. Accessed November 15, 2025. <a href="https://www.9marks.org/article/tickets-and-teaching-how-spurgeon-fenced-the-table/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed November 15, 2025. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. [PDF Document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Biblioteca Charles Spurgeon. "Quem foi Charles Spurgeon?" <em>SpurgeonLine</em>. Accessed November 15, 2025. <a href="https://spurgeonline.com.br/artigos/quem-foi-charles-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Prayer", "Boiler Room", "Intercession", "Public Devotion", "Revival", "Metropolitan Tabernacle"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/theology/spurgeons-ecclesiology" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Spurgeon's Ecclesiology</span>
            </Link>
            <Link href="/en/about/theology/covenant-theology" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Covenant Theology</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
