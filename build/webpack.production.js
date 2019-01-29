const merge = require('webpack-merge')
const glob = require('glob')
const paths = require('./paths')

const parts = require('./webpack.parts')
const commonConfig = require('./webpack.common')

const productionConfig = merge([
  {
    output: {
      chunkFilename: 'js/[name].[chunkhash:8].js',
      filename:      'js/[name].[chunkhash:8].js'
    }
  },
  parts.injectScriptToHtml({ isProduction: true }),
  parts.extractCSS({
    use: 'css-loader'
  }),

  // It's essential the purify css plugin is used
  // after the MiniCssExtractPlugin; otherwise, it doesn't work:
  parts.purifyCSS({
    paths: glob.sync(`${paths.appSrc}/**/*.js`, { nodir: true })
  }),
  parts.loadImages({
    options: {
      limit: 10000,
      name:  'assets/images/[name].[hash:8].[ext]'
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
      },
      runtimeChunk: {
        name: 'manifest'
      }
    }
  },

  parts.analyze()

  // parts.loadFile()
  // ** STOP ** Are you adding a new loader?
  // Make sure to add the new loader(s) before the "file" loader.
])

module.exports = merge(commonConfig, productionConfig)
