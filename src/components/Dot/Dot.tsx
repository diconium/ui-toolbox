import React from 'react';
import classNames from 'classnames';

export interface Props {
  color?: string;
  size?: string;
}

const sizeToTemplate = (size: string) => {
  if (size === 'xl') {
    return ['w-5', 'h-5'];
  }
  if (size === 'lg') {
    return ['w-4', 'h-4'];
  }
  if (size === 'm') {
    return ['w-3', 'h-3'];
  }
  return ['w-2', 'h-2'];
};

function Dot({ size = 'lg', color = 'bg-toolbox-primary' }: Props) {
  return (
    <div className={classNames(...sizeToTemplate(size), 'inline-block rounded-full', color)} />
  );
}

export default Dot;
