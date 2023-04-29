import OfferCard from '../offer-card/offer-card';
import { OfferCardVersion } from '../../const';
import { Offer } from '../../types/offers';

type OffersProps = {
  offers: Offer[];
};

export default function Offers({ offers }: OffersProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          version={OfferCardVersion.Offer}
        />
      ))}
    </>
  );
}
