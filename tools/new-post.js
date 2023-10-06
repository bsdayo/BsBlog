import fs from 'fs'

if (process.argv.length < 3) {
  console.error('Please specify post name!')
  process.exit(-1)
}

const name = process.argv[2]
const dir = `content/posts/${name}`
const file = `${dir}/index.md`

if (fs.existsSync(dir)) {
  console.error('Post already exists!')
  process.exit(-1)
}

const content = `---
title: ${name}
create: ${new Date().toISOString()}
# cover: /img/covers/${name}.webp
---

`

fs.mkdirSync(dir)
fs.writeFileSync(file, content)

console.log(`New post ${name} created.`)
