import Link from 'next/link';

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
        "Com orações pelo nosso projeto e equipe",
        "Com a divulgação para quem precisa conhecer estas obras",
        "Apontando pontos de melhoria e/ou correção no site, nas traduções ou nos materiais impressos",
        "Com apoio financeiro para mantermos os servidores e as traduções"
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
        "With prayers for our project and team",
        "By spreading the word to those who need to know these works",
        "By pointing out areas for improvement or corrections on the site, translations, or printed materials",
        "With financial support to help maintain our servers and translations"
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
        "Con oraciones por nuestro proyecto y equipo",
        "Difundiendo la palabra a quienes necesitan conocer estas obras",
        "Señalando áreas de mejora o correcciones en el sitio, traducciones o materiales impresos",
        "Con apoyo financiero para mantener los servidores y las traducciones"
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
          {t.support.list.map((item, i) => <li key={i}>{item}</li>)}
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
