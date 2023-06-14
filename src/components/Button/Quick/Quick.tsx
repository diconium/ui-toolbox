import React from 'react';

import DefaultButton, { Props as DefaultProps } from '../Button';
import Icon from '../../Icon';

export interface Props extends DefaultProps {
  icon: string;
  secondary?: boolean;
}

const BASE_TEMPLATE = 'inline-block w-14 h-14 leading-4 rounded-full px-0 py-0';

const DEFAULT_TEMPLATE = `text-toolbox-white bg-toolbox-primary hover:bg-toolbox-primary-600
  active:bg-toolbox-primary-600 active:text-toolbox-primary
  focus:outline-none focus-visible:border-toolbox-secondary focus-visible:border-4
  disabled:bg-toolbox-neutral-200 disabled:cursor-not-allowed`;

const DEFAULT_SECONDARY_TEMPLATE = `text-toolbox-white bg-toolbox-secondary hover:bg-toolbox-secondary-600
  active:bg-toolbox-secondary-600 active:text-toolbox-secondary
  focus:outline-none focus-visible:border-toolbox-primary-300 focus-visible:border-4
  disabled:bg-toolbox-neutral-200 disabled:cursor-not-allowed`;

const OUTLINED_TEMPLATE = `border-4 border-toolbox-primary text-toolbox-primary
  hover:bg-toolbox-primary-600 hover:text-toolbox-primary
  active:bg-toolbox-primary active:text-toolbox-white
  focus:outline-none focus-visible:border-toolbox-secondary-300 focus-visible:border-4
  focus-visible:text-toolbox-secondary-300
  disabled:border-toolbox-neutral-200 disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed`;

const OUTLINED_SECONDARY_TEMPLATE = `border-4 border-toolbox-secondary text-toolbox-secondary
  hover:bg-toolbox-secondary-600 hover:text-toolbox-secondary
  active:bg-toolbox-secondary active:text-toolbox-white
  focus:outline-none focus-visible:border-toolbox-primary-300 focus-visible:border-4
  focus-visible:text-toolbox-secondary
  disabled:border-toolbox-neutral-200 disabled:text-toolbox-neutral-200 disabled:cursor-not-allowed`;

function QuickButton({
  icon,
  disabled,
  outlined,
  secondary = false,
  onClick = () => {},
}: Props) {
  return (
    <DefaultButton
      onClick={() => onClick()}
      outlined={outlined}
      disabled={disabled}
      baseTemplate={BASE_TEMPLATE}
      defaultTemplate={
        secondary ? DEFAULT_SECONDARY_TEMPLATE : DEFAULT_TEMPLATE
      }
      outlinedTemplate={
        secondary ? OUTLINED_SECONDARY_TEMPLATE : OUTLINED_TEMPLATE
      }
    >
      <Icon icon={icon} size="lg" />
    </DefaultButton>
  );
}

export default QuickButton;
