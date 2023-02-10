---
to: src/components/<%= name %>/<%= name %>.tsx
---
import React from 'react';

export interface Props {}

function <%= name %>({}: Props) {
  return (
    <div><%= name %></div>
  );
}

export default <%= name %>;
