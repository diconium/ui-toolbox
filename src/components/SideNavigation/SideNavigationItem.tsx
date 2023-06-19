import React from 'react';
import classNames from 'classnames';
import Avatar from '../Avatar';
import StateContainer from '../State/StateContainer';
import BadgeContainer from '../Badge/BadgeContainer';
import Icon from '../Icon';

export interface Props {
  avatar?: { link: string; alt: string };
  icon?: { icon: string; size: string };
  state?: string;
  badge?: number;
  label: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const BASE_TEMPLATE = 'flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900';
function SideNavigationItem({
  avatar,
  state,
  icon,
  badge,
  label,
  className,
  onClick
}: Props) {
  const template = classNames(BASE_TEMPLATE, className);
  return (
    <button type="button" className={template} onClick={onClick}>
      {avatar ? (
        <StateContainer
          color={state || 'bg-transparent'}
          size="lg"
        >
          <Avatar link={avatar.link} alt={avatar.alt} />
        </StateContainer>
      ) : null}
      {icon ? (
        <BadgeContainer badge={badge}>
          <Icon
            icon={icon.icon}
            size={icon.size}
            className={icon.size === 'md' ? 'py-1 pr-3' : ''}
          />
        </BadgeContainer>
      ) : null}
      <span className="font-semibold whitespace-nowrap">{label}</span>
    </button>
  );
}

export default SideNavigationItem;
