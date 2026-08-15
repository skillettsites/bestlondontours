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
  earlyAccess: boolean;
  guided: string;
  when: string;
  why: string;
  who: string;
};

// Live GetYourGuide figures checked 15 August 2026 (widget en-GB, currency=GBP).
export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'Best for almost everyone',
    gygTourId: '21253',
    name: 'London: Tower of London and Crown Jewels Exhibition Ticket',
    shortName: 'Crown Jewels exhibition ticket',
    href: gygProduct('london-tower-of-london-and-crown-jewels-exhibition-ticket', '21253'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/b788f95ef021d06e.jpeg/98.jpg',
    imageAlt: 'A King\'s Guard in a red tunic marching past historic cannons on the Tower of London grounds',
    gbpFrom: 37,
    duration: '1 day ticket',
    rating: 4.6,
    reviewCount: 31901,
    bestFor: 'Going inside the Tower',
    earlyAccess: false,
    guided: 'Public Yeoman tours included',
    when: 'Open most of the year',
    why: 'This is the Tower of London ticket people actually book. It is the official-style sightseeing entry to the fortress and the Crown Jewels, and it is the most reviewed Tower product on GetYourGuide. Public Yeoman Warder tours are already included.',
    who: 'First-time visitors, families, and anyone who wants the Crown Jewels, the White Tower and a Beefeater talk without paying for a private guide they will not use.',
  },
  {
    rank: 2,
    badge: 'Best if you want the jewels before the crowds',
    gygTourId: '164745',
    name: 'Tower of London Early Access with Beefeater and Crown Jewels',
    shortName: 'Early access with a Beefeater',
    href: gygProduct('london-tower-of-london-crown-jewels-beefeater-audience', '164745'),
    imageUrl:
      'https://cdn.getyourguide.com/img/tour/e4854e75105c165ac2f9564b47bdc0daf129f7481dde29fd39031e2201a536c5.jpg/98.jpg',
    imageAlt: 'A Yeoman Warder in blue undress uniform leading a tour group inside the Tower of London',
    gbpFrom: 59,
    duration: '45 minutes',
    rating: 4.5,
    reviewCount: 1766,
    bestFor: 'A Beefeater meet, then the Crown Jewels early',
    earlyAccess: true,
    guided: 'Beefeater meet, then free time',
    when: 'Before opening',
    why: 'This is the early-access upgrade people book after the entrance ticket. You meet a Beefeater, see the Crown Jewels before the main crowd, then explore at your own pace. It is a short meet-and-greet, not a three-hour guided tour of the whole fortress.',
    who: 'Travellers who care about the Crown Jewels queue, and anyone who wants a private Beefeater moment without booking a full-day guided tour.',
  },
  {
    rank: 3,
    badge: 'Best fully guided Tower of London tour',
    gygTourId: '569568',
    name: 'London: Easy Access Tower of London and Crown Jewels Tour',
    shortName: 'Easy Access guided tour',
    href: gygProduct('tower-of-london-crown-jewels-torture-and-executions', '569568'),
    imageUrl:
      'https://cdn.getyourguide.com/img/tour/0bec9a0b9f4640999ebc04b422d1e85234337a3dfbc825646f2b215a3d487066.jpeg/98.jpg',
    imageAlt: 'Yeoman Warders in ceremonial red and gold state dress walking through a stone arch at the Tower of London',
    gbpFrom: 89,
    duration: '3-4 hours',
    rating: 4.7,
    reviewCount: 1528,
    bestFor: 'A guide for the whole visit',
    earlyAccess: false,
    guided: 'Yes, 3-4 hours',
    when: 'Timed morning or afternoon',
    why: 'This is the fully guided Tower of London tour people book when they want a guide for the visit, not just a ticket. Timed entry, Crown Jewels, the White Tower, the execution site and the torture exhibition, with someone talking the whole way. It costs more because you are buying a tour, not a higher floor of the fortress.',
    who: 'First-timers who want Tower of London guided tours handled in one booking, and anyone who would rather follow a guide than piece the site together from the map.',
  },
];

export const COMBO_VIP_BEEFEATER = {
  gygTourId: '459935',
  name: 'VIP Beefeaters Meet & Greet with Tower of London Guided Tour',
  href: gygProduct('london-tower-of-london-tour-meet-up-with-the-beefeaters', '459935'),
  gbpFrom: 59,
  duration: '2 hours',
  rating: 4.6,
  reviewCount: 880,
};
