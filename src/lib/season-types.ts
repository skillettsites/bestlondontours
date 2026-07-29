export interface EventRow {
  event: string;
  dates: string;
  where: string;
  free: string;
}

export interface ClosureRow {
  site: string;
  closed: string;
  note: string;
}

export interface TourPick {
  /** Must match a slug in src/data/tours.ts. Price, rating and review count are read from there. */
  slug: string;
  bestFor: string;
  why: string;
}

export interface MonthSection {
  capsule: string;
  body: string[];
}

export interface MonthContent {
  /** URL slug, no year, e.g. london-in-august */
  slug: string;
  /** Display name, e.g. August */
  month: string;
  /** Key into londonClimate */
  monthKey: string;
  /** 0 = base year, 1 = base year + 1 */
  yearOffset: 0 | 1;
  prevMonth: string;
  prevPath: string;
  nextMonth: string;
  nextPath: string;
  metaDescription: string;
  heroCapsule: string;
  verdict: MonthSection;
  weather: MonthSection;
  crowds: MonthSection;
  tours: {
    capsule: string;
    picks: TourPick[];
    /** What moved out of the ten this month, and why. */
    note: string;
    /** One month-specific line inside the methodology block. */
    methodNote: string;
  };
  events: {
    capsule: string;
    rows: EventRow[];
    body: string[];
  };
  closures: {
    capsule: string;
    rows: ClosureRow[];
    body: string[];
  };
  packing: {
    capsule: string;
    body: string[];
    list: string[];
  };
  faqs: { question: string; answer: string }[];
}
