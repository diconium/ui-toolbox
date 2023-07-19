import { render } from '@testing-library/react';
import React from 'react';

import { TestProvider as IMPORT, TextField } from '../../index';
import TestProvider from './TestProvider';

const DEFAULT_SELECTOR = '*[data-test="defaultValue"]';
const CUSTOM_SELECTOR = '*[data-cy="customSelectorValue"]';

describe('TestProvider component in development environment', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(TestProvider).toBeDefined();
    expect(IMPORT).toEqual(TestProvider);
  });

  test('can render the default selector correctly', () => {
    const { container } = render(
      <div>
        <TestProvider reference="defaultValue">
          <div>Action</div>
        </TestProvider>
      </div>
    );
    expect(container.querySelector(DEFAULT_SELECTOR)).toBeInTheDocument();
  });

  test('can render the custom selector correctly', () => {
    const { container } = render(
      <div>
        <TestProvider
          selector="cy"
          reference="customSelectorValue"
        >
          <div>Action</div>
        </TestProvider>
      </div>
    );
    expect(container.querySelector(CUSTOM_SELECTOR)).toBeInTheDocument();
  });

  test('can render the complex component as a child correctly', () => {
    const { container } = render(
      <div>
        <TestProvider
          selector="cy"
          reference="customSelectorValue"
        >
          <TextField
            value="with text"
            placeholder="Placeholder text"
          />
        </TestProvider>
      </div>
    );
    expect(container.querySelector(CUSTOM_SELECTOR)).toBeInTheDocument();
  });

  test('does not apply if there is more then 1 child', () => {
    const { container } = render(
      <div>
        <TestProvider
          selector="cy"
          reference="customSelectorValue"
        >
          <div>child 1</div>
          <div>child 2</div>
        </TestProvider>
      </div>
    );
    expect(container.querySelector(CUSTOM_SELECTOR)).toBeNull();
  });
});

describe('TestProvider component in production environment', () => {
  const initialEnv = process.env;

  beforeEach(() => {
    process.env = {
      NODE_ENV: 'prod',
    };
  });

  afterEach(() => {
    process.env = initialEnv;
  });

  test('does not apply in production environment', () => {
    const { container } = render(
      <div>
        <TestProvider reference="attrValue">
          <div>Action</div>
        </TestProvider>
      </div>
    );
    expect(container.querySelector(DEFAULT_SELECTOR)).toBeNull();
  });

  test('applies in production with enableInProduction flag is set', () => {
    const { container } = render(
      <div>
        <TestProvider
          selector="cy"
          reference="customSelectorValue"
          enableInProduction
        >
          <div>Action</div>
        </TestProvider>
      </div>
    );
    expect(container.querySelector(CUSTOM_SELECTOR)).toBeInTheDocument();
  });
});
