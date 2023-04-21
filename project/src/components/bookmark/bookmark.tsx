import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFavoriteAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { BookmarkVersion } from '../../types/offers';

type BookmarkProps = {
  version: BookmarkVersion;
  isFavorite: boolean;
  offerId: number;
};

export default function Bookmark({
  version,
  isFavorite,
  offerId,
}: BookmarkProps): JSX.Element {
  const { block, imgSize } = version;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const handleFavoriteMark = () => {
    if (isAuthorized) {
      dispatch(setFavoriteAction({ id: offerId, status: Number(!isFavorite) }));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={`${
        isFavorite ? `${block}__bookmark-button--active` : ''
      } ${block}__bookmark-button button`}
      type="button"
      onClick={handleFavoriteMark}
    >
      <svg
        className={`${block}__bookmark-icon`}
        width={imgSize.width}
        height={imgSize.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
