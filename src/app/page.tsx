import Link from 'next/link';
import { tours } from '@/data/tours';
import { categories } from '@/data/categories';
import { guides } from '@/data/guides';
import TourCard from '@/components/ui/TourCard';
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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOCIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Discover the Best Tours &amp; Attractions in London
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Book tickets for the Tower of London, London Eye, Harry Potter Studio Tour, Thames cruises, and more. Trusted reviews, best prices, instant confirmation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tours"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-900 hover:bg-blue-50 transition-colors shadow-lg"
              >
                Browse All Tours
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/guides/first-time-visiting-london"
                className="inline-flex items-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                First Time Visiting?
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Instant confirmation
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Free cancellation on most tours
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Best price guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Most Popular London Tours</h2>
            <p className="mt-2 text-gray-600">Our highest-rated experiences, loved by thousands of visitors.</p>
          </div>
          <Link href="/tours" className="hidden sm:inline-flex items-center text-sm font-semibold text-blue-900 hover:underline">
            View all tours
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/tours" className="inline-flex items-center text-sm font-semibold text-blue-900 hover:underline">
            View all tours
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
          <p className="text-gray-600 mb-8">Find the perfect London experience for your interests.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <span className="text-4xl block mb-3">{cat.icon}</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">{cat.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{cat.tourSlugs.length} {cat.tourSlugs.length === 1 ? 'tour' : 'tours'}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Book with Best London Tours?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="h-7 w-7 text-blue-900" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Skip the Queues</h3>
            <p className="text-gray-600">Pre-booked tickets mean less time waiting and more time exploring London&apos;s incredible attractions.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="h-7 w-7 text-blue-900" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Prices</h3>
            <p className="text-gray-600">We compare prices so you don&apos;t have to. Book online and often save compared to gate prices.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="h-7 w-7 text-blue-900" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Reviews</h3>
            <p className="text-gray-600">Every tour we recommend has thousands of verified reviews. We only feature the highest-rated experiences.</p>
          </div>
        </div>
      </section>

      {/* Travel Guides */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">London Travel Guides</h2>
              <p className="mt-2 text-gray-600">Expert tips and itineraries to help you plan the perfect visit.</p>
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
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
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

      {/* London Tours at a Glance */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">London Tours at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-blue-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-900">{tours.length}</div>
            <div className="text-sm text-gray-600 mt-1">Hand-Picked Tours</div>
          </div>
          <div className="text-center bg-blue-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-900">{categories.length}</div>
            <div className="text-sm text-gray-600 mt-1">Categories</div>
          </div>
          <div className="text-center bg-blue-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-900">{guides.length}</div>
            <div className="text-sm text-gray-600 mt-1">Travel Guides</div>
          </div>
          <div className="text-center bg-blue-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-900">From &pound;17</div>
            <div className="text-sm text-gray-600 mt-1">Lowest Price</div>
          </div>
        </div>
      </section>

      {/* GYG City Widget */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">More London Experiences</h2>
        <p className="text-gray-600 mb-8">Browse hundreds of tours, activities, and experiences in London.</p>
        <div
          data-gyg-href="https://widget.getyourguide.com/default/city.frame"
          data-gyg-location-id="57"
          data-gyg-locale-code="en-US"
          data-gyg-widget="city"
          data-gyg-partner-id={GYG_PARTNER_ID}
        />
      </section>

      {/* Explore London - Internal Links */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore London</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Link href="/about" className="text-blue-900 hover:underline text-sm">
                    About Best London Tours
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
