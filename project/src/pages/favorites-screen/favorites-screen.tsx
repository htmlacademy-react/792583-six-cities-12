import Favorites from '../../components/favorites/favorites';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/data-process/selectors';
import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty-screen';

export default function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
      <Header />
      {favoriteOffers.length ? <Favorites /> : <FavoritesEmptyScreen />}
      <Footer />
    </div>
  );
}
