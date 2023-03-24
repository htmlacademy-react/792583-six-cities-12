import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersMock } from './mock/offers';
import { comments } from './mock/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      offers={offersMock}
      comments={comments}
    />
  </React.StrictMode>,
);
