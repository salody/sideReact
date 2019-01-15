// local env config from .env
require('dotenv').config()

const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'src')
}

const parts = require('./webpack.parts')
const variables = require('./env')

console.log('==========')
console.log(process.env.NODE_ENV)

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      })
    ]
  },
  parts.loadJavaScript({ include: PATHS.app }),
  parts.setFreeVariables(variables)
])

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
]) // {}

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCSS(),
  parts.loadImages()
])

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode })
  }

  return merge(commonConfig, developmentConfig, { mode })
}
