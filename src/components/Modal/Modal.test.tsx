import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from './Modal';

describe('Modal component', () => {
  test('can render the default component correctly', () => {
    render(<Modal title="foo" />);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/OK/i)).toBeInTheDocument();
    expect(screen.getByText(/CANCEL/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(3);
  });

  test('can render the children components correctly', () => {
    render(
      <Modal title="foo">
        <span>bar</span>
        <span>bar</span>
        <span>bar</span>
      </Modal>
    );
    expect(screen.getAllByText('bar').length).toBe(3);
  });

  test('can render the simple children (just text) correctly', () => {
    render(<Modal title="foo">Simple text</Modal>);
    const tag = screen.getByText('Simple text');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('text-toolbox-neutral leading-5 text-base');
  });

  test('can render the component with custom action titles correctly', () => {
    render(<Modal title="foo" acknowledgement="bar" dismissal="baz" />);
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    expect(screen.getByText(/baz/i)).toBeInTheDocument();
  });

  test('calls the onAcknowledge function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Modal title="Foo" onAcknowledge={func} />);
    const button = await screen.getByText('OK');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('calls the onDismiss function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Modal title="Foo" onDismiss={func} />);
    const button = await screen.getByText('CANCEL');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });

  test('calls the onDismiss function correctly when clicking on the close button', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(<Modal title="Foo" onDismiss={func} />);
    const button = await screen.getAllByRole('button')[0];
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });
});
