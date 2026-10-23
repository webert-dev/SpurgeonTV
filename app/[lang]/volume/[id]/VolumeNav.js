'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VolumeNav({ currentVolume, lang, dict }) {
  const [isOpen, setIsOpen] = useState(true);
  const totalVolumes = 63;
  const volumes = Array.from({ length: totalVolumes }, (_, i) => i + 1);

  const prevNum = currentVolume > 1 ? currentVolume - 1 : null;
  const nextNum = currentVolume < totalVolumes ? currentVolume + 1 : null;

  const currentFormatted = String(currentVolume).padStart(2, '0');
  const prevFormatted = prevNum ? String(prevNum).padStart(2, '0') : null;
  const nextFormatted = nextNum ? String(nextNum).padStart(2, '0') : null;

  const titleText = dict?.volume?.browseVolumes || (
    lang === 'pt' ? 'Navegar pelos Volumes' :
    lang === 'es' ? 'Navegar por los Volúmenes' :
    'Browse Volumes'
  );

  const rangeText = dict?.volume?.range || (
    lang === 'pt' ? '01 ao 63' :
    lang === 'es' ? '01 al 63' :
    '01 to 63'
  );

  const prevLabel = prevFormatted ? (
    dict?.volume?.prevVolumeShort
      ? dict.volume.prevVolumeShort.replace('{num}', prevFormatted)
      : `← Vol. ${prevFormatted}`
  ) : (
    lang === 'pt' ? '← Vol. Anterior' :
    lang === 'es' ? '← Vol. Anterior' :
    '← Previous Vol.'
  );

  const nextLabel = nextFormatted ? (
    dict?.volume?.nextVolumeShort
      ? dict.volume.nextVolumeShort.replace('{num}', nextFormatted)
      : `Vol. ${nextFormatted} →`
  ) : (
    lang === 'pt' ? 'Próximo Vol. →' :
    lang === 'es' ? 'Siguiente Vol. →' :
    'Next Vol. →'
  );

  const currentVolumeLabel = dict?.volume?.currentVolume || (
    lang === 'pt' ? 'Volume atual' :
    lang === 'es' ? 'Volumen actual' :
    'Current volume'
  );

  const toggleHideText = dict?.volume?.toggleHide || (
    lang === 'pt' ? 'Ocultar botões' :
    lang === 'es' ? 'Ocultar botones' :
    'Hide buttons'
  );

  const toggleShowText = dict?.volume?.toggleShow || (
    lang === 'pt' ? 'Mostrar botões (01–63)' :
    lang === 'es' ? 'Mostrar botones (01–63)' :
    'Show buttons (01–63)'
  );

  return (
    <nav className="volume-nav-panel" aria-label={titleText}>
      <div className={`volume-nav-header ${!isOpen ? 'no-border' : ''}`}>
        <div className="volume-nav-title-group">
          <div className="volume-nav-title">
            <span className="volume-nav-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                <path d="M6 6h10"/>
                <path d="M6 10h10"/>
              </svg>
            </span>
            <span>{titleText}</span>
          </div>
          <span className="volume-nav-badge">{rangeText}</span>
          <span className="volume-nav-current-pill">
            {currentVolumeLabel}: <strong>{currentFormatted}</strong>
          </span>
        </div>

        <div className="volume-nav-actions">
          {prevNum ? (
            <Link
              href={`/${lang}/volume/volume-${prevFormatted}/`}
              className="volume-nav-step-btn"
              title={`Volume ${prevFormatted}`}
              aria-label={`Volume ${prevFormatted}`}
            >
              {prevLabel}
            </Link>
          ) : (
            <span className="volume-nav-step-btn disabled" aria-disabled="true">
              {prevLabel}
            </span>
          )}

          {nextNum ? (
            <Link
              href={`/${lang}/volume/volume-${nextFormatted}/`}
              className="volume-nav-step-btn"
              title={`Volume ${nextFormatted}`}
              aria-label={`Volume ${nextFormatted}`}
            >
              {nextLabel}
            </Link>
          ) : (
            <span className="volume-nav-step-btn disabled" aria-disabled="true">
              {nextLabel}
            </span>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="volume-nav-toggle-btn"
            aria-expanded={isOpen}
            title={isOpen ? toggleHideText : toggleShowText}
          >
            <span>{isOpen ? '▲' : '▼'}</span>
            <span className="sr-only-mobile">{isOpen ? toggleHideText : toggleShowText}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="volume-nav-body">
          <div className="volume-nav-grid" role="list">
            {volumes.map((num) => {
              const formatted = String(num).padStart(2, '0');
              const isActive = num === currentVolume;
              const linkAriaLabel = dict?.volume?.goToVolume
                ? dict.volume.goToVolume.replace('{num}', formatted)
                : `Volume ${formatted}`;

              if (isActive) {
                return (
                  <span
                    key={num}
                    role="listitem"
                    className="volume-btn volume-btn--active"
                    aria-current="page"
                    title={`${currentVolumeLabel}: Volume ${formatted}`}
                    aria-label={`${currentVolumeLabel}: Volume ${formatted}`}
                  >
                    {formatted}
                  </span>
                );
              }

              return (
                <Link
                  key={num}
                  role="listitem"
                  href={`/${lang}/volume/volume-${formatted}/`}
                  className="volume-btn"
                  title={`Volume ${formatted}`}
                  aria-label={linkAriaLabel}
                >
                  {formatted}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
