import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tab from './Tab';
import IconConfig from '../Icon/config';

describe('Tabs/Tab component', () => {
  test('can render the default component correctly', () => {
    const symbol = IconConfig['tb-face-smile'];
    render(<Tab label="Foo" />);
    expect(screen.getByText(/Foo/i)).toHaveClass('uppercase');
    expect(screen.getByText(/Foo/i)).toBeInTheDocument();
    expect(screen.getByText(symbol)).toBeInTheDocument();
  });

  test('can render the component correctly with different icon', () => {
    const symbol = IconConfig['tb-eye'];
    render(<Tab label="Foo" icon="eye" />);
    expect(screen.getByText(/Foo/i)).toBeInTheDocument();
    expect(screen.getByText(symbol)).toBeInTheDocument();
  });

  test('can render component with selected correctly', () => {
    render(<Tab label="Foo" selected />);

    expect(screen.getByText(/Foo/i)).toHaveClass(
      'text-toolbox-primary font-semibold'
    );
  });

  test('can handle onClick calls correctly', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Tab label="Foo" onClick={func} />);

    const button = screen.getByText(/Foo/i);
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toStrictEqual(['Foo']);
  });
});
