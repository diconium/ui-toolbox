import React, { ReactNode, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface Props extends PropsWithChildren {
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
}

function Desktop({ left, children, right, className }: Props) {
  const template = classNames(['flex-1 overflow-hidden w-full', className]);
  return (
    <div className="flex h-screen w-full">
      <div className="h-screen relative shadow-md overflow-y-auto">{left}</div>
      <div className={template}>{children}</div>
      <div className="h-screen shadow-md">{right}</div>
    </div>
  );
}

export default Desktop;
