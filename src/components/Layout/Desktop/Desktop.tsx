import React, { ReactNode, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface Props extends PropsWithChildren {
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

function Desktop({ header, children, footer, className }: Props) {
  const template = classNames(['flex-1 overflow-hidden w-full', className]);
  return (
    <div className="flex h-screen w-full">
      <div className="h-screen relative shadow-md">{header}</div>
      <div className={template}>{children}</div>
      <div className="h-screen shadow-md">{footer}</div>
    </div>
  );
}

export default Desktop;
