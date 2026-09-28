'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function HomeDevotionalCard({ lang, dict }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [todayData, setTodayData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Determinamos a hora do dia para mostrar "Manhã" ou "Noite"
  const [isEvening, setIsEvening] = useState(false);
  
  const monthNamesPt = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const monthNamesEs = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const monthNamesEn = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getMonthName = useCallback((m) => {
    if (lang === 'pt') return monthNamesPt[m];
    if (lang === 'es') return monthNamesEs[m];
    return monthNamesEn[m];
  }, [lang]);

  useEffect(() => {
    async function loadTodayDevotional() {
      try {
        const now = new Date();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hour = now.getHours();
        
        // Se for depois das 16:00, mostramos a leitura da noite por padrão
        const evening = hour >= 16;
        setIsEvening(evening);
        
        const monthStr = month.toString().padStart(2, '0');
        const dateStr = `${month}-${day}`;
        
        const res = await fetch(`/data/devotional/${lang}/${monthStr}.json`);
        if (!res.ok) throw new Error('Failed to load');
        
        const data = await res.json();
        
        const am = data.find((e) => e && e.date === dateStr && e.time === 'am');
        const pm = data.find((e) => e && e.date === dateStr && e.time === 'pm');
        
        setTodayData({
          month,
          day,
          am,
          pm
        });
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    
    loadTodayDevotional();
  }, [lang]);

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  if (error || (!loading && !todayData)) return null;

  const currentEntry = todayData ? (isEvening ? todayData.pm : todayData.am) : null;
  const timeLabel = isEvening ? 
    (lang === 'pt' ? 'Noite' : lang === 'es' ? 'Noche' : 'Evening') : 
    (lang === 'pt' ? 'Manhã' : lang === 'es' ? 'Mañana' : 'Morning');
    
  const devCardTitle = lang === 'pt' ? 'Devocional Diário' : lang === 'es' ? 'Devocional Diario' : 'Daily Devotional';
  const devCardSubtitle = lang === 'pt' ? 'Manhã e Noite por Charles Spurgeon.' : lang === 'es' ? 'Mañana y Noche por Charles Spurgeon.' : 'Morning and Evening by Charles Spurgeon.';
  const expandLabel = dict?.home?.bibleCard?.expand || (lang === 'pt' ? 'Ler Completo' : lang === 'es' ? 'Leer Completo' : 'Read Full');
  const collapseLabel = dict?.home?.bibleCard?.collapse || (lang === 'pt' ? 'Fechar Leitor' : lang === 'es' ? 'Cerrar Lector' : 'Close Reader');
  const fullPageLabel = lang === 'pt' ? 'Página do Devocional' : lang === 'es' ? 'Página del Devocional' : 'Devotional Page';
  
  // Format body to get paragraphs
  const formatBody = (body) => {
    if (!body) return [];
    let cleaned = body.replace(/\r\n/g, '\n').trim();
    const parts = cleaned.split(/\n\n+/);
    if (parts.length > 1 && parts[0].length < 250 && parts[0].includes('—')) {
      parts.shift(); 
    }
    cleaned = parts.join('\n\n');
    return cleaned.split('\n\n').filter((p) => p.trim().length > 0);
  };
  
  const paragraphs = currentEntry ? formatBody(currentEntry.body) : [];
  // Pegamos apenas os primeiros 200 caracteres para aguçar a curiosidade
  const snippet = paragraphs.length > 0 ? paragraphs[0].substring(0, 180) + '...' : '';

  return (
    <section className="home-bible-card home-devotional-card" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
      <div className="home-bible-card-inner">
        {/* Header - always visible */}
        <div className="home-bible-card-header" onClick={handleToggle} role="button" tabIndex={0} aria-expanded={isExpanded}>
          <div className="home-bible-card-header-text">
            <div className="home-bible-card-icon" style={{ background: 'rgba(100, 150, 255, 0.1)', borderColor: 'rgba(100, 150, 255, 0.15)' }}>🌅</div>
            <div>
              <h2 className="home-bible-card-title">{devCardTitle}</h2>
              <p className="home-bible-card-subtitle">{devCardSubtitle}</p>
            </div>
          </div>
          
          <button 
            className={`home-bible-toggle-btn ${isExpanded ? 'expanded' : ''}`} 
            onClick={(e) => { e.stopPropagation(); handleToggle(); }}
            aria-label={isExpanded ? collapseLabel : expandLabel}
            style={{ borderColor: 'rgba(100, 150, 255, 0.3)', color: '#8fb4ff' }}
          >
            <span className="home-bible-toggle-label">
              {isExpanded ? collapseLabel : expandLabel}
            </span>
            <svg className="home-bible-toggle-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        {/* Sneak Peek - Visible when NOT expanded */}
        {!isExpanded && !loading && currentEntry && (
          <div className="home-devotional-snippet" onClick={handleToggle} style={{ cursor: 'pointer', padding: '0 2rem 1.5rem', opacity: 0.8 }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {timeLabel} • {todayData.day} de {getMonthName(todayData.month)}
            </h4>
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.95rem' }}>
              &ldquo;{snippet}&rdquo; <span style={{ color: '#8fb4ff', fontWeight: 'bold' }}>{lang === 'pt' ? 'Continuar lendo...' : 'Read more...'}</span>
            </p>
          </div>
        )}

        {/* Controls - always visible when expanded (sticky) */}
        <div className={`home-bible-controls-wrapper ${isExpanded ? 'visible' : ''}`} style={{ borderTopColor: 'rgba(100, 150, 255, 0.15)' }}>
          <div className="home-bible-controls">
            <div className="home-bible-control-group">
              <label>{lang === 'pt' ? 'Período' : lang === 'es' ? 'Período' : 'Time'}</label>
              <select
                className="bible-select"
                value={isEvening ? 'pm' : 'am'}
                onChange={(e) => setIsEvening(e.target.value === 'pm')}
              >
                <option value="am">{lang === 'pt' ? 'Leitura da Manhã' : lang === 'es' ? 'Lectura de la Mañana' : 'Morning Reading'}</option>
                <option value="pm">{lang === 'pt' ? 'Leitura da Noite' : lang === 'es' ? 'Lectura de la Noche' : 'Evening Reading'}</option>
              </select>
            </div>

            <div className="home-bible-control-group home-bible-control-toggle" style={{ marginLeft: 'auto' }}>
              <button
                className="home-bible-inline-toggle"
                onClick={handleToggle}
                title={collapseLabel}
                style={{ borderColor: 'rgba(100, 150, 255, 0.3)', color: '#8fb4ff' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible content */}
        <div className={`home-bible-content ${isExpanded ? 'expanded' : ''}`}>
          <div className="home-bible-content-inner">
            {loading && (
              <div className="bible-loading" style={{ textAlign: 'center', padding: '2rem' }}>
                Carregando...
              </div>
            )}

            {!loading && isExpanded && currentEntry && (
              <div className="bible-verses">
                <h3 className="bible-chapter-title" style={{ margin: '0 0 0.5rem 0' }}>
                  {timeLabel} • {todayData.day} de {getMonthName(todayData.month)}
                </h3>
                
                {currentEntry.verse && (
                  <div className="dev-verse" style={{ fontStyle: 'italic', color: 'var(--accent)', marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--accent)' }}>
                    {currentEntry.verse}
                  </div>
                )}

                {paragraphs.map((text, i) => (
                  <p key={i} className="bible-verse" style={{ paddingLeft: 0 }}>
                    {text}
                  </p>
                ))}
              </div>
            )}

            {/* Devotional navigation */}
            {!loading && isExpanded && currentEntry && (
              <div className="home-bible-nav">
                <Link
                  href={`/${lang}/devotional`}
                  className="home-bible-fullpage-link"
                  style={{ borderColor: 'rgba(100, 150, 255, 0.3)', color: '#8fb4ff', margin: '0 auto' }}
                >
                  {fullPageLabel} →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
