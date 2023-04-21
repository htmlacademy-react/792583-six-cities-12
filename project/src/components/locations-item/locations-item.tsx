import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import classNames from 'classnames';
import { getLocation } from '../../store/main-process/selectors';
import { changeLocation } from '../../store/main-process/main-process';
import { City } from '../../const';

type LocationsItemProps = {
  location: City;
};

export default function LocationsItem({
  location,
}: LocationsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedLocation = useAppSelector(getLocation);

  return (
    <li className="locations__item">
      <Link
        className={classNames('locations__item-link tabs__item', {
          'tabs__item--active': location === selectedLocation,
        })}
        to="#/"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(changeLocation(location));
        }}
      >
        <span>{location}</span>
      </Link>
    </li>
  );
}
