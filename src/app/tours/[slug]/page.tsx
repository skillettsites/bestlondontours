import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { tours, getTourBySlug, getRelatedTours } from '@/data/tours';
import { categories } from '@/data/categories';
import { guides } from '@/data/guides';
import { tourSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import StarRating from '@/components/ui/StarRating';
import FAQ from '@/components/ui/FAQ';
import AvailabilityWidget from '@/components/ui/AvailabilityWidget';
import TourCard from '@/components/ui/TourCard';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';

const categoryGuideMap: Record<string, string[]> = {
  landmarks: ['first-time-visiting-london', 'london-one-day-itinerary', 'london-history-guide'],
  'river-cruises': ['thames-cruise-guide', 'romantic-things-london', 'london-one-day-itinerary'],
  'day-trips': ['day-trips-from-london', 'first-time-visiting-london', 'london-three-day-itinerary'],
  'food-tours': ['london-food-guide', 'free-things-to-do-london'],
  'family-fun': ['london-with-kids', 'london-rainy-day-guide', 'free-things-to-do-london'],
  'walking-tours': ['best-walking-tours-london', 'london-history-guide', 'free-things-to-do-london'],
  'museums-exhibitions': ['london-rainy-day-guide', 'london-history-guide', 'london-with-kids'],
  'evening-experiences': ['romantic-things-london', 'best-walking-tours-london', 'thames-cruise-guide'],
};

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};

  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: { canonical: `${SITE_URL}/tours/${tour.slug}` },
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      url: `${SITE_URL}/tours/${tour.slug}`,
      type: 'website',
    },
  };
}

export default async function TourPage({ params }: { params: Params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const relatedTours = getRelatedTours(tour).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema(tour)) }}
      />

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] px-4 py-3">
        <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900 truncate">{tour.shortTitle}</p>
            <p className="text-xs text-gray-500">From <span className="font-bold text-gray-900 text-sm">&pound;{tour.price}</span>/person</p>
          </div>
          <a
            href={tour.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 active:scale-95"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 pb-28 lg:pb-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tours', href: '/tours' },

            { label: tour.shortTitle },
          ]}
        />

        <AffiliateDisclosure />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Hero image with overlay */}
            <div className="relative rounded-2xl overflow-hidden mb-6">
              <Image
                src={tour.imageUrl}
                alt={tour.imageAlt}
                width={1200}
                height={675}
                className="object-cover w-full h-[280px] sm:h-[400px] lg:h-[450px]"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-green-700">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Free cancellation
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-green-700">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    Instant confirmation
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">{tour.title}</h1>
                <div className="flex flex-wrap items-center gap-3">
                  <StarRating rating={tour.rating} reviewCount={tour.reviewCount} />
                  <span className="text-lg font-bold text-white drop-shadow">From &pound;{tour.price}</span>
                </div>
              </div>
            </div>

            {/* Key facts - scrollable pills on mobile */}
            <div className="flex gap-2.5 overflow-x-auto pb-2 mb-6 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
              <div className="shrink-0 flex items-center gap-2 rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5">
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{tour.duration}</span>
              </div>
              <div className="shrink-0 flex items-center gap-2 rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5">
                <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{tour.rating}/5</span>
              </div>
              <div className="shrink-0 flex items-center gap-2 rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5">
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">From &pound;{tour.price}</span>
              </div>
              <div className="shrink-0 flex items-center gap-2 rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5">
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{tour.reviewCount.toLocaleString()} reviews</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed text-lg">{tour.description}</p>
            </div>

            {/* Why This Tour? */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Tour?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.slice(0, 4).map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights (remaining) */}
            {tour.highlights.length > 4 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Highlights</h2>
                <ul className="space-y-3">
                  {tour.highlights.slice(4).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What's Included */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-green-50 border border-green-100 px-4 py-3">
                    <svg className="h-5 w-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm font-medium text-green-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Best for */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Best For</h2>
              <div className="flex flex-wrap gap-2">
                {tour.bestFor.map((tag, i) => (
                  <span key={i} className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-900">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability Widget */}
            <AvailabilityWidget tourId={tour.gygTourId} affiliateUrl={tour.affiliateUrl} />

            {/* Book With Confidence */}
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Book With Confidence
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: 'tag', label: 'Best price guarantee' },
                  { icon: 'cancel', label: 'Free cancellation' },
                  { icon: 'bolt', label: 'Instant confirmation' },
                  { icon: 'mobile', label: 'Mobile tickets accepted' },
                  { icon: 'support', label: '24/7 customer support' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-green-50 px-4 py-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        {item.icon === 'tag' && <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />}
                        {item.icon === 'tag' && <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />}
                        {item.icon === 'cancel' && <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />}
                        {item.icon === 'bolt' && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />}
                        {item.icon === 'mobile' && <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />}
                        {item.icon === 'support' && <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />}
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-green-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <FAQ faqs={tour.faqs} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Booking card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
                <div className="mb-5">
                  <span className="text-sm text-gray-500">From</span>
                  <div className="text-4xl font-bold text-gray-900">&pound;{tour.price}</div>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                <a
                  href={tour.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group relative block w-full rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-4 text-center text-lg font-bold text-white shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 hover:from-green-700 hover:to-green-600 transition-all duration-300 active:scale-[0.98]"
                >
                  <span className="absolute inset-0 rounded-xl animate-pulse bg-green-400/20 pointer-events-none" />
                  <span className="relative flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Check Availability
                  </span>
                </a>
                <ul className="mt-5 space-y-3 text-sm">
                  <li className="flex items-center gap-2.5 text-gray-600">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    Instant confirmation
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-600">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    Free cancellation
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-600">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    Mobile ticket accepted
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-600">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50">
                      <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    Best price guarantee
                  </li>
                </ul>
              </div>

              {/* Quick info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Info</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Duration</dt>
                    <dd className="font-medium text-gray-900">{tour.duration}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Rating</dt>
                    <dd className="font-medium text-gray-900">{tour.rating}/5 ({tour.reviewCount.toLocaleString()} reviews)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Price</dt>
                    <dd className="font-medium text-gray-900">From &pound;{tour.price}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Category Links */}
        {tour.categories.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Browse More Tours</h2>
            <div className="flex flex-wrap gap-3">
              {tour.categories.map((catSlug) => {
                const cat = categories.find((c) => c.slug === catSlug);
                if (!cat) return null;
                return (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:border-green-300 hover:shadow-sm transition-all duration-300"
                  >
                    {cat.icon} {cat.title}
                  </Link>
                );
              })}
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-green-700 hover:border-green-300 hover:shadow-sm transition-all duration-300"
              >
                All London Tours
              </Link>
            </div>
          </section>
        )}

        {/* More London Guides */}
        {(() => {
          const guideSlugSet = new Set<string>();
          tour.categories.forEach((catSlug) => {
            const mapped = categoryGuideMap[catSlug];
            if (mapped) mapped.forEach((gs) => guideSlugSet.add(gs));
          });
          const relevantGuides = Array.from(guideSlugSet)
            .map((gs) => guides.find((g) => g.slug === gs))
            .filter((g): g is NonNullable<typeof g> => g !== undefined)
            .slice(0, 3);

          if (relevantGuides.length === 0) return null;

          return (
            <section className="mt-12 bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">More London Guides</h2>
              <ul className="space-y-3">
                {relevantGuides.map((guide) => (
                  <li key={guide.slug}>
                    <Link href={`/guides/${guide.slug}`} className="group flex items-start gap-3">
                      <span className="text-green-700 font-medium group-hover:underline">{guide.title}</span>
                    </Link>
                    <p className="text-sm text-gray-500 mt-0.5">{guide.excerpt}</p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })()}

        {/* Related Tours */}
        {relatedTours.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">You Might Also Like</h2>
              <Link
                href="/tours"
                className="text-sm font-medium text-green-700 hover:text-green-800 transition-colors flex items-center gap-1"
              >
                View All Tours
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTours.map((related) => (
                <TourCard key={related.slug} tour={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
