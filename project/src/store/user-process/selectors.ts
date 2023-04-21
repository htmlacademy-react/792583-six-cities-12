import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserAuth } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

export const getUserData = (state: State): UserAuth | null =>
  state[NameSpace.User].userData;
