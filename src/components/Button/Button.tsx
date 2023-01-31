import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

function Button({ label, onClick = () => {} }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="px-8 py-2 bg-toolbox-primary text-white rounded-xl max-w-xs"
    >
      {label}
    </button>
  );
}

export default Button;
