'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ReaderTools from '../volume/[id]/[sermonId]/ReaderTools';
import TTSPlayer from '../../components/TTSPlayer';

export default function DevotionalClient({ lang, dict, devotionalData }) {
  const [today, setToday] = useState(null);
  const [morningEntry, setMorningEntry] = useState(null);
  const [eveningEntry, setEveningEntry] = useState(null);
  const [activeTab, setActiveTab] = useState('morning');
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const d = dict.devotional || {};

  const monthNames = [
    '', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const monthNamesPt = [
    '', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ];
  const monthNamesEs = [
    '', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ];

  const getMonthName = useCallback((m) => {
    if (lang === 'pt') return monthNamesPt[m] || monthNames[m];
    if (lang === 'es') return monthNamesEs[m] || monthNames[m];
    return monthNames[m];
  }, [lang]);

  const daysInMonth = (m) => {
    const d30 = [4, 6, 9, 11];
    if (m === 2) return 29;
    if (d30.includes(m)) return 30;
    return 31;
  };

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    setToday({ month, day });
    setSelectedMonth(month);
    setSelectedDay(day);
    setActiveTab(hour >= 16 ? 'evening' : 'morning');
  }, []);

  useEffect(() => {
    if (!selectedMonth || !selectedDay || !devotionalData?.length) return;
    setIsLoading(true);
    const dateStr = `${selectedMonth}-${selectedDay}`;
    const am = devotionalData.find((e) => e && e.date === dateStr && e.time === 'am');
    const pm = devotionalData.find((e) => e && e.date === dateStr && e.time === 'pm');
    setMorningEntry(am || null);
    setEveningEntry(pm || null);
    setIsLoading(false);
  }, [selectedMonth, selectedDay, devotionalData]);

  const activeEntry = activeTab === 'morning' ? morningEntry : eveningEntry;

  const formatBody = (body) => {
    if (!body) return [];
    let cleaned = body.replace(/\r\n/g, '\n').trim();
    // Split into paragraphs based on double newlines
    const parts = cleaned.split(/\n\n+/);
    // If the first paragraph is short (often the date/time header) and contains typical header artifacts
    if (parts.length > 1 && parts[0].length < 250 && parts[0].includes('—')) {
      parts.shift(); // Remove the duplicated header/keyverse
    }
    cleaned = parts.join('\n\n');
    return cleaned.split('\n\n').filter((p) => p.trim().length > 0);
  };

  const isToday = (m, day) => today && today.month === m && today.day === day;
  const isSelected = (m, day) => selectedMonth === m && selectedDay === day;

  const todayLabel = lang === 'pt' ? 'Hoje' : lang === 'es' ? 'Hoy' : 'Today';
  const morningLabel = lang === 'pt' ? 'Manhã' : lang === 'es' ? 'Mañana' : 'Morning';
  const eveningLabel = lang === 'pt' ? 'Noite' : lang === 'es' ? 'Noche' : 'Evening';
  const readingLabel = lang === 'pt' ? 'Leitura de Hoje' : lang === 'es' ? 'Lectura de Hoy' : "Today's Reading";

  return (
    <>
      <style>{`
        .dev-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 1rem 1.5rem 5rem;
          min-height: 80vh;
          position: relative;
        }
        .dev-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          gap: 2rem;
          margin-bottom: 2rem;
          margin-top: 1rem;
        }
        .dev-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          line-height: 1.2;
          margin: 0;
          flex: 2;
        }
        .dev-subtitle {
          color: var(--text-secondary);
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          margin: 0;
          line-height: 1.6;
          flex: 1;
        }
        @media (max-width: 768px) {
          .dev-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .dev-subtitle {
            max-width: 100%;
          }
        }
        .dev-date-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }
        .dev-date-btn {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 0.75rem 1.75rem;
          cursor: pointer;
          color: var(--text-primary);
          font-size: 1.05rem;
          font-family: var(--font-serif);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          transition: border-color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .dev-date-btn:hover {
          border-color: var(--brand-gold);
        }
        .dev-today-badge {
          font-size: 0.82rem;
          color: var(--brand-gold);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: rgba(212,175,55,0.12);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          border: 1px solid rgba(212,175,55,0.25);
        }
        .dev-calendar {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          animation: fadeIn 0.2s ease;
        }
        .dev-months {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
          justify-content: center;
        }
        .dev-month-btn {
          padding: 0.35rem 0.7rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.15s;
          min-width: 42px;
          text-align: center;
        }
        .dev-days {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(2.2rem, 1fr));
          gap: 0.3rem;
          max-width: 440px;
          margin: 0 auto;
        }
        .dev-day-btn {
          aspect-ratio: 1;
          border-radius: 50%;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dev-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--surface);
          border-radius: 12px;
          padding: 0.5rem;
          border: 1px solid var(--border);
          margin-bottom: 2rem;
          gap: 0.5rem;
          flex-wrap: nowrap;
        }
        @media (max-width: 640px) {
          .dev-controls-bar {
            padding: 0.25rem;
            gap: 0.2rem;
          }
        }
        .dev-tab {
          flex: 1;
          padding: 0.75rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          width: 100%;
        }
        @media (max-width: 640px) {
          .dev-tab {
            padding: 0.5rem 0.2rem;
            font-size: 0.85rem;
            gap: 0.2rem;
          }
          .dev-date-wrapper span {
            font-size: 0.85rem;
          }
          .dev-today-badge {
            font-size: 0.6rem !important;
            padding: 0.1rem 0.3rem !important;
          }
        }
        .dev-date-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }
        .dev-content {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          line-height: 1.9;
          animation: fadeIn 0.3s ease;
        }
        @media (max-width: 640px) {
          .dev-content {
            padding: 1.5rem 1.25rem;
          }
          .dev-container {
            padding: 2rem 1rem 4rem;
          }
        }
        .dev-keyverse {
          border-left: 3px solid var(--brand-gold);
          padding-left: 1.25rem;
          margin: 0 0 2rem 0;
          color: var(--brand-gold);
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          line-height: 1.6;
        }
        .dev-body-para {
          color: var(--text);
          margin-bottom: 1.25rem;
          font-size: calc(clamp(0.95rem, 2vw, 1.05rem) + var(--font-size-offset, 0rem));
          line-height: var(--reader-line-height, 1.85);
          font-family: var(--reader-font-family, inherit);
          text-align: justify;
        }
        .dev-attribution {
          text-align: center;
          margin-top: 3rem;
          color: var(--text-muted);
          font-size: 0.82rem;
          border-top: 1px solid var(--border);
          padding-top: 1.5rem;
        }
        .dev-loading {
          text-align: center;
          padding: 3rem;
          color: var(--text-muted);
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .dev-spinner {
          display: inline-block;
          width: 2rem;
          height: 2rem;
          border: 3px solid var(--border);
          border-top-color: var(--brand-gold);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-bottom: 1rem;
        }
        .dev-nav-arrows {
          display: flex;
          justify-content: space-between;
          margin-top: 1.5rem;
          gap: 1rem;
        }
        .dev-nav-btn {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.6rem 1.25rem;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex: 1;
          justify-content: center;
        }
        .dev-nav-btn:hover {
          border-color: var(--brand-gold);
          color: var(--brand-gold);
        }
      `}</style>

      <div className="dev-container">
        <ReaderTools dict={dict} />
        {/* Back link */}
        <Link href={`/${lang}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>
          ← {d.backHome || 'Home'}
        </Link>

        {/* Header */}
        <div className="dev-header">
          <h1 className="title-gold dev-title">
            {d.pageTitle || 'Spurgeon Morning and Evening Devotional'}
          </h1>
          <p className="dev-subtitle">
            {d.pageSubtitle || ''}
          </p>
        </div>

        {/* Combined Controls: Tabs + Date Bar */}
        <div className="dev-controls-bar">
          <button
            className="dev-tab"
            onClick={() => setActiveTab('morning')}
            style={{
              background: activeTab === 'morning' ? 'var(--brand-gold)' : 'transparent',
              color: activeTab === 'morning' ? '#000' : 'var(--text-secondary)',
            }}
          >
            <span>🌅</span>
            <span>{morningLabel}</span>
          </button>

          {today && (
            <div className="dev-date-wrapper">
              <button
                className="dev-date-btn"
                onClick={() => setShowCalendar(!showCalendar)}
                aria-expanded={showCalendar}
                style={{ padding: '0.5rem 1rem', fontSize: '0.95rem', borderRadius: '8px', border: 'none', background: 'transparent', borderBottom: '1px solid var(--border)' }}
              >
                <span>📅</span>
                <span>{getMonthName(selectedMonth)} {selectedDay}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                  {showCalendar ? '▲' : '▼'}
                </span>
              </button>
              {isToday(selectedMonth, selectedDay) && (
                <span className="dev-today-badge" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>✦ {readingLabel}</span>
              )}
            </div>
          )}

          <button
            className="dev-tab"
            onClick={() => setActiveTab('evening')}
            style={{
              background: activeTab === 'evening' ? 'var(--brand-gold)' : 'transparent',
              color: activeTab === 'evening' ? '#000' : 'var(--text-secondary)',
            }}
          >
            <span>🌙</span>
            <span>{eveningLabel}</span>
          </button>
        </div>

        {/* Calendar */}
        {showCalendar && (
          <div className="dev-calendar">
            <div className="dev-months">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <button
                  key={m}
                  className="dev-month-btn"
                  onClick={() => { setSelectedMonth(m); setSelectedDay(1); }}
                  style={{
                    border: `1px solid ${selectedMonth === m ? 'var(--brand-gold)' : 'var(--border)'}`,
                    background: selectedMonth === m ? 'rgba(212,175,55,0.15)' : 'transparent',
                    color: selectedMonth === m ? 'var(--brand-gold)' : 'var(--text-secondary)',
                    fontWeight: selectedMonth === m ? 700 : 400,
                  }}
                >
                  {monthNames[m].slice(0, 3)}
                </button>
              ))}
            </div>
            <div className="dev-days">
              {Array.from({ length: daysInMonth(selectedMonth) }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  className="dev-day-btn"
                  onClick={() => { setSelectedDay(day); setShowCalendar(false); }}
                  style={{
                    border: `1px solid ${isSelected(selectedMonth, day) ? 'var(--brand-gold)' : isToday(selectedMonth, day) ? 'var(--brand-purple)' : 'var(--border)'}`,
                    background: isSelected(selectedMonth, day) ? 'var(--brand-gold)' : isToday(selectedMonth, day) ? 'rgba(109,40,217,0.12)' : 'transparent',
                    color: isSelected(selectedMonth, day) ? '#000' : isToday(selectedMonth, day) ? 'var(--brand-purple)' : 'var(--text-secondary)',
                    fontWeight: isSelected(selectedMonth, day) || isToday(selectedMonth, day) ? 700 : 400,
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        {isLoading || !today ? (
          <div className="dev-loading">
            <div className="dev-spinner" />
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
              {lang === 'pt' ? 'Carregando...' : lang === 'es' ? 'Cargando...' : 'Loading...'}
            </p>
          </div>
        ) : activeEntry ? (
          <div key={`${selectedMonth}-${selectedDay}-${activeTab}`} className="dev-content">
            {/* TTS Player */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
              <TTSPlayer 
                lang={lang} 
                dict={dict} 
                text={`${activeEntry.keyverse}. ${formatBody(activeEntry.body).join(' ')}`} 
              />
            </div>

            {/* Key verse */}
            <blockquote className="dev-keyverse">
              {activeEntry.keyverse}
            </blockquote>

            {/* Body paragraphs */}
            {formatBody(activeEntry.body).map((para, i) => (
              <p key={i} className="dev-body-para">
                {para.trim()}
              </p>
            ))}
          </div>
        ) : (
          <div className="dev-loading">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📖</div>
            <p style={{ fontSize: '0.95rem' }}>
              {lang === 'pt' ? 'Nenhuma leitura encontrada para esta data.' : lang === 'es' ? 'No se encontró lectura para esta fecha.' : 'No reading found for this date.'}
            </p>
          </div>
        )}

        {/* Prev/Next day navigation */}
        {today && (
          <div className="dev-nav-arrows">
            <button
              className="dev-nav-btn"
              onClick={() => {
                let m = selectedMonth, day = selectedDay - 1;
                if (day < 1) { m = m - 1 < 1 ? 12 : m - 1; day = daysInMonth(m); }
                setSelectedMonth(m); setSelectedDay(day);
              }}
            >
              ← {lang === 'pt' ? 'Dia anterior' : lang === 'es' ? 'Día anterior' : 'Previous day'}
            </button>
            <button
              className="dev-nav-btn"
              onClick={() => { setSelectedMonth(today.month); setSelectedDay(today.day); }}
              style={{ maxWidth: '3rem', fontSize: '1.2rem' }}
              title={todayLabel}
            >
              ✦
            </button>
            <button
              className="dev-nav-btn"
              onClick={() => {
                let m = selectedMonth, day = selectedDay + 1;
                if (day > daysInMonth(m)) { m = m + 1 > 12 ? 1 : m + 1; day = 1; }
                setSelectedMonth(m); setSelectedDay(day);
              }}
            >
              {lang === 'pt' ? 'Próximo dia' : lang === 'es' ? 'Día siguiente' : 'Next day'} →
            </button>
          </div>
        )}

        {/* Attribution */}
        <div className="dev-attribution">
          <p>
            {lang === 'pt'
              ? '— Charles Haddon Spurgeon (1834–1892) · Texto em domínio público'
              : lang === 'es'
              ? '— Charles Haddon Spurgeon (1834–1892) · Texto de dominio público'
              : '— Charles Haddon Spurgeon (1834–1892) · Public domain text'}
          </p>
        </div>
      </div>
    </>
  );
}
