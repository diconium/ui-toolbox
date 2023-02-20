import React from 'react';
import { screen, render } from '@testing-library/react';

import Container from './BadgeContainer';

describe('BadgeContainer component', () => {
  test('can render the default component correctly', () => {
    render(<Container badge={9}>CONTEXT</Container>);
    expect(screen.getByText(/9/i)).toBeInTheDocument();
    expect(screen.getByText(/CONTEXT/i)).toBeInTheDocument();
  });

  test('does not show the badge label when size is too small', () => {
    render(
      <Container
        badge={9}
        size="xs"
      >
        CONTEXT
      </Container>
    );
    expect(screen.queryByText(/9/i)).not.toBeInTheDocument();
    expect(screen.getByText(/CONTEXT/i)).toBeInTheDocument();
  });
});
