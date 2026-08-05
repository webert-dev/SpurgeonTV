'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import ReaderTools from '../../volume/[id]/[sermonId]/ReaderTools';
import TTSPlayer from '../../../components/TTSPlayer';
import CitationBox from '../../../components/CitationBox';
import ShareButton from '../../../components/ShareButton';

export default function DevotionalDayClient({ lang, dict, dateStr, morningEntry, eveningEntry }) {
  const [activeTab, setActiveTab] = useState('morning');
  const [showCalendar, setShowCalendar] = useState(false);

  // Extract month and day from dateStr (MM-DD)
  const [selectedMonthStr, selectedDayStr] = dateStr.split('-');
  const selectedMonth = parseInt(selectedMonthStr, 10);
  const selectedDay = parseInt(selectedDayStr, 10);

  const [calMonth, setCalMonth] = useState(selectedMonth);

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

  const activeEntry = activeTab === 'morning' ? morningEntry : eveningEntry;

  const formatBody = (body) => {
    if (!body) return [];
    let cleaned = body.replace(/\r\n/g, '\n').trim();
    // Split into paragraphs based on double newlines
    const parts = cleaned.split(/\n\n+/);
    if (parts.length > 1 && parts[0].length < 250 && parts[0].includes('—')) {
      parts.shift(); // Remove the duplicated header/keyverse
    }
    cleaned = parts.join('\n\n');
    return cleaned.split('\n\n').filter((p) => p.trim().length > 0);
  };

  const getPrevDate = () => {
    let m = selectedMonth, day = selectedDay - 1;
    if (day < 1) { m = m - 1 < 1 ? 12 : m - 1; day = daysInMonth(m); }
    return `${m.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  };

  const getNextDate = () => {
    let m = selectedMonth, day = selectedDay + 1;
    if (day > daysInMonth(m)) { m = m + 1 > 12 ? 1 : m + 1; day = 1; }
    return `${m.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  };

  const isSelected = (m, day) => selectedMonth === m && selectedDay === day;

  const morningLabel = lang === 'pt' ? 'Manhã' : lang === 'es' ? 'Mañana' : 'Morning';
  const eveningLabel = lang === 'pt' ? 'Noite' : lang === 'es' ? 'Noche' : 'Evening';
  const todayLabel = lang === 'pt' ? 'Voltar para Hoje' : lang === 'es' ? 'Volver a Hoy' : 'Back to Today';

  return (
    <>
      <style>{`
        .dev-container { max-width: 800px; margin: 0 auto; padding: 1rem 1.5rem 5rem; min-height: 80vh; position: relative; }
        .dev-header { display: flex; align-items: center; justify-content: space-between; text-align: left; gap: 2rem; margin-bottom: 2rem; margin-top: 1rem; }
        .dev-title { font-size: clamp(1.8rem, 4vw, 2.8rem); line-height: 1.2; margin: 0; flex: 2; }
        .dev-subtitle { color: var(--text-secondary); font-size: clamp(0.95rem, 2vw, 1.05rem); margin: 0; line-height: 1.6; flex: 1; }
        @media (max-width: 768px) {
          .dev-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .dev-subtitle { max-width: 100%; }
        }
        .dev-date-btn { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 0.75rem 1.75rem; cursor: pointer; color: var(--text-primary); font-size: 1.05rem; font-family: var(--font-serif); display: flex; align-items: center; gap: 0.6rem; transition: border-color 0.2s, background 0.2s; white-space: nowrap; }
        .dev-date-btn:hover { border-color: var(--brand-gold); }
        .dev-calendar { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; animation: fadeIn 0.2s ease; }
        .dev-months { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1.25rem; justify-content: center; }
        .dev-month-btn { padding: 0.35rem 0.7rem; border-radius: 8px; cursor: pointer; font-size: 0.8rem; font-weight: 500; transition: all 0.15s; min-width: 42px; text-align: center; }
        .dev-days { display: grid; grid-template-columns: repeat(auto-fill, minmax(2.2rem, 1fr)); gap: 0.3rem; max-width: 440px; margin: 0 auto; }
        .dev-day-btn { aspect-ratio: 1; border-radius: 50%; cursor: pointer; font-size: 0.8rem; font-weight: 500; transition: all 0.15s; display: flex; align-items: center; justify-content: center; text-decoration: none; }
        .dev-controls-bar { display: flex; align-items: center; justify-content: space-between; background: var(--surface); border-radius: 12px; padding: 0.5rem; border: 1px solid var(--border); margin-bottom: 2rem; gap: 0.5rem; flex-wrap: nowrap; }
        @media (max-width: 640px) { .dev-controls-bar { padding: 0.25rem; gap: 0.2rem; } }
        .dev-tab { flex: 1; padding: 0.75rem; border-radius: 8px; border: none; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.4rem; width: 100%; }
        @media (max-width: 640px) { .dev-tab { padding: 0.5rem 0.2rem; font-size: 0.85rem; gap: 0.2rem; } .dev-date-wrapper span { font-size: 0.85rem; } }
        .dev-date-wrapper { display: flex; flex-direction: column; align-items: center; gap: 0.4rem; }
        .dev-content { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 2.5rem; line-height: 1.9; animation: fadeIn 0.3s ease; }
        @media (max-width: 640px) { .dev-content { padding: 1.5rem 1.25rem; } .dev-container { padding: 2rem 1rem 4rem; } }
        .dev-keyverse { border-left: 3px solid var(--brand-gold); padding-left: 1.25rem; margin: 0 0 2rem 0; color: var(--brand-gold); font-family: var(--font-serif); font-style: italic; font-size: clamp(1rem, 2.5vw, 1.15rem); line-height: 1.6; }
        .dev-body-para { color: var(--text); margin-bottom: 1.25rem; font-size: calc(clamp(0.95rem, 2vw, 1.05rem) + var(--font-size-offset, 0rem)); line-height: var(--reader-line-height, 1.85); font-family: var(--reader-font-family, inherit); text-align: justify; }
        .dev-attribution { text-align: center; margin-top: 3rem; color: var(--text-muted); font-size: 0.82rem; border-top: 1px solid var(--border); padding-top: 1.5rem; }
        .dev-loading { text-align: center; padding: 3rem; color: var(--text-muted); background: var(--surface); border: 1px solid var(--border); border-radius: 16px; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .dev-nav-arrows { display: flex; justify-content: space-between; margin-top: 1.5rem; gap: 1rem; }
        .dev-nav-btn { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 0.6rem 1.25rem; cursor: pointer; color: var(--text-secondary); font-size: 0.9rem; font-weight: 500; transition: all 0.2s; display: flex; align-items: center; gap: 0.4rem; flex: 1; justify-content: center; text-decoration: none; }
        .dev-nav-btn:hover { border-color: var(--brand-gold); color: var(--brand-gold); }
      `}</style>

      <div className="dev-container">
        <ReaderTools dict={dict} />
        <Link href={`/${lang}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>
          ← {d.backHome || 'Home'}
        </Link>

        <div className="dev-header">
          <h1 className="title-gold dev-title">{d.pageTitle || 'Spurgeon Morning and Evening Devotional'}</h1>
          <p className="dev-subtitle">{d.pageSubtitle || ''}</p>
        </div>

        <div className="dev-controls-bar">
          <button
            className="dev-tab"
            onClick={() => setActiveTab('morning')}
            style={{
              background: activeTab === 'morning' ? 'var(--brand-gold)' : 'transparent',
              color: activeTab === 'morning' ? '#000' : 'var(--text-secondary)',
            }}
          >
            <span>🌅</span><span>{morningLabel}</span>
          </button>

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
          </div>

          <button
            className="dev-tab"
            onClick={() => setActiveTab('evening')}
            style={{
              background: activeTab === 'evening' ? 'var(--brand-gold)' : 'transparent',
              color: activeTab === 'evening' ? '#000' : 'var(--text-secondary)',
            }}
          >
            <span>🌙</span><span>{eveningLabel}</span>
          </button>
        </div>

        {showCalendar && (
          <div className="dev-calendar">
            <div className="dev-months">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <button
                  key={m}
                  className="dev-month-btn"
                  onClick={() => setCalMonth(m)}
                  style={{
                    border: `1px solid ${calMonth === m ? 'var(--brand-gold)' : 'var(--border)'}`,
                    background: calMonth === m ? 'rgba(212,175,55,0.15)' : 'transparent',
                    color: calMonth === m ? 'var(--brand-gold)' : 'var(--text-secondary)',
                    fontWeight: calMonth === m ? 700 : 400,
                  }}
                >
                  {monthNames[m].slice(0, 3)}
                </button>
              ))}
            </div>
            <div className="dev-days">
              {Array.from({ length: daysInMonth(calMonth) }, (_, i) => i + 1).map((day) => {
                const dayLink = `/${lang}/devotional/${calMonth.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                return (
                  <Link
                    key={day}
                    href={dayLink}
                    className="dev-day-btn"
                    onClick={() => setShowCalendar(false)}
                    style={{
                      border: `1px solid ${isSelected(calMonth, day) ? 'var(--brand-gold)' : 'var(--border)'}`,
                      background: isSelected(calMonth, day) ? 'var(--brand-gold)' : 'transparent',
                      color: isSelected(calMonth, day) ? '#000' : 'var(--text-secondary)',
                      fontWeight: isSelected(calMonth, day) ? 700 : 400,
                    }}
                  >
                    {day}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {activeEntry ? (
          <div key={`${selectedMonth}-${selectedDay}-${activeTab}`} className="dev-content">
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.8rem', flexWrap: 'wrap' }}>
              <TTSPlayer 
                lang={lang} 
                dict={dict} 
                text={`${activeEntry.keyverse}. ${formatBody(activeEntry.body).join(' ')}`} 
              />
              <ShareButton 
                title={`${d.pageTitle || 'Devotional'} - ${getMonthName(selectedMonth)} ${selectedDay}`}
                text={lang === 'pt' ? 'Leia o devocional de hoje no Spurgeon.tv' : lang === 'es' ? 'Lee el devocional de hoy en Spurgeon.tv' : 'Read today\'s devotional on Spurgeon.tv'}
              />
            </div>
            <blockquote className="dev-keyverse">{activeEntry.keyverse}</blockquote>
            {formatBody(activeEntry.body).map((para, i) => (
              <p key={i} className="dev-body-para">{para.trim()}</p>
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

        {activeEntry && (
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <ShareButton 
              className="dev-share-large"
              title={`${d.pageTitle || 'Devotional'} - ${getMonthName(selectedMonth)} ${selectedDay}`}
              text={lang === 'pt' ? 'Leia o devocional de hoje no Spurgeon.tv' : lang === 'es' ? 'Lee el devocional de hoy en Spurgeon.tv' : 'Read today\'s devotional on Spurgeon.tv'}
            />
          </div>
        )}

        <div className="dev-nav-arrows">
          <Link href={`/${lang}/devotional/${getPrevDate()}`} className="dev-nav-btn">
            ← {lang === 'pt' ? 'Dia anterior' : lang === 'es' ? 'Día anterior' : 'Previous day'}
          </Link>
          <Link href={`/${lang}/devotional`} className="dev-nav-btn" style={{ maxWidth: '3rem', fontSize: '1.2rem' }} title={todayLabel}>
            ✦
          </Link>
          <Link href={`/${lang}/devotional/${getNextDate()}`} className="dev-nav-btn">
            {lang === 'pt' ? 'Próximo dia' : lang === 'es' ? 'Día siguiente' : 'Next day'} →
          </Link>
        </div>

        <div className="dev-attribution">
          <p>
            {lang === 'pt'
              ? '— Charles Haddon Spurgeon (1834–1892) · Texto em domínio público'
              : lang === 'es'
              ? '— Charles Haddon Spurgeon (1834–1892) · Texto de dominio público'
              : '— Charles Haddon Spurgeon (1834–1892) · Public domain text'}
          </p>
        </div>
        <CitationBox
          type="devotional"
          lang={lang}
          url={typeof window !== 'undefined' ? window.location.href : ''}
          title={activeEntry?.title || ''}
        />
      </div>
    </>
  );
}
