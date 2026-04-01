import { Metadata } from 'next';
import Link from 'next/link';
import TrackedGYGLink from '@/components/TrackedGYGLink';
import { SITE_URL } from '@/lib/constants';

const PAGE_TITLE = '7 Best Evening Tours in London 2026: After-Dark Experiences Worth Booking';
const PAGE_DESCRIPTION =
  'Discover the best evening tours in London for 2026. Covers ghost walks, Jack the Ripper tours, Thames dinner cruises, West End shows, sunset views from The Shard, and historic pub crawls with prices and booking links.';
const PAGE_URL = `${SITE_URL}/guides/best-evening-tours-london-2026`;

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

interface EveningTour {
  name: string;
  slug: string;
  search: string;
  price: string;
  duration: string;
  bestFor: string;
  description: string[];
}

const eveningTours: EveningTour[] = [
  {
    name: 'Jack the Ripper Walking Tour',
    slug: 'jack-the-ripper',
    search: 'Jack the Ripper tour London',
    price: '£12 to £20',
    duration: '1.5 to 2 hours',
    bestFor: 'True crime and history enthusiasts',
    description: [
      'The Jack the Ripper walking tour is the most popular evening experience in London, holding a 4.6 rating from nearly 9,000 reviews. Expert Ripperologist guides lead you through the atmospheric streets of Whitechapel, retracing the steps of the infamous 1888 murders. The tour combines forensic analysis, historical evidence, and vivid storytelling to bring this cold case to life.',
      'Tours depart nightly after dark, typically starting around 7pm from Aldgate East station. The walk covers roughly 1 mile through narrow lanes and gaslit courtyards that feel genuinely eerie after sunset. At just £12 to £20 per person, this is one of the best-value evening activities in London. Finish the night with a pint at one of the traditional Whitechapel pubs nearby.',
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
      'If you prefer supernatural chills to true crime, the London Ghost Tour delivers 2 hours of haunted history through the oldest parts of the city. Rated 4.6 with over 4,500 reviews, this walk takes you past plague pits, execution sites, and haunted pubs while a theatrical guide shares stories that span 2,000 years of London\'s darkest moments.',
      'The route covers parts of the City of London and Southwark where the history is especially grim. You will learn about the spectral figures seen near old churchyards and the cursed sites where terrible events left their mark. Ghost tours are popular with couples looking for something memorable and groups of friends who enjoy a good scare. The tour leaves plenty of time for dinner afterwards.',
    ],
  },
  {
    name: 'Thames Dinner Cruise',
    slug: 'thames-dinner-cruise',
    search: 'Thames dinner cruise London',
    price: '£60 to £120',
    duration: '2.5 to 3 hours',
    bestFor: 'Romantic evenings and celebrations',
    description: [
      'A Thames dinner cruise is one of the most romantic evening experiences London has to offer. As you glide past the Houses of Parliament, Tower Bridge, the London Eye, and the Shard, you will enjoy a freshly prepared multi-course meal with panoramic views through floor-to-ceiling windows. Most cruises include live music or a DJ, creating the feel of a floating restaurant.',
      'Prices range from £60 to £120 per person depending on the menu and drinks package. Premium options include Champagne receptions, window seats, and five-course tasting menus. For a more budget-friendly option, consider a sunset cruise with drinks and canapes, which typically runs 1.5 hours for around £35 to £50 per person. Book at least 2 weeks in advance for weekend dates, as the best cruises sell out quickly.',
    ],
  },
  {
    name: 'Sunset Views from The Shard',
    slug: 'the-shard-sunset',
    search: 'The Shard sunset tickets London',
    price: '£30 to £50',
    duration: '1.5 hours',
    bestFor: 'Photographers and special occasions',
    description: [
      'The View from The Shard at sunset is one of London\'s most breathtaking experiences. Standing 244 metres above the city on the open-air viewing platform (the highest in Western Europe), you watch the sun dip below the horizon as London\'s lights flicker on across the skyline. On a clear evening, you can see up to 40 miles in every direction.',
      'Sunset tickets cost £30 to £50 per person and should be booked well in advance, as specific time slots sell out during peak season. There is a bar on the upper level where you can buy Champagne, cocktails, and wine to enjoy while taking in the view. The Shard is located at London Bridge, making it easy to combine with a Borough Market dinner before or a Southwark walk afterwards.',
    ],
  },
  {
    name: 'West End Theatre Experience',
    slug: 'west-end-theatre',
    search: 'London West End show tickets',
    price: '£20 to £150',
    duration: '2 to 3 hours',
    bestFor: 'Theatre lovers and culture seekers',
    description: [
      'No evening in London is complete without considering a West End show. The Theatre District around Shaftesbury Avenue, Covent Garden, and the Strand is home to over 40 theatres staging everything from long-running musicals like Les Miserables and Wicked to new plays, comedies, and immersive theatre experiences.',
      'Evening performances typically start at 7:30pm and run 2 to 3 hours. Ticket prices range from £20 for restricted-view seats in the upper circle to £150 or more for premium stalls. The TKTS booth in Leicester Square sells same-day discounted tickets for selected shows, often at 30 to 50 percent off. Combine your show with pre-theatre dining at one of the many restaurants around Covent Garden and Soho.',
    ],
  },
  {
    name: 'Historic Pub Crawl Tour',
    slug: 'historic-pub-crawl',
    search: 'London historic pub tour',
    price: '£25 to £50',
    duration: '3 hours',
    bestFor: 'Social travellers and history fans',
    description: [
      'A guided pub crawl through London\'s historic drinking establishments is one of the most entertaining evening tours available. Over 3 hours, expert guides lead you through 4 to 5 pubs that have been pouring pints for centuries, sharing stories of the writers, politicians, criminals, and royals who drank there before you.',
      'In the City of London, Ye Olde Cheshire Cheese on Fleet Street has served customers since 1667 and was a favourite of Charles Dickens. The Lamb and Flag in Covent Garden dates to 1623. The George Inn in Southwark is London\'s last surviving galleried coaching inn. Most tours focus on a theme: literary pubs, haunted pubs, or the drinking holes of a particular neighbourhood. Prices range from £25 to £50 per person, with some drinks included.',
    ],
  },
  {
    name: 'London Gin Distillery Tour',
    slug: 'gin-distillery',
    search: 'London gin distillery tour tasting',
    price: '£30 to £45',
    duration: '1.5 to 2 hours',
    bestFor: 'Cocktail enthusiasts and couples',
    description: [
      'London is the birthplace of the gin and tonic, and the city is home to a thriving craft gin scene. Distillery tours take you behind the scenes at small-batch producers where you will learn about the botanicals, distillation process, and history of London gin. Most tours include guided tastings of 3 to 5 different gins paired with premium tonics.',
      'Several distilleries also offer gin-making workshops where you can create your own bespoke bottle to take home. Tours typically run in the early evening and make an excellent pre-dinner activity. With prices starting from £30 per person, a distillery tour is a sophisticated alternative to a standard bar visit and a memorable way to start your evening in London.',
    ],
  },
];

const faqs = [
  {
    question: 'What is the best evening tour in London?',
    answer:
      'The Jack the Ripper walking tour is the most popular and highest-rated evening experience, with a 4.6 rating from nearly 9,000 reviews. It offers outstanding value at just £12 to £20 per person for a 2-hour guided walk through Whitechapel.',
  },
  {
    question: 'Are evening tours in London safe?',
    answer:
      'Yes, London is generally safe in the evening, and guided tours stick to well-lit, well-populated areas. Walking tour guides are experienced and keep groups together. Thames cruises and The Shard are indoor or semi-indoor experiences with full security.',
  },
  {
    question: 'How much do evening tours in London cost?',
    answer:
      'Evening walking tours like the Jack the Ripper and ghost tours cost £12 to £20 per person. Thames dinner cruises range from £60 to £120. Sunset views from The Shard cost £30 to £50. Historic pub crawls cost £25 to £50 with some drinks included.',
  },
  {
    question: 'Do I need to book evening tours in advance?',
    answer:
      'Yes, booking in advance is strongly recommended. The Jack the Ripper tour, Thames dinner cruises, and The Shard sunset tickets all sell out during peak season. Book at least a few days ahead, or 2 weeks ahead for weekend dinner cruises.',
  },
  {
    question: 'Are evening tours suitable for children?',
    answer:
      'Thames dinner cruises and The Shard sunset experience are suitable for all ages. Ghost tours and the Jack the Ripper walk are best for ages 12 and up due to dark themes. Historic pub crawls are for adults over 18.',
  },
  {
    question: 'What should I wear on an evening walking tour?',
    answer:
      'Wear comfortable walking shoes and dress in layers. From October to March, bring a warm coat, hat, and gloves. A compact umbrella is always useful in London. Smart casual is appropriate for dinner cruises and The Shard.',
  },
];

function gygUrl(search: string): string {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(search)}&partner_id=LPT26IL&utm_medium=online_publisher&cmp=best_london_tours`;
}

function slugToId(slug: string): string {
  return slug;
}

export default function BestEveningToursLondon2026() {
  const articleSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    datePublished: '2026-04-01',
    dateModified: '2026-04-01',
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
            From ghost walks and Jack the Ripper tours to Thames dinner cruises and rooftop sunsets, these are the evening experiences you should not miss in London.
          </p>
          <time className="mt-4 inline-block text-sm text-gray-400" dateTime="2026-04-01">
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
            <li className="text-gray-900 font-medium">Best Evening Tours London 2026</li>
          </ol>
        </nav>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p>
            London transforms after dark. The landmarks glow against the skyline, the crowds thin out, and the city takes on a completely different atmosphere. Evening tours let you experience a side of London that daytime visitors never see, from spine-tingling ghost walks through medieval alleyways to candlelit dinner cruises on the Thames.
          </p>
          <p>
            This guide covers 7 of the best evening tours in London for 2026, with honest recommendations on pricing, what to expect, and which experiences suit different types of traveller. Whether you want a £12 walking tour or a £120 dinner cruise, there is an after-dark experience here for every budget.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-xl bg-gray-50 p-6 border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
            In This Guide
          </h2>
          <ol className="space-y-2 list-decimal list-inside">
            {eveningTours.map((tour) => (
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
          <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Tips for Evening Tours</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Book at least a few days in advance. Popular tours like the Jack the Ripper walk and Thames dinner cruises sell out during peak season.</li>
            <li>Dress in warm layers from October to March. Most walking tours spend 2 hours outdoors after dark.</li>
            <li>Check last Tube times before you head out. The Tube runs until approximately midnight on most lines, or all night on Fridays and Saturdays on selected routes.</li>
            <li>Evening tours make excellent use of your time. Explore museums and parks during the day, then switch to after-dark experiences in the evening.</li>
            <li>Many evening walking tours start near major Tube stations, so getting there and back is straightforward.</li>
          </ul>
        </div>

        {/* Tour Sections */}
        {eveningTours.map((tour, index) => (
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
              section={`evening-guide-2026-${tour.slug}`}
              className="inline-block rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-800 transition-colors duration-200"
            >
              Reserve Your Spot, Free Cancellation
            </TrackedGYGLink>
          </section>
        ))}

        {/* Comparison Table */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Comparison
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
                {eveningTours.map((tour) => (
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
