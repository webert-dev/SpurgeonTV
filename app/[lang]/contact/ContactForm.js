'use client';

import { useState } from 'react';

export default function ContactForm({ t }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    // HONEYPOT CHECK
    // If the hidden 'website' field is filled, it's a bot.
    if (formProps.website) {
      console.warn('Bot detected by honeypot.');
      setIsSubmitting(false);
      // Pretend it was successful to trick the bot
      setStatus('success'); 
      return;
    }

    // MULTIPLE SUBJECTS HANDLING
    // FormData.getAll returns an array of all selected checkboxes with name 'assuntos'
    const assuntos = formData.getAll('assuntos');
    if (assuntos.length === 0) {
      assuntos.push(t.defaultSubject);
    }

    const payload = {
      nome: formProps.nome,
      email: formProps.email,
      assuntos: assuntos,
      mensagem: formProps.mensagem
    };

    // Usando a URL fixa diretamente para evitar a necessidade de reiniciar o servidor (variáveis .env)
    const webhookUrl = "https://script.google.com/macros/s/AKfycbyxoIyX-Mtb2rxFuqvpD6HFKm1awm85NAVz1t6JPT9xJBHv95YMXivTHf9857HPSL8/exec";

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', 
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.status === 'success') {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
        console.error(result.message);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      
      {/* HONEYPOT - Visually hidden to humans */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="website">Leave this field empty if you're human:</label>
        <input type="text" id="website" name="website" tabIndex="-1" autoComplete="off" />
      </div>

      <div className="form-group">
        <label htmlFor="nome">{t.name}</label>
        <input type="text" id="nome" name="nome" required placeholder={t.namePlaceholder} className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="email">{t.email}</label>
        <input type="email" id="email" name="email" required placeholder={t.emailPlaceholder} className="form-input" />
      </div>

      <div className="form-group">
        <label>{t.subjectLabel}</label>
        <p className="form-hint">{t.subjectHint}</p>
        <div className="checkbox-group">
          {t.subjects.map((subj, idx) => (
            <label key={idx} className="checkbox-label">
              <input type="checkbox" name="assuntos" value={subj} />
              <span className="checkbox-custom"></span>
              {subj}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="mensagem">{t.message}</label>
        <textarea id="mensagem" name="mensagem" required rows="6" placeholder={t.messagePlaceholder} className="form-input"></textarea>
      </div>

      <button type="submit" disabled={isSubmitting} className="policy-contact-btn" style={{ width: '100%', marginTop: '1rem', border: 'none', cursor: 'pointer' }}>
        {isSubmitting ? t.sending : t.send}
      </button>

      {status === 'success' && (
        <div className="form-alert success">
          <p>✅ {t.successMsg}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="form-alert error">
          <p>❌ {t.errorMsg}</p>
        </div>
      )}

      <style jsx>{`
        .contact-form {
          margin-top: 2rem;
          text-align: left;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        .form-hint {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.8rem;
        }
        .form-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: rgba(0,0,0, 0.2);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
        }
        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding: 1rem;
          background: rgba(0,0,0, 0.1);
          border-radius: 8px;
          border: 1px solid var(--border);
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-weight: 400;
          color: var(--text-secondary);
          cursor: pointer;
          margin: 0;
        }
        .checkbox-label input[type="checkbox"] {
          width: 1.2rem;
          height: 1.2rem;
          accent-color: var(--accent);
          cursor: pointer;
        }
        .form-alert {
          margin-top: 1.5rem;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
        }
        .form-alert.success {
          background: rgba(46, 204, 113, 0.1);
          color: #2ecc71;
          border: 1px solid rgba(46, 204, 113, 0.2);
        }
        .form-alert.error {
          background: rgba(231, 76, 60, 0.1);
          color: #e74c3c;
          border: 1px solid rgba(231, 76, 60, 0.2);
        }
      `}</style>
    </form>
  );
}
