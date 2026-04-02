import { Metadata } from 'next';
import Link from 'next/link';
import TrackedGYGLink from '@/components/TrackedGYGLink';
import { SITE_URL } from '@/lib/constants';

const PAGE_TITLE = 'Best London Tours for Summer 2026: Our Top Picks';
const PAGE_DESCRIPTION =
  'Discover the 12 best London tours for summer 2026. Covers outdoor adventures, river cruises, walking tours, food experiences, and evening activities with prices and booking tips.';
const PAGE_URL = `${SITE_URL}/guides/best-london-tours-summer-2026`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
  },
};

interface SummerTour {
  name: string;
  slug: string;
  search: string;
  price: string;
  duration: string;
  bestFor: string;
  category: string;
  description: string[];
}

const summerTours: SummerTour[] = [
  {
    name: 'London Bike Tour',
    slug: 'london-bike-tour',
    search: 'London bike tour',
    price: 'From £30',
    duration: '3.5 hours',
    bestFor: 'Active travellers and couples',
    category: 'outdoor',
    description: [
      'The London Bike Tour is one of the best ways to cover ground in the summer sunshine. Over 3.5 hours, a friendly guide leads you through Hyde Park, Kensington Gardens, along the South Bank, and past major landmarks including Buckingham Palace, Big Ben, and Tower Bridge. Rated 4.8, this tour consistently earns rave reviews for its relaxed pace and knowledgeable guides.',
      'Summer is the ideal season for cycling in London, with dry roads, warm weather, and long daylight hours. The route sticks to cycle paths and quiet roads, making it suitable for riders of all abilities. Bikes and helmets are included. At just £30 per person, this is outstanding value for a half-day experience.',
    ],
  },
  {
    name: 'Thames Kayak Tour',
    slug: 'london-thames-kayak-tour',
    search: 'Thames kayak tour London',
    price: 'From £45',
    duration: '2.5 hours',
    bestFor: 'Adventure seekers',
    category: 'outdoor',
    description: [
      'For a truly unique summer experience, the Thames Kayak Tour lets you paddle past the Houses of Parliament, the London Eye, and Tower Bridge from water level. This is London from a perspective that very few visitors ever see. The 2.5-hour guided session includes all equipment, a safety briefing, and an experienced instructor who shares stories about the landmarks along the way.',
      'No previous kayaking experience is required; the calm stretch of the Thames used for the tour is suitable for beginners. Summer is the only practical season for this activity, as water temperatures and daylight hours make it comfortable and safe. Prices start from £45 per person. Book at least a week ahead, as group sizes are small and slots fill up fast.',
    ],
  },
  {
    name: 'London Royal Parks Tour',
    slug: 'london-royal-parks-tour',
    search: 'London Royal Parks walking tour',
    price: 'From £25',
    duration: '2.5 hours',
    bestFor: 'Nature lovers and families',
    category: 'outdoor',
    description: [
      'London\'s royal parks are at their absolute best in summer, with roses in full bloom, pelicans strutting by the lake in St James\'s Park, and locals picnicking on every stretch of green. The Royal Parks Tour guides you through three connected parks: St James\'s Park, Green Park, and Hyde Park, with commentary on royal history, wildlife, and hidden gardens.',
      'This gentle walking tour covers about 3 kilometres at a relaxed pace, making it suitable for all fitness levels and ages. Starting near Buckingham Palace, the route passes the Diana Memorial Fountain, the Serpentine, and the Italian Gardens. At £25 per person, it is an affordable morning activity that pairs perfectly with a Buckingham Palace visit afterwards.',
    ],
  },
  {
    name: 'Thames Sightseeing Cruise',
    slug: 'thames-sightseeing-cruise',
    search: 'Thames sightseeing cruise London',
    price: 'From £17',
    duration: '1 hour',
    bestFor: 'Everyone, especially first-time visitors',
    category: 'river',
    description: [
      'The Thames Sightseeing Cruise from Westminster to Greenwich is the classic London river experience and an absolute summer essential. From the open-air top deck, you get uninterrupted views of the Houses of Parliament, the London Eye, St Paul\'s Cathedral, Tower Bridge, and the Canary Wharf skyline. Live commentary from an entertaining guide points out landmarks and shares stories you will not hear anywhere else.',
      'At just £17 per person, this is one of the best-value tours in London. The breeze off the river keeps you cool on hot days, and the 1-hour journey to Greenwich gives you time to relax without committing a full afternoon. Once at Greenwich, you can explore the Cutty Sark, the Royal Observatory, and Greenwich Market before taking the boat back.',
    ],
  },
  {
    name: 'Thames Dinner Cruise',
    slug: 'thames-dinner-cruise',
    search: 'Thames dinner cruise London',
    price: 'From £70',
    duration: '2.5 to 3 hours',
    bestFor: 'Couples and special occasions',
    category: 'river',
    description: [
      'On a summer evening, there is nothing quite like dining on the Thames as the sun sets over London. The dinner cruise departs from Westminster Pier around 7:30pm and glides past illuminated landmarks while you enjoy a three-course meal with live music. In June and July, sunset falls around 9pm, meaning you get golden hour views from the water.',
      'Prices start from £70 per person and include a welcome drink, a seasonal British menu, and entertainment. Dietary requirements can be accommodated with advance notice. This is one of the most popular summer evening experiences in London, so book at least 2 weeks in advance for weekend dates. Smart casual dress is recommended.',
    ],
  },
  {
    name: 'Borough Market Food Tour',
    slug: 'borough-market-food-tour',
    search: 'Borough Market food tour London',
    price: 'From £75',
    duration: '3 hours',
    bestFor: 'Food lovers and couples',
    category: 'walking',
    description: [
      'Borough Market is London\'s oldest and most famous food market, and a guided food tour is the best way to experience it. Over 3 hours, an expert guide leads you through the bustling stalls, stopping for 6 curated tastings that include artisan cheeses, charcuterie, freshly baked sourdough, and seasonal British produce. Rated 4.8, this is the top-rated food experience in the city.',
      'Summer brings peak produce season to the market, with English strawberries, asparagus, and fresh herbs adding colour and flavour to every stall. The tour runs in the morning to catch the market at its liveliest, and you will leave too full for lunch. At £75 per person, it is a premium experience, but the quality and quantity of food included makes it excellent value.',
    ],
  },
  {
    name: 'London Gin Distillery Tour',
    slug: 'london-gin-distillery-tour',
    search: 'London gin distillery tour',
    price: 'From £35',
    duration: '1.5 to 2 hours',
    bestFor: 'Cocktail enthusiasts and couples',
    category: 'food',
    description: [
      'London is the birthplace of gin, and a craft distillery tour is a refreshing way to spend a summer afternoon. Go behind the scenes at a working distillery to learn about the botanicals, distillation process, and history behind London dry gin. Most tours include guided tastings of 3 to 5 different gins paired with premium tonics.',
      'Some distilleries also offer gin-making workshops where you create your own bespoke bottle to take home as a souvenir. At £35 per person, this is a sophisticated alternative to a standard bar visit and pairs perfectly with dinner in the local neighbourhood afterwards. Book in advance, as small group sizes mean popular slots fill up quickly.',
    ],
  },
  {
    name: 'London Afternoon Tea Experience',
    slug: 'london-afternoon-tea-experience',
    search: 'London afternoon tea experience',
    price: 'From £45',
    duration: '1.5 hours',
    bestFor: 'Special treats and celebrations',
    category: 'food',
    description: [
      'Afternoon tea is one of the most quintessentially British experiences you can have, and London does it better than anywhere else. The London Afternoon Tea Experience offers a curated selection of finger sandwiches, freshly baked scones with clotted cream and jam, and a tiered display of delicate pastries, all served with your choice of premium teas.',
      'In summer, many venues offer garden or terrace seating, adding an al fresco twist to this classic tradition. Prices start from £45 per person and typically include unlimited tea refills. This is a lovely way to spend a relaxed afternoon between morning sightseeing and an evening activity. Dress is smart casual, and booking a few days ahead is recommended.',
    ],
  },
  {
    name: 'Jack the Ripper Tour',
    slug: 'jack-the-ripper-tour',
    search: 'Jack the Ripper tour London',
    price: 'From £15',
    duration: '1.5 to 2 hours',
    bestFor: 'History and true crime enthusiasts',
    category: 'evening',
    description: [
      'Long summer evenings are perfect for London\'s most popular walking tour. The Jack the Ripper Tour takes you through the atmospheric streets of Whitechapel, retracing the steps of the 1888 murders with an expert Ripperologist guide. With a 4.6 rating from nearly 9,000 reviews, this is one of the highest-rated experiences in the city.',
      'In summer, tours start around 7pm when there is still light, then transition into the atmospheric dusk as you move deeper into the East End. At just £15 per person, this is incredible value. The tour finishes around 9pm, leaving you plenty of time for a late dinner in nearby Shoreditch or Brick Lane. Book at least a few days ahead during summer, as this tour sells out regularly.',
    ],
  },
  {
    name: 'London Ghost Tour',
    slug: 'london-ghost-tour',
    search: 'London ghost walking tour',
    price: 'From £15',
    duration: '2 hours',
    bestFor: 'Couples and groups of friends',
    category: 'evening',
    description: [
      'The London Ghost Tour delivers 2 hours of haunted history through the oldest parts of the city. Rated 4.6 with over 4,500 reviews, this walk takes you past plague pits, execution sites, and haunted pubs while a theatrical guide shares stories spanning 2,000 years of London\'s darkest moments.',
      'Summer evenings add a unique twist: you start the tour in daylight and gradually watch the city grow darker as the stories grow more chilling. The tour finishes around 9:30pm, leaving time for a late dinner. At £15 per person, it is one of the most affordable evening activities in London and a memorable way to spend a summer night.',
    ],
  },
  {
    name: 'Hop-On Hop-Off Bus Tour',
    slug: 'hop-on-hop-off-bus-tour',
    search: 'London hop on hop off bus tour',
    price: 'From £34',
    duration: 'Full day (24 to 48 hours)',
    bestFor: 'Families and first-time visitors',
    category: 'outdoor',
    description: [
      'The open-top Hop-On Hop-Off Bus is a summer favourite for families and first-time visitors. With unlimited rides over 24 or 48 hours, you can see every major landmark at your own pace while enjoying the sunshine from the upper deck. The route passes Big Ben, Tower Bridge, Buckingham Palace, St Paul\'s Cathedral, and dozens more highlights.',
      'Audio commentary is available in multiple languages, and most tickets include a bonus Thames river cruise. Children love sitting on the top deck and spotting landmarks, making this an easy, stress-free way to keep the whole family entertained. At £34 per person for a full day, the value is hard to beat. Start early in the morning to avoid the midday crowds on the most popular routes.',
    ],
  },
  {
    name: 'Windsor, Stonehenge, and Bath Day Tour',
    slug: 'windsor-stonehenge-bath-tour',
    search: 'Windsor Stonehenge Bath day tour from London',
    price: 'From £89',
    duration: 'Full day (11 to 12 hours)',
    bestFor: 'History lovers and day-trip seekers',
    category: 'outdoor',
    description: [
      'Summer is the best time for a day trip from London, and the Windsor, Stonehenge, and Bath tour is the most popular option. This full-day coach excursion takes you to three of England\'s most iconic destinations: Windsor Castle (the world\'s oldest occupied castle), the ancient stone circle at Stonehenge, and the elegant Georgian city of Bath with its Roman Baths.',
      'Long summer days mean you get the most daylight for sightseeing, and the English countryside looks stunning in green. The tour departs from central London early in the morning and returns by early evening. At £89 per person, it covers a huge amount of ground and includes comfortable coach travel with an experienced guide. Book at least a week in advance during summer, as this tour fills up quickly.',
    ],
  },
];

const categories = [
  { key: 'outdoor', label: 'Outdoor and Active Tours' },
  { key: 'river', label: 'River Cruises' },
  { key: 'walking', label: 'Walking and Food Tours' },
  { key: 'food', label: 'Food and Drink Experiences' },
  { key: 'evening', label: 'Evening Tours' },
];

const faqs = [
  {
    question: 'What are the best London tours for summer 2026?',
    answer:
      'The best summer tours include the Thames Sightseeing Cruise, London Bike Tour, Borough Market Food Tour, and the Jack the Ripper evening walking tour. River cruises and outdoor walking tours are especially enjoyable in warm weather with long daylight hours.',
  },
  {
    question: 'Is it worth visiting London in summer?',
    answer:
      'Absolutely. Summer offers the longest days (up to 16 hours of daylight), the warmest weather, and a packed calendar of festivals and events. The main trade-off is larger crowds, which you can manage by booking in advance and starting early.',
  },
  {
    question: 'How far in advance should I book summer tours in London?',
    answer:
      'Book at least 2 weeks in advance for most tours. For high-demand experiences like Thames dinner cruises and weekend river cruises, book 4 to 6 weeks ahead. Free cancellation policies mean there is no risk in booking early.',
  },
  {
    question: 'What should I wear on a London tour in summer?',
    answer:
      'Wear light, breathable layers with a waterproof jacket in your bag. Comfortable walking shoes are essential. Bring sunscreen and sunglasses for outdoor tours. London summer temperatures average 20 to 25 degrees Celsius with occasional hotter days.',
  },
  {
    question: 'Are London tours cheaper in summer?',
    answer:
      'Prices are generally consistent year-round, but demand is higher in summer so popular tours sell out faster. Booking in advance through our links ensures you get the best available price with free cancellation and instant confirmation.',
  },
  {
    question: 'What if it rains during my summer tour?',
    answer:
      'London rain showers are usually brief. Almost all tours run rain or shine. Carry a compact umbrella or waterproof jacket. Indoor options like museum tours and distillery experiences are great rainy-day alternatives.',
  },
];

function gygUrl(search: string): string {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(search)}&partner_id=LPT26IL&utm_medium=online_publisher&cmp=best_london_tours`;
}

function slugToId(slug: string): string {
  return slug;
}

export default function BestLondonToursSummer2026() {
  const articleSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: {
      '@type': 'Organization',
      name: 'Best London Tours',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Best London Tours',
      url: SITE_URL,
    },
  };

  const faqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-500 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {PAGE_TITLE}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            From river cruises and bike rides to food tours and evening walks, these are the 12 best tours to book in London this summer.
          </p>
          <time className="mt-4 inline-block text-sm text-white/70" dateTime="2026-04-02">
            Updated April 2026
          </time>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-green-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/guides" className="hover:text-green-700">Guides</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Best London Tours Summer 2026</li>
          </ol>
        </nav>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p>
            Summer is the best time to experience London. With up to 16 hours of daylight, warm weather, and the city at its most vibrant, every type of tour is better between June and August. Parks are in full bloom, the Thames sparkles, and the long evenings let you fit in two or three experiences in a single day.
          </p>
          <p>
            We have selected 12 of the best London tours for summer 2026, organised by type so you can mix outdoor adventures, river cruises, food tours, and evening experiences into the perfect itinerary. Every tour listed here offers free cancellation and instant confirmation, so you can book with confidence.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-xl bg-gray-50 p-6 border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
            In This Guide
          </h2>
          {categories.map((cat) => {
            const toursInCat = summerTours.filter((t) => t.category === cat.key);
            if (toursInCat.length === 0) return null;
            return (
              <div key={cat.key} className="mb-3">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{cat.label}</h3>
                <ol className="space-y-1 list-decimal list-inside">
                  {toursInCat.map((tour) => (
                    <li key={tour.slug}>
                      <a
                        href={`#${slugToId(tour.slug)}`}
                        className="text-sm text-blue-900 hover:underline"
                      >
                        {tour.name}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </nav>

        {/* Practical Tips Box */}
        <div className="mb-12 rounded-xl bg-amber-50 border border-amber-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Summer Tour Tips</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Book at least 2 weeks in advance. Summer is peak season and popular tours sell out fast.</li>
            <li>Start your day early. The best light and smallest crowds are before 10am.</li>
            <li>Wear sunscreen and bring water, especially for open-top buses, river cruises, and walking tours.</li>
            <li>Always carry a light waterproof layer. London rain can appear without warning, even in July.</li>
            <li>Take advantage of long evenings by adding an after-dark walking tour or dinner cruise to your day.</li>
            <li>All tours listed here include free cancellation, so there is no risk in booking early to secure your spot.</li>
          </ul>
        </div>

        {/* Tour Sections by Category */}
        {categories.map((cat) => {
          const toursInCat = summerTours.filter((t) => t.category === cat.key);
          if (toursInCat.length === 0) return null;
          return (
            <div key={cat.key} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
                {cat.label}
              </h2>
              {toursInCat.map((tour) => (
                <section
                  key={tour.slug}
                  id={slugToId(tour.slug)}
                  className="mb-12 scroll-mt-20"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {tour.name}
                  </h3>
                  <div className="prose prose-lg max-w-none mb-4">
                    {tour.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1">
                      <span className="font-medium text-gray-900">Price:</span> {tour.price}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1">
                      <span className="font-medium text-gray-900">Duration:</span> {tour.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1">
                      <span className="font-medium text-gray-900">Best for:</span> {tour.bestFor}
                    </span>
                  </div>
                  <TrackedGYGLink
                    href={gygUrl(tour.search)}
                    tourName={tour.name}
                    section={`summer-guide-2026-${tour.slug}`}
                    className="inline-block rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-800 transition-colors duration-200"
                  >
                    Check Availability, Free Cancellation
                  </TrackedGYGLink>
                </section>
              ))}
            </div>
          );
        })}

        {/* Comparison Table */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Comparison: All 12 Summer Tours
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Tour</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Price</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Duration</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {summerTours.map((tour) => (
                  <tr key={tour.slug}>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      <a href={`#${slugToId(tour.slug)}`} className="hover:text-blue-900 hover:underline">
                        {tour.name}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{tour.price}</td>
                    <td className="px-4 py-3 text-gray-600">{tour.duration}</td>
                    <td className="px-4 py-3 text-gray-600">{tour.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-white p-6"
              >
                <summary className="cursor-pointer text-lg font-semibold text-gray-900 group-open:mb-3">
                  {faq.question}
                </summary>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="mt-12 mb-12 rounded-xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="space-y-3">
            <Link href="/guides/best-walking-tours-london-2026" className="block text-blue-900 hover:underline font-medium">
              Best Walking Tours in London 2026
            </Link>
            <Link href="/guides/best-evening-tours-london-2026" className="block text-blue-900 hover:underline font-medium">
              Best Evening Tours in London 2026
            </Link>
            <Link href="/guides/best-tours-first-time-visitors-2026" className="block text-blue-900 hover:underline font-medium">
              Best London Tours for First-Time Visitors 2026
            </Link>
          </div>
        </section>

        {/* Back to guides */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/guides"
            className="inline-flex items-center text-sm font-semibold text-blue-900 hover:underline"
          >
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to all guides
          </Link>
        </div>
      </div>
    </>
  );
}
