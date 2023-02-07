import React from 'react';
import classnames from 'classnames';
import DefaultButton, { Props as DefaultProps } from '../Button';

export interface Props extends DefaultProps {
  label: string;
  secondary?: boolean;
  left?: boolean;
}

function Sticky({ label, secondary, disabled, left, onClick = () => {} }: Props) {
  const classes = classnames({
    'bg-toolbox-secondary hover:bg-toolbox-secondary-600': secondary,
    'bg-toolbox-primary hover:bg-toolbox-primary-600': !secondary,
  });
  const side = classnames({
    'right-0 rounded-tl-full': !left,
    'left-0 rounded-tr-full': left,
  });
  return (
    <DefaultButton
      disabled={disabled}
      baseClassName={`w-36 h-36 absolute bottom-0 ${side}`}
      className={`${classes} text-toolbox-white`}
      onClick={() => onClick()}
    >
      <span className={`${left ? '-ml-8' : '-mr-8'}`}>{label}</span>
    </DefaultButton>
  );
}

export default Sticky;
