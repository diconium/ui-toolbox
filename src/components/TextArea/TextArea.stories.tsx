import React, { useState } from 'react';
import TextArea from './TextArea';

export default {
  title: 'Toolbox/TextArea',
  component: TextArea,
};

export function Default() {
  return (
    <div className="flex flex-col space-y-4">
      <TextArea placeholder="Placeholder text here" />
      <TextArea
        placeholder="Placeholder text here"
        value="With text"
      />
    </div>
  );
}

export function Label() {
  return (
    <div className="flex flex-col space-y-4">
      <TextArea
        label="With label"
        placeholder="Placeholder text here"
      />
      <TextArea
        label="With label"
        placeholder="Placeholder text here"
        value="With text"
      />
    </div>
  );
}

export function Hint() {
  return (
    <div className="flex flex-col space-y-4">
      <TextArea
        label="With label"
        hint="Your hint"
        placeholder="Placeholder text here"
      />
      <TextArea
        label="With label"
        hint="Your hint"
        placeholder="Placeholder text here"
        value="With text"
      />
    </div>
  );
}

export function DifferentRows() {
  return (
    <TextArea
      rows={10}
      placeholder="Placeholder text here"
      value="With text"
    />
  );
}

export const Focused = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <TextArea
        label="With label"
        disabled
        placeholder="Placeholder text here"
      />
      <TextArea
        label="With label"
        disabled
        placeholder="Placeholder text here"
        value="With text"
      />
    </div>
  ),
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};

export function WithAction() {
  const [value, set] = useState<string>();
  return (
    <TextArea
      placeholder="Placeholder text"
      value={value}
      onChange={(text) => set(text)}
    />
  );
}

export function Disabled() {
  return (
    <div className="flex flex-col space-y-4">
      <TextArea
        disabled
        placeholder="Placeholder text here"
      />
      <TextArea
        disabled
        placeholder="Placeholder text here"
        value="With text"
      />
    </div>
  );
}
