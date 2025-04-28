/* eslint react/jsx-wrap-multilines: 0 */
import React from 'react';
import { screen, render } from '@testing-library/react';

import { NavigationBar as IMPORT } from '../../index';
import NavigationBar from './NavigationBar';

describe('NavigationBar component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(NavigationBar).toBeDefined();
    expect(IMPORT).toEqual(NavigationBar);
  });

  test('can render the default component correctly', () => {
    const { container } = render(<NavigationBar />);
    expect(container.firstChild).toHaveClass('shadow-sm');
  });

  test('can render all placeholders correctly', () => {
    render(
      <NavigationBar
        left={
          <>
            <span>TEST</span>
            <span>TEST</span>
          </>
        }
        right={
          <>
            <span>FOO</span>
            <span>FOO</span>
            <span>FOO</span>
          </>
        }
      >
        ACTION
      </NavigationBar>
    );
    expect(screen.queryAllByText(/ACTION/i).length).toBe(1);
    expect(screen.queryAllByText(/TEST/i).length).toBe(2);
    expect(screen.queryAllByText(/FOO/i).length).toBe(3);
  });
});
