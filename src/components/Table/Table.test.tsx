import React from 'react';
import { screen, render } from '@testing-library/react';
import { Table as IMPORT } from '../../index';

import Table from './Table';

describe('Table component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Table).toBeDefined();
    expect(IMPORT).toEqual(Table);
  });

  test('can render the default component correctly', () => {
    render(
      <Table
        rows={[
          {
            Text1: 'Label1',
            Text2: 'Label2',
            Text3: 'Label3',
          },
        ]}
      />
    );
    expect(screen.getAllByText(/Label/i).length).toEqual(3);
  });
});
