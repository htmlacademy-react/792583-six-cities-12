import { BookmarkVersion, LogoVersion, OfferCardVersion } from '../const';

export type Offer = {
  bedrooms: number;
  city: OfferCity;
  description: string;
  goods: string[];
  host: OfferHost;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: OfferLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCity = {
  location: OfferLocation;
  name: string;
};

export type OfferHost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type BlockType = {
  Header: string;
  OfferCard: string;
  Favorites: string;
  Property: string;
  Cities: string;
  NearPlaces: string;
  Reviews: string;
  Footer: string;
}

export type FilteredListCity = {
  cityOffers: Offer[];
  city: string;
}

export type OfferVersion = typeof OfferCardVersion[keyof typeof OfferCardVersion]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type LogoVersion = typeof LogoVersion[keyof typeof LogoVersion]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type BookmarkVersion = typeof BookmarkVersion[keyof typeof BookmarkVersion]
