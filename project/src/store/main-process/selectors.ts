import { City, NameSpace, SortType } from '../../const';
import { State } from '../../types/state';

export const getLocation = (state: State): City =>
  state[NameSpace.Main].location;

export const getSortType = (state: State): SortType =>
  state[NameSpace.Main].sortType;
