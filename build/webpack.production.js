const merge = require('webpack-merge')
const glob = require('glob')
const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'src')
}

const parts = require('./webpack.parts')
const commonConfig = require('./webpack.common')

const productionConfig = merge([
  parts.extractCSS({
    use: 'css-loader'
  }),

  // It's essential the purify css plugin is used
  // after the MiniCssExtractPlugin; otherwise, it doesn't work:
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true })
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name:  '[name].[ext]'
    }
  }),

  // extract a vendor bundle from the node_modules directory
  {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test:   /[\\/]node_modules[\\/]/,
            name:   'vendor',
            chunks: 'initial'
          }
        }
      }
    }
  }
])

module.exports = merge(commonConfig, productionConfig)
