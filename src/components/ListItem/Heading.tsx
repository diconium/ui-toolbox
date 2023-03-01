import classNames from 'classnames';
import React from 'react';

export interface Props {
  title: string;
  textAlignment?: string;
}

function Heading({ title, textAlignment = 'left' }: Props) {
  const template = classNames([
    'text-toolbox-neutral font-semibold leading-7 text-xl',
    textAlignment === 'center' ? 'text-center' : 'text-left',
  ]);

  return <div className={template}>{title}</div>;
}

export default Heading;
