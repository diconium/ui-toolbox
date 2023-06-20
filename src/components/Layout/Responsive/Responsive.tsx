import React, { PropsWithChildren, ReactNode } from 'react';
import Desktop from '../Desktop/Desktop';
import Mobile from '../Mobile/Mobile';

export interface Props extends PropsWithChildren {
  header?: ReactNode;
  footer?: ReactNode;
  sidenav?: ReactNode;
  action?: ReactNode;
  className?: string;
  breakpoint?: number;
}

const DEFAULT_BREAKPOINT = 638;

function Responsive({
  header,
  footer,
  sidenav,
  action,
  className,
  breakpoint,
  children,
}: Props) {
  const [width, setWidth] = React.useState(
    window.innerWidth
  );

  React.useEffect(() => {
    window.addEventListener('resize', () =>
      setWidth(window.innerWidth)
    );
  }, []);

  if (!breakpoint) {
    breakpoint = DEFAULT_BREAKPOINT;
  }
  return width < breakpoint ? (
    <Mobile
      header={header}
      footer={footer}
      className={className}
    >
      {children}
    </Mobile>
  ) : (
    <Desktop
      header={sidenav}
      footer={action}
      className={className}
    >
      {children}
    </Desktop>
  );
}

export default Responsive;
