import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { validationToColor } from './TextField';

/**  for tailwind to generate the appropriate classes
   * Do not remove *
   text-toolbox-feedback-orange text-toolbox-feedback-red
*/

export interface Props extends PropsWithChildren {
  label?: string;
  hint?: string;
  disabled?: boolean;
  validation?: string;
}

const BASE_TEXT = 'text-xs leading-3 px-3 py-1';

function Template({ label, hint, disabled, validation, children }: Props) {
  const mask = classNames(BASE_TEXT, {
    'text-toolbox-neutral-400': !disabled,
    'text-toolbox-neutral-100': disabled,
  });
  return (
    <div className="flex flex-col">
      {label && <span className={mask}>{label}</span>}
      <div className="inline-flex items-center">{children}</div>
      {hint && (
        <span className={classNames(mask, `text-toolbox-feedback-${validationToColor(validation)}`)}>{hint}</span>
      )}
    </div>
  );
}

export default Template;
