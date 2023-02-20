import React from 'react';
import { jest } from '@jest/globals';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Searchbar from './Searchbar';

describe('Searchbar component', () => {
  test('can render the default component correctly', () => {
    render(<Searchbar placeholder="foo" />);
    expect(screen.getByPlaceholderText(/foo/i)).toBeInTheDocument();
  });

  test('can handle onSearch correctly', async () => {
    const func = jest.fn();

    render(
      <Searchbar
        placeholder="foo"
        onSearch={func}
      />
    );
    const input = await screen.getByPlaceholderText('foo');
    await act(async () => {
      await userEvent.type(input, 'bar');
      await userEvent.type(input, '{enter}');
    });
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toEqual(['bar']);
  });

  test('does not trigger onSearch when disabled', async () => {
    const func = jest.fn();

    render(
      <Searchbar
        disabled
        placeholder="foo"
        onSearch={func}
      />
    );
    const input = await screen.getByPlaceholderText('foo');
    await act(async () => {
      await userEvent.type(input, 'bar');
    });
    expect(screen.queryByText('bar')).not.toBeInTheDocument();
    await act(async () => {
      await userEvent.type(input, '{enter}');
    });
    expect(func.mock.calls.length).toBe(0);
  });
});
