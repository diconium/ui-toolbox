import React from 'react';
import StickyButton from './Sticky';

export default {
  title: 'Toolbox/Button/Sticky',
  component: StickyButton,
};

export const Default = {
  render: () => (
    <div className="h-96 relative">
      <StickyButton label="Action" />
    </div>
  ),
};

export const LeftSide = {
  render: () => (
    <div className="h-96 relative">
      <StickyButton
        label="Action"
        left
      />
    </div>
  ),
};

export const Secondary = {
  render: () => (
    <div className="h-96 relative">
      <StickyButton
        secondary
        label="Action"
      />
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div className="h-96 relative">
      <StickyButton
        disabled
        label="Action"
      />
    </div>
  ),
};
