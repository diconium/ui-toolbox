import React, { useState } from 'react';
import TextField from './TextField';

export default {
  title: 'Toolbox/TextField',
  component: TextField,
};

export function Default() {
  return (
    <div className="flex flex-col space-y-4 w-[320px]">
      <TextField placeholder="Placeholder text" />
      <TextField
        value="with text"
        placeholder="Placeholder text"
      />
    </div>
  );
}

export const Focused = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[320px]">
      <TextField placeholder="Placeholder text" />
      <TextField
        value="with text"
        placeholder="Placeholder text"
      />
    </div>
  ),
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};

export function WithValue() {
  return (
    <TextField
      value="Lorem Ipsum"
      placeholder="Placeholder text"
    />
  );
}

export function Type() {
  const [value, set] = useState<string>();

  return (
    <div className="flex flex-col space-y-4 w-[320px]">
      <TextField
        type="password"
        label="Password"
        placeholder="Minimum 8 characters"
        value={value}
        onChange={(text) => set(text)}
      />
      <TextField
        type="password"
        label="Password"
        placeholder="Minimum 8 characters"
        value="lorem ipsum"
      />
    </div>
  );
}

export function WithLabel() {
  return (
    <div className="w-[320px]">
        <TextField
          label="Lorem Ipsum"
          placeholder="Placeholder text"
        />
    </div>
  );
}

export function WithHint() {
  return (
    <div className="w-[320px]">
        <TextField
          label="Lorem Ipsum"
          placeholder="Placeholder text"
          hint="lorem ipsum"
        />
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex flex-col space-y-4 w-[320px]">
      <TextField
        disabled
        label="Lorem Ipsum"
        placeholder="Placeholder text"
      />
      <TextField
        disabled
        label="Lorem Ipsum"
        placeholder="Placeholder text"
        hint="lorem ipsum"
      />
      <TextField
        disabled
        value="Disabled but with input"
        label="Lorem Ipsum"
        placeholder="Placeholder text"
      />
    </div>
  );
}

export function Validation() {
  return (
    <div className="flex flex-col space-y-4 w-[320px]">
      <TextField
        validation="valid"
        placeholder="Placeholder text"
        value="Some valid input"
      />
      <TextField
        type="password"
        validation="valid"
        placeholder="Placeholder text"
        value="Some valid input"
      />
      <TextField
        validation="warning"
        placeholder="Placeholder text"
        value="Warning about input"
        hint="Your input should include at least 3 numbers."
      />
      <TextField
        type="password"
        validation="warning"
        placeholder="Placeholder text"
        value="Warning about input"
        hint="Your input should include at least 3 numbers."
      />
      <TextField
        validation="error"
        placeholder="Placeholder text"
        value="Error about input"
        hint="Your input must include at least 1 number"
      />
      <TextField
        type="password"
        validation="error"
        placeholder="Placeholder text"
        value="Error about input"
        hint="Your input must include at least 1 number"
      />
    </div>
  );
}

export function WithAction() {
  const [value, set] = useState<string>();

  return (
    <div className="w-[320px]">
        <TextField
          label="Lorem Ipsum"
          placeholder="Placeholder text"
          value={value}
          onChange={(text) => set(text)}
        />
    </div>
  );
}

export function WithOnEnterAction() {
  const [value, set] = useState<string>();

  return (
    <div className="w-[320px]">
        <TextField
          label={value || 'Lorem ipsum'}
          placeholder="Press enter and see"
          onEnter={() => set('Enter pressed')}
        />
    </div>
  );
}

export function WithClearButton() {
  const [value, set] = useState('Press clear button to clear');

  return (
    <div className="w-[320px]">
        <TextField
          isClearable
          label="Lorem Ipsum"
          placeholder="Placeholder"
          value={value}
          onChange={set}
        />
    </div>
  );
}
