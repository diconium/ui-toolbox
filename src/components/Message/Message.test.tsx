import React from 'react';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Message from './Message';
import { Message as IMPORT } from '../../index';

describe('Message component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Message).toBeDefined();
    expect(IMPORT).toEqual(Message);
  });

  test('can render the default component correctly', () => {
    render(
      <Message
        header="text"
        title="foo"
      >
        Message
      </Message>
    );
    expect(screen.getByText(/Message/i)).toBeInTheDocument();
    expect(screen.getByText(/Message/i).tagName).toBe('P');
  });

  test('can render the component with custom children correctly', () => {
    render(
      <Message
        header="text"
        title="foo"
      >
        <span>bar</span>
        <span>bar</span>
        <span>bar</span>
      </Message>
    );
    expect(screen.getAllByText(/bar/i).length).toBe(3);
    expect(screen.getAllByText(/bar/i)[0].tagName).toBe('SPAN');
  });

  test('calls onOpen and onClose functions in correct order', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const user = userEvent.setup();
    render(
      <Message
        header="text"
        title="foo"
        onOpen={onOpen}
        onClose={onClose}
      >
        <span>bar</span>
      </Message>
    );
    expect(onOpen.mock.calls.length).toBe(0);
    expect(onClose.mock.calls.length).toBe(0);
    const handle = screen.getByRole('button');
    await act(async () => {
      await user.click(handle);
    });
    expect(onClose.mock.calls.length).toBe(0);
    expect(onOpen.mock.calls.length).toBe(1);
    await act(async () => {
      await user.click(handle);
    });
    expect(onOpen.mock.calls.length).toBe(1);
    expect(onClose.mock.calls.length).toBe(1);
  });
});
