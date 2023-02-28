import React, { ReactNode } from 'react';

export interface Props {
  title: string;
  placeholder?: ReactNode | undefined;
}

function Heading({ title, placeholder }: Props) {
  const hasPlaceholder = !!placeholder;

  if (!hasPlaceholder) {
    return <div className="text-toolbox-neutral font-semibold leading-7 text-xl">{title}</div>;
  }

  return (
    <div className="flex">
      <div className="flex-grow text-toolbox-neutral font-semibold leading-7 text-xl">{title}</div>
      <div className="flex flex-shrink">{placeholder}</div>
    </div>
  );
}

export default Heading;
