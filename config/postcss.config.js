var path = require('path')
module.exports = {
  plugins: [
    require('postcss-import')({
      path: path.join(__dirname, '../../'),
    }),
    require('postcss-nested'),
    require('postcss-cssnext')({
      browsers: [
        'last 2 versions',
        'iOS >= 7',
        'Android >= 4.0',
      ],
    }),
    require('postcss-flex-fallback')
  ],
}
