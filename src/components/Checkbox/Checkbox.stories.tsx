import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Toolbox/Checkbox',
  component: Checkbox,
};

export function Default() {
  return <Checkbox />;
}

export function Checked() {
  return <Checkbox checked />;
}

export function Disabled() {
  return (
    <div className="flex space-x-4">
      <Checkbox disabled />
      <Checkbox
        disabled
        checked
      />
    </div>
  );
}

export function WithAction() {
  const [checked, set] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onClick={() => set(!checked)}
    />
  );
}
