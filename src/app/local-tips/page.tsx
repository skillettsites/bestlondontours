import { Metadata } from 'next';
import Link from 'next/link';
import { getTourBySlug } from '@/data/tours';
import TourCard from '@/components/ui/TourCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/ui/FAQ';
import { SITE_URL, SITE_NAME, CONTENT_DATE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'London Local Tips 2026 | Insider Advice from Londoners',
  description: 'Insider tips for visiting London like a local. Skip the tourist traps, eat at the best spots, save money on transport, and discover neighbourhoods most visitors miss.',
  alternates: { canonical: `${SITE_URL}/local-tips` },
  openGraph: {
    title: 'London Local Tips 2026 | Insider Advice from Londoners',
    description: 'Insider tips for visiting London like a local. Skip the tourist traps, eat well, save money, and discover hidden neighbourhoods.',
    url: `${SITE_URL}/local-tips`,
    type: 'article',
  },
};

const faqs = [
  {
    question: 'Is London safe for tourists?',
    answer: 'London is one of the safest major cities in the world. Standard precautions apply: keep an eye on your belongings in crowded areas like Oxford Street and the Tube, avoid unlit side streets late at night, and use licensed black cabs or ride-hailing apps rather than unmarked cars. The police are approachable and helpful if you need anything.',
  },
  {
    question: 'How much should I tip in London?',
    answer: 'Tipping is not mandatory in the UK, but it is appreciated. In restaurants, 10 to 12.5% is standard if service is not already included on the bill (check before adding more). In pubs, you do not need to tip. For taxi drivers, rounding up to the nearest pound is fine. Tour guides appreciate a few pounds if you enjoyed the experience.',
  },
  {
    question: 'What is the best way to get from Heathrow to central London?',
    answer: 'The Elizabeth Line (Crossrail) is the best value, taking about 30 to 40 minutes to Paddington for around £12.80. The Heathrow Express is faster (15 minutes) but much pricier at £25 or more. The Piccadilly Line is cheapest but slowest at roughly an hour. Avoid black cabs from Heathrow unless you are splitting the fare; they cost £60 to £100.',
  },
  {
    question: 'Do I need cash in London?',
    answer: 'Almost nowhere in London requires cash anymore. Contactless card payments are accepted virtually everywhere, including street markets, food stalls, the Tube, and buses. In fact, buses do not accept cash at all. Carrying a small amount of cash (£20 to £30) is useful as a backup, but you can easily go a whole trip without it.',
  },
  {
    question: 'What should I wear in London?',
    answer: 'Layers are the answer, regardless of the season. London weather changes quickly, so a light waterproof jacket is essential year-round. Comfortable walking shoes are a must; you will cover far more ground on foot than you expect. There is no strict dress code for most attractions, though some upscale restaurants expect smart casual.',
  },
  {
    question: 'Is the London Pass worth buying?',
    answer: 'It depends on your pace. If you plan to visit 4 or more paid attractions in 2 to 3 days, the London Pass can save you money. But many of London\'s best experiences are free (museums, parks, markets), so do the maths before committing. Buying individual tickets online in advance often works out cheaper for most visitors.',
  },
];

const relatedTourSlugs = [
  'borough-market-food-tour',
  'thames-sightseeing-cruise',
  'hop-on-hop-off-bus',
  'the-shard-tickets',
];

export default function LocalTipsPage() {
  const relatedTours = relatedTourSlugs
    .map((slug) => getTourBySlug(slug))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'London Local Tips: Insider Advice from Londoners',
    description: 'Insider tips for visiting London like a local. Skip the tourist traps, eat at the best spots, save money on transport, and discover neighbourhoods most visitors miss.',
    url: `${SITE_URL}/local-tips`,
    datePublished: '2026-03-19',
    dateModified: CONTENT_DATE,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Local Tips' }]} />

        <article>
          {/* Hero */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">London Local Tips</h1>
            <p className="mt-4 text-lg text-gray-600">
              The kind of advice you would get from a friend who has lived in London for years. No fluff, no recycled guidebook tips. Just practical, honest insider knowledge to help you get more out of your visit and avoid the mistakes most tourists make.
            </p>
          </header>

          {/* Table of Contents */}
          <nav className="mb-10 rounded-xl bg-gray-50 p-6 border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">In This Guide</h2>
            <ul className="space-y-2">
              <li><a href="#skip-the-tourist-traps" className="text-sm text-blue-900 hover:underline">Skip the Tourist Traps</a></li>
              <li><a href="#eat-like-a-local" className="text-sm text-blue-900 hover:underline">Eat Like a Local</a></li>
              <li><a href="#getting-around" className="text-sm text-blue-900 hover:underline">Getting Around</a></li>
              <li><a href="#free-london" className="text-sm text-blue-900 hover:underline">Free London</a></li>
              <li><a href="#best-neighbourhoods" className="text-sm text-blue-900 hover:underline">Best Neighbourhoods</a></li>
              <li><a href="#money-saving-tips" className="text-sm text-blue-900 hover:underline">Money-Saving Tips</a></li>
              <li><a href="#safety-and-etiquette" className="text-sm text-blue-900 hover:underline">Safety & Etiquette</a></li>
            </ul>
          </nav>

          {/* Content Sections */}
          <div className="guide-content">
            {/* Skip the Tourist Traps */}
            <section id="skip-the-tourist-traps">
              <h2>Skip the Tourist Traps</h2>
              <p>
                Leicester Square is the single biggest tourist trap in London. The restaurants surrounding the square charge double what you would pay two streets away, and the food is nothing special. If you want a pre-theatre meal, walk five minutes to Soho or Chinatown instead. The same goes for the shops on Oxford Street; locals avoid it entirely and shop in smaller neighbourhoods like Marylebone, Angel, or Broadway Market.
              </p>
              <p>
                Timing matters enormously. The <Link href="/tours/tower-of-london-tickets" className="text-blue-900 font-medium hover:underline">Tower of London</Link> is significantly quieter before 10am and after 3pm. The same pattern applies to most major attractions. If you can visit on a weekday rather than a weekend, you will have a far better experience. Wednesday and Thursday are the quietest days at most London museums and galleries.
              </p>
              <p>
                Currency exchange bureaus in tourist areas offer terrible rates. Use your bank card for contactless payments wherever possible, or withdraw cash from a bank ATM if you need it. The "0% commission" signs outside exchange shops are misleading; they make their money on the exchange rate itself.
              </p>
            </section>

            {/* Eat Like a Local */}
            <section id="eat-like-a-local">
              <h2>Eat Like a Local</h2>
              <p>
                <Link href="/tours/borough-market-food-tour" className="text-blue-900 font-medium hover:underline">Borough Market</Link> is the obvious starting point, and for good reason. It has been trading since the 13th century, and the quality of the produce is outstanding. Go on a weekday if you can; Saturdays are heaving. The Brindisa chorizo rolls, Kappacasein cheese toasties, and Padella fresh pasta are all worth queuing for. For a deeper experience, the guided food tour with tastings is genuinely excellent.
              </p>
              <p>
                Beyond Borough Market, London's food scene is incredibly diverse. Brick Lane in the East End is the place for curry, though quality varies; Tayyabs in Whitechapel is the local favourite. Chinatown in Soho has brilliant dim sum at places like Dumplings Legend and Joy King Lau. For the best fish and chips, skip the tourist spots and head to Poppies in Spitalfields or The Golden Hind in Marylebone.
              </p>
              <p>
                Street food markets are where London really shines. Maltby Street Market (near Tower Bridge, weekends only) is a fraction of the size of Borough Market but just as good. Camden Market has global street food. Mercato Metropolitano in Elephant & Castle is a huge indoor food hall with everything from Neapolitan pizza to Korean fried chicken. Most market stalls charge £8 to £12 for a generous portion.
              </p>
            </section>

            {/* Getting Around */}
            <section id="getting-around">
              <h2>Getting Around</h2>
              <p>
                Forget the Oyster card. If you have a contactless bank card (Visa, Mastercard, or Amex), just tap it on the yellow readers at Tube stations and bus stops. It works exactly the same as an Oyster card, with the same daily and weekly fare caps, and you do not need to worry about topping up or getting a refund when you leave. Apple Pay and Google Pay work too.
              </p>
              <p>
                The Tube is fast but often unnecessary in central London. Many stations that look far apart on the map are actually a 10 to 15 minute walk on the surface. Covent Garden to Leicester Square, for example, is a two-minute walk but tourists queue for ages to take the Tube one stop. Bank to Monument is literally the same station complex. Download Citymapper (free app) for the best route suggestions combining walking, Tube, and bus.
              </p>
              <p>
                Travel off-peak whenever possible. Before 6:30am and after 9:30am on weekdays, fares drop significantly. The <Link href="/tours/thames-sightseeing-cruise" className="text-blue-900 font-medium hover:underline">Thames river cruise</Link> is a brilliant alternative to the Tube for getting between Westminster, the South Bank, Tower Bridge, and Greenwich, with proper views along the way. The Thames Clippers commuter service accepts contactless payment and runs every 15 to 20 minutes.
              </p>
            </section>

            {/* Free London */}
            <section id="free-london">
              <h2>Free London</h2>
              <p>
                London has more free attractions than almost any other city in the world. The British Museum, National Gallery, Tate Modern, Natural History Museum, Science Museum, V&A, Imperial War Museum, and Museum of London are all completely free. You could spend an entire week visiting world-class museums without spending a penny on entry. Check out our <Link href="/guides/free-things-to-do-london" className="text-blue-900 font-medium hover:underline">free things to do guide</Link> for the full list.
              </p>
              <p>
                London's parks are spectacular and cost nothing. Hyde Park, Regent's Park (with free entry to the beautiful rose garden), and Hampstead Heath (with panoramic views from Parliament Hill) are all worth a visit. St James's Park is the prettiest of the central parks, with views of Buckingham Palace across the lake. In spring, the cherry blossoms in Greenwich Park and Kew Gardens (Kew charges entry, though) are stunning.
              </p>
              <p>
                Free street entertainment is everywhere. Covent Garden has licensed buskers and performers daily. The South Bank between Waterloo Bridge and the National Theatre always has something happening. On Sundays, Columbia Road Flower Market in Shoreditch is a wonderful free experience, with flower sellers calling out deals and the street lined with independent shops and cafes.
              </p>
            </section>

            {/* Best Neighbourhoods */}
            <section id="best-neighbourhoods">
              <h2>Best Neighbourhoods to Explore</h2>
              <p>
                <strong>Shoreditch and the East End</strong> is where London feels most creative and contemporary. The street art around Brick Lane is world-class (some by Banksy), and the area is packed with independent coffee shops, vintage stores, and some of the city's best restaurants. Sunday is the best day, when the Brick Lane market, Columbia Road Flower Market, and Spitalfields Market are all running at the same time.
              </p>
              <p>
                <strong>Camden</strong> is loud, chaotic, and brilliantly fun. Camden Market is a huge maze of stalls selling everything from leather jackets to Japanese street food. The canal towpath walk from Camden Lock to Regent's Park is lovely. For live music, the Jazz Cafe, Roundhouse, and Electric Ballroom are all here. Camden is best on weekdays when the crowds are thinner and you can actually browse the market at your own pace.
              </p>
              <p>
                <strong>South Bank</strong> stretches from Westminster Bridge to Tower Bridge and is one of the best walks in London. Start at the <Link href="/tours/london-eye-tickets" className="text-blue-900 font-medium hover:underline">London Eye</Link>, walk past the Southbank Centre and National Theatre, through the Tate Modern, along Bankside past the Globe Theatre, and finish at Borough Market. On a sunny day, this is London at its absolute best. <strong>Greenwich</strong> is worth the trip for the Royal Observatory, the Cutty Sark, and Greenwich Market. Take the <Link href="/tours/thames-sightseeing-cruise" className="text-blue-900 font-medium hover:underline">Thames cruise</Link> from Westminster to make it a proper day out. <strong>Notting Hill</strong> is charming on any day, but Saturdays are when Portobello Road Market runs its full length with antiques, vintage clothing, and street food.
              </p>
            </section>

            {/* Money-Saving Tips */}
            <section id="money-saving-tips">
              <h2>Money-Saving Tips</h2>
              <p>
                The London Pass can save you money if you are a fast-paced sightseer planning to visit 4 or more paid attractions in a short period. But for most visitors, buying individual tickets online in advance is cheaper. Many attractions offer 10 to 15% off for online bookings, and you often get a timed entry slot that lets you skip the walk-up queue. The <Link href="/tours/the-shard-tickets" className="text-blue-900 font-medium hover:underline">Shard</Link> tickets, for example, are significantly cheaper when booked ahead.
              </p>
              <p>
                Free walking tours operate across London on a tip-based model. You join the tour for free and pay what you think it was worth at the end. Companies like Strawberry Tours and Free Tour London run daily walks covering the main sights, street art tours, and pub crawls. It is a great way to get oriented on your first day. For guided experiences with a specific focus, the <Link href="/tours/borough-market-food-tour" className="text-blue-900 font-medium hover:underline">Borough Market food tour</Link> is well worth the price.
              </p>
              <p>
                Happy hours and pre-theatre menus are your friends. Many restaurants in the West End offer two or three course set menus for £15 to £25 before 6:30pm. Pubs often have cheaper pints during weekday afternoons. For supermarket meal deals (sandwich, snack, and drink for around £3.50 to £5), Tesco, Sainsbury's, and Boots are your best options. Nobody will judge you; half of London eats this way at lunch.
              </p>
            </section>

            {/* Safety & Etiquette */}
            <section id="safety-and-etiquette">
              <h2>Safety & Etiquette</h2>
              <p>
                The golden rule of the London Underground: stand on the right side of the escalator. The left side is for walking. This is not a suggestion; it is practically law. Blocking the left side will earn you tutting, sighing, and possibly a polite but firm request to move. Also, let passengers off the train before you try to board, wait behind the yellow line on platforms, and keep your backpack off your back during rush hour (hold it by your feet).
              </p>
              <p>
                Tipping culture in London is relaxed compared to the US. In restaurants, check your bill for a service charge (usually 12.5%) before adding a tip. If service is included, you do not need to add anything extra. In pubs, tipping is not expected at all; just say "and one for yourself" if you want to be generous. Black cab drivers appreciate rounding up, but there is no pressure. Tour guides and hotel staff appreciate a small tip for good service.
              </p>
              <p>
                London is safe, but be sensible about pickpockets in crowded tourist spots. The Tube during rush hour, Oxford Street, and busy markets are where most thefts happen. Keep your phone in a front pocket, and do not leave bags unattended. If someone bumps into you or creates a commotion, check your pockets immediately. At night, stick to well-lit streets and use licensed taxis or ride-hailing apps. The Night Tube runs on Fridays and Saturdays on select lines, making late-night travel easy and safe.
              </p>
            </section>
          </div>

          {/* Related Tours */}
          {relatedTours.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Tours</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedTours.map((tour) => (
                  <TourCard key={tour.slug} tour={tour} />
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <FAQ faqs={faqs} />

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Continue Exploring</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/tours" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                All Tours
              </Link>
              <Link href="/guides" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                Travel Guides
              </Link>
              <Link href="/trending" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                Trending
              </Link>
              <Link href="/guides/first-time-visiting-london" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                First Time in London
              </Link>
              <Link href="/guides/free-things-to-do-london" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                Free Things to Do
              </Link>
              <Link href="/guides/london-food-guide" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                Food Guide
              </Link>
            </div>
          </div>

          {/* Explore More */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/tours" className="text-blue-900 hover:underline font-medium">All Tours</Link>
              <span className="text-gray-300">|</span>
              <Link href="/top-10" className="text-blue-900 hover:underline font-medium">Top 10 Tours</Link>
              <span className="text-gray-300">|</span>
              <Link href="/budget" className="text-blue-900 hover:underline font-medium">Budget Tours</Link>
              <span className="text-gray-300">|</span>
              <Link href="/family" className="text-blue-900 hover:underline font-medium">Family Tours</Link>
              <span className="text-gray-300">|</span>
              <Link href="/first-time" className="text-blue-900 hover:underline font-medium">First Time Visitors</Link>
              <span className="text-gray-300">|</span>
              <Link href="/compare" className="text-blue-900 hover:underline font-medium">Compare Tours</Link>
              <span className="text-gray-300">|</span>
              <Link href="/guides" className="text-blue-900 hover:underline font-medium">Travel Guides</Link>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link href="/guides" className="inline-flex items-center text-sm font-semibold text-blue-900 hover:underline">
              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all guides
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
