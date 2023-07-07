import React from 'react';
import Tag from './Tag';

export default {
  title: 'Toolbox/Tag',
  component: Tag,
};

export function Default() {
  return <div className="flex space-x-2">
    <Tag label="ECU-2" />
    <Tag label="Audi" />
    <Tag label="Volkswagen" />
  </div>
}

export function WithAction() {
  return <Tag
    label="Audi"
    onCancel={() => {}}
  />
}
