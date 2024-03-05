import React from 'react';
import classNames from 'classnames';

export interface Props {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const BASE_TEMPLATE = `text-sm leading-5 bg-toolbox-white
rounded-2xl border text-toolbox-black whitespace-nowrap
px-10 py-1 font-thin  inline-block`;

function Chip({ label, selected = false, disabled = false, onClick = () => {} }: Props) {
  const template = classNames(BASE_TEMPLATE, {
    'border-toolbox-primary': selected,
    'border-toolbox-neutral-200': !selected,
    'text-toolbox-neutral-200': disabled,
    'cursor-not-allowed': disabled,
    'cursor-pointer': !disabled,
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") onClick();
  };

  return (
    <div
      className={template}
      role='button'
      onClick={disabled ? undefined : onClick}
      tabIndex={0}
      onKeyDown={disabled ? undefined : handleKeyDown}
    >
      {label}
    </div>
  );
}

export default Chip;
