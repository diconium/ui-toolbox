import classNames from 'classnames';
import React from 'react';
import Icon from '../Icon';
import Template from './Template';

export interface Props {
  placeholder: string;
  label?: string;
  value?: string;
  type?: string;
  hint?: string;
  validation?: string;
  disabled?: boolean;
  onChange?: (change: string) => void;
}

const BASE_TEMPLATE = `w-full border-2 px-6 py-3 rounded-xl max-w-xs
  leading-5 text-sm bg-toolbox-white
  focus:outline-none focus:border-toolbox-primary focus:text-toolbox-neutral`;

/**  for tailwind to generate the appropriate classes
   * Do not remove *
   text-toolbox-feedback-green text-toolbox-feedback-orange text-toolbox-feedback-red
  border-toolbox-feedback-orange border-toolbox-feedback-red
  focus:border-toolbox-feedback-orange focus:border-toolbox-feedback-red
*/
export const validationToColor = (validation?: string) => {
  if (validation === 'valid') {
    return 'green';
  }
  if (validation === 'warning') {
    return 'orange';
  }
  if (validation === 'error') {
    return 'red';
  }
  return 'black';
};

const validationToIcon = (validation?: string) => {
  if (validation === 'valid') {
    return 'circle-check';
  }
  if (validation === 'warning') {
    return 'circle-information';
  }
  return 'circle-xmark';
};

function TextField({
  placeholder,
  label,
  value,
  type = 'text',
  hint,
  validation,
  disabled = false,
  onChange = () => {},
}: Props) {
  const color = validationToColor(validation);
  const template = classNames(
    BASE_TEMPLATE,
    !validation && 'border-toolbox-neutral-200  text-toolbox-neutral-500',
    ...[validation && `border-toolbox-feedback-${color} focus:border-toolbox-feedback-${color}`]
  );

  return (
    <Template
      label={label}
      hint={hint}
      disabled={disabled}
      validation={validation}
    >
      <input
        type={type}
        disabled={disabled}
        className={template}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {validation && (
        <Icon
          icon={validationToIcon(validation)}
          className={`text-toolbox-feedback-${color} -ml-10`}
        />
      )}
    </Template>
  );
}

export default TextField;
