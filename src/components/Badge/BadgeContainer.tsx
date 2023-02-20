import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import Badge, { isNormalized, isSingleDegit } from './Badge';

interface ContainerProps extends PropsWithChildren {
  badge?: number;
  size?: string;
}

function BadgeContainer({ badge, size = 'lg', children }: ContainerProps) {
  const template = classNames([
    'absolute top-0 right-0 -mt-1',
    badge && isSingleDegit(badge) && 'mr-0.5',
    badge && !isSingleDegit(badge) && !isNormalized(badge) && '-mr-2',
    badge && isNormalized(badge) && '-mr-3',
  ]);

  return (
    <div className="relative inline-block">
      {badge && (
        <div className={template}>
          <Badge
            size={size}
            badge={badge}
          />
        </div>
      )}
      {children}
    </div>
  );
}

export default BadgeContainer;
