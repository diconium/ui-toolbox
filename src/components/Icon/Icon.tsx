import classNames from 'classnames';
import React from 'react';
import Font, { Automotive } from './config';

export interface IconProps {
  icon: string;
  className?: string;
  size?: string;
}

export { Font, Automotive };

const getUnicode = (key: string) =>
  Font[key as keyof typeof Font] || Automotive[key as keyof typeof Automotive] || 'NA';

const sizeToStyles = (size: string) => {
  if (size === 's') {
    return ['leading-4', 'text-base'];
  }
  if (size === 'lg') {
    return ['leading-10', 'text-[40px]'];
  }
  if (size === 'xl') {
    return ['leading-[56px]', 'text-[56px]'];
  }
  if (size === '2xl') {
    return ['leading-[160px]', 'text-[160px]'];
  }

  return [];
};

export function Icon({ icon, className = '', size = 'm' }: IconProps) {
  const template = classNames(['toolbox-icons-outlined', className, ...sizeToStyles(size)]);
  return <span className={template}>{getUnicode(`tb-${icon}`)}</span>;
}

export default Icon;
