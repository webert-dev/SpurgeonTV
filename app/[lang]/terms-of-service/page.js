import Link from 'next/link';

export const revalidate = false;

export const metadata = {
  title: 'Terms of Service | Spurgeon TV',
  description: 'Terms of Service and Intellectual Property for SpurgeonTV.',
};

const translations = {
  pt: {
    title: "Termos de Serviço",
    updated: "Última atualização: Julho de 2026",
    intro: "Bem-vindo à Spurgeon TV. Ao acessar e usar o nosso site, você concorda em cumprir e ficar vinculado aos seguintes termos e condições.",
    acceptance: {
      title: "Aceitação dos Termos",
      text: "Ao acessar a Spurgeon TV, você reconhece que leu, entendeu e concorda em ficar vinculado a estes Termos de Serviço e à nossa Política de Privacidade. Se você não concorda, por favor, não use os nossos serviços."
    },
    use: {
      title: "Uso do Serviço",
      intro: "Você concorda em usar a Spurgeon TV apenas para fins lícitos. Você não deve:",
      list: [
        "Usar o site de qualquer forma que viole leis ou regulamentos aplicáveis",
        "Tentar obter acesso não autorizado aos nossos sistemas",
        "Transmitir qualquer código malicioso, vírus ou conteúdo prejudicial",
        "Fazer scraping, copiar ou redistribuir conteúdo em massa sem permissão",
        "Usar sistemas automatizados para acessar o site excessivamente"
      ]
    },
    ip: {
      title: "Propriedade Intelectual",
      intro: "A Spurgeon TV se dedica a distribuir gratuitamente o conhecimento evangélico. No entanto, observamos as seguintes regras de propriedade intelectual:",
      list: [
        "Os trabalhos originais e sermões em inglês de Charles Haddon Spurgeon estão em domínio público.",
        "As traduções em andamento (para português e espanhol) possuem propriedade intelectual da nossa equipe.",
        "Apesar da distribuição gratuita de modo online no site, solicitamos e exigimos a menção à fonte caso compartilhe: \"Equipe Evangelística Spurgeon TV + spurgeon.tv\" (ou o link direto do site)."
      ]
    },
    disclaimer: {
      title: "Isenção de Garantias",
      list: [
        "A Spurgeon TV é fornecida 'como está' sem garantias de qualquer tipo, expressas ou implícitas.",
        "Não garantimos serviço ininterrupto ou livre de erros.",
        "Não garantimos que o site atenderá aos seus requisitos específicos ou que os defeitos serão corrigidos imediatamente."
      ]
    },
    law: {
      title: "Lei Aplicável",
      text: "Estes Termos de Serviço serão regidos e interpretados de acordo com as leis do Brasil e dos Estados Unidos, sem levar em conta os princípios de conflitos de leis."
    },
    contact: {
      title: "Fale Conosco",
      desc: "Se você tem dúvidas sobre estes Termos de Serviço, por favor, entre em contato.",
      btn: "Página de Contato"
    }
  },
  en: {
    title: "Terms of Service",
    updated: "Last Updated: July 2026",
    intro: "Welcome to Spurgeon TV. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.",
    acceptance: {
      title: "Acceptance of Terms",
      text: "By accessing Spurgeon TV, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services."
    },
    use: {
      title: "Use of Service",
      intro: "You agree to use Spurgeon TV only for lawful purposes. You must not:",
      list: [
        "Use the site in any way that violates applicable laws or regulations",
        "Attempt to gain unauthorized access to our systems",
        "Transmit any malicious code, viruses, or harmful content",
        "Scrape, copy, or redistribute content in bulk without permission",
        "Use automated systems to access the site excessively"
      ]
    },
    ip: {
      title: "Intellectual Property",
      intro: "Spurgeon TV is dedicated to distributing gospel knowledge for free. However, we observe the following intellectual property rules:",
      list: [
        "Charles Haddon Spurgeon's original works and English sermons are in the public domain.",
        "The ongoing translations (into Portuguese and Spanish) are the intellectual property of our team.",
        "Despite free online distribution on the site, we request and require source attribution if shared: \"Equipe Evangelística Spurgeon TV + spurgeon.tv\" (or direct site link)."
      ]
    },
    disclaimer: {
      title: "Disclaimer of Warranties",
      list: [
        "Spurgeon TV is provided 'as is' without warranties of any kind, either express or implied.",
        "We do not guarantee uninterrupted or error-free service.",
        "We do not guarantee that the site will meet your specific requirements or that defects will be corrected immediately."
      ]
    },
    law: {
      title: "Governing Law",
      text: "These Terms of Service shall be governed by and construed in accordance with the laws of Brazil and the United States, without regard to conflict of law principles."
    },
    contact: {
      title: "Contact Us",
      desc: "If you have questions about these Terms of Service, please contact us.",
      btn: "Contact Page"
    }
  },
  es: {
    title: "Términos de Servicio",
    updated: "Última actualización: Julio de 2026",
    intro: "Bienvenido a Spurgeon TV. Al acceder y utilizar nuestro sitio, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones.",
    acceptance: {
      title: "Aceptación de Términos",
      text: "Al acceder a Spurgeon TV, usted reconoce que ha leído, entendido y acepta estar sujeto a estos Términos de Servicio y a nuestra Política de Privacidad. Si no está de acuerdo, por favor no utilice nuestros servicios."
    },
    use: {
      title: "Uso del Servicio",
      intro: "Usted acepta utilizar Spurgeon TV solo para fines lícitos. Usted no debe:",
      list: [
        "Usar el sitio de cualquier manera que viole las leyes o regulaciones aplicables",
        "Intentar obtener acceso no autorizado a nuestros sistemas",
        "Transmitir cualquier código malicioso, virus o contenido dañino",
        "Copiar o redistribuir contenido masivamente sin permiso",
        "Usar sistemas automatizados para acceder al sitio de forma excesiva"
      ]
    },
    ip: {
      title: "Propiedad Intelectual",
      intro: "Spurgeon TV se dedica a distribuir el conocimiento del evangelio de forma gratuita. Sin embargo, observamos las siguientes reglas:",
      list: [
        "Las obras originales y sermones en inglés de Charles Haddon Spurgeon son de dominio público.",
        "Las traducciones en curso (al portugués y español) son propiedad intelectual de nuestro equipo.",
        "A pesar de la distribución gratuita en línea, solicitamos y requerimos la mención de la fuente si se comparte: \"Equipe Evangelística Spurgeon TV + spurgeon.tv\" (o enlace directo)."
      ]
    },
    disclaimer: {
      title: "Renuncia de Garantías",
      list: [
        "Spurgeon TV se proporciona 'tal cual' sin garantías de ningún tipo.",
        "No garantizamos un servicio ininterrumpido o libre de errores.",
        "No garantizamos que los defectos se corrijan de inmediato."
      ]
    },
    law: {
      title: "Ley Aplicable",
      text: "Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes de Brasil y Estados Unidos."
    },
    contact: {
      title: "Contáctenos",
      desc: "Si tiene preguntas sobre estos Términos, por favor contáctenos.",
      btn: "Página de Contacto"
    }
  }
};

export default async function TermsOfServicePage({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;

  return (
    <div className="policy-container">
      <div className="policy-intro-card">
        <div className="policy-icon">📄</div>
        <h1 className="policy-title">{t.title}</h1>
        <p className="policy-updated">{t.updated}</p>
        <p className="policy-intro-text">{t.intro}</p>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">🤝</span>
          <h2 className="policy-card-title">{t.acceptance.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>{t.acceptance.text}</p>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">🛡️</span>
          <h2 className="policy-card-title">{t.use.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{t.use.intro}</p>
        <ul className="policy-list">
          {t.use.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">✒️</span>
          <h2 className="policy-card-title">{t.ip.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{t.ip.intro}</p>
        <ul className="policy-list">
          {t.ip.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">⚠️</span>
          <h2 className="policy-card-title">{t.disclaimer.title}</h2>
        </div>
        <ul className="policy-list">
          {t.disclaimer.list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="policy-card">
        <div className="policy-card-header">
          <span className="policy-card-icon">⚖️</span>
          <h2 className="policy-card-title">{t.law.title}</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>{t.law.text}</p>
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
