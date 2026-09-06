import Link from 'next/link';

export const revalidate = false;

export const metadata = {
  title: 'Privacy Policy | Spurgeon TV',
  description: 'Privacy Policy and Data Collection information for SpurgeonTV.',
};

const translations = {
  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: Julho de 2026",
    intro: "Na Spurgeon TV, respeitamos a sua privacidade e estamos comprometidos em proteger os seus dados pessoais. Esta política de privacidade explica como coletamos, usamos e protegemos as suas informações, em conformidade com a LGPD e outras leis de proteção de dados.",
    collect: {
      title: "Informações que Coletamos",
      auto: "Informações Coletadas Automaticamente",
      autoList: [
        "Tipo e versão do navegador",
        "Informações do dispositivo (Mobile/Desktop)",
        "Endereço IP (anonimizado)",
        "Páginas visitadas e tempo de permanência",
        "Origem de acesso (Referral source)"
      ],
      manual: "Informações Fornecidas Voluntariamente",
      manualList: [
        "Comentários ou feedbacks que você envia através de formulários",
        "Nenhuma senha ou dado pessoal sensível é coletado pelo nosso sistema principal"
      ]
    },
    use: {
      title: "Como Usamos as Suas Informações",
      list: [
        "Para prover e melhorar os nossos serviços",
        "Para analisar o uso do site e otimizar a experiência do usuário",
        "Para responder às suas dúvidas e contatos",
        "Para cumprir com obrigações legais"
      ]
    },
    sharing: {
      title: "Compartilhamento de Dados",
      list: [
        "Nós NÃO vendemos seus dados pessoais para terceiros",
        "Podemos compartilhar dados anonimizados com provedores de análise (Analytics)",
        "Podemos divulgar dados se exigido por lei"
      ]
    },
    rights: {
      title: "Os Seus Direitos",
      intro: "Sob a LGPD (Lei Geral de Proteção de Dados) e GDPR, você tem o direito de:",
      list: [
        "Acessar os seus dados pessoais",
        "Solicitar a correção de dados incompletos ou imprecisos",
        "Solicitar a exclusão dos seus dados",
        "Retirar o seu consentimento a qualquer momento",
        "Opor-se ao processamento de dados"
      ]
    },
    retention: {
      title: "Retenção de Dados",
      desc: "Nós retemos os seus dados apenas pelo tempo necessário para os fins descritos nesta política. Dados de analytics são normalmente retidos por até 26 meses."
    },
    adsense: {
      title: "Publicidade e Google AdSense",
      list: [
        "Fornecedores de terceiros, incluindo o Google, usam cookies para veicular anúncios com base nas visitas anteriores do usuário a este site ou a outros sites.",
        "O uso de cookies de publicidade pelo Google permite que ele e seus parceiros veiculem anúncios para os nossos usuários com base na visita a nossos sites e/ou a outros sites na Internet.",
        "Os usuários podem desativar a publicidade personalizada acessando as Configurações de Anúncios (https://www.google.com/settings/ads)."
      ]
    },
    contact: {
      title: "Fale Conosco",
      desc: "Se você tem dúvidas sobre esta Política de Privacidade ou quer exercer os seus direitos, por favor, entre em contato através da nossa página oficial.",
      btn: "Página de Contato"
    }
  },
  en: {
    title: "Privacy Policy",
    updated: "Last Updated: July 2026",
    intro: "At Spurgeon TV, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information, in compliance with GDPR and other data protection laws.",
    collect: {
      title: "Information We Collect",
      auto: "Automatically Collected Information",
      autoList: [
        "Browser type and version",
        "Device information (Mobile/Desktop)",
        "IP address (anonymized)",
        "Pages visited and time spent",
        "Referral source"
      ],
      manual: "Voluntarily Provided Information",
      manualList: [
        "Feedback or comments you submit",
        "No passwords or sensitive personal data are collected by our main system"
      ]
    },
    use: {
      title: "How We Use Your Information",
      list: [
        "To provide and improve our services",
        "To analyze site usage and optimize user experience",
        "To respond to your inquiries",
        "To comply with legal obligations"
      ]
    },
    sharing: {
      title: "Data Sharing",
      list: [
        "We do NOT sell your personal data to third parties",
        "We may share anonymized data with analytics providers",
        "We may disclose data if required by law"
      ]
    },
    rights: {
      title: "Your Rights",
      intro: "Under GDPR and other privacy laws, you have the right to:",
      list: [
        "Access your personal data",
        "Request correction of inaccurate data",
        "Request deletion of your data",
        "Withdraw consent at any time",
        "Object to data processing"
      ]
    },
    retention: {
      title: "Data Retention",
      desc: "We retain your data only as long as necessary for the purposes outlined in this policy. Analytics data is typically retained for up to 26 months."
    },
    adsense: {
      title: "Advertising and Google AdSense",
      list: [
        "Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.",
        "Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.",
        "Users may opt out of personalized advertising by visiting Ads Settings (https://www.google.com/settings/ads)."
      ]
    },
    contact: {
      title: "Contact Us",
      desc: "If you have questions about this Privacy Policy or want to exercise your rights, please contact us through our official page.",
      btn: "Contact Page"
    }
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: Julio de 2026",
    intro: "En Spurgeon TV, respetamos su privacidad y estamos comprometidos a proteger sus datos personales. Esta política explica cómo recopilamos, usamos y salvaguardamos su información.",
    collect: {
      title: "Información que Recopilamos",
      auto: "Información Recopilada Automáticamente",
      autoList: [
        "Tipo y versión del navegador",
        "Información del dispositivo (Móvil/Escritorio)",
        "Dirección IP (anonimizada)",
        "Páginas visitadas y tiempo de permanencia",
        "Fuente de referencia"
      ],
      manual: "Información Proporcionada Voluntariamente",
      manualList: [
        "Comentarios o mensajes que usted envía",
        "No recopilamos contraseñas ni datos personales confidenciales"
      ]
    },
    use: {
      title: "Cómo Usamos su Información",
      list: [
        "Para proporcionar y mejorar nuestros servicios",
        "Para analizar el uso del sitio y optimizar la experiencia",
        "Para responder a sus consultas",
        "Para cumplir con obligaciones legales"
      ]
    },
    sharing: {
      title: "Intercambio de Datos",
      list: [
        "NO vendemos sus datos personales a terceros",
        "Podemos compartir datos anonimizados con proveedores de análisis",
        "Podemos divulgar datos si lo exige la ley"
      ]
    },
    rights: {
      title: "Sus Derechos",
      intro: "Bajo las leyes de privacidad, usted tiene derecho a:",
      list: [
        "Acceder a sus datos personales",
        "Solicitar la corrección de datos inexactos",
        "Solicitar la eliminación de sus datos",
        "Retirar su consentimiento en cualquier momento",
        "Oponerse al procesamiento de datos"
      ]
    },
    retention: {
      title: "Retención de Datos",
      desc: "Retenemos sus datos solo el tiempo necesario para los fines descritos en esta política."
    },
    adsense: {
      title: "Publicidad y Google AdSense",
      list: [
        "Los proveedores de terceros, incluido Google, utilizan cookies para mostrar anuncios en función de las visitas anteriores de un usuario a este sitio web u otros sitios web.",
        "El uso de cookies de publicidad por parte de Google le permite a este y a sus socios mostrar anuncios a nuestros usuarios en función de su visita a nuestros sitios y/u otros sitios de Internet.",
        "Los usuarios pueden inhabilitar la publicidad personalizada visitando la Configuración de anuncios (https://www.google.com/settings/ads)."
      ]
    },
    contact: {
      title: "Contáctenos",
      desc: "Si tiene preguntas sobre esta Política o desea ejercer sus derechos, por favor contáctenos a través de nuestra página.",
      btn: "Página de Contacto"
    }
  }
};

export default async function PrivacyPolicyPage({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;

  return (
    <div className="policy-container">
      <div className="policy-intro-card">
        <div className="policy-icon">🛡️</div>
        <h1 className="policy-title">{t.title}</h1>
        <p className="policy-updated">{t.updated}</p>
        <p className="policy-intro-text">{t.intro}</p>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">🗄️</span>
          <h2 className="policy-card-title">{t.collect.title}</h2>
        </div>
        
        <h3 className="policy-section-title">{t.collect.auto}</h3>
        <ul className="policy-list">
          {t.collect.autoList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h3 className="policy-section-title">{t.collect.manual}</h3>
        <ul className="policy-list">
          {t.collect.manualList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">👁️</span>
          <h2 className="policy-card-title">{t.use.title}</h2>
        </div>
        <ul className="policy-list">
          {t.use.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">🤝</span>
          <h2 className="policy-card-title">{t.sharing.title}</h2>
        </div>
        <ul className="policy-list">
          {t.sharing.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">⚖️</span>
          <h2 className="policy-card-title">{t.rights.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{t.rights.intro}</p>
        <ul className="policy-list">
          {t.rights.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">📅</span>
          <h2 className="policy-card-title">{t.retention.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>{t.retention.desc}</p>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">📢</span>
          <h2 className="policy-card-title">{t.adsense.title}</h2>
        </div>
        <ul className="policy-list">
          {t.adsense.list.map((item, i) => {
            if (item.includes("https://www.google.com/settings/ads")) {
              const parts = item.split("https://www.google.com/settings/ads");
              return (
                <li key={i}>
                  {parts[0]}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                    https://www.google.com/settings/ads
                  </a>
                  {parts[1] && parts[1].replace(')', '')}
                </li>
              );
            }
            return <li key={i}>{item}</li>;
          })}
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
