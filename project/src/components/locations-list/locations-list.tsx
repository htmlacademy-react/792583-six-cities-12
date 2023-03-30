import { City } from '../../const';
import LocationsItem from '../locations-item/locations-item';

export default function LocationsList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(City).map((location) => (
            <LocationsItem location={location} key={location} />
          ))}
        </ul>
      </section>
    </div>
  );
}
