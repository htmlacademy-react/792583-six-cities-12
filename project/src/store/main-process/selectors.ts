import { City, NameSpace, SortType } from '../../const';
import { IdOffer, Offer } from '../../types/offers';
import { State } from '../../types/state';

export const getLocation = (state: State): City =>
  state[NameSpace.Main].location;

export const getSelectedOfferId = (state: State): IdOffer | null =>
  state[NameSpace.Main].selectedOfferId;

export const getSortType = (state: State): SortType =>
  state[NameSpace.Main].sortType;

export const getCurrentOffer = (state: State): Offer | undefined =>
  state[NameSpace.Main].currentOffer;
