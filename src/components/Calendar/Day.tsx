import React from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import Dot from '../Dot';

export interface Props {
  day?: dayjs.Dayjs;
  state?: string;
  textColor?: string;
  selected?: boolean;
  inRange?: boolean;
  onClick?: (day: dayjs.Dayjs) => void;
}

function Day({
  day = dayjs(),
  state = '',
  textColor = 'text-toolbox-neutral',
  selected = false,
  inRange = false,
  onClick = () => {},
}: Props) {
  const template = classNames([
    'leading-6 text-base text-center',
    textColor,
    (selected || inRange) && 'bg-toolbox-secondary text-toolbox-white w-6 h-6 rounded-full',
  ]);

  return (
    <button
      className="flex flex-col items-center space-y-1 w-7"
      type="button"
      onClick={() => onClick(day)}
    >
      <div className={template}>{day.format('D')}</div>
      <div className="h-2">
        {state && (
          <Dot
            size="s"
            color={state}
          />
        )}
      </div>
    </button>
  );
}

export default Day;
