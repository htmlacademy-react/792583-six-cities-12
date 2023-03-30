import { createReducer } from '@reduxjs/toolkit';
import { City, SortType } from '../const';
import { offersMock } from '../mock/offers';
import { Offer } from '../types/offers';
import { loadOffers, changeLocation, listOfRentalOffers, changeSort } from './action';

type InitialState = {
  offers: Offer[];
  location: string;
  rentalOffers: Offer[];
  sortType: string;
};

const initialState: InitialState = {
  offers: offersMock,
  location: City.Paris,
  rentalOffers: [],
  sortType: SortType.Popular
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(listOfRentalOffers, (state, action) => {
      state.rentalOffers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    });
});
