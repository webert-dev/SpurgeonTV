import Link from 'next/link';

export const revalidate = false;

export const metadata = {
  title: 'About Us | Spurgeon TV',
  description: 'Who we are and our mission at SpurgeonTV.',
};

const translations = {
  pt: {
    title: "Sobre Nós",
    subtitle: "Equipe Evangelística Spurgeon TV",
    intro: "Conheça quem está por trás deste projeto, no que cremos e como você pode fazer parte.",
    mission: {
      title: "Quem Somos e Nossa Missão",
      text: "Somos um grupo de cristãos de várias denominações evangélicas unidos por um propósito firme: proclamar o Evangelho fiel e edificar a Igreja de Cristo. Disponibilizamos conhecimento teológico profundo de forma online e impressa, fundamentados no chamado para fazer discípulos e edificar os santos.",
      verses: [
        { id: "mission-1", ref: "Marcos 16:15", text: "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura.", link: "Mark&chapter=16" },
        { id: "mission-2", ref: "Efésios 4:12", text: "Querendo o aperfeiçoamento dos santos, para a obra do ministério, para edificação do corpo de Cristo.", link: "Ephesians&chapter=4" }
      ]
    },
    valuesTitle: "Nossos Valores",
    values: [
      {
        title: "Autoridade Bíblica (Sola Scriptura)",
        desc: "Todo o conteúdo que disponibilizamos visa apontar para a inerrância e suficiência das Sagradas Escrituras como nossa única regra de fé e prática.",
        verseId: "val-1", ref: "2 Timóteo 3:16-17",
        text: "Toda a Escritura é divinamente inspirada, e proveitosa para ensinar, para redargüir, para corrigir, para instruir em justiça; Para que o homem de Deus seja perfeito, e perfeitamente instruído para toda a boa obra.", link: "2%20Timothy&chapter=3"
      },
      {
        title: "Centralidade de Cristo",
        desc: "Anunciamos que toda promessa messiânica do Antigo Testamento se cumpriu perfeitamente em Jesus, o Cristo, o centro de toda a Escritura.",
        verseId: "val-2", ref: "Lucas 24:27",
        text: "E, começando por Moisés, e por todos os profetas, explicava-lhes o que dele se achava em todas as Escrituras.", link: "Luke&chapter=24"
      },
      {
        title: "Fidelidade ao Evangelho",
        desc: "Temos um compromisso inegociável com a sã doutrina e o evangelho da graça, opondo-nos a qualquer distorção da Palavra de Deus.",
        verseId: "val-3", ref: "Gálatas 1:8",
        text: "Mas, ainda que nós mesmos ou um anjo do céu vos anuncie outro evangelho além do que já vos tenho anunciado, seja anátema.", link: "Galatians&chapter=1"
      },
      {
        title: "Acessibilidade e Gratuidade",
        desc: "Acreditamos que o Evangelho é de graça, e portanto, este material teológico também deve ser alcançável a todos, sem barreiras financeiras.",
        verseId: "val-4", ref: "Mateus 10:8",
        text: "Curai os enfermos, limpai os leprosos, ressuscitai os mortos, expulsai os demônios; de graça recebestes, de graça dai.", link: "Matthew&chapter=10"
      },
      {
        title: "Excelência para a Glória de Deus",
        desc: "Buscamos realizar o melhor trabalho técnico e de tradução possível, pois fazemos tudo para a glória do Senhor.",
        verseId: "val-5", ref: "Colossenses 3:23",
        text: "E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor, e não aos homens.", link: "Colossians&chapter=3"
      }
    ],
    creedTitle: "Em que Cremos",
    creed: [
      {
        title: "As Escrituras Sagradas",
        desc: "Cremos que a Bíblia é a Palavra de Deus, inerrante, infalível e nossa única regra de fé e prática.",
        verseId: "cred-1", ref: "Salmos 119:105", text: "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.", link: "Psalms&chapter=119"
      },
      {
        title: "A Trindade",
        desc: "Cremos no único Deus vivo e verdadeiro, existindo eternamente em três pessoas: Pai, Filho e Espírito Santo.",
        verseId: "cred-2", ref: "2 Coríntios 13:14", text: "A graça do Senhor Jesus Cristo, e o amor de Deus, e a comunhão do Espírito Santo seja com todos vós. Amém.", link: "2%20Corinthians&chapter=13"
      },
      {
        title: "A Obra de Cristo",
        desc: "Cremos na divindade de Jesus Cristo, seu nascimento virginal, vida sem pecado, morte expiatória, ressurreição corporal e seu retorno em glória.",
        verseId: "cred-3", ref: "1 Pedro 2:24", text: "Levando ele mesmo em seu corpo os nossos pecados sobre o madeiro, para que, mortos para os pecados, pudéssemos viver para a justiça; e pelas suas feridas fostes sarados.", link: "1%20Peter&chapter=2"
      },
      {
        title: "Salvação Exclusiva pela Graça",
        desc: "Cremos que a salvação é um dom gratuito, alcançada unicamente pela graça mediante a fé em Cristo, não por obras.",
        verseId: "cred-4", ref: "Efésios 2:8-9", text: "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie.", link: "Ephesians&chapter=2"
      },
      {
        title: "A Igreja e a Grande Comissão",
        desc: "Cremos que a Igreja é chamada a glorificar a Deus e fazer discípulos de todas as nações.",
        verseId: "cred-5", ref: "Mateus 28:19", text: "Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo.", link: "Matthew&chapter=28"
      }
    ],
    journey: {
      title: "Nossa Jornada",
      text: "Ainda estamos no início, mas temos o prazer de ter começado apesar dos escassos recursos materiais e de tempo. Cada sermão traduzido e página criada é um passo de fé."
    },
    support: {
      title: "Como Você Pode Apoiar",
      intro: "Você pode apoiar essa iniciativa de várias formas:",
      list: [
        { text: "Com orações pelo nosso projeto e equipe" },
        { text: "Com a divulgação para quem precisa conhecer estas obras" },
        { text: "Apontando pontos de melhoria e/ou correção no site", linkText: "entre em contato", linkKey: "contact" },
        { text: "Com apoio financeiro para mantermos os servidores", linkText: "Apoiar no Throne ❤️", linkKey: "throne" }
      ]
    },
    contact: {
      title: "Fale Conosco",
      desc: "Quer enviar uma correção, sugestão ou palavra de encorajamento?",
      btn: "Entrar em Contato"
    },
    footerTitle: "Referências Bíblicas",
    footerReadChapter: "Ler capítulo completo"
  },
  en: {
    title: "About Us",
    subtitle: "Spurgeon TV Evangelistic Team",
    intro: "Learn who is behind this project, what we believe, and how you can be a part of it.",
    mission: {
      title: "Who We Are & Our Mission",
      text: "We are a group of Christians from various evangelical denominations united by a firm purpose: to proclaim the faithful Gospel and edify the Church of Christ. We provide deep theological knowledge online and in print, grounded in the call to make disciples and edify the saints.",
      verses: [
        { id: "mission-1", ref: "Mark 16:15", text: "And he said unto them, Go ye into all the world, and preach the gospel to every creature.", link: "Mark&chapter=16" },
        { id: "mission-2", ref: "Ephesians 4:12", text: "For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ.", link: "Ephesians&chapter=4" }
      ]
    },
    valuesTitle: "Our Values",
    values: [
      {
        title: "Biblical Authority (Sola Scriptura)",
        desc: "All the content we provide aims to point to the inerrancy and sufficiency of the Holy Scriptures as our only rule of faith and practice.",
        verseId: "val-1", ref: "2 Timothy 3:16-17",
        text: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works.", link: "2%20Timothy&chapter=3"
      },
      {
        title: "Christ-Centeredness",
        desc: "We announce that every messianic promise of the Old Testament was perfectly fulfilled in Jesus, the Christ, the center of all Scripture.",
        verseId: "val-2", ref: "Luke 24:27",
        text: "And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself.", link: "Luke&chapter=24"
      },
      {
        title: "Faithfulness to the Gospel",
        desc: "We have an uncompromising commitment to sound doctrine and the gospel of grace, opposing any distortion of the Word of God.",
        verseId: "val-3", ref: "Galatians 1:8",
        text: "But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed.", link: "Galatians&chapter=1"
      },
      {
        title: "Accessibility and Gracelessness",
        desc: "We believe the Gospel is free, and therefore, this theological material must also be reachable to all, without financial barriers.",
        verseId: "val-4", ref: "Matthew 10:8",
        text: "Heal the sick, cleanse the lepers, raise the dead, cast out devils: freely ye have received, freely give.", link: "Matthew&chapter=10"
      },
      {
        title: "Excellence for the Glory of God",
        desc: "We seek to do the best technical and translation work possible, because we do everything for the glory of the Lord.",
        verseId: "val-5", ref: "Colossians 3:23",
        text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.", link: "Colossians&chapter=3"
      }
    ],
    creedTitle: "What We Believe",
    creed: [
      {
        title: "The Holy Scriptures",
        desc: "We believe the Bible is the Word of God, inerrant, infallible, and our only rule of faith and practice.",
        verseId: "cred-1", ref: "Psalms 119:105", text: "Thy word is a lamp unto my feet, and a light unto my path.", link: "Psalms&chapter=119"
      },
      {
        title: "The Trinity",
        desc: "We believe in the one living and true God, eternally existing in three persons: Father, Son, and Holy Spirit.",
        verseId: "cred-2", ref: "2 Corinthians 13:14", text: "The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all. Amen.", link: "2%20Corinthians&chapter=13"
      },
      {
        title: "The Work of Christ",
        desc: "We believe in the deity of Jesus Christ, His virgin birth, sinless life, substitutionary death, bodily resurrection, and return in glory.",
        verseId: "cred-3", ref: "1 Peter 2:24", text: "Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.", link: "1%20Peter&chapter=2"
      },
      {
        title: "Salvation by Grace Alone",
        desc: "We believe salvation is a free gift, attained solely by grace through faith in Christ, not by works.",
        verseId: "cred-4", ref: "Ephesians 2:8-9", text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.", link: "Ephesians&chapter=2"
      },
      {
        title: "The Church and the Great Commission",
        desc: "We believe the Church is called to glorify God and make disciples of all nations.",
        verseId: "cred-5", ref: "Matthew 28:19", text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.", link: "Matthew&chapter=28"
      }
    ],
    journey: {
      title: "Our Journey",
      text: "We are still in the beginning, but we are glad to have started despite scarce material resources and time. Every translated sermon and created page is a step of faith."
    },
    support: {
      title: "How You Can Support Us",
      intro: "You can support this initiative in several ways:",
      list: [
        { text: "With prayers for our project and team" },
        { text: "By spreading the word to those who need to know these works" },
        { text: "By pointing out areas for improvement or corrections", linkText: "get in touch", linkKey: "contact" },
        { text: "With financial support to help maintain our servers", linkText: "Support on Throne ❤️", linkKey: "throne" }
      ]
    },
    contact: {
      title: "Contact Us",
      desc: "Want to send a correction, suggestion, or a word of encouragement?",
      btn: "Get in Touch"
    },
    footerTitle: "Biblical References",
    footerReadChapter: "Read full chapter"
  },
  es: {
    title: "Sobre Nosotros",
    subtitle: "Equipo Evangelístico Spurgeon TV",
    intro: "Conozca quién está detrás de este proyecto, en qué creemos y cómo puede ser parte.",
    mission: {
      title: "Quiénes Somos y Nuestra Misión",
      text: "Somos un grupo de cristianos de varias denominaciones evangélicas unidos por un propósito firme: proclamar el Evangelio fiel y edificar la Iglesia de Cristo. Proporcionamos profundo conocimiento teológico en línea e impreso, fundamentados en el llamado a hacer discípulos y edificar a los santos.",
      verses: [
        { id: "mission-1", ref: "Marcos 16:15", text: "Y les dijo: Id por todo el mundo y predicad el evangelio a toda criatura.", link: "Mark&chapter=16" },
        { id: "mission-2", ref: "Efesios 4:12", text: "A fin de perfeccionar a los santos para la obra del ministerio, para la edificación del cuerpo de Cristo.", link: "Ephesians&chapter=4" }
      ]
    },
    valuesTitle: "Nuestros Valores",
    values: [
      {
        title: "Autoridad Bíblica (Sola Scriptura)",
        desc: "Todo el contenido que proporcionamos apunta a la inerrancia y suficiencia de las Sagradas Escrituras como nuestra única regla de fe y práctica.",
        verseId: "val-1", ref: "2 Timoteo 3:16-17",
        text: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.", link: "2%20Timothy&chapter=3"
      },
      {
        title: "Cristocentrismo",
        desc: "Anunciamos que toda promesa mesiánica del Antiguo Testamento se cumplió perfectamente en Jesús, el Cristo, el centro de toda la Escritura.",
        verseId: "val-2", ref: "Lucas 24:27",
        text: "Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían.", link: "Luke&chapter=24"
      },
      {
        title: "Fidelidad al Evangelio",
        desc: "Tenemos un compromiso innegociable con la sana doctrina y el evangelio de la gracia, oponiéndonos a cualquier distorsión de la Palabra de Dios.",
        verseId: "val-3", ref: "Gálatas 1:8",
        text: "Mas si aun nosotros, o un ángel del cielo, os anunciare otro evangelio diferente del que os hemos anunciado, sea anatema.", link: "Galatians&chapter=1"
      },
      {
        title: "Accesibilidad y Gratuidad",
        desc: "Creemos que el Evangelio es gratuito y, por lo tanto, este material teológico también debe ser accesible a todos, sin barreras financieras.",
        verseId: "val-4", ref: "Mateo 10:8",
        text: "Sanad enfermos, limpiad leprosos, resucitad muertos, echad fuera demonios; de gracia recibisteis, dad de gracia.", link: "Matthew&chapter=10"
      },
      {
        title: "Excelencia para la Gloria de Dios",
        desc: "Buscamos hacer el mejor trabajo técnico y de traducción posible, porque hacemos todo para la gloria del Señor.",
        verseId: "val-5", ref: "Colosenses 3:23",
        text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.", link: "Colossians&chapter=3"
      }
    ],
    creedTitle: "En Qué Creemos",
    creed: [
      {
        title: "Las Sagradas Escrituras",
        desc: "Creemos que la Biblia es la Palabra de Dios, inerrante, infalible y nuestra única regla de fe y práctica.",
        verseId: "cred-1", ref: "Salmos 119:105", text: "Lámpara es a mis pies tu palabra, Y lumbrera a mi camino.", link: "Psalms&chapter=119"
      },
      {
        title: "La Trinidad",
        desc: "Creemos en un solo Dios vivo y verdadero, que existe eternamente en tres personas: Padre, Hijo y Espíritu Santo.",
        verseId: "cred-2", ref: "2 Corintios 13:14", text: "La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros. Amén.", link: "2%20Corinthians&chapter=13"
      },
      {
        title: "La Obra de Cristo",
        desc: "Creemos en la deidad de Jesucristo, su nacimiento virginal, vida sin pecado, muerte expiatoria, resurrección corporal y su regreso en gloria.",
        verseId: "cred-3", ref: "1 Pedro 2:24", text: "Quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados.", link: "1%20Peter&chapter=2"
      },
      {
        title: "Salvación Exclusiva por Gracia",
        desc: "Creemos que la salvación es un don gratuito, alcanzado únicamente por gracia mediante la fe en Cristo, no por obras.",
        verseId: "cred-4", ref: "Efesios 2:8-9", text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.", link: "Ephesians&chapter=2"
      },
      {
        title: "La Iglesia y la Gran Comisión",
        desc: "Creemos que la Iglesia está llamada a glorificar a Dios y a hacer discípulos de todas las naciones.",
        verseId: "cred-5", ref: "Mateo 28:19", text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.", link: "Matthew&chapter=28"
      }
    ],
    journey: {
      title: "Nuestro Viaje",
      text: "Todavía estamos en el principio, pero nos alegramos de haber comenzado a pesar de los escasos recursos materiales y de tiempo. Cada página creada es un paso de fe."
    },
    support: {
      title: "Cómo Puede Apoyarnos",
      intro: "Puede apoyar esta iniciativa de varias formas:",
      list: [
        { text: "Con oraciones por nuestro proyecto y equipo" },
        { text: "Difundiendo a quienes necesitan conocer estas obras" },
        { text: "Señalando puntos de mejora y correcciones", linkText: "contáctenos", linkKey: "contact" },
        { text: "Con apoyo financiero para mantener nuestros servidores", linkText: "Apoyar en Throne ❤️", linkKey: "throne" }
      ]
    },
    contact: {
      title: "Contáctenos",
      desc: "¿Desea enviar una corrección, sugerencia o palabra de aliento?",
      btn: "Ponerse en Contacto"
    },
    footerTitle: "Referencias Bíblicas",
    footerReadChapter: "Leer capítulo completo"
  }
};

export default async function AboutUsPage({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;
  
  // Aggregate all verses for the footnote section
  const allVerses = [
    ...(t.mission.verses || []),
    ...(t.values || []),
    ...(t.creed || [])
  ];

  return (
    <div className="policy-container">
      <div className="policy-intro-card">
        <div className="policy-icon">👥</div>
        <h1 className="policy-title">{t.title}</h1>
        <p className="policy-updated" style={{ color: 'var(--text-secondary)' }}>{t.subtitle}</p>
        <p className="policy-intro-text" style={{ marginTop: '1rem' }}>{t.intro}</p>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">📖</span>
          <h2 className="policy-card-title">{t.mission.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>{t.mission.text}</p>
        
        {t.mission.verses && (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
             {t.mission.verses.map(v => (
               <a href={`#${v.verseId || v.id}`} key={v.ref} style={{ fontSize: '0.85rem', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: 'var(--accent)', textDecoration: 'none' }}>
                 {v.ref}
               </a>
             ))}
          </div>
        )}
      </div>
      
      {/* ── VALORES ── */}
      <div className="policy-card">
        <div className="policy-card-header" style={{ marginBottom: '2rem' }}>
          <span className="policy-card-icon">⚓</span>
          <h2 className="policy-card-title">{t.valuesTitle}</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {t.values.map((val, idx) => (
             <div key={idx} style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
               <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{val.title}</h3>
               <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>{val.desc}</p>
               <a href={`#${val.verseId}`} style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                 {val.ref}
               </a>
             </div>
          ))}
        </div>
      </div>
      
      {/* ── EM QUE CREMOS (CREDO) ── */}
      <div className="policy-card">
        <div className="policy-card-header" style={{ marginBottom: '2rem' }}>
          <span className="policy-card-icon">📜</span>
          <h2 className="policy-card-title">{t.creedTitle}</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {t.creed.map((item, idx) => (
             <div key={idx} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--accent)' }}>
               <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h3>
               <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '0.75rem' }}>{item.desc}</p>
               <a href={`#${item.verseId}`} style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                 {item.ref}
               </a>
             </div>
          ))}
        </div>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">🌱</span>
          <h2 className="policy-card-title">{t.journey.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>{t.journey.text}</p>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">🤝</span>
          <h2 className="policy-card-title">{t.support.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{t.support.intro}</p>
        <ul className="policy-list">
          {t.support.list.map((item, i) => (
            <li key={i}>
              {item.text}
              {item.linkKey === 'contact' && (
                <> — <Link href={`/${lang}/contact`} style={{ color: 'var(--accent)', fontWeight: '600', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{item.linkText}</Link></>
              )}
              {item.linkKey === 'throne' && (
                <div style={{ marginTop: '0.75rem' }}>
                  <a
                    href="https://throne.com/spurgeon"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      background: 'var(--accent)',
                      color: '#000',
                      fontWeight: '700',
                      padding: '0.5rem 1.25rem',
                      borderRadius: '999px',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s'
                    }}
                  >
                    {item.linkText}
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="policy-card" style={{ textAlign: 'center' }}>
        <div className="policy-card-header" style={{ justifyContent: 'center' }}>
          <span className="policy-card-icon">✉️</span>
          <h2 className="policy-card-title">{t.contact.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>{t.contact.desc}</p>
        <Link href={`/${lang}/contact`} className="policy-contact-btn">
          {t.contact.btn}
        </Link>
      </div>
      
      {/* ── RODAPÉ BÍBLICO (FOOTNOTES) ── */}
      <div style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          {t.footerTitle}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {allVerses.map(v => (
            <div id={v.verseId || v.id} key={v.ref} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', scrollMarginTop: '100px' }}>
               <strong style={{ color: 'var(--text-primary)' }}>{v.ref}:</strong> "{v.text}"
               <br />
               <Link href={`/${lang}/bible?book=${v.link}`} style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '2px', fontSize: '0.8rem', display: 'inline-block', marginTop: '4px' }}>
                 {t.footerReadChapter} →
               </Link>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
