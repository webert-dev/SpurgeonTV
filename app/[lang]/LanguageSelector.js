'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSelector({ currentLang }) {
  const pathname = usePathname();

  // Helper to replace the current language prefix with a new one
  const getLocalizedPath = (targetLang) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['en', 'es', 'pt'].includes(segments[0])) {
      segments[0] = targetLang;
    } else {
      segments.unshift(targetLang);
    }
    return `/${segments.join('/')}`;
  };

  return (
    <div className="language-selector" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: '1.5rem', fontSize: '0.9rem' }}>
      <Link href={getLocalizedPath('en')} style={{ color: currentLang === 'en' ? 'var(--color-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: currentLang === 'en' ? 'bold' : 'normal' }}>EN</Link>
      <span style={{ color: 'var(--border-color)', opacity: 0.5 }}>|</span>
      <Link href={getLocalizedPath('es')} style={{ color: currentLang === 'es' ? 'var(--color-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: currentLang === 'es' ? 'bold' : 'normal' }}>ES</Link>
      <span style={{ color: 'var(--border-color)', opacity: 0.5 }}>|</span>
      <Link href={getLocalizedPath('pt')} style={{ color: currentLang === 'pt' ? 'var(--color-gold)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: currentLang === 'pt' ? 'bold' : 'normal' }}>PT</Link>
    </div>
  );
}
