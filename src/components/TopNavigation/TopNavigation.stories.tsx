/* eslint no-unused-vars: 0 */
import type { Meta } from '@storybook/react';
import React from 'react';
import Icon from '../Icon';
import TopNavigation from './TopNavigation';

const meta: Meta<typeof TopNavigation> = {
  title: 'Toolbox/TopNavigation',
  component: TopNavigation,
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
  return <TopNavigation title="TITLE" />;
}

export function WithLeadingText() {
  return (
    <TopNavigation
      title="TITLE"
      leading="some more text"
    />
  );
}

export function WithSubtitle() {
  return (
    <TopNavigation
      title="TITLE"
      leading="some more text"
      subtitle="TEXT"
    />
  );
}

export function WithChildren() {
  return (
    <TopNavigation
      title="TITLE"
      leading="some more text"
      subtitle="TEXT"
    >
      <Icon icon="filter" />
      <Icon icon="bell" />
      <Icon icon="menu" />
    </TopNavigation>
  );
}

export function WithLeftSide() {
  return (
    <TopNavigation
      title="TITLE"
      leading="some more text"
      subtitle="TEXT"
      left={<Icon icon="arrow-narrow-left" />}
    >
      <Icon icon="filter" />
      <Icon icon="bell" />
      <Icon icon="menu" />
    </TopNavigation>
  );
}
