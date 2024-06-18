import { defineConfig, presetUno } from 'unocss'

function withLevels(name: string, levels: any[]) {
  return levels.map((suffix) => `${name}-${suffix}`)
}

function vpColors(names: string[]) {
  const colors: Record<string, string> = {}
  for (const name of names) {
    colors[name] = `var(--vp-c-${name})`
  }
  return colors
}

export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      ...vpColors([
        // Colors: Solid
        'white',
        'black',
        'neutral',
        'neutral-inverse',

        // Colors: Palette
        ...withLevels('gray', [1, 2, 3, 'soft']),
        ...withLevels('indigo', [1, 2, 3, 'soft']),
        ...withLevels('purple', [1, 2, 3, 'soft']),
        ...withLevels('green', [1, 2, 3, 'soft']),
        ...withLevels('yellow', [1, 2, 3, 'soft']),
        ...withLevels('red', [1, 2, 3, 'soft']),
        'sponsor',

        // Colors: Background
        'bg',
        ...withLevels('bg', ['alt', 'elv', 'soft']),

        // Colors: Borders
        'border',
        'divider',
        'gutter',

        // Colors: Text
        ...withLevels('text', [1, 2, 3]),

        // Colors: Function
        ...withLevels('default', [1, 2, 3, 'soft']),
        ...withLevels('brand', [1, 2, 3, 'soft']),
        ...withLevels('tip', [1, 2, 3, 'soft']),
        ...withLevels('note', [1, 2, 3, 'soft']),
        ...withLevels('success', [1, 2, 3, 'soft']),
        ...withLevels('important', [1, 2, 3, 'soft']),
        ...withLevels('warning', [1, 2, 3, 'soft']),
        ...withLevels('danger', [1, 2, 3, 'soft']),
        ...withLevels('caution', [1, 2, 3, 'soft']),
      ]),
    },
    fontFamily: {
      base: 'var(--vp-font-family-base)',
      mono: 'var(--vp-font-family-mono)',
    },
  },
})
