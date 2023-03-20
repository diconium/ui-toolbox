import React from 'react';
import dayjs from 'dayjs';

import Day from './Day';
import { getTextColor } from './utils';

export const FORMAT = 'DD/MM/YYYY';

export interface Props {
  week?: dayjs.Dayjs[];
  onSelect?: (selected: dayjs.Dayjs) => void;
  selected?: dayjs.Dayjs | null;
  state?: any;
}

function Weekdays({ week = [], onSelect = () => {}, selected, state = {} }: Props) {
  return (
    <div className="grid grid-cols-7 gap-x-6 mt-2">
      {week.map((day) => (
        <Day
          key={day.format(FORMAT)}
          day={day}
          selected={day.format(FORMAT) === selected?.format(FORMAT)}
          textColor={getTextColor(day)}
          onClick={() => onSelect(day)}
          state={state[day.format(FORMAT)]}
        />
      ))}
    </div>
  );
}

export default Weekdays;
