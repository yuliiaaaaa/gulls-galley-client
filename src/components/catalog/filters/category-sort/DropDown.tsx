import { useStore } from 'react-redux';
import SvgIcon from '../../../utils/svg-icon/SvgIcon';
import s from './DropDown.module.scss';
import { useState } from 'react';
import { SORT_OPTIONS } from './DropdownData';
import cn from 'classnames';

type Props = {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
};

export const DropDown: React.FC<Props> = ({ sortBy, setSortBy }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleSort = (sortOption: string) => {
    setSortBy(sortOption);
    setIsOpened(false);
  };

  return (
    <div className={s.dropdown}>
      <div className={s.dropdown__block}>
        <p>Sort by</p>
        <SvgIcon
          id="arrow-right-category"
          height={10}
          width={5}
          className={cn(s.dropdown__icon, { [s.dropdown__icon_open]: isOpened })}
          onClick={handleToggleDropdown}
        />
      </div>

      <div className={cn(s.dropdown__body, { [s.dropdown__body_open]: isOpened })}>
        {isOpened && (
          <div className={s.dropdown__header}>
            <p className={s.dropdown__header_title}>Sort by</p>
            <SvgIcon
              color="black"
              id="close"
              height={24}
              width={24}
              className={s.dropdown__closeIcon}
              onClick={handleToggleDropdown}
            />
          </div>
        )}

        {SORT_OPTIONS.map(({ label, value }) => (
          <label key={value} className={s.dropdown__option}>
            <input
              type="radio"
              name="sortOptions"
              value={value}
              checked={sortBy === value}
              onChange={() => handleSort(value)}
              className={s.dropdown__radio}
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};
