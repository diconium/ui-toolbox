import React from 'react';
import { screen, render } from '@testing-library/react';

import { PaginationDots as IMPORT } from '../../index';
import Component from './PaginationDots';

describe('PaginationDots component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Component).toBeDefined();
    expect(IMPORT).toEqual(Component);
  });

  test('can render the default component correctly', () => {
    render(<Component pages={[{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]} />);
    expect(screen.getByTitle(/Step 1/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Step 2/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Step 3/i)).toBeInTheDocument();
  });
});
