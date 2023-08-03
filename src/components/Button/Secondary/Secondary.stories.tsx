import React from 'react';
import SecondaryButton from './Secondary';

export default {
  title: 'Toolbox/Button/Secondary',
  component: SecondaryButton,
};

export const Default = {
  render: () => (
    <div className="flex">
      <SecondaryButton
        label="Action"
        onClick={() => {}}
      />
      <SecondaryButton
        outlined
        label="Action"
        onClick={() => {}}
      />
      <SecondaryButton
        label="Action"
        icon="check"
        onClick={() => {}}
      />
      <SecondaryButton
        outlined
        label="Action"
        icon="house-bolt"
        onClick={() => {}}
      />
    </div>
  ),
};

export const Hovered = {
  render: () => (
    <div className="flex">
      <SecondaryButton label="Action" />
      <SecondaryButton
        outlined
        label="Action"
      />
      <SecondaryButton
        label="Action"
        icon="check"
      />
      <SecondaryButton
        outlined
        label="Action"
        icon="house-bolt"
      />
    </div>
  ),
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Active = {
  render: () => (
    <div className="flex">
      <SecondaryButton label="Action" />
      <SecondaryButton
        outlined
        label="Action"
      />
      <SecondaryButton
        label="Action"
        icon="check"
      />
      <SecondaryButton
        outlined
        label="Action"
        icon="house-bolt"
      />
    </div>
  ),
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Focus = {
  render: () => (
    <div className="flex">
      <SecondaryButton label="Action" />
      <SecondaryButton
        outlined
        label="Action"
      />
      <SecondaryButton
        label="Action"
        icon="check"
      />
      <SecondaryButton
        outlined
        label="Action"
        icon="house-bolt"
      />
    </div>
  ),
  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};

export const Disabled = {
  render: () => (
    <div className="flex">
      <SecondaryButton
        disabled
        label="Action"
      />
      <SecondaryButton
        disabled
        outlined
        label="Action"
      />
      <SecondaryButton
        disabled
        label="Action"
        icon="check"
      />
      <SecondaryButton
        disabled
        outlined
        label="Action"
        icon="house-bolt"
      />
    </div>
  ),
};

export const Visited = {
  render: () => (
    <div className="flex">
      <SecondaryButton label="Action" />
      <SecondaryButton
        outlined
        label="Action"
      />
      <SecondaryButton
        label="Action"
        icon="check"
      />
      <SecondaryButton
        outlined
        label="Action"
        icon="house-bolt"
      />
    </div>
  ),
  parameters: {
    pseudo: {
      visited: true,
    },
  },
};
