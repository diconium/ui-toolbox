import dayjs from 'dayjs';

export const getWeeks = (year: number, month: number) => {
  const weeks = [];

  const startDate = dayjs().set('year', year).set('month', month).startOf('month').startOf('week');

  const endDate = dayjs().set('year', year).set('month', month).endOf('month');

  let day = startDate.subtract(1, 'day');

  while (day.isBefore(endDate, 'day')) {
    weeks.push(
      Array(7)
        .fill(0)
        // eslint-disable-next-line no-loop-func
        .map(() => {
          day = day.add(1, 'day');

          return day;
        }),
    );
  }

  return weeks;
};

export const isOutOfRange = (day: dayjs.Dayjs, current: dayjs.Dayjs) => {
  const isBefore = day.isBefore(current.startOf('month'), 'day');
  const isAfter = day.isAfter(current.endOf('month'), 'day');

  return isBefore || isAfter;
};

export const getTextColor = (day: dayjs.Dayjs) => {
  const today = dayjs().startOf('day');
  if (day.isBefore(today)) {
    return 'text-toolbox-neutral-200';
  }

  return 'text-toolbox-neutral';
};

export default { getWeeks, isOutOfRange, getTextColor };
