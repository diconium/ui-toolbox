import React from 'react';
import Form from './Form';
import Button from '../Button';
import TextField from '../TextField';

export default {
  title: 'Toolbox/Form',
  component: Form,
};

export function Default() {
  return (
    <Form onSubmit={() => {}}>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export function WithInput() {
  return (
    <Form onSubmit={() => {}}>
      <div className="w-full">
        <TextField
          label="Sample label"
          placeholder="Placeholder text"
        />
    </div>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

