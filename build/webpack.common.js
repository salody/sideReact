const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'src')
}

const parts = require('./webpack.parts')
const variables = require('../env')

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

module.exports = commonConfig
