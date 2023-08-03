import React, { ReactNode, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface Props extends PropsWithChildren {
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

function Mobile({ header, children, footer, className }: Props) {
  const template = classNames(['flex-1 overflow-y-scroll', className]);
  
return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex flex-shrink">{header}</div>
      <div className={template}>{children}</div>
      <div className="flex flex-shrink">{footer}</div>
    </div>
  );
}

export default Mobile;
