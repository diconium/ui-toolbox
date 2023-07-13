import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';
import Icon from '../Icon';

export interface Props extends React.ComponentProps<'div'> {
  top?: ReactNode;
  bottom?: ReactNode;
  closed?: boolean;
}

const BASE_TEMPLATE = `bg-toolbox-white min-h-screen flex flex-col overflow-hidden transition-all py-7`;

function SideNavigation({ top, children, bottom, closed }: Props) {
  const [open, setOpen] = useState(!closed);
  const template = classNames(BASE_TEMPLATE, open ? 'px-6 w-[206px]' : 'px-4 w-16');
  const onToggle = () => setOpen((pre) => !pre);

  return (
    <nav className={template}>
      <section className="flex flex-col flex-1">
        <button
          type="button"
          onClick={onToggle}
          className="ml-auto py-1 hover:text-toolbox-primary-900"
        >
          <Icon icon={open ? 'chevron-left' : 'chevron-right'} />
        </button>
        {top}
        <div className="border my-7" />
        {children}
      </section>
      <section className="flex flex-col gap-10">{bottom}</section>
    </nav>
  );
}

export default SideNavigation;
