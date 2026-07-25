'use client';

import { useEffect } from 'react';

export default function AdBanner({ 
  dataAdSlot, 
  dataAdFormat = 'auto', 
  dataFullWidthResponsive = true,
  style = { display: 'block' }
}) {
  const pubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;
  
  useEffect(() => {
    // Prevent pushing the same ad twice in strict mode / dev mode
    try {
      if (pubId && typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [pubId]);

  if (!pubId) {
    // Return a placeholder or null if AdSense is not configured
    return null;
  }

  return (
    <div style={{ margin: '2rem 0', textAlign: 'center', overflow: 'hidden' }}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={pubId}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      />
    </div>
  );
}
