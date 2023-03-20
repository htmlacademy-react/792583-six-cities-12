import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offers';
import { useState } from 'react';
import { OfferCardVersion } from '../../const';

type OffersProps = {
  offers: Offer[];
}

export default function Offers({ offers }: OffersProps): JSX.Element {
  const [, setActiveCard] = useState<number | null>(null);
  return (
    <>
      {offers.map((offer) => <OfferCard onMouseEnter={setActiveCard} key={offer.id} offer={offer} version={OfferCardVersion.Offer} />)}
    </>
  );
}
