import Link from 'next/link';

export const metadata = {
  title: "John Ploughman's Talk | Charles Spurgeon",
  description: "Explore how Charles Spurgeon used the persona of John Ploughman to deliver practical wisdom, humor, and plain advice to the working class.",
  keywords: ["Charles Spurgeon", "John Ploughman", "Working Class", "Humor", "Proverbs", "Devotional", "Morning and Evening", "preacher"],
};

export default function JohnPloughmansTalkPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/preacher" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to The Preacher & His Work
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            May 17, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            John Ploughman's Talk: Wisdom and Language for the Working Class
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Archetype of the Ordinary Man</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While Charles Haddon Spurgeon was a master of theological exposition and eloquent oratory, he possessed a unique and genius capacity to translate profound moral truths into the everyday language of the Victorian working class. To achieve this, Spurgeon created a literary alter-ego: "John Ploughman". This persona served as his archetype of the ordinary, rustic man. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The character of John Ploughman was initially introduced to the public through the pages of a monthly almanac, which offered readers a pithy, memorable proverb for every day of the year. Through this imaginary farmer, Spurgeon delivered plain, practical advice on matters such as thrift, temperance, kindness to animals, and the necessity of genuine religion among the working people.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Unleashing the Humor</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            In Victorian England, religious literature was often dry and overly solemn. Spurgeon, however, recognized that to capture the attention of the common laborer, he needed to employ a different homiletical weapon. While he meticulously edited out much of the spontaneous humor from his weekly published sermons to maintain a certain pulpit decorum, the writings of John Ploughman became the specific outlet where his sharp, dry wit and rustic sarcasm were fully unleashed.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Ploughman’s language was colloquial, down-to-earth, and intentionally provocative. Spurgeon utilized this "smack of the whip" to keep his readers awake and engaged, blending humor with piercing moral observations. He ruthlessly mocked laziness and shiftlessness, declaring that "Hard work is the grand secret of success" and that "Elbow grease is the only stuff to make gold with". 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Furthermore, he warned the working class against the financial and moral ruin found in the tavern, arguing that men who sit and drink "for the good of the house" are "ignorant, very ignorant," because the pub is a trap designed to take a man's all and leave him with nothing but headaches. Through these writings, Spurgeon proved his own proverb that <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"Wisdom in a poor man is like a diamond set in lead,"</em> demonstrating that true sagacity did not require a Latin education, an expensive coat, or an elite pedigree.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Plagiarism Controversy</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The proverbs and sayings of John Ploughman were so exceptionally clever and popular that they soon became the target of blatant plagiarism. In one remarkable incident, a Church of England magazine began lifting Spurgeon's proverbs month by month, publishing them entirely as their own original content. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            When Spurgeon discovered this, he wrote a letter to the editor confronting the theft. With characteristic wit, Spurgeon offered a compromise: if the editor was too prejudiced and ashamed to associate his publication with a nonconformist Baptist minister, he could continue using the material provided he properly attributed it to "Mr. John Ploughman". Astonishingly, the Anglican editor accepted this second alternative, utilizing the pseudonym precisely so that Spurgeon's actual name would not "defile" the pages of his denominational magazine.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Eventually, these highly popular almanac entries and essays were compiled into massively successful books, including <em>John Ploughman's Talk</em>, <em>John Ploughman's Pictures</em>, and a two-volume proverb collection entitled <em>The Salt-Cellars</em>.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Morning and Evening: The Monumental Devotional Impact</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Alongside his practical advice for the working class, Spurgeon also provided immense spiritual nourishment for the daily, private lives of believers through his devotional writings. While <em>The Treasury of David</em> was his magnum opus of biblical commentary, his book <em>Morning and Evening</em> (Manhã após Manhã, Noite após Noite) stands as his most monumental achievement in daily devotional literature. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Designed to be read twice a day, this work offered short, deeply theological, and experiential reflections that anchored the believer's mind on the grace of God and the person of Jesus Christ. Just as <em>John Ploughman's Talk</em> guided the hands and habits of the Victorian worker, <em>Morning and Evening</em> guided their hearts, cementing Spurgeon's legacy as a pastor who cared deeply for both the temporal wisdom and the eternal piety of his flock.
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
                <li style={{ marginBottom: '0.5rem' }}>The Spurgeon Library. "John Ploughman: Wisdom for the Everyman." <em>Midwestern Baptist Theological Seminary</em>. Accessed July 14, 2026. <a href="https://www.spurgeon.org/blog/john-ploughman-wisdom-for-the-everyman" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Lectures To My Students Vol. 2</em>. London: Passmore and Alabaster. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>John Ploughman's Talk; or, Plain Advice for Plain People</em>. The Spurgeon Archive. Accessed July 14, 2026. <a href="https://www.romans45.org/spurgeon/misc/plowman.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25.</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Goodreads. "John Ploughman's Talk: Plain Advice for Plain People by Charles Haddon Spurgeon." Accessed July 14, 2026. <a href="https://www.goodreads.com/book/show/27571052" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["John Ploughman", "Working Class", "Humor", "Proverbs", "Devotional", "Morning and Evening"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/preacher/the-treasury-of-david" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Treasury of David</span>
            </Link>
            <Link href="/en/about/preacher/the-voice-of-spurgeon" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Voice of Spurgeon</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
