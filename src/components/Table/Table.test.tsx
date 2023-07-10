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
        config={[
          { key: 'Text1', options: { hideHeader: true }, render: 'default' },
          { key: 'Text3', options: { hideHeader: true }, render: 'default' },
          { key: 'Text2', options: { hideHeader: true }, render: 'default' },
        ]}
      />
    );
    expect(screen.getAllByText(/Label/i).length).toEqual(3);
  });

  test('can render the component with config correctly', () => {
    render(
      <Table
        rows={[
          {
            Text1: 'Label1',
            Text2: 'Label2',
            Text3: 'Label3',
          },
        ]}
        config={[
          { key: 'Text1', render: 'default' },
          { key: 'Text2', render: 'default' },
        ]}
      />
    );
    expect(screen.getAllByText(/Label/i).length).toEqual(2);
  });

  test('can render the component with hidden header correctly', () => {
    render(
      <Table
        rows={[
          {
            Text1: 'Label1',
            Text2: 'Label2',
            Text3: 'Label3',
          },
        ]}
        config={[
          { key: 'Text1', options: { hideHeader: true }, render: 'default' },
          { key: 'Text3', options: { hideHeader: true }, render: 'default' },
          { key: 'Text2', options: { hideHeader: true }, render: 'default' },
        ]}
      />
    );
    expect(screen.getAllByText(/Label/i).length).toEqual(3);
    expect(screen.queryByText(/Text/i)).not.toBeInTheDocument();
  });

  test('can render the component with incorrect render without error', () => {
    const { container } = render(
      <Table
        rows={[
          {
            Text1: 'Label1',
            Text2: 'FooLabel',
          },
        ]}
        config={[
          { key: 'Text1', render: 'icon' },
          { key: 'Text2', render: 'foo' },
        ]}
      />
    );
    expect(container.querySelector('span')).toBeInTheDocument();
    expect(screen.queryByText(/FooLabel/i)).toBeInTheDocument();
  });

  test('can render the component with incorrect key without error', () => {
    render(
      <Table
        rows={[
          {
            Text1: 'Label1',
            Text2: 'Label2',
            Text3: 'Label3',
          },
        ]}
        config={[
          { key: 'Text1', render: 'default' },
          { key: 'Text2', render: 'default' },
          { key: 'foo', render: 'default' },
        ]}
      />
    );
    expect(screen.queryByText(/No value provided/i)).toBeInTheDocument();
  });

  test('hides the key not defined in config', () => {
    render(
      <Table
        rows={[
          {
            Hidden: 'Hidden',
            Text2: 'Label12',
            Text3: 'Label13',
          },
          {
            Hidden: 'Hidden',
            Text2: 'Label22',
            Text3: 'Label23',
          },
        ]}
        config={[
          { key: 'Text2', render: 'default' },
          { key: 'Text3', render: 'default' },
        ]}
      />
    );
    expect(screen.queryByText(/Hidden/i)).not.toBeInTheDocument();
  });
});
