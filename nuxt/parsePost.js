const { format } = require('path')
const { readFile } = require('fs-extra')
const matter = require('gray-matter')

const parsePost = indir => async parsedPath => {
  const { base } = parsedPath

  fileBuffer = await readFile(format({ dir: indir, base }))

  const { data, content } = matter(fileBuffer)
  return { data, content }
}

module.exports = parsePost
