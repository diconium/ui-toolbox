import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SideNavigation as IMPORT } from '../../index';
import SideNavigation from './SideNavigation';

describe('SideNavigation component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(SideNavigation).toBeDefined();
    expect(IMPORT).toEqual(SideNavigation);
  });

  test('can render the default component correctly', () => {
    render(
      <SideNavigation
        top={<span>test-top</span>}
        bottom={<span>test-bottom</span>}
      >
        test-center
      </SideNavigation>,
    );
    expect(screen.getByText(/test-top/i)).toBeInTheDocument();
    expect(screen.getByText(/test-center/i)).toBeInTheDocument();
    expect(screen.getByText(/test-bottom/i)).toBeInTheDocument();
  });

  test('can render the closed component correctly', () => {
    render(
      <SideNavigation
        top={<span>test-top</span>}
        bottom={<span>test-bottom</span>}
        opened={false}
      >
        test-center
      </SideNavigation>,
    );
    expect(screen.getByText(/test-top/i)).toBeInTheDocument();
    expect(screen.getByText(/test-center/i)).toBeInTheDocument();
    expect(screen.getByText(/test-bottom/i)).toBeInTheDocument();
  });

  test('calls onToggle correctly when clicked (opened initially)', async () => {
    const user = userEvent.setup();
    const onToggle = jest.fn();
    const { container } = render(
      <SideNavigation
        opened
        top={<span>test-top</span>}
        bottom={<span>test-bottom</span>}
        onToggle={onToggle}
      >
        test-center
      </SideNavigation>,
    );
    const item = container.querySelector('button');

    await act(() => item && user.click(item));

    expect(onToggle).toHaveBeenCalled();
    expect(onToggle).toHaveBeenCalledWith(false);
  });

  test('calls onToggle correctly when clicked (closed initially)', async () => {
    const user = userEvent.setup();
    const onToggle = jest.fn();
    const { container } = render(
      <SideNavigation
        opened={false}
        top={<span>test-top</span>}
        bottom={<span>test-bottom</span>}
        onToggle={onToggle}
      >
        test-center
      </SideNavigation>,
    );
    const item = container.querySelector('button');

    await act(() => item && user.click(item));

    expect(onToggle).toHaveBeenCalled();
    expect(onToggle).toHaveBeenCalledWith(true);
  });
});
