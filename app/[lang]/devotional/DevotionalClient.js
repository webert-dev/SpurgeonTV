'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DevotionalClient({ lang, dict, devotionalData }) {
  const [today, setToday] = useState(null);
  const [morningEntry, setMorningEntry] = useState(null);
  const [eveningEntry, setEveningEntry] = useState(null);
  const [activeTab, setActiveTab] = useState('morning');
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const d = dict.devotional || {};

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    setToday({ month, day });
    setSelectedMonth(month);
    setSelectedDay(day);
  }, []);

  useEffect(() => {
    if (!selectedMonth || !selectedDay || !devotionalData.length) return;
    const dateStr = `${selectedMonth}-${selectedDay}`;
    const am = devotionalData.find(e => e.date === dateStr && e.time === 'am');
    const pm = devotionalData.find(e => e.date === dateStr && e.time === 'pm');
    setMorningEntry(am || null);
    setEveningEntry(pm || null);
  }, [selectedMonth, selectedDay, devotionalData]);

  const monthNames = [
    '', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthNamesPt = [
    '', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const monthNamesEs = [
    '', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const getMonthName = (m) => {
    if (lang === 'pt') return monthNamesPt[m] || monthNames[m];
    if (lang === 'es') return monthNamesEs[m] || monthNames[m];
    return monthNames[m];
  };

  const daysInMonth = (m) => {
    const d30 = [4, 6, 9, 11];
    if (m === 2) return 29;
    if (d30.includes(m)) return 30;
    return 31;
  };

  const activeEntry = activeTab === 'morning' ? morningEntry : eveningEntry;

  // Clean body text: remove the first header line (e.g. "January 1st — Morning Reading")
  const formatBody = (body) => {
    if (!body) return '';
    return body
      .replace(/^[^\n]+Morning Reading[^\n]*\n/, '')
      .replace(/^[^\n]+Evening Reading[^\n]*\n/, '')
      .replace(/^[^\n]+keyverse[^\n]*\n/, '')
      .replace(/\r\n/g, '\n')
      .trim();
  };

  const isToday = (m, d) => today && today.month === m && today.day === d;
  const isSelected = (m, d) => selectedMonth === m && selectedDay === d;

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem', minHeight: '80vh' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Link href={`/${lang}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← {d.backHome || 'Home'}
        </Link>
        <h1 className="title-gold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '1.5rem', marginBottom: '0.75rem', lineHeight: 1.2 }}>
          {d.pageTitle || 'Spurgeon Morning and Evening Devotional'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          {d.pageSubtitle || ''}
        </p>
      </div>

      {/* Date Display & Calendar Toggle */}
      {today && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '0.75rem 2rem',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-serif)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s',
            }}
          >
            📅 {getMonthName(selectedMonth)} {selectedDay}
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              {showCalendar ? '▲' : '▼'}
            </span>
          </button>
          {isToday(selectedMonth, selectedDay) && (
            <span style={{ fontSize: '0.85rem', color: 'var(--brand-gold)', fontWeight: 600 }}>
              ✦ {lang === 'pt' ? 'Leitura de Hoje' : lang === 'es' ? 'Lectura de Hoy' : "Today's Reading"}
            </span>
          )}
        </div>
      )}

      {/* Calendar Picker */}
      {showCalendar && (
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '2rem',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem', justifyContent: 'center' }}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
              <button
                key={m}
                onClick={() => { setSelectedMonth(m); setSelectedDay(1); }}
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '8px',
                  border: `1px solid ${selectedMonth === m ? 'var(--brand-gold)' : 'var(--border)'}`,
                  background: selectedMonth === m ? 'rgba(212,175,55,0.15)' : 'transparent',
                  color: selectedMonth === m ? 'var(--brand-gold)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: selectedMonth === m ? 600 : 400,
                  transition: 'all 0.15s',
                }}
              >
                {monthNames[m].slice(0, 3)}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {Array.from({ length: daysInMonth(selectedMonth) }, (_, i) => i + 1).map(d => (
              <button
                key={d}
                onClick={() => { setSelectedDay(d); setShowCalendar(false); }}
                style={{
                  width: '2.2rem',
                  height: '2.2rem',
                  borderRadius: '50%',
                  border: `1px solid ${isSelected(selectedMonth, d) ? 'var(--brand-gold)' : isToday(selectedMonth, d) ? 'var(--brand-purple)' : 'var(--border)'}`,
                  background: isSelected(selectedMonth, d) ? 'var(--brand-gold)' : 'transparent',
                  color: isSelected(selectedMonth, d) ? '#000' : isToday(selectedMonth, d) ? 'var(--brand-purple)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: isSelected(selectedMonth, d) || isToday(selectedMonth, d) ? 700 : 400,
                  transition: 'all 0.15s',
                }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Morning / Evening Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', background: 'var(--surface)', borderRadius: '12px', padding: '0.4rem', border: '1px solid var(--border)' }}>
        {['morning', 'evening'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: '0.8rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.2s',
              background: activeTab === tab ? 'var(--brand-gold)' : 'transparent',
              color: activeTab === tab ? '#000' : 'var(--text-secondary)',
            }}
          >
            {tab === 'morning'
              ? `🌅 ${lang === 'pt' ? 'Manhã' : lang === 'es' ? 'Mañana' : 'Morning'}`
              : `🌙 ${lang === 'pt' ? 'Noite' : lang === 'es' ? 'Noche' : 'Evening'}`}
          </button>
        ))}
      </div>

      {/* Devotional Content */}
      {activeEntry ? (
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '2.5rem',
          lineHeight: '1.9',
        }}>
          {/* Key Verse */}
          <blockquote style={{
            borderLeft: '3px solid var(--brand-gold)',
            paddingLeft: '1.5rem',
            margin: '0 0 2rem 0',
            color: 'var(--brand-gold)',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.1rem',
          }}>
            {activeEntry.keyverse}
          </blockquote>

          {/* Body Text */}
          {formatBody(activeEntry.body).split('\n\n').map((para, i) => (
            para.trim() && (
              <p key={i} style={{ color: 'var(--text)', marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                {para.trim()}
              </p>
            )
          ))}
        </div>
      ) : (
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '3rem',
          textAlign: 'center',
          color: 'var(--text-muted)',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📖</div>
          <p style={{ fontSize: '1rem' }}>
            {lang === 'pt' ? 'Carregando leitura...' : lang === 'es' ? 'Cargando lectura...' : 'Loading reading...'}
          </p>
        </div>
      )}

      {/* Attribution */}
      <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <p>
          {lang === 'pt'
            ? '— Charles Haddon Spurgeon (1834–1892) · Texto em domínio público'
            : lang === 'es'
            ? '— Charles Haddon Spurgeon (1834–1892) · Texto de dominio público'
            : '— Charles Haddon Spurgeon (1834–1892) · Public domain text'}
        </p>
      </div>
    </div>
  );
}
