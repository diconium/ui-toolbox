import React from 'react';
import DefaultButton, { Props as DefaultProps } from '../Button';

export interface Props extends DefaultProps {
  label: string;
}

function Primary({ label, disabled, onClick = () => {} }: Props) {
  return (
    <DefaultButton
      disabled={disabled}
      className="bg-toolbox-primary hover:bg-toolbox-primary-600 text-toolbox-white"
      onClick={() => onClick()}
    >
      {label}
    </DefaultButton>
  );
}

export default Primary;
