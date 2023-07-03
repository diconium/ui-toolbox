import React from 'react';
import Dot from './Dot';

export default {
  title: 'Toolbox/Dot',
  component: Dot,
};

export function Default() {
  return <Dot />
}

export function DifferentSizes() {
  return (
    <div className="flex space-x-4 items-end">
      <Dot size="xl" />
      <Dot size="lg" />
      <Dot size="m" />
      <Dot size="s" />
    </div>
  );
}

export function DifferentColors() {
  return (
    <div className="flex space-x-4 items-end">
      <Dot size="xl" />
      <Dot size="lg" />
      <Dot size="m" />
      <Dot size="s" />
    </div>
  );
}
