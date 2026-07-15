import Link from 'next/link';

export const metadata = {
  title: "The Anti-Slavery Backlash | Charles Spurgeon",
  description: "Discover Charles Spurgeon's uncompromising stand against slavery that ignited a transatlantic firestorm and censorship in America.",
  keywords: ["Charles Spurgeon", "Slavery", "Abolition", "American Civil War", "John Brown", "Abraham Lincoln", "theology", "controversies"],
};

export default function TheAntiSlaveryBacklashPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/controversies" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Controversies
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            February 1, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Anti-Slavery Backlash: The Uncompromising Stand That Ignited a Transatlantic Firestorm
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Theological Condemnation of "Man-Stealing"</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Long before the outbreak of the American Civil War, Charles Haddon Spurgeon had established himself as a fierce and uncompromising opponent of the institution of slavery. Although the British Empire had abolished the slave trade decades prior to his birth, Spurgeon directed his prophetic outrage toward the United States, where the practice was still brutally enforced and fiercely defended, even by some Christians. He grounded his anti-slavery convictions in the theological reality that all humans are bearers of the image of God, rendering the buying and selling of human beings a profound violation of divine law and human dignity. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon did not mince words, categorically describing slavery as "a crime of crimes, a soul-destroying sin, and an iniquity which cries aloud for vengeance". Furthermore, he viewed the act of slaveholding as a moral equivalent to murder. In an 1860 letter to a Boston publication, he famously declared his "inmost soul" detestation of the practice, stating that he would no sooner receive a murderer into his church fellowship than he would a "man-stealer". Consequently, he practiced a strict ecclesiastical separation, explicitly refusing to share the communion table with anyone who owned slaves.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The John Brown Spark and the Southern Fury</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The tension between the London pastor and the American South reached a boiling point following the execution of the American abolitionist John Brown in 1859. Brown had attempted to incite an armed slave revolt at Harpers Ferry, and while his violent methods were highly controversial, Spurgeon publicly praised his overarching anti-slavery intentions. In his 1860 correspondence, Spurgeon affirmed the righteousness of Brown's cause, declaring that "John Brown is immortal in the memories of the good in England, and in my heart he lives". 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            This endorsement of a radical abolitionist struck a sensitive nerve in the pro-slavery Southern states, igniting an unprecedented campaign of media vilification against the English preacher. Newspapers across the Confederacy launched vicious <em>ad hominem</em> attacks; the press in Florida labeled Spurgeon a "beef-eating, puffed-up, vain, over-righteous pharisaical, English blab-mouth," while publications in Virginia and South Carolina dismissed him as a "fat, overgrown boy" and a "vulgar young man" with a "self-satisfied air".
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Flames of Censorship and Death Threats</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The outrage quickly moved from the printing presses to the streets. Prior to this controversy, Spurgeon's published sermons were immensely popular in America, with his publishers selling hundreds of thousands of copies annually. However, in response to his abolitionist stance, Southern slaveowners organized mass burnings of his books and tracts. Sermon bonfires illuminated jail yards, plantations, and bookshops throughout the Southern United States. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Even some American publishers attempted to censor his work, quietly excising anti-slavery remarks from his sermons in a desperate attempt to maintain their lucrative sales. Spurgeon, however, vehemently rejected this censorship, promising that he would not spare the nation in the future and that the "crying sin of a man-stealing people shall not go unrebuked". The backlash grew so severe that Spurgeon lost the support of the Southern Baptists, his sermon sales plummeted in the region, and he received scores of insulting letters, including explicit death threats. Southern newspapers openly mused that if the "hypocritical preacher" ever dared to visit their region, a "stout cord" would speedily find its way around his "eloquent throat".
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Divine Judgment and the Triumph of Emancipation</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Despite the massive financial loss from plummeting book sales and the continuous stream of trans-Atlantic vitriol, Spurgeon never wavered or diluted his position. When the American Civil War finally erupted, he interpreted the bloody conflict through a theological lens. In a sermon delivered in 1862, he attributed the immense suffering of the South states to the divine judgment of God upon America's "national sin" of slavery, which had perpetuated human bondage across generations. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon closely monitored the progress of the war and the abolitionist movement, praying fervently for the complete eradication of the institution. When President Abraham Lincoln issued the Emancipation Proclamation, promising liberty to millions of enslaved individuals, Spurgeon rejoiced from his pulpit. He praised the providential deliverance, proclaiming to his congregation that when the hope of freedom seemed far away, "it was God that gave an Abraham Lincoln, who led the nation onward till 'Emancipation' flamed upon its banners". Through this bitter controversy, Spurgeon demonstrated that his commitment to the Gospel inherently demanded a radical and unyielding opposition to systemic evil, providing a striking example of fighting injustice from deep biblical convictions.
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
                <li style={{ marginBottom: '0.5rem' }}>George, Christian. "The Reason Why America Burned Spurgeon's Sermons and Sought to Kill Him." <em>The Spurgeon Center</em>, September 22, 2016. Accessed July 14, 2026. <a href="https://www.spurgeon.org/resource-library/blog-entries/the-reason-why-america-burned-spurgeons-sermons-and-sought-to-kill-him/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Brown, Michael. "When Charles Spurgeon Took On Slavery And Billy Graham Took On Segregation." <em>Religion Unplugged</em>, September 9, 2024. Accessed July 14, 2026. <a href="https://religionunplugged.com/news/2024/9/8/when-charles-spurgeon-took-on-slavery-and-billy-graham-took-on-segregation" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipedia, The Free Encyclopedia. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://en.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Grokipedia. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://grokipedia.com/page/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>"The Theology of Charles Haddon Spurgeon: A Critical Analysis of Reformed Baptist Orthodoxy, Ecclesiology, and Controversies." [Markdown Document]. Accessed July 14, 2026.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Spurgeon Library. "Spurgeon and the Poor." <em>Midwestern Baptist Theological Seminary</em>. Accessed July 14, 2026. <a href="https://www.spurgeon.org/blog/spurgeon-and-the-poor" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Slavery", "American Civil War", "John Brown", "Abolition", "Censorship", "Abraham Lincoln", "Man-Stealing"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/controversies/the-cigar-habit" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Cigar Habit</span>
            </Link>
            <Link href="/en/about/controversies/fighting-hyper-calvinism" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Fighting Hyper-Calvinism</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
