'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFoundClient() {
  const pathname = usePathname() || '';
  const [lang, setLang] = useState('pt');

  // Detect language from URL path
  useEffect(() => {
    if (pathname.startsWith('/en')) {
      setLang('en');
    } else if (pathname.startsWith('/es')) {
      setLang('es');
    } else {
      setLang('pt');
    }
  }, [pathname]);

  const texts = {
    pt: {
      badge: 'Erro 404',
      title: 'Página Não Encontrada',
      subtitle: 'O endereço que você tentou acessar não existe, foi alterado ou pertence a um link desatualizado de outra plataforma.',
      quickNavTitle: 'Para onde você gostaria de ir?',
      sermonsTitle: 'Biblioteca de Sermões',
      sermonsDesc: 'Mais de 3.500 mensagens bíblicas organizadas em 63 volumes.',
      devotionalTitle: 'Devocional Diário',
      devotionalDesc: 'Leituras bíblicas para a manhã e para a noite de cada dia.',
      bibleTitle: 'Bíblia Sagrada',
      bibleDesc: 'Texto bíblico completo com sermões correlatos de Spurgeon.',
      storeTitle: 'Livraria & Recursos',
      storeDesc: 'Livros clássicos, manuais cronológicos e guias de estudo.',
      aboutTitle: 'Vida e Ministério',
      aboutDesc: 'A história do Príncipe dos Pregadores e seus contemporâneos.',
      homeBtn: 'Ir para a Página Inicial',
      helpText: 'Veio de um link quebrado ou precisa de ajuda?',
      contactBtn: 'Fale Conosco',
      quote: '“Visite muitos bons livros, mas viva na Bíblia.”',
      quoteAuthor: '— Charles Haddon Spurgeon',
    },
    en: {
      badge: 'Error 404',
      title: 'Page Not Found',
      subtitle: 'The address you requested does not exist, has been moved, or comes from an outdated link from another platform.',
      quickNavTitle: 'Where would you like to go?',
      sermonsTitle: 'Sermon Library',
      sermonsDesc: 'Over 3,500 classic sermons organized across 63 volumes.',
      devotionalTitle: 'Daily Devotional',
      devotionalDesc: 'Morning & Evening biblical meditations for every day.',
      bibleTitle: 'Holy Bible',
      bibleDesc: 'Scripture reader linked to Spurgeon’s exposition.',
      storeTitle: 'Bookstore & Resources',
      storeDesc: 'Selected Christian books, study manuals, and guides.',
      aboutTitle: 'Life & Ministry',
      aboutDesc: 'Discover the life and legacy of the Prince of Preachers.',
      homeBtn: 'Go to Homepage',
      helpText: 'Arrived from a broken link or need assistance?',
      contactBtn: 'Contact Support',
      quote: '“Visit many good books, but live in the Bible.”',
      quoteAuthor: '— Charles Haddon Spurgeon',
    },
    es: {
      badge: 'Error 404',
      title: 'Página No Encontrada',
      subtitle: 'La dirección solicitada no existe, ha cambiado o proviene de un enlace desactualizado de otra plataforma.',
      quickNavTitle: '¿A dónde le gustaría ir?',
      sermonsTitle: 'Biblioteca de Sermones',
      sermonsDesc: 'Más de 3.500 sermones organizados en 63 volúmenes.',
      devotionalTitle: 'Devocional Diario',
      devotionalDesc: 'Lecturas bíblicas para la mañana y la noche de cada día.',
      bibleTitle: 'Santa Biblia',
      bibleDesc: 'Texto bíblico integrado con sermones correspondientes.',
      storeTitle: 'Librería y Recursos',
      storeDesc: 'Libros clásicos, manuales bíblicos y guías recomendadas.',
      aboutTitle: 'Vida y Ministerio',
      aboutDesc: 'La historia y el legado del Príncipe de los Predicadores.',
      homeBtn: 'Ir a la Página Principal',
      helpText: '¿Vino de un enlace roto o necesita ayuda?',
      contactBtn: 'Contáctenos',
      quote: '“Visite muchos buenos libros, pero viva en la Biblia.”',
      quoteAuthor: '— Charles Haddon Spurgeon',
    }
  };

  const t = texts[lang] || texts.pt;

  const cardStyle = {
    flex: '1 1 210px',
    maxWidth: '240px',
    minWidth: '200px',
    padding: '1.25rem 1.15rem',
    background: 'rgba(255, 255, 255, 0.035)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '14px',
    textDecoration: 'none',
    transition: 'transform 0.2s ease, border-color 0.2s ease, background 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  };

  return (
    <div style={{
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3.5rem 1.5rem',
      background: 'radial-gradient(ellipse at 50% 20%, rgba(200, 155, 60, 0.07) 0%, transparent 75%)',
    }}>
      <div style={{
        maxWidth: '820px',
        width: '100%',
        padding: '3rem 2.25rem',
        background: 'rgba(26, 26, 26, 0.92)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(16px)',
        textAlign: 'center',
      }}>
        {/* Top Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.85rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--brand-gold, #c89b3c)',
          fontWeight: 700,
          marginBottom: '1.25rem',
          padding: '0.35rem 1.1rem',
          background: 'rgba(200, 155, 60, 0.12)',
          borderRadius: '999px',
          border: '1px solid rgba(200, 155, 60, 0.3)',
        }}>
          <span>⚠️</span> {t.badge}
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#ffffff',
          marginBottom: '0.75rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}>
          {t.title}
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.05rem',
          color: 'rgba(255, 255, 255, 0.7)',
          lineHeight: 1.6,
          maxWidth: '620px',
          margin: '0 auto 2.5rem auto',
        }}>
          {t.subtitle}
        </p>

        {/* Quick Nav Title - Centralizado */}
        <h2 style={{
          fontSize: '0.95rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.55)',
          fontWeight: 700,
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>
          {t.quickNavTitle}
        </h2>

        {/* Cards Grid - Totalmente Centralizado com Flex Wrap */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          <Link
            href={`/${lang}/sermons/`}
            style={cardStyle}
            className="not-found-card"
          >
            <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>📖</div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>
              {t.sermonsTitle}
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.82rem', lineHeight: 1.45 }}>
              {t.sermonsDesc}
            </div>
          </Link>

          <Link
            href={`/${lang}/devotional/`}
            style={cardStyle}
            className="not-found-card"
          >
            <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>🌅</div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>
              {t.devotionalTitle}
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.82rem', lineHeight: 1.45 }}>
              {t.devotionalDesc}
            </div>
          </Link>

          <Link
            href={`/${lang}/bible/`}
            style={cardStyle}
            className="not-found-card"
          >
            <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>📜</div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>
              {t.bibleTitle}
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.82rem', lineHeight: 1.45 }}>
              {t.bibleDesc}
            </div>
          </Link>

          <Link
            href={`/${lang}/store/`}
            style={cardStyle}
            className="not-found-card"
          >
            <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>📚</div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>
              {t.storeTitle}
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.82rem', lineHeight: 1.45 }}>
              {t.storeDesc}
            </div>
          </Link>

          <Link
            href={`/${lang}/about/`}
            style={cardStyle}
            className="not-found-card"
          >
            <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>🏛️</div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>
              {t.aboutTitle}
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.82rem', lineHeight: 1.45 }}>
              {t.aboutDesc}
            </div>
          </Link>
        </div>

        {/* Action Buttons: Home & Contact */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          paddingTop: '1.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
          <Link
            href={`/${lang}/`}
            style={{
              padding: '0.8rem 1.6rem',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.92rem',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'background 0.2s ease',
            }}
          >
            🏠 {t.homeBtn}
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.65)' }}>
            <span>{t.helpText}</span>
            <Link
              href={`/${lang}/contact/`}
              style={{
                color: 'var(--brand-gold, #c89b3c)',
                textDecoration: 'underline',
                fontWeight: 600,
              }}
            >
              {t.contactBtn}
            </Link>
          </div>
        </div>

        {/* 1. Frase do Spurgeon no Rodapé - Última informação da página */}
        <div style={{
          marginTop: '2.5rem',
          padding: '1.25rem 1.75rem',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '14px',
          borderLeft: '4px solid var(--brand-gold, #c89b3c)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          textAlign: 'center',
        }}>
          <p style={{
            margin: 0,
            fontStyle: 'italic',
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: 1.5,
          }}>
            {t.quote}
          </p>
          <span style={{
            display: 'block',
            marginTop: '0.4rem',
            fontSize: '0.85rem',
            color: 'var(--brand-gold, #c89b3c)',
            fontWeight: 500,
          }}>
            {t.quoteAuthor}
          </span>
        </div>
      </div>
    </div>
  );
}
