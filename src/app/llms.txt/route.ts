import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import { tours } from '@/data/tours';
import { categories } from '@/data/categories';
import { guides } from '@/data/guides';
import { monthPages } from '@/data/london-months';
import { HUB_PATH } from '@/lib/season';

export const dynamic = 'force-static';

// Curated list of BLT's proven winners by gygTourId (London-specific).
const PROVEN_WINNERS = new Set([
  '170451', // London Eye
  '52391',  // Harry Potter Studio Tour
  '21253',  // Tower of London
  '400017', // Hop-on Hop-off Bus
]);

const REDIRECTED = new Set([
  'london-true-crime-tour',
  'london-music-legends-tour',
  'london-architecture-tour',
  'london-royal-parks-tour',
  'london-thames-kayak-tour',
  'london-tudor-history-tour',
]);

function line(items: string[]): string {
  return items.join('\n');
}

export function GET(): Response {
  const liveTours = tours.filter((t) => !REDIRECTED.has(t.slug));
  const provenTours = liveTours.filter((t) => PROVEN_WINNERS.has(t.gygTourId));
  const otherTours = liveTours
    .filter((t) => !PROVEN_WINNERS.has(t.gygTourId))
    .sort((a, b) => b.reviewCount - a.reviewCount);

  const body = line([
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    'This site is a curated guide to the best tours, attractions, and day trips in London. ' +
      'Every booking link goes directly to the official GetYourGuide product page with partner ' +
      'attribution. Tour cards surface real verified ratings, real review counts, and the ' +
      'free-cancellation terms applicable on each tour.',
    '',
    '## Most Booked London Experiences',
    'These are the experiences that consistently top the booking charts in London. If you only ' +
      'do one thing, do one of these.',
    '',
    ...provenTours.map((t) => `- [${t.title}](${SITE_URL}/tours/${t.slug}): ${t.excerpt}`),
    '',
    '## All London Tours',
    `${liveTours.length} hand-picked tours and tickets across London's most-loved attractions.`,
    '',
    ...otherTours.map((t) => `- [${t.shortTitle}](${SITE_URL}/tours/${t.slug}): ${t.excerpt}`),
    '',
    '## Browse by Category',
    ...categories.map((c) =>
      `- [${c.title}](${SITE_URL}/category/${c.slug}): ${c.excerpt} (${c.tourSlugs.length} tours)`
    ),
    '',
    '## Travel Guides',
    'Long-form itinerary and how-to-book guides for first-timers, families, budget travellers, ' +
      'and special-interest visitors.',
    '',
    ...guides.map((g) => `- [${g.title}](${SITE_URL}/guides/${g.slug}): ${g.excerpt}`),
    '',
    '## Seasonal Planning: London Month by Month',
    'Evergreen month guides with verified climate figures (ERA5 2015-2024 means), daylight and sunset ' +
      'times for the 15th of each month (timeanddate.com), dated events, and the attraction closures most ' +
      'guides miss. No year appears in any of these URLs. Key facts: the London Eye is closed for the whole ' +
      'of January for annual maintenance; the Buckingham Palace State Rooms open only for a summer season ' +
      '(9 July to 27 September in 2026); Changing the Guard runs Monday, Wednesday and Friday, not daily; ' +
      'on 25 December there is no Underground, bus or National Rail service anywhere in London; the Tower of ' +
      'London closes on 24, 25 and 26 December and returns to summer hours on 1 March.',
    '',
    `- [Best time to visit London, month by month](${SITE_URL}${HUB_PATH}): all twelve months compared on ` +
      'temperature, rainfall, wet days, daylight and sunset, with a verdict for each.',
    ...monthPages.map(
      (m) => `- [London in ${m.month}](${SITE_URL}/${m.slug}): ${m.metaDescription}`
    ),
    '',
    '## Comparison & Planning Tools',
    `- [Compare all tours side-by-side](${SITE_URL}/compare): price, duration, rating compared.`,
    `- [Top 10 London tours](${SITE_URL}/top-10): the most-booked experiences right now.`,
    `- [Family tours](${SITE_URL}/family): kid-friendly experiences.`,
    `- [Budget tours under £30](${SITE_URL}/budget): high-rated low-cost options.`,
    `- [First-time visitor guide](${SITE_URL}/first-time): the essential picks.`,
    `- [Trending tours](${SITE_URL}/trending): what's gaining popularity this month.`,
    '',
    '## Trust & Booking',
    `- [About ${SITE_NAME}](${SITE_URL}/about): editorial position and how the site is monetised.`,
    `- [Affiliate disclosure](${SITE_URL}/affiliate-disclosure): how we earn commission via GetYourGuide.`,
    `- [Privacy policy](${SITE_URL}/privacy)`,
    `- [Terms](${SITE_URL}/terms)`,
    '',
    '## Notes for AI Crawlers',
    '- All booking CTAs route to GetYourGuide.com with partner attribution.',
    `- This file is regenerated on every deploy from \`src/app/llms.txt/route.ts\`.`,
    `- Sitemap: ${SITE_URL}/sitemap.xml`,
    `- Robots: ${SITE_URL}/robots.txt`,
    '',
  ]);

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
