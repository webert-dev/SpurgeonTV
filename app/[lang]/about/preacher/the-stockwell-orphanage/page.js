import Link from 'next/link';

export const metadata = {
  title: "The Stockwell Orphanage | Charles Spurgeon",
  description: "Learn how Charles Spurgeon founded the Stockwell Orphanage, demonstrating his deep commitment to practical Christianity and social action.",
  keywords: ["Charles Spurgeon", "Stockwell Orphanage", "Social Action", "George Müller", "Orphans", "Providence", "John Ploughman", "preacher"],
};

export default function TheStockwellOrphanagePage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/preacher" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to The Preacher & His Work
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            March 29, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Stockwell Orphanage: Practical Christianity and the Care of London's Fatherless
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Theological Basis for Social Action</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Charles Haddon Spurgeon is largely remembered by history as a giant of theological orthodoxy and a master of pulpit oratory, but his robust Calvinism was never detached from practical, earthly compassion. He firmly believed that the doctrines of grace must necessarily produce the tangible fruits of mercy, and that true, biblical religion required caring for the most vulnerable members of society. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            For Spurgeon, preaching the Gospel to save souls did not exempt the church from alleviating physical suffering; rather, it demanded it. This deep theological conviction led to the creation of one of the Metropolitan Tabernacle's most cherished and effective institutions: the Stockwell Orphanage.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Providential Answer to Prayer</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The origin of the orphanage stands as a remarkable historical testimony to Spurgeon's reliance on divine providence. During a church prayer meeting in August 1866, Spurgeon explicitly asked his congregation to pray that God would send them a new avenue of ministry to further the Kingdom of God. Unknown to him, a few days earlier, a wealthy woman had been consulting a friend about how to best entrust a massive sum of £20,000 to Christian charitable work. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            As providence would have it, the friend suggested she contact Spurgeon. The woman had recently read an article in Spurgeon's magazine, <em>The Sword and the Trowel</em>, regarding the vital need to educate and care for poor children. Deeply impacted by the text, she immediately wrote to the pastor expressing her desire to fund an orphanage. Her letter arrived just days after the congregation had earnestly prayed for a new ministry.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Hesitation and the George Müller Connection</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Despite the highly generous offer, Spurgeon was acutely aware of the monumental financial, emotional, and administrative burdens that operating an orphanage would require. Upon meeting the benefactress, he initially refused the money. Displaying remarkable humility and a lack of territorialism in ministry, Spurgeon earnestly suggested that she should give the £20,000 to George Müller, a man who was already famously operating a massive, faith-based social work for orphans in Bristol. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            However, the woman firmly insisted that she believed God intended for Spurgeon to undertake this specific project in London. Viewing her unwavering resolve as a direct, providential answer to the church's recent prayers, Spurgeon finally accepted the funds and the monumental task.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Building the Institution and Expanding the Vision</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            With the financial foundation secured, the construction of the boys' wing of the Stockwell Orphanage commenced in 1867. The institution was designed to provide not only shelter and food but also a robust Christian education and practical life skills to fatherless boys in the slums of London. Rather than building one massive, institutional block, the orphanage was uniquely modeled around a "family" system, where children lived in separate houses under the care of a matron, fostering a warmer, more domestic environment. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The work proved so successful and necessary that several years later, the ministry expanded to include girls. In 1876 (with the girls' wing officially opening around 1879), the Stockwell Orphanage opened its doors to female orphans, doubling its impact on the city's destitute youth.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Legacy of Care</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The Stockwell Orphanage became a cornerstone of the Metropolitan Tabernacle's vast institutional machinery. Spurgeon affectionately promoted the orphanage in his writings to ensure it remained debt-free and well-supplied. Using his highly popular literary alter-ego, "John Ploughman," he humorously suggested to his working-class readers that anyone wishing to leave a financial legacy would do well to leave it to the Pastor's College or the Stockwell Orphanage, assuring them that the funds would be put to excellent use. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Through this immense charitable enterprise, Spurgeon demonstrated to Victorian England that his profound commitment to the eternal salvation of souls was inextricably linked to the physical and social welfare of the poor and fatherless.
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
                <li style={{ marginBottom: '0.5rem' }}><em>UK Wells</em>. "Stockwell Orphanage - Spurgeon." Accessed July 14, 2026. <a href="https://ukwells.org/explore/wells/stockwell-orphanage-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. [PDF Document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}><em>Projeto Spurgeon</em>. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed July 14, 2026. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>John Ploughman's Talk (Selected chapters)</em>. Pensacola, FL: Chapel Library, Mount Zion Bible Church, 1998.</li>
                <li style={{ marginBottom: '0.5rem' }}><em>Wikipédia, a enciclopédia livre</em>. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}><em>Editora Mundo Cristão</em>. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>, August 5, 2020. Accessed July 14, 2026. <a href="https://www.mundocristao.com.br/blog/quem-foi-charles-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Stockwell Orphanage", "Social Action", "George Müller", "Orphans", "Providence", "John Ploughman"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/preacher/the-pastors-college" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Pastors' College</span>
            </Link>
            <Link href="/en/about/preacher/the-colportage-association" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Colportage Association</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
