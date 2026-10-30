'use client';

import { useState } from 'react';
import { getBibleTranslationInfo } from '../../lib/bible-translations-info';

/**
 * BibleVersionDetails — Campo retrátil (accordion) com informações completas e eruditas
 * sobre a versão bíblica selecionada pelo usuário.
 *
 * Localizado imediatamente abaixo do CitationBox da página da Bíblia.
 *
 * @param {string} translation - A sigla da versão ('kjv', 'niv', 'nvi', 'nvies', 'rvr1960', etc.)
 * @param {string} lang - 'pt' | 'en' | 'es'
 */
export default function BibleVersionDetails({ translation, lang = 'pt' }) {
  const [isOpen, setIsOpen] = useState(false);

  const info = getBibleTranslationInfo(translation, lang);
  if (!info) return null;

  const t = {
    pt: {
      sectionBadge: 'INFORMAÇÕES DA VERSÃO',
      aboutTitle: 'Sobre esta Tradução Bíblica',
      clickToExpand: 'Clique para expandir informações históricas, teológicas e manuscritos',
      clickToCollapse: 'Clique para recolher detalhes',
      quickFacts: 'Ficha Técnica da Tradução',
      yearLabel: 'Ano / Edição',
      philosophyLabel: 'Filosofia de Tradução',
      manuscriptsLabel: 'Base Textual / Manuscritos',
      translatorsLabel: 'Tradutores / Responsáveis',
      historyTitle: 'História e Contexto de Tradução',
      featuresTitle: 'Diferenciais e Características Marcantes',
      theologyTitle: 'Legado Teológico e Conexão com Spurgeon',
      scopeTitle: 'Abrangência e Uso Contemporâneo',
      copyrightLabel: 'Situação de Direitos Autorais / Copyright:',
    },
    en: {
      sectionBadge: 'VERSION INFORMATION',
      aboutTitle: 'About this Bible Translation',
      clickToExpand: 'Click to expand historical, theological, and manuscript details',
      clickToCollapse: 'Click to collapse details',
      quickFacts: 'Translation Quick Facts',
      yearLabel: 'Year / Edition',
      philosophyLabel: 'Translation Philosophy',
      manuscriptsLabel: 'Textual Basis / Manuscripts',
      translatorsLabel: 'Translators / Committee',
      historyTitle: 'History & Translation Context',
      featuresTitle: 'Distinctive Features & Characteristics',
      theologyTitle: 'Theological Legacy & Spurgeon Connection',
      scopeTitle: 'Global Reach & Contemporary Usage',
      copyrightLabel: 'Copyright Status / Legal Terms:',
    },
    es: {
      sectionBadge: 'INFORMACIÓN DE LA VERSIÓN',
      aboutTitle: 'Sobre esta Traducción Bíblica',
      clickToExpand: 'Haga clic para expandir información histórica, teológica y de manuscritos',
      clickToCollapse: 'Haga clic para contraer detalles',
      quickFacts: 'Ficha Técnica de la Traducción',
      yearLabel: 'Año / Edición',
      philosophyLabel: 'Filosofía de Traducción',
      manuscriptsLabel: 'Base Textual / Manuscritos',
      translatorsLabel: 'Traductores / Responsables',
      historyTitle: 'Historia y Contexto de Traducción',
      featuresTitle: 'Diferenciales y Características Sobresalientes',
      theologyTitle: 'Legado Teológico y Conexión con Spurgeon',
      scopeTitle: 'Alcance Global y Uso Contemporáneo',
      copyrightLabel: 'Situación de Derechos de Autor / Copyright:',
    }
  }[lang] || t.en;

  return (
    <div 
      className="bible-version-details-container"
      style={{
        marginTop: '1.25rem',
        marginBottom: '2.5rem',
        borderRadius: '10px',
        border: '1px solid var(--border)',
        background: 'var(--surface-2, rgba(255, 255, 255, 0.02))',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      {/* ── BOTÃO DE CABEÇALHO RETRÁTIL (ACCORDION HEADER) ── */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.25rem',
          background: isOpen 
            ? 'linear-gradient(180deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.02) 100%)' 
            : 'transparent',
          border: 'none',
          borderBottom: isOpen ? '1px solid var(--border)' : 'none',
          cursor: 'pointer',
          textAlign: 'left',
          color: 'var(--text-primary)',
          gap: '1rem',
          transition: 'background 0.2s ease',
        }}
        onMouseOver={(e) => {
          if (!isOpen) e.currentTarget.style.background = 'rgba(212, 175, 55, 0.04)';
        }}
        onMouseOut={(e) => {
          if (!isOpen) e.currentTarget.style.background = 'transparent';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
          {/* Ícone de Pergaminho / Livro Bíblico */}
          <div 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: 'var(--accent, #d4af37)',
              flexShrink: 0,
            }}
          >
            📜
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span 
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'var(--accent, #d4af37)',
                  background: 'rgba(212, 175, 55, 0.12)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                {t.sectionBadge}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                • {info.abbrev} ({info.year})
              </span>
            </div>

            <h4 
              style={{
                margin: '0.2rem 0 0',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
              }}
            >
              {info.name}
            </h4>

            <p 
              style={{
                margin: '0.2rem 0 0',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              {isOpen ? t.clickToCollapse : t.clickToExpand}
            </p>
          </div>
        </div>

        {/* Ícone Chevron com rotação */}
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'var(--surface-hover, rgba(255, 255, 255, 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent, #d4af37)',
            fontSize: '0.9rem',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
            flexShrink: 0,
          }}
        >
          ▼
        </div>
      </button>

      {/* ── CONTEÚDO EXPANDIDO (EXPANDED DETAILS BODY) ── */}
      {isOpen && (
        <div style={{ padding: '1.5rem', color: 'var(--text-primary)', fontSize: '0.92rem', lineHeight: '1.65' }}>
          
          {/* Nome Completo Oficial */}
          <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px dashed var(--border)' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent, #d4af37)', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>
              {info.fullName}
            </span>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <strong>Idioma:</strong> {info.language} • <strong>Abreviação Canônica:</strong> {info.abbrev}
            </div>
          </div>

          {/* 1. GRID DE FICHA TÉCNICA (QUICK FACTS) */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent, #d4af37)', marginBottom: '0.75rem', fontWeight: 700 }}>
              ✦ {t.quickFacts}
            </h5>
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '0.85rem',
              }}
            >
              {/* Ano */}
              <div style={{ background: 'var(--surface, rgba(0,0,0,0.2))', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                  {t.yearLabel}
                </span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                  {info.year}
                </span>
              </div>

              {/* Filosofia */}
              <div style={{ background: 'var(--surface, rgba(0,0,0,0.2))', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                  {t.philosophyLabel}
                </span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                  {info.philosophy}
                </span>
              </div>

              {/* Manuscritos */}
              <div style={{ background: 'var(--surface, rgba(0,0,0,0.2))', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                  {t.manuscriptsLabel}
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {info.manuscripts}
                </span>
              </div>

              {/* Tradutores */}
              <div style={{ background: 'var(--surface, rgba(0,0,0,0.2))', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                  {t.translatorsLabel}
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {info.translators}
                </span>
              </div>
            </div>
          </div>

          {/* 2. HISTÓRIA E CONTEXTO */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent, #d4af37)', marginBottom: '0.5rem', fontWeight: 700 }}>
              📜 {t.historyTitle}
            </h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, textAlign: 'justify', fontSize: '0.92rem' }}>
              {info.history}
            </p>
          </div>

          {/* 3. DIFERENCIAIS E CARACTERÍSTICAS */}
          {info.features && info.features.length > 0 && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent, #d4af37)', marginBottom: '0.5rem', fontWeight: 700 }}>
                ✨ {t.featuresTitle}
              </h5>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {info.features.map((feat, idx) => (
                  <li key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 4. LEGADO TEOLÓGICO E CONEXÃO COM SPURGEON */}
          <div style={{ marginBottom: '1.75rem', padding: '1rem 1.25rem', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '8px', borderLeft: '3px solid var(--accent, #d4af37)' }}>
            <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent, #d4af37)', marginBottom: '0.35rem', fontWeight: 700 }}>
              🏛️ {t.theologyTitle}
            </h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem', fontStyle: 'italic' }}>
              {info.theologyAndLegacy}
            </p>
          </div>

          {/* 5. ABRANGÊNCIA E USO */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent, #d4af37)', marginBottom: '0.35rem', fontWeight: 700 }}>
              🌍 {t.scopeTitle}
            </h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              {info.scopeAndUsage}
            </p>
          </div>

          {/* 6. COPYRIGHT E SITUAÇÃO JURÍDICA */}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            <strong>{t.copyrightLabel}</strong> {info.copyright}
          </div>

        </div>
      )}
    </div>
  );
}
