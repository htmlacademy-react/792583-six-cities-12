import { OfferCardVersion } from '../../const';
import { Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type FavoritesCardsProps = {
  offers: Offer[];
};

export default function FavoritesCards({ offers }: FavoritesCardsProps): JSX.Element {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <OfferCard offer={offer} version={OfferCardVersion.Favorites} key={offer.id} />
      ))}
    </div>
  );
}
