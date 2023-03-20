import { Offer } from '../../types/offers';
import FavoritesList from './favorites-list';

type FavoritesProps = {
  offers: Offer[];
}

export default function Favorites({ offers }: FavoritesProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList offers={offers} />
        </section>
      </div >
    </main >
  );
}
