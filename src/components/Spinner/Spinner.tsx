import classNames from 'classnames';
import React from 'react';

export interface Props {
  size?: string;
}

const sizeToStyles = (size: string) => {
  if (size === 's') {
    return 'w-4 h-4';
  }
  if (size === 'm') {
    return 'w-7 h-7';
  }
  if (size === 'lg') {
    return 'w-10 h-10';
  }
  if (size === 'xl') {
    return 'w-14 h-14';
  }

  return 'w-10 h-10';
};

function Spinner({ size = 'lg' }: Props) {
  return (
    <svg
      className={classNames('animate-spin', sizeToStyles(size))}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="stroke-toolbox-primary"
        cx="20"
        cy="20"
        r="18"
        strokeWidth="4"
      />
      <path
        className="stroke-toolbox-neutral-200"
        d="M38 20C38 29.9411 29.9411 38 20 38C10.0589 38 2 29.9411 2 20"
        strokeWidth="4"
      />
      <path
        className="stroke-toolbox-neutral-200"
        d="M2 20C2 10.0589 10.0589 2 20 2"
        strokeWidth="4"
      />
    </svg>
  );
}

export default Spinner;
