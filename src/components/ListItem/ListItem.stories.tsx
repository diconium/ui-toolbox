import React, { useState } from 'react';
import Avatar from '../Avatar';
import State from '../State';
import ListItem from './ListItem';

export default {
  title: 'Toolbox/List/ListItem',
  component: ListItem,

  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },
};

export function Default() {
  return <ListItem title="Text label" />;
}

export function WithSubtitle() {
  return (
    <ListItem
      title="Text label"
      subtitle="Text label"
    />
  );
}

export function CenteredText() {
  return (
    <ListItem
      textAlignment="center"
      title="Text label"
      subtitle="Text label"
    />
  );
}

export function Selected() {
  return (
    <ListItem
      textAlignment="center"
      title="Text label"
      selected
    />
  );
}

export function UpperSlotOnly() {
  return (
    <ListItem
      title="Title and Avatar"
      subtitle="Text label"
      upper={
        <Avatar
          link="https://i.pravatar.cc/150?u=47110"
          alt="Nora"
          size="xl"
        />
      }
    />
  );
}

export function WithExtendedInfo() {
  const [opened, set] = useState(true);

  return (
    <ListItem
      opened={opened}
      onToggle={(state) => set(state)}
      title="Text label"
      subtitle="Text label"
    >
      <div>
        <div className="text-toolbox-neutral leading-5 text-sm">Bluetooth Connection Test</div>
        <p className="text-toolbox-neutral-500 leading-5 text-sm">
          In the context of software or firmware or hardware engineering, a test bench is an
          environment in which the product under development is tested with the aid of software and
          hardware tools.
        </p>
      </div>
    </ListItem>
  );
}

export function WithUpperSideAndExtended() {
  return (
    <ListItem
      opened
      title="Text label"
      upper={
        <State
          label="Not at desk"
          color="bg-toolbox-feedback-orange"
        />
      }
    >
      <div>
        <div className="text-toolbox-neutral leading-5 text-sm">Bluetooth Connection Test</div>
        <p className="text-toolbox-neutral-500 leading-5 text-sm">
          In the context of software or firmware or hardware engineering, a test bench is an
          environment in which the product under development is tested with the aid of software and
          hardware tools.
        </p>
      </div>
    </ListItem>
  );
}

export function Full() {
  return (
    <ListItem
      opened
      title="Text label"
      subtitle="Text label"
      upper={
        <State
          label="Label text"
          color="bg-toolbox-feedback-red"
        />
      }
      lower={
        <Avatar
          border="border-toolbox-feedback-red"
          link="https://i.pravatar.cc/150?u=47110"
          alt="Nora"
          size="m"
        />
      }
    >
      <div>
        <div className="text-toolbox-neutral leading-5 text-sm">Bluetooth Connection Test</div>
        <p className="text-toolbox-neutral-500 leading-5 text-sm">
          In the context of software or firmware or hardware engineering, a test bench is an
          environment in which the product under development is tested with the aid of software and
          hardware tools.
        </p>
      </div>
    </ListItem>
  );
}

export function FullNoOpen() {
  return (
    <ListItem
      opened
      title="Text label"
      subtitle="Text label"
      upper={
        <State
          label="Label text"
          color="bg-toolbox-feedback-red"
        />
      }
      lower={
        <Avatar
          border="border-toolbox-feedback-red"
          link="https://i.pravatar.cc/150?u=47110"
          alt="Nora"
          size="m"
        />
      }
    />
  );
}

export function WithoutBorder() {
  return (
    <ListItem
      opened
      title="Text title"
      subtitle="Text subtitle"
      className="border-none"
    >
      <div>
        <div className="text-toolbox-neutral leading-5 text-sm">Bluetooth Connection Test</div>
        <p className="text-toolbox-neutral-500 leading-5 text-sm">
          In the context of software or firmware or hardware engineering, a test bench is an
          environment in which the product under development is tested with the aid of software and
          hardware tools.
        </p>
      </div>
    </ListItem>
  );
}

export function WithTemplate() {
  return (
    <ListItem
      title="Text label"
      baseTemplate="bg-toolbox-primary px-6 py-4 border w-full"
    />
  );
}
