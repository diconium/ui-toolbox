import React from 'react';
import Icon from '../Icon';

export interface Props {
  label: string;
  onCancel?: () => void;
}

function Tag({ label, onCancel = () => {} }: Props) {
  return (
    <span className="inline-flex items-center leading-5 text-sm font-thin bg-toolbox-neutral-50 text-toolbox-black px-3 py-1 rounded-3xl">
      <button
        type="button"
        onClick={() => onCancel()}
      >
        <Icon
          icon="circle-xmark"
          className="mr-1 leading-5 text-sm"
        />
      </button>
      {label}
    </span>
  );
}

export default Tag;
