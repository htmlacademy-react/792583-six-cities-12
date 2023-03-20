import { Comment } from '../../../types/comments';
import { Block } from '../../../const';
import dayjs from 'dayjs';
import Rating from '../../rating/rating';

const DATE_FORMAT = 'MMMM YYYY';

type ReviewsItemProps = {
  comment: Comment;
}

export default function ReviewsItem({ comment }: ReviewsItemProps): JSX.Element {
  const humanizeDate = dayjs(comment.date).format(DATE_FORMAT);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating rating={comment.rating} block={Block.Reviews} />
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>{humanizeDate}</time>
      </div>
    </li>
  );
}
