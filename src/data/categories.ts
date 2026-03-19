import { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    slug: 'landmarks',
    title: 'Landmarks & Attractions',
    metaTitle: 'Best London Landmarks 2026 | Tickets & Booking Guide',
    metaDescription: 'Book tickets for London\'s top landmarks including the Tower of London, Westminster Abbey, St Paul\'s Cathedral, Buckingham Palace, and The Shard.',
    description: 'London\'s landmarks tell the story of a city shaped by over 2,000 years of history. From the medieval Tower of London to the modern Shard, these are the attractions that define London\'s skyline and heritage. Book your tickets in advance to skip the queues and make the most of your visit.',
    excerpt: 'Iconic towers, palaces, and cathedrals that define the London skyline.',
    icon: '🏰',
    tourSlugs: ['tower-of-london-tickets', 'westminster-abbey-tickets', 'buckingham-palace-tickets', 'st-pauls-cathedral-tickets', 'the-shard-tickets', 'london-eye-tickets'],
    faqs: [
      { question: 'What are the must-see landmarks in London?', answer: 'The Tower of London, Westminster Abbey, St Paul\'s Cathedral, and Buckingham Palace are the essential landmarks. For views, add the London Eye or The Shard.' },
      { question: 'Should I buy landmark tickets in advance?', answer: 'Yes, booking in advance saves money and guarantees entry. Popular attractions like the Tower of London and Buckingham Palace can sell out, especially in summer.' },
      { question: 'Which London landmarks are free?', answer: 'The British Museum, National Gallery, Tate Modern, and Natural History Museum are all free. The Changing of the Guard at Buckingham Palace is also free to watch from outside.' },
    ],
  },
  {
    slug: 'river-cruises',
    title: 'River Cruises',
    metaTitle: 'London River Cruises 2026 | Thames Boat Tours & Trips',
    metaDescription: 'Book Thames river cruises in London. Sightseeing boats from Westminster to Greenwich, dinner cruises, and hop-on hop-off river buses.',
    description: 'The Thames is the lifeblood of London, and a river cruise is one of the best ways to see the city. Glide past the Houses of Parliament, under Tower Bridge, and through the modern Docklands. Whether you want a sightseeing trip, a dinner cruise, or simply a scenic commute, there is a Thames cruise for every occasion.',
    excerpt: 'See London from the water on a Thames sightseeing, dinner, or hop-on hop-off cruise.',
    icon: '⛵',
    tourSlugs: ['thames-sightseeing-cruise'],
    faqs: [
      { question: 'What is the best Thames cruise in London?', answer: 'The Westminster to Greenwich sightseeing cruise is the most popular, passing Tower Bridge and the Tower of London with live commentary. It takes about 1 hour.' },
      { question: 'Do Thames cruises run in winter?', answer: 'Yes, Thames cruises run year-round. Boats have indoor heated seating as well as open-air decks for warmer days.' },
      { question: 'Can you use Oyster cards on Thames Clippers?', answer: 'Yes, the Thames Clippers river bus service accepts Oyster cards and contactless payment. Sightseeing cruises require separate tickets.' },
    ],
  },
  {
    slug: 'day-trips',
    title: 'Day Trips from London',
    metaTitle: 'Best Day Trips from London 2026 | Guided Tours & Excursions',
    metaDescription: 'Book day trips from London to Windsor Castle, Stonehenge, Bath, and more. Guided coach tours with expert commentary and hassle-free transport.',
    description: 'Some of England\'s greatest treasures lie just outside London. Day trips offer a chance to explore the English countryside, visit ancient monuments, and discover charming towns, all without the hassle of planning your own transport. Expert guides bring each destination to life with fascinating stories and local knowledge.',
    excerpt: 'Explore Windsor Castle, Stonehenge, Bath, and more on guided day trips from London.',
    icon: '🚌',
    tourSlugs: ['windsor-stonehenge-bath-tour', 'harry-potter-studio-tour'],
    faqs: [
      { question: 'What are the best day trips from London?', answer: 'Windsor Castle, Stonehenge, and Bath can all be combined in one day. The Harry Potter Studio Tour is another popular choice. Oxford, Cambridge, and the Cotswolds are also excellent options.' },
      { question: 'How long are day trips from London?', answer: 'Most day trips are 10 to 12 hours, departing around 8am and returning by 7-8pm. The Harry Potter Studio Tour is approximately 7 hours.' },
      { question: 'Are day trip entries included in the price?', answer: 'It varies by tour. Always check what is included. Stonehenge entry is typically included, while Windsor Castle entry may be extra.' },
    ],
  },
  {
    slug: 'food-tours',
    title: 'Food Tours',
    metaTitle: 'London Food Tours 2026 | Borough Market, Street Food & More',
    metaDescription: 'Book London food tours with expert local guides. Taste artisan cheese, cured meats, fresh bread, and more at Borough Market and beyond.',
    description: 'London is one of the world\'s great food cities, and the best way to discover it is with a local guide. Food tours take you beyond the tourist traps to the markets, delis, and street food stalls that Londoners love. Meet the producers, taste incredible food, and learn about the cultures that have shaped London\'s diverse food scene.',
    excerpt: 'Taste London\'s best food with expert local guides at markets and hidden gems.',
    icon: '🍽️',
    tourSlugs: ['borough-market-food-tour'],
    faqs: [
      { question: 'What food tours are available in London?', answer: 'Borough Market food tours are the most popular, with 6+ tastings of artisan produce. There are also tours of Brick Lane, Soho, and the East End focusing on different cuisines.' },
      { question: 'Are London food tours suitable for vegetarians?', answer: 'Yes, most guides can accommodate vegetarian and vegan diets. Let them know your requirements when you book or at the start of the tour.' },
      { question: 'Do food tours replace a meal?', answer: 'Yes, the tastings are generous enough to replace lunch. Come hungry and you will leave fully satisfied.' },
    ],
  },
  {
    slug: 'family-fun',
    title: 'Family Fun',
    metaTitle: 'Best Family Activities in London 2026 | Kids\' Attractions',
    metaDescription: 'Book family-friendly London attractions: London Eye, Harry Potter Studio Tour, Madame Tussauds, London Dungeon, and hop-on hop-off bus tours.',
    description: 'London is packed with world-class attractions that the whole family can enjoy. From the magic of Harry Potter to the thrills of the London Dungeon, there is something to excite every age group. These family-friendly experiences combine entertainment with education, creating memories that last a lifetime.',
    excerpt: 'World-class attractions the whole family will love, from Harry Potter to the London Eye.',
    icon: '👨‍👩‍👧‍👦',
    tourSlugs: ['london-eye-tickets', 'harry-potter-studio-tour', 'madame-tussauds-tickets', 'london-dungeon-tickets', 'hop-on-hop-off-bus'],
    faqs: [
      { question: 'What are the best things to do in London with kids?', answer: 'The London Eye, Harry Potter Studio Tour, Natural History Museum (free), Madame Tussauds, and the Science Museum (free) are all excellent. The hop-on hop-off bus is also great for keeping kids entertained while sightseeing.' },
      { question: 'Are there discounts for children at London attractions?', answer: 'Most attractions offer reduced prices for children aged 3 to 15. Under 3s are usually free. Family tickets (2 adults + 2 children) are often available at a discount.' },
      { question: 'What are good rainy day activities in London for families?', answer: 'Madame Tussauds, the London Dungeon, the Natural History Museum, and the Science Museum are all indoor activities perfect for rainy days.' },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
