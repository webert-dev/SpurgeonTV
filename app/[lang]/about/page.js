import Link from 'next/link';
import AboutArticleList from '@/app/components/AboutArticleList';
import { getAllArticles } from '@/lib/articles';

const translations = {
  en: {
    heroEyebrow: "1834 – 1892",
    heroTitle: "Charles Haddon",
    heroSubtitle: "Spurgeon",
    whoWasTitle: "Who was Spurgeon?",
    whoWasP1: "Charles Haddon Spurgeon (1834–1892) was a British Particular Baptist preacher, widely considered the most influential preacher of the 19th century. His ministerial career was marked by an unwavering devotion to Scripture and a singular ability to communicate profound truths in an accessible and vivid way.",
    whoWasP2: "Converted at age 15, Spurgeon preached his first sermon at 16, became a pastor at 17, and was already attracting crowds in the thousands before age 20. At his peak, he preached to over 10,000 people weekly at the Metropolitan Tabernacle in London.",
    whoWasP3: "During his nearly forty years of active ministry, Spurgeon preached over 3,500 sermons, published weekly and distributed throughout the English-speaking world — and translated into dozens of languages. He also founded an orphanage, a pastors' college and a publishing house.",
    whoWasP4: "His literary legacy — 63 volumes of sermons and over 135 books — remains as one of the greatest individual outputs in the history of Christian literature. His works are read, preached, and studied to this day by pastors, theologians, and laymen worldwide.",
    stats: {
      sermons: "Sermons Preached",
      books: "Books Published",
      volumes: "Volumes of Sermons",
      members: "Church Members"
    },
    timelineTitle: "Timeline",
    timelineSubtitle: "A life dedicated to preaching Christ",
    exploreTitle: "Explore More",
    categories: {
      biography: { title: "Full Biography", desc: "The complete narrative of his life, filled with firsthand accounts and letters." },
      theology: { title: "His Theology", desc: "Soon, we will explore his convictions, his incisive evangelism, and his unwavering devotion to the doctrines of grace." },
      controversies: { title: "Controversies", desc: "The battles for truth: Baptismal Regeneration and the Downgrade Controversy." },
      preacher: { title: "The Preacher & His Work", desc: "His homiletics, the Pastors' College, and his profound influence on ministers." },
      articles: "Articles"
    },
    quote: "Visit many good books, but live in the Bible.",
    readMore: "Read related articles",
    readMoreLess: "Hide articles",
    timeline: [
      { year: '1834', title: 'Nacimiento en Kelvedon', desc: 'Charles Haddon Spurgeon nació el 19 de junio de 1834, en Kelvedon, Essex, Inglaterra, hijo de un ministro inconformista.', relatedSlugs: ['biography/the-kelvedon-years'] },
      { year: '1835', title: 'Viviendo con sus abuelos', desc: 'Spurgeon pasó sus años de formación con su abuelo, un pastor congregacional, lo que moldeó profundamente su fe temprana.', relatedSlugs: ['biography/the-stambourne-influence'] },
      { year: '1849', title: 'Estudios en Newmarket', desc: 'Se mudó a Newmarket para continuar sus estudios. Fue un período de intensa lectura y formación autodidacta, preparando el terreno intelectual para su futuro ministerio.' },
      { year: '1850', title: 'Conversión a los 15 años', desc: 'En una mañana nevada, una fuerte tormenta lo obligó a entrar en una pequeña capilla Metodista Primitiva en Artillery Street. Un predicador laico sustituto predicó de Isaías 45:22.', quote: '"Fijando sus ojos en mí, como si conociera todo mi corazón, dijo: \'Joven, te ves muy miserable. ... Joven, mira a Jesucristo. ¡Mira! ¡Mira! ¡Mira! No tienes nada que hacer sino mirar y vivir.\' ... Miré hasta casi perder la vista. Allí mismo la nube se fue, la oscuridad desapareció, y en ese momento vi el sol."', quoteSource: 'Autobiografía de C. H. Spurgeon, Vol. 1', relatedSlugs: ['biography/the-snowstorm-conversion'] },
      { year: '1851', title: 'Primer Sermón Predicado', desc: 'A los 16 años, Spurgeon predicó su primer sermón en una cabaña en Teversham, siendo rápidamente reconocido por sus dones extraordinarios.', relatedSlugs: ['biography/the-boy-preacher-of-the-fens'] },
      { year: '1852', title: 'Pastorado en Waterbeach', desc: 'Con solo 17 años, se convirtió en pastor de la Capilla Bautista de Waterbeach, transformando una pequeña congregación de aldea.', relatedSlugs: ['biography/the-waterbeach-ministry'] },
      { year: '1854', title: 'Llamado a New Park Street', desc: 'A los 19 años, fue llamado a la histórica Capilla de New Park Street en Londres. Las multitudes desbordaron rápidamente el edificio.', relatedSlugs: ['biography/the-call-to-london'] },
      { year: '1856', title: 'Matrimonio con Susannah Thompson', desc: 'Se casó con Susannah, quien se convertiría en su mayor apoyo terrenal. Ella no solo lo cuidó, sino que fundó el Fondo de Libros para ayudar a pastores pobres.', relatedSlugs: ['biography/susannah-thompson'] },
      { year: '1856', title: 'Fundación del Colegio de Pastores', desc: 'Visualizando la multiplicación de predicadores fervientes, fundó su escuela teológica. No buscaba académicos fríos, sino ganadores de almas.', relatedSlugs: ['preacher/the-pastors-college'] },
      { year: '1856', title: 'Surrey Gardens Music Hall', desc: 'Los servicios se trasladaron al Surrey Gardens Music Hall, atrayendo a más de 10,000 personas. Una falsa alarma de incendio causó pánico y muertes, una tragedia que casi terminó su ministerio.', relatedSlugs: ['biography/the-surrey-gardens-tragedy'] },
      { year: '1857', title: 'Predicando a 23,000 personas', desc: 'Spurgeon predicó a 23,654 personas en el Crystal Palace. Días antes, al probar la acústica, llevó inadvertidamente a un trabajador a la conversión.', quote: '"Para probar las propiedades acústicas del edificio, grité con voz fuerte: \'He aquí el Cordero de Dios, que quita el pecado del mundo.\' En una de las galerías, un trabajador que no sabía nada de lo que se estaba haciendo escuchó las palabras, y llegaron como un mensaje del cielo a su alma."', quoteSource: 'Autobiografía de C. H. Spurgeon, Vol. 2', relatedSlugs: ['preacher/the-voice-of-spurgeon'] },
      { year: '1861', title: 'Apertura del Tabernáculo Metropolitano', desc: 'El Tabernáculo Metropolitano, con capacidad para 6,000 personas, abrió sus puertas y se convirtió en el epicentro de su ministerio durante tres décadas.', relatedSlugs: ['biography/the-metropolitan-tabernacle'] },
      { year: '1865', title: 'Revista La Espada y la Cuchara', desc: 'Lanzó la revista mensual "La Espada y la Cuchara", compartiendo sermones, reseñas y noticias del ministerio.', relatedSlugs: ['preacher/the-printed-page'] },
      { year: '1866', title: 'Asociación de Colportaje', desc: 'Creó un ejército de vendedores ambulantes de Biblias y literatura puritana para llegar a los pueblos más remotos de Inglaterra.', relatedSlugs: ['preacher/the-colportage-association'] },
      { year: '1867', title: 'Fundación del Orfanato Stockwell', desc: 'Spurgeon abrió el Orfanato Stockwell, que llegó a albergar y educar a más de 500 niños a la vez.', relatedSlugs: ['preacher/the-stockwell-orphanage'] },
      { year: '1870', title: 'Inicio de las Aflicciones Físicas', desc: 'Sus luchas severas con la gota y enfermedades renales comenzaron a intensificarse, obligándolo a realizar retiros reparadores frecuentes en Mentone, Francia.', relatedSlugs: ['biography/physical-afflictions', 'biography/the-mentone-retreats'] },
      { year: '1887', title: 'Controversia del Declive', desc: 'Se retiró de la Unión Bautista por compromisos doctrinales — una postura valiente que le costó muchas amistades y su salud.', relatedSlugs: ['controversies/the-downgrade-controversy-part-1', 'controversies/the-downgrade-controversy-part-2', 'controversies/the-downgrade-controversy-part-3'] },
      { year: '1892', title: 'El Legado Eterno', desc: 'Spurgeon fue a la gloria el 31 de enero de 1892. Dejó atrás 63 volúmenes de sermones, más de 135 libros y un legado que moldeó a la Iglesia global.', relatedSlugs: ['biography/the-prince-goes-to-glory', 'biography/the-final-years'] },
    ]
  }
};

export default async function SobrePage({ params }) {
  const { lang } = await params;
  const allArticles = getAllArticles(lang);
  const t = translations[lang] || translations.en;

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero" style={{ paddingBottom: '1rem' }}>
        <div className="about-hero-glow" />
        <div className="container about-hero-content">
          <p className="hero-eyebrow">{t.heroEyebrow}</p>
          <h1 className="hero-title">
            {t.heroTitle}<br /><em>{t.heroSubtitle}</em>
          </h1>
        </div>
      </section>

      {/* BIO */}
      <section className="container about-bio-section" style={{ marginTop: '-5rem' }}>
        <div className="about-bio-grid">
          <div className="about-bio-text" style={{ textAlign: 'justify' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>{t.whoWasTitle}</h2>
            <p>{t.whoWasP1}</p>
            <p>{t.whoWasP2}</p>
            <p>{t.whoWasP3}</p>
            <p>{t.whoWasP4}</p>
          </div>
          <div className="about-bio-stats">
            <div className="bio-stat"><span className="bio-stat-num">3,563</span><span className="bio-stat-label">{t.stats.sermons}</span></div>
            <div className="bio-stat"><span className="bio-stat-num">135+</span><span className="bio-stat-label">{t.stats.books}</span></div>
            <div className="bio-stat"><span className="bio-stat-num">63</span><span className="bio-stat-label">{t.stats.volumes}</span></div>
            <div className="bio-stat"><span className="bio-stat-num">14,000</span><span className="bio-stat-label">{t.stats.members}</span></div>
          </div>
        </div>
      </section>

      <AboutArticleList lang={lang} initialArticles={allArticles} />

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">{t.timelineTitle}</h2>
            <p className="section-subtitle">{t.timelineSubtitle}</p>
          </div>
          <div className="timeline">
            {t.timeline.map((item, index) => (
              <div key={item.year} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.quote && (
                    <div className="timeline-quote-box" style={{ marginTop: '1rem', padding: '1rem', borderLeft: '3px solid var(--accent)', background: 'var(--surface-hover)', borderRadius: '4px' }}>
                      <p style={{ fontStyle: 'italic', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{item.quote}</p>
                      <cite style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', textAlign: 'right' }}>— {item.quoteSource}</cite>
                    </div>
                  )}
                  {item.relatedSlugs && (
                    <details style={{ marginTop: '1rem' }} className="timeline-related-articles">
                      <summary style={{ cursor: 'pointer', color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', listStyle: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>{t.readMore}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s' }} className="summary-chevron">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </summary>
                      <ul style={{ marginTop: '0.75rem', paddingLeft: '1.2rem', listStyle: 'none' }}>
                        {item.relatedSlugs.map(slug => {
                          const article = allArticles.find(a => a.href === `/about/${slug}`);
                          if (!article) return null;
                          return (
                            <li key={slug} style={{ marginBottom: '0.5rem', position: 'relative' }}>
                              <span style={{ position: 'absolute', left: '-1rem', color: 'var(--accent)', fontSize: '0.8rem' }}>•</span>
                              <Link href={`/${lang}/about/${slug}`} style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} className="article-hover-link">
                                {article.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE (HUB) */}
      <section className="container hub-section" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>{t.exploreTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          
          <Link href={`/${lang}/about/biography`} style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'block', textDecoration: 'none', transition: 'all 0.2s', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--surface-hover)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>13 {t.categories.articles}</span>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem' }}>{t.categories.biography.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t.categories.biography.desc}</p>
          </Link>

          <Link href={`/${lang}/about/theology`} style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'block', textDecoration: 'none', transition: 'all 0.2s', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--surface-hover)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>12 {t.categories.articles}</span>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem' }}>{t.categories.theology.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t.categories.theology.desc}</p>
          </Link>

          <Link href={`/${lang}/about/controversies`} style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'block', textDecoration: 'none', transition: 'all 0.2s', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--surface-hover)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>13 {t.categories.articles}</span>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem' }}>{t.categories.controversies.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t.categories.controversies.desc}</p>
          </Link>

          <Link href={`/${lang}/about/preacher`} style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'block', textDecoration: 'none', transition: 'all 0.2s', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--surface-hover)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>11 {t.categories.articles}</span>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem' }}>{t.categories.preacher.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t.categories.preacher.desc}</p>
          </Link>

        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="quote-banner" style={{ marginTop: '4rem' }}>
        <div className="container quote-inner">
          <span className="quote-mark">&ldquo;</span>
          <blockquote className="quote-text">
            {t.quote}
          </blockquote>
          <cite className="quote-author">— Charles H. Spurgeon</cite>
        </div>
      </section>
    </div>
  );
}
