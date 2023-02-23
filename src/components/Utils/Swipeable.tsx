/* eslint react/jsx-props-no-spreading: 0 */

import React, { PropsWithChildren } from 'react';
import { useSwipeable, SwipeableProps } from 'react-swipeable';

export interface Options extends SwipeableProps {}

export interface Props extends PropsWithChildren {
  className?: string;
  options?: Options;
  disable?: boolean;
}

// available options see: https://github.com/FormidableLabs/react-swipeable
const DEFAULT_SWIPE_OPTIONS = {
  preventScrollOnSwipe: true,
  trackMouse: true,
  swipeDuration: 1000,
  //   delta: 10,
  //   trackTouch: true,
  //   rotationAngle: 0,
  //   touchEventOptions: { passive: true },
};

function Swipeable({ options = {}, className, children, disable = false }: Props) {
  const handlers = useSwipeable({
    ...DEFAULT_SWIPE_OPTIONS,
    ...options,
  });

  if (disable) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      {...handlers}
      className={className}
    >
      {children}
    </div>
  );
}

export default Swipeable;
