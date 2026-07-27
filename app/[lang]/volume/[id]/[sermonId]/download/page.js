import Link from 'next/link';

export const revalidate = false;
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import { getSermonContent, getVolumes, getSermonsInVolume } from '../../../../../../lib/sermons';
import { getDictionary } from '../../../../../../lib/dictionaries';

export const dynamicParams = false;

export async function generateStaticParams() {
  const langs = ['en', 'es', 'pt'];
  const paramSet = new Set();
  const params = [];

  for (const lang of langs) {
    const volumes = await getVolumes(lang);
    for (const volume of volumes) {
      const sermons = await getSermonsInVolume(volume, lang);
      for (const sermon of sermons) {
        const key = `${lang}::${volume}::${sermon.slug}`;
        if (!paramSet.has(key)) {
          paramSet.add(key);
          params.push({ lang, id: volume, sermonId: sermon.slug });
        }
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { id, sermonId, lang } = await params;
  const sermon = await getSermonContent(id, sermonId, lang);
  if (!sermon) return {};

  return {
    title: `Download: ${sermon.title} | Spurgeon TV`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DownloadPage({ params }) {
  const { id, sermonId, lang } = await params;
  const dict = await getDictionary(lang);
  
  const sermon = await getSermonContent(id, sermonId, lang);
  if (!sermon) notFound();

  const volNum = parseInt(id.replace('volume-', ''), 10);
  const sermonNum = sermonId.replace('sermon-', '');

  // Read the download links
  let downloadLinks = {};
  try {
    const downloadsPath = path.join(process.cwd(), 'lib', 'sermon_downloads.json');
    const data = await fs.readFile(downloadsPath, 'utf8');
    const allDownloads = JSON.parse(data);
    downloadLinks = allDownloads[`${id}::${sermonId}`] || {};
  } catch (e) {
    console.error("Error reading sermon_downloads.json", e);
  }

  const up4everLink = downloadLinks.up4ever || "#";
  const fileUploadLink = downloadLinks.fileupload || "#";

  return (
    <div className="download-page-container" style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 1rem', textAlign: 'center' }}>
      <Link href={`/${lang}/volume/${id}/${sermonId}`} className="back-link" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--gold)', textDecoration: 'none' }}>
        ← {dict.download?.backToSermon || (lang === 'pt' ? 'Voltar ao Sermão' : (lang === 'es' ? 'Volver al Sermón' : 'Back to Sermon'))}
      </Link>
      
      <h1 className="title-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{dict.download?.title || "Download Sermon"}</h1>
      <h2 style={{ fontSize: '1.2rem', fontWeight: 'normal', marginBottom: '1rem', color: 'var(--text-muted)' }}>{sermon.title}</h2>

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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '1rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
            transition: 'transform 0.2s'
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            backgroundColor: '#17a2b8',
            color: 'white',
            padding: '1rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 4px 14px 0 rgba(23,162,184,0.39)',
            transition: 'transform 0.2s'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          {dict.download?.server2 || "Download via FileUpload"}
        </a>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem', maxWidth: '500px', margin: '0 auto' }}>
        <h3 style={{ color: 'var(--gold)', marginBottom: '1rem', fontSize: '1.3rem' }}>{dict.download?.readOnline || "Read PDF Online (Coming Soon)"}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{dict.download?.readOnlineDesc || "Powered by Cloudflare R2 / Backblaze B2"}</p>
        
        <div style={{ 
          backgroundColor: 'var(--bg-alt)', 
          border: '2px dashed var(--border)', 
          borderRadius: '12px', 
          padding: '2rem',
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          opacity: 0.6
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
          <span style={{ fontWeight: 'bold' }}>Native PDF Viewer</span>
          <span style={{ fontSize: '0.8rem' }}>Em construção...</span>
        </div>
      </div>
    </div>
  );
}
