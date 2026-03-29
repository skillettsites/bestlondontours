import { Metadata } from 'next';
import Link from 'next/link';
import TrackedGYGLink from '@/components/TrackedGYGLink';
import { SITE_URL } from '@/lib/constants';

const PAGE_TITLE = '10 Best London Tours for First-Time Visitors in 2026';
const PAGE_DESCRIPTION =
  'Planning your first trip to London? Discover the 10 must-do London tours for 2026, from hop-on hop-off buses and Thames cruises to Harry Potter studios and Stonehenge day trips.';
const PAGE_URL = `${SITE_URL}/guides/best-tours-first-time-visitors-2026`;

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

interface Tour {
  name: string;
  slug: string;
  search: string;
  price: string;
  duration: string;
  bestFor: string;
  description: string[];
}

const tours: Tour[] = [
  {
    name: 'Hop-on Hop-off Bus Tour',
    slug: 'hop-on-hop-off',
    search: 'London hop on hop off bus',
    price: '£30\u2013£45',
    duration: '24\u201348 hours',
    bestFor: 'Orientation and sightseeing',
    description: [
      'A hop-on hop-off bus tour is the ideal way to get your bearings when you first arrive in London. These open-top double-decker buses follow routes covering every major landmark, from Buckingham Palace to St Paul\u2019s Cathedral. Most tickets are valid for 24 or 48 hours, letting you explore at your own pace.',
      'Audio commentary is available in multiple languages, providing historical context as you pass each site. Many operators include a free Thames river cruise with your bus ticket, which makes this excellent value for money.',
    ],
  },
  {
    name: 'Tower of London & Crown Jewels',
    slug: 'tower-of-london',
    search: 'Tower of London tickets',
    price: '£30\u2013£40',
    duration: '2\u20133 hours',
    bestFor: 'History enthusiasts',
    description: [
      'The Tower of London has served as a royal palace, fortress, and prison for nearly 1,000 years. A visit here includes the chance to see the Crown Jewels, one of the world\u2019s most valuable collections of royal regalia. The Imperial State Crown alone contains over 2,800 diamonds.',
      'Yeoman Warder tours (led by the famous Beefeaters) run throughout the day and bring centuries of history to life with tales of intrigue, executions, and royal drama. Booking a timed entry ticket in advance is strongly recommended, as queues can be very long during peak season.',
    ],
  },
  {
    name: 'Thames River Cruise',
    slug: 'thames-cruise',
    search: 'Thames river cruise London',
    price: '£15\u2013£30',
    duration: '1\u20132 hours',
    bestFor: 'Relaxing sightseeing',
    description: [
      'Seeing London from the water offers a completely different perspective on the city. A Thames river cruise glides past the Houses of Parliament, the London Eye, Tower Bridge, and the Globe Theatre, giving you postcard-worthy views without the crowds.',
      'Afternoon tea cruises and evening dinner cruises are also available for a more premium experience. For budget-friendly options, the Thames Clippers river bus service covers many of the same sights and accepts Oyster cards.',
    ],
  },
  {
    name: 'Westminster & Big Ben Walking Tour',
    slug: 'westminster-walking',
    search: 'Westminster walking tour London',
    price: '£15\u2013£25',
    duration: '2\u20132.5 hours',
    bestFor: 'Architecture and politics',
    description: [
      'Westminster is the political heart of London and home to some of the city\u2019s most iconic landmarks. A guided walking tour typically covers the Houses of Parliament, Westminster Abbey, Big Ben, Downing Street, and the Cenotaph. Knowledgeable guides explain the significance of each site.',
      'Walking tours are one of the best-value activities in London. Small group sizes mean you can ask questions freely, and your guide will share insider stories that you simply cannot get from a guidebook.',
    ],
  },
  {
    name: 'Harry Potter Studio Tour',
    slug: 'harry-potter',
    search: 'Harry Potter studio tour London',
    price: '£50\u2013£55',
    duration: '3\u20134 hours',
    bestFor: 'Families and film fans',
    description: [
      'Warner Bros. Studio Tour London is located in Leavesden, just outside the city. This is where all eight Harry Potter films were produced, and the studio tour lets you walk through original sets including the Great Hall, Diagon Alley, and Dumbledore\u2019s office.',
      'You can sample Butterbeer, see the Hogwarts Express, and discover how the special effects were created. Tickets must be booked in advance as the tour sells out weeks ahead, particularly during school holidays. Transport packages from central London are widely available.',
    ],
  },
  {
    name: 'Jack the Ripper Evening Walk',
    slug: 'jack-the-ripper',
    search: 'Jack the Ripper tour London',
    price: '£12\u2013£20',
    duration: '1.5\u20132 hours',
    bestFor: 'True crime and history buffs',
    description: [
      'The atmospheric streets of Whitechapel come alive after dark on a Jack the Ripper walking tour. Expert guides lead you through the narrow lanes and courtyards where the infamous 1888 murders took place, combining historical evidence with vivid storytelling.',
      'These tours are consistently among the highest-rated experiences in London. The evening setting adds genuine atmosphere, and most guides use photos and maps to illustrate the investigation. This is a memorable way to spend an evening, especially if you enjoy darker chapters of history.',
    ],
  },
  {
    name: 'Borough Market Food Tour',
    slug: 'borough-market',
    search: 'Borough Market food tour London',
    price: '£55\u2013£75',
    duration: '2.5\u20133 hours',
    bestFor: 'Foodies and culture lovers',
    description: [
      'Borough Market has been a fixture of London\u2019s food scene for over 1,000 years. A guided food tour takes you behind the scenes at this celebrated market, with tastings at up to 10 different vendors. Expect everything from artisan cheeses and fresh oysters to handmade chocolates and craft ciders.',
      'Guides share the market\u2019s history and introduce you to stallholders personally. Most tours include enough food to replace a full meal. Vegetarian and dietary-friendly options are usually available on request.',
    ],
  },
  {
    name: 'British Museum Guided Tour',
    slug: 'british-museum',
    search: 'British Museum guided tour',
    price: '£20\u2013£35',
    duration: '2\u20132.5 hours',
    bestFor: 'Culture and world history',
    description: [
      'The British Museum houses over eight million objects spanning two million years of human history. Without a guide, the sheer scale can be overwhelming. A guided tour focuses on the highlights, including the Rosetta Stone, the Elgin Marbles, and the Egyptian mummies.',
      'Entry to the museum itself is free, so the tour fee covers only the guide\u2019s expertise. Small-group tours allow for a more personal experience, and guides tailor their commentary to your interests. This is one of the smartest ways to make the most of a limited visit.',
    ],
  },
  {
    name: 'Stonehenge & Bath Day Trip',
    slug: 'stonehenge-bath',
    search: 'Stonehenge Bath day trip from London',
    price: '£60\u2013£95',
    duration: '10\u201312 hours',
    bestFor: 'Day trippers and history lovers',
    description: [
      'This full-day excursion from London combines two of England\u2019s most visited attractions. Stonehenge, the 5,000-year-old stone circle on Salisbury Plain, remains one of the great mysteries of the ancient world. The visitor centre includes an excellent exhibition explaining the latest archaeological findings.',
      'The tour continues to the Georgian city of Bath, famous for its Roman Baths and stunning honey-coloured architecture. Most tours include free time to explore Bath\u2019s shops, cafes, and the Royal Crescent. Coach transport with pickup from central London is included in the price.',
    ],
  },
  {
    name: 'London Eye Skip-the-Line',
    slug: 'london-eye',
    search: 'London Eye skip the line tickets',
    price: '£30\u2013£50',
    duration: '30\u201345 minutes',
    bestFor: 'Views and photo opportunities',
    description: [
      'Standing 135 metres tall on the South Bank, the London Eye offers panoramic views stretching up to 25 miles on a clear day. A single rotation takes about 30 minutes, giving you plenty of time to spot landmarks including Buckingham Palace, The Shard, and Wembley Stadium.',
      'Skip-the-line tickets are worth the small premium, especially during summer and weekends when standard queues can exceed an hour. Evening rides at sunset are particularly spectacular. Combination tickets that include a Thames cruise or entry to nearby attractions offer additional savings.',
    ],
  },
];

const faqs = [
  {
    question: 'What are the best London tours for first-time visitors?',
    answer:
      'The most popular tours for newcomers include a hop-on hop-off bus tour for orientation, a Thames river cruise for scenic views, and the Tower of London for history. These three experiences give you a well-rounded introduction to the city.',
  },
  {
    question: 'How far in advance should I book London tours?',
    answer:
      'For popular attractions like the Harry Potter Studio Tour and the Tower of London, booking at least 2 to 4 weeks ahead is recommended, especially during summer and school holidays. Walking tours and river cruises can often be booked a few days in advance.',
  },
  {
    question: 'Are London tours worth the money?',
    answer:
      'Guided tours offer significant value through expert commentary, skip-the-line access, and curated experiences you would struggle to replicate independently. Free-entry museums like the British Museum benefit especially from a guide who can highlight the best exhibits.',
  },
  {
    question: 'What is the cheapest way to see London\'s top attractions?',
    answer:
      'Walking tours and the hop-on hop-off bus offer the best value. Many museums, including the British Museum and National Gallery, have free entry. A Thames Clippers river bus ride on an Oyster card provides a budget-friendly alternative to a formal cruise.',
  },
  {
    question: 'Can I do all 10 tours in one trip to London?',
    answer:
      'If you have five to seven days, you can comfortably fit in all 10 tours. Plan one or two per day, mixing shorter experiences (like the London Eye or a walking tour) with longer ones (like the Stonehenge day trip or the Harry Potter Studio Tour).',
  },
];

function gygUrl(search: string): string {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(search)}&partner_id=LPT26IL&utm_medium=online_publisher&cmp=best_london_tours`;
}

function slugToId(slug: string): string {
  return slug;
}

export default function BestToursFirstTimeVisitors2026() {
  const articleSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    datePublished: '2026-03-28',
    dateModified: '2026-03-28',
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
            Your complete guide to the must-do tours, attractions, and day trips for a first visit to London.
          </p>
          <time className="mt-4 inline-block text-sm text-gray-400" dateTime="2026-03-28">
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
            <li className="text-gray-900 font-medium">Best Tours for First-Time Visitors</li>
          </ol>
        </nav>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p>
            London offers hundreds of tours, and choosing the right ones can feel overwhelming when you are planning your first visit. This guide narrows it down to the 10 experiences that deliver the best combination of value, variety, and unforgettable memories. Whether you have three days or a full week, these tours will help you see the very best of the city.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-xl bg-gray-50 p-6 border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
            In This Guide
          </h2>
          <ol className="space-y-2 list-decimal list-inside">
            {tours.map((tour) => (
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

        {/* Tour Sections */}
        {tours.map((tour, index) => (
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
              section={`guide-2026-${tour.slug}`}
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
