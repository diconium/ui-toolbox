import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  test('can render the default button correctly', () => {
    render(<Checkbox />);
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('does call the onClick function correctly', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Checkbox onClick={func} />);
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('does not call the onClick function when it is not passed', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Checkbox />);
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });

  test('does not call the onClick function when it is disabled', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Checkbox
        disabled
        onClick={func}
      />
    );
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });
});
