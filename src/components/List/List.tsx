import React, { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {}

function List({ children }: Props) {
  return <div className="flex flex-col space-y-2">{children}</div>;
}

export default List;
