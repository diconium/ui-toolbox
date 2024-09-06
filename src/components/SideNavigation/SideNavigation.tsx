import classNames from 'classnames';
import React, { PropsWithChildren, ReactNode } from 'react';
import Icon from '../Icon';

export interface Props extends PropsWithChildren {
  top?: ReactNode | undefined;
  bottom?: ReactNode | undefined;
  opened?: boolean;
  onToggle?: (_opened: boolean) => void;
}

function SideNavigation({ top, children, bottom, opened = true, onToggle = () => {} }: Props) {
  const template = classNames([
    'relative bg-toolbox-white min-h-screen',
    'flex flex-col overflow-hidden transition-all',
    opened ? 'p-6 w-[206px]' : 'px-3 py-6 w-16',
  ]);
  const btn = classNames([
    'hover:text-toolbox-primary-900 transition-all absolute top-6',
    opened ? 'right-6' : 'right-2',
  ]);

  return (
    <div className={template}>
      <section className="flex flex-col flex-1 pt-12">
        <button
          type="button"
          className={btn}
          onClick={() => onToggle(!opened)}
          aria-label="Toggle"
        >
          <Icon icon={opened ? 'chevron-left' : 'chevron-right'} />
        </button>
        {top}
        <div className="border my-6" />
        {children}
      </section>
      <section className="flex flex-col gap-10">{bottom}</section>
    </div>
  );
}

export default SideNavigation;
