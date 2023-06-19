import React, { useState } from 'react';
import classNames from 'classnames';
import SideNavigationItem, {
  Props as ItemProps,
} from './SideNavigationItem';
import Icon from '../Icon';

export interface Props {
  header?: ItemProps[];
  center?: ItemProps[];
  footer?: ItemProps[];
  opened?: boolean;
}

const BASE_TEMPLATE = 'bg-toolbox-white min-h-screen flex flex-col overflow-hidden transition-all py-7';

function SideNavigation({
  header,
  center,
  footer,
  opened = true,
}: Props) {
  const [open, setOpen] = useState(opened);
  const template = classNames(
    BASE_TEMPLATE,
    open ? 'px-6 w-[206px]' : 'px-4 w-16'
  );
  const onToggle = () => setOpen((pre) => !pre);
  return (
    <div className={template}>
      <div className="flex flex-col gap-2">
        {header?.map((listItem) => (
          <SideNavigationItem
            key={listItem.label}
            label={listItem.label}
            icon={listItem.icon}
            badge={listItem.badge}
            avatar={listItem.avatar}
            state={listItem.state}
            className={open ? '' : '-ml-1'}
          />
        ))}
        <div className="flex place-items-center gap-3 py-1">
          <div className="border w-full my-6" />
        </div>
        {center?.map((listItem) => (
          <SideNavigationItem
            key={listItem.label}
            label={listItem.label}
            icon={listItem.icon}
            badge={listItem.badge}
            avatar={listItem.avatar}
            state={listItem.state}
          />
        ))}
      </div>
      <div className="flex-1 my-1" />
      <div className="flex flex-col gap-3">
        {footer?.map((listItem) => (
          <SideNavigationItem
            key={listItem.label}
            label={listItem.label}
            icon={listItem.icon}
            badge={listItem.badge}
            avatar={listItem.avatar}
            state={listItem.state}
          />
        ))}
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
