/* eslint react/jsx-wrap-multilines: 0 */
import React from 'react';
import { screen, render } from '@testing-library/react';

import NavigationBar from './NavigationBar';

describe('NavigationBar component', () => {
  test('can render the default component correctly', () => {
    const { container } = render(<NavigationBar />);
    expect(container.firstChild).toHaveClass('shadow min-w-sm');
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
    expect(screen.queryAllByText(/TEST/i).length).toBe(2);
    expect(screen.queryAllByText(/FOO/i).length).toBe(3);
  });
});
