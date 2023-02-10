---
to: src/components/<%= name %>/<%= name %>.stories.mdx
---
import { Canvas, Meta, Story } from '@storybook/addon-docs';
import <%= name %> from './<%= name %>';

<Meta
  title="Toolbox/<%= name %>"
  component={<%= name %>}
/>

# <%= name %>

To import the `<%= name %>` component simply include the following at the top of your file:

```
import { <%= name %> } from '@dicoauto/toolbox';
```

<Canvas>
  <Story name="Default">
    <<%= name %> />
  </Story>
</Canvas>
