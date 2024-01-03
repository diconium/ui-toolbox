import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { Form as IMPORT, PrimaryButton, TextField } from '../../index';
import Form from './Form';

describe('Form component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Form).toBeDefined();
    expect(IMPORT).toEqual(Form);
  });

  test('can render the default component correctly', () => {
    render(
      <Form onSubmit={() => {}}>
        <button type="submit">Submit</button>
      </Form>,
    );
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('cand render Form and submits correctly', () => {
    const onSubmit = jest.fn(); // mock function for form submission
    const { getByText } = render(
      <Form onSubmit={onSubmit}>
        <PrimaryButton
          label="Submit"
          type="submit"
        />
      </Form>,
    );

    fireEvent.click(getByText('Submit'));

    expect(onSubmit).toHaveBeenCalled();
  });

  test('submit form on pressing Enter key', () => {
    const onSubmit = jest.fn();
    render(
      <Form onSubmit={onSubmit}>
        <TextField
          type="text"
          placeholder={''}
        />
        <PrimaryButton
          label="Submit"
          type="submit"
        />
      </Form>,
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.focus(inputElement);
    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(onSubmit).toHaveBeenCalled();
  });
});
