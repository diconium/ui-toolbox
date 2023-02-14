import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface Props extends PropsWithChildren {
  label?: string;
  hint?: string;
  disabled?: boolean;
}

const BASE_TEXT = 'text-xs leading-3 px-3 py-1';

function Template({ label, hint, disabled, children }: Props) {
  const mask = classNames(BASE_TEXT, {
    'text-toolbox-neutral-400': !disabled,
    'text-toolbox-neutral-100': disabled,
  });
  return (
    <div className="flex flex-col">
      {label && <span className={mask}>{label}</span>}
      {children}
      {hint && <span className={mask}>{hint}</span>}
    </div>
  );
}

export default Template;
