import React from 'react';
import dayjs from 'dayjs';

import Icon from '../Icon';

export interface Props {
  date: dayjs.Dayjs;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  subtitle?: string;
}

function Compact({
  date,
  onLeftClick = () => {},
  onRightClick = () => {},
  subtitle = '',
}: Props) {
  return (
    <div className="max-w-sm bg-toolbox-white rounded-2xl border border-toolbox-neutral-50 py-5 px-8 flex">
      <div className="flex items-center">
        <button
          type="button"
          className="flex-shrink flex justify-end items-center"
          onClick={() => onLeftClick()}
        >
          <Icon icon="chevron-left" size="m" />
        </button>
      </div>
      <div className="flex flex-col px-12 items-center">
        <div className="leading-10 text-[32px] font-semibold text-center bg-toolbox-secondary text-toolbox-white w-[42px] h-[42px] rounded-full flex items-center justify-center">
          {date.format('D')}
        </div>
        <div className="leading-6 text-base font-semibold uppercase my-0.5">
          {date.format('MMMM YYYY')}
        </div>
        {subtitle && <div className="leading-5 text-base">{subtitle}</div>}
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="flex-shrink flex justify-end items-center"
          onClick={() => onRightClick()}
        >
          <Icon icon="chevron-right" size="m" />
        </button>
      </div>
    </div>
  );
}

export default Compact;
