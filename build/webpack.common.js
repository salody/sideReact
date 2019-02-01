const merge = require('webpack-merge')
const paths = require('./paths')
const parts = require('./webpack.parts')
const variables = require('../env')

const commonConfig = merge([
  parts.loadLESS(),
  parts.loadJavaScript({ include: paths.appSrc }),
  parts.setFreeVariables(variables),
  parts.loadSvg()
])

module.exports = commonConfig
