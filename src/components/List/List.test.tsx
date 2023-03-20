import React from 'react';
import { screen, render } from '@testing-library/react';

import List from './List';

describe('List component', () => {
  test('can render the default component correctly', () => {
    render(
      <List>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </List>
    );
    expect(screen.getAllByText(/1/i).length).toEqual(3);
  });
});
