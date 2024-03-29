import React from 'react';
import { screen, render } from '@testing-library/react';

import { Icon as IMPORT } from '../../index';
import Icon from './Icon';
import { DEFAULT, AUTOMOTIVE } from './config';

describe('Icon component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Icon).toBeDefined();
    expect(IMPORT).toEqual(Icon);
  });

  test('all configurations contain complete set of icons', () => {
    const defaultConfig = Object.keys(DEFAULT);
    const automotiveConfig = Object.keys(AUTOMOTIVE);
    expect(defaultConfig.length).toEqual(603);
    expect(automotiveConfig.length).toEqual(156);
  });

  test('can render the an existing icon correctly', () => {
    render(<Icon icon="aperture" />);
    expect(screen.getByText('\ue907')).toBeInTheDocument();
  });

  test('can default correctly when the icon does not exist', () => {
    render(<Icon icon="foo" />);
    expect(screen.getByText('NA')).toBeInTheDocument();
  });

  test('can default correctly when the icon provided is empty', () => {
    render(<Icon icon="" />);
    expect(screen.getByText('NA')).toBeInTheDocument();
  });

  test('can render all sizes correctly', () => {
    const { container: small } = render(
      <Icon
        icon="aperture"
        size="s"
      />
    );
    const { container: medium } = render(
      <Icon
        icon="aperture"
        size="m"
      />
    );
    const { container: large } = render(
      <Icon
        icon="aperture"
        size="lg"
      />
    );
    const { container: xlarge } = render(
      <Icon
        icon="aperture"
        size="xl"
      />
    );
    const { container: xxlarge } = render(
      <Icon
        icon="aperture"
        size="2xl"
      />
    );
    const smallTag = small.querySelector('span');
    const mediumTag = medium.querySelector('span');
    const largeTag = large.querySelector('span');
    const xlargeTag = xlarge.querySelector('span');
    const xxlargeTag = xxlarge.querySelector('span');
    expect(smallTag).not.toBe(null);
    expect(mediumTag).not.toBe(null);
    expect(largeTag).not.toBe(null);
    expect(xlargeTag).not.toBe(null);
    expect(xxlargeTag).not.toBe(null);
  });
});
