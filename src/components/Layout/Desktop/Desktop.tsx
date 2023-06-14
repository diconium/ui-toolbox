import React, { ReactNode, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface Props extends PropsWithChildren {
  menu?: ReactNode;
  action?: ReactNode;
  className?: string;
}

function Desktop({ menu, children, action, className }: Props) {
  const template = classNames(['flex-1 px-8 py-4', className]);
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="flex">{menu}</div>
      <div className={template}>{children}</div>
      <div className="flex">{action}</div>
    </div>
  );
}

export default Desktop;
