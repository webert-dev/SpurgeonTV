import Link from 'next/link';

export const metadata = {
  title: "The Rivulet Controversy | Charles Spurgeon",
  description: "Explore the Rivulet Controversy, an early skirmish over doctrine and inspiration in Victorian hymnody that foreshadowed the Downgrade Controversy.",
  keywords: ["Charles Spurgeon", "Rivulet Controversy", "Thomas T. Lynch", "Hymnody", "Doctrine", "Downgrade Controversy", "Nonconformists", "theology", "controversies"],
};

export default function TheRivuletControversyPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/controversies" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to Controversies
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            December 28, 2025 • 4 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            The Rivulet Controversy: Early Skirmishes Over Doctrine and Inspiration
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Rise of a "New Theology" in Hymnody</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            While Charles Haddon Spurgeon is most historically remembered for his fierce defense of orthodox theology during the Downgrade Controversy in the late 1880s, his battles against creeping liberalism began decades earlier. One of the very first ecclesiastical skirmishes concerning doctrine, inspiration, and the purity of public worship was the "Rivulet" Controversy of 1856. The conflict centered around the publication of a hymnbook entitled <em>The Rivulet</em>, authored by Thomas T. Lynch, a Congregationalist minister. To the orthodox defenders of the faith, Lynch's poetic compositions were dangerously ambiguous. They lacked the robust, distinctive doctrines of the evangelical faith—such as the substitutionary blood of Christ, human depravity, and the regenerating work of the Holy Spirit—replacing them instead with a vague, nature-focused spirituality that appealed to the liberalizing, romantic sensibilities of the Victorian era.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Dr. Campbell's Fierce Indictment</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The publication of these hymns caused an immediate theological uproar among the Nonconformists. The debate reached its climax when Dr. John Campbell, a prominent Nonconformist editor and a staunch ally of Spurgeon, stepped into the ideological battlefield. Campbell recognized that the theology sung by the congregation would inevitably become the theology believed by the church. When he finally spoke on the matter, the public excitement and tension greatly increased.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Displaying absolute resolve, there was no indecision or hesitation in Campbell's critique; he boldly declared that <em>The Rivulet</em>, taken as a whole, was "the most unspiritual publication of the kind in the English language". Recognizing that this dilution of doctrine posed a fatal threat to the next generation of preachers, the doctor published a series of "Seven Letters" addressed directly to the "Principals and Professors of the Independent and Baptist Colleges of England". In these letters, he delivered a devastating theological assessment, insisting that there was actually <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"less of distinctive evangelical truth in Mr. Lynch's pieces than in the hymns used by the Unitarians"</em>.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Spurgeon's Doctrinal Stance</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            For the young pastor Charles Spurgeon, who had just recently arrived in London and was experiencing explosive growth at the New Park Street Chapel, this controversy was highly significant. Spurgeon's entire ministry was built upon the aggressive proclamation of the cross and the absolute inerrancy of Scripture. In his own congregation, he insisted on singing doctrinally rich, Puritan-style hymns that left no doubt regarding the sovereignty of God and the necessity of the new birth. He viewed the theological ambiguity of <em>The Rivulet</em> not merely as a matter of poor poetic taste, but as a deliberate subversion of the Gospel of grace.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>The Foreshadowing of the Downgrade</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The Rivulet Controversy exposed a growing fracture within English Nonconformity. It revealed a faction of ministers who were increasingly embarrassed by the stark realities of historic Calvinism and who sought to soften the Gospel to make it more palatable to modern intellectual tastes. For Spurgeon, these early skirmishes over hymnody and inspiration served as a prophetic warning. The aesthetic shift in worship was merely the symptom of a much deeper theological disease.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            The men who defended the doctrinal vagueness of <em>The Rivulet</em> were paving the way for the open denial of biblical authority. Thus, this controversy acted as the opening salvo in a long, arduous war against theological compromise—a battle that would culminate thirty years later in the great and final struggle of Spurgeon's life, the Downgrade Controversy.
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
                <li style={{ marginBottom: '0.5rem' }}>Pike, G. Holden. <em>The Life and Work of Charles Haddon Spurgeon</em>. London: Passmore and Alabaster, 1894. (Republished electronically by SermonIndex.net).</li>
                <li style={{ marginBottom: '0.5rem' }}>SermonIndex.net. "Chapter 23: The 'Rivulet' Controversy — Life and Work of Charles Haddon Spurgeon." Accessed December 27, 2025. <a href="https://www.sermonindex.net/books/spurgeon-charles-h-life-and-work-of-charles-haddon-spurgeon/28/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Reformed Reader. "The Down Grade Controversy." Accessed December 27, 2025. <a href="https://www.reformedreader.org/spurgeon/dgcindex.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991). Accessed December 27, 2025. <a href="https://christianhistoryinstitute.org/magazine/article/life-and-times-of-charles-haddon-spurgeon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Link</a>.</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25.</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Lectures To My Students Vol. 1</em>. London: Passmore and Alabaster, 1875.</li>
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
              {["Rivulet Controversy", "Thomas T. Lynch", "Hymnody", "Doctrine", "Downgrade Controversy", "Nonconformists"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/controversies/the-baptismal-regeneration-controversy" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Baptismal Regeneration Controversy</span>
            </Link>
            <Link href="/en/about/controversies/the-downgrade-controversy-part-1" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Downgrade Controversy (Part 1)</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
