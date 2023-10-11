---
to: src/components/<%= name %>/<%= name %>.mdx
---

import { Canvas, Meta, Story } from '@storybook/blocks';
import <%= name %> from './<%= name %>';
import * as <%= name %>Stories from './<%= name %>.stories';

<Meta of={<%= name %>Stories} />

# <%= name %>

To import the `<%= name %>` component simply include the following at the top of your file:

```
import { <%= name %> } from '@diconium/ui-toolbox';
```

## Default

<Canvas of={<%= name %>Stories.Default} />
