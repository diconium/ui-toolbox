import React, { useState } from 'react';
import Select, { OptionType } from './Select';

export default {
  title: 'Toolbox/Select',
  component: Select,
};

const options = [
  {
    id: 1,
    label: 'Text label 1',
  },
  {
    id: 2,
    label: 'Text label 2',
  },
  {
    id: 3,
    label: 'Text label 3',
  },
  {
    id: 4,
    label: 'Text label 4',
  },
  {
    id: 5,
    label: 'Text label 5',
  },
];

export function Default() {
  const [selectedDefault, selectDefault] = useState<OptionType>();

  return (
    <Select
      selected={selectedDefault}
      placeholder="Select one option please"
      options={options}
      onSelect={(selected) => selectDefault(selected)}
    />
  );
}

export function Opened() {
  const [selectedOpened, selectOpened] = useState<OptionType>();

  return (
    <Select
      opened
      selected={selectedOpened}
      placeholder="Select one option please"
      options={options}
      onSelect={(selected) => selectOpened(selected)}
    />
  );
}

export function OpenedAndSelected() {
  const [selectedOpenedAndSelected, selectOpenedAndSelected] = useState<OptionType>(options[1]);

  return (
    <Select
      opened
      selected={selectedOpenedAndSelected}
      placeholder="Select one option please"
      options={options}
      onSelect={(selected) => selectOpenedAndSelected(selected)}
    />
  );
}
