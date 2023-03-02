import React, { PropsWithChildren } from 'react';
import dayjs from 'dayjs';

import Header from './Header';
import WeekHeader from './WeekHeader';
import Day from './Day';
import DefaultAction from './DefaultAction';
import { getWeeks, getTextColor } from './utils';

const FORMAT = 'DD/MM/YYYY';

export interface Props extends PropsWithChildren {
  date?: dayjs.Dayjs | null;
  onSelect?: (date: dayjs.Dayjs) => void;
  onPreviousClick?: (date: dayjs.Dayjs) => void;
  onNextClick?: (date: dayjs.Dayjs) => void;
  onDefaultActionClick?: () => void;
  state?: any;
}

function Calendar({
  date = null,
  onSelect = () => {},
  onPreviousClick = () => {},
  onNextClick = () => {},
  onDefaultActionClick = () => {},
  state = {},
  children,
}: Props) {
  const current = date || dayjs();
  const weeks = getWeeks(current.year(), current.month());

  return (
    <div className="bg-toolbox-white rounded-2xl border border-toolbox-neutral-50 py-5 px-8">
      <Header
        date={current}
        onLeftClick={() => {
          const previous = current.endOf('month').subtract(1, 'month').startOf('day');
          onPreviousClick(previous);
        }}
        onRightClick={() => {
          const next = current.startOf('month').add(1, 'month').startOf('day');
          onNextClick(next);
        }}
      >
        {children || <DefaultAction onClick={() => onDefaultActionClick()} />}
      </Header>
      <div className="mt-7">
        <WeekHeader week={weeks[0]} />
        {weeks.map((week) => (
          <div
            key={week[0].format()}
            className="grid grid-cols-7 gap-x-6 mt-2"
          >
            {week.map((day) => (
              <Day
                key={day.format(FORMAT)}
                day={day}
                selected={!!date && day.format(FORMAT) === current.format(FORMAT)}
                textColor={getTextColor(day)}
                onClick={() => onSelect(day)}
                state={state[day.format(FORMAT)]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
