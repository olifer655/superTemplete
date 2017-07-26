const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssConfig = require('./postcss.config')
const IS_DEV = process.env.npm_lifecycle_event === 'dev'

module.exports = {
  getCssRuleLoader() {
    const cssLoaders = [
      {
        loader: 'css-loader',
        options: {
          minimize: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return postcssConfig.plugins
          },
        },
      }
    ]
    return IS_DEV
      ? [
        { loader: 'style-loader', },
      ].concat(cssLoaders)
      : ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: cssLoaders,
      })
  }
}
