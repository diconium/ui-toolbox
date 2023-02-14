import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField from './TextField';

describe('TextField component', () => {
  test('can render the default component correctly', () => {
    render(<TextField placeholder="foo" />);
    expect(screen.getByPlaceholderText(/foo/i)).toBeDefined();
  });

  test('can render the a given value correctly', () => {
    render(
      <TextField
        placeholder="foo"
        value="bar"
      />
    );
    expect(screen.getByDisplayValue(/bar/i)).toBeDefined();
  });

  test('can render the a given label correctly', () => {
    render(
      <TextField
        placeholder="foo"
        label="bar"
      />
    );
    expect(screen.getByText(/bar/i)).toBeDefined();
  });

  test('can handle input changes correctly', async () => {
    const func = jest.fn();

    render(
      <TextField
        placeholder="foo"
        onChange={func}
      />
    );
    const input = await screen.getByPlaceholderText('foo');
    await userEvent.type(input, 'bar');
    expect(func.mock.calls.length).toBe(3);
    expect(func.mock.calls[0]).toEqual(['b']);
    expect(func.mock.calls[1]).toEqual(['ba']);
    expect(func.mock.calls[2]).toEqual(['bar']);
  });
});
