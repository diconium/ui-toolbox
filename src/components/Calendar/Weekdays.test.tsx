import React from 'react';
import dayjs from 'dayjs';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Weekdays, { FORMAT } from './Weekdays';

const mockDay = dayjs('2023-01-01'); // Replace with a suitable date for testing

const mockProps = {
  week: [
    mockDay,
    mockDay.add(1, 'day'),
    mockDay.add(2, 'day'),
    mockDay.add(3, 'day'),
    mockDay.add(4, 'day'),
  ],
  onSelect: jest.fn(),
  selected: [mockDay],
  state: {
    [mockDay.format(FORMAT)]: 'someState',
  },
};

describe('Weekdays component', () => {
  it('renders correctly', () => {
    render(<Weekdays {...mockProps} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('handles click event correctly', async () => {
    render(<Weekdays {...mockProps} />);
    const user = userEvent.setup();
    const button = await screen.getByText('1');
    await user.click(button);
    expect(mockProps.onSelect).toHaveBeenCalled();
  });

  it('applies selected styles to the selected day', () => {
    render(<Weekdays {...mockProps} />);

    const selectedDayElement = screen.getByText('1');
    expect(selectedDayElement).toHaveClass('bg-toolbox-secondary');
    expect(selectedDayElement).toHaveClass('text-toolbox-white');
  });

  it('applies inRange styles to days in the range', () => {
    const inRangeProps = {
      ...mockProps,
      selected: [mockDay, mockDay.add(2, 'day')],
    };
    render(<Weekdays {...inRangeProps} />);

    const inRangeDayElement = screen.getByText('2');
    expect(inRangeDayElement).toHaveClass('bg-toolbox-secondary');
    expect(inRangeDayElement).toHaveClass('text-toolbox-white');
  });
});
