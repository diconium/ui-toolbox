import React from 'react';
import Font from './config';

export interface IconProps {
  icon: string;
  className?: string;
}

export { Font };

const getUnicode = (key: string) => Font[key as keyof typeof Font] || 'NA';

export function Icon({ icon, className = '' }: IconProps) {
  return <span className={`toolbox-icons-outlined ${className}`}>{getUnicode(icon)}</span>;
}

export default Icon;
