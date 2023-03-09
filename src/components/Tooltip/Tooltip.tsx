import React, { ReactNode, PropsWithChildren } from 'react';
import Display from './Display';

export interface Props extends PropsWithChildren {
  tooltip: ReactNode | string;
  side?: string;
}

export function Container({ children }: { children: ReactNode }) {
  return <div className="group relative w-max">{children}</div>;
}

export function Tooltip({ children, tooltip, side }: Props) {
  return (
    <Container>
      {children}
      <Display
        tooltip={tooltip}
        side={side}
        className="opacity-0 group-hover:opacity-100"
      />
    </Container>
  );
}

export default Tooltip;
