import React from 'react';
import Template from './Template';

export interface Props {
  placeholder: string;
  label?: string;
  value?: string;
  type?: string;
  hint?: string;
  disabled?: boolean;
  onChange?: (change: string) => void;
}

const BASE_TEMPLATE = `w-full border border-toolbox-neutral-200 
  px-6 py-3 rounded-2xl max-w-xs
  text-toolbox-neutral focus:outline-none
  leading-5 text-sm bg-toolbox-white`;

function TextField({ placeholder, label, value, type = 'text', hint, disabled = false, onChange = () => {} }: Props) {
  return (
    <Template
      label={label}
      hint={hint}
      disabled={disabled}
    >
      <input
        type={type}
        disabled={disabled}
        className={BASE_TEMPLATE}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Template>
  );
}

export default TextField;
