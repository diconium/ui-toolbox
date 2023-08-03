import React, { useState } from 'react';
import Tab from './Tab';
import Tabs from './Tabs';

export default {
  title: 'Toolbox/Tabs',
  component: Tabs,
};

const tabs = [
  {
    label: 'All',
    icon: 'menu',
  },
  {
    label: 'New',
    icon: 'tag',
  },
  {
    label: 'Read',
    icon: 'book',
  },
  {
    label: 'Loader',
    icon: 'refresh-ccw-alt-3',
  },
];
export function Default() {
  const [selected, select] = useState(0);

  return (
    <Tabs
      selected={selected}
      onSelect={(index) => select(index)}
      tabs={tabs}
    />
  );
}

export function AsBlockComponent() {
  const [selected, select] = useState(0);

  return (
    <Tabs>
      <Tab
        onClick={() => select(0)}
        selected={selected === 0}
        label="All"
        icon="menu"
      />
      <Tab
        onClick={() => select(1)}
        selected={selected === 1}
        label="New"
        icon="tag"
      />
      <Tab
        onClick={() => select(2)}
        selected={selected === 2}
        label="Read"
        icon="check"
      />
      <Tab
        onClick={() => select(3)}
        selected={selected === 3}
        label="Loader"
        icon="rotate-exclamation"
      />
    </Tabs>
  );
}

export function WithShadow() {
  const [selected, select] = useState(0);

  return (
    <Tabs
      shadow
      selected={selected}
      onSelect={(index) => select(index)}
      tabs={tabs}
    />
  );
}

export function VerticalScroll() {
  const [selected, select] = useState(0);

  return (
    <Tabs
      selected={selected}
      onSelect={(index) => select(index)}
      tabs={[
        {
          label: 'All',
          icon: 'menu',
        },
        {
          label: 'New',
          icon: 'tag',
        },
        {
          label: 'Read',
          icon: 'book',
        },
        {
          label: 'Tab N',
          icon: 'refresh-ccw-alt-3',
        },
        {
          label: 'Tab N + 1',
          icon: 'book',
        },
        {
          label: 'Tab N + 2',
          icon: 'bug',
        },
        {
          label: 'Tab N + 3',
          icon: 'clone',
        },
        {
          label: 'Tab N + 4',
          icon: 'eye',
        },
        {
          label: 'Tab N + 5',
          icon: 'heart',
        },
      ]}
    />
  );
}
