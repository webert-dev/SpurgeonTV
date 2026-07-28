'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useMemo } from 'react';

function DownloadContent({ lang, dict, downloads }) {
  const searchParams = useSearchParams();
  const volumeParam = searchParams.get('volume');
  const sermonParam = searchParams.get('sermon');
  const titleParam = searchParams.get('title') || sermonParam;

  // Se tem parâmetros específicos, mostra o layout de 1 sermão (como era antes)
  if (volumeParam && sermonParam) {
    const key = `${volumeParam}::${sermonParam}`;
    const downloadLinks = downloads[key] || {};
    const up4everLink = downloadLinks.up4ever || "#";
    const fileUploadLink = downloadLinks.fileupload || "#";

    return (
      <div className="download-page-container" style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 1rem', textAlign: 'center' }}>
        <Link href={`/${lang}/volume/${volumeParam}/${sermonParam}`} className="back-link" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--gold)', textDecoration: 'none' }}>
          ← {dict.download?.backToSermon || (lang === 'pt' ? 'Voltar ao Sermão' : (lang === 'es' ? 'Volver al Sermón' : 'Back to Sermon'))}
        </Link>
        
        <h1 className="title-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{dict.download?.title || "Download Sermon"}</h1>
        {titleParam && <h2 style={{ fontSize: '1.2rem', fontWeight: 'normal', marginBottom: '1rem', color: 'var(--text-muted)' }}>{titleParam}</h2>}

        <div style={{ backgroundColor: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.2)', padding: '1rem', borderRadius: '8px', maxWidth: '500px', margin: '0 auto 3rem auto' }}>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--gold)' }}>
            <strong>Nota:</strong> {lang === 'pt' ? 'O PDF está na Versão Inglesa Atualizada (Updated English Version).' : (lang === 'es' ? 'El PDF está en la Versión Inglesa Actualizada (Updated English Version).' : 'The PDF is in the Updated English Version.')}
          </p>
        </div>

        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>{dict.download?.chooseServer || "Choose a server to download the PDF"}:</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto 4rem auto' }}>
          <a 
            href={up4everLink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
              backgroundColor: '#0070f3', color: 'white', padding: '1rem', borderRadius: '12px',
              textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem',
              boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)', transition: 'transform 0.2s'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            {dict.download?.server1 || "Download via Up-4Ever"}
          </a>

          <a 
            href={fileUploadLink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
              backgroundColor: '#17a2b8', color: 'white', padding: '1rem', borderRadius: '12px',
              textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem',
              boxShadow: '0 4px 14px 0 rgba(23,162,184,0.39)', transition: 'transform 0.2s'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            {dict.download?.server2 || "Download via FileUpload"}
          </a>
        </div>
      </div>
    );
  }

  // --- MODO CENTRAL DE DOWNLOADS (Paginado) ---
  
  // Transform object into array for filtering and pagination
  const allDownloads = useMemo(() => {
    return Object.entries(downloads).map(([key, links]) => {
      const [vol, serm] = key.split('::');
      return {
        key,
        volume: vol,
        sermon: serm,
        volNum: parseInt(vol.replace('volume-', ''), 10),
        sermonNum: parseInt(serm.replace('sermon-', ''), 10),
        links
      };
    }).sort((a, b) => {
      if (a.volNum !== b.volNum) return a.volNum - b.volNum;
      return a.sermonNum - b.sermonNum;
    });
  }, [downloads]);

  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter
  const filteredDownloads = useMemo(() => {
    if (!searchTerm) return allDownloads;
    const term = searchTerm.toLowerCase();
    return allDownloads.filter(item => 
      item.volume.toLowerCase().includes(term) || 
      item.sermon.toLowerCase().includes(term)
    );
  }, [allDownloads, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredDownloads.length / itemsPerPage);
  const paginatedDownloads = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredDownloads.slice(start, start + itemsPerPage);
  }, [filteredDownloads, currentPage, itemsPerPage]);

  return (
    <div className="download-page-container" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1rem' }}>
      <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
        {lang === 'pt' ? 'Central de Downloads' : (lang === 'es' ? 'Central de Descargas' : 'Downloads Center')}
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
        {lang === 'pt' ? 'Todos os sermões em PDF (Inglês Atualizado)' : 'All PDFs (Updated English)'}
      </p>

      {/* Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', marginBottom: '2rem', backgroundColor: 'var(--bg-alt)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
        <input 
          type="text" 
          placeholder={lang === 'pt' ? 'Buscar volume ou sermão (ex: volume-01, sermon-42)' : 'Search volume or sermon...'}
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--bg)', color: 'var(--text)', flex: '1', minWidth: '250px' }}
        />
        <select 
          value={itemsPerPage}
          onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--bg)', color: 'var(--text)', cursor: 'pointer' }}
        >
          <option value={20}>20 {lang === 'pt' ? 'por página' : 'per page'}</option>
          <option value={50}>50 {lang === 'pt' ? 'por página' : 'per page'}</option>
          <option value={100}>100 {lang === 'pt' ? 'por página' : 'per page'}</option>
        </select>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '1.5rem 1rem', color: 'var(--gold)' }}>Volume</th>
              <th style={{ padding: '1.5rem 1rem', color: 'var(--gold)' }}>Sermon</th>
              <th style={{ padding: '1.5rem 1rem', color: 'var(--gold)', textAlign: 'center' }}>PDF (Up-4Ever)</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDownloads.length > 0 ? paginatedDownloads.map((item) => (
              <tr key={item.key} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem' }}>{item.volNum}</td>
                <td style={{ padding: '1rem' }}>
                  <Link href={`/${lang}/volume/${item.volume}/${item.sermon}`} style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 'bold' }}>
                    Sermon {item.sermonNum}
                  </Link>
                </td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>
                  <a 
                    href={item.links.up4ever || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(255,215,0,0.1)',
                      color: 'var(--gold)',
                      padding: '0.5rem 1rem',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      border: '1px solid rgba(255,215,0,0.2)'
                    }}
                  >
                    Download
                  </a>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="3" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  {lang === 'pt' ? 'Nenhum resultado encontrado.' : 'No results found.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: currentPage === 1 ? 'transparent' : 'var(--bg-alt)', color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text)', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
          >
            ← {lang === 'pt' ? 'Anterior' : 'Prev'}
          </button>
          
          <span style={{ fontWeight: 'bold' }}>
            {currentPage} / {totalPages}
          </span>

          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: currentPage === totalPages ? 'transparent' : 'var(--bg-alt)', color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text)', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
          >
            {lang === 'pt' ? 'Próxima' : 'Next'} →
          </button>
        </div>
      )}
    </div>
  );
}

export default function DownloadClient({ lang, dict, downloads }) {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', margin: '4rem' }}>Loading...</div>}>
      <DownloadContent lang={lang} dict={dict} downloads={downloads} />
    </Suspense>
  );
}
