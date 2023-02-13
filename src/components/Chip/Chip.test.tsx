import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Chip from './Chip';

describe('Chip component', () => {
  test('can render the default button correctly', () => {
    render(<Chip label="Berlin" />);
    expect(screen.getByText(/Berlin/i)).toBeDefined();
  });

  test('calls the onClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Chip
        label="Berlin"
        onClick={func}
      />
    );
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('does not call the onClick function when it is not passed', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Chip label="Berlin" />);
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });

  test('does not call the onClick function when it is disabled', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Chip
        disabled
        label="Berlin"
        onClick={func}
      />
    );
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });
});
