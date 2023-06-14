import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { StickyButton as IMPORT } from '../../../index';
import Button from './Sticky';

describe('StickyButton component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Button).toBeDefined();
    expect(IMPORT).toEqual(Button);
  });

  test('can be clicked correctly correctly', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Button label="Skip" onClick={func} />);
    const button = await screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });
});
