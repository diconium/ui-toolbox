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

// export function DailyView() {
//   const [dateDailyView, setDailyView] = useState(dayjs(new Date(2022, 2, 2)));

//   return (
//     <div className="flex flex-col space-y-4 p-4">
//       <div>
//         Please select a date below:
//         {dateDailyView && dateDailyView.format('DD.MM.YYYY')}
//       </div>
//       <Calendar
//         variant="daily"
//         subtitle="6 slots available"
//         date={dateDailyView}
//         onSelect={(date) => setDailyView(date)}
//         onPreviousClick={(date) => setDailyView(date)}
//         onNextClick={(date) => setDailyView(date)}
//       />
//     </div>
//   );
// }

// export function SpecificDateInThePast() {
//   return <Calendar date={dayjs(new Date(2021, 7, 11))} />;
// }

// export function SpecificDateInTheFuture() {
//   return <Calendar date={dayjs(new Date(2024, 7, 11))} />;
// }

// export function WithState() {
//   return (
//     <Calendar
//       date={dayjs(new Date(2021, 5, 14))}
//       state={{
//         '14/06/2021': 'bg-toolbox-feedback-orange',
//         '19/06/2021': 'bg-toolbox-feedback-orange',
//         '21/06/2021': 'bg-toolbox-feedback-red',
//       }}
//     />
//   );
// }

export function SelectADate() {
  const [dateSelectADate, setSelectADate] = useState({start: dayjs(new Date(2022, 2, 15)), end: null} as Range);
  const select = (date: dayjs.Dayjs) => {
    console.log(date);
    if(dateSelectADate.start && dateSelectADate.end){
      setSelectADate({start: date, end: null});
    } else if(dateSelectADate.start && dateSelectADate.end === null ){
      if(dateSelectADate.start > date){
        setSelectADate({start: date, end: dateSelectADate.start});
      }else{
        setSelectADate({...dateSelectADate, end: date});
      }
      
    } else if(dateSelectADate.start == null) {
      setSelectADate({...dateSelectADate, start: date})
    }
    
  }
  return (
    <div className="flex flex-col space-y-4 p-4">
      <div>
        Please select a date below:
        {dateSelectADate.start && dateSelectADate.start.format('DD.MM.YYYY')}
      </div>
      <Calendar
        range={dateSelectADate}
        onSelect={(range) => select(range)}
        onPreviousClick={(range) => select(range)}
        onNextClick={(range) => select(range)}
      />
    </div>
  );
}

// export function AttachToTheDefaultAction() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div className="flex flex-col space-y-4 p-4">
//       <div>
//         Please click on the Icon:
//         {counter}
//       </div>
//       <Calendar
//         date={dayjs(new Date(2023, 3, 15))}
//         onDefaultActionClick={() => setCounter(counter + 1)}
//       />
//     </div>
//   );
// }

// export function AddAnyComponentToTheTopRightCorner() {
//   return (
//     <Calendar date={dayjs(new Date(2021, 7, 11))}>
//       <Icon icon="alarm-clock" />
//       <Icon icon="bell" />
//       <Avatar
//         link="https://i.pravatar.cc/150?u=044589"
//         alt="Emma"
//         size="m"
//       />
//     </Calendar>
//   );
// }
