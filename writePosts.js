const { resolve, parse } = require('path')
const { mkdirs, readdir } = require('fs-extra')

const writePost = require('./nuxt/writePost')

const indir = resolve(__dirname, './content/blog')
const outdir = resolve(__dirname, './static/_posts')

const main = async () => {
  await mkdirs(outdir)
  const mdNames = await readdir(indir)
  mdNames.map(parse).map(writePost(indir, outdir))
}

main()
