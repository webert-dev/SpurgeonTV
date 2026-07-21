'use client';

import { useState } from 'react';

export default function SermonDetails({ meta, lang, dict }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fallbacks
  const titleText = "DETALHES E CRÉDITOS";
  const t = dict?.reader?.panel || {
    aSermon: 'A Sermon', hide: 'Hide details', view: 'View sermon details', by: 'By the Rev. C. H. Spurgeon', at: 'At'
  };

  if (!meta) return null;

  return (
    <div className="sermon-tags-container" style={{ marginBottom: '1.5rem' }}>
      <details 
        className="sermon-tags-details" 
        open={isOpen} 
        onToggle={(e) => setIsOpen(e.currentTarget.open)}
      >
        <summary className="sermon-tags-summary">
          <div className="summary-content">
            <span className="summary-icon">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
            <span className="summary-text" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{titleText}</span>
          </div>
        </summary>
        <div className="sermon-tags-content" style={{ padding: '1.5rem', background: 'var(--surface-light)', borderRadius: '0 0 8px 8px' }}>
          <div className="sermon-info-card" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
            {/* Header line */}
            <p className="sermon-info-no" style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '1.1rem' }}>No. {meta.sermonNumber}</p>
            <p className="sermon-info-subtitle" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', margin: '0.5rem 0' }}>{t.aSermon}</p>
            <p className="sermon-info-collection" style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>{meta.collectionName}</p>
            <p className="sermon-info-collection" style={{ marginTop: '0.2rem', color: 'var(--text-muted)' }}>Volume {meta.volumeNumber}</p>

            <hr className="sermon-info-divider" style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '1.5rem auto', width: '50%' }} />

            {/* Delivery info */}
            <p className="sermon-info-delivery" style={{ fontWeight: 'bold' }}>
              {meta.dateDisplay}
            </p>
            <p className="sermon-info-preacher" style={{ margin: '0.5rem 0' }}>
              {t.by}
            </p>
            <p className="sermon-info-location" style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              {t.at} {meta.location}.
            </p>

            <hr className="sermon-info-divider" style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '1.5rem auto', width: '50%' }} />

            {/* Title & scripture */}
            <p className="sermon-info-title" style={{ fontSize: '1.3rem', color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', fontWeight: 'bold', marginBottom: '0.5rem' }}>{meta.title}</p>
            <p className="sermon-info-scripture" style={{ fontStyle: 'italic' }}>{meta.scripture}</p>
            
            {lang === 'es' && meta.isTranslated && !meta.isAutoTranslated && (
              <>
                <hr className="sermon-info-divider" style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '1.5rem auto', width: '50%' }} />
                <p className="sermon-info-translator" style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-gold)', marginTop: '1rem' }}>
                  Traducción al español por el Misionero Allan Román
                </p>
              </>
            )}

            {meta.isTranslated && meta.isAutoTranslated && (
              <>
                <hr className="sermon-info-divider" style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '1.5rem auto', width: '50%' }} />
                <p className="sermon-info-translator" style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-gold)', marginTop: '1rem', lineHeight: '1.5' }}>
                  {lang === 'es' 
                    ? 'Traducción semiautomatizada con un mínimo de auditoría humana. La traducción totalmente revisada se está realizando poco a poco. Si identifica algún error o punto de mejora, póngase en contacto con nosotros en '
                    : 'Tradução semi-automatizada com o mínimo de auditoria humana. A tradução plenamente revisada está sendo realizada aos poucos. Se identificar qualquer erro ou pontos de melhoria, entre em contato conosco em '}
                  <a href="/contato" style={{ textDecoration: 'underline', color: 'inherit' }}>{lang === 'es' ? 'nuestro formulario de contacto' : 'nosso formulário de contato'}</a>.
                </p>
              </>
            )}
          </div>
        </div>
      </details>
    </div>
  );
}
