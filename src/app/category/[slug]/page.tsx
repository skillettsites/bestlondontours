import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getToursByCategory } from '@/data/tours';
import { categorySchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';
import TourCard from '@/components/ui/TourCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import FAQ from '@/components/ui/FAQ';

const categorySeoContent: Record<string, { paragraphs: string[]; relatedGuides: { slug: string; title: string }[] }> = {
  landmarks: {
    paragraphs: [
      'London is home to some of the most recognisable landmarks in the world. Whether you are drawn to medieval fortresses, royal palaces, or towering modern skyscrapers, the city offers a wealth of historic and architectural treasures. Booking your tickets in advance is strongly recommended, as the most popular sites regularly sell out during peak season.',
      'Many of London\'s landmarks are clustered within walking distance of each other, making it easy to visit several in a single day. The Tower of London, St Paul\'s Cathedral, and Tower Bridge are all within a short walk in the City of London. Over in Westminster, you can see Westminster Abbey, Buckingham Palace, and Big Ben in one morning.',
      'For the best panoramic views, head to The Shard or the London Eye. Both offer a completely different perspective on the city and are especially impressive at sunset. If you prefer to stay at ground level, a Thames river cruise lets you admire the skyline from the water.',
    ],
    relatedGuides: [
      { slug: 'first-time-visiting-london', title: 'First Time Visiting London' },
      { slug: 'london-one-day-itinerary', title: 'London in One Day Itinerary' },
      { slug: 'free-things-to-do-london', title: 'Free Things to Do in London' },
    ],
  },
  'river-cruises': {
    paragraphs: [
      'A Thames river cruise is one of the most relaxing and scenic ways to experience London. The river has been the city\'s main transport artery for centuries, and many of London\'s greatest buildings were designed to be viewed from the water. You will see landmarks from a completely unique angle that walking tours simply cannot offer.',
      'The most popular route runs from Westminster Pier to Greenwich, passing the Houses of Parliament, the London Eye, Tower Bridge, and the Tower of London along the way. Live commentary brings the history of each landmark to life. For a more budget-friendly option, Thames Clippers run regular services that accept Oyster cards.',
    ],
    relatedGuides: [
      { slug: 'thames-cruise-guide', title: 'Complete Thames Cruise Guide' },
      { slug: 'london-one-day-itinerary', title: 'London in One Day Itinerary' },
    ],
  },
  'day-trips': {
    paragraphs: [
      'Some of England\'s most impressive attractions are just a short journey from central London. Guided day trips take the hassle out of planning transport and navigation, letting you focus on enjoying the experience. Expert guides provide fascinating commentary that you would miss travelling independently.',
      'The Windsor, Stonehenge, and Bath combination is the most popular day trip for good reason, covering three UNESCO-calibre destinations in a single day. The Harry Potter Studio Tour is another standout, offering a behind-the-scenes look at the film sets that fans of all ages love.',
      'For those who prefer travelling independently, Windsor and Oxford are both easily reached by direct train from London in under an hour. The Cotswolds and Stonehenge are harder to reach by public transport, making a guided coach tour the most practical option.',
    ],
    relatedGuides: [
      { slug: 'day-trips-from-london', title: 'Best Day Trips from London' },
      { slug: 'first-time-visiting-london', title: 'First Time Visiting London' },
    ],
  },
  'food-tours': {
    paragraphs: [
      'London\'s food scene has been transformed over the past two decades, and the city is now one of the great food capitals of the world. A guided food tour is the best way to discover the markets, producers, and hidden gems that most visitors walk straight past.',
      'Borough Market is the crown jewel of London\'s food scene. Trading since the 13th century, it brings together artisan producers from across the UK and beyond. A guided tour with tastings is the ideal introduction, giving you insider access to stalls and stories you would never find on your own.',
    ],
    relatedGuides: [
      { slug: 'london-food-guide', title: 'London Food Guide: Markets and Hidden Gems' },
      { slug: 'free-things-to-do-london', title: 'Free Things to Do in London' },
    ],
  },
  'family-fun': {
    paragraphs: [
      'London is one of the most family-friendly cities in the world, packed with attractions that children and adults enjoy equally. From the wizarding world of Harry Potter to the thrills of the London Dungeon, there truly is something for every age group and interest.',
      'For younger children, the London Eye and hop-on hop-off bus tours are gentle, engaging experiences with plenty of visual stimulation. Older children and teenagers tend to prefer the Harry Potter Studio Tour, Madame Tussauds, and The Shard. The London Dungeon is best suited to confident children aged 12 and over.',
      'Do not forget that many of London\'s best family attractions are completely free. The Natural History Museum, Science Museum, and V&A all offer world-class exhibitions at no cost. Hyde Park and Regent\'s Park have excellent playgrounds and open spaces for burning off energy between museum visits.',
    ],
    relatedGuides: [
      { slug: 'london-with-kids', title: 'London with Kids Guide' },
      { slug: 'free-things-to-do-london', title: 'Free Things to Do in London' },
      { slug: 'first-time-visiting-london', title: 'First Time Visiting London' },
    ],
  },
  'walking-tours': {
    paragraphs: [
      'Walking tours are the most intimate way to experience London. With an expert local guide leading the way, you will discover stories, shortcuts, and details that even long-time residents do not know. The pace is relaxed, the groups are small, and the experience is far richer than any guidebook can offer.',
      'London\'s walking tours cover an incredible range of themes. The Jack the Ripper tour is the most famous, taking you through the dark streets of Whitechapel where the infamous murders took place in 1888. Ghost tours explore haunted churchyards and plague pits. The Churchill War Rooms tour combines a Westminster walking tour with a visit to the underground bunker where WW2 was directed.',
      'Evening walking tours are particularly atmospheric. As daylight fades and the streetlights come on, London takes on a completely different character. The Jack the Ripper and ghost tours are designed specifically for the evening, using the darkness and shadows to heighten the experience.',
    ],
    relatedGuides: [
      { slug: 'best-walking-tours-london', title: 'Best Walking Tours in London' },
      { slug: 'london-history-guide', title: 'London for History Buffs' },
      { slug: 'free-things-to-do-london', title: 'Free Things to Do in London' },
    ],
  },
  'museums-exhibitions': {
    paragraphs: [
      'London has arguably the finest collection of museums in the world, and many of them are completely free to enter. The British Museum, Natural History Museum, V&A, National Gallery, and Tate Modern would each be worth a trip to London on their own. Together, they make London an unrivalled destination for culture and learning.',
      'While free entry is wonderful, the sheer scale of these museums can be overwhelming. A guided tour solves this problem by taking you directly to the highlights, sharing stories and context that transform a casual browse into a memorable experience. The Natural History Museum guided tour, for example, helps you navigate 80 million specimens to find the most extraordinary ones.',
      'Beyond the free nationals, London also has fascinating paid museums. The Churchill War Rooms are preserved exactly as they were in 1945, offering a powerful and immersive experience. The Imperial War Museum, Sir John Soane\'s Museum, and the Museum of London are all worth adding to your itinerary.',
    ],
    relatedGuides: [
      { slug: 'london-rainy-day-guide', title: 'London on a Rainy Day' },
      { slug: 'london-history-guide', title: 'London for History Buffs' },
      { slug: 'london-with-kids', title: 'London with Kids Guide' },
    ],
  },
  'evening-experiences': {
    paragraphs: [
      'London after dark is a completely different city. The landmarks light up, the Thames reflects the glittering skyline, and the atmosphere becomes more intimate and magical. Evening experiences let you see this transformation firsthand, whether from the deck of a dinner cruise or the cobblestones of a haunted street.',
      'A Thames dinner cruise is the signature London evening experience. Sailing past illuminated landmarks like Tower Bridge, the Houses of Parliament, and St Paul\'s Cathedral while enjoying a three-course meal and live entertainment is unforgettable. It is perfect for anniversaries, birthdays, or any special occasion.',
      'For something more adventurous, London\'s evening walking tours offer a completely different kind of experience. The Jack the Ripper tour through Whitechapel and the ghost tour through haunted streets and churchyards are both designed to take advantage of the evening atmosphere. They are affordable, fascinating, and unlike anything you will experience during the day.',
    ],
    relatedGuides: [
      { slug: 'romantic-things-london', title: 'Romantic Things to Do in London' },
      { slug: 'best-walking-tours-london', title: 'Best Walking Tours in London' },
      { slug: 'thames-cruise-guide', title: 'Complete Thames Cruise Guide' },
    ],
  },
};

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `${SITE_URL}/category/${category.slug}` },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${SITE_URL}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryTours = getToursByCategory(category.slug);

  return (
    <>
      {[
        categorySchema(category),
        breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: category.title, url: `${SITE_URL}/category/${category.slug}` },
        ]),
        faqSchema(category.faqs),
      ].filter(Boolean).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: category.title },
          ]}
        />

        <AffiliateDisclosure />

        <div className="mb-8">
          <span className="text-4xl mb-4 block">{category.icon}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{category.title}</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        <FAQ faqs={category.faqs} />

        {/* Other Categories */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Browse Other Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.filter(c => c.slug !== category.slug).map(cat => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:border-green-300 hover:shadow-sm transition-all duration-300"
              >
                {cat.icon} {cat.title}
              </Link>
            ))}
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-green-700 hover:border-green-300 hover:shadow-sm transition-all duration-300"
            >
              All London Tours
            </Link>
          </div>
        </section>

        {/* SEO Content Section */}
        {categorySeoContent[category.slug] && (
          <section className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {category.title} in London</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              {categorySeoContent[category.slug].paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {categorySeoContent[category.slug].relatedGuides.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
                <ul className="space-y-2">
                  {categorySeoContent[category.slug].relatedGuides.map((guide) => (
                    <li key={guide.slug}>
                      <Link href={`/guides/${guide.slug}`} className="text-blue-900 hover:underline">
                        {guide.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}
        {/* Internal links */}
        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
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
        </section>
      </div>
    </>
  );
}
