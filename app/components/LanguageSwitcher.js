'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({ currentLang }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLang) => {
    if (!pathname) return;
    
    // The pathname typically starts with /[lang]
    const segments = pathname.split('/');
    if (segments.length > 1) {
      segments[1] = newLang; // replace the lang segment
      const newPath = segments.join('/') || '/';
      router.push(newPath);
    }
  };

  return (
    <div className="language-switcher" style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem' }}>
      <select 
        value={currentLang} 
        onChange={(e) => handleLanguageChange(e.target.value)}
        style={{
          background: 'var(--surface-hover)',
          color: 'var(--text)',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          padding: '0.2rem 0.5rem',
          fontFamily: 'inherit',
          fontSize: '0.85rem',
          cursor: 'pointer',
          outline: 'none'
        }}
      >
        <option value="en">EN</option>
        <option value="pt">PT</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
}
