import React, { useState } from 'react';
import RadioButton from './Radio';

export default {
  title: 'Toolbox/Button/Radio',
  component: RadioButton,
};

export const Default = {
  render: () => <RadioButton />,
};

export const Checked = {
  render: () => <RadioButton checked />,
};

export const Disabled = {
  render: () => (
    <div className="flex space-x-4">
      <RadioButton disabled />
      <RadioButton
        disabled
        checked
      />
    </div>
  ),
};

export function WithAction() {
  const [check, set] = useState(false);

  return (
    <RadioButton
      checked={check}
      onClick={(newState) => set(newState)}
    />
  );
}
