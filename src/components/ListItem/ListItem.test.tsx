import React from 'react';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ListItem from './ListItem';

describe('ListItem component', () => {
  test('can render the default component correctly', () => {
    render(<ListItem title="foo" />);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });

  test('expands correctly when clicked', async () => {
    const onOpen = jest.fn();
    const user = userEvent.setup();
    render(
      <ListItem
        title="foo"
        onOpen={onOpen}
      >
        bar
      </ListItem>
    );
    expect(screen.queryByText(/bar/i)).not.toBeInTheDocument();
    const item = screen.getByRole('button');
    await act(() => user.click(item));
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    expect(onOpen).toBeCalled();
  });

  test('closes correctly when already opened and clicked', async () => {
    const onClosed = jest.fn();
    const user = userEvent.setup();
    render(
      <ListItem
        opened
        title="foo"
        onClosed={onClosed}
      >
        bar
      </ListItem>
    );
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    const item = screen.getByRole('button');
    await act(() => user.click(item));
    expect(screen.queryByText(/bar/i)).not.toBeInTheDocument();
    expect(onClosed).toBeCalled();
  });
});
