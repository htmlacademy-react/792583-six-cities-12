import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
// import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
// import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
// import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen';
// import RoomNotLoggedScreen from '../../pages/room-not-logged-screen/room-not-logged-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

type AppScreenProps = {
  cardsCount: number;
}

export default function App({ cardsCount }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainScreen cardsCount={cardsCount} />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <LoginScreen />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Room} element={<RoomScreen />} />
          <Route path={'*'} element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

