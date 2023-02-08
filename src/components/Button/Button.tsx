import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';

export interface Props extends PropsWithChildren {
  onClick?: () => void;
  disabled?: boolean;
  outlined?: boolean;
  baseTemplate?: string;
  defaultTemplate?: string;
  outlinedTemplate?: string;
}

const BASE_TEMPLATE = 'text-base max-w-xs font-semibold uppercase px-20 py-4 rounded-2xl';

const DEFAULT_TEMPLATE = `text-toolbox-white bg-toolbox-neutral hover:bg-toolbox-neutral-600 
  active:bg-toolbox-neutral-600 active:text-toolbox-neutral-600 
  focus:outline-none focus-visible:border-toolbox-neutral-300 focus-visible:border-3 
  focus-visible:bg-toolbox-neutral visited:underline visited:underline-offset-2 
  disabled:bg-toolbox-neutral-200 disabled:text-toolbox-white disabled:cursor-not-allowed`;

const OUTLINED_TEMPLATE = `bg-white border-3 border-toolbox-neutral text-toolbox-black
  hover:bg-toolbox-neutral-600 hover:text-toolbox-white
  active:bg-toolbox-neutral active:border-none active:text-toolbox-white
  focus:outline-none focus-visible:border-3 focus-visible:border-toolbox-neutral-300 focus-visible:text-toolbox-neutral
  visited:underline visited:underline-offset-2
  disabled:text-toolbox-neutral-200 disabled:border-toolbox-neutral-200 disabled:cursor-not-allowed
  disabled:hover:bg-white`;

function Button({
  children,
  onClick = () => {},
  disabled = false,
  outlined,
  baseTemplate = BASE_TEMPLATE,
  defaultTemplate = DEFAULT_TEMPLATE,
  outlinedTemplate = OUTLINED_TEMPLATE,
}: Props) {
  const template = !outlined ? defaultTemplate : outlinedTemplate;
  const classes = classnames(baseTemplate, template);
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
