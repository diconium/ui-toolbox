import React, { useState } from 'react';
import Chip from './Chip';

export default {
  title: 'Toolbox/Chip',
  component: Chip,
};

export function Default() {
  return <Chip label="Ingolstadt" />;
}

export function Selected() {
  return (
    <Chip
      selected
      label="Munich"
    />
  );
}

export function Disabled() {
  return (
    <Chip
      disabled
      label="Munich"
    />
  );
}

export function WithAction() {
  const [selected, set] = useState(false);

  return (
    <Chip
      label="Stuttgart"
      selected={selected}
      onClick={() => set(!selected)}
    />
  );
}
