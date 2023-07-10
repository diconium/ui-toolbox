import React from 'react';
import { render, screen } from '@testing-library/react';
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
        closed
      >
        test-center
      </SideNavigation>
    );
    expect(screen.getByText(/test-top/i)).toBeInTheDocument();
    expect(screen.getByText(/test-center/i)).toBeInTheDocument();
    expect(screen.getByText(/test-bottom/i)).toBeInTheDocument();
  });
});