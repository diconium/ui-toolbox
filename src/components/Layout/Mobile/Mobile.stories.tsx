import type { Meta } from '@storybook/react';
import React from 'react';
import Avatar from '../../Avatar';
import QuickButton from '../../Button/Quick';
import Icon from '../../Icon';
import NavigationBar from '../../NavigationBar';
import TopNavigation from '../../TopNavigation';
import Layout from './Mobile';

const meta: Meta<typeof Layout> = {
  title: 'Toolbox/Layout/Mobile',
  component: Layout,

  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },

  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <div className="w-sm">
          <Story />
        </div>
      </div>
    ),
  ],
};
export default meta;

export function Default() {
  return (
    <Layout
      className="bg-toolbox-feedback-orange px-8 py-4"
      header={<div className="h-32 bg-toolbox-primary w-full" />}
      footer={<div className="h-32 bg-toolbox-secondary w-full" />}
    >
      <div className="p-16 flex flex-col items-center bg-toolbox-neutral-50 h-[1280px]">
        SCROLLABLE CONTENT
      </div>
    </Layout>
  );
}

export function AdditionalStyles() {
  return (
    <Layout
      className="bg-toolbox-feedback-orange px-8 py-4"
      header={<div className="h-32 bg-toolbox-primary w-full" />}
      footer={<div className="h-32 bg-toolbox-secondary w-full" />}
    >
      <div className="p-16 flex flex-col items-center bg-toolbox-feedback-orange h-[1280px]">
        SCROLLABLE CONTENT
      </div>
    </Layout>
  );
}

export function Example() {
  return (
    <Layout
      className="bg-toolbox-neutral-50 px-8 py-4"
      header={
        <TopNavigation
          title="your app"
          leading="simplified screen building"
          subtitle="with reusable layouts"
        >
          <Icon icon="menu" />
        </TopNavigation>
      }
      footer={
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
                badge={4}
              />
            </>
          }
        >
          <QuickButton icon="check" />
        </NavigationBar>
      }
    >
      <div className="h-[1280px]">SCROLLABLE CONTENT</div>
    </Layout>
  );
}
