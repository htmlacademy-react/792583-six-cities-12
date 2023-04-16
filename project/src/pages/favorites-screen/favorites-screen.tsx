import Favorites from '../../components/favorites/favorites';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty-screen';

export default function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (
    authorizationStatus === AuthorizationStatus.NoAuth ||
    AuthorizationStatus.Unknown
  ) {
    dispatch(redirectToRoute(AppRoute.Main));
  }
  const favoriteOffers = useAppSelector((state) => state.DATA.favorite);
  return (
    <div className="page">
      <Header />
      {favoriteOffers.length ? <Favorites /> : <FavoritesEmptyScreen />}
      <Footer />
    </div>
  );
}
