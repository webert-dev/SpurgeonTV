import Link from 'next/link';

export const metadata = {
  title: "The Boy Preacher of the Fens: Early Sermons in Teversham | Charles Spurgeon",
  description: "Discover how a sixteen-year-old Charles Spurgeon began his preaching ministry in the humble cottages of Teversham, earning the title of 'Boy Preacher'.",
  keywords: ["Charles Spurgeon", "Boy Preacher", "Teversham", "First Sermon", "Waterbeach", "Cambridge", "The Fens", "biography"],
};

export default function TheBoyPreacherOfTheFensPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            July 20, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Boy Preacher of the Fens: Early Sermons in the Cottages of Teversham
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>From the Waters of Baptism to the Streets of Cambridge</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Following his miraculous conversion in the snowstorm of January 1850, Charles Haddon Spurgeon wasted no time in demonstrating the visible fruits of his new birth. On May 3, 1850, he was publicly baptized in the River Lark by W. W. Cantlow, the pastor of the Baptist Church in Isleham, and was officially received into the fellowship of the Baptist congregation in Newmarket. This public profession of faith marked the definitive beginning of a life entirely consecrated to the proclamation of the Gospel.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            In August of that same year, the sixteen-year-old Spurgeon relocated to the university city of Cambridge. Despite his youth, he possessed a profound spiritual zeal and a brilliant intellect saturated with the dense Puritan theology he had eagerly absorbed in his grandfather's library during his childhood. Settling in Cambridge, the energetic teenager immediately threw himself into lay ministry. He walked the streets distributing evangelistic tracts and began teaching the Bible to children in the local Sunday school. His natural eloquence, earnestness, and deep grasp of scripture quickly distinguished him among the local believers.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The First Sermon at Teversham</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon's active involvement with the Sunday school work in Cambridge naturally opened doors for greater spiritual responsibilities. The local Sunday School Union frequently organized efforts to send lay workers into the surrounding rural areas—the marshy, agricultural flatlands of eastern England known as the Fens—to teach and exhort the villagers. It was during one of these rural excursions, still in the year 1850, that Spurgeon was called upon to preach his very first sermon in the small village of Teversham.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The setting for this monumental event in church history was not a grand, vaulted cathedral or an ornate metropolitan chapel, but a humble country cottage. Gathering with a small group of farmers, laborers, and their families in a simple living room, the teenage Spurgeon stood up to deliver the Word of God. From the very beginning of his ministry, his talent for biblical exposition was considered extraordinary. Drawing upon his robust knowledge of the Scriptures and his love for the doctrines of grace, he preached with a spiritual maturity and unction that utterly belied his sixteen years. The simplicity of the cottage setting provided the perfect crucible for him to develop his direct, compelling, and intensely pastoral style of communication.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Emergence of the "Boy Preacher"</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The spiritual impact of his preaching in Teversham and other nearby villages was immediate and profound. Word of a remarkable teenager who preached with the authority of an aged Puritan quickly spread throughout the region. The locals affectionately and marvelingly dubbed him the "Boy Preacher." His sermons were not dry theological lectures, but passionate, vivid, and life-giving appeals that resonated deeply with the rural working class.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            As his fame grew across the Fens, so did the demand for his preaching. By October 1851, his reputation as a potent and effective orator reached the Baptist Church of Waterbeach, a village located just north of Cambridge, leading to an official invitation to preach to their congregation. This opportunity would soon culminate in his first pastoral call, and he accepted the effective pastorate of the Waterbeach chapel in January 1852.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Interestingly, as his popularity and effectiveness as a preacher surged, Spurgeon briefly considered pursuing formal theological training at a seminary in 1852. However, he ultimately abandoned the idea, convinced that the providence of God was directing his path otherwise. He remained an autodidact, relying on his voracious reading—especially of the Puritans—and the continuous anointing of the Holy Spirit to guide and empower his ministry. The humble cottage in Teversham proved to be the only homiletics classroom he needed, serving as the glorious launching pad for a man who would soon be universally recognized as the "Prince of Preachers".
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
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Acessado em 19 de julho de 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Biblioteca Charles Spurgeon. "Quem foi Charles Spurgeon?" <em>SpurgeonLine</em>. Acessado em 19 de julho de 2025. <a href="https://spurgeonline.com.br/artigos/quem-foi-charles-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, nº 2 (2021): 9-25. [Arquivo PDF do CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Acessado em 19 de julho de 2025. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Acessado em 19 de julho de 2025. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Editora Mundo Cristão. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>, 5 de agosto de 2020. Acessado em 19 de julho de 2025. <a href="https://www.mundocristao.com.br/blog/quem-foi-charles-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Boy Preacher", "Teversham", "First Sermon", "Waterbeach", "Baptism", "Cambridge", "The Fens"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/biography/the-snowstorm-conversion" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Snowstorm Conversion</span>
            </Link>
            <Link href="/en/about/biography/the-waterbeach-ministry" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Waterbeach Ministry</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
