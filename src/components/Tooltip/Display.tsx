import classNames from 'classnames';
import React, { ReactNode, PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  tooltip: ReactNode | string;
  side?: string;
  className?: string;
}
const BASE_TEMPLATE = `pointer-events-none absolute 
  transition-opacity w-44 bg-toolbox-white
  rounded-2xl drop-shadow-lg px-4 py-2
  inline-block border-toolbox-grey z-10`;

const ARROW_BASE_TEMPLATE = `w-0 h-0 absolute border-t-[16px] 
  border-t-transparent border-b-[16px] border-b-transparent
  border-r-[16px] border-r-toolbox-white`;

export function Display({ tooltip, side = 'right', className = '' }: Props) {
  const template = classNames(BASE_TEMPLATE, className, [
    side === 'right' && 'right-0 translate-x-full -translate-y-1/2 -mr-6',
    side === 'left' && 'left-0 -translate-x-full -translate-y-1/2 -ml-6',
    side === 'top' && 'left-0 -translate-y-full -mt-3 -ml-6',
    side === 'bottom' && 'left-0 translate-y-full -bottom-4 -mr-6',
  ]);
  const arrow = classNames(ARROW_BASE_TEMPLATE, [
    side === 'right' && 'left-0 bottom-4 -translate-y-1/4 -ml-4',
    side === 'left' && 'right-0 bottom-4 -translate-y-1/4 -mr-4 rotate-180',
    side === 'top' && 'left-1/2 bottom-0 -mb-6 translate-x-1/2 -ml-4 -rotate-90',
    side === 'bottom' && 'left-1/2 top-0 -mt-6 translate-x-1/2 -ml-4 rotate-90',
  ]);
  const isSimple = typeof tooltip === 'string' || tooltip instanceof String;

  return (
    <div className={template}>
      <span className={arrow} />
      {isSimple && <span className="text-sm text-toolbox-neutral">{tooltip}</span>}
      {!isSimple && tooltip}
    </div>
  );
}

export default Display;
