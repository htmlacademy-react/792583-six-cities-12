import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { City, NameSpace, SortType } from '../../const';

type MainProcess = {
  location: City;
  sortType: SortType;
};

const initialState: MainProcess = {
  location: City.Paris,
  sortType: SortType.Popular,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<City>) => {
      state.location = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
  },
});

export const { changeLocation, changeSort } = mainProcess.actions;
