import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Text';

describe('TextButton component', () => {
  test('can render the default component correctly', () => {
    render(<Button label="Action" />);
    expect(screen.getByText(/Action/i)).toBeInTheDocument();
  });

  test('calls the onClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();

    render(<Button label="Action" onClick={func} />);

    const button = await screen.getByText('Action');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('does not call the onClick function when disabled correctly', async () => {
    const func = jest.fn();
    const user = userEvent.setup();

    render(<Button disabled label="Action" onClick={func} />);

    const button = await screen.getByText('Action');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });
});
