import React from 'react';
import dayjs from 'dayjs';

import isBetween from 'dayjs/plugin/isBetween';
import Day from './Day';
import { getTextColor } from './utils';

dayjs.extend(isBetween);

export const FORMAT = 'DD/MM/YYYY';

export interface Props {
  week?: dayjs.Dayjs[];
  onSelect?: (selected: dayjs.Dayjs) => void;
  selected: dayjs.Dayjs[];
  state?: any;
}

const formatDate = (date: dayjs.Dayjs) => date.format(FORMAT);

function Weekdays({ week = [], onSelect = () => {}, selected, state = {} }: Props) {
  const isSelected = (day: dayjs.Dayjs) =>
    (selected.length > 1 &&
      (formatDate(selected[0]) === formatDate(day) ||
        formatDate(selected[1]) === formatDate(day))) ||
    (selected.length === 1 && formatDate(selected[0]) === formatDate(day));

  return (
    <div className="grid grid-cols-7 gap-x-6 mt-2">
      {week.map((day) => (
        <Day
          key={formatDate(day)}
          day={day}
          selected={isSelected(day)}
          inRange={selected.length > 1 && dayjs(day).isBetween(selected[0], selected[1])}
          textColor={getTextColor(day, selected[0])}
          onClick={() => onSelect(day)}
          state={state[formatDate(day)]}
        />
      ))}
    </div>
  );
}

export default Weekdays;
