import React, { PropsWithChildren } from 'react';
import dayjs from 'dayjs';

import Header from './Header';
import WeekHeader from './WeekHeader';
import DefaultAction from './DefaultAction';
import { getWeeks } from './utils';
import Weekdays from './Weekdays';
import Compact from './Compact';

export interface Props extends PropsWithChildren {
  date?: dayjs.Dayjs | null;
  onSelect?: (date: dayjs.Dayjs) => void;
  onPreviousClick?: (date: dayjs.Dayjs) => void;
  onNextClick?: (date: dayjs.Dayjs) => void;
  onDefaultActionClick?: () => void;
  state?: any;
  variant?: string;
  subtitle?: string;
}

function Calendar({
  date = null,
  onSelect = () => {},
  onPreviousClick = () => {},
  onNextClick = () => {},
  onDefaultActionClick = () => {},
  state = {},
  children,
  variant = 'default',
  subtitle = '',
}: Props) {
  const current = date || dayjs();
  const weeks = getWeeks(current.year(), current.month());

  if (variant === 'daily') {
    return (
      <Compact
        date={current}
        subtitle={subtitle}
        onLeftClick={() => {
          const previous = current.subtract(1, 'day').startOf('day');
          onPreviousClick(previous);
        }}
        onRightClick={() => {
          const next = current.add(1, 'day').startOf('day');
          onNextClick(next);
        }}
      />
    );
  }

  return (
    <div className="max-w-sm bg-toolbox-white rounded-2xl border border-toolbox-neutral-50 py-5 px-8">
      <Header
        date={current}
        onLeftClick={() => {
          const previous = current
            .endOf('month')
            .subtract(1, 'month')
            .startOf('day');
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
          <Weekdays
            key={week[0].format()}
            week={week}
            selected={date || current}
            onSelect={(d) => onSelect(d)}
            state={state}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
