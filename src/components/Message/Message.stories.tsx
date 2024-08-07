/* eslint no-unused-vars: 0 */
import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Message from './Message';
import Avatar from '../Avatar';

const meta: Meta<typeof Message> = {
  title: 'Toolbox/Message',
  component: Message,

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
    <div className="flex flex-col space-y-4">
      <Message
        title="Text label"
        header="Text label"
        timestamp={new Date(2022, 2, 2, 9, 12).toISOString()}
      >
        You can put any text you like into a message to create components like: Notifications,
        Inboxes, and many more. This is some random text to fill into the message. Let it roll.
      </Message>
      <Message
        read
        title="Text label"
        header="Text label"
        timestamp={new Date(2022, 4, 17, 15, 37).toISOString()}
      >
        You can put any text you like into a message to create components like: Notifications,
        Inboxes, and many more. This is some random text to fill into the message. Let it roll.
      </Message>
    </div>
  );
}

export function NoChevron() {
  return (
    <Message
      read
      disableChevron
      title="Text label"
      header="Text label"
      timestamp={new Date(2022, 2, 12, 7, 22).toISOString()}
    >
      You can put any text you like into a message.
    </Message>
  );
}

export function OnToggle() {
  const [state, set] = useState(false);

  return (
    <Message
      read={state}
      title="Text label"
      header="Text label"
      timestamp={new Date(2022, 11, 10, 7, 32).toISOString()}
      onToggle={(next) => set(next)}
    >
      You can put any text you like into a message to create components like: Notifications,
      Inboxes, and many more. This is some random text to fill into the message. Let it roll.
    </Message>
  );
}

export function OnOpen() {
  const [state, set] = useState(false);

  return (
    <Message
      read={state}
      title="Text label"
      header="Text label"
      timestamp={new Date(2022, 6, 21, 19, 3).toISOString()}
      onOpen={() => set(true)}
      onClose={() => {}}
    >
      You can put any text you like into a message to create components like: Notifications,
      Inboxes, and many more. This is some random text to fill into the message. Let it roll.
    </Message>
  );
}

export function CustomContents() {
  const [state, set] = useState(false);

  return (
    <Message
      disableChevron
      read={state}
      title="Text label"
      header="Text label"
      timestamp={new Date(2022, 6, 21, 19, 3).toISOString()}
      onOpen={() => set(true)}
      onClose={() => {}}
    >
      <div className="flex items-center">
        <Avatar
          size="m"
          link="https://i.pravatar.cc/150?u=47110"
          alt="Nora"
          border="border-toolbox-feedback-orange"
        />
        <p className="text-sm text-toolbox-neutral italic flex items-center px-2">
          Can you please look at this information?
        </p>
      </div>
    </Message>
  );
}
