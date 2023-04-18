import classNames from 'classnames';
import React from 'react';
import Font from './config';

export interface IconProps {
  icon: string;
  className?: string;
  size?: string;
}

export { Font };

const getUnicode = (key: string) => Font[key as keyof typeof Font] || 'NA';

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

  return [];
};

export function Icon({ icon, className = '', size = 'm' }: IconProps) {
  const template = classNames(['toolbox-icons-outlined', className, ...sizeToStyles(size)]);
  return <span className={template}>{getUnicode(`tb-${icon}`)}</span>;
}

export default Icon;
