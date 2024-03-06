import React from 'react';
import { jest } from '@jest/globals';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Chip as IMPORT } from '../../index';
import Chip from './Chip';

describe('Chip component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Chip).toBeDefined();
    expect(IMPORT).toEqual(Chip);
  });

  test('can render the default chip correctly', () => {
    render(<Chip label="Berlin" />);
    expect(screen.getByText(/Berlin/i)).toBeInTheDocument();
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
    const chip = await screen.getByText('Berlin');
    await user.click(chip);
    expect(func.mock.calls.length).toBe(1);
  });

  test('does not call the onClick function when it is not passed', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Chip label="Berlin" />);
    const chip = await screen.getByText('Berlin');
    await user.click(chip);
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
    const chip = await screen.getByText('Berlin');
    await user.click(chip);
    expect(func.mock.calls.length).toBe(0);
  });
});
