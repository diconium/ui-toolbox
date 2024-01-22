import React from 'react';
import dayjs from 'dayjs';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calendar from './Calendar';

const FIXTURE = {start: dayjs(new Date(2019, 4, 31)).startOf('day')};

describe('Calendar component', () => {
  test('can render the default component correctly', () => {
    render(<Calendar range={FIXTURE} />);
    expect(screen.getByText(/May 2019/i)).toBeInTheDocument();
  });

  test('calls the onSelect function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        range={FIXTURE}
        onSelect={func}
      />
    );
    const button = await screen.getByText('8');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual([dayjs(new Date(2019, 4, 8)).startOf('day')]);
  });

  test('calls the onPreviousClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        range={FIXTURE}
        onPreviousClick={func}
      />
    );
    const button = await screen.getAllByRole('button')[0];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual([dayjs(new Date(2019, 3, 30)).startOf('day')]);
  });

  test('calls the onPreviousClick function correctly when clicked in daily variant', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        variant="daily"
        range={FIXTURE}
        onPreviousClick={func}
      />
    );
    const button = await screen.getAllByRole('button')[0];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual([dayjs(new Date(2019, 4, 30)).startOf('day')]);
  });

  test('calls the onNextClick function correctly when clicked in daily variant', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        variant="daily"
        range={FIXTURE}
        onNextClick={func}
      />
    );
    const button = await screen.getAllByRole('button')[1];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual([dayjs(new Date(2019, 5, 1)).startOf('day')]);
  });

  test('calls the onNextClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        range={FIXTURE}
        onNextClick={func}
      />
    );
    const button = await screen.getAllByRole('button')[1];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual([dayjs(new Date(2019, 5, 1)).startOf('day')]);
  });

  test('calls the onDefaultActionClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Calendar
        range={FIXTURE}
        onDefaultActionClick={func}
      />
    );
    const button = await screen.getAllByRole('button')[2];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual([]);
  });

  test('can render a custom right corner correctly', () => {
    render(
      <Calendar range={FIXTURE}>
        <div>foo</div>
        <div>foo</div>
        <div>foo</div>
      </Calendar>
    );
    expect(screen.getAllByText(/foo/i).length).toBe(3);
  });
});
