import React from 'react';
import Button from './Button';

export default {
  title: 'Toolbox/Button',
  component: Button,
};

export const Default = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button outlined>Default</Button>
    </>
  ),
};

export const Hovered = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button outlined>Default</Button>
    </>
  ),
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Active = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button outlined>Default</Button>
    </>
  ),
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Focused = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button outlined>Default</Button>
    </>
  ),

  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};

export const Disabled = {
  render: () => (
    <>
      <Button disabled>Default</Button>
      <Button
        outlined
        disabled
      >
        Default
      </Button>
    </>
  ),
};

export const Visited = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button outlined>Default</Button>
    </>
  ),
  parameters: {
    pseudo: {
      visited: true,
    },
  },
};
