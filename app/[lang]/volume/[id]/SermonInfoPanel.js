'use client';

import { useState } from 'react';

/**
 * SermonInfoPanel
 * A collapsible panel that shows enriched metadata for a single sermon.
 * Rendered inside the volume listing below each sermon item.
 */
export default function SermonInfoPanel({ meta }) {
  const [open, setOpen] = useState(false);

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
        aria-label={`${open ? 'Hide' : 'View'} information for sermon ${meta.number}`}
      >
        <span className="sermon-info-toggle-icon" aria-hidden="true">
          {open ? '▲' : '▼'}
        </span>
        <span className="sermon-info-toggle-label">
          {open ? 'Hide details' : 'View sermon details'}
        </span>
      </button>

      {open && (
        <div className="sermon-info-body" onClick={(e) => e.preventDefault()}>
          <div className="sermon-info-card">
            {/* Header line */}
            <p className="sermon-info-no">No. {meta.sermonNumber}</p>
            <p className="sermon-info-subtitle">A Sermon</p>
            <p className="sermon-info-collection">{meta.volumeLabel}</p>

            <hr className="sermon-info-divider" />

            {/* Delivery info */}
            <p className="sermon-info-delivery">
              Published in {meta.dateDisplay}
            </p>
            <p className="sermon-info-preacher">
              By the Rev. C. H. Spurgeon
            </p>
            <p className="sermon-info-location">
              At {meta.location}.
            </p>

            <hr className="sermon-info-divider" />

            {/* Title & scripture */}
            <p className="sermon-info-title">{meta.title}</p>
            <p className="sermon-info-scripture">{meta.scripture}</p>
          </div>
        </div>
      )}
    </div>
  );
}
