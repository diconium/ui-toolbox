import classNames from 'classnames';
import React from 'react';
import Badge, { BadgeContainer } from '../Badge';

export interface Props {
  link: string;
  alt: string;
  state?: string;
  size?: string;
  border?: string;
  badge?: number;
}

function State({ state }: { state: string }) {
  return <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${state}`} />;
}

const getTemplate = (size: string) => {
  if (size === 's') {
    return 'w-4 h-4 border';
  }
  if (size === 'm') {
    return 'w-7 h-7 border';
  }
  if (size === 'lg') {
    return 'w-10 h-10 border-2';
  }
  return 'w-14 h-14 border-2';
};

function Avatar({
  link,
  alt,
  state,
  size = 'lg',
  border = 'border-toolbox-primary',
  badge,
}: Props) {
  const template = classNames([getTemplate(size), 'object-cover rounded-full', border]);
  return (
    <div className="relative">
      {badge && (
        <BadgeContainer badge={badge}>
          <Badge
            size={size}
            badge={badge}
          />
        </BadgeContainer>
      )}
      <img
        className={template}
        src={link}
        alt={alt}
      />
      {state && <State state={state} />}
    </div>
  );
}

export default Avatar;
