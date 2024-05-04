import container from 'markdown-it-container'

// https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/containers.ts

// [typeof container, string, { render: RenderRule }]
type ContainerArgs = [any, string, { render: Function }]

export function createContainer(
  klass: string,
  defaultTitle: string,
  md: any // MarkdownIt
): ContainerArgs {
  return [
    container,
    klass,
    {
      render(tokens: any, idx: any, _options: any, env: any) {
        const token = tokens[idx]
        const info = token.info.trim().slice(klass.length).trim()
        const attrs = md.renderer.renderAttrs(token)
        if (token.nesting === 1) {
          const title = md.renderInline(info || defaultTitle, {
            references: env.references,
          })
          if (klass === 'details')
            return `<details class="${klass} custom-block"${attrs}><summary>${title}</summary>\n`
          return `<div class="${klass} custom-block"${attrs}><p class="custom-block-title">${title}</p>\n`
        } else return klass === 'details' ? `</details>\n` : `</div>\n`
      },
    },
  ]
}
