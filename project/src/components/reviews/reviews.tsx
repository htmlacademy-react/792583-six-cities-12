import { useMemo } from 'react';
import { MAX_COMMENTS_COUNT } from '../../const';
import { Comment, Comments } from '../../types/comments';
import { sortCommentsByDate } from '../../utils';
import ReviewsForm from './reviews-form/reviews-form';
import ReviewsItem from './reviews-item/reviews-item';

type ReviewsProps = {
  comments: Comments;
  isAuthorized: boolean;
  offerId: number;
};

export default function Reviews({
  comments,
  isAuthorized,
  offerId,
}: ReviewsProps): JSX.Element {
  const sortedComments = useMemo(
    () => [...comments].sort(sortCommentsByDate).slice(0, MAX_COMMENTS_COUNT),
    [comments]
  );

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{sortedComments.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedComments.map((comment: Comment) => (
          <ReviewsItem key={comment.id} comment={comment} />
        ))}
      </ul>
      {isAuthorized && <ReviewsForm id={offerId} />}
    </section>
  );
}
