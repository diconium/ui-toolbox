import React from 'react';
import Dot from '../Dot';

export interface Props {
  color?: string;
  label?: string;
  size?: string;
}

function State({ size = 'lg', color = 'bg-toolbox-primary', label }: Props) {
  if (label) {
    return (
      <div className="flex items-center space-x-2">
        <Dot
          size="m"
          color={color}
        />
        <span className="text-toolbox-neutral leading-5 text-xs">{label}</span>
      </div>
    );
  }
  return (
    <Dot
      size={size}
      color={color}
    />
  );
}

export default State;
