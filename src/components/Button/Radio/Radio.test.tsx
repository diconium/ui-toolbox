import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioButton as IMPORT } from '../../../index';
import RadioButton from './Radio';

describe('RadioButton component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(RadioButton).toBeDefined();
    expect(IMPORT).toEqual(RadioButton);
  });

  test('can render the default button correctly', () => {
    render(<RadioButton />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  test('calls the onClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<RadioButton onClick={func} />);
    const button = screen.getByRole('radio');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('does not call the onClick function when it is disabled', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <RadioButton
        disabled
        onClick={func}
      />
    );
    const button = screen.getByRole('radio');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });
});
