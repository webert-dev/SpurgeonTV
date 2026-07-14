import Link from 'next/link';

export const metadata = {
  title: "Physical Afflictions & Depression | Charles Spurgeon",
  description: "The agonizing and lifelong battle of Charles Spurgeon against gout, Bright's disease, and deep depression, and how divine providence forged his pastoral compassion.",
  keywords: ["Charles Spurgeon", "Gout", "Depression", "Surrey Gardens", "Suffering", "Pastoral", "Bright's Disease", "biography"],
};

export default function PhysicalAfflictionsPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/biography" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Biography
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            September 07, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Physical Afflictions: The Agonizing and Lifelong Battle Against Gout and Deep Depression
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Burden of the Flesh</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While Charles Haddon Spurgeon is universally remembered for his monumental spiritual strength, his prodigious intellect, and his unyielding theological convictions, his physical vessel was incredibly fragile. From the relatively young age of twenty-five, Spurgeon began to suffer from severe and chronic bouts of gout and rheumatism. In the Victorian era, gout was a poorly understood and intensely painful condition. The agony in his joints was often so excruciating that it completely incapacitated him, frequently confining him to his bed and forcing him to be absent from his beloved pulpit at the Metropolitan Tabernacle for weeks or even months at a time. As the years progressed, his physical torment was severely compounded by the onset of Bright's disease, a chronic and ultimately fatal degenerative inflammation of the kidneys. These relentless physical ailments drained his vitality and eventually forced him to constantly seek physical relief in the warmer, more forgiving climate of Menton in the South of France.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Dark Night of the Soul</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Accompanying his physical agony was an equally devastating mental and emotional battle. Spurgeon suffered throughout his life from what has been aptly described as an "all-beclouding hopelessness"—profound, debilitating episodes of deep depression. His first major descent into this dark night of the soul was triggered by the horrific Surrey Gardens Music Hall tragedy in 1856, where a malicious false fire alarm led to a stampede that killed seven people. The trauma of that event left the young pastor emotionally shattered, deeply depressed, and unable to preach or function for weeks.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            However, the trauma of Surrey Gardens was only the beginning. Depression became a recurring, lifelong companion. The dark clouds that frequently settled over his mind were often exacerbated by a combination of factors: the sheer physical exhaustion of preaching to millions over his lifetime, the immense administrative stress of overseeing dozens of charitable institutions (such as the Pastors' College and the Stockwell Orphanage), his agonizing physical pain, and the heavy emotional toll of fierce theological battles—most notably the Downgrade Controversy that marked his final years. The weight of his ministry often pressed him into such depths of despair that he confessed there were times he would weep uncontrollably without even fully understanding why.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Furnace of Pastoral Compassion</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Despite the crippling nature of his physical and mental afflictions, Spurgeon did not view his suffering as a sign of divine disfavor. Instead, his robust Calvinistic theology allowed him to recognize his trials as a providential "furnace of affliction" designed by a sovereign God to keep him humble and to mold him into a more empathetic shepherd. Because he had personally walked through the darkest valleys of physical pain and mental despair, he possessed an unparalleled ability to minister tenderly to broken, weary, and depressed souls.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            A poignant anecdote shared by the twentieth-century minister Dr. Martyn Lloyd-Jones perfectly illustrates the depth of his struggles and God's sweet providence in them. During one particularly severe episode of depression, Spurgeon traveled to the countryside to seek rest. While there, he attended a small, obscure chapel where he sat unrecognized and listened to a lay preacher deliver a sermon. Unbeknownst to the humble preacher, the sermon he delivered was actually one of Spurgeon's own published messages. Sitting in the pew and listening to the very gospel of grace he had proclaimed to others, the deeply depressed "Prince of Preachers" found his own soul profoundly comforted and his spirit restored. Spurgeon's lifelong endurance in the face of relentless physical and mental agony remains one of the most powerful, yet often overlooked, testimonies of God's sustaining grace in his historic ministry.
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed September 06, 2025. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed September 06, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Mining for Gold. “All-Beclouding Hopelessness”: What 'Prince of Preachers' Charles Spurgeon Learned from Depression. Accessed September 06, 2025. <a href="https://makinghistorynow.wordpress.com/2022/03/28/charles-spurgeon-and-depression-part-1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Southern Equip. "Spurgeon's suffering is an example for all pastors." <em>The Southern Baptist Theological Seminary</em>. Accessed September 06, 2025. <a href="https://equip.sbts.edu/article/spurgeons-suffering-example-pastors/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Eat. Write. Sleep... "Charles Spurgeon on suffering, depression and humour." Accessed September 06, 2025. <a href="https://www.eatwritesleep.com/2024/04/charles-spurgeon-on-suffering-depression-and-humour/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Covenant Confessions. "Blessings from Disaster: Spurgeon's Prayer on November 2, 1856." Accessed September 06, 2025. <a href="https://covenantconfessions.com/blessings-from-disaster-spurgeons-prayer-on-november-2-1856/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Gout", "Depression", "Surrey Gardens", "Suffering", "Pastoral", "Bright's Disease"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/biography/the-mentone-retreats" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Mentone Retreats</span>
            </Link>
            <Link href="/en/about/biography/the-final-years" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Final Years</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
