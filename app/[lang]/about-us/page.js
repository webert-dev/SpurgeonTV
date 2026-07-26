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
    intro: "Conheça quem está por trás deste projeto e como você pode fazer parte.",
    mission: {
      title: "Quem Somos e Nosso Propósito",
      text: "Somos um grupo de várias denominações cristãs evangélicas, sem pretenções enviesadas, mas com o propósito firme de anunciação do Evangelho e distribuição do conhecimento online e também presencial (material)."
    },
    journey: {
      title: "Nossa Jornada",
      text: "Ainda estamos no início, mas temos o prazer de ter começado apesar dos escassos recursos humanos, materiais e de tempo. Cada sermão traduzido e página criada é um passo de fé."
    },
    support: {
      title: "Como Você Pode Apoiar",
      intro: "Você pode apoiar essa iniciativa de várias formas:",
      list: [
        { text: "Com orações pelo nosso projeto e equipe" },
        { text: "Com a divulgação para quem precisa conhecer estas obras" },
        { text: "Apontando pontos de melhoria e/ou correção no site, nas traduções ou nos materiais impressos", linkText: "entre em contato", linkKey: "contact" },
        { text: "Com apoio financeiro para mantermos os servidores e as traduções", linkText: "Apoiar no Throne ❤️", linkKey: "throne" }
      ]
    },
    contact: {
      title: "Fale Conosco",
      desc: "Quer enviar uma correção, sugestão ou palavra de encorajamento?",
      btn: "Entrar em Contato"
    }
  },
  en: {
    title: "About Us",
    subtitle: "Spurgeon TV Evangelistic Team",
    intro: "Learn who is behind this project and how you can be a part of it.",
    mission: {
      title: "Who We Are & Our Purpose",
      text: "We are a group from various evangelical Christian denominations, with no biased pretensions, but with the firm purpose of proclaiming the Gospel and distributing knowledge online as well as physically (printed materials)."
    },
    journey: {
      title: "Our Journey",
      text: "We are still in the beginning stages, but we are glad to have started despite our scarce human, material, and time resources. Every translated sermon and created page is a step of faith."
    },
    support: {
      title: "How You Can Support Us",
      intro: "You can support this initiative in several ways:",
      list: [
        { text: "With prayers for our project and team" },
        { text: "By spreading the word to those who need to know these works" },
        { text: "By pointing out areas for improvement or corrections on the site, translations, or printed materials", linkText: "get in touch", linkKey: "contact" },
        { text: "With financial support to help maintain our servers and translations", linkText: "Support on Throne ❤️", linkKey: "throne" }
      ]
    },
    contact: {
      title: "Contact Us",
      desc: "Want to send a correction, suggestion, or a word of encouragement?",
      btn: "Get in Touch"
    }
  },
  es: {
    title: "Sobre Nosotros",
    subtitle: "Equipo Evangelístico Spurgeon TV",
    intro: "Conozca quién está detrás de este proyecto y cómo puede ser parte.",
    mission: {
      title: "Quiénes Somos y Nuestro Propósito",
      text: "Somos un grupo de varias denominaciones cristianas evangélicas, sin pretensiones sesgadas, pero con el firme propósito de anunciar el Evangelio y distribuir conocimiento tanto en línea como presencialmente (material impreso)."
    },
    journey: {
      title: "Nuestro Viaje",
      text: "Todavía estamos en nuestros inicios, pero nos alegra haber comenzado a pesar de los escasos recursos humanos, materiales y de tiempo. Cada sermón traducido es un paso de fe."
    },
    support: {
      title: "Cómo Puede Apoyarnos",
      intro: "Puede apoyar esta iniciativa de varias formas:",
      list: [
        { text: "Con oraciones por nuestro proyecto y equipo" },
        { text: "Difundiendo la palabra a quienes necesitan conocer estas obras" },
        { text: "Señalando áreas de mejora o correcciones en el sitio, traducciones o materiales impresos", linkText: "contáctenos", linkKey: "contact" },
        { text: "Con apoyo financiero para mantener los servidores y las traducciones", linkText: "Apoyar en Throne ❤️", linkKey: "throne" }
      ]
    },
    contact: {
      title: "Contáctenos",
      desc: "¿Desea enviar una corrección, sugerencia o palabra de aliento?",
      btn: "Ponerse en Contacto"
    }
  }
};

export default async function AboutUsPage({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;

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
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>{t.mission.text}</p>
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
    </div>
  );
}
