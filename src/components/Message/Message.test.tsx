import React from 'react';
import { screen, render } from '@testing-library/react';

import { Message as IMPORT } from '../../index';
import Message from './Message';

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
});
