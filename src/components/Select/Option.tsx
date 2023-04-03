import React from 'react';
import classNames from 'classnames';

export interface Props {
  label: string;
  selected?: boolean;
  onSelect?: () => void;
}

function Option({ label, selected = false, onSelect = () => {} }: Props) {
  const template = classNames([
    'px-4 py-2 w-full text-left',
    'leading-5 text-base hover:bg-toolbox-primary-50',
    selected
      ? 'bg-toolbox-primary-50 text-toolbox-primary'
      : 'bg-toolbox-white text-toolbox-neutral',
  ]);
  return (
    <button
      type="button"
      className={template}
      onClick={() => onSelect()}
    >
      {label}
    </button>
  );
}

export default Option;
