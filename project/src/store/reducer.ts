import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, City, SortType } from '../const';
import { Comment } from '../types/comments';
import { Offer } from '../types/offers';
import { loadOffers, changeLocation, listOfRentalOffers, changeSort, requireAuthorization, loadComments, setOffersDataLoadingStatus, setUser } from './action';
import { UserData } from '../types/user-data';

type InitialState = {
  offers: Offer[];
  location: string;
  rentalOffers: Offer[];
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  comments: Comment[];
  isOffersDataLoading: boolean;
  user: UserData | null;
};

const initialState: InitialState = {
  offers: [],
  location: City.Paris,
  rentalOffers: [],
  sortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  comments: [],
  isOffersDataLoading: false,
  user : null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(listOfRentalOffers, (state, action) => {
      state.rentalOffers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});
