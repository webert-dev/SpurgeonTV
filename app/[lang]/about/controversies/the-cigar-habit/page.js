import Link from 'next/link';

export const metadata = {
  title: "The Cigar Habit | Charles Spurgeon",
  description: "Explore Charles Spurgeon's views on Christian liberty and his controversial habit of smoking cigars.",
  keywords: ["Charles Spurgeon", "Cigar Habit", "Moderation", "Temperance", "Christian Liberty", "Vice", "theology", "controversies"],
};

export default function TheCigarHabitPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/controversies" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Controversies
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            January 25, 2026 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Cigar Habit: Charles Spurgeon's "Vice" and the Theology of Moderation
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Search for Relief Amidst Agony</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While Charles Haddon Spurgeon is universally revered for his immense spiritual legacy, he was also a man of human frailties who sought comfort amidst intense physical and mental trials. Throughout his life, Spurgeon endured chronic and agonizing health struggles, which included debilitating bouts of gout, rheumatism, arthritis, and Bright's disease. These physical afflictions were severely compounded by recurring episodes of deep depression. To soothe his weary mind, alleviate his intense physical pain, and promote restful sleep, he turned to a practice that many in the Victorian evangelical world deemed a worldly vice: he occasionally smoked cigars. He viewed this habit not as a sinful indulgence, but rather as a moderate pleasure and a divine provision granted by God to help him bear the heavy burdens of his monumental ministry.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>"To the Glory of God"</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            During the nineteenth century, the temperance movement was gaining significant traction, and many prominent Christians began to strictly oppose the use of alcohol and tobacco. Spurgeon himself championed temperance regarding alcohol, shifting toward total abstinence by the 1880s and even publicly wearing the blue ribbon of the Temperance Movement in 1887 to model restraint against alcohol's societal harms. However, he drew a sharp theological distinction between alcohol abuse and his use of tobacco.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            When critics and fellow ministers accused him of harboring a sinful vice, Spurgeon fiercely and publicly defended his habit. He asserted that there was absolutely no biblical prohibition against smoking, and he famously declared to his detractors his intent to smoke <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"a good cigar to the glory of God"</em> before going to bed. For the "Prince of Preachers," Christian liberty allowed for such moderate earthly pleasures, provided they did not violate scriptural commands.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Moderation and the Final Cigar</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon was careful to emphasize moderation in all things. When pressed about his smoking habit, he would often defuse the tension with his characteristic wit, joking that he maintained strict self-control because he smoked only "one cigar at a time". Despite various public caricatures and rumors that depicted him smoking a traditional tobacco pipe, contemporary reminiscences confirm that he never used a pipe; his exclusive preference was always for cigars. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon openly maintained this habit throughout his adult life, never hiding it from his congregation or the public. He continued to enjoy his cigars until his final, fatal illness made it physically impossible for him to do so. As a testament to the personal nature of this habit, his very last, half-smoked cigar—an "F. P. Del Rio y Ca."—was preserved by his friends as a memento of the great preacher's earthly pilgrimage.
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
                <li style={{ marginBottom: '0.5rem' }}>Grokipedia. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://grokipedia.com/page/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25.</li>
                <li style={{ marginBottom: '0.5rem' }}>Eat. Write. Sleep... "Charles Spurgeon on suffering, depression and humour." Accessed July 14, 2026. <a href="https://www.eatwritesleep.com/2024/04/charles-spurgeon-on-suffering-depression-and-humour/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Southern Equip. "Spurgeon's suffering is an example for all pastors." <em>The Southern Baptist Theological Seminary</em>. Accessed July 14, 2026. <a href="https://equip.sbts.edu/article/spurgeons-suffering-example-pastors/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed July 14, 2026. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed July 14, 2026. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Cigar Habit", "Moderation", "Temperance", "Christian Liberty", "Vice"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/controversies/the-downgrade-controversy-part-3" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Downgrade Controversy (Part 3)</span>
            </Link>
            <Link href="/en/about/controversies/the-anti-slavery-backlash" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Anti-Slavery Backlash</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
