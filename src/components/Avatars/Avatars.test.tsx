import React from 'react';
import { render } from '@testing-library/react';

import Avatars from './Avatars';

describe('Avatars component', () => {
  test('can render the default correctly', () => {
    const { container } = render(
      <Avatars
        avatars={[
          { link: 'https://i.pravatar.cc/150?u=08188', alt: 'Mike' },
          { link: 'https://i.pravatar.cc/150?u=47110', alt: 'Nora' },
          { link: 'https://i.pravatar.cc/150?u=08122', alt: 'Bamia' },
        ]}
      />
    );
    const tags = container.querySelectorAll('img');
    expect(tags.length).toBe(3);
  });
});
