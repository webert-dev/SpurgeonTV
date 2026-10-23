'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageButtons({ currentLang }) {
  const pathname = usePathname();
  const router = useRouter();

  // Identify current language from props or pathname
  const pathLang = pathname ? pathname.split('/')[1] : null;
  const activeLang = ['en', 'pt', 'es'].includes(pathLang) ? pathLang : (currentLang || 'en');

  const handleLanguageChange = (newLang) => {
    if (newLang === activeLang) return;
    
    if (!pathname || pathname === '/') {
      router.push(`/${newLang}`);
      return;
    }

    const segments = pathname.split('/');
    if (segments.length > 1 && ['en', 'pt', 'es'].includes(segments[1])) {
      segments[1] = newLang;
      const search = typeof window !== 'undefined' ? window.location.search : '';
      router.push(`${segments.join('/') || `/${newLang}`}${search}`);
    } else {
      router.push(`/${newLang}${pathname}`);
    }
  };

  const languages = [
    { code: 'en', label: 'English', shortLabel: 'EN' },
    { code: 'pt', label: 'Português', shortLabel: 'PT' },
    { code: 'es', label: 'Español', shortLabel: 'ES' },
  ];

  return (
    <div
      className="language-buttons-global"
      role="group"
      aria-label="Language selection"
      style={{
        display: 'flex',
        alignItems: 'center',
        background: 'var(--surface-hover)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        padding: '2px',
        gap: '2px',
      }}
    >
      {languages.map((langItem) => {
        const isActive = activeLang === langItem.code;
        return (
          <button
            key={langItem.code}
            onClick={() => handleLanguageChange(langItem.code)}
            title={langItem.label}
            aria-label={langItem.label}
            aria-pressed={isActive}
            className={`lang-btn ${isActive ? 'active' : ''}`}
            style={{
              background: isActive ? 'var(--accent)' : 'transparent',
              color: isActive ? '#000' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '4px',
              padding: '0.3rem 0.55rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: isActive ? 700 : 500,
              letterSpacing: '0.04em',
              lineHeight: '14px',
              height: '24px',
              minWidth: '32px',
              transition: 'all 0.2s ease',
            }}
          >
            {langItem.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
