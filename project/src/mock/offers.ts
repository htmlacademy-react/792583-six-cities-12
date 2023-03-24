import { Offer } from '../types/offers';


export const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offersMock: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Baby seat',
      'Fridge',
      'Washer',
      'Dishwasher',
      'Towels',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      'https://12.react.pages.academy/static/hotel/6.jpg',
      'https://12.react.pages.academy/static/hotel/2.jpg',
      'https://12.react.pages.academy/static/hotel/13.jpg',
      'https://12.react.pages.academy/static/hotel/3.jpg',
      'https://12.react.pages.academy/static/hotel/7.jpg',
      'https://12.react.pages.academy/static/hotel/19.jpg',
      'https://12.react.pages.academy/static/hotel/15.jpg',
      'https://12.react.pages.academy/static/hotel/16.jpg',
      'https://12.react.pages.academy/static/hotel/10.jpg',
      'https://12.react.pages.academy/static/hotel/11.jpg',
      'https://12.react.pages.academy/static/hotel/8.jpg',
      'https://12.react.pages.academy/static/hotel/4.jpg',
      'https://12.react.pages.academy/static/hotel/5.jpg',
      'https://12.react.pages.academy/static/hotel/1.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'https://12.react.pages.academy/static/hotel/7.jpg',
    price: 1540,
    rating: 1.2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [

      'Baby seat',
      'Fridge',
      'Washer',
      'Dishwasher',
      'Laptop friendly workspace'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: 'Tamara'
    },
    id: 2,
    images: [
      'https://12.react.pages.academy/static/hotel/6.jpg',
      'https://12.react.pages.academy/static/hotel/2.jpg',
      'https://12.react.pages.academy/static/hotel/13.jpg',
      'https://12.react.pages.academy/static/hotel/3.jpg',
      'https://12.react.pages.academy/static/hotel/7.jpg',
      'https://12.react.pages.academy/static/hotel/19.jpg',
      'https://12.react.pages.academy/static/hotel/15.jpg',
      'https://12.react.pages.academy/static/hotel/16.jpg',
      'https://12.react.pages.academy/static/hotel/10.jpg',
      'https://12.react.pages.academy/static/hotel/11.jpg',
      'https://12.react.pages.academy/static/hotel/8.jpg',
      'https://12.react.pages.academy/static/hotel/4.jpg',
      'https://12.react.pages.academy/static/hotel/5.jpg',
      'https://12.react.pages.academy/static/hotel/1.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    maxAdults: 4,
    previewImage: 'https://12.react.pages.academy/static/hotel/1.jpg',
    price: 990,
    rating: 2.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Private room'
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Washer',
      'Dishwasher',
      'Towels',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Tomas'
    },
    id: 3,
    images: [
      'https://12.react.pages.academy/static/hotel/6.jpg',
      'https://12.react.pages.academy/static/hotel/2.jpg',
      'https://12.react.pages.academy/static/hotel/13.jpg',
      'https://12.react.pages.academy/static/hotel/3.jpg',
      'https://12.react.pages.academy/static/hotel/7.jpg',
      'https://12.react.pages.academy/static/hotel/19.jpg',
      'https://12.react.pages.academy/static/hotel/15.jpg',
      'https://12.react.pages.academy/static/hotel/16.jpg',
      'https://12.react.pages.academy/static/hotel/10.jpg',
      'https://12.react.pages.academy/static/hotel/11.jpg',
      'https://12.react.pages.academy/static/hotel/8.jpg',
      'https://12.react.pages.academy/static/hotel/4.jpg',
      'https://12.react.pages.academy/static/hotel/5.jpg',
      'https://12.react.pages.academy/static/hotel/1.jpg'
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
    },
    maxAdults: 4,
    previewImage: 'https://12.react.pages.academy/static/hotel/3.jpg',
    price: 1220,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Private room'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Air conditioning',
      'Baby seat',
      'Fridge',
      'Washer',
      'Dishwasher',
      'Towels',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: true,
      name: 'Angelina'
    },
    id: 4,
    images: [
      'https://12.react.pages.academy/static/hotel/6.jpg',
      'https://12.react.pages.academy/static/hotel/2.jpg',
      'https://12.react.pages.academy/static/hotel/13.jpg',
      'https://12.react.pages.academy/static/hotel/3.jpg',
      'https://12.react.pages.academy/static/hotel/7.jpg',
      'https://12.react.pages.academy/static/hotel/19.jpg',
      'https://12.react.pages.academy/static/hotel/15.jpg',
      'https://12.react.pages.academy/static/hotel/16.jpg',
      'https://12.react.pages.academy/static/hotel/10.jpg',
      'https://12.react.pages.academy/static/hotel/11.jpg',
      'https://12.react.pages.academy/static/hotel/8.jpg',
      'https://12.react.pages.academy/static/hotel/4.jpg',
      'https://12.react.pages.academy/static/hotel/5.jpg',
      'https://12.react.pages.academy/static/hotel/1.jpg'
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
    },
    maxAdults: 4,
    previewImage: 'https://12.react.pages.academy/static/hotel/4.jpg',
    price: 123,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment'
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Brussels'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Air conditioning',
      'Baby seat',
      'Fridge',
      'Washer',
      'Dishwasher',
      'Towels',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: true,
      name: 'Angelina'
    },
    id: 5,
    images: [
      'https://12.react.pages.academy/static/hotel/6.jpg',
      'https://12.react.pages.academy/static/hotel/2.jpg',
      'https://12.react.pages.academy/static/hotel/13.jpg',
      'https://12.react.pages.academy/static/hotel/3.jpg',
      'https://12.react.pages.academy/static/hotel/7.jpg',
      'https://12.react.pages.academy/static/hotel/19.jpg',
      'https://12.react.pages.academy/static/hotel/15.jpg',
      'https://12.react.pages.academy/static/hotel/16.jpg',
      'https://12.react.pages.academy/static/hotel/10.jpg',
      'https://12.react.pages.academy/static/hotel/11.jpg',
      'https://12.react.pages.academy/static/hotel/8.jpg',
      'https://12.react.pages.academy/static/hotel/4.jpg',
      'https://12.react.pages.academy/static/hotel/5.jpg',
      'https://12.react.pages.academy/static/hotel/1.jpg'
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'https://12.react.pages.academy/static/hotel/4.jpg',
    price: 9999,
    rating: 4.5,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment'
  },
];
