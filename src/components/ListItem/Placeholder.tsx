import React, { ReactNode } from 'react';
import Icon from '../Icon';

export interface Props {
  upper?: ReactNode | undefined;
  lower?: ReactNode | undefined;
  isOpen?: boolean;
  showChevron?: boolean;
}

function Placeholder({ upper, lower, isOpen, showChevron }: Props) {
  const showLower = lower || showChevron;

  return (
    <div className="flex flex-col items-end">
      {upper && <div className="flex space-x-1">{upper}</div>}
      {showLower && (
        <div className="flex justify-end mt-2">
          {lower && <div className="flex space-x-1 mx-2">{lower}</div>}
          {showChevron && (
            <div className="shrink flex items-center justify-end">
              <Icon
                icon={isOpen ? 'chevron-down' : 'chevron-up'}
                size="s"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Placeholder;
