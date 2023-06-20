import {
  act,
  render,
  screen,
} from '@testing-library/react';
import React from 'react';

import { ResponsiveLayout as IMPORT } from '../../../index';
import Responsive from './Responsive';

describe('Responsive component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Responsive).toBeDefined();
    expect(IMPORT).toEqual(Responsive);
  });

  test('can render the default component correctly', () => {
    render(<Responsive action={<div>action</div>} />);
    expect(screen.getByText(/action/i)).toBeInTheDocument();
  });

  test('can render resizing correctly', () => {
    global.innerWidth = 500;
    render(
      <Responsive
        header={<div>header</div>}
        footer={<div>footer</div>}
        sidenav={<div>sidenav</div>}
        action={<div>action</div>}
        breakpoint={750}
      />
    );
    expect(screen.getByText(/header/i)).toBeInTheDocument();
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
    act(() => {
      global.innerWidth = 1200;
      global.dispatchEvent(new Event('resize'));
    });
    expect(
      screen.getByText(/sidenav/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/action/i)).toBeInTheDocument();
  });
});
