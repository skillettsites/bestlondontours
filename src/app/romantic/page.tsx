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
import TrackedGYGLink from '@/components/TrackedGYGLink';

const romanticSlugs = [
  'thames-dinner-cruise',
  'thames-sightseeing-cruise',
  'the-shard-tickets',
  'london-eye-tickets',
  'borough-market-food-tour',
  'kensington-palace-tickets',
  'jack-the-ripper-tour',
  'london-ghost-tour',
  'buckingham-palace-tickets',
  'hampton-court-palace-tickets',
];

const romanticTours = romanticSlugs
  .map(slug => tours.find(t => t.slug === slug))
  .filter((t): t is NonNullable<typeof t> => t !== undefined);

const romanticNotes: Record<string, { vibe: string; bestTime: string; tip: string }> = {
  'thames-dinner-cruise': {
    vibe: 'Candlelit dinner on the river with live music and dancing.',
    bestTime: 'Book a Friday or Saturday evening cruise for the full experience.',
    tip: 'Request a window table when boarding. Arrive early to grab the best seats on the upper deck for photos before dinner.',
  },
  'thames-sightseeing-cruise': {
    vibe: 'Relaxed daytime cruise with stunning views of Tower Bridge and the South Bank.',
    bestTime: 'Late afternoon for golden hour light on the water.',
    tip: 'Sit on the open-air deck at the back of the boat for the most romantic views. Bring a light jacket as it gets breezy on the river.',
  },
  'the-shard-tickets': {
    vibe: 'Breathtaking 360-degree views from the tallest building in Western Europe.',
    bestTime: 'Book a sunset slot for the most spectacular experience. The city lights appearing below are magical.',
    tip: 'Head to the open-air viewing platform on floor 72 for a truly memorable moment. Champagne is available to purchase at the top.',
  },
  'london-eye-tickets': {
    vibe: 'Iconic glass capsule ride 135 metres above the Thames.',
    bestTime: 'Twilight rides offer the best of both worlds: sunset views followed by city lights.',
    tip: 'Consider the Cupid\'s Capsule experience for a private pod with champagne. Standard capsules are shared with up to 25 people.',
  },
  'borough-market-food-tour': {
    vibe: 'Stroll through London\'s oldest food market sampling artisan treats together.',
    bestTime: 'Saturday mornings when the market is at its liveliest and most colourful.',
    tip: 'Share the tastings so you can try twice as many things. The truffle cheese at Neal\'s Yard Dairy is a highlight for couples.',
  },
  'kensington-palace-tickets': {
    vibe: 'Elegant palace surrounded by the beautiful Kensington Gardens.',
    bestTime: 'Spring when the gardens are in bloom and the Sunken Garden is at its best.',
    tip: 'After your visit, walk through the gardens to the Orangery for afternoon tea. The Diana Memorial Fountain is nearby for a peaceful stroll.',
  },
  'jack-the-ripper-tour': {
    vibe: 'Atmospheric evening walk through gaslit East End streets.',
    bestTime: 'After dark for the full atmospheric effect.',
    tip: 'This is a surprisingly popular date night option. Follow the tour with drinks at a historic Whitechapel pub.',
  },
  'london-ghost-tour': {
    vibe: 'Spine-tingling tales and hidden history in the oldest parts of London.',
    bestTime: 'After dark, naturally. Autumn and winter evenings add extra atmosphere.',
    tip: 'Perfect for couples who enjoy something different. The tour passes several excellent pubs if you want to continue the evening afterwards.',
  },
  'buckingham-palace-tickets': {
    vibe: 'Grand State Rooms and royal gardens that feel like stepping into a fairy tale.',
    bestTime: 'Summer only (July to September). Mornings are less crowded.',
    tip: 'The palace gardens are spectacular and a lovely spot to linger together. Combine with a walk through St James\'s Park to the Mall.',
  },
  'hampton-court-palace-tickets': {
    vibe: 'Tudor romance, stunning gardens, and the famous maze.',
    bestTime: 'Spring and summer when the gardens are at their peak.',
    tip: 'Get lost together in the famous hedge maze. The Privy Garden and Great Vine are wonderfully peaceful spots away from the crowds.',
  },
};

const faqs = [
  { question: 'What is the most romantic thing to do in London?', answer: 'A Thames dinner cruise is consistently rated the most romantic experience in London. You enjoy a candlelit meal with live entertainment while floating past illuminated landmarks like Tower Bridge, the Houses of Parliament, and the London Eye. For a daytime option, afternoon tea at a historic hotel or a sunset visit to The Shard both rank highly.' },
  { question: 'Is London good for couples?', answer: 'London is one of the best cities in the world for couples. It offers everything from world-class dining and West End shows to peaceful parks, river walks, and historic palaces. The mix of free activities (like walking along the South Bank) and special experiences (like a dinner cruise) means you can create a memorable trip at any budget.' },
  { question: 'What is the best area in London for couples?', answer: 'South Bank is a favourite for romantic walks, with views of the Thames, street performers, and easy access to the London Eye and Borough Market. Covent Garden is perfect for dining and theatre. Notting Hill and Kensington offer charming streets, boutique shopping, and proximity to beautiful parks and palaces.' },
  { question: 'How much should I budget for a romantic day in London?', answer: 'A romantic day can range from free (South Bank walk, park picnic, free museum visit) to around £200 per couple for a premium experience including a Thames dinner cruise or The Shard visit plus a nice meal. A mid-range day with an attraction, lunch, and a river cruise typically costs £80 to £120 per couple.' },
  { question: 'What are romantic free things to do in London?', answer: 'Walk along the South Bank from Westminster Bridge to Tower Bridge at sunset. Explore the beautiful Kensington Gardens and Hyde Park. Visit the free galleries at the Tate Modern or National Gallery. Browse the flower stalls at Columbia Road on Sundays. Watch the sunset from Primrose Hill or Hampstead Heath.' },
  { question: 'Is the London Eye romantic?', answer: 'The London Eye is a popular spot for proposals and date nights, especially during twilight when you see the sunset and city lights. Standard capsules are shared with other visitors, so for a truly private experience, look into the Cupid\'s Capsule upgrade with champagne for two.' },
];

export const metadata: Metadata = {
  title: 'Romantic Things to Do in London 2026 | Best Experiences for Couples',
  description: `Discover the ${romanticTours.length} most romantic things to do in London in 2026. Thames dinner cruises, sunset at The Shard, food tours, and more. Tips and booking links for couples.`,
  alternates: { canonical: `${SITE_URL}/romantic` },
  openGraph: {
    title: 'Romantic Things to Do in London 2026 | Couples Guide',
    description: `${romanticTours.length} romantic London experiences with tips for couples and easy booking.`,
    url: `${SITE_URL}/romantic`,
  },
};

export default function RomanticPage() {
  const schemaData = [
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Romantic London', url: `${SITE_URL}/romantic` },
    ]),
    itemListSchema(romanticTours),
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
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Romantic London' }]} />

        <AffiliateDisclosure />

        {/* Hero */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-rose-600 text-white text-sm font-bold px-3 py-1 rounded-full">COUPLES PICKS</span>
            <span className="text-sm text-rose-700 font-medium">Updated March 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Romantic Things to Do in London 2026
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            London is one of the most romantic cities in the world, and not just because of its iconic skyline. From
            candlelit dinner cruises on the Thames to sunset views from The Shard, we have picked the {romanticTours.length} best
            experiences for couples visiting in 2026. Each listing includes atmosphere notes, timing tips, and direct booking links.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-rose-700">{romanticTours.length}</p>
              <p className="text-xs text-gray-600">Romantic Picks</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-rose-700">
                &pound;{Math.min(...romanticTours.map(t => t.price))}
              </p>
              <p className="text-xs text-gray-600">Cheapest</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-rose-700">
                {(romanticTours.reduce((s, t) => s + t.rating, 0) / romanticTours.length).toFixed(1)}
              </p>
              <p className="text-xs text-gray-600">Avg Rating</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-rose-700">
                {(romanticTours.reduce((s, t) => s + t.reviewCount, 0) / 1000).toFixed(0)}k
              </p>
              <p className="text-xs text-gray-600">Reviews</p>
            </div>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-10">
          <p className="text-sm font-semibold text-gray-900 mb-2">Quick Navigation</p>
          <div className="flex flex-wrap gap-2">
            {romanticTours.map(t => (
              <a key={t.slug} href={`#${t.slug}`} className="text-sm text-blue-900 hover:underline bg-white px-3 py-1 rounded-full border border-gray-200">
                {t.shortTitle}
              </a>
            ))}
          </div>
        </div>

        {/* Tour Cards */}
        <div className="space-y-10">
          {romanticTours.map((tour, index) => {
            const notes = romanticNotes[tour.slug];
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
                          <span className="bg-rose-600 text-white text-sm font-bold px-3 py-1 rounded-full">
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

                      {/* Romantic Info Grid */}
                      {notes && (
                        <div className="grid sm:grid-cols-3 gap-3 mb-4">
                          <div className="bg-rose-50 rounded-lg p-3">
                            <p className="text-xs font-semibold text-rose-800 uppercase mb-1">Vibe</p>
                            <p className="text-sm text-rose-700">{notes.vibe}</p>
                          </div>
                          <div className="bg-amber-50 rounded-lg p-3">
                            <p className="text-xs font-semibold text-amber-800 uppercase mb-1">Best Time</p>
                            <p className="text-sm text-amber-700">{notes.bestTime}</p>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3">
                            <p className="text-xs font-semibold text-purple-800 uppercase mb-1">Couples Tip</p>
                            <p className="text-sm text-purple-700">{notes.tip}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tour.bestFor.map(b => (
                          <span key={b} className="inline-block bg-rose-50 text-rose-700 text-xs font-medium px-2.5 py-1 rounded-full">
                            {b}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <TrackedGYGLink
                          href={tour.affiliateUrl}
                          tourName={tour.shortTitle}
                          section="romantic-page"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
                        >
                          Book Now from &pound;{tour.price}
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </TrackedGYGLink>
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

        {/* Romantic Planning Tips */}
        <section className="mt-12 bg-rose-50 border border-rose-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Planning a Romantic Trip to London</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Time for Couples</h3>
              <p className="text-sm">
                Late spring (May to June) offers the longest days, warm weather, and blooming parks. Early autumn
                (September) brings golden light and smaller crowds. Winter has its own charm with Christmas lights,
                cosy pubs, and ice skating at Somerset House. Avoid the peak summer crowds of July and August if
                you want a more intimate experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Romantic Neighbourhoods</h3>
              <p className="text-sm">
                South Bank is perfect for riverside walks at any time of day. Notting Hill has pastel-coloured houses
                and independent bookshops. Hampstead offers village charm with Heath walks and panoramic views.
                Covent Garden combines great restaurants with West End theatres for a classic dinner-and-a-show evening.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Romantic Activities</h3>
              <p className="text-sm">
                Walk across Tower Bridge at sunset. Explore the Pergola and Hill Garden in Hampstead Heath,
                one of London&apos;s best-kept secrets. Browse the flower market at Columbia Road on Sunday mornings.
                Watch the sunset from Primrose Hill with a view of the entire London skyline. Stroll through
                Kensington Gardens to the Italian Gardens, a hidden gem near Lancaster Gate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Dining Tips for Couples</h3>
              <p className="text-sm">
                Book restaurants in advance, especially for Friday and Saturday evenings. The South Bank has
                excellent riverside dining. For a special occasion, consider Skylon, Orrery, or Clos Maggiore
                (often called London&apos;s most romantic restaurant). For casual charm, try the covered terraces
                at Neal&apos;s Yard in Covent Garden or the rooftop bars in Shoreditch.
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
            <Link href="/family" className="text-blue-900 hover:underline font-medium">Family Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/first-time" className="text-blue-900 hover:underline font-medium">First Time Visitors</Link>
            <span className="text-gray-300">|</span>
            <Link href="/tours" className="text-blue-900 hover:underline font-medium">All Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/guides" className="text-blue-900 hover:underline font-medium">Travel Guides</Link>
            <span className="text-gray-300">|</span>
            <Link href="/trending" className="text-blue-900 hover:underline font-medium">Trending</Link>
          </div>
        </section>
      </div>
    </>
  );
}
