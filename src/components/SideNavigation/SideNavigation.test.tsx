import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { SideNavigation as IMPORT } from '../../index';
import SideNavigation from './SideNavigation';
import userEvent from '@testing-library/user-event';

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
      </SideNavigation>
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
      </SideNavigation>
    );
    expect(screen.getByText(/test-top/i)).toBeInTheDocument();
    expect(screen.getByText(/test-center/i)).toBeInTheDocument();
    expect(screen.getByText(/test-bottom/i)).toBeInTheDocument();
  });

  test('closes correctly when already opened and clicked', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    const { container } = render(
      <SideNavigation
        opened={true}
        top={<span>test-top</span>}
        bottom={<span>test-bottom</span>}
        onOpen={onClose}
        onClose={onClose}
      >
        test-center
      </SideNavigation>
    );
    expect(onClose).not.toHaveBeenCalled();

    const item = container.querySelector('button');
    if (item) {
      await act(() => user.click(item));
    }
    expect(onClose).toHaveBeenCalled();
  });

  test('expands correctly when clicked', async () => {
    const user = userEvent.setup();
    const onOpen = jest.fn();
    const { container } = render(
      <SideNavigation
        opened={false}
        top={<span>test-top</span>}
        bottom={<span>test-bottom</span>}
        onOpen={onOpen}
        onClose={onOpen}
      >
        test-center
      </SideNavigation>
    );
    expect(onOpen).not.toHaveBeenCalled();
    const item = container.querySelector('button');
    if (item) {
      await act(() => user.click(item));
    }
    expect(onOpen).toHaveBeenCalled();
  });
});
