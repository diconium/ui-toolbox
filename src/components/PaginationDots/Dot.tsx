import React from 'react';

export interface Props {
  className?: string;
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Dot = ({ className, title, disabled = false, onClick = () => {} }: Props) => {
  return (
    <div
      title={title}
      onClick={!disabled ? onClick : () => {}}
      className={`w-2 h-2 rounded-full ${!disabled ? 'cursor-pointer' : 'cursor-default'} ${className}`}
    />
  );
};

export default Dot;
