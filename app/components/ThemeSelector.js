'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeSelector({ dict }) {
  const { theme, setTheme, isLoaded } = useTheme();

  // Se não estiver carregado, mantemos opacidade baixa para evitar layout shift
  if (!isLoaded) {
    return <div style={{ width: '80px', height: '28px', opacity: 0 }}></div>;
  }

  // Traduções com fallback para o inglês caso dict não esteja disponível na prop
  const options = [
    { value: 'dark', label: dict?.reader?.tools?.themes?.dark || 'Dark' },
    { value: 'clear', label: dict?.reader?.tools?.themes?.clear || 'Clear' },
    { value: 'sepia', label: dict?.reader?.tools?.themes?.sepia || 'Sepia' }
  ];

  return (
    <div className="theme-selector-global" style={{ display: 'flex', alignItems: 'center' }}>
      <select 
        value={theme} 
        onChange={(e) => setTheme(e.target.value)}
        title={dict?.reader?.tools?.theme || "Theme"}
        style={{
          background: 'var(--surface-hover)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          padding: '0.2rem 0.5rem',
          fontFamily: 'inherit',
          fontSize: '0.85rem',
          cursor: 'pointer',
          outline: 'none'
        }}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
