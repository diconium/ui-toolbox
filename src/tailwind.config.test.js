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

  test('defines the correct aliases for important primary colors', () => {
    const alias = config.theme.colors.toolbox.primary[900];
    const aliasAccent = config.theme.colors.toolbox.primary[400];
    const aliasGradient = config.theme.colors.toolbox.primary[50];
    const {
      dominant, DEFAULT, accent, gradient,
    } = config.theme.colors.toolbox.primary;
    expect(DEFAULT).toEqual(alias);
    expect(alias).toEqual(dominant);
    expect(dominant).toEqual(DEFAULT);

    expect(accent).toEqual(aliasAccent);
    expect(gradient).toEqual(aliasGradient);
  });

  test('defines the correct variants for primary colors', () => {
    const colors = config.theme.colors.toolbox.primary;
    expect(colors.DEFAULT).toBeDefined();
    expect(colors.dominant).toBeDefined();
    expect(colors[900]).toBeDefined();
    expect(colors[800]).toBeDefined();
    expect(colors[700]).toBeDefined();
    expect(colors[600]).toBeDefined();
    expect(colors[500]).toBeDefined();
    expect(colors[400]).toBeDefined();
    expect(colors.accent).toBeDefined();
    expect(colors[300]).toBeDefined();
    expect(colors[200]).toBeDefined();
    expect(colors[100]).toBeDefined();
    expect(colors[50]).toBeDefined();
    expect(colors.gradient).toBeDefined();
  });

  test('defines the correct variants for secondary colors', () => {
    const colors = config.theme.colors.toolbox.secondary;
    expect(colors.DEFAULT).toBeDefined();
    expect(colors.dominant).toBeDefined();
    expect(colors[900]).toBeDefined();
    expect(colors[800]).toBeDefined();
    expect(colors[700]).toBeDefined();
    expect(colors[600]).toBeDefined();
    expect(colors[500]).toBeDefined();
    expect(colors[400]).toBeDefined();
    expect(colors.accent).toBeDefined();
    expect(colors[300]).toBeDefined();
    expect(colors[200]).toBeDefined();
    expect(colors[100]).toBeDefined();
    expect(colors[50]).toBeDefined();
    expect(colors.gradient).toBeDefined();
  });

  test('defines the correct variants for neutral colors', () => {
    const colors = config.theme.colors.toolbox.neutral;
    expect(colors.DEFAULT).toBeDefined();
    expect(colors.dominant).toBeDefined();
    expect(colors[900]).toBeDefined();
    expect(colors[800]).toBeDefined();
    expect(colors[700]).toBeDefined();
    expect(colors[600]).toBeDefined();
    expect(colors[500]).toBeDefined();
    expect(colors[400]).toBeDefined();
    expect(colors.accent).toBeDefined();
    expect(colors[300]).toBeDefined();
    expect(colors[200]).toBeDefined();
    expect(colors[100]).toBeDefined();
    expect(colors[50]).toBeDefined();
    expect(colors.gradient).toBeDefined();
  });

  test('defines the correct aliases for important secondary colors', () => {
    const alias = config.theme.colors.toolbox.secondary[900];
    const aliasAccent = config.theme.colors.toolbox.secondary[400];
    const aliasGradient = config.theme.colors.toolbox.secondary[50];
    const {
      dominant, DEFAULT, accent, gradient,
    } = config.theme.colors.toolbox.secondary;
    expect(DEFAULT).toEqual(alias);
    expect(alias).toEqual(dominant);
    expect(dominant).toEqual(DEFAULT);

    expect(accent).toEqual(aliasAccent);
    expect(gradient).toEqual(aliasGradient);
  });

  test('defines the correct additional colors', () => {
    const colors = config.theme.colors.toolbox;
    expect(colors.black).toBeDefined();
    expect(colors.white).toBeDefined();
    expect(colors.feedback).toBeDefined();
    expect(colors.feedback.green).toBeDefined();
    expect(colors.feedback.orange).toBeDefined();
    expect(colors.feedback.red).toBeDefined();
  });
});
