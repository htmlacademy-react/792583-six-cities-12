import { createSlice } from '@reduxjs/toolkit';
import { Comments } from '../../types/comments';
import { Offer, Offers } from '../../types/offers';
import { NameSpace } from '../../const';
import {
  fetchCommentsAction,
  fetchNearbyOfferAction,
  fetchOffersAction,
  fetchOffersFavoriteAction,
  setFavoriteAction,
} from '../api-actions';

type DataProcess = {
  offers: Offers;
  selectedOffer: Offer | null;
  nearbyOffers: Offers;
  favorite: Offers;
  comments: Comments;
  isOffersDataLoading: boolean;
  hasError: boolean;
};

const initialState: DataProcess = {
  offers: [],
  selectedOffer: null,
  nearbyOffers: [],
  favorite: [],
  comments: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOffersFavoriteAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.favorite = action.payload;
      })
      .addCase(fetchOffersFavoriteAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchNearbyOfferAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(setFavoriteAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favorite.push(action.payload);
        } else {
          state.favorite = state.favorite.filter(
            ({ id }) => id !== action.payload.id
          );
        }
      });
  },
});
