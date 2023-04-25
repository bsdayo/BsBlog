import { ContentData, createContentLoader } from 'vitepress'

export default createContentLoader('posts/**/index.md')

declare const data: ContentData[]
export { data }
