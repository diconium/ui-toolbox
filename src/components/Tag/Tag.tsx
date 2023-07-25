import React from 'react';
import Icon from '../Icon';

export interface Props {
  label: string;
  onCancel?: () => void;
}

function Tag({ label, onCancel = () => {} }: Props) {
  return (
    <span className="inline-flex items-center text-sm font-thin bg-toolbox-neutral-50 text-toolbox-black px-3 py-0.5 rounded-3xl whitespace-nowrap">
      <button
        type="button"
        onClick={() => onCancel()}
      >
        <Icon
          icon="circle-xmark"
          size="s"
          className="mr-1 mt-1"
        />
      </button>
      {label}
    </span>
  );
}

export default Tag;
