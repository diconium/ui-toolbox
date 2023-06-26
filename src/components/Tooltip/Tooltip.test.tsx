import React from 'react';
import { screen, render } from '@testing-library/react';

import Tooltip from './Tooltip';

describe('Tooltip component', () => {
  test('can render the default component correctly', () => {
    render(
      <Tooltip tooltip="bar">
        <span>foo</span>
      </Tooltip>
    );
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toHaveClass('text-toolbox-neutral');
    expect(screen.getByText(/bar/i).tagName).toBe('SPAN');
  });

  test('can render the custom tooltips correctly', () => {
    render(
      <Tooltip
        tooltip={
          <div>
            <span>bazz</span>
            <p className="underline">text</p>
          </div>
        }
      >
        <span>foo</span>
      </Tooltip>
    );
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/baz/i)).toBeInTheDocument();
    expect(screen.getByText(/text/i)).toBeInTheDocument();
    expect(screen.getByText(/baz/i)).not.toHaveClass('text-toolbox-neutral');
    expect(screen.getByText(/text/i).tagName).toBe('P');
    expect(screen.getByText(/text/i)).toHaveClass('underline');
    expect(screen.getByText(/text/i)).not.toHaveClass('text-toolbox-neutral');
  });
});
