const { resolve, parse, format } = require('path')
const { mkdirs, readdir } = require('fs-extra')

const indir = resolve(__dirname, '../content/blog')

const { renderMarkdown } = require('./renderMarkdown')
const parsePost = require('./parsePost')(indir)

const generatePayload = async () => {
  const mdNames = await readdir(indir)
  const parsedNames = mdNames.map(parse)
  const routes = []
  for (const parsedName of parsedNames) {
    const { data, content } = await parsePost(parsedName)
    routes.push({
      route: `/Blog/${parsedName.name}`,
      payload: { data, article: renderMarkdown(content) }
    })
  }
  return routes
}

module.exports = generatePayload
