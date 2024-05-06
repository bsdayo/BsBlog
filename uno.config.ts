import { defineConfig, presetUno } from 'unocss'
import presetShadcnVitePress from './uno.shadcn'
import presetAnimations from 'unocss-preset-animations'

function vpColor(name: string) {
  return {
    [`${name}-1`]: `var(--vp-c-${name}-1)`,
    [`${name}-2`]: `var(--vp-c-${name}-2)`,
    [`${name}-3`]: `var(--vp-c-${name}-3)`,
    [`${name}-soft`]: `var(--vp-c-${name}-soft)`,
  }
}

export default defineConfig({
  presets: [presetUno(), presetAnimations(), presetShadcnVitePress()],

  // From https://github.com/fisand/unocss-preset-shadcn?tab=readme-ov-file#quick-start
  // Should we add these?
  shortcuts: [
    {
      'animate-accordion-up': 'accordion-up',
      'animate-accordion-down': 'accordion-down',
    },
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        '**/*.{js,ts}',
      ],
    },
  },
  theme: {
    // TODO: merge uno.shadcn.ts with this file
    colors: {
      ...vpColor('brand'),
      ...vpColor('bg'),
    },
    fontFamily: {
      mono: 'var(--vp-font-family-mono)',
    },
  },
})
