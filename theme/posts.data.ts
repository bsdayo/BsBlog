import { createContentLoader } from 'vitepress'
import { getPostFromContentData } from "./utils"
import { Post } from "./types/common";

const loader = createContentLoader('posts/**/index.md')
export default {
  ...loader,
  async load() {
    const data = await loader.load()
    return data.map(getPostFromContentData);
  }
}

declare const data: Post[]
export { data }
