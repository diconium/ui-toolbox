import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toast as IMPORT } from '../../index';
import Toast from './Toast';

describe('Toast component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Toast).toBeDefined();
    expect(IMPORT).toEqual(Toast);
  });

  test('can render the default component correctly', () => {
    render(<Toast label="foo" />);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });

  test('calls the onClose function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Toast
        label="bar"
        onClose={func}
      />
    );
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });
});
