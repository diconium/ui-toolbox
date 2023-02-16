import React, { useState } from 'react';
import Icon from '../Icon';
import TextField, { Props as TextProps } from '../TextField';

export interface Props extends TextProps {
  onSearch?: (query: string) => void;
}

function Searchbar({ placeholder, disabled, value, onSearch = () => {}, onChange = () => {} }: Props) {
  const [query, set] = useState(value || '');
  const [focused, setFocus] = useState(false);
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
          className="pt-3.5 pl-4 text-toolbox-neutral-500 leading-4 text-base absolute top-0"
        />
      )}
    </div>
  );
}

export default Searchbar;
