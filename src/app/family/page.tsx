import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { tours } from '@/data/tours';
import { SITE_URL, GYG_PARTNER_ID } from '@/lib/constants';
import { itemListSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import StarRating from '@/components/ui/StarRating';
import FAQ from '@/components/ui/FAQ';

const familyTours = tours.filter(t =>
  t.bestFor.some(b => b.toLowerCase().includes('famil')) ||
  t.categories.includes('family-fun')
);

// Sort by review count (most popular first) as a proxy for family trust
const sortedFamilyTours = [...familyTours].sort((a, b) => b.reviewCount - a.reviewCount);

const familyNotes: Record<string, { ages: string; pushchair: string; tip: string }> = {
  'london-eye-tickets': {
    ages: 'All ages. Under 3s go free.',
    pushchair: 'Pushchairs can be taken into the capsule. Staff assist with boarding.',
    tip: 'Book a morning slot to avoid the longest queues. Children love spotting landmarks from above.',
  },
  'harry-potter-studio-tour': {
    ages: 'Best for ages 5+. Under 4s go free.',
    pushchair: 'The studio is fully pushchair accessible with wide paths throughout.',
    tip: 'Book the earliest coach departure so kids have maximum energy for the studio. Butterbeer is a must-try.',
  },
  'hop-on-hop-off-bus': {
    ages: 'All ages. Under 5s go free.',
    pushchair: 'Pushchairs can be folded and stored on the lower deck.',
    tip: 'Sit on the upper deck for the best views. Children love the open-air experience. Bring layers in case of wind.',
  },
  'london-dungeon-tickets': {
    ages: 'Ages 12+. Not suitable for younger children.',
    pushchair: 'Not pushchair accessible. The experience involves walking through dark areas and stairs.',
    tip: 'Only bring confident older children. There are genuine jump scares. Ask staff at any point if someone wants to leave.',
  },
  'madame-tussauds-tickets': {
    ages: 'All ages. Under 3s go free.',
    pushchair: 'Fully pushchair accessible. Lifts available between floors.',
    tip: 'The Marvel and Star Wars zones are the biggest hits with kids. Allow 2-3 hours to see everything.',
  },
  'tower-of-london-tickets': {
    ages: 'All ages. Under 5s go free.',
    pushchair: 'Partially accessible. Some areas have cobblestones and stairs. A baby carrier is easier.',
    tip: 'The Beefeater tours are entertaining for all ages. The armour collection is a favourite with boys. Visit the ravens before they roost.',
  },
  'thames-sightseeing-cruise': {
    ages: 'All ages welcome.',
    pushchair: 'Pushchairs are fine on board. Indoor and outdoor seating.',
    tip: 'Children love sitting on the open-air deck and spotting landmarks. Bring snacks as the onboard bar has limited options.',
  },
  'buckingham-palace-tickets': {
    ages: 'All ages. Under 5s go free.',
    pushchair: 'Limited pushchair access. Baby carriers recommended inside the State Rooms.',
    tip: 'Combine with the Changing of the Guard ceremony outside. The gardens at the end are a good place for kids to run around.',
  },
  'windsor-stonehenge-bath-tour': {
    ages: 'Best for ages 6+. Long day for very young children.',
    pushchair: 'Coach is pushchair-friendly. Stonehenge paths are flat. Windsor Castle has some stairs.',
    tip: 'Pack snacks and entertainment for the coach journeys. Bath has excellent ice cream shops for a mid-afternoon treat.',
  },
};

const faqs = [
  { question: 'What is the best London tour for families?', answer: 'The Harry Potter Studio Tour is consistently the top-rated family experience, with a 4.6 rating from nearly 10,000 reviews. For younger children, the London Eye and hop-on hop-off bus are gentle, engaging options. Madame Tussauds is another family favourite, especially on rainy days.' },
  { question: 'Are London tours suitable for toddlers?', answer: 'Several tours welcome toddlers, with under 3s or under 5s going free on most. The London Eye, Thames cruise, and hop-on hop-off bus are all toddler-friendly. Avoid the London Dungeon (ages 12+) and very long day trips with very young children.' },
  { question: 'Do children get discounts on London tours?', answer: 'Most London attractions offer reduced prices for children aged 3-15, and many admit under 3s or under 5s for free. The exact age threshold varies by attraction. Booking online typically gives the best family rates.' },
  { question: 'What free things can families do in London?', answer: 'The Natural History Museum, Science Museum, and V&A are all free and world-class. Hyde Park has excellent playgrounds and the Diana Memorial Playground. The Changing of the Guard at Buckingham Palace is free to watch. Greenwich Park offers great views and the Cutty Sark area is lovely for families.' },
];

export const metadata: Metadata = {
  title: 'Best London Tours for Families with Kids 2026 | Family-Friendly Attractions',
  description: `Discover the ${familyTours.length} best family-friendly London tours in 2026. Harry Potter, London Eye, Thames cruises, and more. Age recommendations, pushchair info, and parent tips.`,
  alternates: { canonical: `${SITE_URL}/family` },
  openGraph: {
    title: 'Best London Tours for Families with Kids 2026',
    description: `${familyTours.length} family-friendly London tours with age recommendations and parent tips.`,
    url: `${SITE_URL}/family`,
  },
};

export default function FamilyPage() {
  const schemaData = [
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Family Tours', url: `${SITE_URL}/family` },
    ]),
    itemListSchema(sortedFamilyTours),
    faqSchema(faqs),
  ];

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
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Family Tours' }]} />

        <AffiliateDisclosure />

        {/* Hero */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">FAMILY PICKS</span>
            <span className="text-sm text-purple-700 font-medium">Updated March 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Best London Tours for Families with Kids 2026
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            London is one of the best cities in the world for family holidays. We have selected the {familyTours.length} top
            tours and attractions that children genuinely enjoy, with age recommendations, pushchair
            accessibility notes, and practical tips from parents who have been there.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-purple-700">{familyTours.length}</p>
              <p className="text-xs text-gray-600">Family Tours</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-purple-700">
                &pound;{Math.min(...familyTours.map(t => t.price))}
              </p>
              <p className="text-xs text-gray-600">Cheapest</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-purple-700">
                {(familyTours.reduce((s, t) => s + t.rating, 0) / familyTours.length).toFixed(1)}
              </p>
              <p className="text-xs text-gray-600">Avg Rating</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-purple-700">
                {(familyTours.reduce((s, t) => s + t.reviewCount, 0) / 1000).toFixed(0)}k
              </p>
              <p className="text-xs text-gray-600">Reviews</p>
            </div>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-10">
          <p className="text-sm font-semibold text-gray-900 mb-2">Quick Navigation</p>
          <div className="flex flex-wrap gap-2">
            {sortedFamilyTours.map(t => (
              <a key={t.slug} href={`#${t.slug}`} className="text-sm text-blue-900 hover:underline bg-white px-3 py-1 rounded-full border border-gray-200">
                {t.shortTitle}
              </a>
            ))}
          </div>
        </div>

        {/* Tour Cards */}
        <div className="space-y-10">
          {sortedFamilyTours.map((tour, index) => {
            const notes = familyNotes[tour.slug];
            return (
              <article key={tour.slug} id={tour.slug} className="scroll-mt-20">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="lg:flex">
                    <div className="lg:w-80 shrink-0">
                      <div className="aspect-[16/10] lg:aspect-auto lg:h-full relative">
                        <Image
                          src={tour.imageUrl}
                          alt={tour.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 320px"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                            #{index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <Link href={`/tours/${tour.slug}`}>
                          <h2 className="text-xl font-bold text-gray-900 hover:text-blue-900 transition-colors">
                            {tour.shortTitle}
                          </h2>
                        </Link>
                        <div className="text-right shrink-0">
                          <p className="text-sm text-gray-500">From</p>
                          <p className="text-xl font-bold text-gray-900">&pound;{tour.price}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                        <StarRating rating={tour.rating} reviewCount={tour.reviewCount} />
                        <span className="text-gray-300">|</span>
                        <span>{tour.duration}</span>
                      </div>

                      <p className="text-gray-700 mb-4">{tour.excerpt}</p>

                      {/* Family Info Grid */}
                      {notes && (
                        <div className="grid sm:grid-cols-3 gap-3 mb-4">
                          <div className="bg-blue-50 rounded-lg p-3">
                            <p className="text-xs font-semibold text-blue-800 uppercase mb-1">Ages</p>
                            <p className="text-sm text-blue-700">{notes.ages}</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-xs font-semibold text-green-800 uppercase mb-1">Pushchair</p>
                            <p className="text-sm text-green-700">{notes.pushchair}</p>
                          </div>
                          <div className="bg-amber-50 rounded-lg p-3">
                            <p className="text-xs font-semibold text-amber-800 uppercase mb-1">Parent Tip</p>
                            <p className="text-sm text-amber-700">{notes.tip}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tour.bestFor.map(b => (
                          <span key={b} className="inline-block bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-1 rounded-full">
                            {b}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={tour.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
                        >
                          Book Now from &pound;{tour.price}
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                        <Link
                          href={`/tours/${tour.slug}`}
                          className="inline-flex items-center justify-center gap-1 rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Full Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Family Planning Tips */}
        <section className="mt-12 bg-purple-50 border border-purple-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Planning a Family Trip to London</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Time to Visit</h3>
              <p className="text-sm">
                Spring (April to May) and early autumn (September) offer the best combination of mild weather
                and manageable crowds. School holidays (late July through August) are the busiest period.
                If you must visit in summer, book all tours well in advance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Getting Around with Kids</h3>
              <p className="text-sm">
                Children under 11 travel free on the Tube, buses, and DLR. Use contactless payment for adult fares.
                The hop-on hop-off bus is a great way to rest tired legs while still sightseeing. River buses are
                another fun and practical option.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Family Attractions</h3>
              <p className="text-sm">
                The Natural History Museum, Science Museum, and V&A are all free and excellent for children.
                Hyde Park has the Diana Memorial Playground (2-12 years). Greenwich Park, Regent&apos;s Park,
                and the South Bank offer free outdoor fun.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Where to Eat with Kids</h3>
              <p className="text-sm">
                Borough Market and Camden Market have plenty of kid-friendly food stalls. Many restaurants along
                the South Bank cater to families. Wagamama, Pizza Express, and Honest Burgers are reliable
                chains with children&apos;s menus throughout central London.
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
            <Link href="/top-10" className="text-blue-900 hover:underline font-medium">Top 10 Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/first-time" className="text-blue-900 hover:underline font-medium">First Time Visitors</Link>
            <span className="text-gray-300">|</span>
            <Link href="/category/family-fun" className="text-blue-900 hover:underline font-medium">Family Fun Category</Link>
          </div>
        </section>
      </div>
    </>
  );
}
