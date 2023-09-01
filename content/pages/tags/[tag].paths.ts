import YAML from 'yaml'
import fs from 'fs'
import path from 'path'

const postsDir = path.resolve(__dirname, '../../posts')
const fmRegex = /(?<=---\r?\n).*(?=\r?\n---\r?\n)/s

export default {
  paths() {
    const files = fs.readdirSync(postsDir).map((dir) => path.resolve(postsDir, dir, 'index.md'))
    const set = new Set<string>()
    for (const file of files) {
      const md = fs.readFileSync(file, { encoding: 'utf-8' })
      const fm = md.match(fmRegex)
      if (!fm) continue
      const tags = YAML.parse(fm[0]).tags
      if (!tags) continue
      for (const tag of tags)
        set.add(tag.trim())
    }
    return Array.from(set).map(tag => {
      return { params: { tag } }
    })
  }
}