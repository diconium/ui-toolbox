import React from 'react';
import { screen, render } from '@testing-library/react';

import Icon from './Icon';

describe('Icon component', () => {
  test('can render the an existing icon correctly', () => {
    render(<Icon icon="airplay" />);
    expect(screen.getByText('\ueaa7')).toBeInTheDocument();
  });

  test('can default correctly when the icon does not exist', () => {
    render(<Icon icon="foo" />);
    expect(screen.getByText('NA')).toBeInTheDocument();
  });

  test('can default correctly when the icon provided is empty', () => {
    render(<Icon icon="" />);
    expect(screen.getByText('NA')).toBeInTheDocument();
  });
});
