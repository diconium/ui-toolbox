import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export interface Props {
  label: string;
  icon?: string;
  selected?: boolean;
  onClick?: (key: string) => void;
}

export function Tab({ label, icon = 'bell', selected = false, onClick = () => {} }: Props) {
  const template = classNames([
    'text-base leading-5 px-2 py-3 font-semibold',
    'whitespace-nowrap uppercase',
    selected ? 'text-toolbox-primary' : 'text-toolbox-neutral-200',
  ]);
  return (
    <button
      type="button"
      className="flex justify-center items-center"
      onClick={() => onClick(label)}
    >
      <Icon
        className={selected ? 'text-toolbox-primary' : 'text-toolbox-neutral-200'}
        icon={icon}
        size="s"
      />
      <span className={template}>{label}</span>
    </button>
  );
}

export default Tab;
