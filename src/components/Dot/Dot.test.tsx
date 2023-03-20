import React from 'react';
import { render } from '@testing-library/react';

import { Dot as IMPORT } from '../../index';
import Dot from './Dot';

describe('Dot component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Dot).toBeDefined();
    expect(IMPORT).toEqual(Dot);
  });

  test('can render the default component correctly', () => {
    const { container } = render(<Dot />);
    expect(container.firstChild).toHaveClass('w-4 h-4 bg-toolbox-primary');
  });

  test('can render the different colors correctly', () => {
    const { container } = render(<Dot color="bg-toolbox-neutral" />);
    expect(container.firstChild).toHaveClass('bg-toolbox-neutral');
  });

  test('can render the different sizes correctly (xl)', () => {
    const { container } = render(<Dot size="xl" />);
    expect(container.firstChild).toHaveClass('w-5 h-5');
  });

  test('can render the different sizes correctly (lg)', () => {
    const { container } = render(<Dot size="lg" />);
    expect(container.firstChild).toHaveClass('w-4 h-4');
  });

  test('can render the different sizes correctly (m)', () => {
    const { container } = render(<Dot size="m" />);
    expect(container.firstChild).toHaveClass('w-3 h-3');
  });

  test('can render the different sizes correctly (s)', () => {
    const { container } = render(<Dot size="s" />);
    expect(container.firstChild).toHaveClass('w-2 h-2');
  });
});
