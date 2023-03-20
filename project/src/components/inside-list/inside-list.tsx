type InsideListProps = {
  goods: string[];
}

export default function InsideList({ goods }: InsideListProps): JSX.Element {
  return (
    <ul className="property__inside-list">
      {goods.map((good) => (
        <li key={good} className="property__inside-item">
          {good}
        </li>
      ))}
    </ul>
  );
}
