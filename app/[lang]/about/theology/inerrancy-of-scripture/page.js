import Link from 'next/link';

export const metadata = {
  title: "Inerrancy of Scripture | Charles Spurgeon",
  description: "Explore Charles Spurgeon's unwavering defense of the infallibility and absolute sufficiency of the Bible amidst the rise of nineteenth-century rationalism.",
  keywords: ["Charles Spurgeon", "Inerrancy", "Infallibility", "Sufficiency of Scripture", "Bible", "Downgrade Controversy", "Bibline", "theology"],
};

export default function InerrancyOfScripturePage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/theology" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Theology
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            October 19, 2025 • 3 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Inerrancy of Scripture: His View on the Infallibility and Sufficiency of the Bible
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Divine Anchor of the Tabernacle</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Charles Haddon Spurgeon's entire ministry was built upon the unshakeable foundation of the absolute inerrancy and authority of the Holy Scriptures. While the Victorian era was marked by rapid scientific advancements, shifting philosophical paradigms, and the rise of religious skepticism, Spurgeon viewed the Bible as the eternal, unchanging, and infallible Word of God. He believed that the Scriptures were not merely a collection of ancient human writings containing religious insights, but the very breath of God. For the "Prince of Preachers," the Bible was a "perfect library," and he famously instructed his pastoral students that "he who studies it thoroughly will be a better scholar than if he had devoured the Alexandrian Library entire". To understand its general run, its histories, its doctrines, and its precepts was to be the ultimate ambition of any Christian minister.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Standing Against the Tide of Rationalism</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            During the latter half of the nineteenth century, the evangelical landscape in England was severely threatened by the infiltration of German "higher criticism"—a rationalistic and academic approach that questioned the historical accuracy, the miracles, and the verbal inspiration of the biblical texts. Spurgeon vehemently opposed this encroaching modernism. He saw clearly that doubting the absolute infallibility of Scripture would inevitably lead the church down a "slippery slope," resulting in the denial of core theological truths such as the substitutionary atonement of Christ.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            This conviction was the driving force behind the bitter "Downgrade Controversy" of 1887–1888. Spurgeon sounded the alarm that the Baptist Union was harboring men who rejected the inerrancy of the Bible, choosing instead to embrace a progressive theology influenced by secular thought. He refused to compromise or seek common ground with those who treated the Bible as a flawed document, firmly believing that those who accepted higher criticism were destroying the very foundation of the Christian faith.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Sufficiency of the Written Word</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Beyond its inerrancy, Spurgeon was a staunch defender of the Bible's absolute sufficiency for both the salvation of the lost and the governance of the local church. He argued that the church did not need the world's philosophy, metaphysics, or theatrical entertainment to draw crowds or transform hearts. The simple, unadorned proclamation of the biblical text was entirely sufficient. He warned his students against perverting the Scriptures or replacing them with secular novelties, insisting that the Word of God, when empowered by the Holy Spirit, was the ultimate and only necessary weapon against the darkness of the age. If pastors would merely trust in the sufficiency of the Bible and preach the simple gospel—man's fall, the new birth, and forgiveness through the cross—they would possess a battle-axe capable of breaking the hardest of hearts.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A "Bibline" Devotion</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            For Spurgeon, the doctrine of biblical inerrancy was not merely a rigid academic postulate; it was highly practical, experiential, and devotional. He urged believers not merely to read the Bible superficially, but to devour it. Drawing on the metaphor of a silkworm consuming a leaf, he exhorted his congregation to absorb the very soul of the Bible until they spoke in a scriptural language and their spirits were thoroughly seasoned with the words of the Lord. Pointing to his great hero, John Bunyan, Spurgeon desired that every Christian's blood would become "Bibline"—so saturated with the Scriptures that a mere prick would reveal the very essence of the Bible flowing from within. This unwavering confidence in the infallible, sufficient Book formed the bedrock of his unparalleled preaching and his enduring legacy.
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
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25. Accessed October 18, 2025. [PDF document from CPAJ].</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Lectures To My Students Vol. 1</em>. London: Passmore and Alabaster, 1875. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>The Reformed Reader. "The Down Grade Controversy." Accessed October 18, 2025. <a href="https://www.reformedreader.org/spurgeon/dgcindex.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>GotQuestions.org. "What was the Downgrade Controversy?" Accessed October 18, 2025. <a href="https://www.gotquestions.org/Downgrade-Controversy.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Piper, John. "The life and ministry of Charles Spurgeon." <em>Reformed Theological Seminary</em>, 2013. Cited in Matos, Alderi Souza de. "Tesouro em vaso de barro." <em>Fides Reformata</em> 26, no. 2 (2021).</li>
                <li style={{ marginBottom: '0.5rem' }}>Wikipédia, a enciclopédia livre. "Charles Spurgeon." Accessed October 18, 2025. <a href="https://pt.wikipedia.org/wiki/Charles_Spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
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
              {["Inerrancy", "Infallibility", "Sufficiency of Scripture", "Downgrade Controversy", "Bibline"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/theology/the-centrality-of-the-cross" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Centrality of the Cross</span>
            </Link>
            <Link href="/en/about/theology/aggressive-evangelism" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>Aggressive Evangelism</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
