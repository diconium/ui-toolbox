import React from 'react';
import Dot from './Dot';

type page = {
  title?: string;
};

export interface Props {
  pages: page[];
  current?: number;
  onClick?: (index: number) => void;
  disabled?: boolean;
}

function PaginationDots({ current = 0, pages, disabled = false, onClick = () => {} }: Props) {
  const steps = pages.map(({ title }, index) => (
    <Dot
      disabled={disabled}
      key={index}
      title={title}
      className={index === current ? 'bg-toolbox-primary' : 'bg-toolbox-neutral-200'}
      onClick={() => onClick(index)}
    />
  ));
  return <div className="flex space-x-2">{steps}</div>;
}

export default PaginationDots;
