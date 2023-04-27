import { AppRoute } from '../../const';
import FavoritesCards from './favorites-cards';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { filterOffersCity, sortListCityAlphabetically } from '../../utils';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/data-process/selectors';

export default function FavoritesList(): JSX.Element {
  const offers = useAppSelector(getFavoriteOffers);
  const filteredOffers = useMemo(
    () => filterOffersCity(offers).sort(sortListCityAlphabetically),
    [offers]
  );

  return (
    <ul className="favorites__list">
      {filteredOffers.map(({ city, cityOffers }) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <FavoritesCards offers={cityOffers} />
        </li>
      ))}
    </ul>
  );
}
