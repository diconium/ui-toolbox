import React from 'react';
import Avatar, { Props as AvatarProp } from '../Avatar';

export interface Props {
  avatars: AvatarProp[];
}

function Avatars({ avatars }: Props) {
  return (
    <div className="flex">
      {avatars.map(({ link, alt, size, border, state, badge }, index) => (
        <div
          key={link}
          className={index === 0 ? '' : '-ml-5'}
        >
          <Avatar
            link={link}
            alt={alt}
            size={size || 'xl'}
            border={border || "border-toolbox-white"}
            state={state}
            badge={badge}
          />
        </div>
      ))}
    </div>
  );
}

export default Avatars;
