import React, { PropsWithChildren, useState } from 'react';
import dayjs from 'dayjs';

import Header from './Header';
import WeekHeader from './WeekHeader';
import DefaultAction from './DefaultAction';
import { getWeeks } from './utils';
import Weekdays from './Weekdays';
import Compact from './Compact';

export interface Range {
  start?: dayjs.Dayjs | null;
  end?: dayjs.Dayjs | null;
}
export interface Props extends PropsWithChildren {
  range?: Range;
  isSingleDate?: boolean;
  onSelect?: (range: Range) => void;
  onPreviousClick?: (range: Range) => void;
  onNextClick?: (range: Range) => void;
  onDefaultActionClick?: () => void;
  state?: any;
  variant?: string;
  subtitle?: string;
}

function Calendar({
  range = { start: null, end: null },
  isSingleDate = true,
  onSelect = () => {},
  onPreviousClick = () => {},
  onNextClick = () => {},
  onDefaultActionClick = () => {},
  state = {},
  children,
  variant = 'default',
  subtitle = '',
}: Props) {
  const current = range?.start || dayjs();
  const weeks = getWeeks(current.year(), current.month());

  const select = (date: dayjs.Dayjs) => {
    if (isSingleDate) {
      onSelect({ start: date, end: null });
      return;
    }
    if (range.start && range.end) {
      onSelect({ start: date, end: null });
    } else if (range.start && range.end === null) {
      if (range.start > date) {
        onSelect({ start: date, end: range.start });
      } else {
        onSelect({ ...range, end: date });
      }
    } else if (range.start == null) {
      onSelect({ ...range, start: date });
    }
  };
  const selectPrevious = (date: dayjs.Dayjs) => {
    onPreviousClick({start: date, end: null})
  }
  const selectNext = (date: dayjs.Dayjs) => {
    onPreviousClick({start: date, end: null})
  }

  if (variant === 'daily') {
    return (
      <Compact
        date={current}
        subtitle={subtitle}
        onLeftClick={() => {
          const previous = current.subtract(1, 'day').startOf('day');
          onPreviousClick({start: previous, end: null});
        }}
        onRightClick={() => {
          const next = current.add(1, 'day').startOf('day');
          onNextClick({start: next, end: null});
        }}
      />
    );
  }

  return (
    <div className="max-w-sm bg-toolbox-white rounded-2xl border border-toolbox-neutral-50 py-5 px-8">
      <Header
        date={current}
        onLeftClick={() => {
          const previous = current.endOf('month').subtract(1, 'month').startOf('day');
          onPreviousClick({start: previous, end: null});
        }}
        onRightClick={() => {
          const next = current.startOf('month').add(1, 'month').startOf('day');
          onNextClick({start: next, end: null});
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
            selected={range}
            onSelect={(d) => select(d)}
            state={state}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
