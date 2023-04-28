import dayjs from 'dayjs';
import { City, RATING_STARS_COUNT, SortType } from './const';
import { Comment } from './types/comments';
import { FilteredListCity, Offer } from './types/offers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const adaptRatingForRendering = (rating: number) =>
  (rating * 100) / RATING_STARS_COUNT;

export function ucFirst(str: string): string {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

export const filter = {
  [City.Amsterdam]: (offers: Offer[]) =>
    offers.filter((offer) => offer.city.name === City.Amsterdam),
  [City.Brussels]: (offers: Offer[]) =>
    offers.filter((offer) => offer.city.name === City.Brussels),
  [City.Cologne]: (offers: Offer[]) =>
    offers.filter((offer) => offer.city.name === City.Cologne),
  [City.Dusseldorf]: (offers: Offer[]) =>
    offers.filter((offer) => offer.city.name === City.Dusseldorf),
  [City.Hamburg]: (offers: Offer[]) =>
    offers.filter((offer) => offer.city.name === City.Hamburg),
  [City.Paris]: (offers: Offer[]) =>
    offers.filter((offer) => offer.city.name === City.Paris),
};

export const filterOffersCity = (offers: Offer[]) =>
  Object.values(City).reduce<FilteredListCity[]>((filteredListCity, city) => {
    const cityOffers = filter[city](offers);
    return cityOffers.length
      ? [...filteredListCity, { city, cityOffers }]
      : filteredListCity;
  }, []);

export const sortListCityAlphabetically = (
  a: FilteredListCity,
  b: FilteredListCity
) => a.city.localeCompare(b.city);

export function arrayRandCity(arr: City[]): string {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

export function getRandomInt(max: number): number {
  const min = 0;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const showError = (text: string) => toast(text);

export const sortBy = {
  [SortType.LowPrice]: (offer1: Offer, offer2: Offer) =>
    offer1.price - offer2.price,
  [SortType.HightPrice]: (offer1: Offer, offer2: Offer) =>
    offer2.price - offer1.price,
  [SortType.Rating]: (offer1: Offer, offer2: Offer) =>
    offer2.rating - offer1.rating,
};

export const sortCommentsByDate = (comment1: Comment, comment2: Comment) => {
  const dateX = comment1.date;
  const dateY = comment2.date;
  return dayjs(dateY).diff(dateX);
};
