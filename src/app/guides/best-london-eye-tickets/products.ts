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
  fastTrack: string;
  when: string;
  why: string;
  who: string;
};

// Live GetYourGuide figures checked 15 August 2026 (widget en-GB, currency=GBP).
export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'Best for almost everyone',
    gygTourId: '170451',
    name: 'London: The London Eye Entry Ticket',
    shortName: 'London Eye entry ticket',
    href: gygProduct('coca-cola-london-eye-standard-or-fast-track-admission', '170451'),
    imageUrl:
      'https://cdn.getyourguide.com/img/tour/59f5f2c72a2acd0a6ff6c298239cb23db7e7347bf464a031b4f80728e60ed139.jpg/98.jpg',
    imageAlt: 'The London Eye on the South Bank at twilight, with the Thames and County Hall beside it',
    gbpFrom: 25,
    duration: '30 minutes',
    rating: 4.6,
    reviewCount: 39504,
    bestFor: 'A standard or fast-track ride',
    drinkIncluded: false,
    fastTrack: 'If you select it',
    when: 'Timed 30-minute rotation',
    why: 'This is the London Eye ticket people actually book. Standard and fast track are options on the same GetYourGuide listing, and it is the most reviewed London Eye product on the platform. You pick the queue you want at checkout, then ride the same 30-minute capsule.',
    who: 'First-time visitors, families, and anyone who wants the wheel without paying for champagne or a bus-and-boat bundle they will not use.',
  },
  {
    rank: 2,
    badge: 'Best if you want fast track and a drink',
    gygTourId: '193415',
    name: 'The London Eye Champagne Experience',
    shortName: 'London Eye champagne experience',
    href: gygProduct('coca-cola-london-eye-champagne-experience', '193415'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/5e4ff8ff2a219.jpeg/98.jpg',
    imageAlt: 'A couple with champagne glasses inside a London Eye capsule above the South Bank',
    gbpFrom: 49,
    duration: '30 minutes',
    rating: 4.9,
    reviewCount: 891,
    bestFor: 'Fast track, then a glass in the capsule',
    drinkIncluded: true,
    fastTrack: 'Yes, included',
    when: 'VIP lounge, then the same rotation',
    why: 'Same 30-minute flight, with fast-track boarding, a host and a glass of Moët & Chandon. It is a different ticket tier, not a higher wheel. You are paying for the queue, the lounge and the drink, not for a private capsule.',
    who: 'Couples, celebrations, and anyone who already wants the London Eye and would buy fast track plus a drink anyway.',
  },
  {
    rank: 3,
    badge: 'Best if you want a river cruise and a bus too',
    gygTourId: '292175',
    name: 'London: London Eye, River Cruise & Hop-on/Hop-off Bus Tour',
    shortName: 'Eye, river cruise and bus',
    href: gygProduct('london-eye-big-bus-hop-on-hop-off-with-river-cruise', '292175'),
    imageUrl:
      'https://cdn.getyourguide.com/img/tour/d1a417c271bcc98bb429c6b3e0a99b2fa63c8280c4868f93cc4c0ac162b6241a.jpg/98.jpg',
    imageAlt: 'A London Eye capsule above the Thames, with Westminster Bridge and the Houses of Parliament beyond',
    gbpFrom: 55,
    duration: '1-2 days',
    rating: 4.4,
    reviewCount: 6441,
    bestFor: 'The wheel, a Thames boat and a Big Bus pass',
    drinkIncluded: false,
    fastTrack: 'No',
    when: 'Book the Eye slot after checkout',
    why: 'This is the combo people book when they want more than the wheel: London Eye entry, a one-way Thames cruise and a 24- or 48-hour hop-on hop-off bus. It costs more because you are buying a sightseeing bundle, not a better capsule. You still have to reserve the Eye time slot after you book.',
    who: 'First-timers who want the Eye, a boat and a bus handled by one operator. Most visitors who only want the ride should book the entry ticket on its own.',
  },
];

export const PRIVATE_CAPSULE = {
  gygTourId: '222090',
  name: 'London Eye Private Capsule Experience for Couples or Groups',
  href: gygProduct('london-eye-private-capsule-experience-for-couples-or-groups', '222090'),
  gbpFrom: 850,
  duration: '30 minutes',
  rating: 4.8,
  reviewCount: 13,
};
