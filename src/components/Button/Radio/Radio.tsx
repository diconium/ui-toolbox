import React from 'react';
import classNames from 'classnames';
import Dot from '../../Dot';

export interface Props {
  disabled?: boolean;
  checked?: boolean;
  onClick?: (checked: boolean) => void;
}

const BASE_TEMPLATE = `w-7 h-7 rounded-full border-2
bg-white inline-flex justify-center items-center
box-border`;

function RadioButton({ disabled = false, checked = false, onClick = () => {} }: Props) {
  const template = classNames({
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
      className={classNames([
        BASE_TEMPLATE,
        disabled && 'border-toolbox-neutral-200',
        !disabled && 'border-toolbox-primary',
      ])}
      onClick={() => onClick(!checked)}
      aria-label="Click"
    >
      <Dot
        size="xl"
        color={template}
      />
    </button>
  );
}

export default RadioButton;
