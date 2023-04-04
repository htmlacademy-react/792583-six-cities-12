import Bookmark from '../../components/bookmark/bookmark';
import Gallery from '../../components/gallery/gallery';
import Header from '../../components/header/header';
import PremiumMark from '../../components/premium-mark/premium-mark';
import Rating from '../../components/rating/rating';
import { AppRoute, AuthorizationStatus, BookmarkVersion } from '../../const';
import { Block } from '../../const';
import InsideList from '../../components/inside-list/inside-list';
import Price from '../../components/price/price';
import PropertyHost from '../../components/property-host/property-host';
import { Navigate, useParams } from 'react-router-dom';
import Offers from '../../components/offers/offers';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { ucFirst } from '../../utils';

export default function RoomScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const comments = useAppSelector((state) => state.comments);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  // const selectedOffers = useAppSelector((state) => state.rentalOffers);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const { id } = useParams();
  const offer = offers.find((item) => item.id === Number(id));
  if (!offer) {
    return (<Navigate to={AppRoute.Main} />);
  }
  const { bedrooms, goods, images, isFavorite, maxAdults, price, rating, title, type } = offer;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery images={images} type={type} />
          <div className="property__container container">
            <div className="property__wrapper">
              <PremiumMark block={Block.Property} />
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <Bookmark version={BookmarkVersion.Offer} isActive={isFavorite} />
              </div>
              <Rating block={Block.Property} rating={rating} />
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {ucFirst(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <Price block={Block.Property} price={price} />
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <InsideList goods={goods} />
              </div>
              <PropertyHost offer={offer} />
              <Reviews comments={comments} isAuthorized={isAuthorized} />
            </div>
          </div>
          <section style={{ height: 500 }} className="property__map map">
            <Map offers={offers.filter((item) => item.id !== Number(id)).slice(0, 3)} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <Offers />
            </div>
          </section>
        </div>
      </main>
    </div >
  );
}
