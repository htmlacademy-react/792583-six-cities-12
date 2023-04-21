import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import {
  getErrorStatus,
  getOffersDataLoadingStatus,
} from '../../store/data-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { browserHistory } from '../../browser-history';

export default function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isOffersDataLoading) {
    return <LoadingScreen />;
  }
  if (hasError) {
    return <ErrorScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route index element={<MainScreen />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesScreen />
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
