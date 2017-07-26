var path = require('path')

module.exports = {
  plugins: [
    require('postcss-nested')(),
    require('postcss-import')({
      path: [
          './src'
        ]
    }),
    require('postcss-flex-fallback')(),
    require('postcss-px2rem')({
      remUnit: 75,
    }),
    require('autoprefixer')({ browsers: ['last 2 versions'] }),
  ]
}
