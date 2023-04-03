import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Option from './Option';

describe('Select/Option component', () => {
  test('can render the default component correctly', () => {
    render(<Option label="foo" />);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });

  test('can render the selected version correctly', () => {
    render(
      <Option
        label="foo"
        selected
      />
    );
    expect(screen.getByText(/foo/i)).toHaveClass('bg-toolbox-primary-50 text-toolbox-primary');
  });

  test('can handle the onSelect handler correctly', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Option
        label="foo"
        onSelect={func}
      />
    );
    const option = await screen.getByText('foo');
    await user.click(option);
    expect(func.mock.calls.length).toBe(1);
  });
});
