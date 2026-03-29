import Link from 'next/link';
import { tours } from '@/data/tours';
import { categories } from '@/data/categories';
import { guides } from '@/data/guides';
import TourCard from '@/components/ui/TourCard';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import { GYG_PARTNER_ID } from '@/lib/constants';

const featuredTourSlugs = [
  'tower-of-london-tickets',
  'london-eye-tickets',
  'harry-potter-studio-tour',
  'thames-sightseeing-cruise',
  'westminster-abbey-tickets',
  'the-shard-tickets',
];

const featuredTours = featuredTourSlugs
  .map((slug) => tours.find((t) => t.slug === slug))
  .filter((t): t is NonNullable<typeof t> => t !== undefined);

const topThreeSlugs = [
  'tower-of-london-tickets',
  'london-eye-tickets',
  'harry-potter-studio-tour',
];

const topThreeTours = topThreeSlugs
  .map((slug) => tours.find((t) => t.slug === slug))
  .filter((t): t is NonNullable<typeof t> => t !== undefined);

const comparisonTours = topThreeTours;

const testimonials = [
  {
    quote: 'The Tower of London was incredible. Booking online meant we skipped the massive queue and walked straight in. The kids loved meeting the Beefeaters.',
    author: 'Sarah M.',
    location: 'Manchester',
    tour: 'Tower of London',
    rating: 5,
  },
  {
    quote: 'We booked the London Eye at sunset on a whim and it was the highlight of our trip. The views were absolutely breathtaking. So easy to book on mobile.',
    author: 'James R.',
    location: 'Edinburgh',
    tour: 'London Eye',
    rating: 5,
  },
  {
    quote: 'My daughter is a huge Harry Potter fan. The studio tour exceeded all expectations. Worth every penny. Free cancellation gave us peace of mind too.',
    author: 'Michelle T.',
    location: 'Bristol',
    tour: 'Harry Potter Studio Tour',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOCIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            {/* Trust signal above headline */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-amber-300">Trusted by 50,000+ London visitors</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Find Your Perfect London Tour
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Skip the queues. Book the Tower of London, London Eye, Harry Potter Studio Tour, and more at the best prices with instant confirmation and free cancellation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tours"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-green-500 to-green-400 px-8 py-4 text-lg font-bold text-white hover:from-green-400 hover:to-green-300 transition-all shadow-xl shadow-green-500/25 active:scale-[0.98]"
              >
                Browse All Tours
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/guides/first-time-visiting-london"
                className="inline-flex items-center rounded-xl border-2 border-white/30 px-6 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                First Time Visiting?
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Instant confirmation
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Free cancellation
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Best price guarantee
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mobile tickets
            </div>
          </div>
        </div>
      </section>

      {/* Quick Book: Most Popular Tours */}
      <section className="bg-white py-10 sm:py-12 border-b border-gray-100 print:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Most Popular Tours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredTours.map((tour) => (
              <a
                key={tour.slug}
                href={tour.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl border border-gray-200 p-4 text-center hover:border-green-300 hover:shadow-md transition-all"
              >
                <p className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors leading-tight mb-2">{tour.shortTitle}</p>
                <p className="text-xs text-gray-500 mb-2">From &pound;{tour.price}</p>
                <span className="inline-block px-3 py-1.5 bg-green-600 text-white text-xs font-bold rounded-lg group-hover:bg-green-700 transition-colors">
                  Book Now
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <AffiliateDisclosure />
      </div>

      {/* Most Popular This Week */}
      <section className="bg-amber-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              TRENDING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Most Popular This Week</h2>
          </div>
          <p className="text-gray-600 mb-8">These are selling fast. London&apos;s most booked tours right now.</p>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {topThreeTours.map((tour, i) => (
              <div key={tour.slug} className="min-w-[85vw] sm:min-w-0 snap-start relative">
                {/* Rank badge */}
                <div className="absolute -top-2 -left-2 z-20 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                  #{i + 1}
                </div>
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">London&apos;s Best Tours &amp; Attractions</h2>
            <p className="mt-2 text-gray-600">Hand-picked experiences, loved by thousands of visitors.</p>
          </div>
          <Link href="/tours" className="hidden sm:inline-flex items-center text-sm font-semibold text-blue-900 hover:underline">
            View all {tours.length} tours
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {featuredTours.map((tour) => (
            <div key={tour.slug} className="min-w-[85vw] sm:min-w-0 snap-start">
              <TourCard tour={tour} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-8 py-3.5 text-base font-bold text-white hover:bg-blue-800 transition-colors shadow-lg"
          >
            View All {tours.length} Tours
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">Why 50,000+ Visitors Book Through Us</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">We make booking London tours simple, safe, and affordable. Here is what you get with every booking.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: 'Best Price Guarantee',
                desc: 'We compare prices across platforms so you always get the best deal. Often cheaper than buying at the door.',
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Instant Confirmation',
                desc: 'Get your tickets immediately by email. No waiting, no printing. Show your phone at the entrance.',
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
                  </svg>
                ),
                title: 'Free Cancellation',
                desc: 'Plans change. Most tours offer free cancellation up to 24 hours before your visit. Book risk-free.',
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                ),
                title: 'Mobile Tickets',
                desc: 'No need to print anything. Your tickets are on your phone. Scan and go at every attraction.',
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Skip the Queues',
                desc: 'Pre-booked tickets mean less time waiting and more time exploring. Walk past the long lines.',
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
                title: '24/7 Support',
                desc: 'Questions before or during your trip? Our booking partner offers round-the-clock customer support.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-green-600/25 hover:from-green-500 hover:to-green-400 transition-all active:scale-[0.98]"
            >
              Browse Tours Now
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">Compare London&apos;s Top Attractions</h2>
        <p className="text-gray-600 text-center mb-8">Not sure which to pick? Here is a side-by-side comparison of the three most popular tours.</p>
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-4 text-left text-sm font-semibold rounded-tl-xl">Feature</th>
                {comparisonTours.map((tour, i) => (
                  <th key={tour.slug} className={`p-4 text-center text-sm font-semibold ${i === comparisonTours.length - 1 ? 'rounded-tr-xl' : ''}`}>
                    {tour.shortTitle}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-gray-700 bg-gray-50">Price</td>
                {comparisonTours.map((tour) => (
                  <td key={tour.slug} className="p-4 text-center font-bold text-gray-900">From &pound;{tour.price}</td>
                ))}
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-gray-700 bg-gray-50">Duration</td>
                {comparisonTours.map((tour) => (
                  <td key={tour.slug} className="p-4 text-center text-gray-700">{tour.duration}</td>
                ))}
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-gray-700 bg-gray-50">Rating</td>
                {comparisonTours.map((tour) => (
                  <td key={tour.slug} className="p-4 text-center">
                    <span className="font-bold text-amber-600">{tour.rating}</span>
                    <span className="text-gray-500"> / 5</span>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-gray-700 bg-gray-50">Reviews</td>
                {comparisonTours.map((tour) => (
                  <td key={tour.slug} className="p-4 text-center text-gray-700">{tour.reviewCount.toLocaleString()}+</td>
                ))}
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-gray-700 bg-gray-50">Best For</td>
                {comparisonTours.map((tour) => (
                  <td key={tour.slug} className="p-4 text-center text-gray-700">{tour.bestFor.slice(0, 2).join(', ')}</td>
                ))}
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 font-medium text-gray-700 bg-gray-50">Free Cancellation</td>
                {comparisonTours.map((tour) => (
                  <td key={tour.slug} className="p-4 text-center">
                    <svg className="h-5 w-5 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 rounded-bl-xl" />
                {comparisonTours.map((tour, i) => (
                  <td key={tour.slug} className={`p-4 text-center ${i === comparisonTours.length - 1 ? 'rounded-br-xl' : ''}`}>
                    <a
                      href={tour.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:from-green-500 hover:to-green-400 transition-all active:scale-[0.98]"
                    >
                      Book Now
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">What Visitors Say</h2>
          <p className="text-blue-200 text-center mb-10">Real experiences from people who booked through us.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.author}</p>
                    <p className="text-blue-300 text-xs">{t.location}</p>
                  </div>
                  <span className="text-xs text-blue-300 bg-blue-800/50 px-2 py-1 rounded-full">{t.tour}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-blue-900 hover:bg-blue-50 transition-colors shadow-lg"
            >
              Find Your Tour
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
          <p className="text-gray-600 mb-8">Find the perfect London experience for your interests.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group bg-white rounded-xl border border-gray-200 p-5 text-center hover:shadow-lg hover:border-blue-300 transition-all active:scale-[0.98]"
              >
                <span className="text-3xl sm:text-4xl block mb-2">{cat.icon}</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors text-sm sm:text-base">{cat.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{cat.tourSlugs.length} {cat.tourSlugs.length === 1 ? 'tour' : 'tours'}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Social Proof */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">50,000+</div>
              <div className="text-sm text-blue-200 mt-1">Happy Visitors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{tours.length}</div>
              <div className="text-sm text-blue-200 mt-1">Hand-Picked Tours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">4.6</div>
              <div className="text-sm text-blue-200 mt-1">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">From &pound;17</div>
              <div className="text-sm text-blue-200 mt-1">Lowest Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* GYG City Widget */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Explore Hundreds More London Experiences</h2>
          <p className="text-gray-600 mb-6">Browse tours, activities, day trips, and more from our trusted booking partner.</p>
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
            <div
              data-gyg-href="https://widget.getyourguide.com/default/city.frame"
              data-gyg-location-id="57"
              data-gyg-locale-code="en-US"
              data-gyg-widget="city"
              data-gyg-partner-id={GYG_PARTNER_ID}
            />
          </div>
        </div>
      </section>

      {/* Travel Guides */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">London Travel Guides</h2>
              <p className="mt-2 text-gray-600">Expert tips and itineraries to plan the perfect visit.</p>
            </div>
            <Link href="/guides" className="hidden sm:inline-flex items-center text-sm font-semibold text-blue-900 hover:underline">
              All guides
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.slice(0, 4).map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all active:scale-[0.99]"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                  <span className="text-4xl opacity-50">📖</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{guide.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore London - Internal Links (SEO) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Explore London</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Popular Tours</h3>
              <ul className="space-y-2">
                {tours.slice(0, 6).map((tour) => (
                  <li key={tour.slug}>
                    <Link href={`/tours/${tour.slug}`} className="text-blue-900 hover:underline text-sm">
                      {tour.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">By Category</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link href={`/category/${cat.slug}`} className="text-blue-900 hover:underline text-sm">
                      {cat.icon} {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Travel Guides</h3>
              <ul className="space-y-2">
                {guides.map((guide) => (
                  <li key={guide.slug}>
                    <Link href={`/guides/${guide.slug}`} className="text-blue-900 hover:underline text-sm">
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tours" className="text-blue-900 hover:underline text-sm">
                    All London Tours
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-blue-900 hover:underline text-sm">
                    All Travel Guides
                  </Link>
                </li>
                <li>
                  <Link href="/top-10" className="text-blue-900 hover:underline text-sm">
                    Top 10 London Tours
                  </Link>
                </li>
                <li>
                  <Link href="/budget" className="text-blue-900 hover:underline text-sm">
                    Budget Tours Under 30
                  </Link>
                </li>
                <li>
                  <Link href="/family" className="text-blue-900 hover:underline text-sm">
                    Family Tours
                  </Link>
                </li>
                <li>
                  <Link href="/first-time" className="text-blue-900 hover:underline text-sm">
                    First Time Visitors
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="text-blue-900 hover:underline text-sm">
                    Compare All Tours
                  </Link>
                </li>
                <li>
                  <Link href="/trending" className="text-blue-900 hover:underline text-sm">
                    Trending Tours
                  </Link>
                </li>
                <li>
                  <Link href="/local-tips" className="text-blue-900 hover:underline text-sm">
                    Local Tips
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-900 hover:underline text-sm">
                    About Best London Tours
                  </Link>
                </li>
              </ul>
              <h3 className="font-semibold text-gray-900 mb-3 mt-6">All Tours</h3>
              <ul className="space-y-2">
                {tours.slice(6).map((tour) => (
                  <li key={tour.slug}>
                    <Link href={`/tours/${tour.slug}`} className="text-blue-900 hover:underline text-sm">
                      {tour.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3">
        <Link
          href="/tours"
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-green-600 to-green-500 py-3.5 text-base font-bold text-white shadow-lg active:scale-[0.98] transition-transform"
        >
          Browse Tours: From &pound;17
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
      {/* Spacer for sticky bar on mobile */}
      <div className="h-16 sm:hidden" />
    </>
  );
}
