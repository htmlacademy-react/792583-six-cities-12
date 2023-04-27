import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { City, NameSpace, SortType } from '../../const';
import { IdOffer, Offer } from '../../types/offers';

type MainProcess = {
  location: City;
  selectedOfferId: IdOffer | null;
  currentOffer: Offer | undefined;
  sortType: SortType;
};

const initialState: MainProcess = {
  location: City.Paris,
  selectedOfferId: null,
  currentOffer: undefined,
  sortType: SortType.Popular,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<City>) => {
      state.location = action.payload;
    },
    selectedOfferId: (state, action: PayloadAction<IdOffer | null>) => {
      state.selectedOfferId = action.payload;
    },
    selectionOffer: (state, action: PayloadAction<Offer>) => {
      state.currentOffer = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
  },
});

export const { changeLocation, selectedOfferId, changeSort, selectionOffer } =
  mainProcess.actions;
