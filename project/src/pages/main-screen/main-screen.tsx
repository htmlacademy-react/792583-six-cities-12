import Header from '../../components/header/header';
import Sort from '../../components/sort/sort';
import Tabs from '../../components/tabs/tabs';
import { Offer } from '../../types/offers';
import Offers from '../../components/offers/offers';
import Map from '../../components/map/map';

type MainScreenProps = {
  offers: Offer[];
};

export default function MainScreen({ offers }: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <Offers offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className='cities__map map'>
                <Map offers={offers} />
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
