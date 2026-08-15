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
  skipTheLine: boolean;
  goesInside: boolean;
  when: string;
  why: string;
  who: string;
};

// Live GetYourGuide figures checked 15 August 2026 (en-GB, currency=GBP).
export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'Best if you want to go inside',
    gygTourId: '53844',
    name: 'Buckingham Palace: The State Rooms Entrance Ticket',
    shortName: 'State Rooms',
    href: gygProduct('entrance-ticket-the-state-rooms-buckingham-palace', '53844'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/ada433be80df8eee.jpeg/98.jpg',
    imageAlt: 'The front gates and facade of Buckingham Palace',
    gbpFrom: 33,
    duration: '2.5 hours',
    rating: 4.6,
    reviewCount: 8257,
    bestFor: 'Going inside the palace',
    skipTheLine: false,
    goesInside: true,
    when: 'Summer opening only',
    why: 'This is the official ticket into the 19 State Rooms. It is the product people mean when they ask which Buckingham Palace ticket to book, and it is the most reviewed palace ticket on GetYourGuide.',
    who: 'First-time visitors who will be in London while the palace is open to the public, and anyone who wants the Throne Room, Picture Gallery and garden walk.',
  },
  {
    rank: 2,
    badge: 'Best guided option',
    gygTourId: '530998',
    name: 'London: Buckingham Palace & Changing of the Guard Experience',
    shortName: 'Changing of the Guard tour',
    href: gygProduct('london-the-royals-guided-walking-tour', '530998'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/41c22a4ca66b2bb2390632b93ae645c1e7e57ef22c14957a03b14e463a7dc5c7.jpeg/98.jpg',
    imageAlt: 'Foot Guards in red tunics and bearskins marching at Buckingham Palace during the Changing of the Guard',
    gbpFrom: 20,
    duration: '2 hours',
    rating: 4.4,
    reviewCount: 4387,
    bestFor: 'The ceremony, with a guide',
    skipTheLine: false,
    goesInside: false,
    when: 'Ceremony mornings',
    why: 'This is the guided Buckingham Palace walk people actually book. It has more GetYourGuide reviews than any other Changing of the Guard tour we compared, and it costs less than going inside.',
    who: 'Visitors who want the classic palace photo and the ceremony explained, or anyone travelling outside the short summer opening.',
  },
  {
    rank: 3,
    badge: 'Best year-round official ticket',
    gygTourId: '53857',
    name: 'Buckingham Palace: The Royal Mews Entrance Ticket',
    shortName: 'Royal Mews',
    href: gygProduct('the-royal-mews-buckingham-palace-entrance-ticket', '53857'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/5565c1863d61f.jpeg/98.jpg',
    imageAlt: 'A royal carriage horse and attendant in ceremonial uniform at the Royal Mews',
    gbpFrom: 18,
    duration: '1 day ticket',
    rating: 4.3,
    reviewCount: 2067,
    bestFor: 'A royal visit when the State Rooms are closed',
    skipTheLine: false,
    goesInside: false,
    when: 'Open most of the year',
    why: 'GetYourGuide does not sell the official Royal Day Out bundle. The Royal Mews is the official year-round royal ticket people book instead: working stables, the Gold State Coach and the horses that pull the carriages.',
    who: 'Families and royal fans who want a real official site next to the palace, especially outside July to September.',
  },
];

export const COMBO_ENTRY_AND_GUARD = {
  gygTourId: '49917',
  name: 'Buckingham Palace Entry & Changing of the Guard Tour',
  href: gygProduct('london-buckingham-palace-the-changing-of-the-guard', '49917'),
  gbpFrom: 52,
  duration: '2.5 hours',
  rating: 4.3,
  reviewCount: 2522,
};
