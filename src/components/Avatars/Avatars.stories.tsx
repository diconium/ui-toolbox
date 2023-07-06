import React from 'react';
import Avatars from './Avatars';

export default {
  title: 'Toolbox/Avatars',
  component: Avatars,
};

export function Default() {
  return (
    <Avatars
      avatars={[
        {
          link: 'https://i.pravatar.cc/150?u=08188',
          alt: 'Mike',
        },
        {
          link: 'https://i.pravatar.cc/150?u=47110',
          alt: 'Nora',
        },
        {
          link: 'https://i.pravatar.cc/150?u=08122',
          alt: 'Bamia',
        },
      ]}
    />
  );
}
