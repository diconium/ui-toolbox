import dayjs from 'dayjs';
import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import Avatar from '../Avatar';
import Icon from '../Icon';
import Calendar, { Range } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Toolbox/Calendar',
  component: Calendar,
  decorators: [
    (Story) => (
      <div className="bg-toolbox-neutral-50 h-auto flex flex-col justify-center">
        <div className="mx-auto my-4">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
export const Default = {
  render: () => <Calendar />,

  /** This snapshot changes every day */
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};

export function DailyView() {
  const [dateDailyView, setDailyView] = useState({start: dayjs(new Date(2022, 2, 2)), end: null} as Range); 

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div>
        Please select a date below:
        {dateDailyView.start && dateDailyView.start.format('DD.MM.YYYY')}
      </div>
      <Calendar
        variant="daily"
        subtitle="6 slots available"
        range={dateDailyView}
        onSelect={(range: Range) => setDailyView(range)}
        onPreviousClick={(range: Range) => setDailyView(range)}
        onNextClick={(range: Range) => setDailyView(range)}
      />
    </div>
  );
}

export function SpecificDateInThePast() {
  return <Calendar range={{start: dayjs(new Date(2021, 7, 11))}} />;
}

export function SpecificDateInTheFuture() {
  return <Calendar range={{start: dayjs(new Date(2024, 7, 11))}} />;
}

export function WithState() {
  return (
    <Calendar
      range={{start: dayjs(new Date(2021, 5, 14))}}
      state={{
        '14/06/2021': 'bg-toolbox-feedback-orange',
        '19/06/2021': 'bg-toolbox-feedback-orange',
        '21/06/2021': 'bg-toolbox-feedback-red',
      }}
    />
  );
}

export function SelectADate() {
  const [dateSelectADate, setSelectADate] = useState({start: dayjs(new Date(2024, 1, 15)), end: null} as Range);
  const select = (date: dayjs.Dayjs) => {
      setSelectADate({start: date, end: null});
    
  }
  return (
    <div className="flex flex-col space-y-4 p-4">
      <div>
        Please select a date below:
        {dateSelectADate.start && dateSelectADate.start.format('DD.MM.YYYY')}
      </div>
      <Calendar
        range={dateSelectADate}
        onSelect={(range: Range) => setSelectADate(range)}
        onPreviousClick={(range: Range) => setSelectADate(range)}
        onNextClick={(range: Range) => setSelectADate(range)}
      />
    </div>
  );
}

export function SelectARange() {
  const [dateSelectADate, setSelectADate] = useState({start: dayjs(new Date(2024, 1, 15)), end: null} as Range);

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div>
        Please select a range below:
        {dateSelectADate.start && dateSelectADate.start.format('DD.MM.YYYY')}
      </div>
      <Calendar
        range={dateSelectADate}
        isSingleDate={false}
        onSelect={(range: Range) => setSelectADate(range)}
        onPreviousClick={(range: Range) => setSelectADate(range)}
        onNextClick={(range: Range) => setSelectADate(range)}
      />
    </div>
  );
}

export function AttachToTheDefaultAction() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div>
        Please click on the Icon:
        {counter}
      </div>
      <Calendar
        range={{start: dayjs(new Date(2023, 3, 15))}}
        onDefaultActionClick={() => setCounter(counter + 1)}
      />
    </div>
  );
}

export function AddAnyComponentToTheTopRightCorner() {
  return (
    <Calendar range={{start: dayjs(new Date(2021, 7, 11))}}>
      <Icon icon="alarm-clock" />
      <Icon icon="bell" />
      <Avatar
        link="https://i.pravatar.cc/150?u=044589"
        alt="Emma"
        size="m"
      />
    </Calendar>
  );
}
