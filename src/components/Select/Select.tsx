import React, { useState } from 'react';
import Icon from '../Icon';
import Option from './Option';

type OptionType = {
  id: string | number;
  label: string;
};

export interface Props {
  placeholder: string;
  options: OptionType[];
  selected?: OptionType;
  opened?: boolean;
  onSelect?: (option: OptionType) => void;
}

function Select({
  options = [],
  selected,
  opened = false,
  onSelect = () => {},
  placeholder,
}: Props) {
  const [isOpen, set] = useState(opened);

  return (
    <div className="max-w-sm border py-2 pl-2 pr-4 border-toolbox-neutral-50 rounded-2xl">
      <button
        type="button"
        className="w-full flex items-center"
        onClick={() => set(true)}
      >
        <div className="flex-1 text-left text-toolbox-neutral leading-5 text-base px-4 py-2">
          {selected?.label || placeholder}
        </div>
        <div className="flex items-center">
          <Icon icon={isOpen ? 'chevron-up' : 'chevron-down'} size="s" />
        </div>
      </button>
      {isOpen && (
        <div className="max-h-28 overflow-y-scroll">
          {options.map((option) => (
            <Option
              key={option.id}
              label={option.label}
              selected={selected?.id === option.id}
              onSelect={() => {
                onSelect(option);
                set(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
