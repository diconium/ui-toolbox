import React from 'react';
import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toast as IMPORT } from '../../index';
import Toast from './Toast';
import { typeToTextColor } from './utils';

describe('Toast component', () => {
  test('can be imported from the library correctly', () => {
    expect(IMPORT).toBeDefined();
    expect(Toast).toBeDefined();
    expect(IMPORT).toEqual(Toast);
  });

  test('can render the default component correctly', () => {
    render(<Toast label="foo" />);
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });

  test('renders icons corresponding to type correctly', () => {
    const { container: info } = render(
      <Toast
        label="foo"
        type="info"
        icon
      />
    );
    const { container: success } = render(
      <Toast
        label="foo"
        type="success"
        icon
      />
    );
    const { container: warning } = render(
      <Toast
        label="foo"
        type="warning"
        icon
      />
    );
    const { container: error } = render(
      <Toast
        label="foo"
        type="error"
        icon
      />
    );
    const infoIcon = info.querySelector('span');
    const successIcon = success.querySelector('span');
    const warningIcon = warning.querySelector('span');
    const errorIcon = error.querySelector('span');
    expect(infoIcon).not.toBe(null);
    expect(infoIcon?.classList).toContain(typeToTextColor('info'));
    expect(successIcon).not.toBe(null);
    expect(successIcon?.classList).toContain(typeToTextColor('success'));
    expect(warningIcon).not.toBe(null);
    expect(warningIcon?.classList).toContain(typeToTextColor('warning'));
    expect(errorIcon).not.toBe(null);
    expect(errorIcon?.classList).toContain(typeToTextColor('error'));
  });

  test('can render the subtitle correctly', () => {
    render(
      <Toast
        label="foo"
        subtitle="bar"
        filled
      />
    );
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });

  test('calls the onClose function correctly when clicked', async () => {
    const func = jest.fn();
    const user = userEvent.setup();
    render(
      <Toast
        label="bar"
        onClose={func}
      />
    );
    const button = screen.getByRole('button');
    await user.click(button);
    expect(func.mock.calls.length).toBe(1);
  });
});
