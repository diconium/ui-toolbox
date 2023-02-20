import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Dot from './Dot';

describe('PaginationDots/Dot component', () => {
  test('can render the default component correctly', () => {
    render(<Dot title="Foo" />);
    expect(screen.getByTitle(/Foo/i)).toBeInTheDocument();
  });

  test('calls the onClick function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Dot
        title="Foo"
        onClick={func}
      />
    );
    const dot = await screen.getByTitle('Foo');
    await user.click(dot);
    expect(func.mock.calls.length).toBe(1);
  });

  test('does not call the onClick function when it is disabled', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Dot
        disabled
        title="Foo"
        onClick={func}
      />
    );
    const dot = await screen.getByTitle('Foo');
    await user.click(dot);
    expect(func.mock.calls.length).toBe(0);
  });
});
