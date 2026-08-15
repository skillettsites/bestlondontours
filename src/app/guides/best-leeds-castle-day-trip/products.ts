import { GYG_CAMPAIGN, GYG_PARTNER_ID } from '@/lib/constants';

const PARAMS = `partner_id=${GYG_PARTNER_ID}&utm_medium=travel_agent&cmp=${GYG_CAMPAIGN}`;

function gygProduct(slug: string, id: string): string {
  return `https://www.getyourguide.com/london-l57/${slug}-t${id}/?${PARAMS}`;
}

export type RankedDayTrip = {
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
  cathedralEntry: string;
  boatIncluded: boolean;
  when: string;
  why: string;
  who: string;
};

// Live GetYourGuide figures checked 15 August 2026 (widget en-GB, currency=GBP).
export const TOP_THREE: RankedDayTrip[] = [
  {
    rank: 1,
    badge: 'Best for almost everyone',
    gygTourId: '2257',
    name: 'From London: Leeds Castle, Canterbury Cathedral & Dover',
    shortName: 'Leeds Castle, Canterbury & Dover',
    href: gygProduct('leeds-castle-private-viewing-canterbury-cathedral-dover', '2257'),
    imageUrl:
      'https://cdn.getyourguide.com/img/tour/815cd53609b1d132718fe4e70c2f2a7c57b772505276fcb3732255f168d5815b.jpg/98.jpg',
    imageAlt: 'Leeds Castle reflected in its moat on a clear day in Kent',
    gbpFrom: 105,
    duration: '10 hours',
    rating: 4.4,
    reviewCount: 790,
    bestFor: 'The classic three-stop Kent day',
    cathedralEntry: 'If you select it',
    boatIncluded: false,
    when: 'Full day from Victoria',
    why: 'This is the Leeds Castle day trip people actually book. It is the most reviewed Kent combo on GetYourGuide: castle entry with a VIP drop-off, Canterbury, then a short White Cliffs photo stop. You are not paying for Greenwich or a boat you may not want.',
    who: 'First-time visitors who want Leeds Castle, Canterbury and Dover in one coach day, without extra London add-ons.',
  },
  {
    rank: 2,
    badge: 'Best if you want a Thames boat too',
    gygTourId: '969',
    name: 'Leeds Castle, Canterbury, Dover & Greenwich Boat Ride',
    shortName: 'Greenwich boat day trip',
    href: gygProduct('leeds-castle-canterbury-dover-greenwich-free-snack-pack', '969'),
    imageUrl:
      'https://cdn.getyourguide.com/img/tour/1a1993054d33c3429d554d5aa13f5481e3460f2c90a880a40a8321434ef84646.jpg/98.jpg',
    imageAlt: 'Leeds Castle on its lake, with visitors walking the lawn beside the water',
    gbpFrom: 109,
    duration: '10 hours',
    rating: 4.4,
    reviewCount: 331,
    bestFor: 'Kent plus a Thames boat home',
    cathedralEntry: 'If you select it',
    boatIncluded: true,
    when: 'Full day, finish at Embankment',
    why: 'Same Kent spine, then Greenwich and a Thames boat back to Embankment, with a snack pack on the coach. It has far fewer reviews than the classic three-stop. Book it for the boat, not because the castle is different.',
    who: 'Travellers who want Leeds Castle and a river cruise in one booking, and do not mind a tighter, four-stop day.',
  },
  {
    rank: 3,
    badge: 'Best rated Greenwich combo',
    gygTourId: '1309',
    name: 'From London: Leeds Castle, Canterbury, Dover and Greenwich',
    shortName: 'Greenwich walking day trip',
    href: gygProduct('leeds-castle-canterbury-dover-and-greenwich', '1309'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/5d8c7e871360b.jpeg/98.jpg',
    imageAlt: 'Leeds Castle rising from the lake with lawns and hills behind it',
    gbpFrom: 105,
    duration: '10 hours',
    rating: 4.6,
    reviewCount: 114,
    bestFor: 'A Greenwich walk, then a cruise',
    cathedralEntry: 'If you select it',
    boatIncluded: true,
    when: 'Full day from Victoria',
    why: 'This is the higher-rated Greenwich combo: a walking stretch in Greenwich and a Thames cruise, not a coach drive-by. It has 114 reviews. That is a thinner sample than the two tours above, even though the score is higher.',
    who: 'People who want time on foot in Greenwich after Kent, and are happy to book a less-reviewed product for that extra stop.',
  },
];
