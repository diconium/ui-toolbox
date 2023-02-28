import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  onClick?: () => void;
  canBeOpened?: boolean;
}

function Template({ children, onClick = () => {}, canBeOpened = false }: Props) {
  const template = classNames([
    'bg-toolbox-white px-6 py-4 border border-toolbox-neutral-50 rounded-2xl',
    'w-full text-left',
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
