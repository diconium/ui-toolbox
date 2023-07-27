import React, { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {}

export function Centered({ children }: Props) {
  return (
    <div className="flex flex-col justify-center items-center px-10 pt-7 pb-10">{children}</div>
  );
}

export function FullWidth({ children }: Props) {
  return <div className="py-6 px-8">{children}</div>;
}

export const getLayout = (layout = 'centered') => {
  if (layout === 'full-width') {
    return FullWidth;
  }
  
return Centered;
};

export default { Centered, FullWidth, getLayout };
