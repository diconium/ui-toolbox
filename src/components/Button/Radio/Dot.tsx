import React from 'react';

export interface Props {
  template?: string;
}

function Dot({ template = 'bg-toolbox-primary' }: Props) {
  return <div className={`w-4 h-4 rounded-full ${template}`} />;
}

export default Dot;
