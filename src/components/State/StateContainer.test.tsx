import React from 'react';
import { screen, render } from '@testing-library/react';

import Container from './StateContainer';

describe('StateContainer component', () => {
  test('can render the default component correctly', () => {
    const { container } = render(<Container />);
    expect(container.firstChild).toHaveClass('absolute');
  });

  test('can render with children correctly', () => {
    const { container } = render(<Container>CONTEXT</Container>);
    expect(screen.getByText(/CONTEXT/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('relative inline-block');
  });
});
