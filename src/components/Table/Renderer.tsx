import React from 'react';
import Icon from '../Icon/Icon';
import { Content } from './Cell';
import { Config } from './Table';

interface RenderProps {
  content: Content;
}

function getRenderer(config?: Config) {
  if (config?.render === 'icon') {
    return function ({ content }: RenderProps) {
      return (
        <Icon
          icon={content?.value}
          {...config?.options}
        />
      );
    };
  }
  
return function ({ content }: RenderProps) {
    return <span>{content?.value || 'No value provided'}</span>;
  };
}

export default getRenderer;
