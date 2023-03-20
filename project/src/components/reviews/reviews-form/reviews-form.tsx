import { useState, Fragment, ChangeEvent } from 'react';
import { RATING_STARS_COUNT, RATING_TITLES } from '../../../const';

export default function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState({ comment: '', rating: 0 });
  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from({ length: RATING_STARS_COUNT }, (_, index) => (
          <Fragment key={`${index}-input`}>
            <input onChange={handleFieldChange}
              className="form__rating-input visually-hidden"
              name="rating" value={RATING_STARS_COUNT - index}
              id={`${RATING_STARS_COUNT - index}-stars`}
              type="radio"
              checked={Number(formData.rating) === RATING_STARS_COUNT - index}
            />
            <label htmlFor={`${RATING_STARS_COUNT - index}-stars`} className="reviews__rating-label form__rating-label" title={RATING_TITLES[index]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea onChange={(evt) => {
        setFormData({ ...formData, comment: evt.target.value });
      }} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
