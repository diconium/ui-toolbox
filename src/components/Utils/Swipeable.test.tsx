import React from 'react';
import { jest } from '@jest/globals';
import { screen, render, fireEvent } from '@testing-library/react';

import Swipeable from './Swipeable';

const applySwipePattern = (handle: HTMLElement) => {
  fireEvent.touchStart(handle, { touches: [{ clientX: 0, clientY: 0 }] });
  fireEvent.touchMove(handle, { touches: [{ clientX: 10, clientY: 10 }] });
  fireEvent.touchMove(handle, { touches: [{ clientX: 20, clientY: 10 }] });
  fireEvent.touchMove(handle, { touches: [{ clientX: 20, clientY: 10 }] });
  fireEvent.touchEnd(handle, { touches: [{ clientX: 10, clientY: 10 }] });
  
return true;
};

describe('Swipeable utility', () => {
  test('can make another component swipeble correctly', () => {
    render(
      <Swipeable>
        <div>Foo</div>
        <div>Foo</div>
        <div>Foo</div>
      </Swipeable>
    );
    expect(screen.getAllByText(/foo/i).length).toBe(3);
  });

  test('can attach a swipeable handler correctly', () => {
    const func = jest.fn();

    const { getByText } = render(
      <Swipeable options={{ onSwiped: func }}>
        <div>to be swiped</div>
      </Swipeable>
    );
    const handle = getByText('to be swiped');
    expect(func.mock.calls.length).toBe(0);
    applySwipePattern(handle);
    expect(func.mock.calls.length).toBe(1);
  });

  test('can be disabled correctly', () => {
    const func = jest.fn();

    const { getByText } = render(
      <Swipeable
        disable
        options={{ onSwiped: func }}
      >
        <div>to be swiped</div>
      </Swipeable>
    );
    const handle = getByText('to be swiped');
    expect(func.mock.calls.length).toBe(0);
    applySwipePattern(handle);
    expect(func.mock.calls.length).toBe(0);
  });
});
