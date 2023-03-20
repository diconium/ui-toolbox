import React from 'react';
import { screen, render } from '@testing-library/react';

import { State as IMPORT } from '../../index';
import State from './State';

describe('State component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(State).toBeDefined();
    expect(IMPORT).toEqual(State);
  });

  test('can render the default component correctly', () => {
    const { container } = render(<State />);
    expect(container.firstChild).toHaveClass('bg-toolbox-primary');
  });

  test('can render with label correctly', () => {
    render(<State label="foo" />);
    expect(screen.queryByText('foo')).toBeInTheDocument();
  });
});
