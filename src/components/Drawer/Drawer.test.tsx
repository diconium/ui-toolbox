import React from 'react';
import { jest } from '@jest/globals';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Drawer as IMPORT } from '../../index';
import Drawer from './Drawer';

describe('Drawer component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Drawer).toBeDefined();
    expect(IMPORT).toEqual(Drawer);
  });

  test('can render the component correctly', () => {
    render(<Drawer opened>CONTEXT</Drawer>);
    expect(screen.getByText(/CONTEXT/i)).toBeInTheDocument();
  });

  test('can call the onOpen handler correctly', async () => {
    const func = jest.fn();
    const user = userEvent.setup();

    render(<Drawer onOpen={func}>CONTEXT</Drawer>);
    expect(func.mock.calls.length).toBe(0);
    const handle = await screen.getByRole('button');
    await act(async () => {
      await user.click(handle);
    });
    expect(func.mock.calls.length).toBe(1);
  });

  test('can call the onClose handler correctly', async () => {
    const func = jest.fn();
    const user = userEvent.setup();

    render(
      <Drawer
        opened
        onClose={func}
      >
        CONTEXT
      </Drawer>
    );
    expect(func.mock.calls.length).toBe(0);
    const handle = await screen.getByRole('button');
    await act(async () => {
      await user.click(handle);
    });
    expect(func.mock.calls.length).toBe(1);
  });
});
