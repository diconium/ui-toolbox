import React from 'react';
import Icon from '../Icon';

export interface Props {
  label: string;
  onCancel?: () => void;
}

function Tag({ label, onCancel = () => {} }: Props) {
  return (
    <span className="inline-flex items-center leading-3 text-lg font-thin bg-toolbox-neutral-50 text-toolbox-black px-3 pt-2.5 pb-2 rounded-3xl">
      <button
        type="button"
        onClick={() => onCancel()}
      >
        <Icon
          icon="xmark"
          className="mr-1 leading-3 text-lg"
        />
      </button>
      {label}
    </span>
  );
}

export default Tag;
