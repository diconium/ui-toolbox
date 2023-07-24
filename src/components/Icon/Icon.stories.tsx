import React from 'react';
import { Icon, DEFAULT, AUTOMOTIVE } from './Icon';

export default {
  title: 'Toolbox/Icon',
  component: Icon,
};

export function Default() {
  return <Icon icon="address-book" />;
}

export function DifferentSizes() {
  return (
    <div className="flex space-x-4">
      <Icon
        icon="address-book"
        size="s"
      />
      <Icon
        icon="address-book"
        size="m"
      />
      <Icon
        icon="address-book"
        size="lg"
      />
      <Icon
        icon="address-book"
        size="xl"
      />
    </div>
  );
}

export function IconDoesNotExist() {
  return <Icon icon="foo" />;
}

export const All = {
  render: () => (
    <div className="grid grid-cols-6">
      {Object.keys(DEFAULT).map((icon) => (
        <div
          key={icon.replace('tb-', '')}
          className="flex flex-col text-center"
        >
          <Icon icon={icon.replace('tb-', '')} />
          <p>{icon.replace('tb-', '')}</p>
        </div>
      ))}
    </div>
  ),

  /** This snapshot is to big for chromatic */
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};

export const AutomotiveFont = {
  render: () => (
    <div className="grid grid-cols-6">
      {Object.keys(AUTOMOTIVE).map((icon) => (
        <div
          key={icon.replace('tb-', '')}
          className="flex flex-col text-center"
        >
          <Icon icon={icon.replace('tb-', '')} />
          <p>{icon.replace('tb-', '')}</p>
        </div>
      ))}
    </div>
  ),

  /** This snapshot is to big for chromatic */
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};
