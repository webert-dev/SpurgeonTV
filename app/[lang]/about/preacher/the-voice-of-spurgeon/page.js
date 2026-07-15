import Link from 'next/link';

export const metadata = {
  title: "The Voice of Spurgeon | Charles Spurgeon",
  description: "Discover the acoustic marvels and oratorical mastery of Charles Spurgeon's voice in the Victorian era.",
  keywords: ["Charles Spurgeon", "The Voice of Spurgeon", "Oratory", "Acoustic Marvels", "Crystal Palace", "Agricultural Hall", "Mass Evangelism", "preacher"],
};

export default function TheVoiceOfSpurgeonPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/preacher" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to The Preacher & His Work
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            May 24, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Voice of Spurgeon: Oratorical Mastery and Acoustic Marvels in the Victorian Era
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Biological and Acoustic Phenomenon</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            In an era entirely devoid of modern electronic amplification, Charles Haddon Spurgeon possessed a biological and acoustic instrument of extraordinary power: his voice. Described by contemporaries as "sonorous," captivating, and intensely dramatic, his vocal capacity was a rare phenomenon that allowed him to project his sermons to massive crowds without the aid of microphones. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Before the physical toll of age and chronic illness restricted his movements, Spurgeon was a highly energetic and charismatic speaker who would walk—and sometimes even run—across the platform, using his entire physical presence to complement his vocal delivery. His oratory was not merely loud; it was marked by clear enunciation, profound emotional resonance, and an extemporaneous urgency that arrested the attention of the Victorian masses.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Crystal Palace and the Agricultural Hall</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon's ability to command a crowd reached its absolute zenith in 1861, when he preached to his largest indoor audience at the Crystal Palace in London. On that occasion, an astonishing 23,654 people gathered to hear the "Prince of Preachers," and his unassisted voice successfully carried across the vast expanse of the glass and iron structure.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The sheer penetrating power of his voice is best illustrated by a famous historical anecdote regarding the Agricultural Hall. Prior to a scheduled preaching engagement at the massive venue, Spurgeon visited the empty building to test its acoustics. Standing on the platform, he projected his voice into the cavernous space, loudly proclaiming the biblical text: <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"Behold the Lamb of God, which taketh away the sin of the world!"</em> 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Unknown to Spurgeon, a workman was high up in the rafters of the building. The booming, disembodied voice echoing through the hall struck the man's conscience with such theological force that he was deeply convicted of his sins and subsequently converted to Christ.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Physical Toll of Mass Evangelism</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The physical demands of Spurgeon's oratorical ministry were staggering. He did not reserve his voice solely for the Sunday services at his own church; rather, he preached in open-air meetings and the largest secular auditoriums available, delivering messages between eight and twelve times every single week. It is historically estimated that throughout his forty-year ministry, his voice proclaimed the Gospel to approximately ten million people. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            To sustain such a grueling schedule, Spurgeon had to master not only theology but the physical mechanics of breathing, projection, and venue ventilation. He was acutely aware of how the physical environment affected acoustic success and audience attention, often complaining about stifling, unventilated buildings that dulled both the preacher's voice and the hearers' minds. He pragmatically taught his pastoral students that a gust of fresh oxygen was the second best thing to the Gospel itself, as a suffocating atmosphere was an enemy to attentive hearing.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Theological Instrument</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Theologically, Spurgeon viewed his voice merely as a vessel for the Word of God. He instructed the students at the Pastors' College that "Jesus Christ deserves the best men to preach his cross, and not the empty-headed and the shiftless," requiring his trainees to rigorously cultivate their speaking abilities and eliminate ungainly pulpit mannerisms. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Yet, he steadfastly maintained that the finest oratory was entirely useless without the unction of the Holy Spirit. He firmly believed that while a preacher might use a clear, musical voice to reach the human ear, only supernatural power could regenerate the human heart. His oratorical mastery, therefore, was always subjugated to his primary evangelical mission: to compel sinners, with an aggressive, affectionate, and far-reaching voice, to find their salvation in the substitutionary atonement of Jesus Christ.
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
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Lectures To My Students Vol. 1</em>. London: Passmore and Alabaster, 1875. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Croy, Lance. "Charles Spurgeon and Followership." <em>Regent Research Roundtables Proceedings</em> (2022): 32-55.</li>
                <li style={{ marginBottom: '0.5rem' }}>Projeto Spurgeon. "Quem Foi Charles Haddon Spurgeon?" <em>Projeto Spurgeon: Proclamando a Cristo Crucificado</em>. Accessed July 14, 2026. <a href="https://www.projetospurgeon.com.br/quem-foi-spurgeon/quem-foi-charles-haddon-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Editora Mundo Cristão. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>, August 5, 2020. Accessed July 14, 2026. <a href="https://www.mundocristao.com.br/blog/quem-foi-charles-h-spurgeon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["The Voice of Spurgeon", "Oratory", "Acoustic Marvels", "Crystal Palace", "Agricultural Hall", "Mass Evangelism"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/preacher/john-ploughmans-talk" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>John Ploughman's Talk</span>
            </Link>
            <Link href="/en/about/preacher/the-preachers-library" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Preacher's Library</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
