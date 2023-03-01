import React, { PropsWithChildren, ReactNode, useState } from 'react';

import Template from './Template';
import Heading from './Heading';
import Placeholder from './Placeholder';

export interface Props extends PropsWithChildren {
  title: string;
  subtitle?: string;
  upper?: ReactNode | undefined;
  lower?: ReactNode | undefined;
  opened?: boolean;
  textAlignment?: string;
  selected?: boolean;
}

function ListItem({
  title,
  children,
  subtitle = '',
  upper,
  lower,
  opened = false,
  textAlignment = 'left',
  selected = false,
}: Props) {
  const [isOpen, toggle] = useState(opened);
  const canBeOpened = !!children;
  const renderPlaceholder = upper || lower || canBeOpened;
  const renderSubtitle = textAlignment !== 'center' && subtitle;

  return (
    <Template
      onClick={() => toggle(!isOpen)}
      canBeOpened={canBeOpened}
      selected={selected}
    >
      <div className="flex">
        <div className="flex-grow flex">
          <div className="flex-grow flex items-center">
            <div className="flex-grow flex flex-col">
              <Heading
                title={title}
                textAlignment={textAlignment}
              />
              {renderSubtitle && (
                <div className="text-toolbox-neutral font-semibold text-sm mt-2">{subtitle}</div>
              )}
            </div>
          </div>
          {renderPlaceholder && (
            <div className="flex-shrink flex">
              <Placeholder
                upper={upper}
                lower={lower}
                isOpen={isOpen}
                showChevron={canBeOpened}
              />
            </div>
          )}
        </div>
      </div>
      {canBeOpened && isOpen && <div className="mt-2">{children}</div>}
    </Template>
  );
}

export default ListItem;
