import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';

export interface Props extends PropsWithChildren {
  opened?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const BASE_TEMPLATE = `bg-toolbox-white shadow rounded-t-2xl
  border border-toolbox-neutral-50 min-w-sm`;

function Drawer({ children, opened = false, onOpen = () => {}, onClose = () => {} }: Props) {
  const [open, setOpen] = useState(opened);
  const template = classNames(BASE_TEMPLATE, { 'h-14': !open });
  const handle = () => {
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

  return (
    <div className={template}>
      <div className="flex justify-center my-3">
        <button
          aria-label="drawer-handle"
          type="button"
          className="rounded-2xl bg-toolbox-neutral-200 h-1 w-20"
          onClick={handle}
        />
      </div>
      <div className="flex justify-center">{open && children}</div>
    </div>
  );
}

export default Drawer;
