import React from 'react';
import dayjs from 'dayjs';

import Day from './Day';
import { getTextColor } from './utils';

export const FORMAT = 'DD/MM/YYYY';

export interface Props {
  week?: dayjs.Dayjs[];
  onSelect?: (selected: dayjs.Dayjs) => void;
  selected: dayjs.Dayjs[];
  state?: any;
}

function Weekdays({ week = [], onSelect = () => {}, selected, state = {} }: Props) {
  const isSelected = (day: dayjs.Dayjs) => {
    return (selected.length > 1 &&
      (selected[0].format(FORMAT) === day.format(FORMAT) ||
        selected[1].format(FORMAT) === day.format(FORMAT))) ||
      (selected!.length === 1 && selected[0].format(FORMAT) === day.format(FORMAT)) || false;
  };
  return (
    <div className={`grid grid-cols-7 gap-x-6 mt-2`}>
      {week.map((day) => (
        <Day
          key={day.format(FORMAT)}
          day={day}
          selected={
            isSelected(day)
          }
          // inRange={
          //   (selected?.start && selected?.end && day > selected?.start && day < selected?.end) ||
          //   false
          // }
          textColor={getTextColor(day, selected[0])}
          onClick={() => onSelect(day)}
          state={state[day.format(FORMAT)]}
        />
      ))}
    </div>
  );
}

export default Weekdays;
