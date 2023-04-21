export const RATING_STARS_COUNT = 5;
export const OFFER_IMG_GALLERY_COUNT = 6;
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const RATING_TITLES = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];
export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  City = '/:city',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum Block {
  Header = 'header',
  OfferCard = 'place-card',
  Favorites = 'favorites',
  Property = 'property',
  Cities = 'cities',
  NearPlaces = 'near-places',
  Reviews = 'reviews',
  Footer = 'footer',
}

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HightPrice = 'Price: high to low',
  Rating = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
}

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Main = 'MAIN',
  Favorite = 'FAVORITE',
  Room = 'ROOM',
}

export const OfferCardVersion = {
  Cities: {
    block: Block.Cities,
    imgSize: {
      width: '260',
      height: '200',
    },
  },
  Offer: {
    block: Block.NearPlaces,
    imgSize: {
      width: '260',
      height: '200',
    },
  },
  Favorites: {
    block: Block.Favorites,
    imgSize: {
      width: '150',
      height: '110',
    },
  },
};

export const LogoVersion = {
  Footer: {
    block: Block.Footer,
    imgSize: {
      width: '64',
      height: '33',
    },
  },
  Header: {
    block: Block.Header,
    imgSize: {
      width: '81',
      height: '41',
    },
  },
};

export const BookmarkVersion = {
  Offer: {
    block: Block.Property,
    imgSize: {
      width: '31',
      height: '33',
    },
  },
  Card: {
    block: Block.OfferCard,
    imgSize: {
      width: '18',
      height: '19',
    },
  },
};
