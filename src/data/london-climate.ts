// London monthly climate and daylight.
//
// Temperature, rainfall and wet days: ERA5 reanalysis for the central London grid
// point (51.49N, 0.16W), daily maxima, minima and precipitation totals for the ten
// calendar years 2015 to 2024, pulled from the Open-Meteo historical archive and
// averaged per month. A wet day is a day with 1mm or more of precipitation.
// https://open-meteo.com/en/docs/historical-weather-api
//
// Sunrise, sunset and length of day: timeanddate.com sunrise and sunset tables for
// London, read for every month from August 2026 to July 2027. `daylight`, `sunrise`
// and `sunset` are the figures for the 15th of that month, in local time (BST or
// GMT as applicable). `daylightChange` is the difference between the first and last
// day of the month. Nothing here is estimated.
// https://www.timeanddate.com/sun/uk/london

export interface ClimateRow {
  month: string;
  avgHighC: number;
  avgLowC: number;
  /** Days with 1mm or more of precipitation, ten-year mean. */
  wetDays: number;
  rainMm: number;
  /** Length of day on the 15th. */
  daylight: string;
  /** Sunrise on the 15th, local time. */
  sunrise: string;
  /** Sunset on the 15th, local time. */
  sunset: string;
  /** Change in length of day between the 1st and the last day of the month. */
  daylightChange: string;
}

export const londonClimate: Record<string, ClimateRow> = {
  january: { month: 'January', avgHighC: 7.7, avgLowC: 1.7, wetDays: 12, rainMm: 61, daylight: '8h 21m', sunrise: '07:59', sunset: '16:20', daylightChange: 'gains 1h 11m' },
  february: { month: 'February', avgHighC: 9.2, avgLowC: 2.6, wetDays: 11, rainMm: 54, daylight: '10h 00m', sunrise: '07:14', sunset: '17:15', daylightChange: 'gains 1h 40m' },
  march: { month: 'March', avgHighC: 11.0, avgLowC: 3.8, wetDays: 13, rainMm: 58, daylight: '11h 49m', sunrise: '06:15', sunset: '18:04', daylightChange: 'gains 1h 59m' },
  april: { month: 'April', avgHighC: 13.8, avgLowC: 4.8, wetDays: 10, rainMm: 40, daylight: '13h 51m', sunrise: '06:05', sunset: '19:56', daylightChange: 'gains 1h 50m' },
  may: { month: 'May', avgHighC: 17.4, avgLowC: 8.4, wetDays: 11, rainMm: 57, daylight: '15h 36m', sunrise: '05:09', sunset: '20:45', daylightChange: 'gains 1h 26m' },
  june: { month: 'June', avgHighC: 20.8, avgLowC: 11.7, wetDays: 11, rainMm: 61, daylight: '16h 36m', sunrise: '04:42', sunset: '21:19', daylightChange: 'gains 16m' },
  july: { month: 'July', avgHighC: 22.6, avgLowC: 13.9, wetDays: 11, rainMm: 60, daylight: '16h 11m', sunrise: '05:00', sunset: '21:11', daylightChange: 'loses 1h 05m' },
  august: { month: 'August', avgHighC: 22.3, avgLowC: 13.7, wetDays: 10, rainMm: 57, daylight: '14h 37m', sunrise: '05:45', sunset: '20:23', daylightChange: 'loses 1h 47m' },
  september: { month: 'September', avgHighC: 19.7, avgLowC: 11.5, wetDays: 11, rainMm: 64, daylight: '12h 40m', sunrise: '06:35', sunset: '19:15', daylightChange: 'loses 1h 53m' },
  october: { month: 'October', avgHighC: 15.5, avgLowC: 8.8, wetDays: 12, rainMm: 77, daylight: '10h 43m', sunrise: '07:24', sunset: '18:07', daylightChange: 'loses 1h 54m' },
  november: { month: 'November', avgHighC: 11.0, avgLowC: 5.2, wetDays: 12, rainMm: 66, daylight: '8h 53m', sunrise: '07:18', sunset: '16:11', daylightChange: 'loses 1h 26m' },
  december: { month: 'December', avgHighC: 9.2, avgLowC: 4.3, wetDays: 12, rainMm: 66, daylight: '7h 52m', sunrise: '07:59', sunset: '15:51', daylightChange: 'loses 17m' },
};

export const MONTH_ORDER = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
] as const;

/** Annual context strings used in the weather table, so every page cites the same range. */
export const CLIMATE_CONTEXT = {
  high: 'Ranges from 7.7C in January to 22.6C in July',
  low: 'Ranges from 1.7C in January to 13.9C in July',
  rain: 'Driest is April at 40mm, wettest is October at 77mm',
  wetDays: 'Fewest in April at 10, most in March at 13',
  daylight: 'From 7h 52m in mid-December to 16h 36m in mid-June',
  sunset: 'From 15:51 in mid-December to 21:19 in mid-June',
};
