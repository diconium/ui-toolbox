import classNames from 'classnames';
import React from 'react';
import Icon from '../Icon';
import { typeToColor, typeToBorderColor, typeToIcon, typeToTextColor } from './utils';

export interface Props {
  label: string;
  subtext?: string;
  type?: string;
  onClose?: () => void;
  icon?: boolean;
  filled?: boolean;
}

function Toast({
  label,
  subtext = '',
  type = 'info',
  onClose = () => {},
  icon = false,
  filled = false,
}: Props) {
  const template = classNames([
    'flex items-center max-w-sm px-6 py-4',
    'rounded-2xl border-2 box-border',
    typeToBorderColor(type),
    typeToColor(type, filled),
  ]);
  return (
    <div className={template}>
      <div className="flex-1 flex items-center">
        {icon && (
          <Icon
            className={classNames(typeToTextColor(type, filled), 'mr-3')}
            icon={typeToIcon(type)}
            size="s"
          />
        )}
        {!subtext && (
          <div
            className={classNames('text-toolbox-neutral leading-5 text-base', {
              'text-toolbox-white': filled,
            })}
          >
            {label}
          </div>
        )}
        {subtext && (
          <div className="flex flex-col">
            <div
              className={classNames('text-toolbox-neutral leading-6 text-base font-semibold', {
                'text-toolbox-white': filled,
              })}
            >
              {label}
            </div>
            <div
              className={classNames('text-toolbox-neutral leading-5 text-base', {
                'text-toolbox-white': filled,
              })}
            >
              {subtext}
            </div>
          </div>
        )}
      </div>
      <button
        className="flex items-center"
        type="button"
        onClick={() => onClose()}
      >
        <Icon
          className={classNames({ 'text-toolbox-white': filled })}
          icon="xmark"
          size="s"
        />
      </button>
    </div>
  );
}

export default Toast;
