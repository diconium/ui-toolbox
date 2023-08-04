import React from 'react';
import { render } from '@testing-library/react';

import { Avatar as IMPORT } from '../../index';
import Avatar from './Avatar';

describe('Avatar component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Avatar).toBeDefined();
    expect(IMPORT).toEqual(Avatar);
  });

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

  test('can render all sizes correctly', () => {
    const { container: small } = render(
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="foo"
        size="s"
      />
    );
    const { container: medium } = render(
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="foo"
        size="m"
      />
    );
    const { container: large } = render(
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="foo"
        size="lg"
      />
    );
    const { container: xlarge } = render(
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="foo"
        size="xl"
      />
    );
    const { container: xxlarge } = render(
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="foo"
        size="2xl"
      />
    );
    const smallTag = small.querySelector('img');
    const mediumTag = medium.querySelector('img');
    const largeTag = large.querySelector('img');
    const xlargeTag = xlarge.querySelector('img');
    const xxlargeTag = xxlarge.querySelector('img');
    expect(smallTag).not.toBe(null);
    expect(mediumTag).not.toBe(null);
    expect(largeTag).not.toBe(null);
    expect(xlargeTag).not.toBe(null);
    expect(xxlargeTag).not.toBe(null);
  });
});
