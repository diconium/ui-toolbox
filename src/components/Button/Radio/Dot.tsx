import React from 'react';

export interface Props {
  template?: string;
}

function Dot({ template = 'bg-toolbox-primary' }: Props) {
  return <div className={`w-5 h-5 rounded-full ${template}`} />;
}

export default Dot;
