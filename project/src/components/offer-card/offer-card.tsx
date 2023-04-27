import { Link } from 'react-router-dom';
import {
  AppRoute,
  Block,
  BookmarkVersion,
  OfferCardVersion,
} from '../../const';
import { Offer, OfferVersion } from '../../types/offers';
import { ucFirst } from '../../utils';
import Bookmark from '../bookmark/bookmark';
import PremiumMark from '../premium-mark/premium-mark';
import Price from '../price/price';
import Rating from '../rating/rating';
import { generatePath } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import {
  selectedOfferId,
  selectionOffer,
} from '../../store/main-process/main-process';

type OfferScreenProps = {
  offer: Offer;
  version: OfferVersion;
};

export default function OfferCard({
  offer,
  version,
}: OfferScreenProps): JSX.Element {
  const {
    price,
    type,
    title,
    isPremium,
    previewImage,
    isFavorite,
    id,
    rating,
  } = offer;
  const { block, imgSize } = version;
  const isFavoriteVersion = OfferCardVersion.Favorites === version;
  const dispatch = useAppDispatch();

  return (
    <article
      onMouseEnter={() => dispatch(selectedOfferId(offer.id))}
      onMouseLeave={() => dispatch(selectedOfferId(null))}
      onClick={() => dispatch(selectionOffer(offer))}
      className={`${block}__card place-card`}
    >
      {isPremium && <PremiumMark block={Block.OfferCard} />}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Room, { id: `${offer.id}` })}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgSize.width}
            height={imgSize.height}
            alt={`${title}`}
          />
        </Link>
      </div>
      <div
        className={`${
          isFavoriteVersion ? `${block}__card-info` : ''
        } place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <Price block={Block.OfferCard} price={price} />
          <Bookmark
            version={BookmarkVersion.Card}
            isFavorite={isFavorite}
            offerId={offer.id}
          />
        </div>
        <Rating block={Block.OfferCard} rating={rating} />
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, { id: id.toString() })}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{ucFirst(type)}</p>
      </div>
    </article>
  );
}
