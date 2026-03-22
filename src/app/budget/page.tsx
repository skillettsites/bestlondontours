import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { tours } from '@/data/tours';
import { SITE_URL, GYG_PARTNER_ID } from '@/lib/constants';
import { itemListSchema, breadcrumbSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import StarRating from '@/components/ui/StarRating';
import FAQ from '@/components/ui/FAQ';

const budgetTours = tours
  .filter(t => t.price < 30)
  .sort((a, b) => a.price - b.price);

const faqs = [
  { question: 'What is the cheapest London tour?', answer: `The Thames Sightseeing Cruise is currently the lowest priced tour at just £17 per person. The View from The Shard starts at £19, making it another excellent budget option.` },
  { question: 'Are cheap London tours worth it?', answer: 'Absolutely. Price does not determine quality. The Thames cruise has over 22,000 reviews with a 4.5 rating, and The Shard viewing experience is rated 4.6. These are genuinely world-class experiences at affordable prices.' },
  { question: 'Can you visit London on a budget?', answer: 'London has plenty of free attractions including the British Museum, National Gallery, Tate Modern, Hyde Park, and the Changing of the Guard. Combined with the affordable tours listed here, you can have an incredible London trip without overspending.' },
  { question: 'When is the cheapest time to book London tours?', answer: 'Prices are generally consistent year-round for the tours listed here, but booking in advance online typically saves money compared to buying tickets at the door. Visiting during weekdays and outside school holidays also helps avoid crowds.' },
];

const miniReviews: Record<string, string> = {
  'thames-sightseeing-cruise': 'The best value experience in London. For just £17, you sail past Tower Bridge, the Houses of Parliament, and the Tower of London with live commentary. The journey from Westminster to Greenwich takes an hour and the views are spectacular from both the indoor cabin and open-air deck. Arrive in Greenwich and explore the market, Cutty Sark, or Royal Observatory afterwards.',
  'the-shard-tickets': 'At £19, this is the most affordable way to see London from above. The views from floors 68 to 72 of Western Europe\'s tallest building stretch up to 40 miles on a clear day. The open-air sky deck on level 72 is genuinely thrilling. Visit at sunset for the most impressive experience, watching London transform from daylight to a glittering cityscape.',
  'hop-on-hop-off-bus': 'A full day of sightseeing for £27 is remarkable value. The 24-hour pass lets you ride open-top double-decker buses across London, hopping off wherever you like. Audio commentary in multiple languages covers every major landmark. It is particularly useful for first-time visitors who want to get their bearings and see everything.',
  'london-dungeon-tickets': 'An action-packed 90 minutes of immersive entertainment for £27. The London Dungeon combines live actors, special effects, and dark comedy to bring London\'s gruesome history to life. From Jack the Ripper to the Great Plague, each of the 19 shows delivers genuine thrills. Best suited for older children and adults who enjoy a good scare.',
  'madame-tussauds-tickets': 'Two to three hours of entertainment for £27 per person. Madame Tussauds remains one of London\'s most visited attractions, with over 250 incredibly lifelike wax figures. The Marvel and Star Wars zones are standout additions. Perfect for a rainy day or as a fun break between more serious sightseeing.',
  'st-pauls-cathedral-tickets': 'One of London\'s architectural masterpieces for £27. Climbing the 528 steps to the Golden Gallery rewards you with some of the finest panoramic views in the city. The Whispering Gallery acoustics are fascinating, and the crypt houses memorials to some of Britain\'s greatest heroes. Allow 2 hours to see everything.',
  'london-eye-tickets': 'A London icon that lives up to the hype. The 30-minute rotation gives you plenty of time to spot landmarks and take photos from 135 metres up. At £29, it is slightly more expensive than The Shard, but the glass capsule experience and South Bank location make it a different and equally worthwhile perspective on the city.',
};

export const metadata: Metadata = {
  title: 'Best Cheap London Tours Under £30 in 2026 | Budget-Friendly Attractions',
  description: `Discover ${budgetTours.length} brilliant London tours under £30. Thames cruises from £17, The Shard from £19, and more. Save money without missing the best experiences.`,
  alternates: { canonical: `${SITE_URL}/budget` },
  openGraph: {
    title: 'Best Cheap London Tours Under £30 in 2026',
    description: `${budgetTours.length} London tours under £30 per person. Thames cruises, The Shard, hop-on hop-off buses, and more.`,
    url: `${SITE_URL}/budget`,
  },
};

export default function BudgetPage() {
  const schemaData = [
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Budget Tours', url: `${SITE_URL}/budget` },
    ]),
    itemListSchema(budgetTours),
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
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Budget Tours' }]} />

        <AffiliateDisclosure />

        {/* Hero */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">BUDGET PICKS</span>
            <span className="text-sm text-green-700 font-medium">Updated March 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Best Cheap London Tours Under &pound;30 in 2026
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            You do not need to spend a fortune to experience the best of London. These {budgetTours.length} tours
            all cost less than &pound;30 per person and have thousands of verified reviews from happy visitors. From
            Thames river cruises to panoramic views from The Shard, here are our top picks for budget-conscious
            travellers.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">All under &pound;30 per person</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Free cancellation on most</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Instant confirmation</span>
            </div>
          </div>
        </div>

        {/* Tour Cards */}
        <div className="space-y-8">
          {budgetTours.map((tour, index) => (
            <article key={tour.slug} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:flex">
                <div className="sm:w-72 shrink-0">
                  <div className="aspect-[16/10] sm:aspect-auto sm:h-full relative">
                    <Image
                      src={tour.imageUrl}
                      alt={tour.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 288px"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        &pound;{tour.price}
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
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
                      {tour.duration}
                    </span>
                  </div>

                  <StarRating rating={tour.rating} reviewCount={tour.reviewCount} />

                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {miniReviews[tour.slug] || tour.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tour.bestFor.map(b => (
                      <span key={b} className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {b}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
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
                      Read Full Review
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Budget Tips */}
        <section className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Budget Tips for Visiting London</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-1">Book Online in Advance</h3>
              <p className="text-sm text-gray-600">Online prices are almost always cheaper than buying at the door. Booking ahead also guarantees entry on busy days.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-1">Visit on Weekdays</h3>
              <p className="text-sm text-gray-600">Weekday visits are less crowded and some attractions offer lower prices. Avoid school holidays if possible.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-1">Use Free Attractions Too</h3>
              <p className="text-sm text-gray-600">The British Museum, National Gallery, Tate Modern, and Natural History Museum are all free. Mix these with your paid tours.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-1">Get an Oyster Card</h3>
              <p className="text-sm text-gray-600">Use an Oyster card or contactless payment for transport. Daily caps mean you never overpay. The Tube is cheaper than taxis.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-1">Eat at Markets</h3>
              <p className="text-sm text-gray-600">Borough Market, Camden Market, and street food stalls offer excellent meals for &pound;5-10. Much better value than sit-down restaurants.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-1">Walk Between Attractions</h3>
              <p className="text-sm text-gray-600">Central London is very walkable. The South Bank walk from Westminster to Tower Bridge passes dozens of landmarks and costs nothing.</p>
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
            <Link href="/family" className="text-blue-900 hover:underline font-medium">Family Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/top-10" className="text-blue-900 hover:underline font-medium">Top 10 Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/first-time" className="text-blue-900 hover:underline font-medium">First Time Visitors</Link>
            <span className="text-gray-300">|</span>
            <Link href="/tours" className="text-blue-900 hover:underline font-medium">All Tours</Link>
          </div>
        </section>
      </div>
    </>
  );
}
