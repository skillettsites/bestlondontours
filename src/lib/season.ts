// Single build-time constant for the seasonal month pages.
//
// The set runs August of SEASON_BASE_YEAR through May of the following year. The
// year is rendered in the <title> tag and in the events section heading only. It
// never appears in a URL or in an H1, so rolling the whole set forward is a
// one-line edit here plus a content refresh.
export const SEASON_BASE_YEAR = 2026;

// Article datePublished / dateModified for the seasonal set.
export const SEASON_PUBLISHED = '2026-07-29';
export const SEASON_UPDATED = '2026-07-29';

// Months from August of the base year carry offset 0, January onwards carry 1.
export function seasonYear(yearOffset: 0 | 1): number {
  return SEASON_BASE_YEAR + yearOffset;
}

export const HUB_PATH = '/best-time-to-visit-london';

/** The date every price, rating and review count on these pages was checked against GetYourGuide. */
export const TOUR_DATA_CHECKED = '28 July 2026';

// Sources cited on every month page. All three were read directly for this build.
export const CLIMATE_SOURCE = {
  label: 'ERA5 reanalysis for central London, 2015 to 2024, via the Open-Meteo historical archive',
  url: 'https://open-meteo.com/en/docs/historical-weather-api',
};

export const DAYLIGHT_SOURCE = {
  label: 'timeanddate.com sunrise and sunset tables for London',
  url: 'https://www.timeanddate.com/sun/uk/london',
};

export const PALACE_SOURCE = {
  label: 'Royal Collection Trust, visiting Buckingham Palace',
  url: 'https://www.rct.uk/visit/buckingham-palace',
};

export const GUARD_SOURCE = {
  label: 'the Household Division Changing the Guard listing',
  url: 'https://www.householddivision.org.uk/changing-the-guard-calendar',
};

export const TFL_SOURCE = {
  label: 'Transport for London',
  url: 'https://tfl.gov.uk/',
};
