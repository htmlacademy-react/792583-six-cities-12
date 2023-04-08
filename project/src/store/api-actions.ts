import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/offers';
import {
  loadOffers,
  loadComments,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setUser,
  redirectToRoute,
} from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { Comment } from '../types/comments';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { showError } from '../utils';

type ThunkConfig = {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

export const fetchOfferAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  try {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  } catch {
    showError('Ошибка при загрузке данных');
  }
});

export const fetchCommentAction = createAsyncThunk<
  void,
  undefined,
  ThunkConfig
>('data/fetchComment', async (hotelId, { dispatch, extra: api }) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${hotelId}`);
  dispatch(loadComments(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const {
      data: { email },
    } = await api.get<UserData>(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUser(email));
    dispatch(redirectToRoute(AppRoute.Main));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const {
        data: { token },
      } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      showError('Ошибка в логине или пароле');
    }
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(setUser(null));
});

export const fetchOffer = createAsyncThunk<Offer, number, ThunkConfig>(
  'fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data: offer } = await api.get<Offer>(
        `${APIRoute.Offers}/${offerId}`
      );
      return offer;
    } catch (e) {
      showError('Отель не загружен!');
      throw e;
    }
  }
);
