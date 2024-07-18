import React, { ComponentProps, ReactNode } from 'react';

import Heading from './Heading';
import Placeholder from './Placeholder';
import Template from './Template';

export interface Props extends ComponentProps<'button'> {
  title: string;
  subtitle?: string;
  upper?: ReactNode;
  lower?: ReactNode;
  opened?: boolean;
  onToggle?: (_state: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
  textAlignment?: string;
  selected?: boolean;
  baseTemplate?: string;
}

function ListItem({
  title,
  children,
  subtitle = '',
  upper,
  lower,
  opened = false,
  onToggle = () => {},
  onOpen = () => {},
  onClose = () => {},
  textAlignment = 'left',
  selected = false,
  className,
  baseTemplate = '',
}: Props) {
  const canBeOpened = !!children;
  const renderPlaceholder = upper || lower || canBeOpened;
  const renderSubtitle = textAlignment !== 'center' && subtitle;

  const toggle = () => {
    const next = !opened;
    const callback = next ? onOpen : onClose;
    onToggle(next);
    callback();

    return next;
  };

  return (
    <Template
      onClick={toggle}
      canBeOpened={canBeOpened}
      selected={selected}
      className={className}
      baseTemplate={baseTemplate}
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
                isOpen={opened}
                showChevron={canBeOpened}
              />
            </div>
          )}
        </div>
      </div>
      {canBeOpened && opened && <div className="mt-2">{children}</div>}
    </Template>
  );
}

export default ListItem;
