import React from 'react';
import DefaultButton, { Props as DefaultProps } from '../Button';

export interface Props extends DefaultProps {
  label: string;
}

const DEFAULT_TEMPLATE = `text-toolbox-white bg-toolbox-primary hover:bg-toolbox-primary-600 
  active:bg-toolbox-primary-600 active:text-toolbox-primary-600 
  focus:outline-none focus-visible:border-toolbox-secondary-300 focus-visible:border-3 
  focus-visible:bg-toolbox-primary visited:underline visited:underline-offset-2 
  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed`;

const OUTLINED_TEMPLATE = `text-toolbox-primary bg-white border-3 border-toolbox-primary text-toolbox-black
  hover:bg-toolbox-primary-600 hover:text-toolbox-white
  active:bg-toolbox-primary active:border-none active:text-toolbox-white
  focus:outline-none focus-visible:border-3 focus-visible:border-toolbox-secondary-300 focus-visible:text-toolbox-primary
  visited:underline visited:underline-offset-2
  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed
  disabled:hover:bg-white`;

function Primary({ label, disabled, outlined, onClick = () => {} }: Props) {
  return (
    <DefaultButton
      disabled={disabled}
      outlined={outlined}
      defaultTemplate={DEFAULT_TEMPLATE}
      outlinedTemplate={OUTLINED_TEMPLATE}
      onClick={() => onClick()}
    >
      {label}
    </DefaultButton>
  );
}

export default Primary;
