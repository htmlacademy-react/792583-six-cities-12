import { AuthorizationStatus } from '../../const';
import { Comments } from '../../types/comments';
import { Offer } from '../../types/offers';
import { Block } from '../../const';
import { BookmarkVersion } from '../../const';
import Gallery from '../gallery/gallery';
import PremiumMark from '../premium-mark/premium-mark';
import Rating from '../rating/rating';
import Bookmark from '../bookmark/bookmark';
import Price from '../price/price';
import PropertyHost from '../property-host/property-host';
import Reviews from '../reviews/reviews';
import InsideList from '../inside-list/inside-list';

type PropertyProps = {
  offer: Offer;
  comments: Comments;
  authorizationStatus: AuthorizationStatus;
};

export default function Property({
  offer,
  comments,
  authorizationStatus,
}: PropertyProps): JSX.Element {
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const {
    images,
    type,
    title,
    isFavorite,
    rating,
    bedrooms,
    maxAdults,
    price,
    goods,
  } = offer;

  return (
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
              {type}
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
            offerId={offer.id}
          />
        </div>
      </div>
    </section>
  );
}
