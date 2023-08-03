import React from 'react';
import type { Meta } from '@storybook/react';
import Drawer from './Drawer';
import PrimaryButton from '../Button/Primary';
import Chip from '../Chip';

const meta: Meta<typeof Drawer> = {
  title: 'Toolbox/Drawer',
  component: Drawer,

  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },

  decorators: [
    (Story) => (
      <div
        className="flex justify-center items-end"
        style={{
          height: '320px',
        }}
      >
        <div className="w-sm">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

export function Default() {
  return <Drawer />;
}

export function Opened() {
  return (
    <Drawer opened>
      <span className="text-center py-4 font-thin text-base text-toolbox-neutral">
        Are you really sure?
      </span>
      <PrimaryButton label="Action" />
    </Drawer>
  );
}

export function DifferentContentLayouts() {
  return (
    <Drawer
      opened
      layout="full-width"
    >
      <div className="text-base font-thin pt-1 pb-3">Location</div>
      <div className="grid grid-cols-2 gap-x-1 gap-y-2">
        <Chip label="Ingolstadt" />
        <Chip label="Munich" />
        <Chip label="Berlin" />
        <Chip label="Stuttgart" />
      </div>
      <div className="flex justify-center py-7">
        <PrimaryButton label="Action" />
      </div>
    </Drawer>
  );
}
