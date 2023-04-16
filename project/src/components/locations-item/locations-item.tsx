import { Link } from 'react-router-dom';
import { /* useAppDispatch, */ useAppSelector } from '../../hooks';
import classNames from 'classnames';
// import { getOffers } from '../../store/data-process/selectors';
import { getLocation } from '../../store/main-process/selectors';

type LocationsItemProps = {
  location: string;
};

export default function LocationsItem({
  location,
}: LocationsItemProps): JSX.Element {
  // const offers = useAppSelector(getOffers);
  // const dispatch = useAppDispatch();
  const selectedLocation = useAppSelector(getLocation);
  // const selectedOffers = offers.filter((offer) => offer.city.name === selectedLocation);

  return (
    <li className="locations__item">
      <Link
        className={classNames('locations__item-link tabs__item', {
          'tabs__item--active': location === selectedLocation,
        })}
        to="#/"
        onClick={(evt) => {
          evt.preventDefault();
          // dispatch(changeLocation(location));
          // dispatch(listOfRentalOffers(selectedOffers));
        }}
      >
        <span>{location}</span>
      </Link>
    </li>
  );
}
