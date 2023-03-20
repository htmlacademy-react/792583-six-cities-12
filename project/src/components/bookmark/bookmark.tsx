import { BookmarkVersion } from '../../types/offers';

type BookmarkProps = {
  version: BookmarkVersion;
  isActive: boolean;
};

export default function Bookmark({ version, isActive }: BookmarkProps): JSX.Element {
  const { block, imgSize } = version;
  return (
    <button
      className={`${isActive ? `${block}__bookmark-button--active` : ''} ${block}__bookmark-button button`}
      type="button"
    >
      <svg className={`${block}__bookmark-icon`} width={imgSize.width} height={imgSize.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
