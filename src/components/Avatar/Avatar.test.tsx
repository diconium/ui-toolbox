import React from 'react';
import { render } from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar component', () => {
  test('can render the default correctly', () => {
    const { container } = render(
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="foo"
      />
    );
    const tag = container.querySelector('img');
    expect(tag).toBeDefined();
    expect(tag?.getAttribute('src')).toBe('https://i.pravatar.cc/150?u=08188');
    expect(tag?.getAttribute('alt')).toBe('foo');
  });

  test('can render with status correctly', () => {
    const { container } = render(
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="foo"
        state="bg-red"
      />
    );
    const tag = container.querySelector('div.bg-red');
    expect(tag).not.toBe(null);
  });
});
