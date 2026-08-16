'use client';

import { useEffect } from 'react';
import { deriveActivityId, deriveUrlType, postAffiliateClick } from '@/lib/postAffiliateClick';

function gygAnchor(e: Event): HTMLAnchorElement | null {
  const target = e.target as HTMLElement | null;
  return (target?.closest?.('a[href*="getyourguide.com"]') as HTMLAnchorElement | null) || null;
}

function writeClick(anchor: HTMLAnchorElement) {
  const href = anchor.href;
  const activityId = deriveActivityId(href);
  const urlType = deriveUrlType(href);
  const city =
    anchor.getAttribute('data-gyg-city') ||
    (anchor.textContent || '').trim().slice(0, 80) ||
    'GetYourGuide';

  postAffiliateClick({
    type: 'gyg',
    city,
    section: anchor.getAttribute('data-gyg-section') || 'link',
    activity_id: activityId,
    url_type: urlType,
    page_path: window.location.pathname,
  });
}

// Global delegated listener: GA4 affiliate_click plus Command Center via
// /api/track-click. Writes for TrackedGYGLink and raw GYG <a> tags. The shared
// postAffiliateClick helper dedupes so a hydrated TrackedGYGLink plus this
// listener still produce one affiliate_clicks row.
export default function AffiliateClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = gygAnchor(e);
      if (!anchor) return;
      const href = anchor.href;
      const activityId = deriveActivityId(href);
      const urlType = deriveUrlType(href);
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === 'function') {
        w.gtag('event', 'affiliate_click', {
          affiliate: 'getyourguide',
          activity_id: activityId,
          url_type: urlType,
          link_text: (anchor.textContent || '').trim().slice(0, 80),
          page_path: window.location.pathname,
        });
      }
      writeClick(anchor);
    }

    function onPointerOrAux(e: MouseEvent | PointerEvent) {
      if (e.button !== 0 && e.button !== 1) return;
      const anchor = gygAnchor(e);
      if (!anchor) return;
      writeClick(anchor);
    }

    document.addEventListener('click', onClick, { capture: true });
    document.addEventListener('pointerdown', onPointerOrAux, { capture: true });
    document.addEventListener('auxclick', onPointerOrAux, { capture: true });
    return () => {
      document.removeEventListener('click', onClick, { capture: true });
      document.removeEventListener('pointerdown', onPointerOrAux, { capture: true });
      document.removeEventListener('auxclick', onPointerOrAux, { capture: true });
    };
  }, []);
  return null;
}
