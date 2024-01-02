import React from 'react';
// import { jest } from '@jest/globals';
import { screen, render, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import { Form as IMPORT, PrimaryButton } from '../../index';
import Form from './Form';

describe('Form component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Form).toBeDefined();
    expect(IMPORT).toEqual(Form);
  });

  test('can render the default component correctly', () => {
    render(<Form onSubmit={() => {}}>
      <button type="submit">
        Submit
      </button>
    </Form>);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('cand render Form and submits correctly', () => {
    const onSubmit = jest.fn(); // mock function for form submission
    const { getByText } = render(
      <Form onSubmit={onSubmit}>
        <button type="submit">Submit</button>
      </Form>
    );
  
    fireEvent.click(getByText('Submit')); // simulate button click
  
    expect(onSubmit).toHaveBeenCalled(); // check if onSubmit function has been called
  });
});
