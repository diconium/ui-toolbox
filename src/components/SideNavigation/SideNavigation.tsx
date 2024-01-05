import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';
import Icon from '../Icon';

export interface Props extends React.ComponentProps<'div'> {
  top?: ReactNode;
  bottom?: ReactNode;
  opened?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const BASE_TEMPLATE = `relative bg-toolbox-white min-h-screen flex flex-col overflow-hidden transition-all`;

function SideNavigation({
  top,
  children,
  bottom,
  opened,
  onOpen = () => {},
  onClose = () => {},
}: Props) {
  const [open, setOpen] = useState(opened);
  const template = classNames(BASE_TEMPLATE, open ? 'p-6 w-[206px]' : 'px-3 py-6 w-16');
  const arrowTemplate = classNames(
    'hover:text-toolbox-primary-900 transition-all absolute top-6',
    open ? 'right-6' : 'right-2'
  );
  const onToggle = () => {
    setOpen((previous) => {
      const next = !previous;
      const callback = next ? onOpen : onClose;
      callback();
      
return next;
    });
  };

  return (
    <nav className={template}>
      <section className="flex flex-col flex-1 pt-12">
        <button
          type="button"
          onClick={onToggle}
          className={arrowTemplate}
          aria-label="Toggle"
        >
          <Icon icon={open ? 'chevron-left' : 'chevron-right'} />
        </button>
        {top}
        <div className="border my-6" />
        {children}
      </section>
      <section className="flex flex-col gap-10">{bottom}</section>
    </nav>
  );
}

export default SideNavigation;
