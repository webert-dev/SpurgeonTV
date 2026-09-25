'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Detect language or default to 'pt'
    const userLang = navigator.language || navigator.userLanguage;
    let targetLang = 'en';
    
    if (userLang.startsWith('pt')) {
      targetLang = 'pt';
    } else if (userLang.startsWith('es')) {
      targetLang = 'es';
    }
    
    // Redirect to the appropriate language root
    router.replace(`/${targetLang}`);
  }, [router]);
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <p>Redirecionando... / Redirecting...</p>
    </div>
  );
}
