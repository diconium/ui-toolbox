import React from 'react';
import { screen, render } from '@testing-library/react';

import Layout from './Centered';

describe('Layout/Centered component', () => {
  test('can render the default component correctly', () => {
    render(
      <Layout>
        <div>foo</div>
      </Layout>
    );
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });

  test('can render with additional styling correctly', () => {
    render(
      <Layout className="baz">
        <div>foo</div>
      </Layout>
    );
    expect(screen.getByText(/foo/i).parentElement?.parentElement).toHaveClass('baz');
  });

  test('can render the with a footer correctly', () => {
    render(
      <Layout footer={<span>bar</span>}>
        <div>foo</div>
      </Layout>
    );
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });
});
