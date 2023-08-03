import React from 'react';
import type { Meta } from '@storybook/react';
import Avatar from '../../Avatar';
import StickyButton from '../../Button/Sticky';
import Layout from './Centered';

const meta: Meta<typeof Layout> = {
  title: 'Toolbox/Layout/Centered',
  component: Layout,

  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },

  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <div className="w-sm border">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

export function Default() {
  return (
    <Layout>
      <div className="w-full border">CENTERED CONTENT</div>
    </Layout>
  );
}

export function AdditionalStyles() {
  return (
    <Layout className="bg-toolbox-feedback-orange">
      <div className="w-full">CENTERED CONTENT</div>
    </Layout>
  );
}

export function WithFooter() {
  return (
    <Layout
      footer={
        <div className="w-full text-toolbox-neutral-200 text-sm flex justify-center">
          Contact your support
          <span className="underline underline-offset-2">here</span>.
        </div>
      }
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mb-4">
          <Avatar
            link="https://i.pravatar.cc/150?u=08188"
            alt="Mike"
            size="xl"
            badge={99}
          />
        </div>
        <div className="text-toolbox-primary text-2xl">WELCOME BACK</div>
        <div className="text-toolbox-primary text-base">Let&apos;s continue</div>
      </div>
    </Layout>
  );
}

export function Example() {
  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mb-4">
          <Avatar
            link="https://i.pravatar.cc/150?u=08188"
            alt="Mike"
            size="xl"
            badge={99}
          />
        </div>
        <div className="text-toolbox-neutral text-2xl">
          Welcome back,
          <span className="text-toolbox-primary">Jeff</span>
        </div>
        <div className="text-toolbox-neutral-500 text-sm">
          Let&apos;s continue to get some work done today.
        </div>
      </div>
      <StickyButton label="Next" />
    </Layout>
  );
}
