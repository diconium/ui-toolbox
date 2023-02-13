import React from 'react';
import classNames from 'classnames';

export interface Props {
  disabled?: boolean;
  checked?: boolean;
  onClick?: (checked: boolean) => void;
}

const BASE_TEMPLATE = `w-6 h-6 rounded-full border-2
bg-white inline-flex justify-center items-center
box-border`;

function RadioButton({ disabled = false, checked = false, onClick = () => {} }: Props) {
  const filled = classNames({
    'bg-toolbox-primary': checked && !disabled,
    'bg-toolbox-neutral-200': checked && disabled,
    'bg-transparent': !checked && !disabled,
  });
  return (
    <button
      role="radio"
      type="button"
      aria-checked={checked}
      disabled={disabled}
      className={`${BASE_TEMPLATE} ${disabled ? 'border-toolbox-neutral-200' : ' border-toolbox-primary'}`}
      onClick={() => onClick(!checked)}
    >
      <div className={`w-3 h-3 rounded-full ${filled}`} />
    </button>
  );
}

export default RadioButton;
