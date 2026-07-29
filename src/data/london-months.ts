import { MonthContent } from '@/lib/season-types';
import { august, september, october, november, december } from './london-months-a';
import { january, february, march, april, may } from './london-months-b';

export const monthPages: MonthContent[] = [
  august, september, october, november, december,
  january, february, march, april, may,
];

export function getMonthBySlug(slug: string): MonthContent | undefined {
  return monthPages.find((m) => m.slug === slug);
}

/** Footer month strip order, chronological across the season. */
export const monthStrip = monthPages.map((m) => ({ month: m.month, href: `/${m.slug}` }));

export interface HubMonth {
  /** Anchor id and climate key */
  key: string;
  month: string;
  /** Path to the month page, or a hub anchor where no page exists. */
  href: string;
  hasPage: boolean;
  /** 40 to 60 words, standalone, at least one hard number, no links inside. */
  capsule: string;
  verdict: string;
}

// Twelve capsules, calendar order. June and July have no dedicated page in this
// build, so they link to their own section on this hub.
export const hubMonths: HubMonth[] = [
  {
    key: 'january',
    month: 'January',
    href: '/london-in-january',
    hasPage: true,
    verdict: 'Cheapest, coldest, London Eye shut',
    capsule:
      'The coldest month at 7.7C highs and 1.7C lows, and the cheapest from about the 4th. It is also the one month the London Eye does not run at all, closing for annual maintenance. Hogwarts in the Snow finishes on 17 January and the Somerset House rink on the 10th.',
  },
  {
    key: 'february',
    month: 'February',
    href: '/london-in-february',
    hasPage: true,
    verdict: 'Driest winter month, Eye reopens',
    capsule:
      'The driest of the winter months at 54mm across eleven wet days, and the month the London Eye reopens after its January shutdown. Chinese New Year falls on 6 February and half-term runs 15 to 19 February. Daylight crosses ten hours by the middle of the month.',
  },
  {
    key: 'march',
    month: 'March',
    href: '/london-in-march',
    hasPage: true,
    verdict: 'Tower back on summer hours',
    capsule:
      'The Tower of London returns to summer hours on 1 March and the clocks go forward on the 28th, adding an hour to the evening overnight. March gains 1 hour 59 minutes of daylight, more than any month. It also has thirteen wet days, the highest count of the year.',
  },
  {
    key: 'april',
    month: 'April',
    href: '/london-in-april',
    hasPage: true,
    verdict: 'Driest month of the year',
    capsule:
      'The driest month in London at 40mm across ten wet days, with sunset at 19:56 mid-month. Easter fell in March this year, so the family crowds have already gone. The one constraint is the London Marathon, which runs as a two-day event on 24 and 25 April.',
  },
  {
    key: 'may',
    month: 'May',
    href: '/london-in-may',
    hasPage: true,
    verdict: 'Longest days, palace still shut',
    capsule:
      'The longest days in this guide at 15 hours 36 minutes, with sunset at 20:45 and 17.4C average highs. Two bank holidays fall on 3 and 31 May and RHS Chelsea runs 18 to 22 May. Buckingham Palace is still closed: its State Rooms open only for a summer season.',
  },
  {
    key: 'june',
    month: 'June',
    href: '/best-time-to-visit-london#june',
    hasPage: false,
    verdict: 'Peak daylight, 16h 36m',
    capsule:
      'The longest days of the year, 16 hours 36 minutes on the 15th with sunset at 21:19, and average highs of 20.8C. Rainfall creeps back to 61mm across eleven wet days. Buckingham Palace is still closed for most of the month, since its summer season starts in July.',
  },
  {
    key: 'july',
    month: 'July',
    href: '/best-time-to-visit-london#july',
    hasPage: false,
    verdict: 'Warmest month, palace opens',
    capsule:
      'The warmest month on the ten-year mean at 22.6C highs and 13.9C lows, with 16 hours 11 minutes of daylight on the 15th. It is also when the Buckingham Palace State Rooms open: the 2026 season began on 9 July. School holidays start in the second half of the month.',
  },
  {
    key: 'august',
    month: 'August',
    href: '/london-in-august',
    hasPage: true,
    verdict: 'Fewest wet days, palace open',
    capsule:
      'The month with the fewest wet days of the year at ten, average highs of 22.3C and sunset at 20:23 mid-month. The Buckingham Palace State Rooms are open until 27 September. Notting Hill Carnival closes roads across W10 and W11 on 30 and 31 August.',
  },
  {
    key: 'september',
    month: 'September',
    href: '/london-in-september',
    hasPage: true,
    verdict: 'Best all-round, one deadline',
    capsule:
      'The best-balanced month, with 19.7C highs, school crowds gone from the first week and Open House opening several hundred buildings free from 12 to 20 September. The deadline is 27 September, when the Buckingham Palace State Rooms close for nine months.',
  },
  {
    key: 'october',
    month: 'October',
    href: '/london-in-october',
    hasPage: true,
    verdict: 'Wettest month, clocks go back',
    capsule:
      'The wettest month of the year at 77mm across twelve wet days, and the month the evenings collapse. The clocks go back on Sunday 25 October and sunset falls from 17:48 to 16:46 overnight. Half-term, Diwali and a Saturday Halloween all land in the last ten days.',
  },
  {
    key: 'november',
    month: 'November',
    href: '/london-in-november',
    hasPage: true,
    verdict: 'Winter season opens mid-month',
    capsule:
      'Sunset is 16:11 mid-month and highs are down to 11C, but three winter attractions open in four days: the Somerset House rink on 11 November, Christmas at Kew on the 13th and Hogwarts in the Snow on the 14th. The first ten days are among the cheapest of the year.',
  },
  {
    key: 'december',
    month: 'December',
    href: '/london-in-december',
    hasPage: true,
    verdict: 'Shortest days, 25 Dec shutdown',
    capsule:
      'The shortest days of the year at 7 hours 52 minutes, with sunset at 15:51. On 25 December there is no Underground, no bus and no National Rail service anywhere in London. The Tower of London is closed on 24, 25 and 26 December, three consecutive days.',
  },
];
