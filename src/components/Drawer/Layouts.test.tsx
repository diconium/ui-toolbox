import React from 'react';
import { screen, render } from '@testing-library/react';

import Layouts from './Layouts';

describe('Layout component', () => {
  test('can render the default layout correctly', () => {
    const Layout = Layouts.getLayout();
    const { container } = render(<Layout>CONTEXT</Layout>);
    expect(screen.getByText(/CONTEXT/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(
      'flex items-center justify-center'
    );
  });

  test('can render the centered layout correctly', () => {
    const Layout = Layouts.getLayout('centered');
    const { container } = render(<Layout>CONTEXT</Layout>);
    expect(screen.getByText(/CONTEXT/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(
      'flex items-center justify-center'
    );
  });

  test('can render the full-width layout correctly', () => {
    const Layout = Layouts.getLayout('full-width');
    const { container } = render(<Layout>CONTEXT</Layout>);
    expect(screen.getByText(/CONTEXT/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('py-6 px-8');
  });

  test('can render the fallback layout correctly', () => {
    const Layout = Layouts.getLayout('not-supported-layout');
    const { container } = render(<Layout>CONTEXT</Layout>);
    expect(screen.getByText(/CONTEXT/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(
      'flex items-center justify-center'
    );
  });
});
