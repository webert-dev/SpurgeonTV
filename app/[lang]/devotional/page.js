'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// This page redirects to today's devotional date client-side,
// avoiding dynamic SSR on the Cloudflare Worker (which has a 10ms CPU limit on Free plan).
export default function DevotionalRootPage({ params }) {
  const router = useRouter();

  useEffect(() => {
    // params is a Promise in Next.js 15 app router but resolves immediately client-side
    const doRedirect = async () => {
      const { lang = 'en' } = await Promise.resolve(params);
      const now = new Date();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      router.replace(`/${lang}/devotional/${month}-${day}`);
    };
    doRedirect();
  }, [params, router]);

  // Show a minimal loading state while redirecting
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', color: 'var(--text-muted)' }}>
      <span>Loading today&apos;s devotional...</span>
    </div>
  );
}
