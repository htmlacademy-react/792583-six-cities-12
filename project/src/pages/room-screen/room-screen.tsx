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
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ucFirst } from '../../utils';
import {
  getComments,
  getNearbyOffers,
  getOffers,
} from '../../store/data-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useEffect } from 'react';
import {
  fetchCommentsAction,
  fetchNearbyOfferAction,
  fetchOffer,
} from '../../store/api-actions';
import MapOffer from '../../components/map/map-offer/map-offer';

export default function RoomScreen(): JSX.Element {
  const id = Number(useParams().id);
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getComments);
  const offers = useAppSelector(getOffers);
  const nearOffers = useAppSelector(getNearbyOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const offer = offers.find((item) => item.id === Number(id));

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchNearbyOfferAction(id));
    dispatch(fetchCommentsAction(id));
  }, [dispatch, id, comments.length]);

  if (!offer) {
    return <Navigate to={AppRoute.Main} />;
  }

  const {
    bedrooms,
    goods,
    images,
    isFavorite,
    maxAdults,
    price,
    rating,
    title,
    type,
  } = offer;

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
                <h1 className="property__name">{title}</h1>
                <Bookmark
                  version={BookmarkVersion.Offer}
                  isFavorite={isFavorite}
                  offerId={offer.id}
                />
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
              <Reviews
                comments={comments}
                isAuthorized={isAuthorized}
                offerId={id}
              />
            </div>
          </div>
          <section style={{ height: 500 }} className="property__map map">
            <MapOffer offers={nearOffers} currentOffer={offer}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <Offers offers={nearOffers} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
