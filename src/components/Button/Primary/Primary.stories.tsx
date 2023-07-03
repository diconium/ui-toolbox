import React from 'react';
import PrimaryButton from './Primary';

export default {
  title: 'Toolbox/Button/Primary',
  component: PrimaryButton,
};

export const Default = {
  render: () => (
    <div className="flex">
      <PrimaryButton
        label="Action"
        onClick={() => {}}
      />
      <PrimaryButton
        outlined
        label="Action"
        onClick={() => {}}
      />
      <PrimaryButton
        icon="check"
        label="Action"
        onClick={() => {}}
      />
      <PrimaryButton
        icon="house-bolt"
        outlined
        label="Action"
        onClick={() => {}}
      />
    </div>
  ),
};

export const Hovered = {
  render: () => (
    <div className="flex">
      <PrimaryButton label="Action" />
      <PrimaryButton
        outlined
        label="Action"
      />
      <PrimaryButton
        label="Action"
        icon="check"
      />
      <PrimaryButton
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
      <PrimaryButton label="Action" />
      <PrimaryButton
        outlined
        label="Action"
      />
      <PrimaryButton
        label="Action"
        icon="check"
      />
      <PrimaryButton
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
      <PrimaryButton label="Action" />
      <PrimaryButton
        outlined
        label="Action"
      />
      <PrimaryButton
        label="Action"
        icon="check"
      />
      <PrimaryButton
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
      <PrimaryButton
        disabled
        label="Action"
      />
      <PrimaryButton
        disabled
        outlined
        label="Action"
      />
      <PrimaryButton
        disabled
        label="Action"
        icon="check"
      />
      <PrimaryButton
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
      <PrimaryButton label="Action" />
      <PrimaryButton
        outlined
        label="Action"
      />
      <PrimaryButton
        label="Action"
        icon="check"
      />
      <PrimaryButton
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
