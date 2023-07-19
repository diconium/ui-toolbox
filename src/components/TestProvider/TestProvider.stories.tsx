import React from 'react';
import TestProvider from './TestProvider';
import TextField from '../TextField';

export default {
  title: 'Toolbox/TestProvider',
  component: TestProvider,
};

export function Default() {
  return (
    <section>
      <TestProvider
        reference="testid"
        selector="cy"
        enableInProduction
      >
        <a href="/home">Home</a>
      </TestProvider>
    </section>
  );
}

export function ComplexComponent() {
  return (
    <section>
      <TestProvider
        reference="testid"
        selector="cy"
        enableInProduction
      >
        <TextField
          value="with text"
          placeholder="Placeholder text"
        />
      </TestProvider>
    </section>
  );
}
