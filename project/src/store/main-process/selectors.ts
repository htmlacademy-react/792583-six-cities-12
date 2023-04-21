import { City, NameSpace, SortType } from '../../const';
import { IdOffer } from '../../types/offers';
import { State } from '../../types/state';

export const getLocation = (state: State): City =>
  state[NameSpace.Main].location;

export const getSelectedOffer = (state: State): IdOffer | null =>
  state[NameSpace.Main].selectedOffer;

export const getSortType = (state: State): SortType =>
  state[NameSpace.Main].sortType;
