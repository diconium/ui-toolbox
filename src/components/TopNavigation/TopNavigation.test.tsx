import React from 'react';
import { screen, render } from '@testing-library/react';

import TopNavigation from './TopNavigation';

describe('TopNavigation component', () => {
  test('can render the default component correctly', () => {
    render(<TopNavigation title="Foo" />);
    expect(screen.getByText(/Foo/i)).toBeInTheDocument();
  });

  test('can render the component with children correctly', () => {
    render(
      <TopNavigation
        title="Foo"
        subtitle="bar"
        leading="awesome"
      >
        <span>CONTEXT1</span>
        <span>CONTEXT2</span>
        <span>CONTEXT3</span>
      </TopNavigation>
    );
    expect(screen.getByText(/Foo/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    expect(screen.getByText(/awesome/i)).toBeInTheDocument();
    expect(screen.getAllByText(/CONTEXT/i).length).toBe(3);
  });

  test('can render the children in the left side correctly', () => {
    render(
      <TopNavigation
        title="Foo"
        subtitle="bar"
        leading="awesome"
        left={<div>TEST</div>}
      >
        <span>CONTEXT1</span>
        <span>CONTEXT2</span>
        <span>CONTEXT3</span>
      </TopNavigation>
    );
    expect(screen.getAllByText(/TEST/i).length).toBe(1);
    expect(screen.getAllByText(/CONTEXT/i).length).toBe(3);
  });
});
