import classNames from 'classnames';
import React from 'react';
import Icon from '../Icon';
import Template, { validationToColor } from './Template';

export interface Props {
  placeholder: string;
  label?: string;
  value?: string;
  type?: string;
  hint?: string;
  validation?: string;
  disabled?: boolean;
  onChange?: (change: string) => void;
  onEnter?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

const BASE_TEMPLATE = `w-full border-2 px-4 py-2.5 rounded-lg max-w-xs
  text-sm bg-toolbox-white
  focus:outline-none focus:border-toolbox-primary focus:text-toolbox-neutral`;

/**  for tailwind to generate the appropriate classes
   * Do not remove *
   text-toolbox-feedback-green text-toolbox-feedback-orange text-toolbox-feedback-red
  border-toolbox-feedback-orange border-toolbox-feedback-red
  focus:border-toolbox-feedback-orange focus:border-toolbox-feedback-red
*/

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
  onEnter = () => {},
  onFocus = () => {},
  onBlur = () => {},
  className,
}: Props) {
  const color = validationToColor(validation);
  const isValid = validation === 'valid';
  const template = classNames(
    BASE_TEMPLATE,
    !validation && 'border-toolbox-neutral-200',
    !validation && !disabled && 'text-toolbox-neutral-500',
    ...[
      validation && !isValid && `border-toolbox-feedback-${color}`,
      validation && !isValid && `focus:border-toolbox-feedback-${color}`,
      validation && isValid && 'border-toolbox-neutral-200',
      validation && 'text-toolbox-neutral-500',
    ],
    disabled && 'text-toolbox-neutral-200',
    className
  );

  const handleEnter = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEnter();
    }
  };

  return (
    <Template
      label={label}
      hint={hint}
      disabled={disabled}
      validation={validation}
    >
      <input
        onKeyDown={handleEnter}
        type={type}
        disabled={disabled}
        className={template}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
      />
      {validation && (
        <Icon
          icon={validationToIcon(validation)}
          size="s"
          className={`text-toolbox-feedback-${color} -ml-10`}
        />
      )}
    </Template>
  );
}

export default TextField;
