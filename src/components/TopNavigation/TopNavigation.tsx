import React, { PropsWithChildren, ReactNode } from 'react';

export interface Props extends PropsWithChildren {
  title: string;
  leading?: string;
  subtitle?: string;
  left?: ReactNode;
}

function TopNavigation({ title, leading, subtitle, children, left }: Props) {
  return (
    <div className="shadow-sm w-full">
      <div className="flex flex-col space-y-1 px-8 py-2">
        <div className="flex items-center h-10">
          <div className="flex flex-none text-toolbox-neutral">{left}</div>
          <div className="flex grow justify-end leading-10 space-x-4 text-toolbox-neutral">
            {children}
          </div>
        </div>
        <div className="text-sm leading-5 h-5">{leading}</div>
        <div className="flex items-center">
          {subtitle && (
            <div className="flex flex-none text-toolbox-primary text-base leading-5">
              {subtitle}
            </div>
          )}
          <div className="flex grow justify-end text-toolbox-neutral leading-8 text-2xl font-semibold">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
