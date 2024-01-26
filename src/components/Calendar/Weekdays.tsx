import React from 'react';
import dayjs from 'dayjs';

import Day from './Day';
import isBetween from 'dayjs/plugin/isBetween';
import { getTextColor } from './utils';

export const FORMAT = 'DD/MM/YYYY';

export interface Props {
  week?: dayjs.Dayjs[];
  onSelect?: (selected: dayjs.Dayjs) => void;
  selected: dayjs.Dayjs[];
  state?: any;
}

function Weekdays({ week = [], onSelect = () => {}, selected, state = {} }: Props) {
  dayjs.extend(isBetween);
  const isSelected = (day: dayjs.Dayjs) =>
    (selected.length > 1 &&
      (selected[0].format(FORMAT) === day.format(FORMAT) ||
        selected[1].format(FORMAT) === day.format(FORMAT))) ||
    (selected!.length === 1 && selected[0].format(FORMAT) === day.format(FORMAT)) ||
    false;

  return (
    <div className="grid grid-cols-7 gap-x-6 mt-2">
      {week.map((day) => (
        <Day
          key={day.format(FORMAT)}
          day={day}
          selected={isSelected(day)}
          inRange={selected.length > 1 && dayjs(day).isBetween(selected[0], selected[1])}
          textColor={getTextColor(day, selected[0])}
          onClick={() => onSelect(day)}
          state={state[day.format(FORMAT)]}
        />
      ))}
    </div>
  );
}

export default Weekdays;
