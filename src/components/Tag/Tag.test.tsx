import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tag from './Tag';

describe('Tag component', () => {
  test('can render the default component correctly', () => {
    render(<Tag label="Foo" />);
    expect(screen.getByText(/Foo/i)).toBeInTheDocument();
  });

  test('calls the onCancel function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Tag
        label="Foo"
        onCancel={func}
      />
    );
    const cancel = await screen.getByRole('button');
    await user.click(cancel);
    expect(func.mock.calls.length).toBe(1);
  });

  test('the onCancel function is not called when clicking on the label', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Tag
        label="Foo"
        onCancel={func}
      />
    );
    const tag = await screen.getByText('Foo');
    await user.click(tag);
    expect(func.mock.calls.length).toBe(0);
  });

  test('does not call the onCancel function when it is disabled', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Tag label="Foo" />);
    const cancel = await screen.getByRole('button');
    await user.click(cancel);
    expect(func.mock.calls.length).toBe(0);
  });
});
