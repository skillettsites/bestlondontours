import { Metadata } from 'next';
import { tours } from '@/data/tours';
import TourCard from '@/components/ui/TourCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'All London Tours & Attractions 2026 | Book Online',
  description: 'Browse and book the best London tours and attractions. Tower of London, London Eye, Harry Potter, Thames cruises, and more. Best prices, instant confirmation.',
  alternates: { canonical: `${SITE_URL}/tours` },
  openGraph: {
    title: 'All London Tours & Attractions 2026',
    description: 'Browse and book the best London tours and attractions. Best prices, instant confirmation.',
    url: `${SITE_URL}/tours`,
  },
};

export default function ToursPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'All Tours' }]} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">All London Tours & Attractions</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl">
          Discover {tours.length} hand-picked tours and attractions in London. Book online for the best prices and skip-the-line entry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </div>
  );
}
