import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';

export interface Props extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
  baseClassName?: string;
  disabled?: boolean;
}

const BASE = 'px-20 py-4 text-base font-semibold rounded-2xl max-w-xs';
const DISABLED = 'bg-toolbox-neutral-100 text-toolbox-neutral-300 cursor-not-allowed';

function Button({
  children,
  onClick = () => {},
  disabled = false,
  baseClassName = BASE,
  className = 'bg-toolbox-neutral hover:bg-toolbox-neutral-600 text-toolbox-white',
}: Props) {
  const classes = classnames(baseClassName, disabled && DISABLED, !disabled && className);
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
