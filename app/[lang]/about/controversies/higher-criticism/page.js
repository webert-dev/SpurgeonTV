import Link from 'next/link';

export const metadata = {
  title: "Higher Criticism | Charles Spurgeon",
  description: "Explore Charles Spurgeon's fierce defense of biblical authority against the rising tide of German Rationalism and higher criticism.",
  keywords: ["Charles Spurgeon", "Higher Criticism", "German Rationalism", "Biblical Authority", "Inerrancy", "Downgrade Controversy", "theology", "controversies"],
};

export default function HigherCriticismPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/controversies" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Controversies
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            March 1, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Higher Criticism: Confronting German Rationalism and the Defense of Biblical Authority
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Rise of the "New Theology"</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The Victorian era in Britain was marked by significant cultural, philosophical, and scientific shifts that created a general ethos highly conducive to theological revisionism. Amidst this intellectual climate, a "new theology" emerged, heavily influenced by German rationalism and the academic movement known as "higher criticism". This movement sought to subject the Holy Scriptures to rigorous, skeptical academic analysis, effectively questioning the historical accuracy, verbal inspiration, and absolute infallibility of the biblical text. For Charles Haddon Spurgeon, this was not a legitimate scholarly advancement, but a deadly ideological virus that was rapidly contaminating the churches of his day.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Assault on Biblical Inerrancy</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon recognized that the foundation of the Christian faith rested entirely upon the authority of the Word of God. He watched with growing alarm as many ministers and theological professors began to accommodate these modern intellectual trends, abandoning historic orthodox beliefs in favor of a progressive worldview. The core of this German higher criticism involved an underlying unbelief regarding the infallibility and divine inspiration of the Bible. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon saw clearly that if the Scriptures were treated merely as flawed human documents, the central theological tenets of the faith—such as the substitutionary atonement of Christ—would soon be discarded. He warned that accepting this criticism against biblical inspiration would place the church on a "Down-Grade," a slippery slope of doctrinal decay from which recovery would be nearly impossible.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Fighting the "Foxes of Craft"</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Unlike some of his contemporaries who attempted to blend evangelical faith with modern rationalism, Spurgeon refused to seek a middle ground. He perceived that the proponents of higher criticism were often operating stealthily within the denomination. In his magazine, <em>The Sword and the Trowel</em>, he warned his readers that the church was not merely facing the "lion of open unbelief," but rather the "foxes of craft, who profess to love the gospel which they labor hard to undermine". 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            He was deeply indignant that the very men who were ordained to preach the Word of God were actively destroying its authority from within their own pulpits. Furthermore, he noted the practical consequences of this doctrinal shift: as churches lost their confidence in the power of the inspired Scriptures, they increasingly turned to carnal pragmatism and theatrical entertainment to draw crowds.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Unyielding Defender of Orthodoxy</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon’s uncompromising resistance to German higher criticism and modernism ultimately led to the most painful chapter of his life—the Downgrade Controversy. Because he steadfastly refused to compromise with the "new theology," he was fiercely criticized, labeled as hopelessly old-fashioned, and accused of creating division where none existed. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Despite the personal toll and the loss of long-time friends, Spurgeon never softened his stance. He urged those who abhorred modern heresies to stand as true allies and to scatter the "bombshell" of orthodox truth wherever it might do execution against unbelief. By confronting higher criticism head-on, Spurgeon solidified his legacy as the Victorian era's most valiant defender of biblical authority, insisting that the unchanging Word of God must never be sacrificed on the altar of modern academic consensus.
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
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed July 14, 2026. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Reformed Reader. "The Down Grade Controversy." Accessed July 14, 2026. <a href="https://www.reformedreader.org/spurgeon/dgcindex.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. "Notes (May 1891)." <em>The Sword and the Trowel</em>. Reprinted in The Reformed Reader. Accessed July 14, 2026. <a href="https://www.reformedreader.org/spurgeon/dgcindex.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. "Notes (August 1891)." <em>The Sword and the Trowel</em>. Reprinted in The Reformed Reader. Accessed July 14, 2026. <a href="https://www.reformedreader.org/spurgeon/dgcindex.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Hopkins, Mark. "The Down-Grade Controversy." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed July 14, 2026. <a href="https://christianhistoryinstitute.org/magazine/article/down-grade-controversy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25.</li>
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
              {["Higher Criticism", "German Rationalism", "Biblical Authority", "Inerrancy", "Downgrade Controversy", "Sword and the Trowel"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/controversies/the-revivalism-debate" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Revivalism Debate</span>
            </Link>
            <Link href="/en/about/controversies/theater-preaching" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Theater Preaching</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
