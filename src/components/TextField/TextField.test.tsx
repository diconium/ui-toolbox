import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField as IMPORT } from '../../index';
import TextField from './TextField';
import { validationToColor } from './Template';

describe('TextField component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(TextField).toBeDefined();
    expect(IMPORT).toEqual(TextField);
  });

  test('can render the default component correctly', () => {
    render(<TextField placeholder="foo" />);
    expect(screen.getByPlaceholderText(/foo/i)).toBeInTheDocument();
  });

  test('can render the a given value correctly', () => {
    render(
      <TextField
        placeholder="foo"
        value="bar"
      />
    );
    expect(screen.getByDisplayValue(/bar/i)).toBeInTheDocument();
  });

  test('can render the a given label correctly', () => {
    render(
      <TextField
        placeholder="foo"
        label="bar"
      />
    );
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });

  test('can handle input changes correctly', async () => {
    const func = jest.fn();

    render(
      <TextField
        placeholder="foo"
        onChange={func}
      />
    );
    const input = screen.getByPlaceholderText('foo');
    await userEvent.type(input, 'bar');
    expect(func.mock.calls.length).toBe(3);
    expect(func.mock.calls[0]).toEqual(['b']);
    expect(func.mock.calls[1]).toEqual(['ba']);
    expect(func.mock.calls[2]).toEqual(['bar']);
  });

  test('can handle onEnter correctly', async () => {
    const func = jest.fn();

    render(
      <TextField
        placeholder="foo"
        onEnter={func}
      />
    );
    const input = screen.getByPlaceholderText('foo');
    await userEvent.type(input, '{enter}');
    expect(func.mock.calls.length).toBe(1);
  });

  test('does not trigger onEnter when disabled', async () => {
    const func = jest.fn();

    render(
      <TextField
        disabled
        placeholder="foo"
        onEnter={func}
      />
    );
    const input = screen.getByPlaceholderText('foo');
    await userEvent.type(input, '{enter}');
    expect(func.mock.calls.length).toBe(0);
  });

  test('executes onBlur event handler correctly', async () => {
    const func = jest.fn();
    render(
      <TextField
        placeholder="foo"
        onBlur={func}
      />
    );
    const input = screen.getByPlaceholderText('foo');
    await userEvent.type(input, '{enter}');
    input.blur();
    expect(func.mock.calls.length).toBe(1);
  });

  test('executes onChange event handler when value is cleared by button click', async () => {
    const func = jest.fn();
    const { container } = render(
      <TextField
        placeholder="foo"
        value="initialValue"
        onChange={func}
        isClearable
      />
    );
    const clearButton = container.querySelector('button');
    clearButton?.click();
    expect(func.mock.calls.length).toBe(1);
  });

  test('renders icons corresponding to validation correctly', () => {
    const { container: valid } = render(
      <TextField
        placeholder="foo"
        validation="valid"
      />
    );
    const { container: warning } = render(
      <TextField
        placeholder="foo"
        validation="warning"
      />
    );
    const { container: error } = render(
      <TextField
        placeholder="foo"
        validation="error"
      />
    );
    const validIcon = valid.querySelector('span');
    const warningIcon = warning.querySelector('span');
    const errorIcon = error.querySelector('span');
    expect(validIcon).not.toBe(null);
    expect(validIcon?.classList).toContain(`text-toolbox-feedback-${validationToColor('valid')}`);
    expect(warningIcon).not.toBe(null);
    expect(warningIcon?.classList).toContain(
      `text-toolbox-feedback-${validationToColor('warning')}`
    );
    expect(errorIcon).not.toBe(null);
    expect(errorIcon?.classList).toContain(`text-toolbox-feedback-${validationToColor('error')}`);
  });
});
