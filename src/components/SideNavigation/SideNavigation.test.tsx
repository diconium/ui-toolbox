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
    render(<SideNavigation header={[{ label: 'test-header' }]} center={[{ label: 'test-center' }]} footer={[{ label: 'test-footer' }]} />);
    expect(screen.getByText(/test-header/i)).toBeInTheDocument();
    expect(screen.getByText(/test-center/i)).toBeInTheDocument();
    expect(screen.getByText(/test-footer/i)).toBeInTheDocument();
  });

  test('can render the closed component correctly', () => {
    render(<SideNavigation header={[{ label: 'test-header' }]} center={[{ label: 'test-center' }]} footer={[{ label: 'test-footer' }]} opened={false} />);
    expect(screen.getByText(/test-header/i)).toBeInTheDocument();
    expect(screen.getByText(/test-center/i)).toBeInTheDocument();
    expect(screen.getByText(/test-footer/i)).toBeInTheDocument();
  });
});
