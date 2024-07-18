import React, { useState } from 'react';
import ToggleButton from './Toggle';

export default {
  title: 'Toolbox/Button/Toggle',
  component: ToggleButton,
};

export const Default = {
  render: () => <ToggleButton />,
};

export const WithTitle = {
  render: () => <ToggleButton title="Some action" />,
};

export const Toggled = {
  render: () => <ToggleButton toggled />,
};

export const Disabled = {
  render: () => (
    <div className="flex space-x-4">
      <ToggleButton
        toggled
        disabled
      />
      <ToggleButton disabled />
    </div>
  ),
};

export function WithAction() {
  const [toggle, set] = useState(false);

  return (
    <ToggleButton
      toggled={toggle}
      onClick={(newState) => set(newState)}
    />
  );
}
