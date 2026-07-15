import Link from 'next/link';

export const metadata = {
  title: "Theater Preaching | Charles Spurgeon",
  description: "Learn about Charles Spurgeon's controversial decision to preach in secular halls and the tragic Surrey Gardens incident.",
  keywords: ["Charles Spurgeon", "Theater Preaching", "Secular Halls", "Surrey Gardens Tragedy", "Media Hostility", "Evangelism", "theology", "controversies"],
};

export default function TheaterPreachingPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/controversies" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Controversies
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            March 8, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Theater Preaching: Confronting the Religious Establishment in Secular Halls
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Problem of Unprecedented Growth</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            When the young Charles Haddon Spurgeon assumed the pastorate of the New Park Street Chapel in 1854, the congregation numbered only a few hundred people. However, his dynamic and fervent preaching quickly ignited a spiritual awakening, and within a year, the chapel's 1,200 seats were entirely insufficient to accommodate the massive crowds flocking to hear him. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Faced with this unprecedented growth, Spurgeon and his deacons made a highly controversial, pragmatic decision: while a new, larger tabernacle was being built, the congregation would gather in large secular auditoriums, beginning with Exeter Hall in 1855. This move was revolutionary for the time, as these venues were traditionally reserved for secular concerts, lectures, and worldly entertainment, not for the sacred worship of the Almighty.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Backlash from the Religious Establishment</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The decision to preach the Gospel in secular theaters and public halls immediately provoked the ire of the Victorian religious establishment. During the nineteenth century, rigid ecclesiastical decorum dictated that divine services should only occur within consecrated church buildings. Other ministers ridiculed Spurgeon, accusing him of merely seeking personal glory and turning the sacred act of preaching into a theatrical spectacle. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The secular press joined the assault, frequently caricaturing the young preacher as an uncultured clown and an egocentric showman. To the traditionalists, placing the pulpit on a stage meant for worldly amusements was a gross degradation of the ministerial office. Yet, Spurgeon remained entirely undeterred; he was not intimidated by the snobbery of the religious elite and firmly believed that the Gospel must be taken exactly to where the masses gathered.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Surrey Gardens Tragedy and Media Hostility</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            In 1856, the congregation moved their services to an even larger secular venue: the Royal Surrey Gardens Music Hall. On the evening of October 19, an estimated ten thousand people crammed into the hall to hear Spurgeon preach, while another ten thousand stood outside. During the service, a coordinated false alarm of "Fire!" was maliciously shouted, triggering a catastrophic stampede. In the ensuing panic, seven people were trampled to death, and twenty-eight were severely injured. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The tragedy plunged Spurgeon into a deep, agonizing depression, leaving him unable to preach for weeks. Compounding his personal trauma, the London newspapers were merciless in their coverage, cruelly blaming the twenty-two-year-old preacher for the disaster. The media used the tragedy to further argue that religious services had no place in music halls, framing the deadly event as the inevitable result of Spurgeon's "fanatical" and unorthodox methods.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Lasting Homiletical Precedent</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Despite the immense psychological toll and the relentless hostility from both the press and his fellow clergymen, Spurgeon refused to retreat into safe, traditional obscurity. He eventually returned to the pulpit, and the congregation continued to utilize public auditoriums until the monumental Metropolitan Tabernacle was completed and inaugurated in 1861. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            By steadfastly defending "theater preaching," Spurgeon effectively shattered the stifling architectural and traditional confines of Victorian religion. He demonstrated that the power of the Gospel was not restricted to consecrated altars or gothic cathedrals, establishing a powerful precedent for aggressive, mass evangelism that would later be adopted by figures like D.L. Moody and Billy Graham.
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
                <li style={{ marginBottom: '0.5rem' }}>Editora Mundo Cristão. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>, August 5, 2020. Accessed July 14, 2026. <a href="https://www.mundocristao.com.br/blog/quem-foi-charles-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed July 14, 2026. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed July 14, 2026. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Biblioteca Charles Spurgeon. "Quem foi Charles Spurgeon?" <em>SpurgeonLine</em>. Accessed July 14, 2026. <a href="https://spurgeonline.com.br/artigos/quem-foi-charles-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Truesdale, Al, ed. <em>Heróis da Igreja: Grandes nomes da história do cristianismo: A Era Moderna</em>, vol. 4. São Paulo: Mundo Cristão, 2020. Cited in "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>.</li>
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
              {["Theater Preaching", "Secular Halls", "Surrey Gardens Tragedy", "Media Hostility", "Evangelism"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/controversies/higher-criticism" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Higher Criticism</span>
            </Link>
            <Link href="/en/about/controversies/humor-in-the-pulpit" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Humor in the Pulpit</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
