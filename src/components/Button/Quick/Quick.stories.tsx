import React from 'react';
import QuickButton from './Quick';

export default {
  title: 'Toolbox/Button/Quick',
  component: QuickButton,
};

export const Default = {
  render: () => (
    <QuickButton
      icon="check"
      onClick={() => {}}
    />
  ),
};

export const Hovered = {
  render: () => <QuickButton icon="check" />,

  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Active = {
  render: () => <QuickButton icon="check" />,

  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Focus = {
  render: () => <QuickButton icon="check" />,

  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};

export const Disabled = {
  render: () => (
    <QuickButton
      disabled
      icon="gear"
    />
  ),
};
