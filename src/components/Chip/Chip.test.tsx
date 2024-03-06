import React from 'react';
import { jest } from '@jest/globals';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Chip as IMPORT } from '../../index';
import Chip from './Chip';

describe('Chip component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Chip).toBeDefined();
    expect(IMPORT).toEqual(Chip);
  });

  test('can render the default button correctly', () => {
    render(<Chip label="Berlin" />);
    expect(screen.getByText(/Berlin/i)).toBeInTheDocument();
  });

  test('calls the onClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Chip
        label="Berlin"
        onClick={func}
      />
    );
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('does not call the onClick function when it is not passed', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Chip label="Berlin" />);
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });

  test('does not call the onClick function when it is disabled', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Chip
        disabled
        label="Berlin"
        onClick={func}
      />
    );
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(0);
  });

  test('calls the onClick function correctly when Enter is pressed', () => {
    const func = jest.fn();
    render(<Chip label="Berlin" onClick={func} />);
    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(func).toHaveBeenCalled();
  });
  
  test('does not call the onClick function when it is disabled and Enter is pressed', () => {
    const func = jest.fn();
    render(<Chip label="Berlin" disabled onClick={func} />);
    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(func).not.toHaveBeenCalled();
  });
});
