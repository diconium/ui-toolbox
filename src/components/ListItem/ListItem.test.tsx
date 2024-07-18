import React from 'react';
import { screen, render, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ListItem from './ListItem';

describe('ListItem component', () => {
  test('can render the default component correctly', () => {
    render(<ListItem title="foo" />);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });

  test('expands correctly when clicked', async () => {
    const onOpen = jest.fn();
    const onToggle = jest.fn();
    const user = userEvent.setup();
    render(
      <ListItem
        title="foo"
        onOpen={onOpen}
        onToggle={onToggle}
      >
        bar
      </ListItem>,
    );
    expect(screen.queryByText(/bar/i)).not.toBeInTheDocument();
    const item = screen.getByRole('button');
    await act(() => user.click(item));
    expect(onOpen).toHaveBeenCalled();
    expect(onToggle).toHaveBeenCalled();
    render(
      <ListItem
        opened
        title="foo"
        onOpen={onOpen}
        onToggle={onToggle}
      >
        bar
      </ListItem>,
    );
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });

  test('closes correctly when already opened and clicked', async () => {
    const onClose = jest.fn();
    const onToggle = jest.fn();
    const user = userEvent.setup();
    render(
      <ListItem
        opened
        title="foo"
        onToggle={onToggle}
        onClose={onClose}
      >
        bar
      </ListItem>,
    );
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    const item = screen.getByRole('button');
    await act(() => user.click(item));
    expect(onToggle).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
  });

  test('renders with custom baseTemplate', () => {
    render(
      <ListItem
        title="foo"
        baseTemplate="custom-template"
      />,
    );
    const templateElement = screen.getByText(/foo/i).closest('.custom-template');
    expect(templateElement).toBeInTheDocument();
  });

  test('should not call onClose handler when unmounted', () => {
    const onCloseSpy = jest.fn();
    const { unmount } = render(
      <ListItem
        opened
        onClose={onCloseSpy}
        title="Test"
      >
        Child content
      </ListItem>,
    );

    const buttonElement = document.querySelector('button');

    unmount();

    fireEvent.click(buttonElement!);

    expect(onCloseSpy).not.toHaveBeenCalled();
  });

  test('should not call onOpen handler when unmounted', () => {
    const onOpenSpy = jest.fn();
    const { unmount } = render(
      <ListItem
        opened
        onOpen={onOpenSpy}
        title="Test"
      >
        Child content
      </ListItem>,
    );

    const buttonElement = document.querySelector('button');

    unmount();

    fireEvent.click(buttonElement!);

    expect(onOpenSpy).not.toHaveBeenCalled();
  });

  test('onToggle handler correctly checks for mounted.current before toggling state', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    const { getByText, unmount } = render(
      <ListItem
        title="Test item"
        onOpen={onOpen}
        onClose={onClose}
      >
        Test content
      </ListItem>,
    );

    const element = getByText('Test item');

    unmount();
    fireEvent.click(element);

    expect(onOpen).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });
});
