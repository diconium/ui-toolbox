import React, { useState } from 'react';
import PaginationDots from './PaginationDots';

export default {
  title: 'Toolbox/PaginationDots',
  component: PaginationDots,
};
export function Default() {
  return (
    <PaginationDots
      pages={[
        {
          title: 'Step 1',
        },
        {
          title: 'Step 2',
        },
        {
          title: 'Step 3',
        },
        {
          title: 'Step 4',
        },
        {
          title: 'Step 5',
        },
        {
          title: 'Step 6',
        },
      ]}
    />
  );
}

export function CurrentStep() {
  return (
    <PaginationDots
      current={4}
      pages={[
        {
          title: 'Step 1',
        },
        {
          title: 'Step 2',
        },
        {
          title: 'Step 3',
        },
        {
          title: 'Step 4',
        },
        {
          title: 'Step 5',
        },
        {
          title: 'Step 6',
        },
      ]}
    />
  );
}

export function WithAction() {
  const [current, set] = useState(0);

  return (
    <PaginationDots
      current={current}
      onClick={(index) => set(index)}
      pages={[
        {
          title: 'Step 1',
        },
        {
          title: 'Step 2',
        },
        {
          title: 'Step 3',
        },
        {
          title: 'Step 4',
        },
        {
          title: 'Step 5',
        },
        {
          title: 'Step 6',
        },
      ]}
    />
  );
}

export function Disabled() {
  return (
    <PaginationDots
      disabled
      current={1}
      pages={[
        {
          title: 'Step 1',
        },
        {
          title: 'Step 2',
        },
        {
          title: 'Step 3',
        },
      ]}
    />
  );
}
