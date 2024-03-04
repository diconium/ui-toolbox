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
    expect(onOpen).toHaveBeenCalled();
  });

  test('closes correctly when already opened and clicked', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();
    render(
      <ListItem
        opened
        title="foo"
        onClose={onClose}
      >
        bar
      </ListItem>
    );
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    const item = screen.getByRole('button');
    await act(() => user.click(item));
    expect(screen.queryByText(/bar/i)).not.toBeInTheDocument();
    expect(onClose).toBeCalled();
  });

  test('renders with custom baseTemplate', () => {
    render(<ListItem title="foo" baseTemplate="custom-template" />);
    const templateElement = screen.getByText(/foo/i).closest('.custom-template');
    expect(templateElement).toBeInTheDocument();
  });

  test("should not call onClose handler when unmounted", () => {
    const onCloseSpy = jest.fn();
    const { unmount } = render(
      <ListItem opened onClose={onCloseSpy} title="Test">
        Child content
      </ListItem>
    );
    
    act(() => {
      jest.runAllTimers();
    });
    const buttonElement = document.querySelector('button');

    unmount();
    
    fireEvent.click(buttonElement!)

    expect(onCloseSpy).not.toHaveBeenCalled();
  });

  test("should not call onOpen handler when unmounted", () => {
    const onOpenSpy = jest.fn();
    const { unmount } = render(
      <ListItem opened onOpen={onOpenSpy} title="Test">
        Child content
      </ListItem>
    );
    
    act(() => {
      jest.runAllTimers();
    });
    const buttonElement = document.querySelector('button');

    unmount();
    
    fireEvent.click(buttonElement!)

    expect(onOpenSpy).not.toHaveBeenCalled();
  });
});
