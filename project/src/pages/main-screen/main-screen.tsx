import Header from '../../components/header/header';
import Sort from '../../components/sort/sort';
import LocationsList from '../../components/locations-list/locations-list';
import Offers from '../../components/offers/offers';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import MainEmptyScreen from '../main-empty-screen/main-empty-screen';
import classNames from 'classnames';

export default function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const location = useAppSelector((state) => state.location);
  // const rentalOffers = useAppSelector((state) => state.rentalOffers);
  const selectedOffers = offers.filter((offer) => offer.city.name === location);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={classNames('page__main page__main--index', {
        'page__main--index-empty': selectedOffers.length === 0
      })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        {
          selectedOffers.length === 0 ? <MainEmptyScreen /> : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{selectedOffers.length} places to stay in {location}</b>
                  <Sort />
                  <div className="cities__places-list places__list tabs__content">
                    <Offers /* offers={offers} */ />
                  </div>
                </section>
                <div className="cities__right-section">
                  <section style={{ height: 100 }} className='cities__map map'>
                    <Map offers={selectedOffers} />
                  </section>

                </div>
              </div>
            </div>
          )
        }
      </main>
    </div>
  );
}
