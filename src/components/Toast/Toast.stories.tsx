import React, { useState } from 'react';
import Toast from './Toast';

export default {
  title: 'Toolbox/Toast',
  component: Toast,
};

export function Default() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Toast
        label="Text Label"
        type="success"
      />
      <Toast
        label="Text Label"
        type="warning"
      />
      <Toast
        label="Text Label"
        type="error"
      />
      <Toast
        label="Text Label"
        type="info"
      />
      <Toast
        filled
        label="Text Label"
        type="success"
      />
      <Toast
        filled
        label="Text Label"
        type="warning"
      />
      <Toast
        filled
        label="Text Label"
        type="error"
      />
      <Toast
        filled
        label="Text Label"
        type="info"
      />
    </div>
  );
}

export function Subtitle() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Toast
        label="Text Label"
        subtitle="Text Label"
      />
      <Toast
        filled
        label="Text Label"
        subtitle="Text Label"
      />
    </div>
  );
}

export function WithIcon() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Toast
        icon
        label="Text Label"
        type="success"
      />
      <Toast
        icon
        label="Text Label"
        type="warning"
      />
      <Toast
        icon
        label="Text Label"
        type="error"
      />
      <Toast
        icon
        label="Text Label"
        type="info"
      />
      <Toast
        icon
        filled
        label="Text Label"
        type="success"
      />
      <Toast
        icon
        filled
        label="Text Label"
        type="warning"
      />
      <Toast
        icon
        filled
        label="Text Label"
        type="error"
      />
      <Toast
        icon
        filled
        label="Text Label"
        type="info"
      />
    </div>
  );
}

export function Full() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Toast
        icon
        label="Text Label"
        subtitle="Text Label"
        type="success"
      />
      <Toast
        icon
        label="Text Label"
        subtitle="Text Label"
        type="warning"
      />
      <Toast
        icon
        label="Text Label"
        subtitle="Text Label"
        type="error"
      />
      <Toast
        icon
        label="Text Label"
        subtitle="Text Label"
        type="info"
      />
      <Toast
        icon
        filled
        label="Text Label"
        subtitle="Text Label"
        type="success"
      />
      <Toast
        icon
        filled
        label="Text Label"
        subtitle="Text Label"
        type="warning"
      />
      <Toast
        icon
        filled
        label="Text Label"
        subtitle="Text Label"
        type="error"
      />
      <Toast
        icon
        filled
        label="Text Label"
        subtitle="Text Label"
        type="info"
      />
    </div>
  );
}

export function WithAction() {
  const [counter, set] = useState(0);

  return (
    <Toast
      icon
      label="With action"
      subtitle={!counter ? 'Press the X' : `onClose called: ${counter}`}
      onClose={() => set(counter + 1)}
    />
  );
}
