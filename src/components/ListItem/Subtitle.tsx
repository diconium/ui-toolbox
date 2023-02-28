import React, { ReactNode } from 'react';
import Icon from '../Icon';

export interface Props {
  subtitle: string;
  placeholder?: ReactNode | undefined;
  isOpen?: boolean;
  showChevron?: boolean;
}

function Subtitle({ subtitle, placeholder, isOpen, showChevron }: Props) {
  return (
    <div className="flex mt-2">
      <div className="h-5 flex-grow text-toolbox-neutral font-semibold text-sm">{subtitle}</div>
      <div className="flex items-center flex-shrink">
        {placeholder && <div className="mx-2">{placeholder}</div>}
        {showChevron && (
          <Icon
            icon={isOpen ? 'chevron-down' : 'chevron-up'}
            size="s"
          />
        )}
      </div>
    </div>
  );
}

export default Subtitle;
