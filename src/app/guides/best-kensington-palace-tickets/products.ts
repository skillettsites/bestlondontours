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
  teaIncluded: boolean;
  goesInside: boolean;
  when: string;
  why: string;
  who: string;
};

// Live GetYourGuide figures checked 15 August 2026 (widget en-GB, currency=GBP).
export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'Best for almost everyone',
    gygTourId: '21251',
    name: 'London: Kensington Palace Sightseeing Entrance Tickets',
    shortName: 'Kensington Palace entrance ticket',
    href: gygProduct('kensington-palace-90-minute-sightseeing-tour', '21251'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/9e196c373c25a5ce.jpeg/98.jpg',
    imageAlt: 'Kensington Palace facade and the Queen Victoria statue in Kensington Gardens',
    gbpFrom: 19,
    duration: '1 day ticket',
    rating: 4.4,
    reviewCount: 4687,
    bestFor: 'Going inside the palace',
    teaIncluded: false,
    goesInside: true,
    when: 'Open most of the year',
    why: 'This is the Kensington Palace ticket people actually book. It is the official-style sightseeing entry to the State Apartments, with an audio guide, and it is the most reviewed Kensington Palace product on GetYourGuide.',
    who: 'First-time visitors, royal-history fans, and anyone who wants to go inside Queen Victoria\'s birthplace without paying for tea or a walking tour they will not use.',
  },
  {
    rank: 2,
    badge: 'Best if you want tea and the gardens',
    gygTourId: '268097',
    name: 'London: Kensington Palace Afternoon Tea & Guided Walk',
    shortName: 'Afternoon tea and gardens walk',
    href: gygProduct('london-kensington-palace-afternoon-tea-guided-walk', '268097'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/10e25e803809145b.jpeg/98.jpg',
    imageAlt: 'The Italian Gardens fountains in Kensington Gardens near Kensington Palace',
    gbpFrom: 95,
    duration: '2-4 hours',
    rating: 4.6,
    reviewCount: 367,
    bestFor: 'A gardens walk, then afternoon tea',
    teaIncluded: true,
    goesInside: false,
    when: 'Guided walk, then tea',
    why: 'This is the tea-and-gardens product people book after the entrance ticket. You walk Kensington Gardens with a guide, then sit down for tea. Palace interiors are not automatic: select the option that includes entry if you want the State Apartments as well.',
    who: 'Couples, celebrations, and anyone who already wants Kensington Gardens and tea in one booking. Most visitors who only want the palace should book the entrance ticket.',
  },
  {
    rank: 3,
    badge: 'Best rated gardens high tea',
    gygTourId: '52953',
    name: 'London: VIP Kensington Palace Gardens Tour & Royal High Tea',
    shortName: 'VIP gardens high tea',
    href: gygProduct('london-vip-kensington-palace-gardens-tour-royal-high-tea', '52953'),
    imageUrl:
      'https://cdn.getyourguide.com/img/tour/b102733670c794555e1ba28f5b1631d9ccf398961b81bea44c4dec3efd6599b6.jpg/98.jpg',
    imageAlt: 'Visitors in front of Kensington Palace and the Queen Victoria statue',
    gbpFrom: 115,
    duration: '2-3 hours',
    rating: 4.7,
    reviewCount: 71,
    bestFor: 'A smaller, higher-rated tea tour',
    teaIncluded: true,
    goesInside: false,
    when: 'Gardens walk, then high tea',
    why: 'This is the higher-rated gardens-and-tea tour: a walk through Kensington Gardens, then royal high tea. It has 71 reviews. That is a thinner sample than the two products above, even though the score is higher. It is not a State Apartments ticket.',
    who: 'Travellers who want a smaller gardens tea and are happy to book a less-reviewed product for that. Most people should start with the entrance ticket.',
  },
];

export const COMBO_GUARD_AND_TEA = {
  gygTourId: '874624',
  name: 'London: Kensington Palace Tour, Guard Change & Afternoon Tea',
  href: gygProduct('royal-london-kensington-palace-afternoon-tea-guard-change', '874624'),
  gbpFrom: 109,
  duration: '5.5 hours',
  rating: 4.4,
  reviewCount: 35,
};
