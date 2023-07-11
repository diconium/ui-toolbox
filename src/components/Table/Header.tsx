import classNames from 'classnames';
import React from 'react';
import { Config } from './Table';

export interface Props {
  header: string;
  config?: Config;
}

export default function Header({ header, config }: Props) {
  const template = classNames(['first:pl-0 last:pr-0 last:w-0 p-2', config?.options?.className]);
  return <th className={template}>{header}</th>;
}
