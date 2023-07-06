import React, { useState, PropsWithChildren } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import Dot from '../Dot';
import Icon from '../Icon';

export interface Props extends PropsWithChildren {
  title: string;
  header: string;
  timestamp?: string;
  format?: string;
  read?: boolean;
  onToggle?: (state: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
  disableChevron?: boolean;
}

function Message({
  children,
  title,
  header,
  timestamp,
  format = 'DD.MM.YY - H:mm',
  read = false,
  onToggle = () => {},
  onOpen = () => {},
  onClose = () => {},
  disableChevron = false,
}: Props) {
  const date = dayjs(timestamp);
  const [opened, setState] = useState(false);
  const isSimple = typeof children === 'string' || children instanceof String;
  const template = classNames([
    'max-w-sm bg-toolbox-white rounded-2xl',
    'py-4 px-2',
    read ? 'border border-toolbox-neutral-50' : 'border border-toolbox-primary',
  ]);
  const textTemplate = classNames([
    'flex-1 text-toolbox-neutral text-sm text-left',
    !opened && 'truncate',
  ]);

  return (
    <button
      type="button"
      onClick={() => {
        const next = !opened;
        setState(next);
        onToggle(next);
        if (next) {
          onOpen();
        } else {
          onClose();
        }
      }}
      className={template}
    >
      <div className="flex">
        <div className="flex-1 flex items-center">
          {!read && <Dot size="s" />}
          {read && <div className="w-2" />}
          <div className={`${read ? 'text-toolbox-neutral' : 'text-toolbox-primary'} px-2`}>
            {header}
          </div>
        </div>
        <div className="text-toolbox-neutral">{date.format(format)}</div>
      </div>
      <div className="text-left text-toolbox-neutral font-semibold text-base px-4 my-2">
        {title}
      </div>
      <div className="px-4 flex">
        {isSimple && <p className={textTemplate}>{children}</p>}
        {!isSimple && <div className="flex-1 justify-start text-left">{children}</div>}
        {!disableChevron && (
          <div className="flex items-start justify-center pl-6">
            <Icon
              icon={opened ? 'chevron-down' : 'chevron-up'}
              size="s"
            />
          </div>
        )}
      </div>
    </button>
  );
}

export default Message;
