import React, { useState } from 'react';
import classNames from 'classnames';

import Icon from '../Icon';
import TextField, { Props as TextProps } from '../TextField';

export interface Props extends TextProps {
  onSearch?: (query: string) => void;
}

function Searchbar({
  placeholder,
  disabled = false,
  value = '',
  onSearch = () => {},
  onChange = () => {},
}: Props) {
  const [query, set] = useState(value || '');
  const iconTemplate = classNames('pt-3.5 pl-4 absolute top-0 peer-focus:hidden', {
    'text-toolbox-neutral-500': !disabled,
    'text-toolbox-neutral-200': disabled,
  });
  return (
    <div className="relative">
      <TextField
        onEnter={() => onSearch(query)}
        disabled={disabled}
        value={query}
        onChange={(q) => {
          set(q);
          onChange(q);
        }}
        placeholder={placeholder}
        className="pl-10 focus:pl-5"
        isClearable={!disabled}
      >
        <Icon
          icon="search"
          size="s"
          className={iconTemplate}
        />
      </TextField>
    </div>
  );
}

export default Searchbar;
