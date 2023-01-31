import resolveConfig from 'tailwindcss/resolveConfig';
import File from '../tailwind.config';

const config = resolveConfig(File);

describe('Tailwind config', () => {
  test('defines the correct screen breakpoints', () => {
    expect(config.theme.screens).toBeDefined();
    expect(config.theme.screens.sm).toBe('430px');
    expect(config.theme.screens.md).toBe('834px');
    expect(config.theme.screens.lg).toBe('1024px');
    expect(config.theme.screens.xl).toBe('1280px');
  });

  test('defines the correct basic color scheme', () => {
    expect(config.theme.colors.toolbox).toBeDefined();
    expect(config.theme.colors.toolbox.primary).toBeDefined();
    expect(config.theme.colors.toolbox.secondary).toBeDefined();
  });
});
