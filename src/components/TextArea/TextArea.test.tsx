import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextArea from './TextArea';

describe('TextArea component', () => {
  test('can render the default component correctly', () => {
    render(<TextArea placeholder="foo" />);
    expect(screen.getByPlaceholderText(/foo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/foo/i)).toHaveAttribute('rows', '5');
  });

  test('can change the rows option correctly', () => {
    render(<TextArea placeholder="foo" rows={99} />);
    expect(screen.getByPlaceholderText(/foo/i)).toHaveAttribute('rows', '99');
  });

  test('can render the label correctly', () => {
    render(<TextArea label="bar" placeholder="foo" />);
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });

  test('can render the hint correctly', () => {
    render(<TextArea hint="bar" placeholder="foo" />);
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });

  test('can set a value correctly', () => {
    render(<TextArea placeholder="foo" value="bar" />);
    expect(screen.getByPlaceholderText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });

  test('can handle input changes correctly', async () => {
    const func = jest.fn();

    render(<TextArea placeholder="foo" onChange={func} />);
    const input = await screen.getByPlaceholderText('foo');
    await userEvent.type(input, 'bar');
    expect(func.mock.calls.length).toBe(3);
  });

  test('can handle input changes correctly when disabled', async () => {
    const func = jest.fn();

    render(<TextArea disabled placeholder="foo" onChange={func} />);
    const input = await screen.getByPlaceholderText('foo');
    await userEvent.type(input, 'bar');
    expect(func.mock.calls.length).toBe(0);
  });
});
