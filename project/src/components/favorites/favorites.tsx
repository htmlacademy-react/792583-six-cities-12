import { useAppSelector } from '../../hooks';
import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import FavoritesList from './favorites-list';

export default function Favorites(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoriteOffer = offers.filter((offer) => offer.isFavorite === true);
  console.log(favoriteOffer);
  return (
    favoriteOffer.length === 0 ? <FavoritesEmptyScreen /> : (
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={favoriteOffer} />
          </section>
        </div >
      </main >
    )
  );
}
