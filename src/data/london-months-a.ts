import { MonthContent } from '@/lib/season-types';

// August 2026 through December 2026.
//
// Rules applied to every line in this file:
//  - Climate figures are the ERA5 2015 to 2024 means in london-climate.ts.
//  - Sunrise, sunset and daylight are the timeanddate.com London tables.
//  - Buckingham Palace season dates come from rct.uk. The 2027 season had not been
//    published when this was written, so no 2027 palace date is stated anywhere.
//  - Weekdays were calculated, not assumed.
//  - Hyde Park Winter Wonderland dates are NOT published here. Sources disagreed and
//    none was official, so the event is described without dates.

export const august: MonthContent = {
  slug: 'london-in-august',
  month: 'August',
  monthKey: 'august',
  yearOffset: 0,
  prevMonth: 'July',
  prevPath: '/best-time-to-visit-london#july',
  nextMonth: 'September',
  nextPath: '/london-in-september',
  metaDescription:
    'London in August: 22.3C average highs, ten wet days and sunset at 20:23. Buckingham Palace State Rooms are open, Notting Hill Carnival closes west London on 30 and 31 August, and Changing the Guard runs three days a week. Ten ranked tours.',
  heroCapsule:
    'August is the warmest month in London, averaging 22.3C by day, and the only month in this guide with fewer than eleven wet days. It is also one of just three months when the Buckingham Palace State Rooms are open to visitors. Sunset on the 15th is 20:23, so an evening tour is still a daylight tour.',

  verdict: {
    capsule:
      'Yes, and it is the easiest month of the ten to plan. Highs average 22.3C, wet days drop to ten, the lowest count of any month, and you get 14 hours 37 minutes of daylight in mid-August. The trade is price and volume: this is peak season and the last weekend belongs to Notting Hill Carnival.',
    body: [
      'August is the month when London behaves least like its reputation. The 22.3C average high is mild rather than hot, the ten-year mean shows only ten days with a millimetre of rain or more, and the sun does not set until 20:23 in the middle of the month. You can genuinely fill a day from 09:00 to 21:00 without needing a wet-weather plan for every hour of it.',
      'The reason to come now rather than in September is the Buckingham Palace State Rooms. They open for a short summer season each year, and the 2026 season runs 9 July to 27 September. For ten months of the year the only way into the Palace is a small number of ticketed guided tours on selected dates. If seeing the State Rooms is on your list, August and the first three weeks of September are your window in this guide.',
      'What August costs you is space and money. Hotel rates in zone 1 sit at their annual peak, the South Bank is shoulder to shoulder from mid-morning, and the timed-entry attractions sell their good slots weeks out. If you want the same daylight with fewer people, May gives you an extra hour of it and considerably lower rates.',
    ],
  },

  weather: {
    capsule:
      'Expect 22.3C average highs and 13.7C lows, around 57mm of rain across ten wet days, and sunrise at 05:45 with sunset at 20:23 on the 15th. London sheds 1 hour 47 minutes of daylight between 1 and 31 August, the second-fastest loss of any month in the year.',
    body: [
      'The single most misread thing about a London August is heat. The ten-year mean high is 22.3C, which is a pleasant walking temperature, not a Mediterranean one. Individual days above 30C do happen and the Underground becomes genuinely unpleasant when they do, because the deep tube lines have no air conditioning on most of the network. Plan the deep lines for the morning and use buses or walk in the afternoon on a hot day.',
      'Rain in August is convective rather than frontal: short heavy bursts rather than the all-day grey that arrives in October. Ten wet days across the month means roughly one day in three sees a millimetre or more, and most of those days are still perfectly usable. A packable shell beats an umbrella because London summer rain usually arrives with wind.',
      'The daylight curve matters more than most guides admit. On 1 August you get 15 hours 24 minutes of daylight; by the 31st that is down to 13 hours 38 minutes. A river cruise booked for 19:30 in the first week is a golden-hour cruise. The same booking on 30 August is a dusk cruise. Check the date, not just the month.',
    ],
  },

  crowds: {
    capsule:
      'August is peak season and prices show it. Book the Buckingham Palace State Rooms, the Warner Bros Studio Tour and the Tower of London before you fly, all three run on timed entry and all three sell out. The last weekend, 30 and 31 August, is Notting Hill Carnival and west London effectively closes.',
    body: [
      'Three products in our list are genuinely book-ahead in August rather than nice-to-book-ahead. The Buckingham Palace State Rooms sell in timed slots against a fixed seasonal capacity. The Warner Bros Studio Tour at Leavesden sells out days in advance across the school holidays and does not admit walk-ups. The Tower of London absorbs the biggest single crowd in the city on a wet August afternoon, and the Crown Jewels queue is where that shows.',
      'The Carnival weekend deserves its own paragraph. Notting Hill Carnival runs on Sunday 30 and Monday 31 August, the 31st being the summer bank holiday. Ladbroke Grove, Westbourne Park and Notting Hill Gate operate on heavily restricted patterns, some stations exit-only or closed altogether, and bus routes across W10 and W11 are diverted for two days. If you are staying in Notting Hill and not going to Carnival, plan to be somewhere else those two days.',
      'On price, August is not the month to look for value in London. What does hold its value is the free national museums, which stay free in every month, and the walking product: our ghost, Blitz and Jack the Ripper walks are all under £30 and are not capacity-constrained the way the ticketed attractions are.',
    ],
  },

  tours: {
    capsule:
      'The August ten is re-ordered around three facts: the Buckingham Palace State Rooms are open, sunset is at 20:23, and this is the driest month by wet-day count. Open-air, on-water and evening experiences move up; the indoor wet-weather attractions move down and return in October.',
    picks: [
      {
        slug: 'buckingham-palace-tickets',
        bestFor: 'The one thing you cannot do most of the year',
        why: 'Ranked first on seasonal logic rather than review volume, and it is the clearest re-rank on this page. The State Rooms open only for a short summer season, 9 July to 27 September in 2026. Every other tour in this list is available in ten or twelve months of the year. This one is not.',
      },
      {
        slug: 'thames-sightseeing-cruise',
        bestFor: 'Using the 20:23 sunset properly',
        why: 'The third most reviewed product on the site and the best-value hour in an August evening. An open-deck run between Westminster and Greenwich at 19:00 is still full daylight in mid-August. The same cruise in December is a dark-water cruise with the deck closed.',
      },
      {
        slug: 'hop-on-hop-off-bus',
        bestFor: 'A first orientation day in dry weather',
        why: 'This is the month the open top deck is actually the point. At 22.3C and ten wet days, the upper deck is usable most of the time, which is not true from October onwards. Note the Carnival weekend: routes through west London are disrupted on 30 and 31 August.',
      },
      {
        slug: 'tower-of-london-tickets',
        bestFor: 'Arriving at opening, before the coaches',
        why: 'The second most reviewed thing on the site and still on its longer summer hours in August, which means a late-afternoon arrival works. The Crown Jewels queue is the pinch point and it is at its worst between 11:00 and 14:00, so take the first hour of the day or the last two.',
      },
      {
        slug: 'london-zoo-tickets',
        bestFor: 'A school-holiday day that is almost entirely outdoors',
        why: 'Ranked up from mid-table on reviews for one seasonal reason: the Zoo is largely an outdoor site in Regents Park, and August is the month with the fewest wet days in the year. In November the same ticket buys you a cold walk between indoor houses.',
      },
      {
        slug: 'harry-potter-studio-tour',
        bestFor: 'The wet day in the middle of a dry month',
        why: 'A full indoor day at Leavesden, which is exactly what you want on one of August\'s ten wet days. It sells out across the school holidays, so this is the one booking in the list to make before you leave home rather than on the morning.',
      },
      {
        slug: 'london-bike-tour',
        bestFor: 'Covering the parks and the river in one go',
        why: 'Moved up sharply for August from a base position in the mid-twenties on reviews. Cycling London is a weather-dependent activity and this is the warmest, driest-feeling month of the year for it. It drops out of the list entirely between November and February.',
      },
      {
        slug: 'london-photography-tour',
        bestFor: 'Golden hour on the river',
        why: 'The lowest review count in this month\'s ten, ranked in purely on light. Sunset at 20:23 with a long slow dusk after it gives you the best photographic window of any month in this guide. In December the equivalent hour is 15:51 and it is usually grey.',
      },
      {
        slug: 'borough-market-food-tour',
        bestFor: 'Eating outdoors without a plan B',
        why: 'Borough is partly covered and partly open, which makes it a summer-weighted experience. British produce is at its peak in August and the market\'s outdoor sections are genuinely pleasant rather than something to be endured.',
      },
      {
        slug: 'london-eye-tickets',
        bestFor: 'The clearest long-distance views of the year',
        why: 'The most-reviewed product on the site sits ninth this month rather than first, and the reason is scheduling rather than quality: a 30-minute rotation is the least efficient use of a 14-hour daylight day. Book it for 20:00 and you get the city lighting up as you go round.',
      },
    ],
    note:
      'Madame Tussauds and the London Dungeon both drop out of the August ten despite holding more than 27,000 reviews between them. Both are indoor, queue-based, all-weather attractions, and August is the month with the fewest wet days in the London year. They are the right answer in October and the wrong one now. The Churchill War Rooms and the Natural History Museum tour drop out for the same reason.',
    methodNote:
      'For August the re-rank runs on daylight and dryness. Buckingham Palace goes to the top because its season is only eleven weeks long. The bike, photography and market tours move up because ten wet days is the lowest count of the year. Four indoor attractions move out and return when the weather turns.',
  },

  events: {
    capsule:
      'August has one event large enough to change your plans: Notting Hill Carnival on Sunday 30 and Monday 31 August, when parts of W10 and W11 shut to traffic and several Underground stations run restricted. The 31st is also the summer bank holiday, so the whole weekend runs on a Sunday timetable.',
    rows: [
      { event: 'Buckingham Palace State Rooms open', dates: 'Throughout, season runs 9 July to 27 September', where: 'Buckingham Palace, SW1', free: 'Ticketed' },
      { event: 'Notting Hill Carnival', dates: 'Sunday 30 and Monday 31 August', where: 'Notting Hill, Ladbroke Grove, W10 and W11', free: 'Free to attend' },
      { event: 'Summer bank holiday', dates: 'Monday 31 August', where: 'England and Wales', free: 'Public holiday' },
      { event: 'Changing the Guard', dates: 'Mondays, Wednesdays and Fridays', where: 'Buckingham Palace forecourt', free: 'Free to watch' },
      { event: 'School summer holidays', dates: 'All month in England', where: 'Citywide, family attractions busiest', free: 'Not applicable' },
    ],
    body: [
      'Notting Hill Carnival is the largest street festival in Europe and it is genuinely worth building a day around, but go in with a plan. Sunday is family day and is the calmer of the two. Monday is the main parade and is the busier. Both days start early and finish in the early evening, and there is no realistic way to drive, park or take a taxi anywhere near the route.',
      'Changing the Guard is the fact most competitor pages get wrong. It does not run daily. The ceremony at Buckingham Palace takes place on Mondays, Wednesdays and Fridays, and the schedule is published a month at a time by the Household Division and can change or be cancelled at short notice in bad weather. Check the day you are going rather than turning up on a Tuesday expecting a parade.',
      'August is also the last full month of the Buckingham Palace summer season. The State Rooms close on 27 September, and for the rest of the year the Palace opens only on selected dates for a limited number of guided tours. If your trip runs into October, this page is the wrong month for that plan.',
    ],
  },

  closures: {
    capsule:
      'Almost nothing is closed in August, which is the exact reason to come. The one thing to work around is the Carnival footprint on 30 and 31 August, when several west London Underground stations run exit-only or closed and buses across W10 and W11 divert. Changing the Guard runs three days a week, not seven.',
    rows: [
      { site: 'Notting Hill Gate, Ladbroke Grove and Westbourne Park stations', closed: '30 and 31 August, restricted', note: 'Carnival operating pattern. Expect exit-only working, one-way systems and short-notice closures across both days.' },
      { site: 'Bus routes across W10 and W11', closed: '30 and 31 August, diverted', note: 'Roads inside the Carnival footprint close to traffic. There is no vehicle access to the route on either day.' },
      { site: 'Changing the Guard', closed: 'Tuesdays, Thursdays, Saturdays and Sundays', note: 'The ceremony runs Monday, Wednesday and Friday, not daily. Bad weather can cancel it on a scheduled day.' },
      { site: 'Houses of Parliament', closed: 'Sitting days only, summer recess applies', note: 'Parliament is in recess through August. Public tours run in the recess but the debating chambers are not sitting.' },
      { site: 'Warner Bros Studio Tour', closed: 'Not closed, but sold out', note: 'Not a closure. Timed slots across the school holidays regularly sell out days ahead, and there is no walk-up ticket.' },
    ],
    body: [
      'This is the least constrained month in the whole ten-month set, and it is worth saying so plainly. Every major London attraction in our list is open, the Tower is on its longer summer hours, and the Buckingham Palace State Rooms are open, which is true of only eleven weeks in the year.',
      'The Carnival restrictions are real but geographically tiny. They affect roughly two square kilometres of west London for two days. Everything from Paddington eastwards runs normally, and the river, the South Bank and the City are unaffected. If your hotel is not in W10 or W11, you may not notice it at all.',
      'One thing we deliberately do not publish here is the Hyde Park Winter Wonderland schedule. The 2026 to 2027 dates were not confirmed by an official source when this page was written, and the third-party listings we found disagreed with each other. We would rather leave a gap than print a date you might plan a trip around.',
    ],
  },

  packing: {
    capsule:
      'Pack for 22.3C days, 13.7C nights and one wet day in three. The two items that actually matter in a London August are a light waterproof shell, because summer rain arrives with wind and umbrellas fail, and shoes you can walk ten miles in, because the tube gets unpleasant on the hot days.',
    body: [
      'The mistake visitors make is packing for a Mediterranean summer. A 22.3C average high with a 13.7C average low means the evening after a warm day genuinely cools down, and a Thames cruise at 20:00 on an August evening is noticeably colder than the same spot at 15:00. A light layer you can carry is more useful than another t-shirt.',
      'St Paul\'s Cathedral and Westminster Abbey are working churches and ask visitors to dress respectfully, which in practice means covering shoulders inside. It is a much lighter requirement than in southern Europe, but it is worth knowing before you queue.',
    ],
    list: [
      'A packable waterproof shell rather than an umbrella, for the ten wet days',
      'One warm layer for evenings, which fall to about 13.7C',
      'Shoes rated for ten miles a day on hard pavement',
      'A refillable bottle, tap water is free and drinkable everywhere',
      'A contactless card or phone, which is the cheapest way to pay for the tube and buses',
    ],
  },

  faqs: [
    {
      question: 'How hot does London actually get in August?',
      answer: 'The ten-year mean high for August is 22.3C and the mean low is 13.7C, measured over 2015 to 2024 for central London. That makes it the warmest month by daytime average, marginally behind July at 22.6C. Individual days above 30C occur most summers, and on those days the deep Underground lines are the most uncomfortable place in the city because most have no air conditioning.',
    },
    {
      question: 'Can you go inside Buckingham Palace in August?',
      answer: 'Yes. The State Rooms open for a summer season each year and the 2026 season runs 9 July to 27 September, so the whole of August is inside it. Entry is by timed ticket. For the rest of the year the Palace opens only on selected dates for a limited number of guided tours, so August and September are the realistic window.',
    },
    {
      question: 'Does Changing the Guard happen every day in August?',
      answer: 'No, and this is the single most repeated error about London. The ceremony at Buckingham Palace takes place on Mondays, Wednesdays and Fridays, not daily. The schedule is published about a month ahead by the Household Division and the ceremony can be cancelled at short notice in bad weather, so check the specific date you plan to attend.',
    },
    {
      question: 'Is Notting Hill Carnival worth planning around?',
      answer: 'Yes, in both directions. It runs on Sunday 30 and Monday 31 August 2026 and is the largest street festival in Europe, so it is worth attending. It also closes roads across W10 and W11 for two days and puts Notting Hill Gate, Ladbroke Grove and Westbourne Park stations on restricted operation, so if you are not going, plan to be elsewhere in the city those two days.',
    },
    {
      question: 'When does it get dark in London in August?',
      answer: 'Sunset is 20:23 on 15 August, with useful light for around 40 minutes after that. The month moves fast: sunset is 20:48 on 1 August and 19:49 on the 31st, and London loses 1 hour 47 minutes of daylight across the month. An evening tour booked for the first week is a daylight tour; the same slot at the end of the month is not.',
    },
    {
      question: 'Is August a bad month to visit London because of crowds?',
      answer: 'It is the busiest and most expensive month of the ten covered here, but London absorbs volume better than most European capitals because the attractions are spread across a large city rather than concentrated in one old centre. The practical fix is timing rather than avoidance: book timed entries for the first slot of the day and keep the middle of the afternoon for walking.',
    },
  ],
};

export const september: MonthContent = {
  slug: 'london-in-september',
  month: 'September',
  monthKey: 'september',
  yearOffset: 0,
  prevMonth: 'August',
  prevPath: '/london-in-august',
  nextMonth: 'October',
  nextPath: '/london-in-october',
  metaDescription:
    'London in September: 19.7C highs, Open House on 12 to 20 September and the last three weeks of the Buckingham Palace summer season, which ends on 27 September. Weather table, closures and ten ranked tours.',
  heroCapsule:
    'September is the best-balanced month in the London year. Average highs of 19.7C are ideal walking weather, the school holidays end in the first week, and the city still has 12 hours 40 minutes of daylight mid-month. The deadline that shapes the month is 27 September, when the Buckingham Palace State Rooms close until next summer.',

  verdict: {
    capsule:
      'September is the strongest all-round month covered in this guide. Highs of 19.7C, sunset at 19:15 on the 15th and a sharp drop in family crowds once schools return give you August access without August pressure. The catch is a hard deadline on 27 September and a rise in rainfall to 64mm.',
    body: [
      'There is a clean before-and-after in a London September. In the first week the city is still running on holiday volume. From roughly the second week, when English schools return, the queues at the family attractions shorten noticeably and midweek hotel rates come off their summer peak. If you have any flexibility on dates, the middle two weeks of September are the best value in the warm half of the year.',
      'The weather holds up well. A 19.7C mean high is the temperature at which walking London stops being a chore and becomes the best way to see it, and the evenings are still long enough to do something after dinner. What changes is the rain: 64mm across eleven wet days is more than August, and the character shifts from short summer bursts towards longer frontal systems.',
      'The date to have in your head is Sunday 27 September, the last day of the Buckingham Palace State Rooms season. After that the Palace closes to general visiting until the following summer, and the 2027 season dates had not been published when this page was written. If the Palace matters to you and your trip is in the second half of the month, book it for the first days you are here rather than leaving it to the end.',
    ],
  },

  weather: {
    capsule:
      'Expect 19.7C average highs and 11.5C lows, 64mm of rain across eleven wet days and sunrise at 06:35 with sunset at 19:15 on the 15th. September loses 1 hour 53 minutes of daylight between the 1st and the 30th, the fastest fall of any month in the year.',
    body: [
      'September is the month London slides out of summer, and the daylight numbers show it more clearly than the temperature does. You start the month with 13 hours 34 minutes of daylight and finish it with 11 hours 41 minutes. That is a loss of nearly two hours in thirty days, and it is the steepest decline in the calendar. Anything you want to do outdoors after work hours is easier in the first fortnight than the second.',
      'Rainfall rises to 64mm from August\'s 57mm and the pattern changes with it. Summer showers are convective and short. September rain increasingly arrives as an Atlantic front, which means several hours of steady drizzle rather than twenty minutes of downpour. That is the reason a full indoor option belongs in every September itinerary, even though eleven wet days out of thirty still leaves you two dry days in three.',
      'Evening temperatures fall faster than daytime ones. The 11.5C mean low is four degrees down on July and it is felt most on the water, where the wind off the Thames adds to it. A river cruise at 19:00 in late September wants a proper jacket, not the light layer that was enough in August.',
    ],
  },

  crowds: {
    capsule:
      'Crowds fall sharply once English schools return in the first week. The two things still worth booking well ahead are the Buckingham Palace State Rooms, because the season ends on 27 September and the last slots go early, and any Open House building with a ballot, which fills within days of release.',
    body: [
      'The family attractions are the ones that feel the change most. The Warner Bros Studio Tour, SEA LIFE, Madame Tussauds and London Zoo all run at holiday capacity into the first week and then noticeably ease. If your trip is flexible within the month, the second and third weeks are the quietest you will find until January.',
      'Open House London runs 12 to 20 September and is the best free thing to do in the city all year. Several hundred buildings that are normally closed to the public open their doors, and a proportion of them are working offices, private houses and industrial sites you cannot see in any other month. The highest-demand buildings run a ballot or a booking system that opens ahead of the festival and fills quickly. The rest are walk-in and queue.',
      'Business travel returns in September, which means midweek hotel rates in the City and Canary Wharf recover from about the second week even as leisure demand falls. If you are booking on price, a Friday to Sunday stay in September is materially cheaper than a Tuesday to Thursday one, which is the reverse of the August pattern.',
    ],
  },

  tours: {
    capsule:
      'The September ten is built around a deadline and a shift in the light. Buckingham Palace stays at the top only until the 27th. Architecture and heritage move up because Open House puts the city\'s buildings in focus. Long day trips move up while there is still enough daylight to do them properly.',
    picks: [
      {
        slug: 'buckingham-palace-tickets',
        bestFor: 'Booking before the season closes on 27 September',
        why: 'Holds first place for the same reason as August, but with a deadline attached. The State Rooms close on Sunday 27 September and do not reopen until the following summer. The last week of the season is the busiest of it, so take an early-September slot if you can.',
      },
      {
        slug: 'westminster-abbey-tickets',
        bestFor: 'Open House month, if you care about buildings',
        why: 'Moved up from fifth on review volume. September is the month London puts its architecture on display, and the Abbey is the single densest piece of building history in the city: nine hundred years of coronations, and the Cosmati pavement, in one visit.',
      },
      {
        slug: 'st-pauls-cathedral-tickets',
        bestFor: 'Climbing the dome in comfortable temperatures',
        why: 'The dome climb is 528 steps and there is no lift for the upper galleries, which makes ambient temperature the deciding factor. At a 19.7C mean high September is close to ideal for it; in August the same climb is genuinely hard work.',
      },
      {
        slug: 'tower-of-london-tickets',
        bestFor: 'A full site visit with time to spare',
        why: 'September is the last comfortable month for the Tower. It is still on summer hours through October, the outdoor sections of the site are pleasant at 19.7C rather than baking, and the summer crowd has gone. From November the winter hours make an afternoon visit impractical.',
      },
      {
        slug: 'thames-sightseeing-cruise',
        bestFor: 'Late-afternoon light on the river',
        why: 'Still a daylight product in September but the window narrows fast. Sunset is 19:46 on the 1st and 18:40 on the 30th, so a cruise that is bathed in evening light at the start of the month is dusk by the end of it.',
      },
      {
        slug: 'windsor-stonehenge-bath-tour',
        bestFor: 'The last comfortable month for an eleven-hour day trip',
        why: 'Ranked up hard for the season. An eleven-hour coach day needs daylight at both ends, and September still has between eleven and thirteen and a half hours of it. The same itinerary in December runs its last two hours in the dark.',
      },
      {
        slug: 'london-eye-tickets',
        bestFor: 'Clear autumn air and a 19:15 sunset',
        why: 'September often gives the sharpest long-range visibility of the warm half of the year, as the summer haze clears and before the winter cloud sets in. A slot around 18:45 mid-month puts you at the top close to sunset.',
      },
      {
        slug: 'borough-market-food-tour',
        bestFor: 'British produce at its annual best',
        why: 'September is the harvest month, and Borough is one of the few places in central London where that is visible rather than theoretical. It stays high in the ranking through autumn but this is the month the stalls are at their fullest.',
      },
      {
        slug: 'london-photography-tour',
        bestFor: 'Softer light than August, longer than October',
        why: 'The sun tracks lower in September, which gives longer shadows and warmer colour for more of the day rather than only at the edges. It is a better month for photographing London than August, when the midday light is flat and hard.',
      },
      {
        slug: 'harry-potter-studio-tour',
        bestFor: 'The wet day, now more likely than in August',
        why: 'Drops from sixth in August to tenth here, purely because September is the first month you can reasonably do most things outdoors and should. It moves back up sharply in November when the Hogwarts in the Snow dressing goes in.',
      },
    ],
    note:
      'The London Zoo and bike tours both drop out of the September ten. Neither is a bad September choice, but both are pure fair-weather products and the wet-day count rises from ten to eleven while daylight falls by nearly two hours. The Churchill War Rooms and the two Dungeon-style indoor attractions stay out for one more month and return in October.',
    methodNote:
      'September is ranked around one hard deadline and one soft trend. Buckingham Palace holds first place only because the season ends on the 27th. Westminster Abbey and St Paul\'s move up for Open House and for the dome climb being comfortable at 19.7C. Long day trips move up while the daylight still supports them.',
  },

  events: {
    capsule:
      'September has one genuinely unusual event: Open House, 12 to 20 September, when several hundred normally-closed London buildings open free to the public. The other date that shapes the month is 27 September, the last day of the Buckingham Palace State Rooms season.',
    rows: [
      { event: 'Open House Festival', dates: 'Saturday 12 to Sunday 20 September', where: 'Several hundred buildings citywide', free: 'Free, some ballot or booking' },
      { event: 'Last day of Buckingham Palace State Rooms', dates: 'Sunday 27 September', where: 'Buckingham Palace, SW1', free: 'Ticketed' },
      { event: 'English schools return', dates: 'First week of September', where: 'Citywide, family attractions quieten', free: 'Not applicable' },
      { event: 'Changing the Guard', dates: 'Mondays, Wednesdays and Fridays', where: 'Buckingham Palace forecourt', free: 'Free to watch' },
    ],
    body: [
      'Open House is the reason to prefer September over May if you have to choose between the two. For nine days a large slice of London\'s building stock opens for free, including working government buildings, private homes by well-known architects, engineering infrastructure and City livery halls. The programme is published in the weeks before the festival. The highest-demand entries run a ballot; most do not and simply queue.',
      'The Buckingham Palace deadline is worth repeating because it is the one thing on this page that cannot be rescheduled. Sunday 27 September is the last day of the 2026 State Rooms season. After that, the Palace opens only on selected dates for a limited number of ticketed guided tours, and the 2027 summer season dates had not been announced when this was written.',
      'Changing the Guard continues on its Monday, Wednesday and Friday pattern through September. It is worth noting that the ceremony is more reliably held in September than in the depths of winter, since it is weather-dependent and can be cancelled at short notice, but the three-day-a-week schedule is the same year round.',
    ],
  },

  closures: {
    capsule:
      'The defining closure of September is at the end of it. The Buckingham Palace State Rooms shut on 27 September and stay shut for the next nine months. Everything else in our list runs normally, and the Tower of London is still on its longer summer hours until the end of October.',
    rows: [
      { site: 'Buckingham Palace State Rooms', closed: 'From 28 September', note: 'The 2026 summer season ran 9 July to 27 September. From 28 September the Palace opens only on selected dates for a limited number of guided tours.' },
      { site: 'Changing the Guard', closed: 'Tuesdays, Thursdays, Saturdays and Sundays', note: 'Monday, Wednesday and Friday only, and subject to cancellation in bad weather. It is not a daily ceremony in any month.' },
      { site: 'Open House buildings', closed: 'Outside 12 to 20 September', note: 'Not a closure so much as the opposite. Most of these buildings are shut to the public for the other 356 days of the year.' },
      { site: 'Houses of Parliament', closed: 'Recess then sitting', note: 'Parliament returns from summer recess in September and typically breaks again for the party conference season. Tour availability follows the sitting calendar.' },
    ],
    body: [
      'One closure in September has a knock-on effect on the rest of this guide. Because the Palace shuts on the 27th, it does not appear in the ranked ten on any month page from October through to May. That is not an oversight and it is not an availability glitch: it is a nine-month closure and we would rather name it than quietly drop the product.',
      'We have deliberately not stated when the State Rooms reopen in 2027. The Royal Collection Trust had not published the 2027 season dates when this page was written, and the pattern in recent years has been a July to September window announced a few months ahead. Treat that as a pattern, not a promise, and check the official site before you build a trip around it.',
      'The Tower of London remains on its longer summer opening through September and October, returning to its winter pattern from November and back to summer hours on 1 March. That matters most for a late-afternoon arrival: in September you can still start a Tower visit after 15:00 and see the site properly.',
    ],
  },

  packing: {
    capsule:
      'Pack for 19.7C days that end at 11.5C, and for eleven wet days spread across thirty. September is the first month where a proper jacket beats a light layer after dark, and the first where a full-day indoor option needs to exist in your plan rather than being optional.',
    body: [
      'The temperature spread is what catches people out. An eight-degree gap between the average high and the average low means a comfortable lunchtime and a cold 21:00, and the difference is amplified anywhere near the river. If you have booked an evening cruise or a late walking tour, take more than you think you need.',
      'Footwear matters more in September than August because the rain lasts longer when it comes. London pavements do not drain quickly and the parks turn soft after a frontal system passes. Something water-resistant rather than mesh is the practical choice for a nine-day trip.',
    ],
    list: [
      'A proper jacket for evenings falling to about 11.5C',
      'Water-resistant footwear, September rain is longer-lasting than August rain',
      'A compact umbrella, which works in September in a way it does not in a windy August',
      'A booked indoor option for at least one day in three',
      'Layers you can shed, because 19.7C in the sun feels considerably warmer',
    ],
  },

  faqs: [
    {
      question: 'Is September a good time to visit London?',
      answer: 'It is the best-balanced month in this guide. Average highs of 19.7C are close to ideal for walking, English schools return in the first week so family attractions quieten noticeably, and mid-month still gives 12 hours 40 minutes of daylight. The two costs are 64mm of rain across eleven wet days and the Buckingham Palace State Rooms closing on 27 September.',
    },
    {
      question: 'When does the Buckingham Palace State Rooms season end?',
      answer: 'The 2026 season ends on Sunday 27 September. From 28 September the Palace opens only on selected dates for a limited number of ticketed guided tours, and general State Rooms visiting does not resume until the following summer. The 2027 season dates had not been published by the Royal Collection Trust when this page was written.',
    },
    {
      question: 'What is Open House London and when is it?',
      answer: 'Open House is a nine-day festival, running 12 to 20 September 2026, in which several hundred London buildings that are normally closed open free to the public. It covers working government buildings, private architect-designed houses, engineering infrastructure and City livery halls. Most venues are walk-in and queue; the highest-demand ones run a ballot or advance booking that fills quickly.',
    },
    {
      question: 'How much daylight does London lose in September?',
      answer: 'One hour 53 minutes, the fastest fall of any month in the year. Daylight runs 13 hours 34 minutes on 1 September and 11 hours 41 minutes on the 30th, with sunset moving from 19:46 to 18:40. That is why an evening river cruise or walking tour feels like a different product at the end of the month than at the start.',
    },
    {
      question: 'Is London cheaper in September than August?',
      answer: 'Leisure rates fall from about the second week as the school holidays end, but business travel returns at the same time, so the saving shows up mainly at weekends. A Friday to Sunday stay in mid-September is materially cheaper than the equivalent in August; a Tuesday to Thursday stay in the City may not be. Tour prices themselves barely move by month.',
    },
    {
      question: 'Does it rain a lot in London in September?',
      answer: 'It rains on eleven days out of thirty on the ten-year mean, totalling 64mm, which is more than August but well short of October\'s 77mm. The change worth planning for is the character rather than the quantity: September rain increasingly arrives as multi-hour Atlantic frontal drizzle rather than the short heavy summer bursts of July and August.',
    },
  ],
};

export const october: MonthContent = {
  slug: 'london-in-october',
  month: 'October',
  monthKey: 'october',
  yearOffset: 0,
  prevMonth: 'September',
  prevPath: '/london-in-september',
  nextMonth: 'November',
  nextPath: '/london-in-november',
  metaDescription:
    'London in October: the wettest month at 77mm, and the clocks go back on 25 October, cutting evening daylight by 1 hour 2 minutes overnight. Half-term, Diwali, indoor tour rankings and what is closed.',
  heroCapsule:
    'October is the wettest month in London, averaging 77mm of rain across twelve wet days, and the month the evenings collapse. The clocks go back on Sunday 25 October and sunset moves from 17:48 to 16:46 overnight. Plan indoor and early, and October is one of the most atmospheric months of the year.',

  verdict: {
    capsule:
      'October works if you accept that it is an indoor month with outdoor moments, not the other way round. It is the wettest month of the year at 77mm and the clock change on 25 October takes an hour off your evenings in a single night. In exchange, crowds and prices fall away from their summer levels.',
    body: [
      'October is two different months either side of one Sunday. Until the 24th you still have usable evenings, with sunset around 17:50 and average highs holding near 15.5C. From the 25th, when the clocks go back, sunset is before 16:50 and falls to 16:35 by the 31st. Nothing about the weather changes on that date, but everything about how you can schedule a day does.',
      'The rainfall figure is the other thing to plan around. At 77mm across twelve wet days, October is the wettest month in the London year on the ten-year mean, comfortably ahead of November and December at 66mm each. That is not a reason to stay away, but it is a reason to build the itinerary around indoor anchors and treat outdoor plans as the flexible part.',
      'What you get in return is the best atmosphere of the year. London does autumn genuinely well: Hyde Park, Regents Park and Greenwich turn, the light goes long and low, and the evening walking tours stop being a novelty and start being the right way to see the city. This is the first month in this guide when a ghost walk at 19:00 is a genuinely dark walk.',
    ],
  },

  weather: {
    capsule:
      'October averages 15.5C highs and 8.8C lows with 77mm of rain over twelve wet days, the wettest month of the year. Sunset is 18:07 on the 15th, but the clocks go back on 25 October and the evening loses 1 hour 2 minutes overnight, from 17:48 on the 24th to 16:46 on the 25th.',
    body: [
      'The clock change is the single most useful scheduling fact on this page. British Summer Time ends at 02:00 on Sunday 25 October 2026. Sunset on Saturday 24 October is 17:48; on Sunday 25 October it is 16:46. You do not lose daylight, you move it to the morning, but for a visitor the practical effect is that anything you wanted to do outdoors after work-time in the last week of October has to happen an hour earlier than you planned.',
      'Rainfall at 77mm is the annual peak and it is 20mm above the October figure most people expect. Twelve wet days out of thirty-one means roughly two days in five see a millimetre or more. The saving grace is that London rain is rarely heavy: the total falls across many hours rather than a few, so a waterproof coat usually beats cancelling.',
      'Temperature falls steadily rather than sharply. The 15.5C mean high is still comfortable for walking in daylight, but the 8.8C mean low is the point at which sitting outside stops being pleasant. Open-deck cruises and open-top buses are still running and still perfectly enjoyable in the middle of the day; they are not enjoyable at 18:00.',
    ],
  },

  crowds: {
    capsule:
      'October is quiet except for one week. The October half-term break fills the family attractions to summer levels for seven days, and the Halloween programming at the Dungeon and the Tower pushes demand higher still. Outside half-term this is one of the easiest months to get a good timed slot.',
    body: [
      'English school half-term falls in late October and is the busiest week of the autumn at the family attractions. Exact dates vary between local authorities and between state and independent schools, which is why we do not print a single date range here. Check the specific week before you book if you want either to avoid it or to travel within it.',
      'Halloween drives real demand in London, and it lands on a Saturday in 2026, which concentrates it further. The London Dungeon, the ghost walks and the Jack the Ripper tour all run at their annual peak in the last ten days of the month, and the evening slots go first. If a dark-themed evening is part of the plan, this is the one thing in October worth booking a fortnight out.',
      'Everything else eases. Hotel rates in zone 1 fall from their summer level, the Tower and St Paul\'s are noticeably calmer on a weekday than in September, and the free national museums are pleasant again. If you can travel in the first or second week of October, you get the autumn atmosphere without the half-term volume.',
    ],
  },

  tours: {
    capsule:
      'The October ten is rebuilt around weather and darkness. This is the wettest month of the year, so the indoor attractions that sat out August and September come back at the top. The evening walks move up because 16:46 sunsets from the 25th make them genuinely dark for the first time.',
    picks: [
      {
        slug: 'london-dungeon-tickets',
        bestFor: 'Halloween month, entirely indoors',
        why: 'The clearest seasonal re-rank on this page: up from outside the ten in August to first here. It is indoors in the wettest month of the year, it is the city\'s dedicated dark-history attraction in the month London leans into that, and it sits on the South Bank a few minutes from three other indoor options.',
      },
      {
        slug: 'madame-tussauds-tickets',
        bestFor: 'A guaranteed dry two and a half hours',
        why: 'Twenty-three thousand reviews and a completely weatherproof format. In August we ranked it out because using a dry summer day indoors is a waste; in a month with twelve wet days it is exactly the right hedge to have booked.',
      },
      {
        slug: 'harry-potter-studio-tour',
        bestFor: 'Filling a whole wet day, and half-term',
        why: 'Moves back up from tenth in September. A full indoor day at Leavesden is the single best answer to a 77mm month, and half-term demand makes it the most likely thing in this list to sell out. Book it before you travel.',
      },
      {
        slug: 'tower-of-london-tickets',
        bestFor: 'The last month of summer opening hours',
        why: 'October is the last month of the Tower\'s longer summer schedule before the winter pattern takes over in November. A large part of the visit is outdoors on the wharf and the walls, so aim for a dry morning and be aware the site is at its wettest underfoot in the wettest month of the year.',
      },
      {
        slug: 'london-ghost-tour',
        bestFor: 'The first month the dark actually helps',
        why: 'Rated 4.9, the highest in our London list, and ranked up hard for October. From the 25th, sunset is before 16:50, so a 19:00 walk is properly dark rather than merely dim. In June the same tour finishes in broad daylight.',
      },
      {
        slug: 'jack-the-ripper-tour',
        bestFor: 'Whitechapel at £15, in the right conditions',
        why: 'The cheapest thing in our whole London list and the one most improved by the season. The Whitechapel streets work in October in a way they simply do not in July, when the walk ends under a bright evening sky.',
      },
      {
        slug: 'churchill-war-rooms-tour',
        bestFor: 'Being underground while it rains',
        why: 'Returns to the ranking after two months out. The Cabinet War Rooms are below ground and entirely weather-independent, which is worth more in the wettest month than in any other. Note that GetYourGuide lists this experience as not suitable for wheelchair users.',
      },
      {
        slug: 'sea-life-london-tickets',
        bestFor: 'Half-term with young children, indoors',
        why: 'Ranked in for the half-term week specifically. It is indoor, it is a manageable ninety minutes to two hours for small children, and it is on the South Bank next to the Dungeon, so a wet day can be planned as a single walk-free block.',
      },
      {
        slug: 'natural-history-museum-tour',
        bestFor: 'A guided route through a free museum',
        why: 'Rated 4.9 from a small review base. The museum itself is free, so what you are buying is the guiding, and October is the month that trade-off makes the most sense: South Kensington in the rain is a much better place to be than most of London.',
      },
      {
        slug: 'thames-sightseeing-cruise',
        bestFor: 'Autumn colour along the river, before 16:00',
        why: 'Holds a place but with a hard time constraint. The Thames between Westminster and Greenwich in late-October light is one of the best sights in the city; after the clock change, that means a departure before about 15:30 rather than after work.',
      },
    ],
    note:
      'Buckingham Palace leaves the ranking here and does not return in this guide. The State Rooms closed on 27 September and the 2027 season dates were not published when this was written, so from October onwards it appears only in the closures table. The bike, photography and open-top bus products also drop out: at twelve wet days and a 16:46 sunset from the 25th, none of them can be recommended honestly as a top-ten October choice.',
    methodNote:
      'October is ranked on two hard numbers: 77mm of rain, the wettest month of the year, and a sunset that moves from 17:48 to 16:46 overnight on the 25th. Four indoor attractions that were ranked out in August come back at the top, and the two evening walks move up because the month finally makes them dark.',
  },

  events: {
    capsule:
      'The date that matters most in October is not an event at all: the clocks go back on Sunday 25 October and evening daylight drops by 1 hour 2 minutes overnight. Around it sit Diwali, the school half-term week and Halloween on Saturday 31 October.',
    rows: [
      { event: 'Clocks go back, British Summer Time ends', dates: 'Sunday 25 October, 02:00', where: 'Nationwide', free: 'Not applicable' },
      { event: 'Diwali', dates: 'Late October, celebrations citywide', where: 'Trafalgar Square and across London', free: 'Free to attend' },
      { event: 'School half-term', dates: 'Late October, exact week varies by authority', where: 'Family attractions at peak', free: 'Not applicable' },
      { event: 'Halloween', dates: 'Saturday 31 October', where: 'Citywide, strongest at the South Bank attractions', free: 'Mostly ticketed' },
      { event: 'Changing the Guard', dates: 'Mondays, Wednesdays and Fridays', where: 'Buckingham Palace forecourt', free: 'Free to watch' },
    ],
    body: [
      'Take the clock change seriously when you plan the last week. Anything you had pencilled in for a 17:30 outdoor start needs to move to 16:00 or become an indoor plan. The single most common October mistake we see is a river cruise or an open-top bus booked for a late-afternoon slot in the final week and spent in the dark.',
      'Diwali is celebrated across London in late October with a large free public event in Trafalgar Square as its centre. The exact date moves each year with the lunar calendar and the Trafalgar Square event is usually held on the nearest weekend rather than the day itself, so check the Mayor of London listings for the current year rather than assuming a date.',
      'Halloween falls on a Saturday in 2026, which pushes the whole weekend rather than a single evening. The London Dungeon, the ghost walks and the Ripper tour are the products that feel it, and evening slots in the last week of the month are the first to sell. Nothing else in our list is materially affected.',
    ],
  },

  closures: {
    capsule:
      'Buckingham Palace is now shut for the season, having closed on 27 September, and stays shut through this guide. The Tower of London is on its final month of summer opening. The bigger practical change is the clock change on 25 October, which effectively closes the outdoor day at 16:46.',
    rows: [
      { site: 'Buckingham Palace State Rooms', closed: 'All month', note: 'The summer season ended on 27 September. Only a limited number of ticketed guided tours run on selected dates for the rest of the year.' },
      { site: 'Evening daylight', closed: 'From 16:46 on 25 October', note: 'Not a closure but it behaves like one. Sunset falls from 17:48 on 24 October to 16:46 on the 25th, and 16:35 by the 31st.' },
      { site: 'Tower of London summer hours', closed: 'End of October', note: 'The Tower runs longer summer hours through October and switches to its winter pattern from November. It returns to summer hours on 1 March.' },
      { site: 'Changing the Guard', closed: 'Tuesdays, Thursdays, Saturdays and Sundays', note: 'Monday, Wednesday and Friday only. Cancellation in heavy rain is more likely in October than in the summer months.' },
      { site: 'Open-air seasonal venues', closed: 'Transitioning', note: 'Outdoor summer bars, lidos and pop-ups wind down through October. The winter rinks and markets do not open until November.' },
    ],
    body: [
      'October sits in a genuine gap in London\'s calendar. The summer outdoor programme has finished and the Christmas programme has not started: the Somerset House ice rink opens on 11 November, Christmas at Kew from 13 November, and Hogwarts in the Snow at the Warner Bros Studio Tour from 14 November. If a winter-lit London is what you are picturing, this is the month before it.',
      'The Tower of London is in its last month of longer summer opening. From November it runs the winter pattern, and it does not return to summer hours until 1 March. In practice that means an October afternoon arrival still works and a December one does not, so if the Tower is on your list and your trip is late in the year, October is the better half of the choice.',
      'One thing we cannot tell you is the exact half-term week. English school holiday dates are set by individual local authorities and academy trusts rather than nationally, so there is no single correct date range to print. If avoiding or targeting half-term matters to your booking, check the relevant council\'s published term dates.',
    ],
  },

  packing: {
    capsule:
      'October is the month to bring proper waterproofs. At 77mm across twelve wet days it is the wettest month of the year, and after the clocks change on the 25th you will be walking in the dark from about 17:00. Waterproof shoes and something with a hood do more for an October trip than anything else you can pack.',
    body: [
      'A hood beats an umbrella in a London October. The rain often arrives with enough wind to make an umbrella a liability on an open river bank or a bridge, and both are places you will be. A coat that can handle several hours of steady drizzle is the single most useful item for this month.',
      'Feet are the other thing. Twelve wet days means the pavements rarely dry out completely and the parks stay soft. Mesh trainers are miserable by the second day. Something with a water-resistant upper, worn in before you travel, changes the experience of the month more than any other decision.',
    ],
    list: [
      'A waterproof coat with a hood, for the wettest month of the year',
      'Water-resistant shoes, worn in before the trip',
      'A small torch or your phone light for evening walking tours after the clock change',
      'A warm layer for the 8.8C average low',
      'At least two booked indoor attractions to fall back on',
    ],
  },

  faqs: [
    {
      question: 'When do the clocks go back in London in 2026?',
      answer: 'At 02:00 on Sunday 25 October 2026, when British Summer Time ends and clocks go back one hour to GMT. The practical effect is immediate: sunset is 17:48 on Saturday 24 October and 16:46 on Sunday 25 October, a drop of 1 hour 2 minutes overnight, falling further to 16:35 by 31 October.',
    },
    {
      question: 'Is October the wettest month in London?',
      answer: 'Yes. On the ten-year mean for 2015 to 2024, October averages 77mm of rain across twelve wet days, more than any other month. November and December both average 66mm and September 64mm. The rain is rarely heavy, though: the total falls across many hours rather than a few, so a good waterproof coat is usually a better response than cancelling a plan.',
    },
    {
      question: 'Is Buckingham Palace open in October?',
      answer: 'The State Rooms are not. The summer season ended on 27 September and does not resume until the following summer. A limited number of ticketed guided tours run on selected dates through the rest of the year, but general State Rooms visiting is closed. Changing the Guard continues outside the Palace on Mondays, Wednesdays and Fridays regardless.',
    },
    {
      question: 'What is there to do in London in the rain in October?',
      answer: 'The strongest wet-day options in our list are all indoors and all bookable: the Warner Bros Studio Tour fills an entire day, Madame Tussauds and the London Dungeon are two to three hours each on the same South Bank stretch as SEA LIFE, and the Churchill War Rooms are underground. London\'s national museums, including the Natural History Museum and the British Museum, are also free to enter in every month.',
    },
    {
      question: 'Are ghost tours better in October?',
      answer: 'Materially, yes, and it is a scheduling fact rather than a marketing one. From 25 October sunset is before 16:50, so a 19:00 ghost or Jack the Ripper walk takes place in genuine darkness. The same tour in June finishes in broad daylight with sunset after 21:15. October is also the peak demand month for these walks, so evening slots sell out.',
    },
    {
      question: 'Is October a cheap month to visit London?',
      answer: 'Cheaper than August and September outside the half-term week, but not as cheap as January or February. Hotel rates in zone 1 come off the summer peak from the start of the month. The exception is the half-term week and the Halloween weekend, when family attractions and dark-themed evening tours run at summer prices and summer capacity.',
    },
  ],
};

export const november: MonthContent = {
  slug: 'london-in-november',
  month: 'November',
  monthKey: 'november',
  yearOffset: 0,
  prevMonth: 'October',
  prevPath: '/london-in-october',
  nextMonth: 'December',
  nextPath: '/london-in-december',
  metaDescription:
    'London in November: 11C highs, 8 hours 53 minutes of daylight and sunset at 16:11. The month London\'s winter season opens, with the Somerset House rink from 11 November, Christmas at Kew from 13 November and Hogwarts in the Snow from 14 November.',
  heroCapsule:
    'November is the month London switches its winter lights on. Average highs fall to 11C, sunset is 16:11 on the 15th and daylight is down to 8 hours 53 minutes, but three dated winter attractions open in a single week: the Somerset House rink on 11 November, Christmas at Kew on the 13th and Hogwarts in the Snow on the 14th.',

  verdict: {
    capsule:
      'November splits at the second week. Before it, London is a dark, cheap, quiet city with 66mm of rain and 16:11 sunsets. After it, the winter season opens and the city becomes one of the best-lit places in Europe. If you are choosing dates within the month, the second half is worth far more than the first.',
    body: [
      'The first ten days of November are the quietest and cheapest of the autumn. Nothing seasonal has opened, the half-term crowds have gone, and hotel rates in zone 1 sit close to their annual floor. If your priority is seeing the permanent attractions without queueing for them, this is one of the best windows in the year.',
      'Then three things happen in four days. The Somerset House ice rink opens on 11 November and runs to 10 January. Christmas at Kew opens on 13 November. Hogwarts in the Snow at the Warner Bros Studio Tour opens on 14 November and runs to 17 January. From that point the city has a genuine winter offer, and the pricing follows it upwards.',
      'The weather is the honest cost. An 11C mean high with a 5.2C low is cold enough that outdoor time needs to be deliberate rather than incidental, and 8 hours 53 minutes of daylight mid-month means the useful day runs roughly 07:20 to 16:10. November rewards a tight, indoor-anchored itinerary and punishes a loose one.',
    ],
  },

  weather: {
    capsule:
      'November averages 11C highs and 5.2C lows with 66mm of rain across twelve wet days. Sunrise is 07:18 and sunset 16:11 on the 15th, giving 8 hours 53 minutes of daylight, and the month loses a further 1 hour 26 minutes between the 1st and the 30th.',
    body: [
      'The number that shapes a November day is 16:11. Sunset on the 15th is before quarter past four, and by the 30th it is 15:55. That is not a marginal difference from October, it is a different way of planning: anything you want to see in daylight has to be done inside a window that closes in the middle of the afternoon.',
      'Temperature is more manageable than the darkness suggests. An 11C mean high is cold rather than freezing, and frost in central London is uncommon in November because the urban heat island keeps the centre a degree or two above the surrounding country. What gets you is the combination of 5.2C evenings and wind, particularly on the river and in the open spaces around Westminster.',
      'Rainfall falls back from October\'s annual peak of 77mm to 66mm, but the wet-day count stays at twelve. In other words it rains about as often and less heavily. Fog and low cloud become a factor for the first time, which matters if you have booked a view: The Shard and the London Eye are both capable of selling you a slot inside a cloud in November.',
    ],
  },

  crowds: {
    capsule:
      'The first ten days are among the quietest of the year and the cheapest. From the second week, when the winter attractions open, weekend demand climbs steadily to the December peak. Book Hogwarts in the Snow and the Somerset House rink ahead; almost nothing else in November needs it.',
    body: [
      'If value is the priority, the first week and a half of November is the best trade in this guide outside January. Zone 1 hotel rates are at or near their annual floor, the permanent attractions are running at low occupancy on weekdays, and the queue at the Tower and St Paul\'s is short enough to walk straight in. The cost is that none of the seasonal London you may have come for exists yet.',
      'From 11 November, that inverts week by week. The Somerset House rink runs a session-based system that sells out at weekends. Hogwarts in the Snow is the busiest thing the Warner Bros Studio Tour does all year and its slots go weeks ahead across December, so a November booking is both cheaper and easier than a December one for the same dressed set.',
      'Remembrance Sunday falls on 8 November and Armistice Day on Wednesday 11 November. The Cenotaph service on the Sunday closes Whitehall and the surrounding streets for the morning, and Westminster is busy with attendees. It is a genuinely moving thing to witness, but if you had planned a Westminster walking tour for that morning, move it.',
    ],
  },

  tours: {
    capsule:
      'November is ranked around one date and one constraint. From 14 November the Warner Bros Studio Tour is dressed for Hogwarts in the Snow, which makes it the strongest single booking of the month. The constraint is 8 hours 53 minutes of daylight, which pushes every weather-exposed product out of the ten.',
    picks: [
      {
        slug: 'harry-potter-studio-tour',
        bestFor: 'Hogwarts in the Snow, from 14 November',
        why: 'First place on seasonal grounds rather than review count. From 14 November to 17 January the sets are dressed for Hogwarts in the Snow, which is the single biggest seasonal change to any product in our London list. It is also a full indoor day in a month with 8 hours 53 minutes of daylight.',
      },
      {
        slug: 'churchill-war-rooms-tour',
        bestFor: 'Remembrance month, entirely underground',
        why: 'Ranked up for November specifically. This is the month London marks Remembrance Sunday on the 8th and Armistice Day on the 11th, and the Cabinet War Rooms are the most directly relevant thing you can visit. Being below ground in a 66mm month is the practical bonus.',
      },
      {
        slug: 'the-shard-tickets',
        bestFor: 'A 16:11 sunset you can watch from indoors',
        why: 'Moved up for a specific reason: with sunset at 16:11, a 15:30 slot gives you daylight, sunset and the lit city inside a single ticket, which is impossible in June. Book a flexible or later date if you can, because November fog can put you inside cloud.',
      },
      {
        slug: 'madame-tussauds-tickets',
        bestFor: 'A dry two and a half hours in a twelve-wet-day month',
        why: 'Holds its October position. Nothing about it is seasonal, which is precisely the point in November: it is one of the few things in the list where the weather, the daylight and the date make no difference at all to the experience.',
      },
      {
        slug: 'thames-dinner-cruise',
        bestFor: 'The lit river, which only exists in winter',
        why: 'Ranked up sharply from the mid-table. A dinner cruise in July is a daylight cruise that happens to serve food. In November, with sunset at 16:11, the entire sailing is against a lit skyline, which is the version of the Thames most people picture.',
      },
      {
        slug: 'london-dungeon-tickets',
        bestFor: 'Indoors on the South Bank, past its Halloween peak',
        why: 'Drops from first in October to sixth here. The attraction is unchanged; what has gone is the Halloween demand peak, which means November is the month to do it without the queue and without the premium.',
      },
      {
        slug: 'london-ghost-tour',
        bestFor: 'Dark by 16:11, so any evening slot works',
        why: 'The highest-rated tour in our London list at 4.9. In October you needed a 19:00 start for it to be dark. In November it is dark from just after four, so a 17:30 walk works and you still have the evening afterwards.',
      },
      {
        slug: 'sea-life-london-tickets',
        bestFor: 'Younger children, indoors, ninety minutes',
        why: 'Stays in the ten as a short indoor block rather than a day out. At 11C highs and dark by 16:11, the ability to do something complete in ninety minutes and still have the afternoon is worth more in November than in August.',
      },
      {
        slug: 'natural-history-museum-tour',
        bestFor: 'South Kensington in the wet',
        why: 'Rated 4.9 from a small base. The building itself is one of the best places in London to spend a wet November afternoon, and the guided version adds the structure that a free wander through a busy museum often lacks.',
      },
      {
        slug: 'london-hidden-underground-tour',
        bestFor: 'Weatherproof and genuinely unusual',
        why: 'Ranked in for the season despite a small review base. An abandoned Underground station is entirely weather-independent and it is the kind of thing that fills a dark November afternoon better than another gallery. It runs 75 minutes and is not suitable for anyone who dislikes stairs.',
      },
    ],
    note:
      'Every open-air product leaves the November ten: the open-top bus, the bike tour, the photography walk, the daytime river cruise and London Zoo. That is not a comment on their quality, it is the arithmetic of 8 hours 53 minutes of daylight, 11C highs and twelve wet days. They come back in March and April. Buckingham Palace remains closed for the season and appears only in the closures table.',
    methodNote:
      'November ranks on the winter calendar rather than the weather alone. Hogwarts in the Snow from the 14th moves the Studio Tour to first. The Churchill War Rooms move up for Remembrance. The Shard and the dinner cruise move up because a 16:11 sunset makes the lit city available at a civilised hour. Five outdoor products drop out entirely.',
  },

  events: {
    capsule:
      'November is when London\'s winter season opens. Three dated attractions start within four days: the Somerset House ice rink on 11 November, Christmas at Kew on the 13th and Hogwarts in the Snow on the 14th. Before them sit Bonfire Night on the 5th and Remembrance Sunday on the 8th.',
    rows: [
      { event: 'Bonfire Night', dates: 'Thursday 5 November', where: 'Borough displays across London, dates vary locally', free: 'Some free, some ticketed' },
      { event: 'Remembrance Sunday', dates: 'Sunday 8 November', where: 'The Cenotaph, Whitehall', free: 'Free to attend' },
      { event: 'Armistice Day', dates: 'Wednesday 11 November', where: 'Citywide, two-minute silence at 11:00', free: 'Free' },
      { event: 'Somerset House ice rink opens', dates: 'From 11 November, runs to 10 January', where: 'Somerset House, Strand', free: 'Ticketed sessions' },
      { event: 'Christmas at Kew opens', dates: 'From 13 November', where: 'Royal Botanic Gardens, Kew', free: 'Ticketed' },
      { event: 'Hogwarts in the Snow opens', dates: 'From 14 November, runs to 17 January', where: 'Warner Bros Studio Tour, Leavesden', free: 'Ticketed' },
      { event: 'Changing the Guard', dates: 'Mondays, Wednesdays and Fridays', where: 'Buckingham Palace forecourt', free: 'Free to watch' },
    ],
    body: [
      'The Cenotaph service on Remembrance Sunday, 8 November, closes Whitehall and much of the surrounding area for the morning. If your itinerary has a Westminster walk or a Churchill War Rooms slot that morning, check before you travel: the area is accessible but crowded and heavily stewarded, and several approach roads are shut.',
      'Bonfire Night on 5 November is not a single citywide event. London\'s displays are run by individual boroughs and parks, many of them on the nearest weekend rather than the night itself, and most now ticket in advance. There is no reliable central listing published far ahead, so check the borough where you are staying rather than planning around a date.',
      'Of the three seasonal openings, Hogwarts in the Snow is the one that changes an existing product rather than adding a new one. The Warner Bros Studio Tour is in our ranked list all year; from 14 November to 17 January the Great Hall and the exterior sets are dressed for Christmas. Booking the same ticket inside that window is the single highest-value timing decision in this guide.',
    ],
  },

  closures: {
    capsule:
      'Nothing significant closes in November, which is unusual for the winter half. The Tower of London switches to winter hours, cutting the usable afternoon. Buckingham Palace remains closed for the season. The real constraint is daylight: the outdoor day effectively ends at 16:11 mid-month and 15:55 by the 30th.',
    rows: [
      { site: 'Buckingham Palace State Rooms', closed: 'All month', note: 'Closed since 27 September. Only selected-date guided tours run. The 2027 summer season dates had not been published when this was written.' },
      { site: 'Tower of London', closed: 'Winter hours', note: 'The Tower switches from summer to winter opening from November and returns to summer hours on 1 March. A late-afternoon arrival no longer works.' },
      { site: 'Whitehall and the Cenotaph area', closed: 'Morning of Sunday 8 November', note: 'Remembrance Sunday. Road closures and heavy stewarding across Whitehall and the approaches to Westminster.' },
      { site: 'Changing the Guard', closed: 'Tuesdays, Thursdays, Saturdays and Sundays', note: 'Monday, Wednesday and Friday only. Cancellation risk rises in November weather.' },
      { site: 'Outdoor summer venues', closed: 'All month', note: 'The lidos, rooftop bars and open-air pop-ups of the summer programme are shut. The winter rinks and markets replace them from the second week.' },
    ],
    body: [
      'The Tower of London moving to winter hours is the change most likely to catch out an itinerary built in the summer. From November the site closes earlier, which in a month where the sun sets at 16:11 means the Tower is best treated as a morning visit. It returns to its longer summer schedule on 1 March.',
      'Something we could not verify, and therefore do not print, is the Hyde Park Winter Wonderland schedule for this winter. The sources we checked disagreed and none of them was the official operator, so rather than publish a date that might send you across London for nothing, we have left it out. Check the official site directly before planning around it.',
      'For the same reason we give the Somerset House rink dates as 11 November to 10 January and Hogwarts in the Snow as 14 November to 17 January, and nothing beyond that. We do not state 2027 to 2028 dates for either, or the 2027 dates for Christmas at Kew, because those had not been published when this page was written.',
    ],
  },

  packing: {
    capsule:
      'November needs a proper winter coat rather than an autumn jacket. Average highs are 11C, lows 5.2C, and you will be outdoors in the dark from about 16:15. Twelve wet days means waterproof still matters, but warmth is now the first requirement rather than the second.',
    body: [
      'The specific November problem is standing still in the cold. Watching Changing the Guard, queueing outside an attraction or riding an ice rink session all involve being stationary at 5C to 11C, which is a different experience from walking at the same temperature. Gloves and a hat make far more difference in November than the temperature figure alone suggests.',
      'Fog and low cloud are worth planning for if you have booked a view. The Shard and the London Eye both sell timed slots, and November is the first month where a booked slot can genuinely be spent inside cloud. Where the operator allows a flexible or open-dated ticket, that is the November version to buy.',
    ],
    list: [
      'A proper winter coat, not an autumn jacket, for 5.2C evenings',
      'Gloves and a hat, mainly for standing still rather than walking',
      'Waterproof outer layer, twelve wet days is the same count as October',
      'A power bank, because cold drains phone batteries and you will use maps in the dark',
      'A flexible or open-dated view ticket if you can get one, for fog',
    ],
  },

  faqs: [
    {
      question: 'When do London\'s Christmas attractions open?',
      answer: 'Three of the biggest open within four days of each other in November. The Somerset House ice rink opens on 11 November and runs to 10 January. Christmas at Kew opens on 13 November. Hogwarts in the Snow at the Warner Bros Studio Tour opens on 14 November and runs to 17 January. Nothing seasonal is open in the first ten days of the month.',
    },
    {
      question: 'How dark is it in London in November?',
      answer: 'Very. Sunset is 16:11 on 15 November and 15:55 by the 30th, giving 8 hours 53 minutes of daylight mid-month. The practical daylight window is roughly 07:20 to 16:10, so an itinerary that assumes an afternoon of sightseeing after a late lunch does not work. Evening walking tours, by contrast, are easy to schedule because it is dark from just after four.',
    },
    {
      question: 'Is November a cheap month to visit London?',
      answer: 'The first ten days are among the cheapest of the year, close to the January floor, because the autumn crowds have gone and no seasonal attraction has opened yet. From the second week, when the winter season starts, weekend rates climb steadily towards the December peak. Splitting the month at around the 10th is the single most useful pricing insight for it.',
    },
    {
      question: 'What happens in London on Remembrance Sunday?',
      answer: 'The national service of remembrance takes place at the Cenotaph on Whitehall on Sunday 8 November 2026, with the two-minute silence at 11:00. Whitehall and several approach roads close for the morning and the area is heavily stewarded. Armistice Day itself falls on Wednesday 11 November, when the silence is observed across the city.',
    },
    {
      question: 'Is the Tower of London worth visiting in November?',
      answer: 'Yes, but go in the morning. The Tower switches to winter opening hours from November and does not return to its longer summer schedule until 1 March, and with sunset at 16:11 an afternoon arrival leaves too little time. The compensation is that November is one of the quietest months at the Tower, so the Crown Jewels queue is short.',
    },
    {
      question: 'Does it snow in London in November?',
      answer: 'Rarely, and it almost never settles. The ten-year mean low for November is 5.2C, which is well above freezing, and central London runs a degree or two warmer than the surrounding countryside because of the urban heat island. What you should plan for is rain, at 66mm across twelve wet days, and fog, which can obscure the view from The Shard or the London Eye.',
    },
  ],
};

export const december: MonthContent = {
  slug: 'london-in-december',
  month: 'December',
  monthKey: 'december',
  yearOffset: 0,
  prevMonth: 'November',
  prevPath: '/london-in-november',
  nextMonth: 'January',
  nextPath: '/london-in-january',
  metaDescription:
    'London in December: 7 hours 52 minutes of daylight, sunset at 15:51, and a total transport shutdown on 25 December with no Tube, no buses and no National Rail. The Tower of London closes 24 to 26 December. Ten ranked tours.',
  heroCapsule:
    'December has the shortest days of the year in London, 7 hours 52 minutes on the 15th with sunset at 15:51. The one fact that matters more than any other: on 25 December there is no Underground, no bus and no National Rail service anywhere in London. Plan Christmas Day on foot or not at all.',

  verdict: {
    capsule:
      'December is the most atmospheric month to visit London and the most logistically constrained. You get 7 hours 52 minutes of daylight, the full winter lighting programme and a genuinely festive city. You also get a complete transport shutdown on 25 December and a three-day closure at the Tower of London.',
    body: [
      'Nothing in this guide is as useful to know in advance as the 25 December shutdown. On Christmas Day there is no Underground service, no bus service and no National Rail service anywhere in London. Not a reduced service, none. Taxis and private hire operate at premium rates and the roads are quiet, but if your hotel is not walking distance from where you want to be, you are not getting there cheaply.',
      'Set against that, December is when London is at its best-looking. Sunset at 15:51 means the lights are on for two thirds of your waking day, which sounds like a complaint and is actually the appeal. Regent Street, Covent Garden and the South Bank in the dark at 17:00 are the version of London that most people have in their heads.',
      'The month divides into three. Up to about the 18th it is busy but functional and reasonably priced midweek. From the 19th to the 24th it is the busiest shopping period of the year. From the 25th to the 31st the city empties of Londoners and fills with visitors, the attractions run reduced hours, and it becomes a strange, quiet, expensive week that some people love.',
    ],
  },

  weather: {
    capsule:
      'December averages 9.2C highs and 4.3C lows with 66mm of rain across twelve wet days. Sunset is 15:51 on the 15th and daylight is 7 hours 52 minutes, the shortest of the year. The shortest day is 21 December at 7 hours 50 minutes, with sunset at 15:53.',
    body: [
      'The daylight barely moves in December, which is the one merciful thing about it. London loses just 17 minutes across the whole month, compared with 1 hour 54 minutes in October. The floor is reached around the solstice on 21 December, and by the 31st sunset has already crept back to 16:00. Whatever date you come, expect a usable outdoor window of roughly 08:00 to 15:50.',
      'The temperature is milder than the darkness implies. A 9.2C mean high and 4.3C mean low make December warmer on average than January or February, largely because the Atlantic has not yet given up its summer heat. Settled snow in central London in December is uncommon; persistent grey and 66mm of rain across twelve days is the realistic expectation.',
      'The practical effect of the light is on view tickets. A slot at The Shard or the London Eye booked for 15:15 gives you daylight, sunset and the fully lit city inside a single visit, which is genuinely the best value either offers all year. The same booking at 11:00 gives you a grey view of a grey city.',
    ],
  },

  crowds: {
    capsule:
      'December has three distinct phases. To about the 18th, busy but manageable. The 19th to the 24th is the most crowded shopping week of the year in the West End. From the 25th the city empties of residents and the remaining crowd is concentrated into a handful of attractions on reduced hours.',
    body: [
      'Book everything for the last two weeks of December, and book it now rather than on arrival. Attraction slots between Boxing Day and New Year are the tightest of the year outside August, because a compressed visitor population is chasing a reduced number of open time slots. This is the one period in this guide where turning up without a booking will materially damage a trip.',
      'The West End between the 19th and the 24th is worth avoiding unless shopping is the point. Oxford Street, Regent Street and Covent Garden run at genuine crush density on those days, and Oxford Circus station regularly goes to exit-only or non-stopping operation on the busiest afternoons. Bond Street, Green Park and Piccadilly Circus are easier alternatives.',
      'Pricing is bimodal. Midweek hotel rates in the City and Canary Wharf collapse from about the 18th as business travel stops entirely, sometimes to the lowest levels of the year. West End and South Bank leisure rates do the opposite. Staying in the City over Christmas and travelling in is often the cheapest way to do a festive London trip.',
    ],
  },

  tours: {
    capsule:
      'The December ten is built for 7 hours 52 minutes of daylight and a festive city. Indoor and dressed-for-Christmas products dominate, view tickets move up because a 15:15 slot buys you sunset, and the Tower of London stays in the list with its 24 to 26 December closure flagged.',
    picks: [
      {
        slug: 'harry-potter-studio-tour',
        bestFor: 'Hogwarts in the Snow, which runs to 17 January',
        why: 'Holds first place from November. The sets are dressed for Hogwarts in the Snow through to 17 January, and a full indoor day is exactly the right shape for a month with under eight hours of daylight. December slots are the most contested of the year, so book before you travel.',
      },
      {
        slug: 'thames-dinner-cruise',
        bestFor: 'The lit river at its best',
        why: 'Ranked second, up from sixteenth on review volume. With sunset at 15:51, an evening dinner cruise runs entirely against a lit skyline: Tower Bridge, the Shard and the South Bank all illuminated. This is the month the product is genuinely at its best rather than merely available.',
      },
      {
        slug: 'the-shard-tickets',
        bestFor: 'One ticket, daylight and night',
        why: 'A 15:15 slot on the 15th gives you a daylight view, the 15:51 sunset and the lit city, all inside one booking. No other month offers that at a civilised hour. The risk is cloud, so take a flexible ticket where the operator offers one.',
      },
      {
        slug: 'madame-tussauds-tickets',
        bestFor: 'School holidays, guaranteed indoors',
        why: 'Twenty-three thousand reviews and complete weather independence, in the school holidays. It holds its autumn position rather than moving: December does not improve it, but nothing about a 66mm, 7-hour-daylight month makes it worse either.',
      },
      {
        slug: 'tower-of-london-tickets',
        bestFor: 'A morning visit, and not between the 24th and the 26th',
        why: 'Kept in the ten with a warning attached rather than quietly dropped. The Tower is closed on 24, 25 and 26 December and is on winter hours for the rest of the month, so this is a morning booking in the first three weeks or nothing. It returns to summer hours on 1 March.',
      },
      {
        slug: 'london-dungeon-tickets',
        bestFor: 'A dark month for a dark attraction',
        why: 'Indoors, ninety minutes to two hours, and on the South Bank within a short walk of SEA LIFE and the London Eye, which makes it easy to build a single festive afternoon around. Check the operator\'s hours over Christmas week, which are reduced.',
      },
      {
        slug: 'london-afternoon-tea-experience',
        bestFor: 'The most seasonal thing on this list',
        why: 'Ranked in from near the bottom on review count, purely on seasonal fit. Afternoon tea is a winter-weighted experience anywhere, and in a month where the sun sets at 15:51 a warm ninety minutes indoors at 16:00 is precisely what the day needs.',
      },
      {
        slug: 'st-pauls-cathedral-tickets',
        bestFor: 'The cathedral in its own season',
        why: 'Moved up for December. St Paul\'s is a working cathedral and Advent is its busiest liturgical season, so sightseeing hours are more restricted than usual around services. Check the day before you go, but the building at this time of year justifies the effort.',
      },
      {
        slug: 'sea-life-london-tickets',
        bestFor: 'Ninety indoor minutes with young children',
        why: 'Stays in for the same reason as November: at 9.2C and dark before four, the ability to do something complete inside ninety minutes matters more than it does in summer. The South Bank location makes it easy to pair with the Dungeon or the Eye.',
      },
      {
        slug: 'natural-history-museum-tour',
        bestFor: 'A structured route on a wet afternoon',
        why: 'Rated 4.9 from a small base. The museum is free to enter in every month, so the ticket buys guiding rather than access, and December is the month when a guided route through a busy building is worth more than wandering it alone.',
      },
    ],
    note:
      'The London Eye drops out of the December ten despite being the most-reviewed product on the site, and it is worth being explicit about why. A 30-minute rotation is the one thing on this list that is entirely dependent on visibility, and December is the greyest month of the year. It also closes for the whole of January for annual maintenance, so a late-December ride is your last chance until February. Every outdoor walking and cycling product stays out, and Buckingham Palace remains closed for the season.',
    methodNote:
      'December ranks on darkness and dressing. Hogwarts in the Snow keeps the Studio Tour first. The dinner cruise and The Shard move up because a 15:51 sunset makes the lit city available in the middle of the afternoon. Afternoon tea enters the ten on pure seasonal fit. The Tower stays in with its 24, 25 and 26 December closure named.',
  },

  events: {
    capsule:
      'The most important December date in London is 25 December, when there is no Underground, no bus and no National Rail service anywhere in the city. Boxing Day falls on a Saturday, so the substitute bank holiday runs on Monday 28 December.',
    rows: [
      { event: 'Christmas Eve', dates: 'Thursday 24 December', where: 'Citywide, early closing widespread', free: 'Not a bank holiday' },
      { event: 'Christmas Day, full transport shutdown', dates: 'Friday 25 December', where: 'No Tube, no bus, no National Rail anywhere in London', free: 'Bank holiday' },
      { event: 'Boxing Day', dates: 'Saturday 26 December', where: 'Reduced transport, sales begin', free: 'Bank holiday' },
      { event: 'Substitute bank holiday for Boxing Day', dates: 'Monday 28 December', where: 'England and Wales', free: 'Bank holiday' },
      { event: 'New Year\'s Eve', dates: 'Thursday 31 December', where: 'Riverside fireworks, ticketed and sold in advance', free: 'Ticketed' },
      { event: 'Somerset House ice rink', dates: 'Runs to 10 January', where: 'Somerset House, Strand', free: 'Ticketed sessions' },
      { event: 'Hogwarts in the Snow', dates: 'Runs to 17 January', where: 'Warner Bros Studio Tour, Leavesden', free: 'Ticketed' },
    ],
    body: [
      'The Christmas Day transport shutdown is total and it surprises visitors every year. There is no Underground service, no bus service and no National Rail service anywhere in London on 25 December. The Elizabeth line, the Overground and the DLR do not run either. Heathrow and Gatwick operate, but getting to or from them means a taxi or a pre-booked transfer at holiday pricing. If you are arriving or departing on the 25th, arrange the transfer before you travel.',
      'Boxing Day falls on a Saturday in 2026. Under the standard rule the substitute bank holiday moves to Monday 28 December, so England and Wales get bank holidays on Friday 25, Saturday 26 and Monday 28 December. Transport runs a reduced Sunday-style service on the 26th and 27th, and engineering work is common on the lines over the whole period.',
      'The New Year\'s Eve riverside fireworks are ticketed and sell out well in advance, and the viewing areas along the Embankment are fenced and controlled on the night. We are not publishing prices or on-sale dates here because those change annually and were not confirmed at the time of writing. Check the official Mayor of London listing rather than a resale site.',
    ],
  },

  closures: {
    capsule:
      'December carries the heaviest closure load of the year. There is no public transport at all on 25 December. The Tower of London is closed on 24, 25 and 26 December. Buckingham Palace remains closed for the season, and almost every paid attraction closes on Christmas Day.',
    rows: [
      { site: 'All London public transport', closed: 'Friday 25 December', note: 'No Underground, no bus, no National Rail, no Overground, no DLR, no Elizabeth line. A complete shutdown, not a reduced service.' },
      { site: 'Tower of London', closed: '24, 25 and 26 December', note: 'Three consecutive days. The Tower is also on winter hours all month and returns to summer hours on 1 March.' },
      { site: 'Buckingham Palace State Rooms', closed: 'All month', note: 'Closed since 27 September. Only selected-date guided tours run through the winter.' },
      { site: 'Most paid attractions', closed: '25 December', note: 'Assume everything is shut on Christmas Day unless the operator states otherwise, and expect reduced hours on 24 and 26 December.' },
      { site: 'Changing the Guard', closed: 'Tuesdays, Thursdays, Saturdays and Sundays', note: 'Monday, Wednesday and Friday only, and most likely of any month to be cancelled for weather.' },
      { site: 'National museums', closed: '24 to 26 December, typically', note: 'The free national museums generally close for the Christmas period. Check individual sites, as reopening dates vary between 27 and 28 December.' },
    ],
    body: [
      'The 25 December shutdown deserves to be planned for rather than discovered. Christmas Day in London works well if your accommodation is central and you intend to walk: the parks are open, the streets are quiet and empty in a way they never otherwise are, and it is a genuinely memorable day to be in the city on foot. It works very badly if you are in zone 3 with a booking in zone 1.',
      'The Tower of London closing on 24, 25 and 26 December is the longest single closure of any attraction in our list, and it lands in the week many people take their Christmas break. Combined with the winter hours in force since November, the Tower is best done in the first three weeks of December or left until March, when it returns to its longer summer schedule on the 1st.',
      'One December fact worth carrying into the next month: the London Eye closes for the whole of January for annual maintenance. If a ride on the wheel is on your list and your trip spans the new year, do it in December. There is no January workaround, and it does not reopen until February.',
    ],
  },

  packing: {
    capsule:
      'Pack for 9.2C days, 4.3C nights and a lot of walking in the dark. December is milder than January on the ten-year mean but it feels colder because the daylight window is only 7 hours 52 minutes, and much of your time outdoors will be after sunset at 15:51.',
    body: [
      'Layers matter more in December than raw insulation, because you will be moving repeatedly between 4C streets and heavily heated interiors: shops, pubs, the Underground and the attractions themselves. A heavy single coat with nothing underneath it is worse than a mid-weight coat over two thin layers you can strip.',
      'If you are here for Christmas Day itself, pack for a walking day. With no public transport at all on 25 December, the realistic itinerary is on foot, which at 4.3C to 9.2C means proper shoes, gloves and something waterproof rather than a fashion coat and a plan to hop on a bus.',
    ],
    list: [
      'Layers rather than one heavy coat, for constant indoor and outdoor swaps',
      'Gloves and a hat for the two thirds of the day that fall after sunset',
      'Waterproof shoes, twelve wet days and 66mm of rain',
      'Walking-ready clothing for 25 December, when nothing runs',
      'Pre-booked attraction slots for every day after the 26th',
    ],
  },

  faqs: [
    {
      question: 'Does the Tube run on Christmas Day in London?',
      answer: 'No. There is no Underground service, no bus service and no National Rail service anywhere in London on 25 December, and the Overground, DLR and Elizabeth line do not run either. It is a complete shutdown rather than a reduced timetable. Taxis and private hire operate at holiday rates, and roads are unusually clear, but plan Christmas Day on foot if you can.',
    },
    {
      question: 'Is the Tower of London open at Christmas?',
      answer: 'No, it is closed on 24, 25 and 26 December, three consecutive days. The Tower is also on winter opening hours from November through February and does not return to its longer summer schedule until 1 March, so a December visit should be a morning one. It is the longest closure of any attraction in our London list.',
    },
    {
      question: 'How short are the days in London in December?',
      answer: '7 hours 52 minutes on 15 December, with sunrise at 07:59 and sunset at 15:51. The shortest day is 21 December at 7 hours 50 minutes. The daylight barely changes across the month, losing only 17 minutes in total, and by 31 December sunset has already moved back to 16:00. Plan your outdoor sightseeing for roughly 08:00 to 15:45.',
    },
    {
      question: 'When are the December bank holidays in London in 2026?',
      answer: 'Christmas Day falls on Friday 25 December and Boxing Day on Saturday 26 December. Because Boxing Day is a Saturday, the substitute bank holiday moves to Monday 28 December, giving England and Wales three bank holidays across that period. Transport runs a reduced Sunday-style service on 26 and 27 December, and engineering closures are common across the whole week.',
    },
    {
      question: 'Is it worth going up The Shard or the London Eye in December?',
      answer: 'The Shard, yes, if you book around 15:15: sunset is at 15:51 on the 15th, so one ticket covers daylight, sunset and the lit city. The risk in both cases is cloud, and December is the greyest month of the year, so take a flexible or open-dated ticket where you can. Note that the London Eye closes for the whole of January for maintenance, so December is your last chance until February.',
    },
    {
      question: 'Does it snow in London at Christmas?',
      answer: 'Very rarely, and settled snow on Christmas Day is unusual. The ten-year mean for December is a 9.2C high and a 4.3C low, which is above freezing and actually milder than January or February. The realistic December weather is grey and damp, with 66mm of rain across twelve wet days, rather than the snow-covered city on the cards.',
    },
  ],
};
