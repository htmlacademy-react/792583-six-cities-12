import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersMock } from './mock/offers';
import { comments } from './mock/comments';

const Settings = {
  CardsCount: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      cardsCount={Settings.CardsCount}
      offers={offersMock}
      comments={comments}
    />
  </React.StrictMode>,
);
