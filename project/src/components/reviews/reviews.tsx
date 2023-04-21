import { Comment, Comments } from '../../types/comments';
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
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment: Comment) => (
          <ReviewsItem key={comment.id} comment={comment} />
        ))}
      </ul>
      {isAuthorized && <ReviewsForm id={offerId} />}
    </section>
  );
}
