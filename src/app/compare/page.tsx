import { Metadata } from 'next';
import { tours } from '@/data/tours';
import { SITE_URL, GYG_PARTNER_ID } from '@/lib/constants';
import { itemListSchema, breadcrumbSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CompareTable from './CompareTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compare London Tours - Find Your Perfect Experience | Best London Tours',
  description: 'Compare all London tours side by side. Sort by price, rating, and duration to find your perfect tour. From £17 per person with instant booking.',
  alternates: { canonical: `${SITE_URL}/compare` },
  openGraph: {
    title: 'Compare London Tours - Find Your Perfect Experience',
    description: 'Compare all London tours side by side. Sort by price, rating, and duration to find your perfect tour.',
    url: `${SITE_URL}/compare`,
  },
};

export default function ComparePage() {
  const schemaData = [
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Compare Tours', url: `${SITE_URL}/compare` },
    ]),
    itemListSchema(tours),
  ];

  return (
    <>
      {schemaData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Compare Tours' }]} />

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Compare London Tours
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl">
            Not sure which London tour to book? Compare all {tours.length} tours side by side.
            Sort by price, rating, or duration to find the experience that suits you best.
          </p>
        </div>

        {/* Trust signals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-700">{tours.length}</p>
            <p className="text-sm text-green-600">Curated Tours</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-700">
              &pound;{Math.min(...tours.map(t => t.price))}
            </p>
            <p className="text-sm text-blue-600">Lowest Price</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-700">
              {(tours.reduce((sum, t) => sum + t.rating, 0) / tours.length).toFixed(1)}
            </p>
            <p className="text-sm text-amber-600">Average Rating</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-700">
              {tours.reduce((sum, t) => sum + t.reviewCount, 0).toLocaleString()}
            </p>
            <p className="text-sm text-purple-600">Total Reviews</p>
          </div>
        </div>

        <CompareTable />

        {/* GetYourGuide Widget */}
        <div className="mt-12 text-center">
          <div
            data-gyg-href="https://widget.getyourguide.com/default/city.frame"
            data-gyg-location-id="57"
            data-gyg-locale-code="en-US"
            data-gyg-widget="city"
            data-gyg-partner-id={GYG_PARTNER_ID}
          />
        </div>

        {/* SEO Content */}
        <section className="mt-12 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Choose the Right London Tour</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              With so many outstanding tours and attractions in London, choosing the right one depends on your
              interests, budget, and how much time you have. Use the comparison table above to filter and sort
              tours based on what matters most to you.
            </p>
            <p>
              If you are visiting London for the first time, the Tower of London, London Eye, and a Thames
              river cruise are the classic combination that covers the city&apos;s highlights. For families,
              the Harry Potter Studio Tour and Madame Tussauds are consistently rated among the best
              experiences. Budget travellers should look at The Shard and the Thames cruise, both priced
              under &pound;20.
            </p>
            <p>
              All tours listed here are bookable online with instant confirmation and free cancellation on
              most bookings. Prices shown are per person and may vary by date. Booking in advance is strongly
              recommended, especially during summer and school holidays when the most popular tours sell out.
            </p>
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Browse by Interest</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/budget" className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors">
              <p className="font-semibold text-gray-900">Budget Tours</p>
              <p className="text-sm text-gray-500">Under &pound;30</p>
            </Link>
            <Link href="/family" className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors">
              <p className="font-semibold text-gray-900">Family Tours</p>
              <p className="text-sm text-gray-500">Kid-friendly picks</p>
            </Link>
            <Link href="/top-10" className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors">
              <p className="font-semibold text-gray-900">Top 10</p>
              <p className="text-sm text-gray-500">Our best rated</p>
            </Link>
            <Link href="/first-time" className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors">
              <p className="font-semibold text-gray-900">First Timers</p>
              <p className="text-sm text-gray-500">Essential tours</p>
            </Link>
            <Link href="/tours" className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors">
              <p className="font-semibold text-gray-900">All Tours</p>
              <p className="text-sm text-gray-500">{tours.length} experiences</p>
            </Link>
            <Link href="/guides" className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors">
              <p className="font-semibold text-gray-900">Travel Guides</p>
              <p className="text-sm text-gray-500">Expert advice</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
