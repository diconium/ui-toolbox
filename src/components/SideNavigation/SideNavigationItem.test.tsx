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
    const icon = { icon: 'message-circle', size: 'lg' };
    render(
      <SideNavigationItem label="test-label" icon={icon} />
    );
    expect(
      screen.getByText(/test-label/i)
    ).toBeInTheDocument();
  });

  test('can render the component with avatar correctly', () => {
    const avatar = {
      link: 'https://i.pravatar.cc/151?u=08188',
      alt: 'test-alt',
    };
    render(
      <SideNavigationItem
        label="test-label"
        avatar={avatar}
      />
    );
    expect(
      screen.getByAltText(/test-alt/i)
    ).toBeInTheDocument();
  });

  test('can render the component with icon and badge correctly', () => {
    const icon = { icon: 'message-circle', size: 'md' };
    const { container } = render(
      <SideNavigationItem
        label="test-label"
        icon={icon}
        badge={42}
      />
    );
    expect(screen.getByText(/42/i)).toBeInTheDocument();
    expect(
      container.querySelector('span')
    ).toBeInTheDocument();
  });
});
