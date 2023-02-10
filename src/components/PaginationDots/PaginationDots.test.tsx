import React from 'react';
import { screen, render } from '@testing-library/react';

import Component from './PaginationDots';

describe('PaginationDots component', () => {
  test('can render the default component correctly', () => {
    render(<Component pages={[{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]} />);
    expect(screen.getByTitle(/Step 1/i)).toBeDefined();
    expect(screen.getByTitle(/Step 2/i)).toBeDefined();
    expect(screen.getByTitle(/Step 3/i)).toBeDefined();
  });
});
