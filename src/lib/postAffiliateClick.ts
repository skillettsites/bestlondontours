const DEDUPE_MS = 2000;
const recent = new Map<string, number>();

export function deriveActivityId(href: string): string | undefined {
  const m = href.match(/-t(\d+)(?:\/|\?|$)/);
  return m ? `t${m[1]}` : undefined;
}

export function deriveUrlType(href: string): 'direct' | 'search' | 'other' {
  if (/getyourguide\.com\/s\/\?/.test(href)) return 'search';
  if (/getyourguide\.com\/.+-t\d+/.test(href)) return 'direct';
  return 'other';
}

export type AffiliateClickPayload = {
  type: string;
  city: string;
  section: string;
  variant?: string;
  destination?: string;
  activity_id?: string;
  url_type?: string;
  page_path?: string;
};

function dedupeKey(data: AffiliateClickPayload): string {
  return [data.activity_id || '', data.section || '', data.page_path || '', data.city || ''].join('|');
}

/**
 * POST /api/track-click via keepalive fetch. sendBeacon(JSON) is not used:
 * some browsers queue it (return true) then drop application/json beacons.
 * Callers may fire this from both TrackedGYGLink and the layout listener;
 * a 2s key dedupe keeps one Command Center row per click.
 */
export function postAffiliateClick(data: AffiliateClickPayload): void {
  if (typeof window === 'undefined') return;
  const key = dedupeKey(data);
  const now = Date.now();
  const prev = recent.get(key);
  if (prev && now - prev < DEDUPE_MS) return;
  recent.set(key, now);

  const payload = JSON.stringify(data);
  fetch('/api/track-click', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  }).catch(() => {});
}
