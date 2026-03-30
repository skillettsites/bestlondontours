import { Metadata } from 'next';
import Link from 'next/link';
import TrackedGYGLink from '@/components/TrackedGYGLink';
import { SITE_URL } from '@/lib/constants';

const PAGE_TITLE = '9 Best Walking Tours in London 2026: From Free to Premium';
const PAGE_DESCRIPTION =
  'Discover the best walking tours in London for 2026. Covers free walking tours, Harry Potter walks, Jack the Ripper tours, ghost tours, food tours, street art, and private options with booking links.';
const PAGE_URL = `${SITE_URL}/guides/best-walking-tours-london-2026`;

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

interface WalkingTour {
  name: string;
  slug: string;
  search: string;
  price: string;
  duration: string;
  bestFor: string;
  description: string[];
}

const walkingTours: WalkingTour[] = [
  {
    name: 'Free Westminster Walking Tour',
    slug: 'free-westminster',
    search: 'free walking tour London Westminster',
    price: 'Free (tip-based)',
    duration: '2 to 3 hours',
    bestFor: 'Budget travellers and first-time visitors',
    description: [
      'Free walking tours are one of the smartest ways to see London on a budget. These tip-based tours depart daily from Trafalgar Square or Covent Garden and cover Westminster, the South Bank, and the City of London. Guides work for tips alone, which means they are motivated to deliver an outstanding experience.',
      'A typical Westminster walk passes Big Ben, the Houses of Parliament, Westminster Abbey, Buckingham Palace, St James\'s Park, and Trafalgar Square. Groups are usually 15 to 25 people, and the pace is relaxed enough for most fitness levels. Book online in advance because popular time slots fill up quickly during spring and summer.',
    ],
  },
  {
    name: 'Harry Potter Walking Tour',
    slug: 'harry-potter-walk',
    search: 'Harry Potter walking tour London',
    price: '£15 to £25',
    duration: '2 to 2.5 hours',
    bestFor: 'Families and film fans',
    description: [
      'London is packed with wizarding connections, and a Harry Potter walking tour brings them all to life. You will visit Platform 9 3/4 at King\'s Cross, Leadenhall Market (the real Diagon Alley), and the Charing Cross Road entrance to the Leaky Cauldron. Guides are passionate Potter experts who share behind-the-scenes filming stories and test your knowledge with trivia along the way.',
      'These tours cover roughly 1.5 miles at a gentle pace, making them suitable for children aged 7 and up. Rain or shine, the magic is always present. For the full studio experience, combine your walk with a separate visit to the Warner Bros. Studio Tour at Leavesden.',
    ],
  },
  {
    name: 'Jack the Ripper Evening Walk',
    slug: 'jack-the-ripper-walk',
    search: 'Jack the Ripper tour London',
    price: '£12 to £20',
    duration: '1.5 to 2 hours',
    bestFor: 'True crime and history enthusiasts',
    description: [
      'The Jack the Ripper walking tour is one of London\'s highest-rated evening experiences, with a 4.6 rating from nearly 9,000 reviews. Expert Ripperologist guides lead you through the dark streets of Whitechapel, retracing the steps of the infamous 1888 murders with a blend of historical evidence, forensic analysis, and vivid storytelling.',
      'Tours depart after dark for maximum atmosphere, typically starting around 7pm. The narrow lanes and courtyards of the East End feel genuinely atmospheric at night. Starting from just £12 per person, this is one of the best-value evening activities in London. Finish the night at a nearby Whitechapel pub for the full experience.',
    ],
  },
  {
    name: 'London Ghost Tour',
    slug: 'ghost-tour',
    search: 'London ghost walking tour',
    price: '£15 to £20',
    duration: '2 hours',
    bestFor: 'Couples and groups of friends',
    description: [
      'London\'s ghost tour takes you through some of the oldest and most haunted parts of the city. Over 2 hours, you will visit plague pits, execution sites, and haunted pubs while hearing chilling true stories that span centuries. With a 4.6 rating and over 4,500 reviews, it is one of the top-rated evening walks available.',
      'The route covers areas around the City of London and Southwark, where the history is particularly dark and atmospheric after sunset. Ghost tours are popular with couples looking for something different and groups of friends who enjoy being spooked. Prices start from £15 per person, and the tour leaves plenty of time for dinner afterwards.',
    ],
  },
  {
    name: 'Borough Market Food Tour',
    slug: 'borough-market-food',
    search: 'Borough Market food tour London',
    price: '£55 to £75',
    duration: '2.5 to 3 hours',
    bestFor: 'Foodies and culture lovers',
    description: [
      'The Borough Market Food Tour is rated 4.8 and combines walking, eating, and storytelling across one of London\'s oldest and most celebrated markets. Over 3 hours, an expert guide leads you through the market with 6 authentic tastings including artisan cheeses, charcuterie, fresh bread, and handmade chocolates.',
      'Borough Market has been a fixture of London\'s food scene for over 1,000 years, and a guided tour reveals hidden gems you would walk straight past on your own. Most tours include enough food to replace a full meal. Vegetarian options are available on request. This is a premium walking experience that is well worth the price.',
    ],
  },
  {
    name: 'Street Art and East End Tour',
    slug: 'street-art-east-end',
    search: 'Shoreditch street art walking tour London',
    price: '£15 to £25',
    duration: '2 hours',
    bestFor: 'Art lovers and photographers',
    description: [
      'Shoreditch and the East End are home to some of the world\'s best street art, including works by Banksy and other internationally recognised artists. This walking tour takes you through the ever-changing outdoor gallery of Brick Lane, Spitalfields, and surrounding streets, with guides explaining the stories and techniques behind the murals.',
      'The East End offers a completely different perspective on London, far from the usual tourist trail. These tours pair perfectly with a visit to nearby Brick Lane for curry or a Sunday market browse. Photography is encouraged, and guides will point out the best angles for capturing the artwork.',
    ],
  },
  {
    name: 'Churchill and WW2 Walking Tour',
    slug: 'churchill-ww2',
    search: 'Churchill War Rooms walking tour London',
    price: '£35 to £45',
    duration: '3 hours',
    bestFor: 'History enthusiasts',
    description: [
      'This premium walking tour combines a guided walk through Westminster\'s hidden WW2 sites with a visit to the underground Cabinet War Rooms where Churchill directed the war effort. Rated 4.8 with nearly 3,000 reviews, it is one of the highest-rated tours in London.',
      'The 3-hour experience covers hidden wartime landmarks above ground before descending into the preserved bunker below. You will learn about the Blitz, Churchill\'s leadership, and the secret operations that shaped the course of the war. At around £40 per person, it is a premium experience that history lovers consistently rate as worth every penny.',
    ],
  },
  {
    name: 'Westminster and Royal London Walk',
    slug: 'westminster-royal',
    search: 'Westminster Royal London walking tour',
    price: '£15 to £25',
    duration: '2 to 2.5 hours',
    bestFor: 'Architecture and royal history fans',
    description: [
      'The classic Westminster walk covers the greatest concentration of London landmarks in a single route. Expect to pass Big Ben, the Houses of Parliament, Westminster Abbey, Buckingham Palace, St James\'s Park, and Trafalgar Square, all with expert historical commentary and insider stories about the Royal Family.',
      'Small group sizes mean you can ask questions freely, and guides share details you simply cannot get from a guidebook. For a deeper experience, combine your walk with entry to Westminster Abbey or Buckingham Palace, both of which are within easy walking distance of the tour route.',
    ],
  },
  {
    name: 'Private Walking Tour with a Blue Badge Guide',
    slug: 'private-walking',
    search: 'private walking tour London Blue Badge guide',
    price: '£150 to £300 per group',
    duration: '3 hours',
    bestFor: 'Special occasions and small groups',
    description: [
      'Private walking tours offer a completely tailored experience with a dedicated guide. You choose the route, pace, and focus, whether that is architecture, royal history, literary London, photography, or something entirely personal. Blue Badge guides are the gold standard in London, having completed a rigorous two-year training programme.',
      'Private tours are ideal for anniversaries, birthdays, family reunions, or anyone who prefers not to walk with a large group. Expect to pay £150 to £300 for a 3-hour walk. The best private guides can be customized around your specific interests and fitness level. Book well in advance for spring and summer visits, as the top guides fill their calendars early.',
    ],
  },
];

const faqs = [
  {
    question: 'Are free walking tours in London really free?',
    answer:
      'Yes, you can join without paying upfront. Guides work for tips, so you pay what you feel the tour was worth at the end. Most people tip between £5 and £15 per person depending on the quality and length of the tour.',
  },
  {
    question: 'What is the best walking tour in London for first-time visitors?',
    answer:
      'A free Westminster or South Bank walking tour is the best starting point. It covers the major landmarks and helps you get oriented. After that, consider a themed tour like the Jack the Ripper walk or Borough Market food tour.',
  },
  {
    question: 'How long do London walking tours last?',
    answer:
      'Most walking tours last between 1.5 and 3 hours. Food tours and WW2 tours tend to be on the longer side at 3 hours, while themed evening walks like the Jack the Ripper or ghost tour run about 1.5 to 2 hours.',
  },
  {
    question: 'Do I need to book walking tours in advance?',
    answer:
      'Yes, booking in advance is strongly recommended, especially during spring and summer. Popular tours like the Jack the Ripper walk and Borough Market food tour sell out days ahead. Free tours also have limited group sizes.',
  },
  {
    question: 'Are walking tours suitable for children?',
    answer:
      'Many walking tours welcome children, particularly daytime tours like the Harry Potter walk and Westminster tours. Evening tours such as the Jack the Ripper and ghost tours may not be suitable for young children due to dark themes and late start times.',
  },
  {
    question: 'What happens if it rains during a walking tour?',
    answer:
      'Almost all London walking tours run rain or shine. Guides are experienced with wet weather and will adjust the route to use covered areas where possible. Bring a compact umbrella or waterproof jacket to stay comfortable.',
  },
];

function gygUrl(search: string): string {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(search)}&partner_id=LPT26IL&utm_medium=online_publisher&cmp=best_london_tours`;
}

function slugToId(slug: string): string {
  return slug;
}

export default function BestWalkingToursLondon2026() {
  const articleSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    datePublished: '2026-03-30',
    dateModified: '2026-03-30',
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
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {PAGE_TITLE}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Your complete guide to the best walking tours in London, covering free walks, themed evening tours, food experiences, and private options.
          </p>
          <time className="mt-4 inline-block text-sm text-gray-400" dateTime="2026-03-30">
            Updated March 2026
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
            <li className="text-gray-900 font-medium">Best Walking Tours London 2026</li>
          </ol>
        </nav>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p>
            London is a city built for walking. Its greatest treasures are packed into compact neighbourhoods where history, architecture, and culture sit side by side. A walking tour lets you discover hidden alleys, hear stories you will never find in guidebooks, and get your bearings in a new city quickly.
          </p>
          <p>
            This guide covers 9 of the best walking tours in London for 2026, from free tip-based walks to premium private experiences. Whether you want to explore Westminster landmarks, hunt for Jack the Ripper clues after dark, or taste your way through Borough Market, there is a walking tour to match your interests and budget.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-xl bg-gray-50 p-6 border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
            In This Guide
          </h2>
          <ol className="space-y-2 list-decimal list-inside">
            {walkingTours.map((tour) => (
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
        </nav>

        {/* Practical Tips Box */}
        <div className="mb-12 rounded-xl bg-green-50 border border-green-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Tips Before You Book</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Wear comfortable, broken-in shoes with good support. You will cover 3 to 8 kilometres on most tours.</li>
            <li>Bring a waterproof jacket regardless of the forecast. London weather changes quickly.</li>
            <li>Arrive 10 to 15 minutes early at the meeting point.</li>
            <li>Tipping your guide is customary on paid tours (£5 to £10 per person). On free tours, tips are the guide&apos;s only income.</li>
            <li>Book in advance during spring and summer, as popular tours sell out days ahead.</li>
          </ul>
        </div>

        {/* Tour Sections */}
        {walkingTours.map((tour, index) => (
          <section
            key={tour.slug}
            id={slugToId(tour.slug)}
            className="mb-12 scroll-mt-20"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {index + 1}. {tour.name}
            </h2>
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
              section={`walking-guide-2026-${tour.slug}`}
              className="inline-block rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-800 transition-colors duration-200"
            >
              Book This Tour
            </TrackedGYGLink>
          </section>
        ))}

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
