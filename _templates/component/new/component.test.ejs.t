---
to: src/components/<%= name %>/<%= name %>.test.tsx
---
import React from 'react';
// import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import <%= name %> from './<%= name %>';

describe('<%= name %> component', () => {
  test('can render the default button correctly', () => {
    render(<<%= name %> />);
    expect(screen.getByText(/Action/i)).toBeDefined();
  });
});
