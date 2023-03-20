import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';
import FavoritesCards from './favorites-cards';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { filterOffersCity, sortListCityAlphabetically } from '../../utils';

type FavoritesListProps = {
  offers: Offer[];
}

export default function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  const filteredOffers = useMemo(() => filterOffersCity(offers).sort(sortListCityAlphabetically), [offers]);

  return (
    <ul className="favorites__list">
      {
        filteredOffers.map(({ city, cityOffers }) => (
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
        ))
      }
    </ul>
  );
}
