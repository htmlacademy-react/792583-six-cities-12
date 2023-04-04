import Favorites from '../../components/favorites/favorites';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
// import { useAppSelector } from '../../hooks';
// import { useMemo } from 'react';

export default function FavoritesScreen(): JSX.Element {
  // const offers = useAppSelector((state) => state.offers);
  // const filterOffers = useMemo(() => offers.filter(({ isFavorite }) => isFavorite), [offers]);
  // const favoriteOffers = offers.filter((offer) => offer.isFavorite === true);

  return (
    <div className="page">
      <Header />
      <Favorites />
      <Footer />
    </div>
  );
}
