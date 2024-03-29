import classNames from 'classnames';
import React from 'react';
import BadgeContainer from '../Badge/BadgeContainer';
import StateContainer from '../State/StateContainer';

export interface Props {
  link: string;
  alt: string;
  state?: string;
  size?: string;
  border?: string;
  badge?: number;
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
  if (size === 'xl') {
    return 'w-14 h-14 border-2';
  }
  if (size === '2xl') {
    return 'w-40 h-40 border-2';
  }

return 'w-14 h-14 border-2';
};

const mapStateSize = (size = 'lg') => (size === 'xl' || size === '2xl' ? 'lg' : 'm');

function Avatar({
  link,
  alt,
  state,
  size = 'lg',
  border = 'border-toolbox-primary',
  badge,
}: Props) {
  const template = classNames([getTemplate(size), 'object-cover rounded-full max-w-fit', border]);

return (
    <BadgeContainer
      badge={badge}
      size={size}
    >
      <img
        className={template}
        src={link}
        alt={alt}
      />
      {state && (
        <StateContainer
          color={state}
          size={mapStateSize(size)}
        />
      )}
    </BadgeContainer>
  );
}

export default Avatar;
