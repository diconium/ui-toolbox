import React from 'react';
import { Meta } from '@storybook/react';
import Avatar from '../Avatar';
import Display from './Display';
import Tooltip, { Container } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Toolbox/Tooltip',
  component: Tooltip,

  decorators: [
    (Story) => (
      <div className="py-12 flex justify-center px-16">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const InAction = {
  render: () => (
    <div className="grid grid-cols-2 gap-16 m-32">
      <Tooltip
        side="left"
        tooltip="Text label for tooltip, information about something. This is some more info."
      >
        <span className="text-base text-toolbox-neutral underline">Tooltip left side</span>
      </Tooltip>
      <Tooltip
        tooltip={
          <div className="flex space-x-2 items-center">
            <Avatar
              link="https://i.pravatar.cc/150?u=47110"
              alt="Nora"
              size="m"
            />
            <span className="text-xs text-toolbox-neutral flex-1">
              Text label for tooltip, information about something. This is some more info.
            </span>
          </div>
        }
      >
        <span className="text-base text-toolbox-neutral underline">Tooltip right side</span>
      </Tooltip>
      <Tooltip
        side="bottom"
        tooltip={
          <div className="flex space-x-2 items-center">
            <Avatar
              link="https://i.pravatar.cc/150?u=47110"
              alt="Nora"
              size="m"
            />
            <span className="text-xs text-toolbox-neutral flex-1">
              Text label for tooltip, information about something. This is some more info.
            </span>
          </div>
        }
      >
        <span className="text-base text-toolbox-neutral underline">Tooltip bottom side</span>
      </Tooltip>
      <Tooltip
        side="top"
        tooltip="Small one here"
      >
        <span className="text-base text-toolbox-neutral underline">Tooltip top side</span>
      </Tooltip>
    </div>
  ),
  /** Since it is hidden by default */
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};

export function Default() {
  return (
    <Container>
      <span className="text-base text-toolbox-neutral underline">Tooltip here</span>
      <Display tooltip="Text label for tooltip, information about something. This is some more info." />
    </Container>
  );
}

export function DifferentSides() {
  return (
    <div className="grid grid-cols-2 gap-16 m-32">
      <Container>
        <span className="text-base text-toolbox-neutral underline">Tooltip left side</span>
        <Display
          side="left"
          tooltip="Text label for tooltip, information about something. This is some more info."
        />
      </Container>
      <Container>
        <span className="text-base text-toolbox-neutral underline">Tooltip top side</span>
        <Display
          side="top"
          tooltip="Text label for tooltip, information about something. This is some more info."
        />
      </Container>
      <Container>
        <span className="text-base text-toolbox-neutral underline">Tooltip bottom side</span>
        <Display
          side="bottom"
          tooltip="Text label for tooltip, information about something. This is some more info."
        />
      </Container>
      <Container>
        <span className="text-base text-toolbox-neutral underline">Tooltip right side</span>
        <Display
          side="right"
          tooltip="Text label for tooltip, information about something. This is some more info."
        />
      </Container>
    </div>
  );
}

export function DifferentVariants() {
  return (
    <div className="grid grid-cols-2 gap-16 m-32">
      <Container>
        <span className="text-base text-toolbox-neutral underline">Tooltip top side left</span>
        <Display
          side="top|left"
          tooltip="Text label for tooltip, information about something. This is some more info."
        />
      </Container>
      <Container>
        <span className="text-base text-toolbox-neutral underline">Tooltip top side right</span>
        <Display
          side="top|right"
          tooltip="Text label for tooltip, information about something. This is some more info."
        />
      </Container>
      <Container>
        <span className="text-base text-toolbox-neutral underline">Tooltip bottom side left</span>
        <Display
          side="bottom|left"
          tooltip="Text label for tooltip, information about something. This is some more info."
        />
      </Container>
      <Container>
        <span className="text-base text-toolbox-neutral underline">Tooltip bottom side right</span>
        <Display
          side="bottom|right"
          tooltip="Text label for tooltip, information about something. This is some more info."
        />
      </Container>
    </div>
  );
}

export function CustomContent() {
  return (
    <Container>
      <span className="text-base text-toolbox-neutral underline">Tooltip here</span>
      <Display
        tooltip={
          <div className="flex space-x-2 items-center">
            <Avatar
              link="https://i.pravatar.cc/150?u=47110"
              alt="Nora"
              size="m"
            />
            <span className="text-xs flex-1">
              Text label for tooltip, information about something. This is some more info.
            </span>
          </div>
        }
      />
    </Container>
  );
}
