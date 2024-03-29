import React from 'react';
import dayjs from 'dayjs';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calendar from './Calendar';

const FIXTURE = [dayjs(new Date(2019, 4, 31)).startOf('day')];

describe('Calendar component', () => {
  test('can render the default component correctly', () => {
    render(<Calendar dates={FIXTURE} />);
    expect(screen.getByText(/May 2019/i)).toBeInTheDocument();
  });

  test('calls the onSelect function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        dates={FIXTURE}
        onSelect={func}
      />,
    );
    const button = await screen.getByText('8');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual([
      [dayjs(new Date(2019, 4, 8)).startOf('day')],
    ]);
  });

  test('calls the onSelect function correctly with range when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        dates={[dayjs(new Date(2019, 4, 10)).startOf('day')]}
        onSelect={func}
        type='range'
      />,
    );
    const button = await screen.getByText('15');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual([
      [dayjs(new Date(2019, 4, 10)).startOf('day'), dayjs(new Date(2019, 4, 15)).startOf('day')],
    ]);
  });

  test('calls the onPreviousClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        dates={FIXTURE}
        onPreviousClick={func}
      />,
    );
    const button = screen.getAllByRole('button')[0];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('calls the onPreviousClick function correctly when clicked in daily variant', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        variant="daily"
        dates={FIXTURE}
        onPreviousClick={func}
      />,
    );
    const button = await screen.getAllByRole('button')[0];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('calls the onNextClick function correctly when clicked in daily variant', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        variant="daily"
        dates={FIXTURE}
        onNextClick={func}
      />,
    );
    const button = await screen.getAllByRole('button')[1];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('calls the onNextClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        dates={FIXTURE}
        onNextClick={func}
      />,
    );
    const button = await screen.getAllByRole('button')[1];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });


  test('calls the onDefaultActionClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        dates={FIXTURE}
        onDefaultActionClick={func}
      />,
    );
    const button = await screen.getAllByRole('button')[2];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual([]);
  });

  test('can render a custom right corner correctly', () => {
    render(
      <Calendar dates={FIXTURE}>
        <div>foo</div>
        <div>foo</div>
        <div>foo</div>
      </Calendar>,
    );
    expect(screen.getAllByText(/foo/i).length).toBe(3);
  });

  test('selects a date on the first click and a dates on the second click', async () => {
    const onSelect = jest.fn();
    const user = userEvent.setup();

    render(
      <Calendar
        dates={FIXTURE}
        onSelect={onSelect}
      />,
    );

    const firstDayButton = screen.getByText('8');
    await user.click(firstDayButton);

    expect(onSelect.mock.calls.length).toBe(1);
    expect(onSelect.mock.calls[0]).toEqual([[dayjs(new Date(2019, 4, 8)).startOf('day')]]);

    const secondDayButton = screen.getByText('9');
    await user.click(secondDayButton);
    expect(onSelect.mock.calls.length).toBe(2);
    expect(onSelect.mock.calls[1]).toEqual([[dayjs(new Date(2019, 4, 9)).startOf('day')],
    ]);
  });
});
