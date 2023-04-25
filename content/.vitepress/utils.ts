import container from 'markdown-it-container'

// https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/containers.ts
type ContainerArgs = [typeof container, string, { render: Function }]
export function createContainer(
  klass: string,
  defaultTitle: string,
  md: any // MarkdownIt
): ContainerArgs {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info.trim().slice(klass.length).trim()
        if (token.nesting === 1) {
          const title = md.renderInline(info || defaultTitle)
          if (klass === 'details') {
            return `<details class="${klass} custom-block"><summary>${title}</summary>\n`
          }
          return `<div class="${klass} custom-block"><p class="custom-block-title">${title}</p>\n`
        } else {
          return klass === 'details' ? `</details>\n` : `</div>\n`
        }
      },
    },
  ]
}
