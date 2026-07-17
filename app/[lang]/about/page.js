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
      { year: '1834', title: 'Birth in Kelvedon', desc: 'Charles Haddon Spurgeon was born on June 19, 1834, in Kelvedon, Essex, England, to a Nonconformist minister.', relatedSlugs: ['biography/the-kelvedon-years'] },
      { year: '1835', title: 'With his Grandparents', desc: 'Spurgeon spent formative years with his grandfather, a Congregational pastor, which deeply shaped his early faith.', relatedSlugs: ['biography/the-stambourne-influence'] },
      { year: '1850', title: 'Conversion at 15', desc: 'On a snowy morning, a severe storm forced him into a small Primitive Methodist chapel on Artillery Street. A substitute lay-preacher preached from Isaiah 45:22.', quote: '"Just fixing his eyes on me, as if he knew all my heart, he said, \'Young man, you look very miserable. ... Young man, look to Jesus Christ. Look! Look! Look! You have nothin’ to do but to look and live.\' ... I looked until I could almost have looked my eyes away. There and then the cloud was gone, the darkness had rolled away, and that moment I saw the sun."', quoteSource: 'C. H. Spurgeon’s Autobiography, Vol. 1', relatedSlugs: ['biography/the-snowstorm-conversion'] },
      { year: '1851', title: 'First Sermon Preached', desc: 'At 16, Spurgeon preached his first sermon in a cottage in Teversham, quickly becoming recognized for his extraordinary gifts.', relatedSlugs: ['biography/the-boy-preacher-of-the-fens'] },
      { year: '1852', title: 'Pastor in Waterbeach', desc: 'At just 17 years old, he became pastor of the Waterbeach Baptist Chapel, transforming a small village congregation.', relatedSlugs: ['biography/the-waterbeach-ministry'] },
      { year: '1854', title: 'Called to New Park Street', desc: 'At 19, he was called to the historic New Park Street Chapel in London. Crowds quickly overflowed the building.', relatedSlugs: ['biography/the-call-to-london'] },
      { year: '1856', title: 'Surrey Gardens Music Hall', desc: 'Services were moved to the Surrey Gardens Music Hall, attracting over 10,000 people — a historical record for preaching.', relatedSlugs: ['biography/the-surrey-gardens-tragedy'] },
      { year: '1857', title: 'Preaches to 23,000', desc: 'Spurgeon preached to 23,654 people at the Crystal Palace. Days before, he tested the acoustics, inadvertently leading to the conversion of a worker.', quote: '"In order to test the acoustic properties of the building, I cried in a loud voice, \'Behold the Lamb of God, which taketh away the sin of the world.\' In one of the galleries, a workman, who knew nothing of what was being done, heard the words, and they came like a message from heaven to his soul."', quoteSource: 'C. H. Spurgeon’s Autobiography, Vol. 2', relatedSlugs: ['preacher/the-voice-of-spurgeon'] },
      { year: '1861', title: 'Opening of the Metropolitan Tabernacle', desc: 'The Metropolitan Tabernacle, with a seating capacity of 6,000, opened its doors and became the epicenter of his ministry for three decades.', relatedSlugs: ['biography/the-metropolitan-tabernacle'] },
      { year: '1865', title: 'The Sword and the Trowel Magazine', desc: 'Launched the monthly magazine "The Sword and the Trowel", sharing sermons, reviews, and ministry news.', relatedSlugs: ['preacher/the-printed-page'] },
      { year: '1867', title: 'Stockwell Orphanage', desc: 'Spurgeon opened the Stockwell Orphanage, which eventually housed and educated over 500 children at a time.', relatedSlugs: ['preacher/the-stockwell-orphanage'] },
      { year: '1887', title: 'Downgrade Controversy', desc: 'Withdrew from the Baptist Union over doctrinal compromises — a courageous stand that cost him many friendships.', relatedSlugs: ['controversies/the-downgrade-controversy-part-1', 'controversies/the-downgrade-controversy-part-2', 'controversies/the-downgrade-controversy-part-3'] },
      { year: '1892', title: 'Eternal Legacy', desc: 'Spurgeon went to glory on January 31, 1892. He left behind 63 volumes of sermons, over 135 books, and a legacy that shaped the global Church.', relatedSlugs: ['biography/the-prince-goes-to-glory', 'biography/the-final-years', 'biography/the-mentone-retreats'] },
    ]
  },
  pt: {
    heroEyebrow: "1834 – 1892",
    heroTitle: "Charles Haddon",
    heroSubtitle: "Spurgeon",
    whoWasTitle: "Quem foi Spurgeon?",
    whoWasP1: "Charles Haddon Spurgeon (1834–1892) foi um pregador Batista Particular britânico, amplamente considerado o pregador mais influente do século XIX. Sua carreira ministerial foi marcada por uma devoção inabalável às Escrituras e uma capacidade singular de comunicar verdades profundas de forma acessível e vívida.",
    whoWasP2: "Convertido aos 15 anos, Spurgeon pregou seu primeiro sermão aos 16, tornou-se pastor aos 17, e já atraía multidões aos milhares antes dos 20 anos. No auge, ele pregava para mais de 10.000 pessoas semanalmente no Tabernáculo Metropolitano de Londres.",
    whoWasP3: "Durante seus quase quarenta anos de ministério ativo, Spurgeon pregou mais de 3.500 sermões, publicados semanalmente e distribuídos por todo o mundo de língua inglesa — e traduzidos para dezenas de idiomas. Ele também fundou um orfanato, um colégio de pastores e uma editora.",
    whoWasP4: "Seu legado literário — 63 volumes de sermões e mais de 135 livros — permanece como uma das maiores produções individuais na história da literatura cristã. Suas obras são lidas, pregadas e estudadas até hoje por pastores, teólogos e leigos em todo o mundo.",
    stats: {
      sermons: "Sermões Pregados",
      books: "Livros Publicados",
      volumes: "Volumes de Sermões",
      members: "Membros da Igreja"
    },
    timelineTitle: "Linha do Tempo",
    timelineSubtitle: "Uma vida dedicada a pregar Cristo",
    exploreTitle: "Explore Mais",
    categories: {
      biography: { title: "Biografia Completa", desc: "A narrativa completa de sua vida, repleta de relatos em primeira mão e cartas." },
      theology: { title: "Sua Teologia", desc: "Logo exploraremos suas convicções, seu evangelismo incisivo e sua devoção inabalável às doutrinas da graça." },
      controversies: { title: "Controvérsias", desc: "As batalhas pela verdade: Regeneração Batismal e a Controvérsia do Declínio." },
      preacher: { title: "O Pregador e Sua Obra", desc: "Sua homilética, o Colégio de Pastores e sua profunda influência sobre ministros." },
      articles: "Artigos"
    },
    quote: "Visite muitos livros bons, mas viva na Bíblia.",
    readMore: "Ler artigos relacionados",
    readMoreLess: "Ocultar artigos",
    timeline: [
      { year: '1834', title: 'Nascimento em Kelvedon', desc: 'Charles Haddon Spurgeon nasceu em 19 de junho de 1834, em Kelvedon, Essex, Inglaterra, filho de um ministro Não-Conformista.', relatedSlugs: ['biography/the-kelvedon-years'] },
      { year: '1835', title: 'Com os Avós', desc: 'Spurgeon passou os anos de formação com seu avô, um pastor congregacional, o que moldou profundamente sua fé inicial.', relatedSlugs: ['biography/the-stambourne-influence'] },
      { year: '1850', title: 'Conversão aos 15', desc: 'Em uma manhã nevada, uma forte tempestade o forçou a entrar em uma pequena capela Metodista Primitiva na Artillery Street. Um pregador leigo substituto pregou em Isaías 45:22.', quote: '"Apenas fixando seus olhos em mim, como se conhecesse todo o meu coração, ele disse: \'Jovem, você parece muito miserável. ... Jovem, olhe para Jesus Cristo. Olhe! Olhe! Olhe! Você não tem nada a fazer senão olhar e viver.\' ... Olhei até quase perder a visão. Ali mesmo a nuvem se foi, a escuridão se dissipou, e naquele momento eu vi o sol."', quoteSource: 'Autobiografia de C. H. Spurgeon, Vol. 1', relatedSlugs: ['biography/the-snowstorm-conversion'] },
      { year: '1851', title: 'Primeiro Sermão', desc: 'Aos 16 anos, Spurgeon pregou seu primeiro sermão numa cabana em Teversham, sendo rapidamente reconhecido por seus dons extraordinários.', relatedSlugs: ['biography/the-boy-preacher-of-the-fens'] },
      { year: '1852', title: 'Pastor em Waterbeach', desc: 'Com apenas 17 anos, tornou-se pastor da Capela Batista de Waterbeach, transformando uma pequena congregação de vilarejo.', relatedSlugs: ['biography/the-waterbeach-ministry'] },
      { year: '1854', title: 'Chamado para New Park Street', desc: 'Aos 19 anos, foi chamado para a histórica Capela de New Park Street em Londres. Multidões rapidamente lotaram o prédio.', relatedSlugs: ['biography/the-call-to-london'] },
      { year: '1856', title: 'Surrey Gardens Music Hall', desc: 'Os cultos foram transferidos para o Surrey Gardens Music Hall, atraindo mais de 10.000 pessoas — um recorde histórico para pregação.', relatedSlugs: ['biography/the-surrey-gardens-tragedy'] },
      { year: '1857', title: 'Pregando para 23.000', desc: 'Spurgeon pregou para 23.654 pessoas no Crystal Palace. Dias antes, ao testar a acústica, levou inadvertidamente um trabalhador à conversão.', quote: '"Para testar as propriedades acústicas do prédio, gritei em alta voz: \'Eis o Cordeiro de Deus, que tira o pecado do mundo.\' Numa das galerias, um trabalhador que nada sabia do que estava sendo feito ouviu as palavras, e elas vieram como uma mensagem do céu à sua alma."', quoteSource: 'Autobiografia de C. H. Spurgeon, Vol. 2', relatedSlugs: ['preacher/the-voice-of-spurgeon'] },
      { year: '1861', title: 'Abertura do Tabernáculo Metropolitano', desc: 'O Tabernáculo Metropolitano, com capacidade para 6.000 pessoas sentadas, abriu as portas e tornou-se o epicentro do seu ministério por três décadas.', relatedSlugs: ['biography/the-metropolitan-tabernacle'] },
      { year: '1865', title: 'Revista A Espada e a Espátula', desc: 'Lançou a revista mensal "A Espada e a Espátula", compartilhando sermões, resenhas e notícias do ministério.', relatedSlugs: ['preacher/the-printed-page'] },
      { year: '1867', title: 'Orfanato Stockwell', desc: 'Spurgeon abriu o Orfanato Stockwell, que chegou a abrigar e educar mais de 500 crianças simultaneamente.', relatedSlugs: ['preacher/the-stockwell-orphanage'] },
      { year: '1887', title: 'Controvérsia do Declínio', desc: 'Retirou-se da União Batista devido a concessões doutrinárias — uma posição corajosa que lhe custou muitas amizades.', relatedSlugs: ['controversies/the-downgrade-controversy-part-1', 'controversies/the-downgrade-controversy-part-2', 'controversies/the-downgrade-controversy-part-3'] },
      { year: '1892', title: 'Legado Eterno', desc: 'Spurgeon foi para a glória em 31 de janeiro de 1892. Deixou para trás 63 volumes de sermões, mais de 135 livros e um legado que moldou a Igreja global.', relatedSlugs: ['biography/the-prince-goes-to-glory', 'biography/the-final-years', 'biography/the-mentone-retreats'] },
    ]
  },
  es: {
    heroEyebrow: "1834 – 1892",
    heroTitle: "Charles Haddon",
    heroSubtitle: "Spurgeon",
    whoWasTitle: "¿Quién fue Spurgeon?",
    whoWasP1: "Charles Haddon Spurgeon (1834–1892) fue un predicador bautista particular británico, ampliamente considerado el predicador más influyente del siglo XIX. Su carrera ministerial estuvo marcada por una devoción inquebrantable a las Escrituras y una capacidad singular para comunicar verdades profundas de manera accesible y vívida.",
    whoWasP2: "Convertido a los 15 años, Spurgeon predicó su primer sermón a los 16, se convirtió en pastor a los 17, y ya atraía multitudes de miles antes de los 20. En su apogeo, predicó a más de 10,000 personas semanalmente en el Tabernáculo Metropolitano de Londres.",
    whoWasP3: "Durante sus casi cuarenta años de ministerio activo, Spurgeon predicó más de 3,500 sermones, publicados semanalmente y distribuidos por todo el mundo de habla inglesa — y traducidos a docenas de idiomas. También fundó un orfanato, un colegio de pastores y una editorial.",
    whoWasP4: "Su legado literario — 63 volúmenes de sermones y más de 135 libros — sigue siendo una de las mayores producciones individuales en la historia de la literatura cristiana. Sus obras son leídas, predicadas y estudiadas hasta el día de hoy por pastores, teólogos y laicos en todo el mundo.",
    stats: {
      sermons: "Sermones Predicados",
      books: "Libros Publicados",
      volumes: "Volúmenes de Sermones",
      members: "Miembros de la Iglesia"
    },
    timelineTitle: "Línea de Tiempo",
    timelineSubtitle: "Una vida dedicada a predicar a Cristo",
    exploreTitle: "Explorar Más",
    categories: {
      biography: { title: "Biografía Completa", desc: "La narrativa completa de su vida, llena de relatos de primera mano y cartas." },
      theology: { title: "Su Teología", desc: "Pronto exploraremos sus convicciones, su evangelismo incisivo y su devoción inquebrantable a las doctrinas de la gracia." },
      controversies: { title: "Controversias", desc: "Las batallas por la verdad: Regeneración Bautismal y la Controversia del Declive." },
      preacher: { title: "El Predicador y Su Obra", desc: "Su homilética, el Colegio de Pastores y su profunda influencia en los ministros." },
      articles: "Artículos"
    },
    quote: "Visita muchos libros buenos, pero vive en la Biblia.",
    readMore: "Leer artículos relacionados",
    readMoreLess: "Ocultar artículos",
    timeline: [
      { year: '1834', title: 'Nacimiento en Kelvedon', desc: 'Charles Haddon Spurgeon nació el 19 de junio de 1834, en Kelvedon, Essex, Inglaterra, hijo de un ministro inconformista.', relatedSlugs: ['biography/the-kelvedon-years'] },
      { year: '1835', title: 'Con sus Abuelos', desc: 'Spurgeon pasó sus años de formación con su abuelo, un pastor congregacional, lo que moldeó profundamente su fe temprana.', relatedSlugs: ['biography/the-stambourne-influence'] },
      { year: '1850', title: 'Conversión a los 15', desc: 'En una mañana nevada, una fuerte tormenta lo obligó a entrar en una pequeña capilla Metodista Primitiva en Artillery Street. Un predicador laico sustituto predicó de Isaías 45:22.', quote: '"Fijando sus ojos en mí, como si conociera todo mi corazón, dijo: \'Joven, te ves muy miserable. ... Joven, mira a Jesucristo. ¡Mira! ¡Mira! ¡Mira! No tienes nada que hacer sino mirar y vivir.\' ... Miré hasta casi perder la vista. Allí mismo la nube se fue, la oscuridad desapareció, y en ese momento vi el sol."', quoteSource: 'Autobiografía de C. H. Spurgeon, Vol. 1', relatedSlugs: ['biography/the-snowstorm-conversion'] },
      { year: '1851', title: 'Primer Sermón Predicado', desc: 'A los 16 años, Spurgeon predicó su primer sermón en una cabaña en Teversham, siendo rápidamente reconocido por sus dones extraordinarios.', relatedSlugs: ['biography/the-boy-preacher-of-the-fens'] },
      { year: '1852', title: 'Pastor en Waterbeach', desc: 'Con solo 17 años, se convirtió en pastor de la Capilla Bautista de Waterbeach, transformando una pequeña congregación de aldea.', relatedSlugs: ['biography/the-waterbeach-ministry'] },
      { year: '1854', title: 'Llamado a New Park Street', desc: 'A los 19 años, fue llamado a la histórica Capilla de New Park Street en Londres. Las multitudes desbordaron rápidamente el edificio.', relatedSlugs: ['biography/the-call-to-london'] },
      { year: '1856', title: 'Surrey Gardens Music Hall', desc: 'Los servicios se trasladaron al Surrey Gardens Music Hall, atrayendo a más de 10,000 personas — un récord histórico de predicación.', relatedSlugs: ['biography/the-surrey-gardens-tragedy'] },
      { year: '1857', title: 'Predica a 23,000', desc: 'Spurgeon predicó a 23,654 personas en el Crystal Palace. Días antes, al probar la acústica, llevó inadvertidamente a un trabajador a la conversión.', quote: '"Para probar las propiedades acústicas del edificio, grité con voz fuerte: \'He aquí el Cordero de Dios, que quita el pecado del mundo.\' En una de las galerías, un trabajador que no sabía nada de lo que se estaba haciendo escuchó las palabras, y llegaron como un mensaje del cielo a su alma."', quoteSource: 'Autobiografía de C. H. Spurgeon, Vol. 2', relatedSlugs: ['preacher/the-voice-of-spurgeon'] },
      { year: '1861', title: 'Apertura del Tabernáculo Metropolitano', desc: 'El Tabernáculo Metropolitano, con capacidad para 6,000 personas, abrió sus puertas y se convirtió en el epicentro de su ministerio durante tres décadas.', relatedSlugs: ['biography/the-metropolitan-tabernacle'] },
      { year: '1865', title: 'Revista La Espada y la Cuchara', desc: 'Lanzó la revista mensual "La Espada y la Cuchara", compartiendo sermones, reseñas y noticias del ministerio.', relatedSlugs: ['preacher/the-printed-page'] },
      { year: '1867', title: 'Orfanato Stockwell', desc: 'Spurgeon abrió el Orfanato Stockwell, que llegó a albergar y educar a más de 500 niños a la vez.', relatedSlugs: ['preacher/the-stockwell-orphanage'] },
      { year: '1887', title: 'Controversia del Declive', desc: 'Se retiró de la Unión Bautista por compromisos doctrinales — una postura valiente que le costó muchas amistades.', relatedSlugs: ['controversies/the-downgrade-controversy-part-1', 'controversies/the-downgrade-controversy-part-2', 'controversies/the-downgrade-controversy-part-3'] },
      { year: '1892', title: 'Legado Eterno', desc: 'Spurgeon fue a la gloria el 31 de enero de 1892. Dejó atrás 63 volúmenes de sermones, más de 135 libros y un legado que moldeó a la Iglesia global.', relatedSlugs: ['biography/the-prince-goes-to-glory', 'biography/the-final-years', 'biography/the-mentone-retreats'] },
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
