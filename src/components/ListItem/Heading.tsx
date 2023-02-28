import classNames from 'classnames';
import React, { ReactNode } from 'react';

export interface Props {
  title: string;
  placeholder?: ReactNode | undefined;
  textAlignment?: string;
}

function Heading({ title, placeholder, textAlignment = 'left' }: Props) {
  const hasPlaceholder = !!placeholder;
  const template = classNames([
    'text-toolbox-neutral font-semibold leading-7 text-xl',
    textAlignment === 'center' ? 'text-center' : 'text-left',
  ]);

  if (!hasPlaceholder) {
    return <div className={template}>{title}</div>;
  }

  return (
    <div className="flex">
      <div className="flex-grow text-toolbox-neutral font-semibold leading-7 text-xl">{title}</div>
      <div className="flex flex-shrink">{placeholder}</div>
    </div>
  );
}

export default Heading;
