import fs from 'fs'
import path from 'path'
import container from 'markdown-it-container'

import { Post } from '../../theme'

export function indexPosts(): Post[] {
  const posts: Post[] = []
  const fmRegex = /(?<=---\s).*(?=.*\s---)/s
  const titleRegex = /(?<=^title:\s).*/m
  const createRegex = /(?<=^create:\s).*/m
  const coverRegex = /(?<=^cover:\s).*/m
  const h1Regex = /(?<=#\s).*/

  for (const postDir of fs.readdirSync('content/posts')) {
    const content = fs.readFileSync(
      path.resolve('content/posts', postDir, 'index.md'),
      {
        encoding: 'utf-8',
      }
    )
    const fmMatch = fmRegex.exec(content)
    if (!fmMatch) continue

    const titleMatch = titleRegex.exec(fmMatch[0])
    const createMatch = createRegex.exec(fmMatch[0])
    const coverMatch = coverRegex.exec(fmMatch[0])
    const h1Match = h1Regex.exec(content)

    posts.push({
      id: postDir,
      title: titleMatch
        ? titleMatch[0]
        : h1Match
        ? h1Match[0]
        : 'Untitled Post',
      create: createMatch ? new Date(createMatch[0]).getTime() : Date.now(),
      cover: coverMatch ? coverMatch[0] : undefined,
    })
  }

  return posts.sort((a, b) => b.create - a.create)
}

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
