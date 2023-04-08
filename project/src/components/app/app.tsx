import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import { browserHistory } from '../../browser-history';
import { Rings } from 'react-loader-spinner';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );
  const offers = useAppSelector((state) => state.offers);

  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    isOffersDataLoading
  ) {
    return (
      <Rings
        height="250"
        width="250"
        color="#4481c3"
        radius="15"
        wrapperStyle={{}}
        wrapperClass=""
        // eslint-disable-next-line react/jsx-boolean-value
        visible={true}
        ariaLabel="rings-loading"
      />
    );
  }

  // const offers = useAppSelector((state) => state.offers);
  // const comments = useAppSelector((state) => state.comments);
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            index
            element={offers.length ? <MainScreen /> : <MainEmptyScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                {offers.length ? <FavoritesScreen /> : <FavoritesEmptyScreen />}
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Room} element={<RoomScreen />} />
          <Route path={'*'} element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
