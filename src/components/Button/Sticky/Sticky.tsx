import React from 'react';
import classnames from 'classnames';
import DefaultButton, { Props as DefaultProps } from '../Button';

export interface Props extends DefaultProps {
  label: string;
  secondary?: boolean;
  left?: boolean;
}

const BASE_TEMPLATE = 'text-toolbox-white text-base max-w-xs font-semibold uppercase w-36 h-36 absolute bottom-0';

const DEFAULT_TEMPLATE = 'bg-toolbox-primary hover:bg-toolbox-primary-600';

const DEFAULT_SECONDARY_TEMPLATE = 'bg-toolbox-secondary hover:bg-toolbox-secondary-600';

function Sticky({ label, secondary, disabled, left, onClick = () => {} }: Props) {
  const side = classnames({
    'right-0 rounded-tl-full': !left,
    'left-0 rounded-tr-full': left,
  });
  return (
    <DefaultButton
      disabled={disabled}
      baseTemplate={`${BASE_TEMPLATE} ${side}`}
      defaultTemplate={secondary ? DEFAULT_SECONDARY_TEMPLATE : DEFAULT_TEMPLATE}
      onClick={() => onClick()}
    >
      <span className={`${left ? '-ml-8' : '-mr-8'}`}>{label}</span>
    </DefaultButton>
  );
}

export default Sticky;
