import Link from 'next/link';

export const metadata = {
  title: "The Surrey Gardens Tragedy & Panic | Charles Spurgeon",
  description: "Read about the horrific Surrey Gardens Tragedy of 1856, where a false fire alarm caused a deadly stampede and plunged Charles Spurgeon into profound depression.",
  keywords: ["Charles Spurgeon", "Surrey Gardens", "Music Hall", "False Alarm", "Stampede", "Tragedy", "Media Backlash", "Depression", "biography"],
};

export default function TheSurreyGardensTragedyPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            August 17, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Surrey Gardens Tragedy: The False Fire Alarm, Panic, and the Preacher's Profound Depression
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Move to a Massive Secular Venue</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            By the autumn of 1856, it had become abundantly clear that the phenomenal growth of Charles Haddon Spurgeon's congregation could no longer be contained within traditional church walls. The newly renovated New Park Street Chapel was entirely inadequate, and even the large Exeter Hall could not house the vast multitudes flocking to hear the young preacher. Consequently, the congregation made the bold and unprecedented decision to rent the Music Hall at the Royal Surrey Gardens. This immense secular venue, primarily used for worldly entertainment, was capable of seating up to ten thousand people, making it the largest auditorium in London available for public gatherings. Spurgeon, who had just recently married Susannah Thompson and was already facing intense public scrutiny, was only twenty-two years old when he stepped onto this monumental stage.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Night of Horror and the False Alarm</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The highly anticipated first Sunday evening service at the Surrey Gardens Music Hall was scheduled for October 19, 1856. The public interest was staggering. That night, an estimated ten thousand people packed tightly into the galleries and the main floor of the building, while another ten thousand people gathered outside, desperately trying to get in. The atmosphere was highly charged, but the solemnity of the worship service was violently interrupted. During the service, a malicious and coordinated prank was executed when unknown individuals suddenly shouted "Fire!" in different parts of the auditorium.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Panic, Stampede, and Fatalities</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The false alarm instantly triggered a frantic and terrifying reaction among the dense crowd. Complete chaos ensued as thousands of terrified attendees scrambled for the narrow exits, fearing they would be burned alive. In the overwhelming panic of the stampede, the congregation pushed and trampled over one another. The result was a horrific catastrophe: seven people were tragically crushed to death, and twenty-eight others sustained severe, life-threatening injuries. The scene of worship was instantly transformed into a macabre nightmare of broken bodies, agonizing cries, and unimaginable grief.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Merciless Backlash of the Press</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The secular media in London, which had already been highly critical of Spurgeon's unconventional style and immense popularity, was absolutely ruthless in the aftermath of the tragedy. The newspapers placed the blame for the disaster squarely at the feet of the young preacher. They relentlessly attacked his character, labeling him a demagogue and suggesting that his sensationalist, theatrical preaching had inevitably invited such a calamity. Instead of offering sympathy to a young pastor who had just witnessed a bloodbath in his congregation, the press capitalized on the tragedy to mercilessly mock and vilify the twenty-two-year-old minister.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Crucible of Profound Depression</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The sheer horror of the event, compounded by the vicious public backlash and his own profound sense of pastoral responsibility, deeply traumatized Spurgeon. The incident nearly brought a premature end to his burgeoning ministry. His mind was so overwhelmed by the shock and grief that he plunged into a profound, paralyzing depression. Completely incapacitated and emotionally shattered, he was unable to preach or function normally for several weeks. This agonizing experience introduced him to a "dark night of the soul" and marked the beginning of a lifelong battle with chronic depression and sorrow.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Yet, despite this crushing emotional collapse, the tragedy did not destroy him. Sustained by the prayers of his congregation and the sovereign grace of God he so fervently preached, Spurgeon eventually found the strength to return to the pulpit. When he did, his ministry was forever changed. The tragedy of the Surrey Gardens Music Hall stripped away any remaining youthful naïveté, leaving behind a preacher intimately acquainted with human suffering, grief, and the absolute necessity of eternal salvation.
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
                <li style={{ marginBottom: '0.5rem' }}>Truesdale, Al, ed. <em>Heróis da Igreja: Grandes nomes da história do cristianismo: A Era Moderna</em>. Vol. 4. São Paulo: Mundo Cristão, 2020.</li>
                <li style={{ marginBottom: '0.5rem' }}>Redação Mundo Cristão. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>, 5 de agosto de 2020. Acessado em 16 de agosto de 2025. <a href="https://www.mundocristao.com.br/blog/quem-foi-charles-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. [Arquivo PDF do CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Acessado em 16 de agosto de 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Hendry, Micah. "Christians You Should Know: Susannah Spurgeon." <em>Enjoying the Journey</em>, 10 de julho de 2026. Acessado em 16 de agosto de 2025. <a href="https://enjoyingthejourney.org/christians-you-should-know-susannah-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Acessado em 16 de agosto de 2025. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Surrey Gardens", "Music Hall", "False Alarm", "Stampede", "Tragedy", "Media Backlash", "Depression", "Dark Night of the Soul"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/biography/susannah-thompson" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Susannah Thompson</span>
            </Link>
            <Link href="/en/about/biography/the-metropolitan-tabernacle" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Metropolitan Tabernacle</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
