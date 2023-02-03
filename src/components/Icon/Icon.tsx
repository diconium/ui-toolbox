import React from 'react';
import Font from './config';

export interface IconProps {
  icon: string;
}

export { Font };

const getUnicode = (key: string) => Font[key as keyof typeof Font] || 'NA';

export function Icon({ icon }: IconProps) {
  return <span className="toolbox-icons-outlined">{getUnicode(icon)}</span>;
}

export default Icon;
