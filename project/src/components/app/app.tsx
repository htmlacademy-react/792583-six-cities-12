import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
// import RoomNotLoggedScreen from '../../pages/room-not-logged-screen/room-not-logged-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Offer } from '../../types/offers';
import { Comments } from '../../types/comments';
import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';

type AppScreenProps = {
  offers: Offer[];
  comments: Comments;
}

export default function App({ offers, comments }: AppScreenProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={offers.length
            ? <MainScreen offers={offers} />
            : <MainEmptyScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                {offers.length
                  ? <FavoritesScreen offers={offers} />
                  : <FavoritesEmptyScreen />}
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Room}
            element={
              <RoomScreen
                offers={offers}
                comments={comments}
                authorizationStatus={AuthorizationStatus.Auth}
              />
            }
          />
          <Route
            path={'*'}
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
