import React from 'react';
import classNames from 'classnames';

export interface Props {
  color?: string;
  label?: string;
  size?: string;
}

const sizeToTemplate = (size: string) => {
  if (size === 'lg') {
    return ['w-3', 'h-3'];
  }
  return ['w-4', 'h-4'];
};

function State({ size = 'xl', color = 'bg-toolbox-primary', label }: Props) {
  if (label) {
    return (
      <div className="flex items-center space-x-2">
        <div className={classNames('w-3 h-3 rounded-full', color)} />
        <span className="text-toolbox-neutral leading-5 text-xs">{label}</span>
      </div>
    );
  }
  return <div className={classNames(...sizeToTemplate(size), 'rounded-full', color)} />;
}

export default State;
