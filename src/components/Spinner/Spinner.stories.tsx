import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Toolbox/Spinner',
  component: Spinner,
};

export function Default() {
  return <Spinner />;
}

export function DifferentSizes() {
  return (
    <div className="flex space-x-4 items-end">
      <Spinner size="s" />
      <Spinner size="m" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  );
}
