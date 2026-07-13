"use client";

import { useState, useEffect } from 'react';
import { useBibleSettings } from '../../../../components/BibleSettingsProvider';

export default function ReaderTools() {
  const { integrationEnabled, setIntegrationEnabled, tooltipTranslation, setTooltipTranslation } = useBibleSettings();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSizeOffset, setFontSizeOffset] = useState(0); // offset levels
  const [isZenMode, setIsZenMode] = useState(false);

  // Scroll Progress Tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (documentHeight > 0) {
        const progress = scrollPosition / documentHeight;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Zen Mode Body Class Toggle
  useEffect(() => {
    if (isZenMode) {
      document.body.classList.add('zen-mode-active');
    } else {
      document.body.classList.remove('zen-mode-active');
    }
    return () => document.body.classList.remove('zen-mode-active');
  }, [isZenMode]);

  // Font Size Variable Update
  useEffect(() => {
    // 1 offset level = 0.1rem change
    document.documentElement.style.setProperty('--font-size-offset', `${fontSizeOffset * 0.1}rem`);
  }, [fontSizeOffset]);

  return (
    <>
      {/* Barra de Progresso no topo */}
      <div 
        className="reading-progress-bar" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Toolbar Flutuante */}
      <div className={`reader-toolbar ${isZenMode ? 'zen-mode-toolbar' : ''}`}>
        {/* Configurações da Bíblia */}
        <div className="toolbar-bible-settings">
          <label className="toolbar-toggle" title="Integrar textos bíblicos">
            <input 
              type="checkbox" 
              checked={integrationEnabled}
              onChange={(e) => setIntegrationEnabled(e.target.checked)}
            />
            <span className="toolbar-toggle-slider"></span>
            <span className="toolbar-toggle-label">Bible Links</span>
          </label>
          
          {integrationEnabled && (
            <select 
              className="toolbar-select"
              value={tooltipTranslation}
              onChange={(e) => setTooltipTranslation(e.target.value)}
              title="Translation for verses"
            >
              <option value="kjv">KJV</option>
              <option value="asv">ASV</option>
              <option value="web">WEB</option>
              <option value="acf">ACF (PT)</option>
              <option value="nvi">NVI (PT)</option>
              <option value="rvr">RVR (ES)</option>
              <option value="wlc">Hebrew</option>
              <option value="tr">Greek</option>
            </select>
          )}
        </div>

        <div className="toolbar-divider" />

        <button 
          className="toolbar-btn" 
          onClick={() => setFontSizeOffset(prev => Math.max(prev - 3, -4))}
          title="Diminuir fonte"
          aria-label="Diminuir fonte"
        >
          A-
        </button>
        <button 
          className="toolbar-btn" 
          onClick={() => setFontSizeOffset(prev => Math.min(prev + 3, 8))}
          title="Aumentar fonte"
          aria-label="Aumentar fonte"
        >
          A+
        </button>
        
        <div className="toolbar-divider" />
        
        <button 
          className={`toolbar-btn ${isZenMode ? 'active' : ''}`} 
          onClick={() => setIsZenMode(!isZenMode)}
          title="Modo Foco"
          aria-label="Modo Foco"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isZenMode ? (
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
            ) : (
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            )}
          </svg>
        </button>
      </div>
    </>
  );
}
