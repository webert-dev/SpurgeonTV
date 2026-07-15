'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * SermonInfoPanel
 * A collapsible panel that shows enriched metadata for a single sermon.
 * Rendered inside the volume listing below each sermon item.
 */
export default function SermonInfoPanel({ meta, lang = 'en', dict }) {
  const [open, setOpen] = useState(false);

  // Fallback if dict is not provided
  const t = dict?.reader?.panel || {
    aSermon: 'A Sermon', hide: 'Hide details', view: 'View sermon details', by: 'By the Rev. C. H. Spurgeon', at: 'At'
  };

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
      )}
    </div>
  );
}
