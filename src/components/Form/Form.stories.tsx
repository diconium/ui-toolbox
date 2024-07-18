import React, { useState } from 'react';
import Form from './Form';
import TextField from '../TextField';
import Checkbox from '../Checkbox';
import PrimaryButton from '../Button/Primary';
import RadioButton from '../Button/Radio';

export default {
  title: 'Toolbox/Form',
  component: Form,
};

export function Default() {
  return (
    <Form onSubmit={() => {}}>
      <PrimaryButton
        label="Submit"
        type="submit"
      />
    </Form>
  );
}

export function WithClass() {
  return (
    <Form
      onSubmit={() => {}}
      className="bg-toolbox-secondary"
    >
      <PrimaryButton
        label="Submit"
        type="submit"
      />
    </Form>
  );
}

export function WithInput() {
  const [check, set] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <Form onSubmit={() => {}}>
      <div className="w-full">
        <TextField
          label="Text input"
          placeholder="Placeholder text"
        />
        <div className="flex items-center space-x-2 mt-2">
          <span className="mr-2">Checkbox Selection:</span>
          <Checkbox
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <span className="mr-2">Radio Selection:</span>
          <RadioButton
            checked={check}
            onClick={(newState) => set(newState)}
          />{' '}
        </div>
      </div>
      <PrimaryButton
        label="Submit"
        type="submit"
      />
    </Form>
  );
}
