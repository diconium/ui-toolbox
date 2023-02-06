import React from 'react';
import DefaultButton, { Props as DefaultProps } from '../Button';

export interface Props extends DefaultProps {
  label: string;
}

function Secondary({ label, disabled, onClick = () => {} }: Props) {
  return (
    <DefaultButton
      disabled={disabled}
      className="bg-toolbox-secondary hover:bg-toolbox-secondary-600 text-toolbox-white"
      onClick={() => onClick()}
    >
      {label}
    </DefaultButton>
  );
}

export default Secondary;
