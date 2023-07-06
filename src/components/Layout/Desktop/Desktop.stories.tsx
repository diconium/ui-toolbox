import type { Meta } from '@storybook/react';
import React from 'react';
import Layout from './Desktop';

const meta: Meta<typeof Layout> = {
  title: 'Toolbox/Layout/Desktop',
  component: Layout,

  parameters: {
    viewport: {
      viewport: { defaultViewport: 'lg' },
      layout: 'fullscreen',
    },
  },

  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export function Default() {
  return (
    <Layout
      left={<div className="bg-toolbox-primary h-screen p-4 w-[206px]">SIDE NAV</div>}
      right={<div className="bg-toolbox-secondary h-screen p-4 min-w-sm">ACTION CONTAINER</div>}
    >
      <div className="h-screen p-4">MAIN CONTENT</div>
    </Layout>
  );
}

export function AdditionalStyles() {
  return (
    <Layout
      className="bg-toolbox-feedback-orange"
      left={<div className="bg-toolbox-primary h-screen p-4 w-[206px]">SIDE NAV</div>}
      right={<div className="bg-toolbox-secondary h-screen p-4 min-w-sm">ACTION CONTAINER</div>}
    >
      <div className="h-screen p-4">MAIN CONTENT</div>
    </Layout>
  );
}
