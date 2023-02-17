import React from 'react';
import { screen, render } from '@testing-library/react';

import Badge, { MAX_BADGE_VALUE } from './Badge';

describe('Badge component', () => {
  test('can render the default component correctly', () => {
    render(<Badge badge={9} />);
    expect(screen.getByText(/9/i)).toBeDefined();
  });

  test('can normalize the badge label correctly (bigger max)', () => {
    render(<Badge badge={MAX_BADGE_VALUE + 1} />);
    expect(screen.getByText(`${MAX_BADGE_VALUE}+`)).toBeDefined();
  });

  test('can normalize the badge label correctly (bigger max) - 2 -', () => {
    render(<Badge badge={MAX_BADGE_VALUE + 999} />);
    expect(screen.getByText(`${MAX_BADGE_VALUE}+`)).toBeDefined();
  });

  test('does show the badge label for size lg', () => {
    render(
      <Badge
        size="lg"
        badge={9}
      />
    );
    expect(screen.getByText(/9/i)).toBeDefined();
  });

  test('does show the badge label for size xl', () => {
    render(
      <Badge
        size="xl"
        badge={9}
      />
    );
    expect(screen.getByText(/9/i)).toBeDefined();
  });

  test('can render the default component correctly', () => {
    render(<Badge badge={9} />);
    expect(screen.getByText(/9/i)).toBeDefined();
  });

  test('does not show the badge label for size s', () => {
    render(
      <Badge
        size="s"
        badge={9}
      />
    );
    expect(screen.queryByText(/9/i)).toBe(null);
  });

  test('does not show the badge label for size m', () => {
    render(
      <Badge
        size="m"
        badge={9}
      />
    );
    expect(screen.queryByText(/9/i)).toBe(null);
  });
});
