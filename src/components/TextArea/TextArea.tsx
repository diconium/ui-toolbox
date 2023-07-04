import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import Template from '../TextField/Template';

export interface Props extends PropsWithChildren {
  placeholder: string;
  onChange?: (change: string) => void;
  disabled?: boolean;
  value?: string;
  rows?: number;
  label?: string;
  hint?: string;
}

const BASE_TEMPLATE = `peer w-full border px-4 py-2.5 rounded-lg max-w-xs
  text-sm bg-toolbox-white
  focus:outline-none focus:border-toolbox-primary focus:text-toolbox-neutral`;

function TextArea({
  placeholder,
  onChange = () => {},
  disabled = false,
  value = '',
  rows = 5,
  label = '',
  hint = '',
  children,
}: Props) {
  const template = classNames([
    BASE_TEMPLATE,
    !disabled && 'text-toolbox-neutral-500',
    disabled && 'text-toolbox-neutral-200',
    disabled && 'border-toolbox-neutral-50',
  ]);

  return (
    <Template
      label={label}
      hint={hint}
      disabled={disabled}
    >
      <textarea
        rows={rows}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        className={template}
        onChange={(event) => onChange(event.target.value)}
      />
      {children}
    </Template>
  );
}

export default TextArea;
