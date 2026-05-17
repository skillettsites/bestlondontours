import { tours } from '@/data/tours';

const REDIRECTED = new Set([
  'london-true-crime-tour',
  'london-music-legends-tour',
  'london-architecture-tour',
  'london-royal-parks-tour',
  'london-thames-kayak-tour',
  'london-tudor-history-tour',
]);

const liveTours = tours.filter((t) => !REDIRECTED.has(t.slug));

const totalReviews = liveTours.reduce((sum, t) => sum + t.reviewCount, 0);
const avgRating = liveTours.length
  ? liveTours.reduce((sum, t) => sum + t.rating, 0) / liveTours.length
  : 0;
const minPrice = liveTours.length
  ? Math.min(...liveTours.map((t) => t.price))
  : 0;

export const trustStats = {
  totalTours: liveTours.length,
  avgRating: Number(avgRating.toFixed(2)),
  totalReviews,
  freeCancellationPct: 95,
  minPrice,
};

export const TOP_CONVERTER_BY_DESTINATION: Record<string, { slug: string; activityId: string; reason: string }> = {
  london: { slug: 'london-eye-tickets', activityId: 't170451', reason: 'Most booked London experience' },
};
