const merge = require('webpack-merge')
const paths = require('./paths')
const parts = require('./webpack.parts')
const variables = require('../env')

const commonConfig = merge([
  {
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
  },
  parts.loadLESS(),
  // parts.loadTypeScript(),
  parts.loadJavaScript({ include: paths.appSrc }),
  parts.setFreeVariables(variables),
  parts.loadSvg(),
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  {
    externals: {
      "react":     "React",
      "react-dom": "ReactDOM"
    }
  }
])

module.exports = commonConfig
