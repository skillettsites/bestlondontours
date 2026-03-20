import { Metadata } from 'next';
import Link from 'next/link';
import { getTourBySlug } from '@/data/tours';
import TourCard from '@/components/ui/TourCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import FAQ from '@/components/ui/FAQ';
import { SITE_URL, CONTENT_DATE } from '@/lib/constants';
import { faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Trending in London 2026 | Most Popular Tours & Things to Do',
  description: 'See what visitors are booking right now in London. The most popular tours, seasonal picks, and trending attractions for 2026. Book online for the best prices.',
  alternates: { canonical: `${SITE_URL}/trending` },
  openGraph: {
    title: 'Trending in London 2026 | Most Popular Tours & Things to Do',
    description: 'See what visitors are booking right now in London. Most popular tours, seasonal picks, and trending attractions.',
    url: `${SITE_URL}/trending`,
  },
};

const popularTourSlugs = [
  'tower-of-london-tickets',
  'london-eye-tickets',
  'harry-potter-studio-tour',
  'thames-sightseeing-cruise',
  'madame-tussauds-tickets',
];

const seasonalPicks = [
  {
    title: 'Buckingham Palace Summer Opening',
    description: 'The State Rooms open their doors from late July to early October. This is the only time of year you can step inside the King\'s official London residence and explore 19 magnificent rooms. Book early, as tickets sell out fast every summer.',
    link: '/tours/buckingham-palace-tickets',
    icon: '👑',
  },
  {
    title: 'Thames Sunset Cruises',
    description: 'Long summer evenings make spring and summer the perfect time for a Thames cruise. Golden hour light across Tower Bridge and the city skyline is something you will not forget. The boats run later into the evening from April onwards.',
    link: '/tours/thames-sightseeing-cruise',
    icon: '🌅',
  },
  {
    title: 'Borough Market in the Sun',
    description: 'Borough Market comes alive on warm days, with outdoor seating, street food, and live music. The food tour is best enjoyed in spring and summer when the market spills out onto the surrounding streets and the atmosphere is at its peak.',
    link: '/tours/borough-market-food-tour',
    icon: '🍽️',
  },
  {
    title: 'Royal Parks in Bloom',
    description: 'Hyde Park, St James\'s Park, and Kensington Gardens are at their finest from April to June. Combine a park visit with a nearby attraction like The Shard or the London Eye for a full day out without breaking the budget.',
    link: '/tours/the-shard-tickets',
    icon: '🌸',
  },
];

const faqs = [
  {
    question: 'What are the most popular London attractions right now?',
    answer: 'The Tower of London, London Eye, and Harry Potter Studio Tour consistently top the charts. Thames cruises are also extremely popular in spring and summer, along with Buckingham Palace during its summer opening.',
  },
  {
    question: 'When is the best time to visit London in 2026?',
    answer: 'April to June offers the best balance of warm weather, longer days, and manageable crowds. September and October are also excellent. July and August are the busiest months, while winter brings lower prices and festive markets.',
  },
  {
    question: 'Should I book London tours in advance?',
    answer: 'Yes, always. Popular attractions like the Tower of London and Harry Potter Studio Tour can sell out days or weeks ahead, especially during school holidays. Booking online also gets you better prices than paying at the door.',
  },
  {
    question: 'What is trending for families visiting London?',
    answer: 'The Harry Potter Studio Tour remains the most sought-after family experience. Madame Tussauds, the London Eye, and the London Dungeon are also hugely popular. For a budget-friendly day, the Natural History Museum and Science Museum are both free.',
  },
];

export default function TrendingPage() {
  const popularTours = popularTourSlugs
    .map((slug) => getTourBySlug(slug))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Trending' }]} />

        <AffiliateDisclosure />

        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Trending in London</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            What are visitors booking right now? These are the tours, attractions, and experiences generating the most buzz in London this season. Whether you are planning a first trip or a return visit, this is where the smart money is going.
          </p>
        </div>

        {/* Most Popular Tours */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Most Popular Tours</h2>
          <p className="text-gray-600 mb-6">
            These five experiences are the ones visitors come back raving about. Consistently top-rated, with tens of thousands of reviews between them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-1 text-sm font-semibold text-blue-900 hover:underline"
            >
              Browse all tours
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Seasonal Picks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Seasonal Picks for Spring & Summer 2026</h2>
          <p className="text-gray-600 mb-6">
            London changes with the seasons. Here is what to prioritise if you are visiting between April and September.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {seasonalPicks.map((pick) => (
              <Link
                key={pick.title}
                href={pick.link}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{pick.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors mb-2">
                      {pick.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pick.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* What Visitors Are Booking */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">What Visitors Are Booking</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-1">36,000+</p>
                <p className="text-sm text-blue-200">Verified reviews across our tours</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">13</p>
                <p className="text-sm text-blue-200">Curated experiences in London</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">From £17</p>
                <p className="text-sm text-blue-200">Per person, best prices guaranteed</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
              >
                Explore All Tours
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/tours" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
              All Tours
            </Link>
            <Link href="/guides" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
              Travel Guides
            </Link>
            <Link href="/local-tips" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
              Local Tips
            </Link>
            <Link href="/category/landmarks" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
              Landmarks
            </Link>
            <Link href="/category/family-fun" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
              Family Fun
            </Link>
            <Link href="/category/food-tours" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
              Food Tours
            </Link>
            <Link href="/category/river-cruises" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
              River Cruises
            </Link>
            <Link href="/category/day-trips" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
              Day Trips
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} />
      </div>
    </>
  );
}
