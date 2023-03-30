import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';
import { OfferCardVersion } from '../../const';
import { useAppSelector } from '../../hooks';

export default function Offers(): JSX.Element {
  const location = useAppSelector((state) => state.location);
  const offers = useAppSelector((state) => state.offers);
  const selectedOffers = offers.filter((offer) => offer.city.name === location);
  const [, setActiveCard] = useState<number | null>(null);
  return (
    <>
      {selectedOffers.map((offer) => <OfferCard onMouseEnter={setActiveCard} key={offer.id} offer={offer} version={OfferCardVersion.Offer} />)}
    </>
  );
}
