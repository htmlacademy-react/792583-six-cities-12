import Favorites from '../../components/favorites/favorites';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Offer } from '../../types/offers';
import { useMemo } from 'react';

type FavoritesProps = {
  offers: Offer[];
}

export default function FavoritesScreen({ offers }: FavoritesProps): JSX.Element {
  const filterOffers = useMemo(() => offers.filter(({ isFavorite }) => isFavorite), [offers]);

  return (
    <div className="page">
      <Header />
      <Favorites offers={filterOffers} />
      <Footer />
    </div>
  );
}
