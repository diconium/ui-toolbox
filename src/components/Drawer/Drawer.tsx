import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import { getLayout } from './Layouts';

export interface Props extends PropsWithChildren {
  opened?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  layout?: string;
}

const BASE_TEMPLATE = `bg-toolbox-white shadow rounded-t-2xl
  border border-toolbox-neutral-50 min-w-sm`;

function Drawer({
  children,
  opened = false,
  onOpen = () => {},
  onClose = () => {},
  layout = 'centered',
}: Props) {
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
  const Layout = getLayout(layout);

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
      {open && <Layout>{children}</Layout>}
    </div>
  );
}

export default Drawer;
