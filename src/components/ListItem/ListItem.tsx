import React, { ComponentProps, Dispatch, ReactNode, SetStateAction, useState } from 'react';

import Heading from './Heading';
import Placeholder from './Placeholder';
import Template from './Template';

export interface Props extends ComponentProps<'button'> {
  title: string;
  subtitle?: string;
  upper?: ReactNode | undefined;
  lower?: ReactNode | undefined;
  opened?: boolean;
  setOpened?: Dispatch<SetStateAction<boolean>>;
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
  setOpened,
  textAlignment = 'left',
  selected = false,
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(opened);
  const canBeOpened = !!children;
  const renderPlaceholder = upper || lower || canBeOpened;
  const renderSubtitle = textAlignment !== 'center' && subtitle;

  const onToggle = () => {
    setIsOpen((pre) => !pre);
    setOpened?.((pre) => !pre);
  };
  return (
    <Template
      onClick={onToggle}
      canBeOpened={canBeOpened}
      selected={selected}
      className={className}
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
