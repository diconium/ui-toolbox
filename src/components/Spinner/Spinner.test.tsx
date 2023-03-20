import React from 'react';
import { render } from '@testing-library/react';

import { Spinner as IMPORT } from '../../index';
import Spinner from './Spinner';

describe('Spinner component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Spinner).toBeDefined();
    expect(IMPORT).toEqual(Spinner);
  });

  test('can render the default component correctly', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toHaveClass('animate-spin w-10 h-10');
  });

  test('can render size s correctly', () => {
    const { container } = render(<Spinner size="s" />);
    expect(container.firstChild).toHaveClass('w-4 h-4');
  });

  test('can render size m correctly', () => {
    const { container } = render(<Spinner size="m" />);
    expect(container.firstChild).toHaveClass('w-7 h-7');
  });

  test('can render size lg correctly', () => {
    const { container } = render(<Spinner size="lg" />);
    expect(container.firstChild).toHaveClass('w-10 h-10');
  });

  test('can render size xl correctly', () => {
    const { container } = render(<Spinner size="xl" />);
    expect(container.firstChild).toHaveClass('w-14 h-14');
  });

  test('can render an unknown size correctly', () => {
    const { container } = render(<Spinner size="xxxl" />);
    expect(container.firstChild).toHaveClass('w-10 h-10');
  });
});
