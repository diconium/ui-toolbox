import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { QuickButton as IMPORT } from '../../../index';
import Button from './Quick';

describe('QuickButton component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Button).toBeDefined();
    expect(IMPORT).toEqual(Button);
  });

  test('can render the default button correctly', () => {
    render(<Button icon="check" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('calls the onClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Button icon="check" onClick={func} />);
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('does not call the onClick function when it is disabled', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Button disabled icon="check" onClick={func} />);
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });
});
