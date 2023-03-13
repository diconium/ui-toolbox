import classNames from 'classnames';
import React, { ReactNode, PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  className?: string;
  footer?: ReactNode | undefined;
}

function Centered({ children, className, footer }: Props) {
  const template = classNames([
    'h-screen flex flex-col justify-center',
    'px-14 py-7 relative',
    className,
  ]);
  return (
    <div className={template}>
      <div className="flex-1 flex justify-center items-center">{children}</div>
      <div className="flex flex-shrink">{footer}</div>
    </div>
  );
}

export default Centered;
