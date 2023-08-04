import React, { useState } from 'react';
import Searchbar from './Searchbar';

export default {
  title: 'Toolbox/Searchbar',
  component: Searchbar,
};

export function Default() {
  return (
    <div className="flex flex-col space-y-4 w-[320px]">
      <Searchbar placeholder="Your search query" />
      <Searchbar
        value="With Text"
        placeholder="Your search query"
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex flex-col space-y-4 w-[320px]">
      <Searchbar
        disabled
        placeholder="Your search query"
      />
      <Searchbar
        disabled
        value="With Text"
        placeholder="Your search query"
      />
    </div>
  );
}

export function OnSearchAction() {
  const hint = 'Input your search and press Enter';
  const [query, setQuery] = useState(hint);

  return (
    <div className="flex flex-col space-y-4 w-[320px]">
      <span className="text-toolbox-neutral-500">{query || hint}</span>
      <Searchbar
        onSearch={(searchQuery) => setQuery(searchQuery)}
        placeholder="Your search query"
      />
    </div>
  );
}

export function OnChangeAction() {
  const hint = 'Input your search and press Enter';
  const [queryWithOnChange, setQueryWithOnChange] = useState(hint);

  return (
    <div className="flex flex-col space-y-4 w-[320px]">
      <span className="text-toolbox-neutral-500">{queryWithOnChange || hint}</span>
      <Searchbar
        onChange={(query) => setQueryWithOnChange(query)}
        placeholder="Your search query"
      />
    </div>
  );
}
