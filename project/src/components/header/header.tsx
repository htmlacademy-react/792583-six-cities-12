import Logo from '../logo/logo';
import { AppRoute, AuthorizationStatus, LogoVersion } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import HeaderSignIn from './header-sign-in/header-sign-in';
import {
  getAuthorizationStatus,
  getUserData,
} from '../../store/user-process/selectors';
import { getFavoriteOffers } from '../../store/data-process/selectors';

export default function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo version={LogoVersion.Header} />
          </div>
          {authorizationStatus === AuthorizationStatus.Auth ? (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      <img
                        src={userData?.avatarUrl ?? './img/avatar.svg'}
                        width="20"
                        height="20"
                        alt="user avatar"
                        style={{ borderRadius: '50%' }}
                      />
                    </div>
                    <span className="header__user-name user__name">
                      {userData?.email}
                    </span>
                    <span className="header__favorite-count">
                      {favoriteOffers.length}
                    </span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    to="/"
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(logoutAction());
                    }}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          ) : (
            <HeaderSignIn />
          )}
        </div>
      </div>
    </header>
  );
}
