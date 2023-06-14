import React from 'react';
import classNames from 'classnames';

import Icon from '../Icon';

export interface Props {
  checked?: boolean;
  onClick?: (checked: boolean) => void;
  disabled?: boolean;
}

const BASE_TEMPLATE = `w-7 h-7 border-2
  flex justify-center items-center
  box-border`;

function Checkbox({
  checked = false,
  disabled = false,
  onClick = () => {},
}: Props) {
  const template = classNames(BASE_TEMPLATE, {
    'bg-toolbox-primary': checked && !disabled,
    'bg-toolbox-neutral-200': checked && disabled,
    'border-toolbox-primary': !disabled,
    'border-toolbox-neutral-200': disabled,
  });
  return (
    <button
      type="button"
      disabled={disabled}
      className={template}
      onClick={() => onClick(!checked)}
    >
      {checked && (
        <Icon icon="check" className="text-white leading-5 text-xl" />
      )}
    </button>
  );
}

export default Checkbox;
