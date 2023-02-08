import React from 'react';

import DefaultButton, { Props as DefaultProps } from '../Button';
import Icon from '../../Icon';

export interface Props extends DefaultProps {
  icon: string;
  secondary?: boolean;
}

const BASE_TEMPLATE = 'inline-block w-16 h-16 leading-4 rounded-full px-0 py-0 text-toolbox-white';

const DEFAULT_TEMPLATE = `bg-toolbox-primary hover:bg-toolbox-primary-600
  active:bg-toolbox-primary-600 active:text-toolbox-primary
  focus:outline-none focus-visible:border-toolbox-secondary-300 focus-visible:border-3
  disabled:bg-toolbox-neutral-200 disabled:cursor-not-allowed`;

const DEFAULT_SECONDARY_TEMPLATE = `bg-toolbox-secondary hover:bg-toolbox-secondary-600
  active:bg-toolbox-secondary-600 active:text-toolbox-secondary
  focus:outline-none focus-visible:border-toolbox-secondary-300 focus-visible:border-3
  disabled:bg-toolbox-neutral-200 disabled:cursor-not-allowed`;

const OUTLINED_TEMPLATE = `border-3 border-toolbox-primary text-toolbox-primary
  hover:bg-toolbox-primary-600 hover:text-toolbox-primary
  active:bg-toolbox-primary active:text-toolbox-white
  focus:outline-none focus-visible:border-toolbox-secondary-300 focus-visible:border-3
  focus-visible:text-toolbox-secondary-300
  disabled:border-toolbox-neutral-200 disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed
  disabled:hover:bg-white`;

const OUTLINED_SECONDARY_TEMPLATE = `border-3 border-toolbox-secondary text-toolbox-secondary
  hover:bg-toolbox-secondary-600 hover:text-toolbox-secondary
  active:bg-toolbox-secondary active:text-toolbox-white
  focus:outline-none focus-visible:border-toolbox-secondary-300 focus-visible:border-3
  focus-visible:text-toolbox-secondary-300
  disabled:border-toolbox-neutral-200 disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed
  disabled:hover:bg-white`;

function IconButton({ icon, disabled, outlined, secondary = false, onClick = () => {} }: Props) {
  return (
    <DefaultButton
      onClick={() => onClick()}
      outlined={outlined}
      disabled={disabled}
      baseTemplate={BASE_TEMPLATE}
      defaultTemplate={secondary ? DEFAULT_SECONDARY_TEMPLATE : DEFAULT_TEMPLATE}
      outlinedTemplate={secondary ? OUTLINED_SECONDARY_TEMPLATE : OUTLINED_TEMPLATE}
    >
      <Icon icon={icon} />
    </DefaultButton>
  );
}

export default IconButton;
