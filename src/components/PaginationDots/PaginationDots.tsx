import React from 'react';
import Dot from '../Dot';

type page = {
  title?: string;
};

export interface Props {
  pages: page[];
  current?: number;
  onClick?: (index: number) => void;
  disabled?: boolean;
}

function PaginationDots({
  current = 0,
  pages,
  disabled = false,
  onClick = () => {},
}: Props) {
  const steps = pages.map(({ title }, index) => (
    <button
      key={`${title || 'dot'}${index}`} // NOSONAR
      type="button"
      disabled={disabled}
      className="flex items-center"
      title={title}
      onClick={() => onClick(index)}
    >
      <Dot
        size={index === current ? 'm' : 's'}
        color={
          index === current ? 'bg-toolbox-primary' : 'bg-toolbox-neutral-500'
        }
      />
    </button>
  ));
  return <div className="flex space-x-2 items-center">{steps}</div>;
}

export default PaginationDots;
