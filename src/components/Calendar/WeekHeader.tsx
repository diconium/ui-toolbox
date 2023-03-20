import React from 'react';
import dayjs from 'dayjs';

import { FORMAT } from './Weekdays';

export interface Props {
  week: dayjs.Dayjs[];
}

function WeekHeader({ week }: Props) {
  return (
    <div className="grid grid-cols-7 gap-x-6 mt-2 mb-5">
      {week.map((day) => (
        <div
          key={day.format(FORMAT)}
          className="leading-5 text-sm font-semibold flex justify-center"
        >
          {day.format('dd')}
        </div>
      ))}
    </div>
  );
}

export default WeekHeader;
