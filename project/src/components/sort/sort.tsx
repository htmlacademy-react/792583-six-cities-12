import classNames from 'classnames';
import { useRef, useState } from 'react';
import { SortType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortType } from '../../store/main-process/selectors';
import useOnClickOutside from '../../hooks/useOnClickOutcide';
import { changeSort } from '../../store/main-process/main-process';

export default function Sort(): JSX.Element {
  const [isSortOpen, setSortState] = useState(false);
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(getSortType);
  const refOne = useRef<HTMLDivElement>(null);
  useOnClickOutside(refOne, () => setSortState(false));

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setSortState(!isSortOpen)}
        ref={refOne}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isSortOpen ? 'places__options--opened' : ''
        }`}
      >
        {Object.entries(SortType).map(([, value]) => (
          <li
            key={value}
            className={classNames('places__option', {
              'places__option--active': value === sortType,
            })}
            tabIndex={0}
            onClick={() => {
              dispatch(changeSort(value));
              setSortState(false);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}
