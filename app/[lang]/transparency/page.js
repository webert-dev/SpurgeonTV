import Link from 'next/link';

export const revalidate = false;

export const metadata = {
  title: 'Transparency | Spurgeon TV',
  description: 'How we operate, handle data, and sustain SpurgeonTV.',
};

const translations = {
  pt: {
    title: "Transparência",
    subtitle: "Como operamos e o que defendemos",
    intro: "Na Spurgeon TV, a transparência é um valor central. Acreditamos em ser abertos sobre como operamos, como lidamos com os dados e como sustentamos este projeto.",
    data: {
      title: "Dados e Privacidade",
      list: [
        "Coletamos o mínimo de dados necessários para o funcionamento do site",
        "Nenhum dado pessoal é vendido para terceiros",
        "Estatísticas são usadas apenas para melhorar a experiência do usuário",
        "Todo o manuseio de dados está em conformidade com a LGPD e GDPR"
      ]
    },
    funding: {
      title: "Modelo de Sustento",
      list: [
        "A Spurgeon TV é totalmente gratuita de ponta a ponta",
        "Nossas operações (servidores, domínios, etc.) são mantidas por doações voluntárias",
        "Não possuímos recursos premium ou 'paywalls'",
        "Não vendemos dados de usuários para monetização"
      ]
    },
    community: {
      title: "Nossa Equipe e Comunidade",
      list: [
        "Somos um grupo de voluntários de várias denominações cristãs evangélicas",
        "Não temos pretensões enviesadas, apenas o propósito de anunciar o Evangelho",
        "Contamos com a comunidade para traduções, revisão e divulgação das obras"
      ]
    },
    security: {
      title: "Segurança",
      list: [
        "Criptografia HTTPS em todas as páginas",
        "Não armazenamos informações pessoais sensíveis",
        "Auditorias e manutenções regulares"
      ]
    },
    contact: {
      title: "Dúvidas?",
      desc: "Se você tem dúvidas sobre as nossas práticas de transparência, entre em contato.",
      btn: "Página de Contato"
    }
  },
  en: {
    title: "Transparency",
    subtitle: "How we operate and what we stand for",
    intro: "At Spurgeon TV, transparency is a core value. We believe in being open about how we operate, how we handle data, and how we sustain this project.",
    data: {
      title: "Data & Privacy",
      list: [
        "We collect minimal data necessary for site functionality",
        "No personal data is sold to third parties",
        "Analytics are used only to improve user experience",
        "All data handling complies with GDPR and LGPD"
      ]
    },
    funding: {
      title: "Support & Funding",
      list: [
        "Spurgeon TV is completely free to use",
        "Our operations (servers, domains, etc.) are maintained by voluntary donations",
        "No premium features or paywalls",
        "No selling of user data for monetization"
      ]
    },
    community: {
      title: "Our Team & Community",
      list: [
        "We are a group of volunteers from various evangelical Christian denominations",
        "We have no biased pretensions, just the purpose of proclaiming the Gospel",
        "We rely on the community for translations, reviews, and spreading the works"
      ]
    },
    security: {
      title: "Security",
      list: [
        "HTTPS encryption on all pages",
        "No storage of sensitive personal information",
        "Regular audits and maintenance"
      ]
    },
    contact: {
      title: "Questions?",
      desc: "If you have questions about our transparency practices, please contact us.",
      btn: "Contact Page"
    }
  },
  es: {
    title: "Transparencia",
    subtitle: "Cómo operamos y lo que defendemos",
    intro: "En Spurgeon TV, la transparencia es un valor central. Creemos en ser abiertos sobre cómo operamos, cómo manejamos los datos y cómo sostenemos este proyecto.",
    data: {
      title: "Datos y Privacidad",
      list: [
        "Recopilamos los datos mínimos necesarios para el funcionamiento",
        "Ningún dato personal se vende a terceros",
        "El análisis se utiliza solo para mejorar la experiencia",
        "Todo manejo de datos cumple con GDPR y leyes de privacidad"
      ]
    },
    funding: {
      title: "Modelo de Sustento",
      list: [
        "Spurgeon TV es completamente gratuito",
        "Nuestras operaciones se mantienen mediante donaciones voluntarias",
        "No hay funciones premium ni muros de pago",
        "No vendemos datos de usuarios para monetización"
      ]
    },
    community: {
      title: "Nuestro Equipo",
      list: [
        "Somos voluntarios de varias denominaciones cristianas evangélicas",
        "No tenemos pretensiones sesgadas, solo el propósito de anunciar el Evangelio",
        "Confiamos en la comunidad para traducciones y difusión"
      ]
    },
    security: {
      title: "Seguridad",
      list: [
        "Cifrado HTTPS en todas las páginas",
        "No almacenamos información personal confidencial",
        "Mantenimiento regular"
      ]
    },
    contact: {
      title: "¿Preguntas?",
      desc: "Si tiene preguntas sobre nuestras prácticas, contáctenos.",
      btn: "Página de Contacto"
    }
  }
};

export default async function TransparencyPage({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;

  return (
    <div className="policy-container">
      <div className="policy-intro-card">
        <div className="policy-icon">🛡️</div>
        <h1 className="policy-title">{t.title}</h1>
        <p className="policy-updated" style={{ color: 'var(--text-secondary)' }}>{t.subtitle}</p>
        <p className="policy-intro-text">{t.intro}</p>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">🗄️</span>
          <h2 className="policy-card-title">{t.data.title}</h2>
        </div>
        <ul className="policy-list">
          {t.data.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">💖</span>
          <h2 className="policy-card-title">{t.funding.title}</h2>
        </div>
        <ul className="policy-list">
          {t.funding.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">👥</span>
          <h2 className="policy-card-title">{t.community.title}</h2>
        </div>
        <ul className="policy-list">
          {t.community.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">🔒</span>
          <h2 className="policy-card-title">{t.security.title}</h2>
        </div>
        <ul className="policy-list">
          {t.security.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card" style={{ textAlign: 'center' }}>
        <div className="policy-card-header" style={{ justifyContent: 'center' }}>
          <span className="policy-card-icon">❓</span>
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
