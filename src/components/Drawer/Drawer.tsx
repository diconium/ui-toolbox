import classNames from 'classnames';
import React, { ComponentProps, useState } from 'react';

import Swipeable, { Options } from '../Utils/Swipeable';

import { getLayout } from './Layouts';

export interface Props extends ComponentProps<'div'> {
  opened?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  layout?: string;
  swipeOptions?: Options;
}

const BASE_TEMPLATE = `bg-toolbox-white shadow rounded-t-2xl
  border border-toolbox-neutral-50`;

function Drawer({
  children,
  opened = false,
  onOpen = () => {},
  onClose = () => {},
  layout = 'centered',
  swipeOptions = {},
  className
}: Props) {
  const [open, setOpen] = useState(opened);
  const template = classNames(BASE_TEMPLATE, { 'h-14': !open }, className);

  const onToggle = () => {
    if (!children) {
      return;
    }
    const toggled = !open;
    setOpen(toggled);
    if (toggled) {
      onOpen();
    } else {
      onClose();
    }
  };
  const Layout = getLayout(layout);

  return (
    <Swipeable
      disable={!children}
      options={{
        onSwipedUp: () => setOpen(true),
        onSwipedDown: () => setOpen(false),
        ...swipeOptions,
      }}
      className={template}
    >
      <div className="flex justify-center my-3">
        <button
          aria-label="drawer-handle"
          type="button"
          className="rounded-2xl bg-toolbox-neutral-200 h-1 w-20"
          onClick={onToggle}
        />
      </div>
      {open && <Layout>{children}</Layout>}
    </Swipeable>
  );
}

export default Drawer;
