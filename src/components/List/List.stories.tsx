import React from 'react';
import Avatar from '../Avatar';
import Dot from '../Dot';
import ListItem from '../ListItem';
import State from '../State';
import List from './List';

export default {
  title: 'Toolbox/List/List',
  component: List,

  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },
};

export function Default() {
  return (
    <List>
      <ListItem
        title="Text label"
        textAlignment="center"
      />
      <ListItem
        title="Text label"
        subtitle="Text label"
        lower={<Dot size="lg" />}
      />
      <ListItem title="Text label">
        <div>
          <div className="text-toolbox-neutral leading-5 text-sm">Bluetooth Connection Test</div>
          <p className="text-toolbox-neutral-500 leading-5 text-sm">
            In the context of software or firmware or hardware engineering, a test bench is an
            environment in which the product under development is tested with the aid of software
            and hardware tools.
          </p>
        </div>
      </ListItem>
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
            environment in which the product under development is tested with the aid of software
            and hardware tools.
          </p>
        </div>
      </ListItem>
      <ListItem
        title="Text label"
        subtitle="No info, but with avatar"
        upper={
          <Avatar
            link="https://i.pravatar.cc/150?u=47110"
            alt="Nora"
            size="m"
          />
        }
      />
      <ListItem
        title="Selected"
        textAlignment="center"
        selected
      />
      <ListItem
        title="Title and Avatar"
        subtitle="only right side, no right bottom"
        upper={
          <Avatar
            link="https://i.pravatar.cc/150?u=47110"
            alt="Nora"
            size="xl"
          />
        }
      />
      <ListItem
        title="No subtitle, no content"
        upper={<State label="Label text" />}
        lower={
          <Avatar
            link="https://i.pravatar.cc/150?u=47110"
            alt="Nora"
            size="m"
          />
        }
      />
      <ListItem
        title="Text label"
        subtitle="Text label"
      >
        <div>
          <div className="text-toolbox-neutral leading-5 text-sm">Bluetooth Connection Test</div>
          <p className="text-toolbox-neutral-500 leading-5 text-sm">
            In the context of software or firmware or hardware engineering, a test bench is an
            environment in which the product under development is tested with the aid of software
            and hardware tools.
          </p>
        </div>
      </ListItem>
    </List>
  );
}
