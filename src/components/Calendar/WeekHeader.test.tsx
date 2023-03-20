import React from 'react';
import dayjs from 'dayjs';
import { screen, render } from '@testing-library/react';

import WeekHeader from './WeekHeader';

const FIXTURE = [
  dayjs().startOf('week'),
  dayjs().startOf('week').add(1, 'day'),
  dayjs().startOf('week').add(2, 'day'),
  dayjs().startOf('week').add(3, 'day'),
  dayjs().startOf('week').add(4, 'day'),
  dayjs().startOf('week').add(5, 'day'),
  dayjs().startOf('week').add(6, 'day'),
];

describe('Calendar/WeekHeader component', () => {
  test('can render the default component correctly', () => {
    render(<WeekHeader week={FIXTURE} />);
    expect(screen.getByText(/Su/i)).toBeInTheDocument();
    expect(screen.getByText(/Mo/i)).toBeInTheDocument();
    expect(screen.getByText(/Tu/i)).toBeInTheDocument();
    expect(screen.getByText(/We/i)).toBeInTheDocument();
    expect(screen.getByText(/Th/i)).toBeInTheDocument();
    expect(screen.getByText(/Fr/i)).toBeInTheDocument();
    expect(screen.getByText(/Sa/i)).toBeInTheDocument();
  });
});
