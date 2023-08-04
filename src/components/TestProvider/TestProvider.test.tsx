import { render } from '@testing-library/react';
import React from 'react';

import { TestProvider as IMPORT, TextField } from '../../index';
import TestProvider from './TestProvider';

describe('TestProvider component in development environment', () => {
  beforeEach(() => {
        process.env = {
          NEXT_PUBLIC_NODE_ENV: 'test',
        };
  });
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(TestProvider).toBeDefined();
    expect(IMPORT).toEqual(TestProvider);
  });

  test('can render the default selector correctly', () => {
    const { container } = render(
      <section>
        <TestProvider reference="defaultValue">
          <div>Action</div>
        </TestProvider>
      </section>
    );
    expect(container.querySelector(`div[data-test="defaultValue"]`)).toBeInTheDocument();
  });

  test('can render the custom selector correctly', () => {
    const { container } = render(
      <section>
        <TestProvider
          selector="cy"
          reference="customSelectorValue"
        >
          <div>Action</div>
        </TestProvider>
      </section>
    );
    expect(container.querySelector('div[data-cy="customSelectorValue"]')).toBeInTheDocument();
  });

  test('can render the complex component as a child correctly', () => {
    const { container } = render(
      <section>
        <TestProvider
          selector="cy"
          reference="customSelectorValue"
        >
          <TextField
            value="with text"
            placeholder="Placeholder text"
          />
        </TestProvider>
      </section>
    );
    expect(container.querySelector('div[data-cy="customSelectorValue"]')).toBeInTheDocument();
  });

  test('does not apply if there is more then 1 child', () => {
    const { container } = render(
      <section>
        <TestProvider
          selector="cy"
          reference="customSelectorValue"
        >
          <div>child 1</div>
          <div>child 2</div>
        </TestProvider>
      </section>
    );
    expect(container.querySelector('*[data-cy="customSelectorValue"]')).toBeNull();
  });
});

describe('TestProvider component in production environment', () => {
  const initialEnv = process.env;

  beforeEach(() => {
    process.env = {
      NODE_ENV: 'production',
    };
  });

  afterEach(() => {
    process.env = initialEnv;
  });

  test('does not apply in production environment', () => {
    const { container } = render(
      <section>
        <TestProvider reference="attrValue">
          <div>Action</div>
        </TestProvider>
      </section>
    );
    expect(container.querySelector('div[data-test="defaultValue"]')).toBeNull();
  });

  test('applies in production with enableInProduction flag is set', () => {
    const { container } = render(
      <section>
        <TestProvider
          selector="cy"
          reference="customSelectorValue"
          enableInProduction
        >
          <div>Action</div>
        </TestProvider>
      </section>
    );
    expect(container.querySelector('div[data-cy="customSelectorValue"]')).toBeInTheDocument();
  });
});
