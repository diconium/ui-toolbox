import React, { PropsWithChildren } from 'react';
import dayjs from 'dayjs';
import Icon from '../Icon';

export interface Props extends PropsWithChildren {
  date: dayjs.Dayjs;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}
function Header({ date, onLeftClick = () => {}, onRightClick = () => {}, children }: Props) {
  return (
    <div className="flex items-center">
      <div className="flex-grow flex items-center">
        <button
          type="button"
          className="flex-shrink flex justify-end items-center"
          onClick={() => onLeftClick()}
          aria-label="LeftClick"
        >
          <Icon
            icon="chevron-left"
            size="m"
          />
        </button>
        <span className="leading-5 text-base text-toolbox-neutral font-semibold">
          {date.format('MMMM')}
          &nbsp;
          {date.year()}
        </span>
        <button
          type="button"
          className="flex-shrink flex justify-end items-center"
          onClick={() => onRightClick()}
          aria-label="RightClick"
        >
          <Icon
            icon="chevron-right"
            size="m"
          />
        </button>
      </div>
      <div className="flex-shrink flex justify-end items-center space-x-2">{children}</div>
    </div>
  );
}

export default Header;
