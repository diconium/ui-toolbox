import classNames from 'classnames';
import React from 'react';
import Icon from '../Icon';
import { typeToColor, typeToBorderColor, typeToIcon, typeToTextColor } from './utils';

export interface Props {
  label: string;
  subtitle?: string;
  type?: string;
  onClose?: () => void;
  icon?: boolean;
  filled?: boolean;
}

function Header({ label, filled }: { label: string; filled: boolean }) {
  const optional = {
    'text-toolbox-white': filled,
  };
  const template = classNames(['text-toolbox-neutral leading-5 text-base', optional]);

return <div className={template}>{label}</div>;
}

function HeaderWithSubtitle({
  label,
  subtitle,
  filled,
}: {
  label: string;
  subtitle: string;
  filled: boolean;
}) {
  const base = 'text-toolbox-neutral text-base';
  const optional = {
    'text-toolbox-white': filled,
  };

return (
    <div className="flex flex-col">
      <div className={classNames(base, 'leading-6 font-semibold', optional)}>{label}</div>
      <div className={classNames(base, 'leading-5', optional)}>{subtitle}</div>
    </div>
  );
}

function Toast({
  label,
  subtitle = '',
  type = 'info',
  onClose = () => {},
  icon = false,
  filled = false,
}: Props) {
  const template = classNames([
    'flex items-center px-6 py-4',
    'rounded-2xl border box-border',
    typeToBorderColor(type),
    typeToColor(type, filled),
    subtitle ? 'h-20' : 'h-13',
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
        {!subtitle && (
          <Header
            label={label}
            filled={filled}
          />
        )}
        {subtitle && (
          <HeaderWithSubtitle
            label={label}
            subtitle={subtitle}
            filled={filled}
          />
        )}
      </div>
      <button
        className="flex items-center"
        type="button"
        onClick={() => onClose()}
        aria-label="Close"
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
