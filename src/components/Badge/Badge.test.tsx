import React from 'react';
import { screen, render } from '@testing-library/react';

import { Badge as IMPORT } from '../../index';
import Badge, { MAX_BADGE_VALUE } from './Badge';

describe('Badge component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Badge).toBeDefined();
    expect(IMPORT).toEqual(Badge);
  });

  test('can render the default component correctly', () => {
    render(<Badge badge={9} />);
    expect(screen.getByText(/9/i)).toBeInTheDocument();
  });

  test('can normalize the badge label correctly (bigger max)', () => {
    render(<Badge badge={MAX_BADGE_VALUE + 1} />);
    expect(screen.getByText(`${MAX_BADGE_VALUE}+`)).toBeInTheDocument();
  });

  test('can normalize the badge label correctly (bigger max) - 2 -', () => {
    render(<Badge badge={MAX_BADGE_VALUE + 999} />);
    expect(screen.getByText(`${MAX_BADGE_VALUE}+`)).toBeInTheDocument();
  });

  test('does show the badge label for size lg', () => {
    render(
      <Badge
        size="lg"
        badge={9}
      />
    );
    expect(screen.getByText(/9/i)).toBeInTheDocument();
  });

  test('does show the badge label for size xl', () => {
    render(
      <Badge
        size="xl"
        badge={9}
      />
    );
    expect(screen.getByText(/9/i)).toBeInTheDocument();
  });

  test('can render the default component correctly', () => {
    render(<Badge badge={9} />);
    expect(screen.getByText(/9/i)).toBeInTheDocument();
  });

  test('does not show the badge label for size s', () => {
    render(
      <Badge
        size="s"
        badge={9}
      />
    );
    expect(screen.queryByText(/9/i)).not.toBeInTheDocument();
  });

  test('does not show the badge label for size m', () => {
    render(
      <Badge
        size="m"
        badge={9}
      />
    );
    expect(screen.queryByText(/9/i)).not.toBeInTheDocument();
  });

  test('does not show the badge label for size lg without badge', () => {
    render(
      <Badge
        size="lg"
        data-testid="badge"
      />
    );
    expect(screen.queryByTestId('badge')).not.toBeInTheDocument();
  });

  test('renders large digit badge correctly', () => {
    render(
      <Badge
        badge={11}
      />
    );
    expect(screen.queryByText(/11/i)).toBeInTheDocument();
  });
});
