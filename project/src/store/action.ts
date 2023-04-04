import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { Comment } from '../types/comments';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeLocation = createAction<string>('location/changeLocation');

export const listOfRentalOffers = createAction<Offer[]>('offers/listOfRentalOffers');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadComments = createAction<Comment[]>('data/loadComments');

export const changeSort = createAction<string>('sort/changeSort');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
