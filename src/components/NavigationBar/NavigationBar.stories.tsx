import React from 'react';
import { Meta } from '@storybook/react';
import Avatar from '../Avatar';
import QuickButton from '../Button/Quick';
import Icon from '../Icon';
import NavigationBar from './NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  title: 'Toolbox/NavigationBar',
  component: NavigationBar,

  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },

  decorators: [
    (Story) => (
      <div className="flex justify-center items-center h-48">
        <div className="w-sm">
          <Story />
        </div>
      </div>
    ),
  ],
};
export default meta;

export function Default() {
  return <NavigationBar />;
}

export function WithRightSide() {
  return (
    <NavigationBar
      right={
        <>
          <Icon icon="address-book" />
          <Icon icon="calendar-user" />
        </>
      }
    />
  );
}

export function WithLeftSide() {
  return (
    <NavigationBar
      left={
        <>
          <Icon icon="address-book" />
          <Icon icon="calendar-user" />
        </>
      }
    />
  );
}

export function WithAction() {
  return (
    <NavigationBar>
      <QuickButton icon="check" />
    </NavigationBar>
  );
}

export function All() {
  return (
    <NavigationBar
      left={
        <>
          <Icon icon="mail-check" />
          <Icon icon="calendar" />
        </>
      }
      right={
        <>
          <Icon icon="fingerprint" />
          <Avatar
            link="https://i.pravatar.cc/150?u=08188"
            alt="Mike"
            badge={9}
          />
        </>
      }
    >
      <QuickButton icon="check" />
    </NavigationBar>
  );
}
