import React from 'react';
import { jest } from '@jest/globals';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Select as IMPORT } from '../../index';
import Select from './Select';

const FIXTURE = [
  { id: '1', label: 'bar' },
  { id: '2', label: 'baz' },
];

describe('Select component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Select).toBeDefined();
    expect(IMPORT).toEqual(Select);
  });

  test('can render the default component correctly', () => {
    render(<Select placeholder="foo" options={FIXTURE} />);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.queryByText(/bar/i)).not.toBeInTheDocument();
  });

  test('can render the component correctly when opened', () => {
    render(<Select opened placeholder="foo" options={FIXTURE} />);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    expect(screen.getByText(/baz/i)).toBeInTheDocument();
  });

  test('can render be opened correctly', async () => {
    const user = userEvent.setup();
    render(<Select placeholder="foo" options={FIXTURE} />);
    const select = await screen.getByRole('button');
    await act(() => user.click(select));
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    expect(screen.getByText(/baz/i)).toBeInTheDocument();
  });

  test('can render be correctly when an option is selected', async () => {
    const user = userEvent.setup();
    render(
      <Select selected={FIXTURE[0]} placeholder="foo" options={FIXTURE} />
    );
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    const select = await screen.getByRole('button');
    await act(() => user.click(select));
    expect(screen.getAllByText(/bar/i).length).toBe(2);
  });

  test('calls the onSelect function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Select placeholder="foo" options={FIXTURE} onSelect={func} />);
    const select = await screen.getByRole('button');
    await act(() => user.click(select));
    const option = await screen.getByText('baz');
    await act(() => user.click(option));
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toStrictEqual([{ id: '2', label: 'baz' }]);
    expect(screen.queryByText(/bar/i)).not.toBeInTheDocument();
  });
});
