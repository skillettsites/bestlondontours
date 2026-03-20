import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { tours, getTourBySlug } from '@/data/tours';
import { SITE_URL, GYG_PARTNER_ID } from '@/lib/constants';
import { itemListSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import StarRating from '@/components/ui/StarRating';
import FAQ from '@/components/ui/FAQ';

// Curated 5 essential tours for first-time visitors
const essentialSlugs = [
  'tower-of-london-tickets',
  'london-eye-tickets',
  'thames-sightseeing-cruise',
  'buckingham-palace-tickets',
  'hop-on-hop-off-bus',
];

const essentialTours = essentialSlugs
  .map(slug => getTourBySlug(slug))
  .filter((t): t is NonNullable<typeof t> => t !== undefined);

const narratives: Record<string, { timeOfDay: string; story: string }> = {
  'hop-on-hop-off-bus': {
    timeOfDay: 'Morning: Get Your Bearings',
    story: 'Start your London adventure on the top deck of an open-air bus. This is the smartest move for a first-time visitor because it shows you the lay of the land. As the bus winds past Buckingham Palace, Big Ben, Tower Bridge, and St Paul\'s Cathedral, you will start to understand how London fits together. The audio commentary fills in the history, and you can hop off at any point that catches your eye. Think of it as your personal orientation tour. By lunchtime, you will feel like you know the city.',
  },
  'tower-of-london-tickets': {
    timeOfDay: 'Late Morning: Step Into History',
    story: 'Hop off the bus at the Tower of London and step into a thousand years of history. This is the one London attraction that delivers on every level. The Crown Jewels are genuinely awe-inspiring (the Imperial State Crown alone contains 2,868 diamonds). The Beefeater tours are surprisingly entertaining, mixing dark tales with dry humour. Walk the medieval walls for brilliant views of Tower Bridge. Allow 2-3 hours here; it is worth every minute.',
  },
  'thames-sightseeing-cruise': {
    timeOfDay: 'Early Afternoon: See London from the Water',
    story: 'After the Tower, walk to Tower Pier and catch the Thames cruise towards Westminster. This is the most relaxing way to see London and provides a completely different perspective on the landmarks you spotted from the bus. Live commentary points out things you would never notice from the street. The journey takes about an hour and drops you right next to the Houses of Parliament and Big Ben. At £17, it is the best value experience in London.',
  },
  'buckingham-palace-tickets': {
    timeOfDay: 'Mid-Afternoon: Visit the Palace',
    story: 'From Westminster Pier, it is a 15-minute walk through St James\'s Park to Buckingham Palace. If you are visiting between July and October, the State Rooms are open to the public, and stepping inside the working palace of the British monarch is a genuinely special experience. The 19 rooms are lavishly decorated, and the Picture Gallery contains works by Rembrandt and Rubens. Even outside the summer opening, watching the Changing of the Guard ceremony is a quintessential London moment.',
  },
  'london-eye-tickets': {
    timeOfDay: 'Evening: End with a View',
    story: 'Walk back to the South Bank as the afternoon light turns golden and end your first day in London with a ride on the London Eye. The 30-minute rotation takes you 135 metres above the city, giving you panoramic views of every landmark you visited during the day. From up here, you can trace your entire route: the Tower, the Thames, Westminster, Buckingham Palace. It is the perfect way to cap off an unforgettable first day. Book a sunset slot if you can; watching London light up from the capsule is magical.',
  },
};

const faqs = [
  { question: 'What tours should I do first time in London?', answer: 'We recommend five essential tours for first-time visitors: a hop-on hop-off bus for orientation, the Tower of London for history, a Thames cruise for the views, Buckingham Palace for royal grandeur, and the London Eye for a panoramic finish. Together, they cover the highlights and can all be done in a single day.' },
  { question: 'Can you do these 5 tours in one day?', answer: 'Yes, this itinerary is designed to flow from morning to evening. Start with the bus tour around 9am, visit the Tower from 11am, cruise the Thames at 1:30pm, reach Buckingham Palace by 3pm, and finish at the London Eye around 5:30pm. Total cost is approximately £136 per person if you book all five.' },
  { question: 'How much does a day of London tours cost?', answer: `Booking all five tours on this list costs approximately £${essentialTours.reduce((s, t) => s + t.price, 0)} per person. You could also pick your top 3 to keep costs down. The Thames cruise (£17) and hop-on hop-off bus (£27) offer the best value individually.` },
  { question: 'What is the best time of year for a first visit to London?', answer: 'Late April to June offers the best combination of pleasant weather, long daylight hours, and manageable crowds. September is also excellent. July and August are the busiest months. Winter has shorter days but fewer tourists and lower hotel prices.' },
  { question: 'Do I need to book London tours in advance?', answer: 'Strongly recommended, especially for the Tower of London and London Eye, which can sell out on busy days. Online prices are typically cheaper than walk-up tickets. Booking in advance also lets you secure your preferred time slots.' },
];

export const metadata: Metadata = {
  title: 'First Time in London? The 5 Essential Tours You Need | Best London Tours',
  description: 'The 5 must-do London tours for first-time visitors. A perfect day itinerary covering the Tower of London, Thames cruise, London Eye, and more. Book online and save.',
  alternates: { canonical: `${SITE_URL}/first-time` },
  openGraph: {
    title: 'First Time in London? The 5 Essential Tours You Need',
    description: 'The perfect first-day itinerary covering London\'s top 5 must-do tours, from morning to evening.',
    url: `${SITE_URL}/first-time`,
  },
};

export default function FirstTimePage() {
  const schemaData = [
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'First Time Guide', url: `${SITE_URL}/first-time` },
    ]),
    itemListSchema(essentialTours),
    faqSchema(faqs),
  ];

  const totalCost = essentialTours.reduce((s, t) => s + t.price, 0);

  return (
    <>
      {schemaData.filter(Boolean).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'First Time Guide' }]} />

        <AffiliateDisclosure />

        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">FIRST VISIT</span>
            <span className="text-sm text-blue-700 font-medium">Updated March 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            First Time in London? The 5 Essential Tours You Need
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Planning your first trip to London can be overwhelming. With so many attractions to choose from,
            it is hard to know where to start. We have designed the perfect first-day itinerary that takes you
            from morning to evening, covering London&apos;s absolute highlights in the most logical order. No
            doubling back, no wasted time.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-blue-700">5</p>
              <p className="text-xs text-gray-600">Essential Tours</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-blue-700">1 Day</p>
              <p className="text-xs text-gray-600">Full Itinerary</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-blue-700">&pound;{totalCost}</p>
              <p className="text-xs text-gray-600">Total Cost</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-blue-700">
                {(essentialTours.reduce((s, t) => s + t.reviewCount, 0) / 1000).toFixed(0)}k+
              </p>
              <p className="text-xs text-gray-600">Reviews</p>
            </div>
          </div>
        </div>

        {/* Timeline Navigation */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-10">
          <p className="text-sm font-semibold text-gray-900 mb-3">Your Day at a Glance</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            {essentialTours.map((tour, i) => {
              const narrative = narratives[tour.slug];
              return (
                <a
                  key={tour.slug}
                  href={`#stop-${i + 1}`}
                  className="flex-1 flex items-center gap-2 bg-white sm:bg-transparent px-3 py-2 rounded-lg sm:rounded-none sm:border-l-2 sm:first:border-l-0 border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  <span className="bg-blue-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 truncate">{narrative?.timeOfDay.split(':')[0]}</p>
                    <p className="text-sm font-medium text-gray-900 truncate">{tour.shortTitle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Tour Entries */}
        <div className="space-y-12">
          {essentialTours.map((tour, index) => {
            const narrative = narratives[tour.slug];
            return (
              <article key={tour.slug} id={`stop-${index + 1}`} className="scroll-mt-20">
                {/* Time of day header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm text-blue-600 font-medium">{narrative?.timeOfDay}</p>
                    <h2 className="text-2xl font-bold text-gray-900">{tour.shortTitle}</h2>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="lg:flex">
                    <div className="lg:w-96 shrink-0">
                      <div className="aspect-[16/10] lg:aspect-auto lg:h-full relative">
                        <Image
                          src={tour.imageUrl}
                          alt={tour.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 384px"
                        />
                        <div className="absolute bottom-4 left-4 flex gap-2">
                          <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                            &pound;{tour.price}
                          </span>
                          <span className="bg-black/60 text-white text-sm font-medium px-3 py-1 rounded-full">
                            {tour.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 lg:p-8 flex-1">
                      <StarRating rating={tour.rating} reviewCount={tour.reviewCount} size="lg" />

                      <p className="mt-4 text-gray-700 leading-relaxed text-base">
                        {narrative?.story || tour.description}
                      </p>

                      {/* Key highlights */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {tour.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 bg-gray-50 rounded-full px-3 py-1">
                            <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-700">{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a
                          href={tour.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-3 text-base font-semibold text-white hover:bg-green-700 transition-colors shadow-sm"
                        >
                          Book Now from &pound;{tour.price}
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                        <Link
                          href={`/tours/${tour.slug}`}
                          className="inline-flex items-center justify-center gap-1 rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Full Tour Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Total Cost Summary */}
        <section className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Total Cost Breakdown</h2>
          <div className="space-y-3 mb-6">
            {essentialTours.map((tour, i) => (
              <div key={tour.slug} className="flex items-center justify-between py-2 border-b border-green-100 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="font-medium text-gray-900">{tour.shortTitle}</span>
                </div>
                <span className="font-bold text-gray-900">&pound;{tour.price}</span>
              </div>
            ))}
            <div className="flex items-center justify-between pt-3 border-t-2 border-green-300">
              <span className="text-lg font-bold text-gray-900">Total per person</span>
              <span className="text-2xl font-bold text-green-700">&pound;{totalCost}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            All prices are per person and subject to availability. Most tours offer free cancellation up to 24
            hours before. Booking online in advance secures the best prices and guarantees entry.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {essentialTours.map(tour => (
              <a
                key={tour.slug}
                href={tour.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
              >
                Book {tour.shortTitle}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">First-Time Visitor Tips</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Getting from the Airport</h3>
              <p className="text-sm">
                The Heathrow Express reaches Paddington in 15 minutes (&pound;25). The Piccadilly Line is
                cheaper (&pound;5.50) but takes 50-60 minutes. From Gatwick, the Gatwick Express to Victoria
                takes 30 minutes. Stansted and Luton have coach and train connections to central London.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Oyster Card or Contactless</h3>
              <p className="text-sm">
                You do not need to buy an Oyster card. Any contactless bank card works on the Tube, buses,
                and DLR at the same capped prices. Daily and weekly fare caps ensure you never overpay, no
                matter how many journeys you make.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Area to Stay</h3>
              <p className="text-sm">
                South Kensington, Westminster, and Southwark put you within walking distance of major
                attractions. For a first visit, being central is worth the extra cost. Avoid staying near
                airports unless you have an early flight.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Weather and Packing</h3>
              <p className="text-sm">
                London weather is unpredictable. Bring layers and a waterproof jacket regardless of the season.
                Comfortable walking shoes are essential. You will walk more than you expect, typically
                15,000-20,000 steps on an active sightseeing day.
              </p>
            </div>
          </div>
        </section>

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

        <FAQ faqs={faqs} />

        {/* Internal links */}
        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/compare" className="text-blue-900 hover:underline font-medium">Compare All Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/budget" className="text-blue-900 hover:underline font-medium">Budget Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/family" className="text-blue-900 hover:underline font-medium">Family Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/top-10" className="text-blue-900 hover:underline font-medium">Top 10 Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/tours" className="text-blue-900 hover:underline font-medium">All Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/guides/first-time-visiting-london" className="text-blue-900 hover:underline font-medium">First Time Visitor Guide</Link>
          </div>
        </section>
      </div>
    </>
  );
}
