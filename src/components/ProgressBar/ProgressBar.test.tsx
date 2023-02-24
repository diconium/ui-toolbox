import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  test('can render the default component correctly', () => {
    const { container } = render(<ProgressBar />);
    expect(container.firstChild).toHaveClass('h-1 bg-toolbox-neutral-200');
    expect(container.firstChild?.firstChild).toHaveStyle({ width: '0%' });
  });

  test('can render the progress correctly', () => {
    const { container } = render(<ProgressBar progress={67} />);
    expect(container.firstChild?.firstChild).toHaveStyle({ width: '67%' });
  });

  test('can normalize the progress correctly', () => {
    const { container } = render(<ProgressBar progress={33.59} />);
    expect(container.firstChild?.firstChild).toHaveStyle({ width: '34%' });
  });

  test('can normalize the progress correctly (max)', () => {
    const { container } = render(<ProgressBar progress={113} />);
    expect(container.firstChild?.firstChild).toHaveStyle({ width: '100%' });
  });

  test('can normalize the progress correctly (dynamic max)', () => {
    const { container } = render(
      <ProgressBar
        progress={80}
        max={75}
      />
    );
    expect(container.firstChild?.firstChild).toHaveStyle({ width: '75%' });
  });

  test('can normalize the progress correctly (min)', () => {
    const { container } = render(<ProgressBar progress={-28} />);
    expect(container.firstChild?.firstChild).toHaveStyle({ width: '0%' });
  });

  test('can normalize the progress correctly (dynamic min)', () => {
    const { container } = render(
      <ProgressBar
        progress={45}
        min={50}
      />
    );
    expect(container.firstChild?.firstChild).toHaveStyle({ width: '50%' });
  });
});
