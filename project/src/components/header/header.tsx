import Logo from '../logo/logo';
import { AuthorizationStatus, LogoVersion } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import HeaderSignIn from './header-sign-in/header-sign-in';
import {
  getAuthorizationStatus,
  getUserName,
} from '../../store/user-process/selectors';
import { getFavoriteOffers } from '../../store/data-process/selectors';

export default function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const userName = useAppSelector(getUserName);
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
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="/"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {userName}
                    </span>
                    <span className="header__favorite-count">
                      {favoriteOffers.length}
                    </span>
                  </a>
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
