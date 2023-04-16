import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';
import { OfferCardVersion } from '../../const';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offers';
import { SortType } from '../../const';
import { getLocation, getSortType } from '../../store/main-process/selectors';

type OffersProps = {
  offers: Offer[];
};

export default function Offers({ offers }: OffersProps): JSX.Element {
  const location = useAppSelector(getLocation);
  // const offers = useAppSelector((state) => state.offers);
  const selectedOffers = offers.filter((offer) => offer.city.name === location);
  const [, setActiveCard] = useState<number | null>(null);
  const sortType = useAppSelector(getSortType);
  const changingSort = (array: Offer[], type: string) => {
    switch (type) {
      case SortType.LowPrice:
        return array.sort((a, b) => a.price - b.price);
      case SortType.HightPrice:
        return array.sort((b, a) => a.price - b.price);
      case SortType.Rating:
        return array.sort((b, a) => a.rating - b.rating);
      default:
        return array;
    }
  };
  changingSort(selectedOffers, sortType);

  return (
    <>
      {selectedOffers.map((offer) => (
        <OfferCard
          onMouseEnter={setActiveCard}
          key={offer.id}
          offer={offer}
          version={OfferCardVersion.Offer}
        />
      ))}
    </>
  );
}
