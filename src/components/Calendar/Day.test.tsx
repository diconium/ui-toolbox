import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import dayjs from 'dayjs';
import Day from './Day';

describe('Day Component', () => {
  const mockDay = dayjs('2024-12-01'); // Choose a date for testing

  it('renders correctly', () => {
    const { getByText } = render(<Day day={mockDay} />);
    const dayElement = getByText('1');
    expect(dayElement).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Day day={mockDay} onClick={onClickMock} />);
    const dayElement = getByText('1');
    
    fireEvent.click(dayElement);
    expect(onClickMock).toHaveBeenCalledWith(mockDay);
  });

  it('renders selected styles when selected is true', () => {
    const { getByText } = render(<Day day={mockDay} selected />);
    const selectedDayElement = getByText('1');
    expect(selectedDayElement).toHaveClass('bg-toolbox-secondary');
    expect(selectedDayElement).toHaveClass('text-toolbox-white');
  });

  it('renders inRange styles when inRange is true', () => {
    const { getByText } = render(<Day day={mockDay} inRange />);
    const inRangeDayElement = getByText('1');
    expect(inRangeDayElement).toHaveClass('bg-toolbox-secondary-400');
    expect(inRangeDayElement).toHaveClass('text-toolbox-white');
  });

  it('renders Dot component when state is provided', () => {
    const { container } = render(<Day day={mockDay} state="someState" />);
    const dotComponent = container.querySelector('.rounded-full');
    expect(dotComponent).toBeInTheDocument();
  });
});
