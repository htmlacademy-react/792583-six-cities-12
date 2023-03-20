import { Comments } from '../types/comments';
import { AVATAR_URL } from './offers';

export const comments: Comments = [
  {
    comment: 'A11 quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Mar 11 2023 20:10:33 GMT+1000 (Владивосток, стандартное время)',
    id: 1,
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: 'Vladlen.Tartari'
    }
  },
  {
    comment: 'A22 quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Mar 11 2023 20:10:33 GMT+1000 (Владивосток, стандартное время)',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Admit.Rsotm'
    }
  },
  {
    comment: 'A33 quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Mar 11 2023 20:10:33 GMT+1000 (Владивосток, стандартное время)',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Zhiza.Fuskoff'
    }
  },
];
