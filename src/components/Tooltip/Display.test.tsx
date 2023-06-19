import React from 'react';
import { screen, render } from '@testing-library/react';

import Display from './Display';

describe('Tooltip/Display component', () => {
  const className = 'text-toolbox-neutral';
  test('can render the default component correctly', () => {
    const { container, getByText } = render(
      <Display tooltip="bar" className="foo" />
    );
    expect(container.firstChild).toHaveClass('foo');
    expect(getByText(/bar/i)).toBeInTheDocument();
    expect(getByText(/bar/i)).toHaveClass(className);
    expect(getByText(/bar/i).tagName).toBe('SPAN');
  });

  test('can render the side of the component correctly', () => {
    const { container: containerTop } = render(
      <Display tooltip="bar" className="foo" side="top" />
    );
    const { container: containerBottom } = render(
      <Display
        tooltip="bar"
        className="foo"
        side="bottom"
      />
    );
    const { container: containerLeft } = render(
      <Display tooltip="bar" className="foo" side="left" />
    );
    const { container: containerRight } = render(
      <Display tooltip="bar" className="foo" side="right" />
    );
    expect(containerTop.firstChild).toHaveClass(
      '-translate-y-full'
    );
    expect(containerBottom.firstChild).toHaveClass(
      'translate-y-full'
    );
    expect(containerLeft.firstChild).toHaveClass(
      '-translate-x-full'
    );
    expect(containerRight.firstChild).toHaveClass(
      'translate-x-full'
    );
  });

  test('can render the custom tooltips correctly', () => {
    render(
      <Display
        tooltip={(
          <div>
            <span>bazz</span>
            <p className="underline">text</p>
          </div>
        )}
      />
    );
    expect(screen.getByText(/baz/i)).toBeInTheDocument();
    expect(screen.getByText(/text/i)).toBeInTheDocument();
    expect(screen.getByText(/baz/i)).not.toHaveClass(
      className
    );
    expect(screen.getByText(/text/i).tagName).toBe('P');
    expect(screen.getByText(/text/i)).toHaveClass(
      'underline'
    );
    expect(screen.getByText(/text/i)).not.toHaveClass(
      className
    );
  });
});
