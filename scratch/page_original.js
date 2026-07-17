import Link from 'next/link';
import AboutArticleList from '@/app/components/AboutArticleList';
import { getAllArticles } from '@/lib/articles';

const translations = {
  en: {
    heroEyebrow: "1834 ÔÇô 1892",
    heroTitle: "Charles Haddon",
    heroSubtitle: "Spurgeon",
    whoWasTitle: "Who was Spurgeon?",
    whoWasP1: "Charles Haddon Spurgeon (1834ÔÇô1892) was a British Particular Baptist preacher, widely considered the most influential preacher of the 19th century. His ministerial career was marked by an unwavering devotion to Scripture and a singular ability to communicate profound truths in an accessible and vivid way.",
    whoWasP2: "Converted at age 15, Spurgeon preached his first sermon at 16, became a pastor at 17, and was already attracting crowds in the thousands before age 20. At his peak, he preached to over 10,000 people weekly at the Metropolitan Tabernacle in London.",
    whoWasP3: "During his nearly forty years of active ministry, Spurgeon preached over 3,500 sermons, published weekly and distributed throughout the English-speaking world ÔÇö and translated into dozens of languages. He also founded an orphanage, a pastors' college and a publishing house.",
    whoWasP4: "His literary legacy ÔÇö 63 volumes of sermons and over 135 books ÔÇö remains as one of the greatest individual outputs in the history of Christian literature. His works are read, preached, and studied to this day by pastors, theologians, and laymen worldwide.",
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
      { year: '1850', title: 'Conversion at 15', desc: 'On a snowy morning, a severe storm forced him into a small Primitive Methodist chapel on Artillery Street. A substitute lay-preacher preached from Isaiah 45:22.', quote: '"Just fixing his eyes on me, as if he knew all my heart, he said, \'Young man, you look very miserable. ... Young man, look to Jesus Christ. Look! Look! Look! You have nothinÔÇÖ to do but to look and live.\' ... I looked until I could almost have looked my eyes away. There and then the cloud was gone, the darkness had rolled away, and that moment I saw the sun."', quoteSource: 'C. H. SpurgeonÔÇÖs Autobiography, Vol. 1', relatedSlugs: ['biography/the-snowstorm-conversion'] },
      { year: '1851', title: 'First Sermon Preached', desc: 'At 16, Spurgeon preached his first sermon in a cottage in Teversham, quickly becoming recognized for his extraordinary gifts.', relatedSlugs: ['biography/the-boy-preacher-of-the-fens'] },
      { year: '1852', title: 'Pastor in Waterbeach', desc: 'At just 17 years old, he became pastor of the Waterbeach Baptist Chapel, transforming a small village congregation.', relatedSlugs: ['biography/the-waterbeach-ministry'] },
      { year: '1854', title: 'Called to New Park Street', desc: 'At 19, he was called to the historic New Park Street Chapel in London. Crowds quickly overflowed the building.', relatedSlugs: ['biography/the-call-to-london'] },
      { year: '1856', title: 'Surrey Gardens Music Hall', desc: 'Services were moved to the Surrey Gardens Music Hall, attracting over 10,000 people ÔÇö a historical record for preaching.', relatedSlugs: ['biography/the-surrey-gardens-tragedy'] },
      { year: '1857', title: 'Preaches to 23,000', desc: 'Spurgeon preached to 23,654 people at the Crystal Palace. Days before, he tested the acoustics, inadvertently leading to the conversion of a worker.', quote: '"In order to test the acoustic properties of the building, I cried in a loud voice, \'Behold the Lamb of God, which taketh away the sin of the world.\' In one of the galleries, a workman, who knew nothing of what was being done, heard the words, and they came like a message from heaven to his soul."', quoteSource: 'C. H. SpurgeonÔÇÖs Autobiography, Vol. 2', relatedSlugs: ['preacher/the-voice-of-spurgeon'] },
      { year: '1861', title: 'Opening of the Metropolitan Tabernacle', desc: 'The Metropolitan Tabernacle, with a seating capacity of 6,000, opened its doors and became the epicenter of his ministry for three decades.', relatedSlugs: ['biography/the-metropolitan-tabernacle'] },
      { year: '1865', title: 'The Sword and the Trowel Magazine', desc: 'Launched the monthly magazine "The Sword and the Trowel", sharing sermons, reviews, and ministry news.', relatedSlugs: ['preacher/the-printed-page'] },
      { year: '1867', title: 'Stockwell Orphanage', desc: 'Spurgeon opened the Stockwell Orphanage, which eventually housed and educated over 500 children at a time.', relatedSlugs: ['preacher/the-stockwell-orphanage'] },
      { year: '1887', title: 'Downgrade Controversy', desc: 'Withdrew from the Baptist Union over doctrinal compromises ÔÇö a courageous stand that cost him many friendships.', relatedSlugs: ['controversies/the-downgrade-controversy-part-1', 'controversies/the-downgrade-controversy-part-2', 'controversies/the-downgrade-controversy-part-3'] },
      { year: '1892', title: 'Eternal Legacy', desc: 'Spurgeon went to glory on January 31, 1892. He left behind 63 volumes of sermons, over 135 books, and a legacy that shaped the global Church.', relatedSlugs: ['biography/the-prince-goes-to-glory', 'biography/the-final-years', 'biography/the-mentone-retreats'] },
    ]
  },
  pt: {
    heroEyebrow: "1834 ÔÇô 1892",
    heroTitle: "Charles Haddon",
    heroSubtitle: "Spurgeon",
    whoWasTitle: "Quem foi Spurgeon?",
    whoWasP1: "Charles Haddon Spurgeon (1834ÔÇô1892) foi um pregador Batista Particular brit├ónico, amplamente considerado o pregador mais influente do s├®culo XIX. Sua carreira ministerial foi marcada por uma devo├º├úo inabal├ível ├ás Escrituras e uma capacidade singular de comunicar verdades profundas de forma acess├¡vel e v├¡vida.",
    whoWasP2: "Convertido aos 15 anos, Spurgeon pregou seu primeiro serm├úo aos 16, tornou-se pastor aos 17, e j├í atra├¡a multid├Áes aos milhares antes dos 20 anos. No auge, ele pregava para mais de 10.000 pessoas semanalmente no Tabern├ículo Metropolitano de Londres.",
    whoWasP3: "Durante seus quase quarenta anos de minist├®rio ativo, Spurgeon pregou mais de 3.500 serm├Áes, publicados semanalmente e distribu├¡dos por todo o mundo de l├¡ngua inglesa ÔÇö e traduzidos para dezenas de idiomas. Ele tamb├®m fundou um orfanato, um col├®gio de pastores e uma editora.",
    whoWasP4: "Seu legado liter├írio ÔÇö 63 volumes de serm├Áes e mais de 135 livros ÔÇö permanece como uma das maiores produ├º├Áes individuais na hist├│ria da literatura crist├ú. Suas obras s├úo lidas, pregadas e estudadas at├® hoje por pastores, te├│logos e leigos em todo o mundo.",
    stats: {
      sermons: "Serm├Áes Pregados",
      books: "Livros Publicados",
      volumes: "Volumes de Serm├Áes",
      members: "Membros da Igreja"
    },
    timelineTitle: "Linha do Tempo",
    timelineSubtitle: "Uma vida dedicada a pregar Cristo",
    exploreTitle: "Explore Mais",
    categories: {
      biography: { title: "Biografia Completa", desc: "A narrativa completa de sua vida, repleta de relatos em primeira m├úo e cartas." },
      theology: { title: "Sua Teologia", desc: "Logo exploraremos suas convic├º├Áes, seu evangelismo incisivo e sua devo├º├úo inabal├ível ├ás doutrinas da gra├ºa." },
      controversies: { title: "Controv├®rsias", desc: "As batalhas pela verdade: Regenera├º├úo Batismal e a Controv├®rsia do Decl├¡nio." },
      preacher: { title: "O Pregador e Sua Obra", desc: "Sua homil├®tica, o Col├®gio de Pastores e sua profunda influ├¬ncia sobre ministros." },
      articles: "Artigos"
    },
    quote: "Visite muitos livros bons, mas viva na B├¡blia.",
    readMore: "Ler artigos relacionados",
    readMoreLess: "Ocultar artigos",
    timeline: [
      { year: '1834', title: 'Nascimento em Kelvedon', desc: 'Charles Haddon Spurgeon nasceu em 19 de junho de 1834, em Kelvedon, Essex, Inglaterra, filho de um ministro N├úo-Conformista.', relatedSlugs: ['biography/the-kelvedon-years'] },
      { year: '1835', title: 'Com os Av├│s', desc: 'Spurgeon passou os anos de forma├º├úo com seu av├┤, um pastor congregacional, o que moldou profundamente sua f├® inicial.', relatedSlugs: ['biography/the-stambourne-influence'] },
      { year: '1850', title: 'Convers├úo aos 15', desc: 'Em uma manh├ú nevada, uma forte tempestade o for├ºou a entrar em uma pequena capela Metodista Primitiva na Artillery Street. Um pregador leigo substituto pregou em Isa├¡as 45:22.', quote: '"Apenas fixando seus olhos em mim, como se conhecesse todo o meu cora├º├úo, ele disse: \'Jovem, voc├¬ parece muito miser├ível. ... Jovem, olhe para Jesus Cristo. Olhe! Olhe! Olhe! Voc├¬ n├úo tem nada a fazer sen├úo olhar e viver.\' ... Olhei at├® quase perder a vis├úo. Ali mesmo a nuvem se foi, a escurid├úo se dissipou, e naquele momento eu vi o sol."', quoteSource: 'Autobiografia de C. H. Spurgeon, Vol. 1', relatedSlugs: ['biography/the-snowstorm-conversion'] },
      { year: '1851', title: 'Primeiro Serm├úo', desc: 'Aos 16 anos, Spurgeon pregou seu primeiro serm├úo numa cabana em Teversham, sendo rapidamente reconhecido por seus dons extraordin├írios.', relatedSlugs: ['biography/the-boy-preacher-of-the-fens'] },
      { year: '1852', title: 'Pastor em Waterbeach', desc: 'Com apenas 17 anos, tornou-se pastor da Capela Batista de Waterbeach, transformando uma pequena congrega├º├úo de vilarejo.', relatedSlugs: ['biography/the-waterbeach-ministry'] },
      { year: '1854', title: 'Chamado para New Park Street', desc: 'Aos 19 anos, foi chamado para a hist├│rica Capela de New Park Street em Londres. Multid├Áes rapidamente lotaram o pr├®dio.', relatedSlugs: ['biography/the-call-to-london'] },
      { year: '1856', title: 'Surrey Gardens Music Hall', desc: 'Os cultos foram transferidos para o Surrey Gardens Music Hall, atraindo mais de 10.000 pessoas ÔÇö um recorde hist├│rico para prega├º├úo.', relatedSlugs: ['biography/the-surrey-gardens-tragedy'] },
      { year: '1857', title: 'Pregando para 23.000', desc: 'Spurgeon pregou para 23.654 pessoas no Crystal Palace. Dias antes, ao testar a ac├║stica, levou inadvertidamente um trabalhador ├á convers├úo.', quote: '"Para testar as propriedades ac├║sticas do pr├®dio, gritei em alta voz: \'Eis o Cordeiro de Deus, que tira o pecado do mundo.\' Numa das galerias, um trabalhador que nada sabia do que estava sendo feito ouviu as palavras, e elas vieram como uma mensagem do c├®u ├á sua alma."', quoteSource: 'Autobiografia de C. H. Spurgeon, Vol. 2', relatedSlugs: ['preacher/the-voice-of-spurgeon'] },
      { year: '1861', title: 'Abertura do Tabern├ículo Metropolitano', desc: 'O Tabern├ículo Metropolitano, com capacidade para 6.000 pessoas sentadas, abriu as portas e tornou-se o epicentro do seu minist├®rio por tr├¬s d├®cadas.', relatedSlugs: ['biography/the-metropolitan-tabernacle'] },
      { year: '1865', title: 'Revista A Espada e a Esp├ítula', desc: 'Lan├ºou a revista mensal "A Espada e a Esp├ítula", compartilhando serm├Áes, resenhas e not├¡cias do minist├®rio.', relatedSlugs: ['preacher/the-printed-page'] },
      { year: '1867', title: 'Orfanato Stockwell', desc: 'Spurgeon abriu o Orfanato Stockwell, que chegou a abrigar e educar mais de 500 crian├ºas simultaneamente.', relatedSlugs: ['preacher/the-stockwell-orphanage'] },
      { year: '1887', title: 'Controv├®rsia do Decl├¡nio', desc: 'Retirou-se da Uni├úo Batista devido a concess├Áes doutrin├írias ÔÇö uma posi├º├úo corajosa que lhe custou muitas amizades.', relatedSlugs: ['controversies/the-downgrade-controversy-part-1', 'controversies/the-downgrade-controversy-part-2', 'controversies/the-downgrade-controversy-part-3'] },
      { year: '1892', title: 'Legado Eterno', desc: 'Spurgeon foi para a gl├│ria em 31 de janeiro de 1892. Deixou para tr├ís 63 volumes de serm├Áes, mais de 135 livros e um legado que moldou a Igreja global.', relatedSlugs: ['biography/the-prince-goes-to-glory', 'biography/the-final-years', 'biography/the-mentone-retreats'] },
    ]
  },
  es: {
    heroEyebrow: "1834 ÔÇô 1892",
    heroTitle: "Charles Haddon",
    heroSubtitle: "Spurgeon",
    whoWasTitle: "┬┐Qui├®n fue Spurgeon?",
    whoWasP1: "Charles Haddon Spurgeon (1834ÔÇô1892) fue un predicador bautista particular brit├ínico, ampliamente considerado el predicador m├ís influyente del siglo XIX. Su carrera ministerial estuvo marcada por una devoci├│n inquebrantable a las Escrituras y una capacidad singular para comunicar verdades profundas de manera accesible y v├¡vida.",
    whoWasP2: "Convertido a los 15 a├▒os, Spurgeon predic├│ su primer serm├│n a los 16, se convirti├│ en pastor a los 17, y ya atra├¡a multitudes de miles antes de los 20. En su apogeo, predic├│ a m├ís de 10,000 personas semanalmente en el Tabern├ículo Metropolitano de Londres.",
    whoWasP3: "Durante sus casi cuarenta a├▒os de ministerio activo, Spurgeon predic├│ m├ís de 3,500 sermones, publicados semanalmente y distribuidos por todo el mundo de habla inglesa ÔÇö y traducidos a docenas de idiomas. Tambi├®n fund├│ un orfanato, un colegio de pastores y una editorial.",
    whoWasP4: "Su legado literario ÔÇö 63 vol├║menes de sermones y m├ís de 135 libros ÔÇö sigue siendo una de las mayores producciones individuales en la historia de la literatura cristiana. Sus obras son le├¡das, predicadas y estudiadas hasta el d├¡a de hoy por pastores, te├│logos y laicos en todo el mundo.",
    stats: {
      sermons: "Sermones Predicados",
      books: "Libros Publicados",
      volumes: "Vol├║menes de Sermones",
      members: "Miembros de la Iglesia"
    },
    timelineTitle: "L├¡nea de Tiempo",
    timelineSubtitle: "Una vida dedicada a predicar a Cristo",
    exploreTitle: "Explorar M├ís",
    categories: {
      biography: { title: "Biograf├¡a Completa", desc: "La narrativa completa de su vida, llena de relatos de primera mano y cartas." },
      theology: { title: "Su Teolog├¡a", desc: "Pronto exploraremos sus convicciones, su evangelismo incisivo y su devoci├│n inquebrantable a las doctrinas de la gracia." },
      controversies: { title: "Controversias", desc: "Las batallas por la verdad: Regeneraci├│n Bautismal y la Controversia del Declive." },
      preacher: { title: "El Predicador y Su Obra", desc: "Su homil├®tica, el Colegio de Pastores y su profunda influencia en los ministros." },
      articles: "Art├¡culos"
    },
    quote: "Visita muchos libros buenos, pero vive en la Biblia.",
    readMore: "Leer art├¡culos relacionados",
    readMoreLess: "Ocultar art├¡culos",
    timeline: [
      { year: '1834', title: 'Nacimiento en Kelvedon', desc: 'Charles Haddon Spurgeon naci├│ el 19 de junio de 1834, en Kelvedon, Essex, Inglaterra, hijo de un ministro inconformista.', relatedSlugs: ['biography/the-kelvedon-years'] },
      { year: '1835', title: 'Con sus Abuelos', desc: 'Spurgeon pas├│ sus a├▒os de formaci├│n con su abuelo, un pastor congregacional, lo que molde├│ profundamente su fe temprana.', relatedSlugs: ['biography/the-stambourne-influence'] },
      { year: '1850', title: 'Conversi├│n a los 15', desc: 'En una ma├▒ana nevada, una fuerte tormenta lo oblig├│ a entrar en una peque├▒a capilla Metodista Primitiva en Artillery Street. Un predicador laico sustituto predic├│ de Isa├¡as 45:22.', quote: '"Fijando sus ojos en m├¡, como si conociera todo mi coraz├│n, dijo: \'Joven, te ves muy miserable. ... Joven, mira a Jesucristo. ┬íMira! ┬íMira! ┬íMira! No tienes nada que hacer sino mirar y vivir.\' ... Mir├® hasta casi perder la vista. All├¡ mismo la nube se fue, la oscuridad desapareci├│, y en ese momento vi el sol."', quoteSource: 'Autobiograf├¡a de C. H. Spurgeon, Vol. 1', relatedSlugs: ['biography/the-snowstorm-conversion'] },
      { year: '1851', title: 'Primer Serm├│n Predicado', desc: 'A los 16 a├▒os, Spurgeon predic├│ su primer serm├│n en una caba├▒a en Teversham, siendo r├ípidamente reconocido por sus dones extraordinarios.', relatedSlugs: ['biography/the-boy-preacher-of-the-fens'] },
      { year: '1852', title: 'Pastor en Waterbeach', desc: 'Con solo 17 a├▒os, se convirti├│ en pastor de la Capilla Bautista de Waterbeach, transformando una peque├▒a congregaci├│n de aldea.', relatedSlugs: ['biography/the-waterbeach-ministry'] },
      { year: '1854', title: 'Llamado a New Park Street', desc: 'A los 19 a├▒os, fue llamado a la hist├│rica Capilla de New Park Street en Londres. Las multitudes desbordaron r├ípidamente el edificio.', relatedSlugs: ['biography/the-call-to-london'] },
      { year: '1856', title: 'Surrey Gardens Music Hall', desc: 'Los servicios se trasladaron al Surrey Gardens Music Hall, atrayendo a m├ís de 10,000 personas ÔÇö un r├®cord hist├│rico de predicaci├│n.', relatedSlugs: ['biography/the-surrey-gardens-tragedy'] },
      { year: '1857', title: 'Predica a 23,000', desc: 'Spurgeon predic├│ a 23,654 personas en el Crystal Palace. D├¡as antes, al probar la ac├║stica, llev├│ inadvertidamente a un trabajador a la conversi├│n.', quote: '"Para probar las propiedades ac├║sticas del edificio, grit├® con voz fuerte: \'He aqu├¡ el Cordero de Dios, que quita el pecado del mundo.\' En una de las galer├¡as, un trabajador que no sab├¡a nada de lo que se estaba haciendo escuch├│ las palabras, y llegaron como un mensaje del cielo a su alma."', quoteSource: 'Autobiograf├¡a de C. H. Spurgeon, Vol. 2', relatedSlugs: ['preacher/the-voice-of-spurgeon'] },
      { year: '1861', title: 'Apertura del Tabern├ículo Metropolitano', desc: 'El Tabern├ículo Metropolitano, con capacidad para 6,000 personas, abri├│ sus puertas y se convirti├│ en el epicentro de su ministerio durante tres d├®cadas.', relatedSlugs: ['biography/the-metropolitan-tabernacle'] },
      { year: '1865', title: 'Revista La Espada y la Cuchara', desc: 'Lanz├│ la revista mensual "La Espada y la Cuchara", compartiendo sermones, rese├▒as y noticias del ministerio.', relatedSlugs: ['preacher/the-printed-page'] },
      { year: '1867', title: 'Orfanato Stockwell', desc: 'Spurgeon abri├│ el Orfanato Stockwell, que lleg├│ a albergar y educar a m├ís de 500 ni├▒os a la vez.', relatedSlugs: ['preacher/the-stockwell-orphanage'] },
      { year: '1887', title: 'Controversia del Declive', desc: 'Se retir├│ de la Uni├│n Bautista por compromisos doctrinales ÔÇö una postura valiente que le cost├│ muchas amistades.', relatedSlugs: ['controversies/the-downgrade-controversy-part-1', 'controversies/the-downgrade-controversy-part-2', 'controversies/the-downgrade-controversy-part-3'] },
      { year: '1892', title: 'Legado Eterno', desc: 'Spurgeon fue a la gloria el 31 de enero de 1892. Dej├│ atr├ís 63 vol├║menes de sermones, m├ís de 135 libros y un legado que molde├│ a la Iglesia global.', relatedSlugs: ['biography/the-prince-goes-to-glory', 'biography/the-final-years', 'biography/the-mentone-retreats'] },
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
                      <cite style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', textAlign: 'right' }}>ÔÇö {item.quoteSource}</cite>
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
                              <span style={{ position: 'absolute', left: '-1rem', color: 'var(--accent)', fontSize: '0.8rem' }}>ÔÇó</span>
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
          <cite className="quote-author">ÔÇö Charles H. Spurgeon</cite>
        </div>
      </section>
    </div>
  );
}
