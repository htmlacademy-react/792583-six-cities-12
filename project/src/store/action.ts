import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';

export const changeLocation = createAction<string>('location/changeLocation');

export const listOfRentalOffers = createAction<Offer[]>('offers/listOfRentalOffers');

export const loadOffers = createAction<Offer[]>('offers/loadOffers');

export const changeSort = createAction<string>('sort/changeSort');
