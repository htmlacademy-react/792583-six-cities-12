import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer, Offers } from '../types/offers';
import { saveToken, dropToken } from '../services/token';
import { APIRoute } from '../const';
import { Comments } from '../types/comments';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { showError } from '../utils';
// import { useAppDispatch } from '../hooks';
// const dispatch = useAppDispatch();
type ThunkConfig = {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

type FavoritePostStatus = {
  id: number;
  status: number;
};

export const fetchOffersAction = createAsyncThunk<
  Offers,
  undefined,
  ThunkConfig
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data: offers } = await api.get<Offers>(APIRoute.Offers);
    return offers;
  } catch (error) {
    showError('Ошибка при загрузке данных');
    throw error;
  }
});

export const fetchOffersFavoriteAction = createAsyncThunk<
  Offers,
  undefined,
  ThunkConfig
>('data/fetchOffersFavorite', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Offers>(APIRoute.Favorite);
    return data;
  } catch (error) {
    showError('Ошибка при загрузке избранных отелей');
    throw error;
  }
});

export const setFavoriteAction = createAsyncThunk<
  Offer,
  FavoritePostStatus,
  ThunkConfig
>('data/setFavorite', async ({ id, status }, { dispatch, extra: api }) => {
  try {
    const { data } = await api.post<Offer>(
      `${APIRoute.Favorite}/${id}/${status}`
    );
    return data;
  } catch (error) {
    showError('Ошибка при отправке избранного отеля');
    throw error;
  }
});

export const fetchCommentsAction = createAsyncThunk<
  Comments,
  number,
  ThunkConfig
>('data/fetchComment', async (hotelId, { dispatch, extra: api }) => {
  const { data } = await api.get<Comments>(`${APIRoute.Comments}/${hotelId}`);
  return data;
});

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'user/checkAuthAction',
  async (_arg, { dispatch, extra: api }) => {
    await api.get<UserData>(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, ThunkConfig>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, {
        email,
        password,
      });
      saveToken(data.token);
      return data;
    } catch (error) {
      showError('Ошибка в логине или пароле');
      throw error;
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

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
