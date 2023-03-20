---
to: src/components/<%= name %>/<%= name %>.test.tsx
---
import React from 'react';
// import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import { <%= name %> as IMPORT } from '../../index';
import <%= name %> from './<%= name %>';

describe('<%= name %> component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(<%= name %>).toBeDefined();
    expect(IMPORT).toEqual(<%= name %>);
  });

  test('can render the default component correctly', () => {
    render(<<%= name %> />);
    expect(screen.getByText(/Action/i)).toBeInTheDocument();
  });
});
