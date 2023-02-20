import React from 'react';
import { screen, render } from '@testing-library/react';

import State from './State';

describe('State component', () => {
  test('can render the default component correctly', () => {
    const { container } = render(<State />);
    expect(container.firstChild).toHaveClass('bg-toolbox-primary');
  });

  test('can render with label correctly', () => {
    render(<State label="foo" />);
    expect(screen.queryByText('foo')).toBeInTheDocument();
  });
});
