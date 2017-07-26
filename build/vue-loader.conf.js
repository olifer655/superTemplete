var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var postcssConfig = require('../config/postcss.config')

module.exports = {
  cssModules: {
    localIdentName: '[name]-[local]-[hash:base64:5]',
    camelCase: true,
  },
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
