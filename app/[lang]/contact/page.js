import ContactForm from './ContactForm';

export const revalidate = false;

export const metadata = {
  title: 'Contact Us | Spurgeon TV',
  description: 'Get in touch with the SpurgeonTV Evangelistic Team.',
};

const translations = {
  pt: {
    title: "Fale Conosco",
    subtitle: "Envie sua mensagem para a Equipe Evangelística",
    intro: "Use o formulário abaixo para enviar sugestões, reportar erros de tradução, tirar dúvidas ou entrar em contato sobre apoio financeiro. Responderemos o mais breve possível.",
    form: {
      name: "Seu Nome",
      namePlaceholder: "Digite seu nome",
      email: "Seu Email",
      emailPlaceholder: "exemplo@email.com",
      subjectLabel: "Assunto(s)",
      subjectHint: "Você pode selecionar mais de uma opção:",
      subjects: [
        "Sugestão de Melhoria",
        "Erro de Tradução",
        "Apoio Financeiro",
        "Dúvida",
        "Outros"
      ],
      defaultSubject: "Outros",
      message: "Sua Mensagem",
      messagePlaceholder: "Escreva sua mensagem aqui...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      successMsg: "Sua mensagem foi enviada com sucesso! Verifique seu email para a confirmação.",
      errorMsg: "Ocorreu um erro ao enviar sua mensagem. Por favor, certifique-se de que a URL do Webhook está configurada ou tente novamente mais tarde."
    }
  },
  en: {
    title: "Contact Us",
    subtitle: "Send a message to the Evangelistic Team",
    intro: "Use the form below to send suggestions, report translation errors, ask questions, or contact us about financial support. We will reply as soon as possible.",
    form: {
      name: "Your Name",
      namePlaceholder: "Enter your name",
      email: "Your Email",
      emailPlaceholder: "example@email.com",
      subjectLabel: "Subject(s)",
      subjectHint: "You can select more than one option:",
      subjects: [
        "Suggestion for Improvement",
        "Translation Error",
        "Financial Support",
        "Question",
        "Other"
      ],
      defaultSubject: "Other",
      message: "Your Message",
      messagePlaceholder: "Write your message here...",
      send: "Send Message",
      sending: "Sending...",
      successMsg: "Your message has been sent successfully! Check your email for confirmation.",
      errorMsg: "An error occurred while sending your message. Please try again later."
    }
  },
  es: {
    title: "Contáctenos",
    subtitle: "Envíe un mensaje al Equipo Evangelístico",
    intro: "Utilice el siguiente formulario para enviar sugerencias, reportar errores de traducción, hacer preguntas o contactarnos sobre apoyo financiero. Le responderemos lo antes posible.",
    form: {
      name: "Su Nombre",
      namePlaceholder: "Ingrese su nombre",
      email: "Su Correo",
      emailPlaceholder: "ejemplo@correo.com",
      subjectLabel: "Asunto(s)",
      subjectHint: "Puede seleccionar más de una opción:",
      subjects: [
        "Sugerencia de Mejora",
        "Error de Traducción",
        "Apoyo Financiero",
        "Pregunta",
        "Otros"
      ],
      defaultSubject: "Otros",
      message: "Su Mensaje",
      messagePlaceholder: "Escriba su mensaje aquí...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      successMsg: "¡Su mensaje ha sido enviado con éxito! Revise su correo para la confirmación.",
      errorMsg: "Ocurrió un error al enviar su mensaje. Por favor, inténtelo de nuevo más tarde."
    }
  }
};

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;

  return (
    <div className="policy-container">
      <div className="policy-intro-card">
        <div className="policy-icon">✉️</div>
        <h1 className="policy-title">{t.title}</h1>
        <p className="policy-updated" style={{ color: 'var(--text-secondary)' }}>{t.subtitle}</p>
        <p className="policy-intro-text" style={{ marginTop: '1rem' }}>{t.intro}</p>
      </div>

      <div className="policy-card">
        <ContactForm t={t.form} />
      </div>
    </div>
  );
}
