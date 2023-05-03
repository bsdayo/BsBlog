import { BsBlogThemeConfig } from 'theme'
import { ContentData, useData } from 'vitepress'

export function formatTime(
  timestamp: number,
  withTime: boolean = false
): string {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  const str = `${year}.${month}.${day}`
  return withTime ? str + ` ${hour}:${minute}` : str
}

export function normalizeRelativePath(path: string) {
  return '/' + path.replace('index.md', '')
}

export function getPostFromFrontmatter(frontmatter: Record<string, any>) {
  return {
    title: frontmatter.title ?? 'Untitled Post',
    cover: frontmatter.cover,
    description: frontmatter.description,
    create: frontmatter.create
      ? new Date(frontmatter.create).getTime()
      : Date.now(),
    tags: frontmatter.tags ?? [],
    categories: frontmatter.categories ?? [],
  }
}

export function getPostFromData(post: ContentData) {
  return {
    ...post,
    ...getPostFromFrontmatter(post.frontmatter),
    url: post.url.replace('index.html', ''),
    id: /(?<=\/posts\/).*(?=\/)/.exec(post.url)![0],
  }
}

export async function getRandomMoe(
  size: 'original' | 'regular' | 'small' | 'thumb' | 'mini'
) {
  const {
    theme: {
      value: { loliconHost },
    },
  } = useData<BsBlogThemeConfig>()
  const host = loliconHost ?? 'api.lolicon.app'

  // 就不开 r18，给你一拳
  // 就要萝莉！就要萝莉！
  const resp = await fetch(
    `https://${host}/setu/v2?r18=0&tag=萝莉&size=${size}`
  )
  return (await resp.json()).data[0].urls[size]
}
