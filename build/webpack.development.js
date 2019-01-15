// local env config from .env
require('dotenv').config()

const merge = require('webpack-merge')

const parts = require('./webpack.parts')
const commonConfig = require('./webpack.common')

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCSS(),
  parts.loadImages()
])

module.exports = merge(commonConfig, developmentConfig)
