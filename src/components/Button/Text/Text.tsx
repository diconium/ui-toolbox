import classNames from 'classnames';
import React from 'react';
import DefaultButton, { Props as DefaultProps } from '../Button';

export interface Props extends DefaultProps {
  label: string;
  secondary?: boolean;
}

const BASE_TEMPLATE = `inline-flex justify-center items-center
  bg-toolbox-white leading-5 text-sm`;

const DEFAULT_TEMPLATE = `text-toolbox-primary hover:text-toolbox-primary-600 active:text-toolbox-primary-300
  disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed`;

const DEFAULT_SECONDARY_TEMPLATE = `text-toolbox-secondary hover:text-toolbox-secondary-600 active:text-toolbox-secondary-300
  disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed`;

function TextButton({
  label,
  secondary = false,
  disabled,
  onClick = () => {},
}: Props) {
  const template = classNames([
    BASE_TEMPLATE,
    secondary ? DEFAULT_SECONDARY_TEMPLATE : DEFAULT_TEMPLATE,
  ]);
  return (
    <DefaultButton
      disabled={disabled}
      defaultTemplate={template}
      onClick={() => onClick()}
    >
      <span className="visited:underline visited:underline-offset-2">
        {label}
      </span>
    </DefaultButton>
  );
}

export default TextButton;
