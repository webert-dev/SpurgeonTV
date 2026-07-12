'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * SermonInfoPanel
 * A collapsible panel that shows enriched metadata for a single sermon.
 * Rendered inside the volume listing below each sermon item.
 */
export default function SermonInfoPanel({ meta, lang = 'en' }) {
  const [open, setOpen] = useState(false);

  const i18n = {
    en: { aSermon: 'A Sermon', hide: 'Hide details', view: 'View sermon details', by: 'By the Rev. C. H. Spurgeon', at: 'At' },
    es: { aSermon: 'Un Sermón', hide: 'Ocultar detalles', view: 'Ver detalles del sermón', by: 'Por el Rev. C. H. Spurgeon', at: 'En' },
    pt: { aSermon: 'Um Sermão', hide: 'Ocultar detalhes', view: 'Ver detalhes do sermão', by: 'Pelo Rev. C. H. Spurgeon', at: 'Em' },
  };
  const t = i18n[lang] || i18n.en;

  if (!meta) return null;

  return (
    <div className="sermon-info-panel">
      <button
        className={`sermon-info-toggle${open ? ' sermon-info-toggle--open' : ''}`}
        onClick={(e) => {
          // Prevent the parent <Link> from navigating
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-label={`${open ? t.hide : t.view} for sermon ${meta.number}`}
      >
        <span className="sermon-info-toggle-icon" aria-hidden="true">
          {open ? '▲' : '▼'}
        </span>
        <span className="sermon-info-toggle-label">
          {open ? t.hide : t.view}
        </span>
      </button>

      {open && (
        <div className="sermon-info-body" onClick={(e) => e.preventDefault()}>
          <div className="sermon-info-card">
            {/* Header line */}
            <p className="sermon-info-no">No. {meta.sermonNumber}</p>
            <p className="sermon-info-subtitle">{t.aSermon}</p>
            <p className="sermon-info-collection">{meta.volumeLabel}</p>

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
            
            <div className="sermon-info-langs" style={{ display: 'flex', gap: '1rem', marginTop: '1rem', fontSize: '0.85em', color: 'var(--text-secondary)' }}>
              <span>Available in:</span>
              {meta.availableLangs?.includes('en') ? (
                <Link href={`/en/volume/${meta.volumeId}/${meta.sermonSlug}`} style={{ color: lang === 'en' ? 'var(--color-gold)' : 'inherit', textDecoration: 'none' }}>EN</Link>
              ) : (
                <span style={{ opacity: 0.3 }}>EN</span>
              )}
              {meta.availableLangs?.includes('es') ? (
                <Link href={`/es/volume/${meta.volumeId}/${meta.sermonSlug}`} style={{ color: lang === 'es' ? 'var(--color-gold)' : 'inherit', textDecoration: 'none' }}>ES</Link>
              ) : (
                <span style={{ opacity: 0.3 }}>ES</span>
              )}
              {meta.availableLangs?.includes('pt') ? (
                <Link href={`/pt/volume/${meta.volumeId}/${meta.sermonSlug}`} style={{ color: lang === 'pt' ? 'var(--color-gold)' : 'inherit', textDecoration: 'none' }}>PT</Link>
              ) : (
                <span style={{ opacity: 0.3 }}>PT</span>
              )}
            </div>

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
      )}
    </div>
  );
}
