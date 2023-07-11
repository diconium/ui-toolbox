import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import Modal from './Modal';
import Avatar from '../Avatar';

const meta: Meta<typeof Modal> = {
  title: 'Toolbox/Modal',
  component: Modal,

  decorators: [
    (Story) => (
      <div className="flex justify-center items-center h-72">
        <Story />
      </div>
    ),
  ],
};
export default meta;

export function Default() {
  return <Modal title="Welcome">See all the new features we have added so far.</Modal>;
}

export function CustomContent() {
  return (
    <Modal
      title="Invite Team"
      acknowledgement="Send invitation"
    >
      <div className="flex items-center">
        <Avatar
          link="https://i.pravatar.cc/150?u=47110"
          alt="Nora"
          size="lg"
        />
        <div className="mx-2 text-toolbox-neutral leading-5 text-xs italic w-56">
          Do you want to invite this new user to your app?
        </div>
      </div>
    </Modal>
  );
}

export function WithActions() {
  const [opened, set] = useState(true);

  return (
    <div>
      {!opened && (
        <button
          className="text-toolbox-primary underline font-semibold leading-5 text-sm"
          type="button"
          onClick={() => set(true)}
        >
          Reopen the modal here
        </button>
      )}
      {opened && (
        <Modal
          title="Welcome"
          acknowledgement="Yes"
          dismissal="Skip for now"
          onAcknowledge={() => set(false)}
          onDismiss={() => set(false)}
        >
          See all the new features we have added so far.
        </Modal>
      )}
    </div>
  );
}
