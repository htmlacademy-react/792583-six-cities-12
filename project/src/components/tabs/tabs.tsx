import { City, AppRoute } from '../../const';

export default function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(City).map((city) => (
            <li className="locations__item" key={city}>
              <a className="locations__item-link tabs__item" href={AppRoute.Main}>
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
