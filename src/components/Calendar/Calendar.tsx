import React, { PropsWithChildren, useState } from 'react';
import dayjs from 'dayjs';

import Header from './Header';
import WeekHeader from './WeekHeader';
import DefaultAction from './DefaultAction';
import { getWeeks } from './utils';
import Weekdays from './Weekdays';
import Compact from './Compact';
export interface Props extends PropsWithChildren {
  dates: dayjs.Dayjs[];
  type?: string;
  onSelect?: (dates: dayjs.Dayjs[]) => void;
  onPreviousClick?: (dates: dayjs.Dayjs[]) => void;
  onNextClick?: (dates: dayjs.Dayjs[]) => void;
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
  const current = dates.length > 0 ? dates[0] : dayjs();
  const weeks = getWeeks(current.year(), current.month());

  const select = (date: dayjs.Dayjs) => {
    if (type === 'single') {
      onSelect([date]);
      return;
    }
    if(type === 'range') {
      if(dates.length === 2){
        onSelect([date]);
      }
     if(dates.length === 1){
        if(date <= dates[0]){
          onSelect([date])
        } else {
          onSelect([...dates, date])
        }
      }
      if(dates.length === 0) {
        onSelect([date])
      }
    }
    // if (range.start && range.end) {
    //   onSelect({ start: date, end: null });
    // } else
    
    // if (range.start && range.end === null) {
    //   if (range.start > date) {
    //     onSelect({ start: date, end: null });
    //   } else {
    //     onSelect({ ...range, end: date });
    //   }
    // } else if (range.start == null) {
    //   onSelect({ ...range, start: date });
    // }
  };

  if (variant === 'daily') {
    return (
      <Compact
        date={current}
        subtitle={subtitle}
        onLeftClick={() => {
          const previous = current.subtract(1, 'day').startOf('day');
          onPreviousClick([previous]);
        }}
        onRightClick={() => {
          const next = current.add(1, 'day').startOf('day');
          onNextClick([next]);
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
          onPreviousClick([previous]);
        }}
        onRightClick={() => {
          const next = current.startOf('month').add(1, 'month').startOf('day');
          onNextClick([next]);
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
