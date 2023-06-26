import classNames from 'classnames';
import React from 'react';
import { Config } from './Table';
import getRenderer from './Renderer';

export interface Content {
  value: string;
  id: string;
}
export interface Props {
  content: Content;
  config?: Config;
}

export default function Cell({ content, config }: Props) {
  const template = classNames(['first:pl-0 last:pr-0 p-2 last:w-0', config?.options?.className]);
  const Component = getRenderer(config);
  return (
    <td className={template}>
      <Component content={content} />
    </td>
  );
}
