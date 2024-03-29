import React, { PropsWithChildren, useState } from 'react';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import dayjs from 'dayjs';

import Header from './Header';
import WeekHeader from './WeekHeader';
import DefaultAction from './DefaultAction';
import { getWeeks } from './utils';
import Weekdays from './Weekdays';
import Compact from './Compact';

dayjs.extend(isSameOrBefore);

export interface Props extends PropsWithChildren {
  dates: dayjs.Dayjs[];
  type?: string;
  onSelect?: (dates: dayjs.Dayjs[]) => void;
  onPreviousClick?: (date: dayjs.Dayjs) => void;
  onNextClick?: (date: dayjs.Dayjs) => void;
  onDefaultActionClick?: () => void;
  state?: any;
  variant?: string;
  subtitle?: string;
}

function Calendar({
  dates = [],
  type = 'single',
  onSelect = () => {},
  onPreviousClick = () => {},
  onNextClick = () => {},
  onDefaultActionClick = () => {},
  state = {},
  children,
  variant = 'default',
  subtitle = '',
}: Props) {
  const [current, setCurrent] = useState(dates.length > 0 ? dates[0] : dayjs());
  const weeks = getWeeks(current.year(), current.month());

  const select = (date: dayjs.Dayjs) => {
    if (type === 'range' && dates.length === 1) {
      onSelect(date.isSameOrBefore(dates[0]) ? [date] : [...dates, date]);
    } else {
      onSelect([date]);
    }
  };

  const previousClickHandler = () => {
    const previous = current.endOf('month').subtract(1, 'month').startOf('day');
    setCurrent(previous);
    onPreviousClick(current);
  };

  const nextClickHandler = () => {
    const next = current.startOf('month').add(1, 'month').startOf('day');
    setCurrent(next);
    onNextClick(current);
  };

  if (variant === 'daily') {
    return (
      <Compact
        date={current}
        subtitle={subtitle}
        onLeftClick={() => {
          const previous = current.subtract(1, 'day').startOf('day');
          setCurrent(previous);
          onPreviousClick(previous);
        }}
        onRightClick={() => {
          const next = current.add(1, 'day').startOf('day');
          setCurrent(next);
          onNextClick(next);
        }}
      />
    );
  }

  return (
    <div className="max-w-sm bg-toolbox-white rounded-2xl border border-toolbox-neutral-50 py-5 px-8">
      <Header
        date={current}
        onLeftClick={previousClickHandler}
        onRightClick={nextClickHandler}
      >
        {children || <DefaultAction onClick={() => onDefaultActionClick()} />}
      </Header>
      <div className="mt-7">
        <WeekHeader week={weeks[0]} />
        {weeks.map((week) => (
          <Weekdays
            key={week[0].format()}
            week={week}
            selected={dates}
            onSelect={(d) => select(d)}
            state={state}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
