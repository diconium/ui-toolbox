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
  const [focused, setFocus] = useState(false);
  const iconTemplate = classNames('pt-3.5 pl-4 leading-4 text-base absolute top-0', {
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
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        className="pl-10 focus:pl-5"
      />
      {!focused && (
        <Icon
          icon="search"
          className={iconTemplate}
        />
      )}
    </div>
  );
}

export default Searchbar;
