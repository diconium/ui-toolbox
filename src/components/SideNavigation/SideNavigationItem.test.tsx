import React from 'react';
import { screen, render } from '@testing-library/react';
import { SideNavigationItem as IMPORT } from '../../index';
import SideNavigationItem from './SideNavigationItem';

describe('SideNavigationItem component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(SideNavigationItem).toBeDefined();
    expect(IMPORT).toEqual(SideNavigationItem);
  });

  test('can render the default component correctly', () => {
    render(<SideNavigationItem label="test-label" />);
    expect(screen.getByText(/test-label/i)).toBeInTheDocument();
  });
});
