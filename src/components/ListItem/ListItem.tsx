import React, { PropsWithChildren, ReactNode, useState } from 'react';

import Template from './Template';
import Heading from './Heading';
import Subtitle from './Subtitle';

export interface Props extends PropsWithChildren {
  title: string;
  subtitle?: string;
  right?: ReactNode | undefined;
  rightBottom?: ReactNode | undefined;
  opened?: boolean;
  textAlignment?: string;
}

function ListItem({
  title,
  children,
  subtitle = '',
  right,
  rightBottom,
  opened = false,
  textAlignment = 'left',
}: Props) {
  const [isOpen, toggle] = useState(opened);
  const canBeOpened = !!children;

  return (
    <Template
      onClick={() => toggle(!isOpen)}
      canBeOpened={canBeOpened}
    >
      <div className="flex">
        <div className="flex-grow flex flex-col">
          <Heading
            title={title}
            placeholder={right}
            textAlignment={textAlignment}
          />
          {textAlignment !== 'center' && (
            <Subtitle
              subtitle={subtitle}
              placeholder={rightBottom}
              isOpen={isOpen}
              showChevron={canBeOpened}
            />
          )}
        </div>
      </div>
      {canBeOpened && isOpen && <div className="mt-2">{children}</div>}
    </Template>
  );
}

export default ListItem;
