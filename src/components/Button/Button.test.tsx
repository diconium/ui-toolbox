import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button component', () => {
  test('can render the default button correctly', () => {
    render(<Button>Action</Button>);
    expect(screen.getByText(/Action/i)).toBeDefined();
  });

  test('calls the onClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Button onClick={func}>Action</Button>);
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('does not call the onClick function when it is not passed', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Button>Action</Button>);
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });

  test('does not call the onClick function when it is disabled', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Button
        disabled
        onClick={func}
      >
        Action
      </Button>
    );
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });
});
