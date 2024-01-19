import React from 'react';
import dayjs from 'dayjs';
import { Range } from './Calendar';

import Day from './Day';
import { getTextColor } from './utils';

export const FORMAT = 'DD/MM/YYYY';

export interface Props {
  week?: dayjs.Dayjs[];
  onSelect?: (selected: dayjs.Dayjs) => void;
  selected?: Range;
  state?: any;
}

function Weekdays({ week = [], onSelect = () => {}, selected, state = {} }: Props) {
  return (
    <div className="grid grid-cols-7 gap-x-6 mt-2">
      {week.map((day) => (
        <Day
          key={day.format(FORMAT)}
          day={day}
          selected={
            selected?.start?.format(FORMAT) === day.format(FORMAT) ||
            selected?.end?.format(FORMAT) === day.format(FORMAT)
          }
          textColor={getTextColor(day, selected?.start)}
          onClick={() => onSelect(day)}
          state={state[day.format(FORMAT)]}
        />
      ))}
    </div>
  );
}

export default Weekdays;
