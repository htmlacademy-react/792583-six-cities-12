import { NameSpace } from '../../const';
import { Comments } from '../../types/comments';
import { Offer, Offers } from '../../types/offers';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;

export const getFavoriteOffers = (state: State) =>
  state[NameSpace.Data].favorite;

export const getOffersDataLoadingStatus = (state: State) =>
  state[NameSpace.Data].isOffersDataLoading;

export const getErrorStatus = (state: State): boolean =>
  state[NameSpace.Data].hasError;

export const getComments = (state: State): Comments =>
  state[NameSpace.Data].comments;

export const getNearbyOffers = (state: State): Offers =>
  state[NameSpace.Data].nearbyOffers;

export const getSelectedOffer = (state: State): Offer | null =>
  state[NameSpace.Data].selectedOffer;
