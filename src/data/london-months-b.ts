import { MonthContent } from '@/lib/season-types';

// January 2027 through May 2027.
//
// The same rules apply as in london-months-a.ts. In addition:
//  - The London Eye closes for the whole of January for annual maintenance. That is
//    the single most consequential closure in this guide and it is stated plainly on
//    the January page rather than left to be discovered at the ticket barrier.
//  - No 2027 Buckingham Palace season date appears anywhere. The Royal Collection
//    Trust had not published one when this was written.
//  - School holiday dates beyond the February half-term are described as patterns,
//    not as fixed dates, because English term dates are set locally.

export const january: MonthContent = {
  slug: 'london-in-january',
  month: 'January',
  monthKey: 'january',
  yearOffset: 1,
  prevMonth: 'December',
  prevPath: '/london-in-december',
  nextMonth: 'February',
  nextPath: '/london-in-february',
  metaDescription:
    'London in January: the coldest month at 7.7C highs and 1.7C lows, and the month the London Eye closes completely for annual maintenance. Hogwarts in the Snow runs to 17 January. Ten ranked tours, with the Eye ranked out.',
  heroCapsule:
    'January is the coldest and cheapest month in London, averaging 7.7C by day and 1.7C by night. It is also the one month when the London Eye does not run at all: the wheel closes for the whole of January for annual maintenance. Daylight climbs back by 1 hour 11 minutes across the month.',

  verdict: {
    capsule:
      'January is the best-value month to visit London and the hardest one to enjoy outdoors. It is the coldest month on the ten-year mean at 7.7C highs and 1.7C lows, with twelve wet days. In return you get the lowest hotel rates of the year and attractions running at a fraction of their summer occupancy.',
    body: [
      'Nothing else in this guide gives you the Tower of London, Westminster Abbey and the national museums this empty. From about 4 January, once the New Year visitors have gone, central London runs at its annual low for the rest of the month. Timed slots that sell out in August are available on the day. Hotel rates in zone 1 hit their floor. If your priority is seeing the permanent city rather than the seasonal one, January is the month.',
      'The obstacle is not the temperature so much as the combination of cold, wet and dark. A 7.7C mean high sounds manageable and mostly is; a 1.7C mean low with twelve wet days and a 16:20 sunset is what actually shapes a January day. The itinerary that works is two indoor anchors a day with a short walk between them, not a loop of the parks.',
      'And there is one hard closure that has to be planned around. The London Eye shuts for the whole of January for its annual maintenance programme. It is the most-booked single attraction on this site, it is not running, and no amount of clicking through to a booking page will change that. If the wheel is on your list, come in December or wait for February.',
    ],
  },

  weather: {
    capsule:
      'January averages 7.7C highs and 1.7C lows, the coldest of the year, with 61mm of rain across twelve wet days. Sunset is 16:20 on the 15th, and the month is the first of the recovery: London gains 1 hour 11 minutes of daylight between 1 and 31 January.',
    body: [
      'January is colder than December on both measures, by one and a half degrees on the high and two and a half on the low. That lag is normal: the sea around Britain reaches its coldest in late winter rather than at the solstice, so the coldest air arrives a few weeks after the darkest days. Frost in central London is common on clear January nights, though settling snow is not.',
      'The good news is direction of travel. December loses daylight, January gains it, and by the end of the month sunset is 16:47 rather than 16:01. That hour is genuinely noticeable: a late-January afternoon has a usable outdoor window that a mid-December one does not. If you can only travel in deep winter, the last week of January beats the first.',
      'Rainfall drops to 61mm, the second-lowest total of the ten months here, but the wet-day count stays at twelve. That combination means frequent light rain rather than occasional heavy rain, which is exactly the weather a good waterproof coat handles and an umbrella does not. Cold rain at 4C is also the most unpleasant weather London produces, so plan indoor time generously.',
    ],
  },

  crowds: {
    capsule:
      'January is the quietest month of the year in London from about the 4th. Attractions that require booking weeks ahead in summer are walk-up in January, and zone 1 hotel rates reach their annual floor. The exceptions are the last days of Hogwarts in the Snow, which closes on 17 January.',
    body: [
      'The first three days are the tail of the Christmas and New Year period and behave nothing like the rest of the month. From roughly 4 January the visitor population collapses, and it does not recover until the February half-term. Weekday mornings at the Tower, St Paul\'s and Westminster Abbey in mid-January are as quiet as those places ever get.',
      'Two things still have deadlines. Hogwarts in the Snow at the Warner Bros Studio Tour finishes on 17 January, and the Somerset House ice rink closes on 10 January. Both run at higher demand in their final week than in the weeks before, so if either is the reason for your trip, book rather than assume.',
      'The other January effect is retail. The winter sales run through the first weeks and the West End is busier at ground level than the attraction numbers suggest, particularly at weekends. That is worth knowing if your hotel is off Oxford Street, but it does not touch the museums, the palaces or the river.',
    ],
  },

  tours: {
    capsule:
      'January\'s ranking is the most heavily rewritten in this guide, for one reason: the London Eye, the single most-reviewed product on this site, is closed for the entire month and does not appear in the ten at any position. Underground and indoor experiences fill the space it leaves.',
    picks: [
      {
        slug: 'harry-potter-studio-tour',
        bestFor: 'Hogwarts in the Snow, but only until 17 January',
        why: 'Keeps first place through the first half of the month. The Christmas dressing comes down on 17 January, so a booking before that date buys a materially different experience from one on the 20th. It is also the only full-day indoor option in our list, which counts for a lot at 7.7C.',
      },
      {
        slug: 'churchill-war-rooms-tour',
        bestFor: 'Being twenty feet underground in the coldest month',
        why: 'Ranked second, up from seventeenth on review volume. The Cabinet War Rooms are below ground, heated and completely weather-independent, which is worth more in the coldest month of the year than in any other. GetYourGuide lists this experience as not suitable for wheelchair users.',
      },
      {
        slug: 'madame-tussauds-tickets',
        bestFor: 'Two and a half warm hours with no weather risk',
        why: 'Twenty-three thousand reviews and a format that does not care what the sky is doing. In January the queue that defines this attraction in July has essentially gone, so it is both the easiest and the cheapest month in which to do it.',
      },
      {
        slug: 'the-shard-tickets',
        bestFor: 'The clearest air of the year, and the Eye is shut',
        why: 'Promoted deliberately as the January answer to the closed London Eye. Cold dry January air often gives the sharpest long-range visibility of the year, and with sunset at 16:20 a mid-afternoon slot covers daylight and the lit city in one ticket.',
      },
      {
        slug: 'london-dungeon-tickets',
        bestFor: 'Ninety indoor minutes on the South Bank',
        why: 'Sits on the South Bank a short walk from SEA LIFE, which makes a single warm indoor afternoon easy to assemble in a month where walking between distant sights is unpleasant. Well past its Halloween price and demand peak.',
      },
      {
        slug: 'natural-history-museum-tour',
        bestFor: 'A guided route through a free building',
        why: 'Rated 4.9 from a small review base. The museum is free in every month, so this ticket buys guiding, and January is the month when a warm, structured two and a half hours indoors is worth paying for rather than wandering.',
      },
      {
        slug: 'london-hidden-underground-tour',
        bestFor: 'Genuinely weatherproof and genuinely unusual',
        why: 'An abandoned Underground station is one of the very few London experiences where January weather is irrelevant. Seventy-five minutes, a small review base but a 4.8 rating, and it involves a lot of stairs, which is worth knowing before booking.',
      },
      {
        slug: 'westminster-abbey-tickets',
        bestFor: 'The quietest month inside the Abbey',
        why: 'Thirteen thousand reviews and the emptiest it gets. The Abbey is entirely indoors, it takes about two hours, and in January you can actually stand in front of the Coronation Chair and the Poets\' Corner memorials without being moved along.',
      },
      {
        slug: 'london-afternoon-tea-experience',
        bestFor: 'Somewhere warm that is not a museum',
        why: 'Ranked in on seasonal fit rather than review volume. In the coldest month of the year, ninety warm indoor minutes at 15:00 that are not another gallery is a genuinely useful thing to have booked, and January is the one month when it can be had without the Valentine\'s or Christmas premium.',
      },
      {
        slug: 'sea-life-london-tickets',
        bestFor: 'Children, indoors, and short',
        why: 'Keeps a place because it is warm, indoor and finishable in ninety minutes, which matters when the daylight window runs from about 08:00 to 16:20 and small children lose patience in the cold.',
      },
    ],
    note:
      'The London Eye is ranked out of January entirely. It is the most-reviewed product on this site with 39,011 verified reviews and it would otherwise be first, but the wheel closes for the whole month for annual maintenance and we will not list a closed attraction in a ranked top ten. The Shard is the honest substitute. Every outdoor walking, cycling and open-top product also stays out, and Buckingham Palace remains closed for the season.',
    methodNote:
      'January is the clearest illustration of the rule that closed means out. The London Eye would top this list on review count and does not appear on it at all, because the wheel does not turn in January. Underground and indoor experiences fill the gap, and The Shard is promoted explicitly as the replacement view.',
  },

  events: {
    capsule:
      'January is the emptiest month in the London calendar and that is the point of it. Two seasonal attractions close in the first half: the Somerset House ice rink on 10 January and Hogwarts in the Snow on 17 January. After that there is nothing dated until February.',
    rows: [
      { event: 'New Year\'s Day bank holiday', dates: 'Friday 1 January', where: 'Nationwide, reduced transport', free: 'Bank holiday' },
      { event: 'Winter sales', dates: 'Through the first weeks', where: 'Oxford Street, Regent Street, Knightsbridge', free: 'Free to browse' },
      { event: 'Somerset House ice rink closes', dates: 'Sunday 10 January, last day', where: 'Somerset House, Strand', free: 'Ticketed sessions' },
      { event: 'Hogwarts in the Snow closes', dates: 'Sunday 17 January, last day', where: 'Warner Bros Studio Tour, Leavesden', free: 'Ticketed' },
      { event: 'London Eye annual maintenance', dates: 'All month, wheel closed', where: 'South Bank, SE1', free: 'Not operating' },
      { event: 'Changing the Guard', dates: 'Mondays, Wednesdays and Fridays', where: 'Buckingham Palace forecourt', free: 'Free to watch' },
    ],
    body: [
      'The two seasonal closures are worth putting in your calendar rather than discovering. The Somerset House rink runs its last session on 10 January and the ice comes up immediately afterwards. Hogwarts in the Snow finishes on 17 January, and the Warner Bros Studio Tour reverts to its standard presentation from the following day. Neither is announced loudly, and both catch people out in the third week of the month.',
      'New Year\'s Day falls on a Friday and is a bank holiday, with reduced Sunday-style transport across London and many attractions on shortened hours. It is nothing like the 25 December shutdown, though: the Underground and buses do run, just less often and starting later in the morning.',
      'Beyond those, January is genuinely quiet. There is no major festival, no dated cultural programme and nothing that will fill a hotel. That is the reason the prices are what they are, and it is also the reason the permanent attractions are as accessible in January as they will be all year.',
    ],
  },

  closures: {
    capsule:
      'January carries the single biggest attraction closure in this guide. The London Eye is shut for the entire month for annual maintenance, with no partial operation and no workaround. Buckingham Palace remains closed for the season and the Tower of London is on winter hours until 1 March.',
    rows: [
      { site: 'London Eye', closed: 'The whole of January', note: 'Annual maintenance. The wheel does not operate at all. It reopens in February. This is the largest single closure in this ten-month guide.' },
      { site: 'Somerset House ice rink', closed: 'From 11 January', note: 'The season runs 11 November to 10 January. The rink is dismantled straight after the final session.' },
      { site: 'Hogwarts in the Snow', closed: 'From 18 January', note: 'The Christmas dressing at the Warner Bros Studio Tour runs 14 November to 17 January. The tour itself stays open all year in its standard form.' },
      { site: 'Buckingham Palace State Rooms', closed: 'All month', note: 'Closed since 27 September. Only selected-date guided tours run. The 2027 summer season dates had not been published when this was written.' },
      { site: 'Tower of London', closed: 'Winter hours', note: 'Shorter opening through the winter. It returns to its longer summer schedule on 1 March, which is two months away.' },
      { site: 'Changing the Guard', closed: 'Tuesdays, Thursdays, Saturdays and Sundays', note: 'Monday, Wednesday and Friday only, with the highest weather-cancellation risk of the year.' },
    ],
    body: [
      'The London Eye closure is the reason this page exists in the shape it does. It is the most-booked attraction we list, it is the thing most first-time visitors put at the top of their itinerary, and for one month a year it simply does not run. Almost no competitor page for January mentions it. If you take one fact away from this guide, take that one.',
      'Practically, there is no substitute for the Eye in the sense of a slow rotating capsule, but there is a substitute for the view. The Shard is higher, it is enclosed and heated, and January often gives the sharpest long-range visibility of the year because the cold air holds less moisture. It is the honest recommendation for the month rather than a consolation.',
      'For the rest, January is a month of quiet, ordinary opening. The national museums are open and free. The Tower, the Abbey and St Paul\'s all run normal winter schedules. The one thing worth double-checking is opening on 1 January itself, when many attractions open later than usual or stay shut.',
    ],
  },

  packing: {
    capsule:
      'January is the coldest month at 7.7C by day and 1.7C by night, and it is wet on twelve days out of thirty-one. Pack for cold rain rather than snow, which is the specific combination London does best and which needs waterproof boots more than it needs a thick coat.',
    body: [
      'Cold rain at 3C to 5C is genuinely the worst weather London produces, and it is the January default. It is not cold enough for snow and not warm enough to shrug off, and it soaks through canvas shoes within an hour. Waterproof footwear is the single item that changes a January trip most.',
      'Frost is common on clear nights but ice on pavements is rarer in central London than visitors expect, because the traffic and the buildings keep the centre warmer than the surrounding country. Where it does catch people out is the parks and the riverside paths first thing in the morning.',
    ],
    list: [
      'Waterproof boots, for cold rain rather than snow',
      'A warm hat and gloves for the 1.7C average low',
      'A coat rated for wind as well as cold, particularly along the river',
      'Two indoor anchors booked for every day of the trip',
      'A view ticket that is not the London Eye, because it is closed',
    ],
  },

  faqs: [
    {
      question: 'Is the London Eye open in January?',
      answer: 'No. The London Eye closes for the whole of January every year for its annual maintenance programme, and there is no partial operation during that time. It reopens in February. It is the most-booked attraction on this site, so if a ride on the wheel is part of your plan, it has to happen in December or from February onwards.',
    },
    {
      question: 'How cold does London get in January?',
      answer: 'January is the coldest month on the ten-year mean, with an average high of 7.7C and an average low of 1.7C for 2015 to 2024. Frost on clear nights is common in the parks and along the river, but settling snow in central London is unusual. The realistic January weather is cold rain, with 61mm falling across twelve wet days.',
    },
    {
      question: 'Is January the cheapest month to visit London?',
      answer: 'Yes, from about the 4th onwards. Once the New Year period ends, zone 1 hotel rates reach their annual floor and stay there until the February half-term, and attractions that need booking weeks ahead in summer become walk-up. The first ten days of November are the only period that comes close.',
    },
    {
      question: 'When does Hogwarts in the Snow finish?',
      answer: 'On Sunday 17 January. The Christmas dressing at the Warner Bros Studio Tour runs from 14 November to 17 January, after which the sets return to their standard presentation. The Somerset House ice rink closes a week earlier, on 10 January, at the end of a season that began on 11 November.',
    },
    {
      question: 'What is there to do in London in January?',
      answer: 'January is the month for the permanent city rather than the seasonal one. The Tower of London, Westminster Abbey, St Paul\'s and the free national museums all run normal hours and are at their emptiest of the year. Underground and indoor experiences work best in the cold: the Churchill War Rooms, an abandoned Underground station tour and the South Bank indoor attractions.',
    },
    {
      question: 'How much daylight is there in London in January?',
      answer: '8 hours 21 minutes on 15 January, with sunrise at 07:59 and sunset at 16:20. The direction of travel is the good news: the month gains 1 hour 11 minutes of daylight overall, and by 31 January sunset has moved out to 16:47. The last week of January has a noticeably more usable afternoon than the first.',
    },
  ],
};

export const february: MonthContent = {
  slug: 'london-in-february',
  month: 'February',
  monthKey: 'february',
  yearOffset: 1,
  prevMonth: 'January',
  prevPath: '/london-in-january',
  nextMonth: 'March',
  nextPath: '/london-in-march',
  metaDescription:
    'London in February: the driest of the winter months at 54mm, with Chinese New Year on 6 February and half-term from 15 to 19 February. The London Eye reopens after its January maintenance closure. Ten ranked tours.',
  heroCapsule:
    'February is the driest month of the London winter at 54mm across eleven wet days, and the month the London Eye comes back after its January maintenance shutdown. Daylight passes ten hours mid-month and the city gains 1 hour 40 minutes of it across February.',

  verdict: {
    capsule:
      'February is January with the worst edges taken off. It is the driest of the winter months at 54mm, daylight crosses ten hours by the 15th, and the London Eye is running again. Prices stay near their winter floor except for the half-term week, 15 to 19 February.',
    body: [
      'The case for February over January is arithmetic. You gain a degree and a half on the average high, you lose a wet day, you gain an hour and forty minutes of daylight across the month, and the single largest attraction in the city is open again. Almost nothing gets worse. Only the half-term week, 15 to 19 February, brings prices and queues back up to something like autumn levels.',
      'It is also the month with the most concentrated set of reasons to book something specific. Chinese New Year falls on Saturday 6 February and London stages one of the largest celebrations outside Asia across Chinatown, Leicester Square and Trafalgar Square. Valentine\'s Day is Sunday 14 February, which pushes the restaurant and dinner-cruise market hard for that whole weekend.',
      'What has not improved is the cold. A 9.2C mean high and a 2.6C mean low make February the second-coldest month, and it produces London\'s rare genuine cold snaps more often than December does. Dress for January and be pleasantly surprised.',
    ],
  },

  weather: {
    capsule:
      'February averages 9.2C highs and 2.6C lows with 54mm of rain across eleven wet days, the driest of the winter months, though April at 40mm is drier still. Sunset is 17:15 on the 15th and daylight reaches 10 hours exactly, having gained 1 hour 40 minutes across the month.',
    body: [
      'Fifty-four millimetres is the lowest monthly rainfall in the whole autumn and winter half of the London year. It is not the driest month overall, which is April at 40mm, but among the months you might be worrying about weather for, February is the one that most often surprises people. Eleven wet days out of twenty-eight still means two days in five, so this is relative rather than absolute good news.',
      'Daylight is the more meaningful change. Sunset moves from 16:49 on 1 February to 17:38 on the 28th, crossing the psychologically important 17:00 mark in the first week. That is the point in the year when an afternoon in London stops feeling truncated, and it is the single biggest difference between a January and a February trip.',
      'The cold is where February holds its ground. The 2.6C mean low is only a degree above January and the month is more prone to short, sharp easterly cold spells than December is. When those arrive they are dry and clear rather than wet, which makes them excellent for views and unpleasant for standing still.',
    ],
  },

  crowds: {
    capsule:
      'February splits cleanly around one week. The 15th to the 19th is the English half-term break and family attractions run at autumn levels for it. Either side of that week, London is close to its January quiet. Valentine\'s weekend puts real pressure on dinner cruises and afternoon tea.',
    body: [
      'The half-term week is the only sustained demand spike in the month. The Warner Bros Studio Tour, SEA LIFE, Madame Tussauds and the London Dungeon all fill for it, and the London Eye, freshly reopened, sells its good slots. If you are travelling with children this is your week and it needs booking; if you are not, the first two weeks and the last week of February are materially cheaper and quieter.',
      'Valentine\'s Day falls on Sunday 14 February, which makes the whole weekend of the 12th to the 14th the busiest restaurant trading period of the first quarter. The Thames dinner cruise and the afternoon tea experience in our list both sell out for those dates well ahead, and both charge a premium for them. Book two to three weeks out or pick the following weekend.',
      'Chinese New Year on Saturday 6 February concentrates a very large crowd into Chinatown, Leicester Square and Trafalgar Square for a single day. The parade and the stage programme are free to watch. It is genuinely worth going to, but the West End is difficult to move through that afternoon and restaurant tables in Chinatown are effectively unobtainable without a booking.',
    ],
  },

  tours: {
    capsule:
      'February is ranked around two things the calendar puts in it: a Valentine\'s weekend and a half-term week. Romantic and family products move to the top, and the London Eye re-enters the ranking having been closed for the whole of January.',
    picks: [
      {
        slug: 'london-afternoon-tea-experience',
        bestFor: 'Valentine\'s weekend, 12 to 14 February',
        why: 'First place on seasonal fit rather than review count, which is the largest single re-rank in this guide. Afternoon tea is a winter product and February gives it its biggest weekend of the year. Book by early February for the 13th or 14th, because those dates go first.',
      },
      {
        slug: 'thames-dinner-cruise',
        bestFor: 'The other Valentine\'s booking',
        why: 'With sunset at 17:15 mid-month, an evening dinner cruise is still a fully lit-city cruise, which will not be true by May. Combine that with Valentine\'s falling on a Sunday and this is the month the product commands its highest prices.',
      },
      {
        slug: 'london-eye-tickets',
        bestFor: 'It is running again',
        why: 'Returns to the ranking after being closed for the whole of January for annual maintenance. February is also a good month for it on the merits: cold clear air after an easterly spell gives the best visibility of the winter, and a 17:00 slot catches the lights coming on.',
      },
      {
        slug: 'harry-potter-studio-tour',
        bestFor: 'Half-term, 15 to 19 February',
        why: 'The Hogwarts in the Snow dressing came down on 17 January, so this is the standard tour again. It is still the only full-day indoor option in our list and it is the first thing to sell out in half-term week, so book before you travel rather than on arrival.',
      },
      {
        slug: 'madame-tussauds-tickets',
        bestFor: 'A weatherproof half-term afternoon',
        why: 'Twenty-three thousand reviews, entirely indoors, and easy with children in a 9.2C month. February half-term is its busiest week of the first quarter, so a mid-morning slot booked ahead is worth more than turning up.',
      },
      {
        slug: 'sea-life-london-tickets',
        bestFor: 'Younger children, ninety minutes, warm',
        why: 'Ranked up for half-term. It is the shortest family attraction in our list, which matters when the daylight window runs to 17:15 and you want to do two things in an afternoon rather than one.',
      },
      {
        slug: 'london-dungeon-tickets',
        bestFor: 'Older children on the same South Bank stretch',
        why: 'Sits next door to SEA LIFE and a few minutes from the London Eye, so a half-term afternoon can be built as a single indoor block with almost no walking between sites. Note the operator\'s age guidance before booking for younger children.',
      },
      {
        slug: 'the-shard-tickets',
        bestFor: 'Cold clear air and a 17:15 sunset',
        why: 'February\'s easterly cold snaps produce the clearest long-range visibility of the year. With sunset at 17:15 mid-month, a 16:30 slot gives you daylight, sunset and the lit city, which is the same trick that worked in December but at a more sociable hour.',
      },
      {
        slug: 'tower-of-london-tickets',
        bestFor: 'The last month of winter hours',
        why: 'Still on its shorter winter schedule until 1 March, so treat it as a morning visit. The compensation is that February, outside half-term week, is one of the quietest months at the Tower, and the Crown Jewels queue barely exists.',
      },
      {
        slug: 'churchill-war-rooms-tour',
        bestFor: 'An underground hour when the wind is easterly',
        why: 'Drops from second in January to tenth here, purely because February gives you more usable daylight and there is less need to hide from the weather. It remains the strongest indoor history experience in our London list.',
      },
    ],
    note:
      'The bike tour, photography walk, open-top bus, daytime river cruise and London Zoo all remain outside the ten for a fifth consecutive month. February\'s 2.6C mean low is the reason; they return from March and April as the daylight and temperature recover. Buckingham Palace stays closed for the season, with no 2027 opening dates yet published.',
    methodNote:
      'February is ranked on the two dates the calendar hands it. Afternoon tea and the dinner cruise go to the top for the Valentine\'s weekend of the 12th to the 14th. The family attractions move up for half-term from the 15th to the 19th. And the London Eye simply re-enters the list, because it is open again.',
  },

  events: {
    capsule:
      'February has two dated events that genuinely move crowds: Chinese New Year on Saturday 6 February, celebrated across Chinatown and Trafalgar Square, and the English school half-term from 15 to 19 February. Valentine\'s Day falls on Sunday 14 February.',
    rows: [
      { event: 'Chinese New Year celebrations', dates: 'Saturday 6 February', where: 'Chinatown, Leicester Square, Trafalgar Square', free: 'Free to attend' },
      { event: 'Valentine\'s Day', dates: 'Sunday 14 February', where: 'Citywide, restaurants and cruises at a premium', free: 'Ticketed' },
      { event: 'School half-term', dates: 'Monday 15 to Friday 19 February', where: 'Family attractions at peak', free: 'Not applicable' },
      { event: 'London Eye reopens', dates: 'From the start of February', where: 'South Bank, SE1', free: 'Ticketed' },
      { event: 'Changing the Guard', dates: 'Mondays, Wednesdays and Fridays', where: 'Buckingham Palace forecourt', free: 'Free to watch' },
    ],
    body: [
      'London\'s Chinese New Year celebration is one of the largest outside Asia and it is free. The parade sets off in the late morning and the stage programme in Trafalgar Square runs through the afternoon, with Chinatown itself effectively pedestrianised for the day. Go early if you want to move around, and do not plan to eat in Chinatown without a booking.',
      'Half-term is the one week in February when London prices behave like autumn. It runs Monday 15 to Friday 19 February for most English schools, though individual authorities and independent schools vary by a week either side. Family attraction slots, particularly at the Warner Bros Studio Tour, should be booked before you travel.',
      'Valentine\'s Day on Sunday 14 February pushes demand into the whole preceding weekend. The two products in our list that feel it are the Thames dinner cruise and the afternoon tea experience, and both charge a premium and sell out for the 13th and 14th. The following weekend is materially cheaper for an identical experience.',
    ],
  },

  closures: {
    capsule:
      'February is the lightest closure month in the winter half. The London Eye is back after its January shutdown. Buckingham Palace stays closed and the Tower of London remains on winter hours for one more month before switching back on 1 March.',
    rows: [
      { site: 'Buckingham Palace State Rooms', closed: 'All month', note: 'Closed since 27 September. The 2027 summer season dates had not been published when this page was written, so no reopening date is stated here.' },
      { site: 'Tower of London', closed: 'Winter hours, final month', note: 'The shorter winter schedule runs through February. Summer hours return on 1 March, which makes March a materially better month for a Tower visit.' },
      { site: 'Somerset House ice rink', closed: 'All month', note: 'The season ran 11 November to 10 January and the rink is long gone by February.' },
      { site: 'Hogwarts in the Snow', closed: 'All month', note: 'The Christmas dressing at the Warner Bros Studio Tour finished on 17 January. The tour runs all year in its standard form.' },
      { site: 'Changing the Guard', closed: 'Tuesdays, Thursdays, Saturdays and Sundays', note: 'Monday, Wednesday and Friday only. February cold snaps and high winds are a common cause of same-day cancellation.' },
    ],
    body: [
      'The most useful thing about February\'s closure list is how short it is. The London Eye is running again, nothing seasonal has an end date inside the month, and the only structural limitation is the Tower of London\'s winter hours, which expire on 28 February.',
      'That makes February the first month since September in which an itinerary can be built without working around a major closure. It is worth weighing against the temperature: a 2.6C average low is not comfortable, but a month where everything is open and nothing is crowded has real value.',
      'As in every month of this guide, we do not state a 2027 Buckingham Palace season. The Royal Collection Trust had not published those dates when this was written. The pattern in recent years has been a July to September window announced a few months ahead, and the 2026 season ran 9 July to 27 September, but a pattern is not a date.',
    ],
  },

  packing: {
    capsule:
      'February needs January\'s kit with one addition: something for cold, dry, windy days. The month averages 9.2C highs and 2.6C lows and it produces London\'s sharpest cold snaps, which are clear rather than wet and which make wind protection matter more than waterproofing.',
    body: [
      'The February cold snap is a different animal from January drizzle. It arrives from the east, it is dry, the sky is clear and the wind chill along the river and across the parks is severe. That is the weather in which a windproof outer layer, a scarf and gloves make more difference than a heavier coat would.',
      'On the other hand, February gives you the first genuinely usable late afternoons since October. Sunset at 17:15 mid-month and 17:38 by the 28th means you can plan two outdoor blocks in a day again, which changes what is worth carrying: a bag light enough to walk with all day beats one packed for every eventuality.',
    ],
    list: [
      'A windproof outer layer for the easterly cold snaps',
      'Scarf and gloves, more useful in February than a thicker coat',
      'Waterproofs still, for eleven wet days out of twenty-eight',
      'Booked Valentine\'s dates if you are travelling on the 13th or 14th',
      'Booked half-term slots if you are travelling between the 15th and the 19th',
    ],
  },

  faqs: [
    {
      question: 'Is the London Eye open in February?',
      answer: 'Yes. The wheel closes for the whole of January for annual maintenance and reopens in February, so February is the first month of the year in which it operates. It is also a good month for it on the merits, because the cold clear air that follows an easterly spell gives the best long-range visibility of the winter.',
    },
    {
      question: 'Is February the driest month in London?',
      answer: 'It is the driest of the autumn and winter months at 54mm across eleven wet days, but it is not the driest month overall. April takes that, at 40mm across ten wet days. February is still noticeably drier than October at 77mm, and drier than November, December and January, which is why it beats the rest of the winter on weather.',
    },
    {
      question: 'When is Chinese New Year in London in 2027?',
      answer: 'The main celebrations fall on Saturday 6 February, centred on Chinatown, Leicester Square and Trafalgar Square. London stages one of the largest Chinese New Year events outside Asia and it is free to attend, with a parade in the late morning and a stage programme through the afternoon. Chinatown restaurants require a booking that day.',
    },
    {
      question: 'When is half-term in London in February 2027?',
      answer: 'Monday 15 to Friday 19 February for most English state schools, though individual local authorities and independent schools can differ by a week. It is the only sustained demand spike in the month, and family attractions including the Warner Bros Studio Tour, SEA LIFE and Madame Tussauds should be booked before you travel for that week.',
    },
    {
      question: 'Is February a better month than January to visit London?',
      answer: 'On the numbers, yes, on almost every measure. February is 1.5C warmer by day, has one fewer wet day and 7mm less rain, gains an hour and forty minutes of daylight, and has the London Eye open rather than closed. The only thing January does better is price, and only outside the 15 to 19 February half-term week.',
    },
    {
      question: 'How cold is London in February?',
      answer: 'The ten-year mean gives a 9.2C high and a 2.6C low, making it the second-coldest month after January. February is also the month most likely to produce a short easterly cold snap, which brings dry clear conditions and a sharp wind chill rather than snow. Settled snow in central London remains uncommon in any winter month.',
    },
  ],
};

export const march: MonthContent = {
  slug: 'london-in-march',
  month: 'March',
  monthKey: 'march',
  yearOffset: 1,
  prevMonth: 'February',
  prevPath: '/london-in-february',
  nextMonth: 'April',
  nextPath: '/london-in-april',
  metaDescription:
    'London in March: the Tower of London returns to summer hours on 1 March, the clocks go forward on 28 March and evening daylight jumps by 1 hour 2 minutes overnight. Easter falls at the end of the month. Ten ranked tours.',
  heroCapsule:
    'March is the month London reopens. The Tower of London returns to summer hours on 1 March, the clocks go forward on Sunday 28 March and sunset jumps from 18:24 to 19:26 overnight, and the city gains 1 hour 59 minutes of daylight across the month, more than in any other.',

  verdict: {
    capsule:
      'March is the biggest single improvement of the year. London gains 1 hour 59 minutes of daylight across the month, more than any other, and the clock change on 28 March adds another hour to the evening in one night. The catch is thirteen wet days, the highest count of any month.',
    body: [
      'Two dates make March. On the 1st the Tower of London returns to its longer summer opening, which turns it back from a morning-only proposition into a full-day one. On Sunday 28 March the clocks go forward, and sunset moves from 18:24 on the Saturday to 19:26 on the Sunday. Nothing about the weather changes, but the last four days of March feel like a different season from the first four.',
      'Easter lands late this year and entirely inside March: Good Friday on 26 March, Easter Sunday on 28 March, Easter Monday on 29 March. That means the Easter school holidays begin in the final week rather than in April, which is unusual and worth knowing if you are trying to avoid or target family crowds. Easter Sunday is also the clock-change day.',
      'The cost is rain frequency. Thirteen wet days is the highest count of any month in the London year, ahead of October\'s twelve, even though the 58mm total is well below October\'s 77mm. In plain terms: it rains often in March and not very hard. That favours a flexible itinerary over a rigid one, and it favours a waterproof coat over cancelling anything.',
    ],
  },

  weather: {
    capsule:
      'March averages 11C highs and 3.8C lows with 58mm of rain spread across thirteen wet days, the highest wet-day count of any month. Sunset is 18:04 on the 15th, and the clocks go forward on 28 March, moving sunset from 18:24 to 19:26 overnight.',
    body: [
      'Thirteen wet days out of thirty-one is the statistic that defines a London March. It is not a wet month by volume: at 58mm it sits below the annual average and well below October. What it is, is a frequently interrupted one. Nearly half the days in March see a millimetre or more of rain, usually as short showers between bright spells rather than as a settled grey day.',
      'The daylight recovery is the fastest of the year. March starts with 10 hours 54 minutes and ends with 12 hours 53 minutes, a gain of nearly two hours in thirty-one days, and that is before the clock change moves an hour of it into the evening. From 28 March, sunset is after 19:25, which for the first time since October puts an evening walking tour or a river cruise back on the table.',
      'Temperature lags behind the light. An 11C mean high is the same as November and the 3.8C mean low is barely above February, so March is not warm. What it feels like depends entirely on the sun: a bright March day at 11C with no wind is pleasant, and the same temperature under cloud with a northerly is not.',
    ],
  },

  crowds: {
    capsule:
      'March is quiet until the final week. Easter falls on 28 March, so the Easter school holidays and the associated family demand begin at the very end of the month rather than in April. The first three weeks are close to February prices with substantially better daylight.',
    body: [
      'The value window in March is the first three weeks, and it is one of the better trades in this guide. You get the Tower back on summer hours from the 1st, daylight increasing by four minutes a day, and pricing that has not yet caught up with any of it. From about the 20th, as the Easter break approaches, both rates and queues start to climb.',
      'Easter itself is a genuine crowd event in London rather than a quiet religious weekend. Good Friday on 26 March and Easter Monday on 29 March are both bank holidays, the family attractions run holiday programming, and Westminster Abbey and St Paul\'s hold their most important services of the year, which restricts sightseeing access on those days.',
      'One consequence of a late Easter worth planning around: because the holiday sits at the very end of March, the first three weeks of April are unusually calm. If you are choosing between late March and mid-April, mid-April will be quieter and warmer, and you will have missed nothing except the Easter services themselves.',
    ],
  },

  tours: {
    capsule:
      'March\'s ranking follows the calendar back outdoors. The Tower of London returns to summer hours on the 1st and goes straight to the top. The cathedrals move up for Holy Week. From the 28th, when the clocks go forward, the open-air products become viable again for the first time since October.',
    picks: [
      {
        slug: 'tower-of-london-tickets',
        bestFor: 'Summer hours from 1 March',
        why: 'Straight to first place on a single date. From 1 March the Tower returns to its longer summer opening after four months of winter hours, which turns it from a rushed morning visit into a proper half day. It is also still quiet for the first three weeks of the month.',
      },
      {
        slug: 'westminster-abbey-tickets',
        bestFor: 'Holy Week, which falls entirely in March this year',
        why: 'Ranked up for Easter. The Abbey is the working coronation church and Holy Week is its most significant period of the year. Sightseeing access is restricted around the major services on 26, 28 and 29 March, so check the day and book around it rather than through it.',
      },
      {
        slug: 'st-pauls-cathedral-tickets',
        bestFor: 'The dome climb, back in comfortable conditions',
        why: 'Two reasons to move it up. Easter puts the cathedral at the centre of the month, and the 528-step dome climb becomes pleasant again at 11C after being a cold prospect in January and February. As at the Abbey, service days restrict sightseeing hours.',
      },
      {
        slug: 'hop-on-hop-off-bus',
        bestFor: 'From 28 March, when sunset moves to 19:26',
        why: 'Returns to the ten after five months out. The open top deck has been a poor recommendation since October; from the clock change on 28 March, with sunset after 19:25 and 11C highs, it becomes a genuine option again. Before the 28th, take the covered deck.',
      },
      {
        slug: 'thames-sightseeing-cruise',
        bestFor: 'The river in the recovering light',
        why: 'Back in the ranking for the same reason as the bus. A Westminster to Greenwich run in mid-March finishes in daylight for the first time since the autumn, and after the clock change an early-evening departure works properly again.',
      },
      {
        slug: 'london-eye-tickets',
        bestFor: 'Long views on the bright days between showers',
        why: 'The most-reviewed product on the site, ranked sixth here rather than first. March\'s thirteen wet days make a fixed 30-minute view slot the riskiest booking on this page, so take a flexible ticket or book it late in the trip once you can see a forecast.',
      },
      {
        slug: 'harry-potter-studio-tour',
        bestFor: 'The Easter school holidays, and the wet days',
        why: 'The only full indoor day in our list, in the month with the most wet days of any. It is also the first thing to sell out once the Easter break starts in the final week, so a March booking should be made before you travel.',
      },
      {
        slug: 'windsor-stonehenge-bath-tour',
        bestFor: 'Long day trips becoming viable again',
        why: 'Returns after five months out. An eleven-hour coach day needs daylight at both ends, and by the end of March there is 12 hours 53 minutes of it, rising fast. In December the same itinerary spent its last two hours in the dark.',
      },
      {
        slug: 'london-blitz-ww2-tour',
        bestFor: 'Walking London again, at 4.9 out of 5',
        why: 'Rated 4.9 from 163 reviews, and re-entering the ranking as walking weather returns. The Blitz sites cluster around St Paul\'s and the City, which is a compact route that works well between March showers rather than needing a whole dry day.',
      },
      {
        slug: 'madame-tussauds-tickets',
        bestFor: 'The thirteen wet days',
        why: 'Falls from the top half of the winter rankings to tenth, but stays in for one specific reason: March has more wet days than any other month, and this is the most reliably weatherproof large attraction in central London.',
      },
    ],
    note:
      'The Churchill War Rooms, the abandoned Underground station tour, the London Dungeon, SEA LIFE and the afternoon tea experience all drop out of the ten in March. Nothing has changed about any of them; what has changed is that after five months of ranking on shelter, there is finally enough daylight and enough dry weather to rank on what is actually best. Buckingham Palace remains closed, with no 2027 dates published.',
    methodNote:
      'March is ranked on two dates. The Tower returns to summer hours on the 1st and takes first place on that alone. The clocks go forward on the 28th, and the open-top bus, the river cruise and the long day trips come back into the ten after five months out. The cathedrals move up for Holy Week.',
  },

  events: {
    capsule:
      'March 2027 carries both the clock change and the whole of Easter. The clocks go forward on Sunday 28 March, which is also Easter Sunday. Good Friday falls on 26 March and Easter Monday on 29 March, both bank holidays.',
    rows: [
      { event: 'Tower of London returns to summer hours', dates: 'Monday 1 March', where: 'Tower of London, EC3', free: 'Ticketed' },
      { event: 'Good Friday', dates: 'Friday 26 March', where: 'Nationwide, major cathedral services', free: 'Bank holiday' },
      { event: 'Clocks go forward, British Summer Time begins', dates: 'Sunday 28 March, 01:00', where: 'Nationwide', free: 'Not applicable' },
      { event: 'Easter Sunday', dates: 'Sunday 28 March', where: 'Westminster Abbey, St Paul\'s and churches citywide', free: 'Services free, sightseeing restricted' },
      { event: 'Easter Monday', dates: 'Monday 29 March', where: 'Nationwide, family attractions at holiday capacity', free: 'Bank holiday' },
      { event: 'Changing the Guard', dates: 'Mondays, Wednesdays and Fridays', where: 'Buckingham Palace forecourt', free: 'Free to watch' },
    ],
    body: [
      'The clock change is worth planning the final week around. British Summer Time begins at 01:00 on Sunday 28 March. Sunset is 18:24 on Saturday 27 March and 19:26 on Sunday 28 March, a gain of 1 hour 2 minutes overnight, exactly mirroring the loss on 25 October. Anything you wanted to do in the evening becomes possible from that date.',
      'Easter falling on 28 March is late, and it means the entire holiday sits inside March rather than straddling into April. Good Friday and Easter Monday are bank holidays in England and Wales, transport runs a Sunday-style service on both, and the family attractions run holiday programming from about the 26th.',
      'Both Westminster Abbey and St Paul\'s Cathedral hold their most significant services of the year over that weekend. Sightseeing access is restricted or suspended around those services, and the pattern differs between the two buildings and between days. Check the specific date on the cathedral\'s own site before booking a visit for Good Friday, Easter Sunday or Easter Monday.',
    ],
  },

  closures: {
    capsule:
      'March is a reopening month rather than a closing one. The Tower of London returns to summer hours on the 1st. The main access restrictions are at Westminster Abbey and St Paul\'s around the Easter services on 26, 28 and 29 March, when sightseeing gives way to worship.',
    rows: [
      { site: 'Tower of London', closed: 'No longer on winter hours', note: 'Returns to its longer summer opening on 1 March, after four months of the shorter winter schedule.' },
      { site: 'Westminster Abbey', closed: 'Restricted 26, 28 and 29 March', note: 'Holy Week and Easter services take precedence over sightseeing. Access patterns differ by day, so check the Abbey\'s own listing.' },
      { site: 'St Paul\'s Cathedral', closed: 'Restricted around Easter services', note: 'The cathedral remains a working church. Sightseeing hours are reduced on major service days including Good Friday and Easter Sunday.' },
      { site: 'Buckingham Palace State Rooms', closed: 'All month', note: 'Closed since 27 September. The 2027 summer season dates had not been published when this was written.' },
      { site: 'Changing the Guard', closed: 'Tuesdays, Thursdays, Saturdays and Sundays', note: 'Monday, Wednesday and Friday only. The schedule is published a month ahead by the Household Division.' },
    ],
    body: [
      'The Tower returning to summer hours on 1 March is the most consequential opening in this guide, in the same way the London Eye closing on 1 January is the most consequential closure. It restores four months of lost afternoon, and it is the single reason the Tower goes from a cautious ninth-place winter recommendation to first place in March.',
      'The Easter restrictions at the Abbey and St Paul\'s are not closures in the ordinary sense. Both buildings are open and both are at their most alive over Easter; what changes is that you cannot walk around them as a sightseer during the major services. If you want to attend rather than tour, that is an opportunity rather than a problem, and both welcome visitors at services free of charge.',
      'Nothing else in our list closes in March. The Somerset House rink and the Warner Bros Studio Tour Christmas dressing are long gone, the London Eye is back from its January maintenance, and the only remaining seasonal absence is Buckingham Palace, whose 2027 opening dates had not been announced when this page was written.',
    ],
  },

  packing: {
    capsule:
      'March is the month of thirteen wet days and 11C highs, which means showers rather than downpours and layers rather than insulation. The most useful thing you can pack is a shell that fits over a jumper, because the temperature swing between a sunny March afternoon and a showery one is large.',
    body: [
      'March weather in London changes hour to hour more than any other month. It is entirely normal to have bright sunshine, a heavy ten-minute shower and clear skies again inside a morning. Packing for that means a layer you can add and remove quickly and a bag you do not mind carrying, rather than the single heavy coat that carried you through January.',
      'If your trip crosses 28 March, pack for two different evenings. Before the clock change, it is dark by about 18:30 and you will want a warm layer for the walk back. After it, you have light until nearly 20:00, and the day gets substantially longer without getting any warmer.',
    ],
    list: [
      'A light waterproof shell for the thirteen wet days',
      'A jumper or fleece to layer under it, for 3.8C mornings',
      'Sunglasses, which sound absurd in March and are not: the low sun is bright',
      'A flexible or open-dated view ticket, because March showers are unpredictable',
      'Awareness of the 28 March clock change if your trip crosses it',
    ],
  },

  faqs: [
    {
      question: 'When do the clocks go forward in London in 2027?',
      answer: 'At 01:00 on Sunday 28 March 2027, when British Summer Time begins. Sunset moves from 18:24 on Saturday 27 March to 19:26 on Sunday 28 March, a gain of 1 hour 2 minutes overnight. That is the exact mirror of the hour lost on 25 October 2026, and it is the point in the year when London evenings become usable again.',
    },
    {
      question: 'When is Easter in London in 2027?',
      answer: 'Good Friday falls on 26 March, Easter Sunday on 28 March and Easter Monday on 29 March, so the entire holiday sits inside March rather than April. Good Friday and Easter Monday are bank holidays in England and Wales. Easter Sunday is also the day the clocks go forward, which makes that weekend a busy one to travel through.',
    },
    {
      question: 'Does the Tower of London change its hours in March?',
      answer: 'Yes. The Tower returns to its longer summer opening on 1 March after four months on the shorter winter schedule that runs from November. That restores the afternoon, which is why a March visit works as a half day where a December one only worked as a morning. It is the single biggest reopening in this ten-month guide.',
    },
    {
      question: 'Does it rain a lot in London in March?',
      answer: 'It rains often rather than heavily. March has thirteen wet days, the highest count of any month in the London year, but only 58mm of rain in total, which is well below October\'s 77mm. In practice that means frequent short showers between bright spells, so a waterproof shell and a flexible plan work better than trying to pick a dry day.',
    },
    {
      question: 'Is March a good time to visit London?',
      answer: 'The first three weeks are one of the better value windows in this guide: the Tower is back on summer hours from the 1st, daylight increases by nearly two hours across the month, and prices have not yet caught up. The final week is different, because Easter falls on 28 March and brings bank holidays, family crowds and restricted cathedral access.',
    },
    {
      question: 'How much daylight does London gain in March?',
      answer: 'One hour 59 minutes across the month, more than in any other, running from 10 hours 54 minutes on 1 March to 12 hours 53 minutes on the 31st. On top of that, the clock change on 28 March shifts an hour of it into the evening, so sunset goes from 18:24 to 19:26 in a single night.',
    },
  ],
};

export const april: MonthContent = {
  slug: 'london-in-april',
  month: 'April',
  monthKey: 'april',
  yearOffset: 1,
  prevMonth: 'March',
  prevPath: '/london-in-march',
  nextMonth: 'May',
  nextPath: '/london-in-may',
  metaDescription:
    'London in April: the driest month of the year at 40mm across ten wet days, with sunset at 19:56. The Boat Race is on 11 April and the London Marathon runs as a two-day event on 24 and 25 April with major road closures.',
  heroCapsule:
    'April is the driest month in London, averaging just 40mm of rain across ten wet days, and the first month since September with a genuinely long evening: sunset is 19:56 on the 15th. The two dates to plan around are the Boat Race on 11 April and a two-day London Marathon on 24 and 25 April.',

  verdict: {
    capsule:
      'April is the best weather bet of the ten months here. At 40mm it is the driest month of the year, comfortably ahead of February\'s 54mm, with ten wet days and 13 hours 51 minutes of daylight mid-month. Easter has already passed in March, so the family crowds have gone.',
    body: [
      'On the raw numbers April is the strongest month in this guide. It has the lowest rainfall of the year at 40mm, the fewest wet days at ten alongside August, and by the middle of the month sunset is at 19:56. Nothing else in the ten combines those three. If someone asks which month gives the best chance of a dry London week, the honest answer is April.',
      'It is helped this year by the Easter calendar. Because Easter fell on 28 March, the school holidays and the associated crowds land in late March rather than April, which leaves the first three weeks of April unusually quiet for a spring month. That is a genuine one-off advantage and it will not repeat next year.',
      'The temperature is the reason April is not perfect. A 13.8C mean high and a 4.8C mean low mean warm afternoons and genuinely cold mornings, with a nine-degree spread that is the widest of any month here. April in London is a layers month: what works at 15:00 does not work at 08:00 or 21:00.',
    ],
  },

  weather: {
    capsule:
      'April is the driest month of the year at 40mm across ten wet days, with 13.8C average highs and 4.8C lows. Sunrise is 06:05 and sunset 19:56 on the 15th, giving 13 hours 51 minutes of daylight, and the month gains a further 1 hour 50 minutes.',
    body: [
      'Forty millimetres is a striking figure in a city with London\'s reputation. It is 37mm less than October, 21mm less than January and 14mm below February, the next driest month. April also shares the lowest wet-day count of the year with August at ten. The old idea of April showers is real, but London gets fewer of them than most months, and much less water when it does.',
      'The temperature spread is what actually needs planning for. A nine-degree gap between the 13.8C average high and the 4.8C average low is the widest of any month in this guide, and it is felt hardest at the ends of the day. A 07:30 start for a day trip is genuinely cold; the same day at 15:00 can be shirt-sleeve weather in the sun.',
      'The evenings are transformed. Sunset moves from 19:33 on 1 April to 20:21 on the 30th, all of it in British Summer Time. That is the first month since September in which a 19:00 tour departure is unambiguously a daylight tour, and it changes what is worth booking: the river, the parks and the open top deck all come back into play.',
    ],
  },

  crowds: {
    capsule:
      'The first three weeks are quiet because Easter already happened in March. The last weekend is the opposite: the London Marathon runs as a two-day event on 24 and 25 April and closes a large part of central London to traffic across both days.',
    body: [
      'A late Easter has handed April an unusual gift. In most years the Easter holidays fill the first half of April with family demand; in 2027 they were over by 29 March. That leaves the first three weeks of April with spring weather, long evenings and something close to March pricing, which is the best combination anywhere in this ten-month set.',
      'The last weekend is the exception and it is a large one. The London Marathon 2027 runs as a two-day event on Saturday 24 and Sunday 25 April. That is a change from the traditional single Sunday and it doubles the disruption: the route through Greenwich, Rotherhithe, Canary Wharf, Tower Hill, the Embankment and the Mall closes to traffic across both days, and hotel demand in the centre spikes for the whole weekend.',
      'The Boat Race on Sunday 11 April is a much smaller affair logistically but a considerable one on the river between Putney and Mortlake. The riverside pubs and the towpath fill from mid-morning, and river services in that stretch are suspended around the race. It is free to watch from the bank and it is one of the better free things to do in a London spring.',
    ],
  },

  tours: {
    capsule:
      'April is the first month since September where the ranking can be built purely on what is best rather than what is sheltered. It is the driest month of the year and the sun sets at 19:56, so the river, the parks and the open air take the top places back.',
    picks: [
      {
        slug: 'thames-sightseeing-cruise',
        bestFor: 'The Boat Race month, and a 19:56 sunset',
        why: 'Takes first place in the month London\'s attention turns to its river. The Boat Race runs on 11 April between Putney and Mortlake, and while that is upstream of the sightseeing route, April is when the Thames stops being a cold grey corridor and becomes the best way to move around the city.',
      },
      {
        slug: 'london-bike-tour',
        bestFor: 'The driest month of the year',
        why: 'The clearest weather-driven re-rank in this guide: from outside the ten for five straight months to second here. Cycling London is entirely weather-dependent and April has the lowest rainfall of any month at 40mm and joint-fewest wet days at ten.',
      },
      {
        slug: 'hop-on-hop-off-bus',
        bestFor: 'An orientation day, but not on 24 or 25 April',
        why: 'The open top deck is properly usable again at 13.8C with long evenings. One large caveat: the London Marathon closes central roads across both 24 and 25 April, so bus routes are heavily disrupted on those two days. Book any other date.',
      },
      {
        slug: 'tower-of-london-tickets',
        bestFor: 'Full summer hours, before the summer crowds',
        why: 'On summer hours since 1 March but not yet on summer visitor numbers, which makes April one of the two or three best months to do it. Much of the site is outdoors on the wharf and the walls, and April\'s 40mm is the lowest rainfall risk of the year.',
      },
      {
        slug: 'london-eye-tickets',
        bestFor: 'The lowest weather risk of any month',
        why: 'The most-reviewed product on the site, and April is arguably its best month. A fixed 30-minute view slot is a gamble in a wet month; in the driest month of the year, with 13 hours 51 minutes of daylight to pick a time from, it is the safest that booking gets.',
      },
      {
        slug: 'windsor-stonehenge-bath-tour',
        bestFor: 'An eleven-hour day with daylight at both ends',
        why: 'April is where the long day trips genuinely come into their own. Sunrise at 06:05 and sunset at 19:56 mean an eleven-hour coach itinerary starts and finishes in daylight, and Stonehenge and the Windsor grounds are outdoor sites that April\'s dryness suits.',
      },
      {
        slug: 'london-photography-tour',
        bestFor: 'Blossom, long light and clean air',
        why: 'Ranked up from the bottom of the review order on seasonal merit. April gives you spring blossom in the Royal Parks, a low clear sun and a golden hour that lands at around 19:00 rather than at lunchtime. It is the best month for photographing London that is not May.',
      },
      {
        slug: 'kensington-palace-tickets',
        bestFor: 'Combining a palace with Kensington Gardens',
        why: 'Enters the ranking for spring specifically. At £19 it is the cheapest palace ticket in our list, and its real April advantage is what surrounds it: Kensington Gardens and the Sunken Garden are at their best in the second half of the month.',
      },
      {
        slug: 'london-blitz-ww2-tour',
        bestFor: 'Walking the City in dry weather',
        why: 'Rated 4.9 from 163 reviews. April\'s combination of the lowest rainfall of the year and comfortable 13.8C afternoons makes it the best walking month in this guide, and the Blitz route around St Paul\'s and the City is one of the most rewarding walks in London.',
      },
      {
        slug: 'borough-market-food-tour',
        bestFor: 'Eating outside without a contingency plan',
        why: 'Borough is part covered and part open, so it improves as the weather does. April is the first month since September when the open sections are genuinely pleasant rather than something to hurry through, and British spring produce starts appearing on the stalls.',
      },
    ],
    note:
      'Every indoor winter anchor leaves the April ten: Madame Tussauds, the London Dungeon, SEA LIFE, the Churchill War Rooms, the Natural History Museum tour and the Warner Bros Studio Tour. None of them has got worse. April simply has the lowest rainfall and the joint-lowest wet-day count of the year, which means a full day indoors is a day of good weather spent under a roof. Buckingham Palace remains closed for the season.',
    methodNote:
      'April is ranked on the driest month of the year, 40mm across ten wet days, and on a 19:56 sunset. The bike tour returns after five months out, the river takes first place, and six indoor attractions that carried the winter rankings all drop out. The Marathon on 24 and 25 April is flagged on the bus entry rather than buried.',
  },

  events: {
    capsule:
      'April has two river-and-road events that change how the city moves. The Boat Race is on Sunday 11 April between Putney and Mortlake. The London Marathon 2027 runs as a two-day event on Saturday 24 and Sunday 25 April, closing central roads across both days.',
    rows: [
      { event: 'The Boat Race', dates: 'Sunday 11 April', where: 'Thames, Putney to Mortlake', free: 'Free from the riverbank' },
      { event: 'London Marathon, day one', dates: 'Saturday 24 April', where: 'Greenwich, Rotherhithe, Canary Wharf, Embankment, The Mall', free: 'Free to spectate' },
      { event: 'London Marathon, day two', dates: 'Sunday 25 April', where: 'Same route, second day of a two-day event', free: 'Free to spectate' },
      { event: 'Spring blossom in the Royal Parks', dates: 'Through the month', where: 'St James\'s, Green Park, Hyde Park, Kensington Gardens, Regents Park', free: 'Free' },
      { event: 'Changing the Guard', dates: 'Mondays, Wednesdays and Fridays', where: 'Buckingham Palace forecourt', free: 'Free to watch' },
    ],
    body: [
      'The London Marathon running across two days in 2027 is a genuine change and it matters for planning. A traditional single-Sunday marathon disrupts central London for one day; a two-day event does it for a whole weekend. The route takes in Greenwich, Rotherhithe, Canary Wharf, Tower Hill, the Embankment and finishes on The Mall, so almost every part of central London a visitor uses is affected on both 24 and 25 April.',
      'If your trip includes that weekend, the practical advice is simple: do not book a coach day trip, an open-top bus tour or anything that depends on crossing central London by road on either day. The Underground runs, and runs very busy. Walking and the river are the reliable ways to move.',
      'The Boat Race on 11 April is a far smaller footprint and a much more pleasant day. It is free to watch from the towpath between Putney and Hammersmith, the pubs along that stretch fill from late morning, and it is one of the few London events where turning up on the day still works. River services in that section are suspended around the race itself.',
    ],
  },

  closures: {
    capsule:
      'April has no attraction closures at all, which is unique in this guide. What it has instead is two days of road closures for the two-day London Marathon on 24 and 25 April, and a single closed palace: Buckingham Palace, whose season does not begin until the summer.',
    rows: [
      { site: 'Central London roads', closed: '24 and 25 April', note: 'London Marathon 2027, a two-day event. Closures across Greenwich, Rotherhithe, Canary Wharf, Tower Hill, the Embankment and The Mall on both days.' },
      { site: 'Thames river services, Putney to Mortlake', closed: 'Around the Boat Race, 11 April', note: 'Suspended in that stretch for the race. Central London river services between Westminster and Greenwich are unaffected.' },
      { site: 'Buckingham Palace State Rooms', closed: 'All month', note: 'The only attraction in our list closed in April. Closed since 27 September, with the 2027 summer season dates unpublished at the time of writing.' },
      { site: 'Changing the Guard', closed: 'Tuesdays, Thursdays, Saturdays and Sundays', note: 'Monday, Wednesday and Friday only, and subject to change on Marathon weekend given the Mall closures.' },
    ],
    body: [
      'April is the cleanest month in this whole guide for closures. The Tower is on summer hours, the London Eye is long back from its January maintenance, the cathedrals have finished with Easter, and no seasonal attraction has an end date inside the month. The only thing you cannot do is go inside Buckingham Palace.',
      'That leaves the Marathon as the one genuine constraint, and because it runs over two days in 2027 rather than one, it is worth treating as a whole-weekend event rather than a Sunday morning inconvenience. Anything on wheels is unreliable on the 24th and 25th; anything on foot, on the river or underground is fine.',
      'On Buckingham Palace, the position is the same as it has been since October. The 2026 season ran 9 July to 27 September and the Royal Collection Trust had not published 2027 dates when this page was written. Recent years have followed a July to September pattern announced a few months in advance, but we are not going to print a date we cannot verify.',
    ],
  },

  packing: {
    capsule:
      'April has the widest daily temperature swing of any month here, nine degrees between a 13.8C average high and a 4.8C average low. It is also the driest month at 40mm, so the priority shifts from waterproofing to layering for the first time since September.',
    body: [
      'The specific April problem is the morning. A day trip that leaves at 07:30 leaves at close to 5C, and the same day at 15:00 can be pleasant enough for a single layer in the sun. Pack for both and carry a bag you are willing to keep with you, because you will be taking things off by lunchtime and putting them back on by eight.',
      'Because April is genuinely the driest month, the calculation on wet-weather gear changes. Ten wet days out of thirty is the lowest risk in the year, so a light packable shell is enough and a heavy waterproof coat is dead weight. Sunglasses become more useful than an umbrella.',
    ],
    list: [
      'Layers rather than one warm coat, for the nine-degree daily swing',
      'A light packable shell, since April is the driest month at 40mm',
      'Sunglasses, for a low bright spring sun',
      'Comfortable shoes for the best walking month in this guide',
      'No road-based tour booked for 24 or 25 April, when the Marathon closes central London',
    ],
  },

  faqs: [
    {
      question: 'Is April the driest month in London?',
      answer: 'Yes. On the ten-year mean for 2015 to 2024, April averages 40mm of rain across ten wet days, the lowest total of any month and the joint-lowest wet-day count alongside August. February is next at 54mm and October is the wettest at 77mm. The reputation for April showers is real, but they are short and there is less rain overall than in any other month.',
    },
    {
      question: 'When is the London Marathon in 2027?',
      answer: 'Saturday 24 and Sunday 25 April, and 2027 is a one-off two-day event rather than the traditional single Sunday. The route takes in Greenwich, Rotherhithe, Canary Wharf, Tower Hill, the Embankment and The Mall, with major road closures across both days. Avoid booking coach day trips or open-top bus tours on either date.',
    },
    {
      question: 'When is the Boat Race in 2027?',
      answer: 'Sunday 11 April, on the Thames between Putney and Mortlake. It is free to watch from the towpath and the riverside pubs, which fill from late morning. River services in that stretch are suspended around the race itself, but central London river services between Westminster and Greenwich are unaffected.',
    },
    {
      question: 'How warm is London in April?',
      answer: 'Average highs of 13.8C and average lows of 4.8C. That nine-degree spread is the widest of any month in this guide and it is the thing to pack for: comfortable afternoons and genuinely cold early mornings. It is warmer than March by nearly three degrees on the daytime average and cooler than May by three and a half.',
    },
    {
      question: 'Is April a good time to visit London?',
      answer: 'On the weather numbers it is the best month in this guide, with the lowest rainfall of the year, the joint-fewest wet days and 13 hours 51 minutes of daylight mid-month. In 2027 it is helped further by Easter falling in March, which pushes the family crowds out of April entirely. The one caveat is the Marathon weekend on 24 and 25 April.',
    },
    {
      question: 'When does it get dark in London in April?',
      answer: 'Sunset is 19:56 on 15 April, moving from 19:33 on the 1st to 20:21 on the 30th, all in British Summer Time. It is the first month since September in which a 19:00 tour departure is unambiguously a daylight tour, which is why the river cruise, the open-top bus and the outdoor walks all return to the top of the ranking.',
    },
  ],
};

export const may: MonthContent = {
  slug: 'london-in-may',
  month: 'May',
  monthKey: 'may',
  yearOffset: 1,
  prevMonth: 'April',
  prevPath: '/london-in-april',
  nextMonth: 'June',
  nextPath: '/best-time-to-visit-london#june',
  metaDescription:
    'London in May: the longest days in this guide at 15 hours 36 minutes with sunset at 20:45, two bank holidays on 3 and 31 May, and RHS Chelsea from 18 to 22 May. Buckingham Palace is still closed. Ten ranked tours.',
  heroCapsule:
    'May gives London its longest days of this guide: 15 hours 36 minutes of daylight on the 15th, with sunset at 20:45 and 21:06 by the end of the month. Highs average 17.4C. Two bank holidays fall on 3 and 31 May, and RHS Chelsea runs 18 to 22 May.',

  verdict: {
    capsule:
      'May is the best month in this guide for anyone who wants to be outdoors. Daylight reaches 15 hours 36 minutes mid-month, sunset is 20:45, and average highs of 17.4C are the warmest here outside August. The one thing you cannot do in May is go inside Buckingham Palace.',
    body: [
      'May is where London\'s outdoor life restarts properly. Sunset at 20:45 on the 15th, rising to 21:06 by the 31st, gives you a genuine second half of the day: you can do a full day of sightseeing and still have three hours of light afterwards. That is not true of any other month in this ten-month set except August, and August costs considerably more.',
      'The temperature has caught up with the light. At 17.4C the mean high is three and a half degrees above April and only five below August, and the 8.4C mean low means the evenings no longer collapse the way April\'s do. Rainfall is back up to 57mm across eleven wet days, a little above April, but well within the range where an outdoor plan is the right default.',
      'What May does not have is the Buckingham Palace State Rooms. The 2026 season ran 9 July to 27 September, and the 2027 dates were not published when this was written. May is the closest month to summer in which the Palace is still shut, which catches people out because everything else about the month feels like the season has started.',
    ],
  },

  weather: {
    capsule:
      'May averages 17.4C highs and 8.4C lows with 57mm of rain across eleven wet days. Sunrise is 05:09 and sunset 20:45 on the 15th, giving 15 hours 36 minutes of daylight, the most in this guide, and the month gains a further 1 hour 26 minutes.',
    body: [
      'Fifteen and a half hours of daylight changes what a day in London can contain. Sunrise is before 05:15 mid-month and the light does not go until well after nine in the evening, which means a full day at the Tower and a river cruise afterwards is a comfortable itinerary rather than a rush. By 31 May sunset is 21:06 and there is 16 hours 17 minutes of daylight.',
      'Temperature-wise May is the month London becomes reliably pleasant. A 17.4C mean high sits in the range where walking all day is easy, and the 8.4C mean low is the first since October that does not require a serious layer after dark. The urban heat island means central London runs a degree or two above these figures in the evenings.',
      'Rainfall at 57mm across eleven wet days is a modest step up from April\'s 40mm and ten, and well below the 77mm of October. May rain tends to arrive as afternoon showers rather than settled fronts, which is annoying rather than day-ruining. A shell in the bag is enough; you will not need it most days.',
    ],
  },

  crowds: {
    capsule:
      'May is busy without being peak. Two bank holidays on Monday 3 and Monday 31 May create long weekends that fill hotels, and RHS Chelsea from 18 to 22 May concentrates demand in the west. Between those, mid-May weekdays are one of the best-value windows of the warm half.',
    body: [
      'The two bank holidays shape the month at either end. The early May bank holiday falls on Monday 3 May and the spring bank holiday on Monday 31 May, and both create three-day weekends when domestic demand fills central hotels and the family attractions run at holiday capacity. The eleven days between the 6th and the 17th are the quietest stretch of the month.',
      'RHS Chelsea Flower Show runs 18 to 22 May at the Royal Hospital Chelsea. It is the biggest event in the British gardening calendar, tickets go through the RHS rather than general sale, and it fills hotels across Chelsea, Victoria and South Kensington for the whole week. Even if you are not going, it affects where you can affordably stay.',
      'Prices are lower than August across the board while the weather is nearly as good, which is the fundamental case for May over the summer. Where August wins is the Buckingham Palace State Rooms, which are open then and closed now. That is a genuine trade rather than a tie-break, and it is the single reason to prefer August to May.',
    ],
  },

  tours: {
    capsule:
      'May\'s ranking is built entirely on the longest daylight in this guide. With sunset at 20:45 and 17.4C highs, the outdoor, on-water and evening products take every top position, and the indoor attractions that dominated December and January do not appear at all.',
    picks: [
      {
        slug: 'london-photography-tour',
        bestFor: 'A golden hour that lands at 20:00',
        why: 'First place on seasonal fit, from the second-smallest review base in our list. May gives London its longest, softest evening light of this guide: sunset at 20:45 mid-month with a slow dusk after it. In December the equivalent hour is 15:51 and usually grey.',
      },
      {
        slug: 'thames-sightseeing-cruise',
        bestFor: 'An 19:00 sailing that is still full daylight',
        why: 'The third most-reviewed product on the site, and May is when the open deck between Westminster and Greenwich becomes the best hour you can buy in London. At 17.4C and with two hours of light after a 19:00 departure, nothing about the trip is a compromise.',
      },
      {
        slug: 'hop-on-hop-off-bus',
        bestFor: 'The open top deck, at its best',
        why: 'This is the month the upper deck is unambiguously the right choice. City Sightseeing at £25 sits at the bottom of the £25 to £32 range London operators charge, and unlike April there is no Marathon weekend to work around.',
      },
      {
        slug: 'london-bike-tour',
        bestFor: 'Long light and warm evenings',
        why: 'Holds a top position from April. May is slightly wetter at 57mm against 40mm, but it is three and a half degrees warmer and has nearly two more hours of daylight, which makes an evening ride through the Royal Parks a genuinely different proposition.',
      },
      {
        slug: 'tower-of-london-tickets',
        bestFor: 'A full day on summer hours, before the July crowds',
        why: 'On summer hours since 1 March and not yet carrying summer visitor volume. Much of the Tower is outdoors, so May\'s combination of long light and 17.4C is close to ideal, and the Crown Jewels queue has not yet reached its August length.',
      },
      {
        slug: 'london-eye-tickets',
        bestFor: 'A late slot with the city still lit by daylight',
        why: 'The most-reviewed product on the site. A 20:00 rotation in mid-May is still a daylight rotation, which sounds obvious and is the opposite of what the same booking gives you in December, when it would be dark by 16:00.',
      },
      {
        slug: 'kensington-palace-tickets',
        bestFor: 'Chelsea month, and the gardens around it',
        why: 'Ranked up for May specifically. This is the month London\'s gardens are the point, with RHS Chelsea from the 18th to the 22nd, and at £19 this is the cheapest palace in our list with Kensington Gardens and the Sunken Garden on its doorstep.',
      },
      {
        slug: 'london-zoo-tickets',
        bestFor: 'An outdoor family day in Regents Park',
        why: 'Returns after seven months out of the ranking. The Zoo is largely an outdoor site and it only works properly in the warm half of the year. In November the same ticket buys a cold walk between indoor houses; in May it is a full day outdoors.',
      },
      {
        slug: 'borough-market-food-tour',
        bestFor: 'The open sections of the market',
        why: 'Borough is part covered and part open, and May is when the open half stops being a compromise. Three hours on foot around Southwark at 17.4C is a pleasant afternoon rather than an endurance exercise.',
      },
      {
        slug: 'windsor-stonehenge-bath-tour',
        bestFor: 'An eleven-hour day with light to spare',
        why: 'With sunrise at 05:09 and sunset at 20:45, an eleven-hour coach itinerary uses barely two thirds of the available daylight, so nothing is rushed and both Stonehenge and the Windsor grounds are seen in good light rather than at the edges of the day.',
      },
    ],
    note:
      'Not one indoor attraction appears in the May ten. Madame Tussauds, the London Dungeon, SEA LIFE, the Churchill War Rooms, the Warner Bros Studio Tour and the Natural History Museum tour are all out, having between them held the top places from October to February. With 15 hours 36 minutes of daylight and 17.4C highs, spending a May day indoors is the one thing this month makes hard to justify. Buckingham Palace is still closed: its season does not begin until the summer.',
    methodNote:
      'May is ranked on daylight alone, and it is the purest version of that logic in this guide. Sunset at 20:45 puts the photography walk first from a review base of eighteen, and puts every indoor attraction out of the ten entirely. London Zoo returns after seven months. Buckingham Palace is still shut, which is the only thing August does better.',
  },

  events: {
    capsule:
      'May has two bank holiday Mondays, on 3 and 31 May, and one large ticketed event: RHS Chelsea Flower Show from 18 to 22 May. Buckingham Palace remains closed, with the 2027 summer season dates unpublished at the time of writing.',
    rows: [
      { event: 'Early May bank holiday', dates: 'Monday 3 May', where: 'England and Wales', free: 'Bank holiday' },
      { event: 'RHS Chelsea Flower Show', dates: 'Tuesday 18 to Saturday 22 May', where: 'Royal Hospital Chelsea, SW3', free: 'Ticketed through the RHS' },
      { event: 'Spring bank holiday', dates: 'Monday 31 May', where: 'England and Wales', free: 'Bank holiday' },
      { event: 'Longest evenings in this guide', dates: 'Sunset 21:06 on 31 May', where: 'Citywide', free: 'Free' },
      { event: 'Changing the Guard', dates: 'Mondays, Wednesdays and Fridays', where: 'Buckingham Palace forecourt', free: 'Free to watch' },
    ],
    body: [
      'Both May bank holidays fall on Mondays, on the 3rd and the 31st, and both behave the same way: domestic weekend demand fills central hotels, transport runs a Sunday-style service on the Monday itself, and family attractions run at holiday capacity for the three days. The eleven days between the 6th and the 17th are the value window in the month.',
      'RHS Chelsea from 18 to 22 May is the largest fixed event in a London May. Tickets are sold through the Royal Horticultural Society rather than general ticketing, they go on sale months in advance and the show sells out most years. Its effect on a visitor who is not attending is on accommodation: Chelsea, Victoria and South Kensington are difficult and expensive that week.',
      'The one thing not happening in May is Buckingham Palace. The State Rooms have been closed since 27 September and the 2027 summer season had not been announced when this was written. That is the single reason someone might choose August over May, and it is worth weighing honestly, because on daylight, temperature and price May is otherwise the stronger month.',
    ],
  },

  closures: {
    capsule:
      'Nothing in our list closes in May except Buckingham Palace, which has been shut since 27 September. There is no seasonal closure, no clock change and no maintenance shutdown. It is, alongside April, the cleanest month in this guide.',
    rows: [
      { site: 'Buckingham Palace State Rooms', closed: 'All month', note: 'The only closure in May. Shut since 27 September, with the 2027 summer season dates unpublished when this page was written. The 2026 season ran 9 July to 27 September.' },
      { site: 'Changing the Guard', closed: 'Tuesdays, Thursdays, Saturdays and Sundays', note: 'Monday, Wednesday and Friday only. The most reliable time of year for it to actually go ahead, since cancellations are weather-driven.' },
      { site: 'Chelsea, Victoria and South Kensington hotels', closed: 'Effectively full, 18 to 22 May', note: 'Not a closure, but RHS Chelsea makes accommodation in those areas scarce and expensive for the whole week.' },
      { site: 'Bank holiday Mondays', closed: '3 and 31 May, reduced transport', note: 'Sunday-style service on both. Attractions are open and busy rather than closed.' },
    ],
    body: [
      'May and April are the two months in this guide with essentially nothing shut. Everything in the ranked ten is running normal hours, the Tower has been on summer opening since 1 March, and the London Eye has been back from its January maintenance for four months. The only door you will find locked is the one at Buckingham Palace.',
      'That closure is worth understanding rather than resenting. The State Rooms are working royal rooms and they open to the public only when the household is not using them, which in practice means a short summer window. The 2026 window was 9 July to 27 September. We are not printing a 2027 window because the Royal Collection Trust had not published one.',
      'If seeing inside the Palace is the point of your trip, the August and September pages in this guide are the ones you want. If it is one item on a longer list, May gives you better weather, more daylight, lower prices and shorter queues everywhere else, and Changing the Guard still takes place on the forecourt on Mondays, Wednesdays and Fridays.',
    ],
  },

  packing: {
    capsule:
      'May is the easiest month here to pack for. Average highs of 17.4C and lows of 8.4C mean a light layer rather than a coat, and at eleven wet days out of thirty-one you need a shell in the bag rather than on your back. Pack for long days rather than for weather.',
    body: [
      'The thing that catches people out in a London May is the length of the day rather than the temperature. Fifteen and a half hours of daylight means you will walk considerably further than you planned, and the failure point is usually footwear rather than clothing. Shoes you have already worn in matter more in May than anything else on this list.',
      'The evening drop is real but modest. An 8.4C mean low sounds cold against a 17.4C high, but that minimum arrives around dawn rather than at 21:00, and central London holds its heat. A light jumper is enough for a 20:00 river cruise in May, where the same trip in September needs a proper jacket.',
    ],
    list: [
      'Shoes already worn in, because 15 hours of daylight means more walking than you planned',
      'A light jumper for evenings rather than a coat',
      'A packable shell for eleven wet days out of thirty-one',
      'Sun cream, which most visitors do not associate with London and should',
      'Accommodation booked away from Chelsea if you are here from 18 to 22 May',
    ],
  },

  faqs: [
    {
      question: 'Is May a good time to visit London?',
      answer: 'It is the best month in this guide for anyone who wants to be outdoors. Daylight reaches 15 hours 36 minutes mid-month with sunset at 20:45, average highs are 17.4C, and prices sit well below August for nearly the same weather. The one thing you cannot do is go inside Buckingham Palace, whose State Rooms only open for a short summer season.',
    },
    {
      question: 'Is Buckingham Palace open in May?',
      answer: 'No. The State Rooms open only for a summer season, and the 2026 season ran 9 July to 27 September. The 2027 dates had not been published by the Royal Collection Trust when this page was written, so we are not stating one. Changing the Guard still takes place on the forecourt on Mondays, Wednesdays and Fridays throughout May.',
    },
    {
      question: 'When are the May bank holidays in 2027?',
      answer: 'Monday 3 May for the early May bank holiday and Monday 31 May for the spring bank holiday. Both create three-day weekends that fill central hotels with domestic demand and put family attractions at holiday capacity, and transport runs a Sunday-style service on both Mondays. The quietest stretch of the month is roughly the 6th to the 17th.',
    },
    {
      question: 'When is the Chelsea Flower Show in 2027?',
      answer: 'Tuesday 18 to Saturday 22 May, at the Royal Hospital Chelsea. Tickets are sold through the Royal Horticultural Society rather than general ticketing, go on sale months ahead and usually sell out. Even if you are not attending, it makes accommodation in Chelsea, Victoria and South Kensington scarce and expensive across that week.',
    },
    {
      question: 'How late is it light in London in May?',
      answer: 'Sunset is 20:45 on 15 May and 21:06 on the 31st, with 15 hours 36 minutes of daylight mid-month rising to 16 hours 17 minutes by the end. That is the longest of any month in this guide. It means a 19:00 or even 20:00 tour departure is still a full daylight experience, which is the opposite of the December position.',
    },
    {
      question: 'Should I visit London in May or August?',
      answer: 'May on almost every measure: nearly five degrees cooler but still 17.4C, an hour more daylight mid-month, lower hotel rates and shorter queues. August wins on exactly one thing, and it is a significant one: the Buckingham Palace State Rooms are open then, from 9 July to 27 September in 2026, and closed in May.',
    },
  ],
};
