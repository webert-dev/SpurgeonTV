"use client";

import { useState, useEffect } from 'react';
import { useBibleSettings } from '../../../../components/BibleSettingsProvider';

export default function ReaderTools({ dict }) {
  const { integrationEnabled, setIntegrationEnabled, tooltipTranslation, setTooltipTranslation } = useBibleSettings();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSizeOffset, setFontSizeOffset] = useState(0); // offset levels
  const [isZenMode, setIsZenMode] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [fontFamily, setFontFamily] = useState('serif');
  const [lineHeight, setLineHeight] = useState('1.85');

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

  // Font Family Update
  useEffect(() => {
    let ff = 'var(--font-serif)';
    if (fontFamily === 'sans') ff = 'var(--font-sans)';
    else if (fontFamily === 'comfortaa') ff = '"Comfortaa", sans-serif';
    else if (fontFamily === 'lexend') ff = '"Lexend", sans-serif';
    
    document.documentElement.style.setProperty('--reader-font-family', ff);
  }, [fontFamily]);

  // Line Height Update
  useEffect(() => {
    document.documentElement.style.setProperty('--reader-line-height', lineHeight);
  }, [lineHeight]);

  return (
    <>
      {/* Barra de Progresso no topo */}
      <div 
        className="reading-progress-bar" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Toolbar Flutuante */}
      <div className={`reader-toolbar ${isZenMode ? 'zen-mode-toolbar' : ''} ${isMobileExpanded ? 'mobile-expanded' : 'mobile-collapsed'}`}>
        
        {/* Mobile Toggle Button (Visible only on mobile via CSS) */}
        <button 
          className="toolbar-btn mobile-toggle-btn"
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          title="Tools"
        >
          {isMobileExpanded ? '✕' : '⚙'}
        </button>

        <div className="toolbar-content">
          {/* Configurações da Bíblia */}
          <div className="toolbar-bible-settings">
            <label className="toolbar-toggle" title={dict ? dict.reader.tools.settings : "Enable Bible Links"}>
              <input 
                type="checkbox" 
                checked={integrationEnabled}
                onChange={(e) => setIntegrationEnabled(e.target.checked)}
              />
              <span className="toolbar-toggle-slider"></span>
              <span className="toolbar-toggle-label">{dict ? dict.reader.tools.settings : "Bible Links"}</span>
            </label>
            
            {integrationEnabled && (
              <select 
                className="toolbar-select"
                value={tooltipTranslation}
                onChange={(e) => setTooltipTranslation(e.target.value)}
                title={dict ? dict.reader.tools.translation : "Translation for verses"}
              >
                <option value="kjv">KJV</option>
                <option value="asv">ASV</option>
                <option value="web">WEB</option>
                <option value="acf">ACF (PT)</option>
                <option value="nvi">NVI (PT)</option>
                <option value="rvr">RVR (ES)</option>
                <option value="frlsg">FRLSG (FR)</option>
                <option value="lut">LUT (DE)</option>
                <option value="cuv">CUV (ZH)</option>
                <option value="synod">Synodal (Ru)</option>
                <option value="svd">SVD (Ar)</option>
                <option value="krv">KRV (Ko)</option>
                <option value="vi1934">1934 (Vi)</option>
                <option value="ncv">NCV (ZH)</option>
                <option value="el">Greek (EL)</option>
                <option value="eo">Esperanto (EO)</option>
                <option value="fi">Finnish (FI)</option>
                <option value="pr">Pyhä (FI)</option>
                <option value="ro">Dumitru (RO)</option>
                <option value="aa">AA (PT)</option>
                <option value="wlc">Hebrew</option>
                <option value="tr">Greek</option>
              </select>
            )}
          </div>

          <div className="toolbar-divider" />

          {/* Theme Selector */}
          <div className="toolbar-theme-settings" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{dict ? dict.reader.tools.theme : "Theme"}</span>
            <select 
              className="toolbar-select"
              onChange={(e) => {
                document.body.classList.remove('theme-clear', 'theme-sepia');
                if (e.target.value !== 'dark') {
                  document.body.classList.add(`theme-${e.target.value}`);
                }
              }}
              title={dict ? dict.reader.tools.theme : "Reading Theme"}
              style={{ width: '100%', marginBottom: '0.5rem' }}
            >
              <option value="dark">{dict ? dict.reader.tools.themes.dark : "Dark"}</option>
              <option value="clear">{dict ? dict.reader.tools.themes.clear : "Clear"}</option>
              <option value="sepia">{dict ? dict.reader.tools.themes.sepia : "Sepia"}</option>
            </select>
          </div>

          <div className="toolbar-divider" />

          {/* Typography Settings */}
          <div className="toolbar-theme-settings" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{dict ? dict.reader.tools.font : "Font"}</span>
            <select 
              className="toolbar-select"
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              title={dict ? dict.reader.tools.font : "Font Family"}
              style={{ width: '100%', marginBottom: '0.5rem' }}
            >
              <option value="serif">{dict ? dict.reader.tools.fonts.serif : "Serif (Classic)"}</option>
              <option value="sans">{dict ? dict.reader.tools.fonts.sans : "Sans-Serif (Clean)"}</option>
              <option value="comfortaa">{dict ? dict.reader.tools.fonts.comfortaa : "Comfortaa"}</option>
              <option value="lexend">{dict ? dict.reader.tools.fonts.lexend : "Dyslexia Friendly"}</option>
            </select>

            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{dict ? dict.reader.tools.spacing : "Spacing"}</span>
            <select 
              className="toolbar-select"
              value={lineHeight}
              onChange={(e) => setLineHeight(e.target.value)}
              title={dict ? dict.reader.tools.spacing : "Line Spacing"}
              style={{ width: '100%', marginBottom: '0.5rem' }}
            >
              <option value="1.5">{dict ? dict.reader.tools.spacings.compact : "Compact"}</option>
              <option value="1.85">{dict ? dict.reader.tools.spacings.comfortable : "Comfortable"}</option>
              <option value="2.2">{dict ? dict.reader.tools.spacings.relaxed : "Relaxed"}</option>
            </select>
          </div>

          <div className="toolbar-divider" />

          <button 
            className="toolbar-btn" 
            onClick={() => setFontSizeOffset(prev => Math.max(prev - 3, -4))}
            title={dict ? dict.reader.tools.decreaseFont : "Decrease font size"}
            aria-label={dict ? dict.reader.tools.decreaseFont : "Decrease font size"}
          >
            A-
          </button>
          <button 
            className="toolbar-btn" 
            onClick={() => setFontSizeOffset(prev => Math.min(prev + 3, 8))}
            title={dict ? dict.reader.tools.increaseFont : "Increase font size"}
            aria-label={dict ? dict.reader.tools.increaseFont : "Increase font size"}
          >
            A+
          </button>
          
          <div className="toolbar-divider" />
          
          <button 
            className={`toolbar-btn ${isZenMode ? 'active' : ''}`} 
            onClick={() => setIsZenMode(!isZenMode)}
            title={dict ? dict.reader.tools.focusMode : "Focus Mode"}
            aria-label={dict ? dict.reader.tools.focusMode : "Focus Mode"}
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
      </div>
    </>
  );
}

