---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---

import React from 'react';
import <%= name %> from './<%= name %>';

export default {
  title: 'Toolbox/<%= name %>',
  component: <%= name %>,
};

export function Default() {
  return <<%= name %> />
}