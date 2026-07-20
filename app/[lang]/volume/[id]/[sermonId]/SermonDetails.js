"use client";

import { useState } from 'react';

export default function SermonDetails({ meta, lang, dict }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fallback
  const titleText = dict?.reader?.details || (lang === 'pt' ? "Detalhes e Créditos" : lang === 'es' ? "Detalles y Créditos" : "Details & Credits");
  const t = dict?.reader?.panel || {
    aSermon: 'A Sermon', hide: 'Hide details', view: 'View sermon details', by: 'By the Rev. C. H. Spurgeon', at: 'At'
  };

  if (!meta) return null;

  return (
    <div className="sermon-tags-container" style={{ marginBottom: '1rem' }}>
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
            <span className="summary-text" style={{ textTransform: 'uppercase' }}>{titleText}</span>
          </div>
        </summary>
        <div className="sermon-tags-content" style={{ padding: '1rem 1.5rem' }}>
          <div className="sermon-info-card" style={{ background: 'transparent', border: 'none', padding: 0, boxShadow: 'none' }}>
            {/* Header line */}
            <p className="sermon-info-no">No. {meta.sermonNumber}</p>
            <p className="sermon-info-subtitle">{t.aSermon}</p>
            <p className="sermon-info-collection">{meta.collectionName}</p>
            <p className="sermon-info-collection" style={{ marginTop: '0.2rem' }}>Volume {meta.volumeNumber}</p>

            <hr className="sermon-info-divider" />

            {/* Delivery info */}
            <p className="sermon-info-delivery">
              {meta.dateDisplay}
            </p>
            <p className="sermon-info-preacher">
              {t.by}
            </p>
            <p className="sermon-info-location">
              {t.at} {meta.location}.
            </p>

            <hr className="sermon-info-divider" />

            {/* Title & scripture */}
            <p className="sermon-info-title">{meta.title}</p>
            <p className="sermon-info-scripture">{meta.scripture}</p>

            {lang === 'es' && meta.isTranslated && (
              <>
                <hr className="sermon-info-divider" />
                <p className="sermon-info-translator" style={{ fontSize: '0.85em', fontStyle: 'italic', color: 'var(--color-gold)', textAlign: 'center', marginTop: '1rem' }}>
                  Traducción al español por el Misionero Allan Román
                </p>
              </>
            )}
          </div>
        </div>
      </details>
    </div>
  );
}
