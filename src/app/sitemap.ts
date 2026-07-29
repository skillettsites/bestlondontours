import { MetadataRoute } from 'next';
import { tours } from '@/data/tours';
import { categories } from '@/data/categories';
import { guides } from '@/data/guides';
import { monthPages } from '@/data/london-months';
import { SITE_URL, CONTENT_DATE } from '@/lib/constants';
import { HUB_PATH, SEASON_UPDATED } from '@/lib/season';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_DATE);

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/tours`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/top-10`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/compare`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/budget`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/family`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/first-time`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/guides`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/trending`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/local-tips`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'monthly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: 'monthly', priority: 0.2 },
    { url: `${SITE_URL}/affiliate-disclosure`, lastModified, changeFrequency: 'monthly', priority: 0.2 },
  ];

  const REDIRECTED_SLUGS = new Set([
    'london-true-crime-tour',
    'london-music-legends-tour',
    'london-architecture-tour',
    'london-royal-parks-tour',
    'london-thames-kayak-tour',
    'london-tudor-history-tour',
  ]);

  const tourPages: MetadataRoute.Sitemap = tours
    .filter((tour) => !REDIRECTED_SLUGS.has(tour.slug))
    .map((tour) => ({
      url: `${SITE_URL}/tours/${tour.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/category/${cat.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${SITE_URL}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Seasonal hub and the ten evergreen month guides. No year appears in any of these
  // URLs, so they are refreshed annually in place rather than replaced.
  const seasonLastModified = new Date(SEASON_UPDATED);
  const seasonPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}${HUB_PATH}`, lastModified: seasonLastModified, changeFrequency: 'monthly', priority: 0.9 },
    ...monthPages.map((m) => ({
      url: `${SITE_URL}/${m.slug}`,
      lastModified: seasonLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  return [...staticPages, ...seasonPages, ...tourPages, ...categoryPages, ...guidePages];
}
