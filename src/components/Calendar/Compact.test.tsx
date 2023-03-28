import React from 'react';
import dayjs from 'dayjs';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Compact from './Compact';

const FIXTURE = dayjs(new Date(2019, 4, 31)).startOf('day');

describe('Calendar/Compact component', () => {
  test('can render the default component correctly', () => {
    render(<Compact date={FIXTURE} />);
    expect(screen.getByText(/May 2019/i)).toBeInTheDocument();
  });

  test('can render the component with subtitle correctly', () => {
    render(
      <Compact
        date={FIXTURE}
        subtitle="bar"
      />
    );
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });

  test('calls the onLeftClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Compact
        date={FIXTURE}
        onLeftClick={func}
      />
    );
    const button = await screen.getAllByRole('button')[0];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('calls the onRightClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Compact
        date={FIXTURE}
        onRightClick={func}
      />
    );
    const button = await screen.getAllByRole('button')[1];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });
});
