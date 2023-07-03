import React, { PropsWithChildren, ReactNode } from 'react';

export interface Props extends PropsWithChildren {
  left?: ReactNode | undefined;
  right?: ReactNode | undefined;
}

function NavigationBar({ left, right, children }: Props) {
  return (
    <div className="shadow min-w-sm relative w-full">
      {children && <div className="absolute top-0 left-1/2 -ml-8 -mt-4">{children}</div>}
      <div className="flex w-full h-20 py-5 px-8">
        <div className="flex flex-1 items-center space-x-8 text-toolbox-primary">{left}</div>
        <div className="flex flex-1 items-center justify-end space-x-8 text-toolbox-primary">
          {right}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
