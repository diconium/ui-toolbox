import dayjs from 'dayjs';

import utils from './utils';

const TODAY = dayjs().startOf('day');

describe('Calendar/utils', () => {
  test('can check if a date is not in range', () => {
    const issue = dayjs(TODAY).subtract(1, 'month');
    const next = dayjs(TODAY).add(1, 'month');
    const middle = dayjs(TODAY).startOf('month').add(10, 'days');

    expect(utils.isOutOfRange(issue, TODAY)).toBeTruthy();
    expect(utils.isOutOfRange(next, TODAY)).toBeTruthy();
    expect(utils.isOutOfRange(middle, TODAY)).toBeFalsy();
  });

  test('can generate days of a month correctly', () => {
    const weeks = utils.getWeeks(2023, 1);
    expect(weeks.length).toBe(5);
    expect(weeks[0].map((d) => d.format('D')).join(', ')).toBe(
      '29, 30, 31, 1, 2, 3, 4'
    );
    expect(weeks[1].map((d) => d.format('D')).join(', ')).toBe(
      '5, 6, 7, 8, 9, 10, 11'
    );
    expect(weeks[2].map((d) => d.format('D')).join(', ')).toBe(
      '12, 13, 14, 15, 16, 17, 18'
    );
    expect(weeks[3].map((d) => d.format('D')).join(', ')).toBe(
      '19, 20, 21, 22, 23, 24, 25'
    );
    expect(weeks[4].map((d) => d.format('D')).join(', ')).toBe(
      '26, 27, 28, 1, 2, 3, 4'
    );
  });

  test('can return the correct text color', () => {
    const issue = dayjs(TODAY).subtract(1, 'month');
    const now = dayjs(TODAY).add(1, 'minute');
    expect(utils.getTextColor(issue)).not.toBe('text-toolbox-neutral');
    expect(utils.getTextColor(now)).toBe('text-toolbox-neutral');
  });
});
