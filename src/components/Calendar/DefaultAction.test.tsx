import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DefaultAction from './DefaultAction';

describe('Calendar/DefaultAction component', () => {
  test('can render the default component correctly', () => {
    render(<DefaultAction />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('calls the onSelect function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<DefaultAction onClick={func} />);
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });
});
