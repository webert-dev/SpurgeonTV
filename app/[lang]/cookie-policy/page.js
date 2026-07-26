import Link from 'next/link';

export const revalidate = false;

export const metadata = {
  title: 'Cookie Policy | Spurgeon TV',
  description: 'Cookie Policy for SpurgeonTV.',
};

const translations = {
  pt: {
    title: "Política de Cookies",
    updated: "Última atualização: Julho de 2026",
    intro: "Esta Política de Cookies explica como a Spurgeon TV utiliza cookies e tecnologias de rastreamento similares. Ao utilizar o nosso site e consentir no banner inicial, você concorda com o uso de cookies conforme descrito aqui.",
    whatAre: {
      title: "O Que São Cookies?",
      text: "Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles ajudam o site a lembrar das suas preferências (como idioma e tema) e a entender como você utiliza os nossos serviços."
    },
    types: {
      title: "Tipos de Cookies Que Usamos",
      essential: {
        title: "Cookies Essenciais (Obrigatórios)",
        text: "Estes cookies são necessários para o funcionamento adequado do site. Eles não podem ser desativados nos nossos sistemas.",
        examples: "Exemplos: Preferência de idioma (Português, Inglês, Espanhol), preferência de tema (Claro/Escuro) e configurações de fonte/leitura da Bíblia.",
        duration: "Duração: Sessão ou até 1 ano.",
        consent: "Consentimento: Não é necessário consentimento para o funcionamento essencial."
      },
      analytics: {
        title: "Cookies de Análise (Opcionais)",
        text: "Usamos cookies de análise para entender como os visitantes interagem com o nosso site, de forma anônima.",
        examples: "Exemplos: Páginas mais visitadas, tempo gasto no site e fontes de tráfego.",
        consent: "Consentimento: Requer o seu consentimento ativo através do banner de cookies."
      }
    },
    manage: {
      title: "Como Gerenciar Cookies",
      text: "Você pode alterar as suas preferências a qualquer momento através das configurações do seu navegador ou limpando o histórico do navegador para que o nosso banner de cookies apareça novamente.",
      notes: [
        "Desabilitar cookies essenciais afetará a funcionalidade do site (seu idioma não será salvo).",
        "Limpando os cookies, as suas preferências de leitura (tamanho da fonte, margem) serão redefinidas."
      ]
    },
    contact: {
      title: "Fale Conosco",
      desc: "Dúvidas sobre o nosso uso de cookies? Entre em contato através da nossa página.",
      btn: "Página de Contato"
    }
  },
  en: {
    title: "Cookie Policy",
    updated: "Last Updated: July 2026",
    intro: "This Cookie Policy explains how Spurgeon TV uses cookies and similar tracking technologies. By using our site and consenting via the banner, you agree to the use of cookies as described here.",
    whatAre: {
      title: "What Are Cookies?",
      text: "Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences (such as language and theme) and understand how you use our services."
    },
    types: {
      title: "Types of Cookies We Use",
      essential: {
        title: "Essential Cookies (Required)",
        text: "These cookies are necessary for the website to function properly. They cannot be disabled in our systems.",
        examples: "Examples: Language preference (PT, EN, ES), theme preference (Dark/Light), and Bible reading settings (font size, margins).",
        duration: "Duration: Session or up to 1 year.",
        consent: "Consent: No consent required for essential functionality."
      },
      analytics: {
        title: "Analytics Cookies (Optional)",
        text: "We use analytics cookies to understand how visitors interact with our website anonymously.",
        examples: "Examples: Most visited pages, time spent on site, and traffic sources.",
        consent: "Consent: Requires your active consent through the cookie banner."
      }
    },
    manage: {
      title: "How to Manage Cookies",
      text: "You can change your preferences at any time through your browser settings or by clearing your browser history so our cookie banner reappears.",
      notes: [
        "Disabling essential cookies will affect site functionality (e.g., your language won't be saved).",
        "Clearing cookies will reset your reading preferences (font size, margins)."
      ]
    },
    contact: {
      title: "Contact Us",
      desc: "Questions about our use of cookies? Contact us through our page.",
      btn: "Contact Page"
    }
  },
  es: {
    title: "Política de Cookies",
    updated: "Última actualización: Julio de 2026",
    intro: "Esta Política explica cómo Spurgeon TV utiliza cookies y tecnologías similares. Al utilizar nuestro sitio y dar su consentimiento, usted acepta el uso de cookies como se describe aquí.",
    whatAre: {
      title: "¿Qué Son Las Cookies?",
      text: "Las cookies son pequeños archivos de texto almacenados en su dispositivo al visitar un sitio. Ayudan a recordar sus preferencias (como idioma y tema) y a entender cómo usa nuestros servicios."
    },
    types: {
      title: "Tipos de Cookies que Usamos",
      essential: {
        title: "Cookies Esenciales (Obligatorias)",
        text: "Estas cookies son necesarias para el funcionamiento adecuado del sitio. No se pueden desactivar en nuestros sistemas.",
        examples: "Ejemplos: Preferencia de idioma (PT, EN, ES), tema (Oscuro/Claro) y configuración de lectura.",
        duration: "Duración: Sesión o hasta 1 año.",
        consent: "Consentimiento: No se requiere consentimiento para la funcionalidad esencial."
      },
      analytics: {
        title: "Cookies de Análisis (Opcionales)",
        text: "Usamos cookies para entender cómo los visitantes interactúan con nuestro sitio de forma anónima.",
        examples: "Ejemplos: Páginas más visitadas, tiempo en el sitio y fuentes de tráfico.",
        consent: "Consentimiento: Requiere su consentimiento activo."
      }
    },
    manage: {
      title: "Cómo Administrar las Cookies",
      text: "Puede cambiar sus preferencias a través de la configuración de su navegador o borrando el historial para que vuelva a aparecer nuestro banner.",
      notes: [
        "Desactivar cookies esenciales afectará la funcionalidad del sitio.",
        "Borrar cookies restablecerá sus preferencias de lectura."
      ]
    },
    contact: {
      title: "Contáctenos",
      desc: "¿Preguntas sobre nuestro uso de cookies? Contáctenos a través de nuestra página.",
      btn: "Página de Contacto"
    }
  }
};

export default async function CookiePolicyPage({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;

  return (
    <div className="policy-container">
      <div className="policy-intro-card">
        <div className="policy-icon">🍪</div>
        <h1 className="policy-title">{t.title}</h1>
        <p className="policy-updated">{t.updated}</p>
        <p className="policy-intro-text">{t.intro}</p>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">ℹ️</span>
          <h2 className="policy-card-title">{t.whatAre.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>{t.whatAre.text}</p>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">🗂️</span>
          <h2 className="policy-card-title">{t.types.title}</h2>
        </div>
        
        <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--surface-hover)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
          <h3 className="policy-section-title" style={{ marginTop: 0 }}>{t.types.essential.title}</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{t.types.essential.text}</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t.types.essential.examples}</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}><strong>{t.types.essential.duration}</strong></p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}><strong>{t.types.essential.consent}</strong></p>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--surface-hover)', borderRadius: '8px', borderLeft: '4px solid var(--text-muted)' }}>
          <h3 className="policy-section-title" style={{ marginTop: 0 }}>{t.types.analytics.title}</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{t.types.analytics.text}</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t.types.analytics.examples}</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}><strong>{t.types.analytics.consent}</strong></p>
        </div>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">⚙️</span>
          <h2 className="policy-card-title">{t.manage.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{t.manage.text}</p>
        <ul className="policy-list">
          {t.manage.notes.map((item, i) => <li key={i}>{item}</li>)}
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
