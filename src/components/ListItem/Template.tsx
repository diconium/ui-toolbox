import classNames from 'classnames';
import React, { ComponentProps } from 'react';

export interface Props extends ComponentProps<'button'> {
  onClick?: () => void;
  canBeOpened?: boolean;
  selected?: boolean;
}

function Template({
  children,
  className,
  onClick = () => {},
  canBeOpened = false,
  selected = false,
}: Props) {
  const template = classNames([
    'bg-toolbox-white px-6 py-4 border rounded-2xl',
    'w-full text-left',
    selected ? 'border-toolbox-primary' : 'border-toolbox-neutral-50',
    className,
  ]);

  if (canBeOpened) {
    return (
      <button
        className={template}
        onClick={() => onClick()}
        type="button"
      >
        {children}
      </button>
    );
  }
  
return <div className={template}>{children}</div>;
}

export default Template;
