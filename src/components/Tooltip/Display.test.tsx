import React from 'react';
import { screen, render } from '@testing-library/react';

import Display from './Display';

describe('Tooltip/Display component', () => {
  test('can render the default component correctly', () => {
    const { container, getByText } = render(
      <Display
        tooltip="bar"
        className="foo"
      />
    );
    expect(container.firstChild).toHaveClass('foo');
    expect(getByText(/bar/i)).toBeInTheDocument();
    expect(getByText(/bar/i)).toHaveClass('text-toolbox-neutral');
    expect(getByText(/bar/i).tagName).toBe('SPAN');
  });

  test('can render the custom tooltips correctly', () => {
    render(
      <Display
        tooltip={
          <div>
            <span>bazz</span>
            <p className="underline">text</p>
          </div>
        }
      />
    );
    expect(screen.getByText(/baz/i)).toBeInTheDocument();
    expect(screen.getByText(/text/i)).toBeInTheDocument();
    expect(screen.getByText(/baz/i)).not.toHaveClass('text-toolbox-neutral');
    expect(screen.getByText(/text/i).tagName).toBe('P');
    expect(screen.getByText(/text/i)).toHaveClass('underline');
    expect(screen.getByText(/text/i)).not.toHaveClass('text-toolbox-neutral');
  });
});
