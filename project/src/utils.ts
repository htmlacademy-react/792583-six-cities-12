import { City, RATING_STARS_COUNT } from './const';
import { FilteredListCity, Offer } from './types/offers';

export const adaptRatingForRendering = (rating: number) => rating * 100 / RATING_STARS_COUNT;

export function ucFirst(str: string): string {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

const filter = {
  [City.Amsterdam]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === City.Amsterdam),
  [City.Brussels]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === City.Brussels),
  [City.Cologne]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === City.Cologne),
  [City.Dusseldorf]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === City.Dusseldorf),
  [City.Hamburg]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === City.Hamburg),
  [City.Paris]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === City.Paris),
};

export const filterOffersCity = (offers: Offer[]) =>
  Object.values(City).reduce<FilteredListCity[]>((filteredListCity, city) => {
    const cityOffers = filter[city](offers);
    return cityOffers.length ? [...filteredListCity, { city, cityOffers }] : filteredListCity;
  }, []);

export const sortListCityAlphabetically = (a: FilteredListCity, b: FilteredListCity) => a.city.localeCompare(b.city);
