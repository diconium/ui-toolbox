import React from 'react';
import DefaultButton, { Props as DefaultProps } from '../Button';
import Icon from '../../Icon';

export interface Props extends DefaultProps {
  label: string;
  icon?: string;
}

const DEFAULT_TEMPLATE = `inline-flex justify-center items-center box-border text-toolbox-white bg-toolbox-secondary hover:bg-toolbox-secondary-600 
  active:bg-toolbox-secondary active:text-toolbox-secondary-600 
  focus:outline-none focus-visible:border-toolbox-primary-300 focus-visible:border-4 
  focus-visible:bg-toolbox-secondary disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed`;

const OUTLINED_TEMPLATE = `inline-flex justify-center items-center box-border h-14 pt-4 pb-4 text-toolbox-secondary bg-white border-4 border-toolbox-secondary text-toolbox-black
  hover:bg-toolbox-secondary-600 hover:text-toolbox-white
  active:bg-toolbox-secondary active:text-toolbox-white
  focus:outline-none focus-visible:border-4 focus-visible:border-toolbox-primary-300 focus-visible:text-toolbox-secondary
  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed`;

function Secondary({
  label,
  disabled,
  outlined,
  icon,
  onClick = () => {},
}: Props) {
  return (
    <DefaultButton
      disabled={disabled}
      outlined={outlined}
      defaultTemplate={DEFAULT_TEMPLATE}
      outlinedTemplate={OUTLINED_TEMPLATE}
      onClick={() => onClick()}
    >
      {icon && <Icon icon={icon} className="leading-6 -ml-4 mr-4" />}
      <span className="visited:underline visited:underline-offset-2">
        {label}
      </span>
    </DefaultButton>
  );
}

export default Secondary;
