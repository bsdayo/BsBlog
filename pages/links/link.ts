export default interface Link {
  title: string
  url: string
  description?: string
  author?: string
  avatar?: string
  socials?: {
    github?: string
    x?: string
  }
}

// #region me
const me: Link = {
  title: 'SynBlog',
  url: 'https://blog.bsdayo.moe',
  description: '怎么会是呢？',
  author: 'bsdayo',
  avatar: 'https://avatars.githubusercontent.com/u/41754841',
  socials: {
    github: 'bsdayo',
    x: 'konobsdayo',
  },
}
// #endregion me
