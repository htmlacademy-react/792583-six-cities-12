import FavoritesList from './favorites-list';

export default function Favorites(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList />
        </section>
      </div>
    </main>
  );
}
