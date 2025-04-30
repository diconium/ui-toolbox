import React from 'react';
import Icon from '../Icon';

export interface Props {
  onClick?: () => void;
}

function DefaultAction({ onClick = () => {} }: Props) {
  return (
    <button
      type="button"
      className="shrink flex justify-end items-center text-toolbox-secondary"
      onClick={() => onClick()}
      aria-label="Click"
    >
      <Icon
        icon="circle-information"
        size="m"
      />
    </button>
  );
}

export default DefaultAction;
