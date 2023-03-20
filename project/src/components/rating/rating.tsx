import { Block } from '../../const';
import { adaptRatingForRendering } from '../../utils';

type RatingProps = {
  rating: number;
  block: Block;
}

export default function Rating({ rating, block }: RatingProps): JSX.Element {
  return (
    <div className={`${block}__rating rating`}>
      <div className={`${block}__stars rating__stars`}>
        <span style={{ width: `${adaptRatingForRendering(rating)}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
