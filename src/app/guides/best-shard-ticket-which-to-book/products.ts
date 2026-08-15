import { GYG_CAMPAIGN, GYG_PARTNER_ID } from '@/lib/constants';

const PARAMS = `partner_id=${GYG_PARTNER_ID}&utm_medium=travel_agent&cmp=${GYG_CAMPAIGN}`;

function gygProduct(slug: string, id: string): string {
  return `https://www.getyourguide.com/london-l57/${slug}-t${id}/?${PARAMS}`;
}

export type RankedTicket = {
  rank: 1 | 2 | 3;
  badge: string;
  gygTourId: string;
  name: string;
  shortName: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  gbpFrom: number;
  duration: string;
  rating: number;
  reviewCount: number;
  bestFor: string;
  drinkIncluded: boolean;
  skipTheLine: boolean;
  when: string;
  why: string;
  who: string;
};

// Live GetYourGuide figures checked 15 August 2026 (en-GB, currency=GBP).
export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'Best for almost everyone',
    gygTourId: '24625',
    name: 'London: The View from The Shard',
    shortName: 'The View from The Shard',
    href: gygProduct('the-view-from-the-shard-experience', '24625'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/6363e4856ae94.jpeg/98.jpg',
    imageAlt: 'The Shard glass pyramid above the Thames and the City of London',
    gbpFrom: 23,
    duration: '1 day ticket',
    rating: 4.5,
    reviewCount: 9896,
    bestFor: 'Official entry to The Shard',
    drinkIncluded: false,
    skipTheLine: false,
    when: 'Timed slot, then stay as long as you like',
    why: 'This is the official entry ticket to floors 68, 69 and the open-air deck on 72. It is the product people mean when they ask which Shard ticket to book, and it is the most reviewed Shard ticket on GetYourGuide.',
    who: 'First-time visitors, photographers, and anyone who wants the highest public view in Western Europe without paying for extras they will not use.',
  },
  {
    rank: 2,
    badge: 'Best if you want a drink included',
    gygTourId: '456807',
    name: 'London: The Shard Entry Ticket with Champagne',
    shortName: 'Shard with champagne',
    href: gygProduct('the-shard-entry-ticket-with-champagne', '456807'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/642e868586f98.jpeg/98.jpg',
    imageAlt: 'Champagne being poured on The View from The Shard deck',
    gbpFrom: 36,
    duration: '1 day ticket',
    rating: 4.5,
    reviewCount: 202,
    bestFor: 'The same view, with champagne',
    drinkIncluded: true,
    skipTheLine: false,
    when: 'Timed slot plus a glass of champagne',
    why: 'Same viewing floors as the official entry ticket, with a glass of champagne on the deck. It is a different ticket tier, not a different building. You are paying extra for the drink, not for a higher platform.',
    who: 'Couples, celebrations, and anyone who already wants The Shard and would buy a drink at the top anyway.',
  },
  {
    rank: 3,
    badge: 'Only if you want a Potter walk too',
    gygTourId: '774784',
    name: 'London: Magic of Harry Potter Tour with The Shard Viewpoint',
    shortName: 'Potter walk plus The Shard',
    href: gygProduct('london-magic-of-harry-potter-tour-with-the-shard-viewpoint', '774784'),
    imageUrl:
      'https://cdn.getyourguide.com/img/tour/3fc3233f8680cebc285b20b9e77cf9866eeb3f5d582e52290e2ce0b8865d264a.jpg/98.jpg',
    imageAlt: 'The Shard on the Thames beside HMS Belfast',
    gbpFrom: 68,
    duration: '4.5 hours',
    rating: 3.9,
    reviewCount: 4,
    bestFor: 'A film-location walk, then The Shard',
    drinkIncluded: false,
    skipTheLine: false,
    when: 'Guided walk, then Shard entry',
    why: 'This is the only live GetYourGuide combo that pairs a walking tour with Shard entry. It covers 10-plus Potter film locations, then the viewpoint. It has only four reviews. That is not a hidden gem. It is a thin sample.',
    who: 'Potter fans who want a walk and The Shard in one booking. Most visitors should book the official View ticket on its own.',
  },
];
