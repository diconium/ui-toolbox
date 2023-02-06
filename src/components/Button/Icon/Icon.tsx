import React from 'react';
import classnames from 'classnames';

import DefaultButton, { Props as DefaultProps } from '../Button';
import Icon from '../../Icon';

export interface Props extends DefaultProps {
  icon: string;
  secondary?: boolean;
}

const BASE = 'w-16 h-16 rounded-full px-0 py-0 flex items-center justify-center text-toolbox-white';

function IconButton({ icon, disabled, secondary = false, onClick = () => {} }: Props) {
  const classes = classnames(BASE, !secondary && 'bg-toolbox-primary', secondary && 'bg-toolbox-secondary');
  return (
    <DefaultButton
      disabled={disabled}
      baseClassName={classes}
      className={classnames(
        !secondary && 'hover:bg-toolbox-primary-600',
        secondary && 'hover:bg-toolbox-secondary-600'
      )}
      onClick={() => onClick()}
    >
      <Icon icon={icon} />
    </DefaultButton>
  );
}

export default IconButton;
