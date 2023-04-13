import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import Tab, { Props as TabData } from './Tab';

export interface Props extends PropsWithChildren {
  tabs?: TabData[];
  onSelect?: (index: number) => void;
  selected?: number | null;
  shadow?: boolean;
}

interface TemplateProps extends PropsWithChildren {
  shadow?: boolean;
}

function Template({ children, shadow = false }: TemplateProps) {
  const template = classNames([
    'z-10 flex px-6 space-x-16 overflow-y-scroll',
    shadow && 'shadow-md',
  ]);
  return <div className={template}>{children}</div>;
}

export function Tabs({
  children,
  tabs = [],
  onSelect = () => {},
  selected = null,
  shadow = false,
}: Props) {
  if (tabs.length > 0) {
    return (
      <Template shadow={shadow}>
        {tabs.map(({ label, icon }, index) => (
          <Tab
            key={label}
            label={label}
            icon={icon}
            onClick={() => onSelect(index)}
            selected={index === selected}
          />
        ))}
      </Template>
    );
  }
  return <Template shadow={shadow}>{children}</Template>;
}

export default Tabs;
