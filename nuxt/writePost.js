const { format } = require('path')
const { writeFile, writeJSON } = require('fs-extra')
const { renderMarkdown } = require('./renderMarkdown')
const parse = require('./parsePost')

const writePost = (indir, outdir) => {
  const parsePost = parse(indir)
  return async parsedPath => {
    const { name } = parsedPath

    const { data, content } = await parsePost(parsedPath)
    const JSONPromise = writeJSON(
      format({ dir: outdir, name, ext: '.json' }),
      data
    )
    const HTMLPromise = writeFile(
      format({ dir: outdir, name, ext: '.html' }),
      renderMarkdown(content)
    )
    return Promise.all([JSONPromise, HTMLPromise])
  }
}

module.exports = writePost
