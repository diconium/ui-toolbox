import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tabs as IMPORT } from '../../index';
import Tabs, { Template } from './Tabs';

const FIXTURE = [
  { label: 'All', icon: 'menu' },
  { label: 'New', icon: 'engine-warning' },
  { label: 'Read', icon: 'check' },
];

describe('Tabs component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Tabs).toBeDefined();
    expect(IMPORT).toEqual(Tabs);
  });

  test('can render the default component correctly', () => {
    render(<Tabs tabs={FIXTURE} />);
    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/New/i)).toBeInTheDocument();
    expect(screen.getByText(/Read/i)).toBeInTheDocument();
  });

  test('can render the component with a shadow-sm correctly', () => {
    const { container } = render(
      <Tabs
        shadow
        tabs={FIXTURE}
      />
    );
    expect(container.firstChild).toHaveClass('shadow-md');
  });

  test('can render the component with a shadow-sm as a block correctly', () => {
    const { container } = render(
      <Tabs shadow>
        <span>foo</span>
        <span>bar</span>
      </Tabs>
    );
    expect(container.firstChild).toHaveClass('shadow-md');
  });

  test('can render the component as a block correctly', () => {
    render(
      <Tabs>
        <span>foo</span>
        <span>bar</span>
      </Tabs>
    );
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });

  test('can render component with selected correctly', () => {
    render(
      <Tabs
        tabs={FIXTURE}
        selected={1}
      />
    );
    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/New/i)).toHaveClass('text-toolbox-primary font-semibold');
  });

  test('can handle onSelect calls correctly', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Tabs
        tabs={FIXTURE}
        onSelect={func}
      />
    );

    const button = await screen.getByText(/New/i);
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.calls[0]).toStrictEqual([1]);
  });

  test('can render the template correctly', () => {
    const { container } = render(
      <Template>
        <span>foo</span>
        <span>bar</span>
      </Template>
    );
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    expect(container.firstChild).not.toHaveClass('shadow-md');
  });

  test('can render the template with shadow-sm correctly', () => {
    const { container } = render(
      <Template shadow>
        <span>foo</span>
        <span>bar</span>
      </Template>
    );
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('shadow-md');
  });
});
