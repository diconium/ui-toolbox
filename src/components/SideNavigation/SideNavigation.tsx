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
    <div className={template}>
      <div className="flex flex-col gap-2">
        {top}
        <div className="flex place-items-center gap-3 py-1">
          <div className="border w-full my-6" />
        </div>
        {children}
      </div>
      <div className="flex-1 my-1" />
      <div className="flex flex-col gap-3">
        {bottom}
        <div className="flex place-items-center gap-3 py-1">
          <div className="border w-full my-5" />
        </div>
        <div className="flex place-items-center gap-3 py-1">
          <button
            type="button"
            className="pr-3 ml-auto"
            onClick={onToggle}
          >
            <Icon
              icon={open ? 'chevron-left' : 'chevron-right'}
              size="md"
              className="hover:text-toolbox-primary-900"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideNavigation;
