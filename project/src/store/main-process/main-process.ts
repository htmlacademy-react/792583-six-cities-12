import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { City, NameSpace, SortType } from '../../const';
import { IdOffer } from '../../types/offers';

type MainProcess = {
  location: City;
  selectedOffer: IdOffer | null;
  sortType: SortType;
};

const initialState: MainProcess = {
  location: City.Paris,
  selectedOffer: null,
  sortType: SortType.Popular,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<City>) => {
      state.location = action.payload;
    },
    selectOffer: (state, action: PayloadAction<IdOffer | null>) => {
      state.selectedOffer = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
  },
});

export const { changeLocation, selectOffer, changeSort } = mainProcess.actions;
