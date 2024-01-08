import classNames from 'classnames';
import React from 'react';
import Dot from '../../Dot';

export interface Props {
  toggled?: boolean;
  onClick?: (toggled: boolean) => void;
  disabled?: boolean;
  title?: string;
}

const BASE_TEMPLATE = `w-12 h-7 bg-toolbox-white 
  border-2 rounded-2xl px-0.5
  inline-flex items-center box-border`;

function Toggle({ toggled = false, disabled = false, onClick = () => {}, title = '' }: Props) {
  const template = classNames(BASE_TEMPLATE, {
    'border-toolbox-neutral-500': !disabled && !toggled,
    'border-toolbox-primary': !disabled && toggled,
    'justify-end': toggled,
    'justify-start': !toggled,
    'border-toolbox-neutral-200': disabled,
  });
  const dot = classNames({
    'bg-toolbox-neutral-500': !disabled && !toggled,
    'bg-toolbox-primary': !disabled && toggled,
    'bg-toolbox-neutral-200': disabled,
  });
  
return (
    <button
      title={title}
      type="button"
      disabled={disabled}
      className={template}
      onClick={() => onClick(!toggled)}
      aria-label="Dot"
    >
      <Dot
        size="xl"
        color={dot}
      />
    </button>
  );
}

export default Toggle;
