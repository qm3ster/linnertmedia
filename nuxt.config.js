const generatePayload = require('./nuxt/generatePayload')
module.exports = {
  css: ['~/assets/sass/index.scss'],
  modules: ['~/modules/webpack-loaders'],
  generate: {
    dir: 'docs',
    fallback: true,
    async routes() {
      return [...(await generatePayload())]
    }
  }
}
