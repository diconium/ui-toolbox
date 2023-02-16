import React, { useState } from 'react';
import Icon from '../Icon';
import TextField, { Props as TextProps } from '../TextField';

export interface Props extends TextProps {
  onSearch?: (query: string) => void;
}

function Searchbar({ placeholder, disabled, value, onSearch = () => {} }: Props) {
  const [query, set] = useState(value || '');
  return (
    <div className="relative">
      <Icon
        icon="search"
        className="pt-3.5 pl-4 text-toolbox-neutral-500 leading-4 text-base absolute"
      />
      <TextField
        onEnter={() => onSearch(query)}
        disabled={disabled}
        value={query}
        onChange={(q) => set(q)}
        placeholder={placeholder}
        className="pl-10"
      />
    </div>
  );
}

export default Searchbar;
