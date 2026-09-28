'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeSelector({ dict }) {
  const { theme, setTheme, isLoaded } = useTheme();

  // Se não estiver carregado, mantemos opacidade baixa para evitar layout shift
  if (!isLoaded) {
    return <div style={{ width: '80px', height: '28px', opacity: 0 }}></div>;
  }

  const IconButton = ({ value, label, children }) => (
    <button
      onClick={() => setTheme(value)}
      title={label}
      aria-label={label}
      style={{
        background: theme === value ? 'var(--accent)' : 'transparent',
        color: theme === value ? '#000' : 'var(--text-secondary)',
        border: 'none',
        borderRadius: '4px',
        padding: '0.3rem 0.5rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </button>
  );

  return (
    <div className="theme-selector-global" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      background: 'var(--surface-hover)', 
      border: '1px solid var(--border)', 
      borderRadius: '6px', 
      padding: '2px',
      gap: '2px'
    }}>
      <IconButton value="clear" label={dict?.reader?.tools?.themes?.clear || 'Claro'}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
      </IconButton>
      <IconButton value="sepia" label={dict?.reader?.tools?.themes?.sepia || 'Sépia'}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
      </IconButton>
      <IconButton value="dark" label={dict?.reader?.tools?.themes?.dark || 'Escuro'}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </IconButton>
    </div>
  );
}
