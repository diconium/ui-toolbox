import React from 'react';
import { screen, render } from '@testing-library/react';

import Layout from './Mobile';

describe('Layout/Mobile component', () => {
  test('can render the default component correctly', () => {
    render(
      <Layout
        header={<div>bar</div>}
        footer={<div>baz</div>}
      >
        <div>foo</div>
      </Layout>
    );
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    expect(screen.getByText(/baz/i)).toBeInTheDocument();
    expect(screen.getAllByText(/foo/i).length).toBe(1);
  });

  test('can render the component with additional styles correctly', () => {
    render(
      <Layout className="baz">
        <div>foo</div>
      </Layout>
    );
    expect(screen.getByText(/foo/i).parentElement).toHaveClass('baz');
  });
});
