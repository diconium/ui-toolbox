import React, { PropsWithChildren } from 'react';

import State from './State';

interface ContainerProps extends PropsWithChildren {
  color?: string;
  size?: string;
}

function StateContainer({ color = 'bg-toolbox-primary', size = 'lg', children }: ContainerProps) {
  if (!children) {
    return (
      <div className="absolute bottom-0 right-0">
        <State
          color={color}
          size={size}
        />
      </div>
    );
  }
  
return (
    <div className="relative inline-block">
      {children}
      <div className="absolute bottom-0 right-0">
        <State
          color={color}
          size={size}
        />
      </div>
    </div>
  );
}

export default StateContainer;
