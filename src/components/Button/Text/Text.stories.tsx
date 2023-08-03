import React from 'react';
import TextButton from './Text';

export default {
  title: 'Toolbox/Button/Text',
  component: TextButton,
};

export const Default = {
  render: () => (
    <div className="flex space-x-4">
      <TextButton label="Action label" />
      <TextButton
        label="Action label"
        secondary
      />
    </div>
  ),
};

export const Hovered = {
  render: () => (
    <div className="flex space-x-4">
      <TextButton label="Action label" />
      <TextButton
        label="Action label"
        secondary
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
    <div className="flex space-x-4">
      <TextButton label="Action label" />
      <TextButton
        label="Action label"
        secondary
      />
    </div>
  ),
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Disabled = {
  render: () => (
    <div className="flex space-x-4">
      <TextButton
        disabled
        label="Action label"
      />
      <TextButton
        disabled
        label="Action label"
        secondary
      />
    </div>
  ),
};

export const Visited = {
  render: () => (
    <div className="flex space-x-4">
      <TextButton label="Action label" />
      <TextButton
        label="Action label"
        secondary
      />
    </div>
  ),
  parameters: {
    pseudo: {
      visited: true,
    },
  },
};

export const WithAction = {
  render: () => (
    <TextButton
      label="Action label"
      onClick={() => {}}
    />
  ),
};
