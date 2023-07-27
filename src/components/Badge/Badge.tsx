import React from 'react';
import classNames from 'classnames';

export interface Props {
  badge?: number;
  size?: string;
}

export const MAX_BADGE_VALUE = 99;
const BASE_TEMPLATE = `bg-toolbox-feedback-red text-toolbox-white text-sm 
  leading-4 font-semibold inline-block
  text-center align-middle`.replace('\n', '');

const sizeToStyle = (size: string) => {
  if (size === 's') {
    return 'w-1 h-1';
  }
  if (size === 'm') {
    return 'w-2 h-2';
  }
  if (size === 'lg') {
    return 'w-3 h-3';
  }
  
return 'w-4 h-4';
};

const normalize = (badge: number) => (badge > MAX_BADGE_VALUE ? `${MAX_BADGE_VALUE}+` : badge);

export const isNormalized = (badge: number) => badge > MAX_BADGE_VALUE;
export const isSingleDegit = (badge: number) => badge < 10;

const getWithBadgeWidth = (badge: number) => {
  if (isSingleDegit(badge)) {
    return 'w-4';
  }
  if (isNormalized(badge)) {
    return 'w-8';
  }
  
return 'w-7';
};

export function Badge({ badge, size = 'lg' }: Props) {
  const show = badge && ['lg', 'xl'].includes(size);
  const template = classNames([
    BASE_TEMPLATE,
    show ? `${getWithBadgeWidth(badge)} h-4` : sizeToStyle(size),
    show ? 'rounded-lg' : 'rounded-full',
  ]);
  
return <span className={template}>{show && normalize(badge)}</span>;
}

export default Badge;
